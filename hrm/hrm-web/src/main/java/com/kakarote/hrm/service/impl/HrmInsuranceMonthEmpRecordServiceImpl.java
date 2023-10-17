package com.kakarote.hrm.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.date.DateTime;
import cn.hutool.core.date.DateUtil;
import com.aliyun.openservices.shade.com.google.common.collect.Range;
import com.kakarote.common.log.entity.OperationLog;
import com.kakarote.core.entity.BasePage;
import com.kakarote.core.servlet.BaseServiceImpl;
import com.kakarote.core.utils.TransferUtil;
import com.kakarote.hrm.common.EmployeeHolder;
import com.kakarote.hrm.entity.BO.AddInsuranceEmpBO;
import com.kakarote.hrm.entity.BO.QueryEmpInsuranceMonthBO;
import com.kakarote.hrm.entity.BO.QueryInsuranceRecordListBO;
import com.kakarote.hrm.entity.BO.UpdateInsuranceProjectBO;
import com.kakarote.hrm.entity.PO.*;
import com.kakarote.hrm.entity.VO.EmpInsuranceByIdVO;
import com.kakarote.hrm.entity.VO.QueryEmpInsuranceMonthVO;
import com.kakarote.hrm.entity.VO.SimpleHrmEmployeeVO;
import com.kakarote.hrm.mapper.HrmInsuranceMonthEmpRecordMapper;
import com.kakarote.hrm.mapper.HrmInsuranceSchemeMapper;
import com.kakarote.hrm.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * <p>
 * 员工每月社保记录 服务实现类
 * </p>
 *
 * @author zhangzhiwei
 * @since 2020-05-26
 */
@Service
public class HrmInsuranceMonthEmpRecordServiceImpl extends BaseServiceImpl<HrmInsuranceMonthEmpRecordMapper, HrmInsuranceMonthEmpRecord> implements IHrmInsuranceMonthEmpRecordService {


    @Autowired
    private HrmInsuranceMonthEmpRecordMapper monthEmpRecordMapper;

    @Autowired
    private IHrmInsuranceSchemeService schemeService;

    @Autowired
    private IHrmEmployeeService employeeService;

    @Autowired
    private IHrmEmployeeSocialSecurityService socialSecurityService;

    @Autowired
    private IHrmInsuranceMonthEmpProjectRecordService empProjectRecordService;

    @Autowired
    private IHrmInsuranceProjectService projectService;

    @Autowired
    private IHrmInsuranceMonthRecordService monthRecordService;

    @Autowired
    private HrmInsuranceSchemeMapper insuranceSchemeMapper;


    @Override
    public BasePage<QueryEmpInsuranceMonthVO> queryEmpInsuranceMonth(QueryEmpInsuranceMonthBO queryEmpInsuranceMonthBO) {
        BasePage<QueryEmpInsuranceMonthVO> page = monthEmpRecordMapper.queryEmpInsuranceMonth(queryEmpInsuranceMonthBO.parse(), queryEmpInsuranceMonthBO);
        return page;
    }

    @Override
    public EmpInsuranceByIdVO queryById(String iempRecordId) {
        EmpInsuranceByIdVO empInsuranceByIdVO = new EmpInsuranceByIdVO();
        HrmInsuranceMonthEmpRecord insuranceMonthEmpRecord = getById(iempRecordId);
        HrmInsuranceScheme scheme = schemeService.getById(insuranceMonthEmpRecord.getSchemeId());
        if (scheme == null) {
            return empInsuranceByIdVO;
        }
        empInsuranceByIdVO.setSchemeId(scheme.getSchemeId());
        empInsuranceByIdVO.setSchemeName(scheme.getSchemeName());
        empInsuranceByIdVO.setCity(scheme.getCity());
        empInsuranceByIdVO.setSchemeType(scheme.getSchemeType());
        HrmEmployee employee = employeeService.getById(insuranceMonthEmpRecord.getEmployeeId());
        empInsuranceByIdVO.setIdNumber(employee.getIdNumber());
        Optional<HrmEmployeeSocialSecurityInfo> socialSecurityInfoOpt = socialSecurityService.lambdaQuery().eq(HrmEmployeeSocialSecurityInfo::getEmployeeId, insuranceMonthEmpRecord.getEmployeeId()).oneOpt();
        if (socialSecurityInfoOpt.isPresent()) {
            HrmEmployeeSocialSecurityInfo socialSecurityInfo = socialSecurityInfoOpt.get();
            empInsuranceByIdVO.setAccumulationFundNum(socialSecurityInfo.getAccumulationFundNum());
            empInsuranceByIdVO.setSocialSecurityNum(socialSecurityInfo.getSocialSecurityNum());
        }
        List<HrmInsuranceMonthEmpProjectRecord> empProjectList = empProjectRecordService.lambdaQuery().eq(HrmInsuranceMonthEmpProjectRecord::getIEmpRecordId, iempRecordId).list();
        List<EmpInsuranceByIdVO.HrmInsuranceProjectBO> hrmInsuranceProjectBOS = TransferUtil.transferList(empProjectList, EmpInsuranceByIdVO.HrmInsuranceProjectBO.class);
        Range<Integer> socialSecurityClosed = Range.closed(1, 9);
        Range<Integer> providentFundClosed = Range.closed(10, 11);
        List<EmpInsuranceByIdVO.HrmInsuranceProjectBO> socialSecurityList = new ArrayList<>();
        List<EmpInsuranceByIdVO.HrmInsuranceProjectBO> providentFundList = new ArrayList<>();
        hrmInsuranceProjectBOS.forEach(project -> {
            if (socialSecurityClosed.contains(project.getType())) {
                socialSecurityList.add(project);
            } else if (providentFundClosed.contains(project.getType())) {
                providentFundList.add(project);
            }
        });
        empInsuranceByIdVO.setSocialSecurityList(socialSecurityList);
        empInsuranceByIdVO.setProvidentFundList(providentFundList);
        return empInsuranceByIdVO;
    }

    @Override
    public List<OperationLog> stop(List<Long> ids) {

        List<OperationLog> operationLogList = new ArrayList<>();

        List<HrmInsuranceMonthEmpRecord> hrmInsuranceMonthEmpRecords = listByIds(ids);
        List<Long> employeeIds = hrmInsuranceMonthEmpRecords.stream().map(HrmInsuranceMonthEmpRecord::getEmployeeId).collect(Collectors.toList());

        List<HrmEmployee> hrmEmployees = employeeService.listByIds(employeeIds);
        Map<Long, HrmEmployee> employeeMap = hrmEmployees.stream().collect(Collectors.toMap(HrmEmployee::getEmployeeId, hrmEmployee -> hrmEmployee));

        hrmInsuranceMonthEmpRecords.forEach(monthEmpRecord -> {
            OperationLog operationLog = new OperationLog();
            operationLog.setOperationObject(monthEmpRecord.getYear() + "年" + monthEmpRecord.getMonth() + "月社保表");
            operationLog.setOperationInfo("为" + employeeMap.get(monthEmpRecord.getEmployeeId()).getEmployeeName() + "停止参保");
            operationLogList.add(operationLog);
        });

        lambdaUpdate().set(HrmInsuranceMonthEmpRecord::getStatus, 0).in(HrmInsuranceMonthEmpRecord::getIEmpRecordId, ids).update();
        return operationLogList;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public OperationLog updateInsuranceProject(UpdateInsuranceProjectBO updateInsuranceProjectBO) {
        Long iEmpRecordId = updateInsuranceProjectBO.getIEmpRecordId();
        Long schemeId = updateInsuranceProjectBO.getSchemeId();
        //删除之前的参保项目
        empProjectRecordService.lambdaUpdate().eq(HrmInsuranceMonthEmpProjectRecord::getIEmpRecordId, iEmpRecordId).remove();
        HrmInsuranceScheme scheme = schemeService.getById(schemeId);
        Integer schemeType = scheme.getSchemeType();
        List<UpdateInsuranceProjectBO.Project> projectList = updateInsuranceProjectBO.getProjectList();
        List<HrmInsuranceMonthEmpProjectRecord> projectRecordList = new ArrayList<>();
        for (UpdateInsuranceProjectBO.Project project : projectList) {
            HrmInsuranceProject insuranceProject = projectService.getById(project.getProjectId());
            HrmInsuranceMonthEmpProjectRecord hrmInsuranceMonthEmpProjectRecord = BeanUtil.copyProperties(insuranceProject, HrmInsuranceMonthEmpProjectRecord.class);
            hrmInsuranceMonthEmpProjectRecord.setIEmpRecordId(iEmpRecordId);
            if (schemeType == 1) {
                //比例
                BigDecimal defaultAmount = project.getDefaultAmount();
                hrmInsuranceMonthEmpProjectRecord.setDefaultAmount(defaultAmount);
                hrmInsuranceMonthEmpProjectRecord.setCorporateAmount(defaultAmount.multiply(insuranceProject.getCorporateProportion().divide(new BigDecimal(100), 4, BigDecimal.ROUND_UP)));
                hrmInsuranceMonthEmpProjectRecord.setPersonalAmount(defaultAmount.multiply(insuranceProject.getPersonalProportion().divide(new BigDecimal(100), 4, BigDecimal.ROUND_UP)));
            } else {
                //金额
                hrmInsuranceMonthEmpProjectRecord.setCorporateAmount(project.getCorporateAmount());
                hrmInsuranceMonthEmpProjectRecord.setPersonalAmount(project.getPersonalAmount());
            }
            projectRecordList.add(hrmInsuranceMonthEmpProjectRecord);
        }
        empProjectRecordService.saveBatch(projectRecordList);
        Map<String, Object> map = empProjectRecordService.queryProjectCount(iEmpRecordId);
        HrmInsuranceMonthEmpRecord empRecord = getById(iEmpRecordId);

        HrmEmployee employee = employeeService.getById(empRecord.getEmployeeId());

        OperationLog operationLog = new OperationLog();
        operationLog.setOperationObject(empRecord.getYear() + "年" + empRecord.getMonth() + "月社保表");
        operationLog.setOperationInfo("为" + employee.getEmployeeName() + "修改参保方案：" + scheme.getSchemeName());

        BeanUtil.fillBeanWithMap(map, empRecord, true);
        empRecord.setSchemeId(schemeId);
        updateById(empRecord);
        Optional<HrmEmployeeSocialSecurityInfo> socialSecurityInfoOpt = socialSecurityService.lambdaQuery().eq(HrmEmployeeSocialSecurityInfo::getEmployeeId, empRecord.getEmployeeId()).oneOpt();
        if (socialSecurityInfoOpt.isPresent()) {
            socialSecurityService.lambdaUpdate().set(HrmEmployeeSocialSecurityInfo::getSchemeId, schemeId).eq(HrmEmployeeSocialSecurityInfo::getEmployeeId, empRecord.getEmployeeId()).update();
        } else {
            HrmEmployeeSocialSecurityInfo hrmEmployeeSocialSecurityInfo = new HrmEmployeeSocialSecurityInfo();
            hrmEmployeeSocialSecurityInfo.setEmployeeId(empRecord.getEmployeeId());
            hrmEmployeeSocialSecurityInfo.setSchemeId(schemeId);
            socialSecurityService.save(hrmEmployeeSocialSecurityInfo);
        }
        return operationLog;
    }

    @Override
    public List<OperationLog> addInsuranceEmp(AddInsuranceEmpBO addInsuranceEmpBO) {
        Long iRecordId = addInsuranceEmpBO.getIRecordId();
        HrmInsuranceMonthRecord monthRecord = monthRecordService.getById(iRecordId);

        List<OperationLog> operationLogList = new ArrayList<>();
        List<HrmInsuranceMonthEmpRecord> collect = addInsuranceEmpBO.getEmployeeIds().stream().map(employeeId -> {
            HrmEmployee hrmEmployee = employeeService.getById(employeeId);
            OperationLog operationLog = new OperationLog();
            operationLog.setOperationObject(monthRecord.getYear() + "年" + monthRecord.getMonth() + "月社保表");
            operationLog.setOperationInfo("在" + operationLog.getOperationObject() + "添加参保人员：" + hrmEmployee.getEmployeeName());
            operationLogList.add(operationLog);


            Optional<HrmInsuranceMonthEmpRecord> insuranceMonthEmpRecordOpt = lambdaQuery().eq(HrmInsuranceMonthEmpRecord::getEmployeeId, employeeId)
                    .eq(HrmInsuranceMonthEmpRecord::getIRecordId, iRecordId)
                    .oneOpt();
            if (insuranceMonthEmpRecordOpt.isPresent()) {
                HrmInsuranceMonthEmpRecord monthEmpRecord = insuranceMonthEmpRecordOpt.get();
                empProjectRecordService.lambdaUpdate().eq(HrmInsuranceMonthEmpProjectRecord::getIEmpRecordId, monthEmpRecord.getIEmpRecordId()).remove();
                Optional<HrmEmployeeSocialSecurityInfo> socialSecurityInfoOpt = socialSecurityService.lambdaQuery().eq(HrmEmployeeSocialSecurityInfo::getEmployeeId, employeeId).oneOpt();
                if (socialSecurityInfoOpt.isPresent() && socialSecurityInfoOpt.get().getSchemeId() != null) {
                    Long schemeId = socialSecurityInfoOpt.get().getSchemeId();
                    List<HrmInsuranceProject> insuranceProjectList = projectService.lambdaQuery().eq(HrmInsuranceProject::getSchemeId, schemeId).list();
                    List<HrmInsuranceMonthEmpProjectRecord> monthEmpProjectRecordList = TransferUtil.transferList(insuranceProjectList, HrmInsuranceMonthEmpProjectRecord.class);
                    monthEmpProjectRecordList.forEach(monthEmpProjectRecord -> {
                        monthEmpProjectRecord.setIEmpRecordId(monthEmpRecord.getIEmpRecordId());
                    });
                    empProjectRecordService.saveBatch(monthEmpProjectRecordList);
                    monthEmpRecord.setStatus(1);
                    monthEmpRecord.setSchemeId(schemeId);
                    Map<String, Object> stringObjectMap = insuranceSchemeMapper.queryInsuranceSchemeCountById(schemeId);
                    BeanUtil.fillBeanWithMap(stringObjectMap, monthEmpRecord, true);
                } else {
                    monthEmpRecord.setIRecordId(iRecordId);
                    monthEmpRecord.setEmployeeId(employeeId);
                    monthEmpRecord.setYear(monthRecord.getYear());
                    monthEmpRecord.setMonth(monthRecord.getMonth());
                    monthEmpRecord.setPersonalInsuranceAmount(new BigDecimal("0"));
                    monthEmpRecord.setPersonalProvidentFundAmount(new BigDecimal("0"));
                    monthEmpRecord.setCorporateInsuranceAmount(new BigDecimal("0"));
                    monthEmpRecord.setCorporateProvidentFundAmount(new BigDecimal("0"));
                    monthEmpRecord.setStatus(1);
                }
                return monthEmpRecord;
            } else {
                HrmInsuranceMonthEmpRecord monthEmpRecord = new HrmInsuranceMonthEmpRecord();
                monthEmpRecord.setIRecordId(iRecordId);
                monthEmpRecord.setEmployeeId(employeeId);
                monthEmpRecord.setYear(monthRecord.getYear());
                monthEmpRecord.setMonth(monthRecord.getMonth());
                monthEmpRecord.setPersonalInsuranceAmount(new BigDecimal("0"));
                monthEmpRecord.setPersonalProvidentFundAmount(new BigDecimal("0"));
                monthEmpRecord.setCorporateInsuranceAmount(new BigDecimal("0"));
                monthEmpRecord.setCorporateProvidentFundAmount(new BigDecimal("0"));
                monthEmpRecord.setStatus(1);
                return monthEmpRecord;
            }
        }).collect(Collectors.toList());
        saveOrUpdateBatch(collect);
        monthRecord.setNum(addInsuranceEmpBO.getEmployeeIds().size() + monthRecord.getNum());
        monthRecordService.updateById(monthRecord);
        return operationLogList;
    }

    @Override
    public List<SimpleHrmEmployeeVO> queryNoInsuranceEmp(Long iRecordId) {
        HrmInsuranceMonthRecord monthRecord = monthRecordService.getById(iRecordId);
        DateTime dateTime = DateUtil.parseDate(monthRecord.getYear() + "-" + monthRecord.getMonth() + "-" + "01");
        return monthEmpRecordMapper.queryNoInsuranceEmp(iRecordId, DateUtil.endOfMonth(dateTime));
    }

    @Override
    @Transactional
    public List<OperationLog> batchUpdateInsuranceProject(UpdateInsuranceProjectBO updateInsuranceProjectBO) {
        List<OperationLog> operationLogList = new ArrayList<>();
        updateInsuranceProjectBO.getIEmpRecordIds().forEach(iEmpRecordId -> {
            updateInsuranceProjectBO.setIEmpRecordId(iEmpRecordId);
            operationLogList.add(updateInsuranceProject(updateInsuranceProjectBO));
        });
        return operationLogList;
    }

    @Override
    public BasePage<HrmInsuranceMonthEmpRecord> myInsurancePageList(QueryInsuranceRecordListBO recordListBO) {
        return lambdaQuery().eq(HrmInsuranceMonthEmpRecord::getYear, recordListBO.getYear())
                .eq(HrmInsuranceMonthEmpRecord::getEmployeeId, EmployeeHolder.getEmployeeId())
                .orderByDesc(HrmInsuranceMonthEmpRecord::getYear, HrmInsuranceMonthEmpRecord::getMonth)
                .page(recordListBO.parse());
    }
}
