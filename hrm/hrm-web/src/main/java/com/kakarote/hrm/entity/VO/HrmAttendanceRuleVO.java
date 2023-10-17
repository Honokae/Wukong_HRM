package com.kakarote.hrm.entity.VO;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class HrmAttendanceRuleVO {

    @ApiModelProperty(value = "打卡规则id")
    private Long attendanceRuleId;

    @ApiModelProperty(value = "打卡规则名称")
    private String attendanceRuleName;

    @ApiModelProperty(value = "迟到规则计算方式")
    private Integer lateRuleMethod;

    @ApiModelProperty(value = "迟到扣款金额")
    private BigDecimal lateDeductMoney;

    @ApiModelProperty(value = "早退规则计算方式")
    private Integer earlyRuleMethod;


    @ApiModelProperty(value = "早退扣款金额")
    private BigDecimal earlyDeductMoney;

    @ApiModelProperty(value = "缺卡规则计算方式")
    private Integer misscardRuleMethod;

    @ApiModelProperty(value = "缺卡扣款金额")
    private BigDecimal misscardDeductMoney;

    @ApiModelProperty(value = "旷工规则计算方式")
    private Integer absenteeismRuleMethod;

    @ApiModelProperty(value = "旷工扣款金额")
    private BigDecimal absenteeismDeductMoney;

    @ApiModelProperty(value = "是否个性化设置{0 否 1是}")
    private Integer isPersonalization;

    @ApiModelProperty(value = "迟到的总分钟或总次数")
    private Integer lateMinutesOrCounts;

    @ApiModelProperty(value = "早退的总分钟或总次数")
    private Integer earlyMinutesOrCounts;

    @ApiModelProperty(value = "是否是默认配置(0否 1是)")
    private Integer isDefaultSetting;

    @Override
    public String toString() {
        return "HrmAttendanceRuleVO{" +
                "attendanceRuleId=" + attendanceRuleId +
                ", attendanceRuleName='" + attendanceRuleName + '\'' +
                ", lateRuleMethod=" + lateRuleMethod +
                ", lateDeductMoney=" + lateDeductMoney +
                ", earlyRuleMethod=" + earlyRuleMethod +
                ", earlyDeductMoney=" + earlyDeductMoney +
                ", misscardRuleMethod=" + misscardRuleMethod +
                ", misscardDeductMoney=" + misscardDeductMoney +
                ", absenteeismRuleMethod=" + absenteeismRuleMethod +
                ", absenteeismDeductMoney=" + absenteeismDeductMoney +
                ", isPersonalization=" + isPersonalization +
                ", lateMinutesOrCounts=" + lateMinutesOrCounts +
                ", earlyMinutesOrCounts=" + earlyMinutesOrCounts +
                ", isDefaultSetting=" + isDefaultSetting +
                '}';
    }
}
