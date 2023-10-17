package com.kakarote.hrm.entity.PO;

import com.baomidou.mybatisplus.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 * 薪资初始配置
 * </p>
 *
 * @author zhangzhiwei
 * @since 2020-05-26
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("wk_hrm_salary_config")
@ApiModel(value = "HrmSalaryConfig对象", description = "薪资初始配置")
public class HrmSalaryConfig implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "config_id", type = IdType.ASSIGN_ID)
    @JsonSerialize(using = ToStringSerializer.class)
    private Long configId;

    @ApiModelProperty(value = "计薪周期开始日")
    private Integer salaryCycleStartDay;

    @ApiModelProperty(value = "计薪周期结束日")
    private Integer salaryCycleEndDay;

    @ApiModelProperty(value = "发薪日期类型 1 当月 2 次月")
    private Integer payType;

    @ApiModelProperty(value = "发薪日期")
    private Integer payDay;

    @ApiModelProperty(value = "对应社保自然月 0上月 1当月 2次月")
    private Integer socialSecurityMonthType;

    @ApiModelProperty(value = "薪酬起始月份（例2020.05）")
    private String salaryStartMonth;

    @ApiModelProperty(value = "社保开始月（例2020.05）")
    private String socialSecurityStartMonth;

    @TableField(fill = FieldFill.INSERT)
    @JsonSerialize(using = ToStringSerializer.class)
    private Long createUserId;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    @TableField(fill = FieldFill.UPDATE)
    @JsonSerialize(using = ToStringSerializer.class)
    private Long updateUserId;

    @TableField(fill = FieldFill.UPDATE)
    private LocalDateTime updateTime;



    @ApiModelProperty("最新的社保年")
    @TableField(exist = false)
    private Integer lastSocialSecurityYear;

    @ApiModelProperty("最新的薪资年")
    @TableField(exist = false)
    private Integer lastSalaryYear;

    @ApiModelProperty("最新的薪资月")
    @TableField(exist = false)
    private Integer lastSalaryMonth;

    @ApiModelProperty("最新的工资条发放记录日期")
    @TableField(exist = false)
    private String lastSalarySlipMonth;


}
