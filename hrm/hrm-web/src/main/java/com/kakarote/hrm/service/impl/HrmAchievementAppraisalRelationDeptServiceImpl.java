package com.kakarote.hrm.service.impl;

import com.kakarote.core.entity.BasePage;
import com.kakarote.core.entity.PageEntity;
import com.kakarote.core.servlet.BaseServiceImpl;
import com.kakarote.hrm.entity.PO.HrmAchievementAppraisalRelationDept;
import com.kakarote.hrm.mapper.HrmAchievementAppraisalRelationDeptMapper;
import com.kakarote.hrm.service.IHrmAchievementAppraisalRelationDeptService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.util.List;

/**
 * <p>
 * 绩效考核关联部门表 服务实现类
 * </p>
 *
 * @author guomenghao
 * @since 2021-11-26
 */
@Service
public class HrmAchievementAppraisalRelationDeptServiceImpl extends BaseServiceImpl<HrmAchievementAppraisalRelationDeptMapper, HrmAchievementAppraisalRelationDept> implements IHrmAchievementAppraisalRelationDeptService {

    /**
     * 查询字段配置
     *
     * @param id 主键ID
     * @return data
     * @author guomenghao
     * @since 2021-11-26
     */
    @Override
    public HrmAchievementAppraisalRelationDept queryById(Serializable id) {
        return getById(id);
    }

    /**
     * 保存或新增信息
     *
     * @param entity entity
     * @author guomenghao
     * @since 2021-11-26
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addOrUpdate(HrmAchievementAppraisalRelationDept entity) {
        saveOrUpdate(entity);
    }


    /**
     * 查询所有数据
     *
     * @param search 搜索条件
     * @return list
     * @author guomenghao
     * @since 2021-11-26
     */
    @Override
    public BasePage<HrmAchievementAppraisalRelationDept> queryPageList(PageEntity search) {
        return lambdaQuery().page(search.parse());
    }

    /**
     * 根据ID列表删除数据
     *
     * @param ids ids
     * @author guomenghao
     * @since 2021-11-26
     */
    @Override
    public void deleteByIds(List<Serializable> ids) {
        if (ids == null || ids.isEmpty()) {
            return;
        }
        removeByIds(ids);
    }
}
