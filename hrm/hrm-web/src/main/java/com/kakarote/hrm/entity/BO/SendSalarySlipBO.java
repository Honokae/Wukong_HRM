package com.kakarote.hrm.entity.BO;

import com.kakarote.hrm.entity.PO.HrmSalarySlipTemplateOption;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SendSalarySlipBO {

    private List<Long> sEmpRecordIds;

    @ApiModelProperty("是否全部发放")
    private Boolean isAll;

    @ApiModelProperty(value = "是否隐藏空的工资项 0 不隐藏 1 隐藏")
    private Integer hideEmpty;

    @ApiModelProperty(value = "工资条模板项")
    private List<HrmSalarySlipTemplateOption> slipTemplateOption;

    @ApiModelProperty(value = "员工名称")
    private String employeeName;

    @ApiModelProperty("部门名称")
    private Long deptId;

    @ApiModelProperty(value = "发送状态 0 未发送 1 已发送")
    private Integer sendStatus;

    @Override
    public String toString() {
        return "SendSalarySlipBO{" +
                "sEmpRecordIds=" + sEmpRecordIds +
                ", isAll=" + isAll +
                ", hideEmpty=" + hideEmpty +
                ", slipTemplateOption=" + slipTemplateOption +
                ", employeeName='" + employeeName + '\'' +
                ", deptId=" + deptId +
                ", sendStatus=" + sendStatus +
                '}';
    }
}
