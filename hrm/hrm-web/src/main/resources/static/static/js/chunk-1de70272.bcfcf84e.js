(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1de70272"],{"06e8":function(e,t,i){},"1a6b":function(e,t,i){},"25ba":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("flexbox",{staticClass:"wk-border-menu",class:{"is-select":e.isSelect}},e._l(e.list,(function(t,a){return i("div",{key:a,staticClass:"wk-border-menu__item",class:{"is-select":e.tabType==t.name},on:{click:function(i){e.tabClick(t,a)}}},[i("div",{staticClass:"label"},[e._v(e._s(t.label))]),e._v(" "),i("div",{staticClass:"num"},[e._v(e._s(t.num))])])})))},n=[],o=(i("a9e3"),i("b0c0"),{name:"WkBorderMenu",components:{},props:{list:Array,value:[String,Number],isSelect:{type:Boolean,default:!1}},data:function(){return{tabType:""}},computed:{},watch:{value:{handler:function(e){this.tabType=e},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{tabClick:function(e,t){this.$emit("input",e.name),this.$emit("select",e,t)}}}),s=o,l=(i("8252"),i("2877")),r=Object(l["a"])(s,a,n,!1,null,"7c8cfb22",null);t["a"]=r.exports},2771:function(e,t,i){},"44a9":function(e,t,i){},"4e82":function(e,t,i){"use strict";var a=i("23e7"),n=i("e330"),o=i("59ed"),s=i("7b0b"),l=i("07fa"),r=i("083a"),c=i("577e"),d=i("d039"),u=i("addb"),h=i("a640"),m=i("04d1"),f=i("d998"),p=i("2d00"),b=i("512ce"),g=[],y=n(g.sort),v=n(g.push),w=d((function(){g.sort(void 0)})),k=d((function(){g.sort(null)})),A=h("sort"),S=!d((function(){if(p)return p<70;if(!(m&&m>3)){if(f)return!0;if(b)return b<603;var e,t,i,a,n="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(a=0;a<47;a++)g.push({k:t+a,v:i})}for(g.sort((function(e,t){return t.v-e.v})),a=0;a<g.length;a++)t=g[a].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}})),_=w||!k||!A||!S,T=function(e){return function(t,i){return void 0===i?-1:void 0===t?1:void 0!==e?+e(t,i)||0:c(t)>c(i)?1:-1}};a({target:"Array",proto:!0,forced:_},{sort:function(e){void 0!==e&&o(e);var t=s(this);if(S)return void 0===e?y(t):y(t,e);var i,a,n=[],c=l(t);for(a=0;a<c;a++)a in t&&v(n,t[a]);u(n,T(e)),i=l(n),a=0;while(a<i)t[a]=n[a++];while(a<c)r(t,a++);return t}})},7835:function(e,t,i){},8252:function(e,t,i){"use strict";i("06e8")},"8ec8":function(e,t,i){"use strict";i("1a6b")},b557:function(e,t,i){"use strict";i("7835")},c514:function(e,t,i){"use strict";i("2771")},c7fb:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"employee-index",attrs:{id:"employee-main-container"}},[i("xr-header",{attrs:{"ft-top":"0",placeholder:"请输入员工姓名","show-search":"",label:"员工管理"},on:{search:e.searchClick}},[i("template",{slot:"otherLabel"},[i("i",{staticClass:"wk wk-icon-fill-help wk-help-tips",attrs:{"data-type":"31","data-id":"287"}})]),e._v(" "),i("template",{slot:"bottom-ft"},[e.hasFilterContent?i("el-button",{attrs:{type:"text"},on:{click:e.resetFilter}},[e._v("清除筛选")]):e._e(),e._v(" "),i("wk-popover-filter",{staticStyle:{"margin-right":"5px"},attrs:{width:e.popoverFilterWidth,"field-from":e.filterObj,"field-list":e.filterList,"has-content":e.hasFilterContent,placement:"bottom-end"},on:{"update:fieldFrom":function(t){e.filterObj=t},sure:e.refreshList,reset:e.resetFilter}})],1),e._v(" "),i("template",{slot:"ft"},[e.createAuth?[i("el-button",{attrs:{type:"primary"},on:{click:e.createClick}},[e._v("新建员工")])]:e._e(),e._v(" "),e.headerMoreHandle.length>0?i("el-dropdown",{staticStyle:{"margin-left":"5px"},attrs:{trigger:"click"},on:{command:e.headerMoreHandleClick}},[i("el-button",{attrs:{icon:"el-icon-more"}}),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.headerMoreHandle,(function(t,a){return i("el-dropdown-item",{key:a,attrs:{icon:t.icon,command:t.type}},[e._v(e._s(t.name))])})))],1):e._e()],2)],2),e._v(" "),i("div",{staticClass:"crm-container"},[i("flexbox",{staticClass:"filter"},[i("wk-border-menu",{staticStyle:{flex:"6"},attrs:{list:e.tabLeftList,"is-select":!!e.tabLeftList.find((function(t){return t.name==e.tabType}))},on:{select:e.tabClick},model:{value:e.tabType,callback:function(t){e.tabType=t},expression:"tabType"}}),e._v(" "),i("wk-border-menu",{staticStyle:{flex:"2"},attrs:{list:e.tabCenterList,"is-select":!!e.tabCenterList.find((function(t){return t.name==e.tabType}))},on:{select:e.tabClick},model:{value:e.tabType,callback:function(t){e.tabType=t},expression:"tabType"}}),e._v(" "),i("wk-border-menu",{staticStyle:{flex:"3"},attrs:{list:e.tabRightList,"is-select":!!e.tabRightList.find((function(t){return t.name==e.tabType}))},on:{select:e.tabClick},model:{value:e.tabType,callback:function(t){e.tabType=t},expression:"tabType"}})],1),e._v(" "),e.selectionList.length>0?i("xr-table-header",{attrs:{handles:e.tabelHandles,selects:e.selectionList},on:{command:e.handleCommand}}):e._e(),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"n-table--border el-table-header--white",class:e.WKConfig.tableStyle.class,staticStyle:{width:"100%"},attrs:{id:"crm-table","row-height":44,data:e.list,height:e.tableHeight,"cell-class-name":e.cellClassName,stripe:e.WKConfig.tableStyle.stripe,"use-virtual":"","highlight-current-row":""},on:{"row-click":e.handleRowClick,"header-dragend":e.handleHeaderDragend,"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[e.deleteAuth||e.multiInsuredShow?i("el-table-column",{attrs:{"show-overflow-tooltip":"",fixed:"",type:"selection",align:"center",width:"55"}}):e._e(),e._v(" "),e._l(e.showFieldList,(function(t,a){return i("el-table-column",{key:a,attrs:{fixed:0==a,prop:t.fieldName,label:t.name,sortable:t.sortable,"min-width":t.width,formatter:e.fieldFormatter,"show-overflow-tooltip":""}})})),e._v(" "),i("el-table-column"),e._v(" "),e.moreHandleShow?i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.getRowDropdownShow(t.row)?i("el-dropdown",{attrs:{trigger:"click"},on:{command:function(i){e.handleTypeClick(i,t.row)}}},[i("i",{staticClass:"el-icon-more table-more"}),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.getRowDropdownItems(t.row),(function(t,a){return i("el-dropdown-item",{key:a,attrs:{icon:t.icon,command:t.command}},[e._v(e._s(t.label))])})))],1):e._e()]}}])}):e._e(),e._v(" "),i("el-table-column"),e._v(" "),i("wk-field-set",{staticClass:"field-set-wrap",attrs:{slot:"other",loading:e.fieldSetLoading,fields:e.setFieldList},on:{save:e.fieldSetSave},slot:"other"})],2),e._v(" "),i("div",{staticClass:"p-contianer"},[i("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),e.showDview?i("employee-detail",{attrs:{id:e.rowID},on:{handle:e.detailHandle,close:function(t){e.showDview=!1}}}):e._e(),e._v(" "),e.isCreate?i("employee-create-view",{attrs:{"create-type":e.createType,detail:e.handleRowData},on:{success:e.createSaveSuccess,close:function(t){e.isCreate=!1}}}):e._e(),e._v(" "),i("form-add-dialog",{ref:"formAdddialog",attrs:{title:e.formAddTitle,form:e.formAddForm,rules:e.formAddRules,fields:e.formAddFields,visible:e.formAddDialogShow,"help-obj":e.helpObj},on:{"update:form":function(t){e.formAddForm=t},"update:visible":function(t){e.formAddDialogShow=t},pass:e.formAddPass,change:e.formChange}}),e._v(" "),i("update-scheme-dialog",{attrs:{id:e.handleRowData?e.handleRowData.employeeId:"",list:e.selectionList,type:e.updateSchemeType,visible:e.updateSchemeDialogShow},on:{"update:visible":function(t){e.updateSchemeDialogShow=t},change:e.getList}}),e._v(" "),i("give-up-leave-dialog",{attrs:{id:e.handleRowData?e.handleRowData.employeeId:"",visible:e.giveUpLeaveShow},on:{"update:visible":function(t){e.giveUpLeaveShow=t},change:e.refreshPageData}}),e._v(" "),e.depAddEmplogyShow?i("dep-add-employ-dialog",{attrs:{visible:e.depAddEmplogyShow},on:{"update:visible":function(t){e.depAddEmplogyShow=t},change:e.refreshPageData}}):e._e()],1)},n=[],o=i("5530"),s=(i("14d9"),i("b64b"),i("4de4"),i("d3b7"),i("99af"),i("159b"),i("b0c0"),i("ac1f"),i("841c"),i("caad"),i("2532"),i("d81d"),i("4e82"),i("7db0"),i("7078")),l=i("0f4c"),r=i("1aac"),c=i("5057"),d=i("8e93"),u=i("9011"),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-popover",{attrs:{"popper-class":"no-padding-popover",placement:"bottom",width:"240",trigger:"click"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"wk-field-set"},[i("el-input",{staticClass:"wk-field-set__search",attrs:{placeholder:"搜索字段"},on:{input:e.searchClick},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),i("div",{staticClass:"wk-field-set__content"},[i("draggable",{attrs:{options:{dragClass:"sortable-drag",forceFallback:!1}},model:{value:e.copyfields,callback:function(t){e.copyfields=t},expression:"copyfields"}},e._l(e.copyfields,(function(t,a){return i("div",{key:a,staticClass:"wk-field-set__content--item text-one-line"},[i("el-switch",{model:{value:t.check,callback:function(i){e.$set(t,"check",i)},expression:"item.check"}}),e._v(" "),t.center?i("span",[e._v(e._s(t.left)),i("span",{staticClass:"input-word"},[e._v(e._s(t.center))]),e._v(e._s(t.right))]):i("span",[e._v(e._s(t.name))])],1)})))],1),e._v(" "),i("div",{staticClass:"wk-field-set__ft"},[i("el-button",{attrs:{type:"text"},on:{click:e.reSet}},[e._v("重置")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1),e._v(" "),e.$slots.reference?e._t("default",null,{slot:"reference"}):i("el-button",{staticClass:"set-btn",attrs:{slot:"reference",icon:"wk wk-icon-config-line"},on:{click:function(t){e.show=!e.show}},slot:"reference"})],2)},m=[],f=i("ed08"),p=i("b76a"),b=i.n(p),g={name:"WkFieldSet",components:{Draggable:b.a},props:{loading:Boolean,fields:Array},data:function(){return{show:!1,copyfields:[],search:""}},computed:{},watch:{fields:{handler:function(){this.copyfields=Object(f["z"])(this.fields)},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{searchClick:function(){var e=this;this.fields=this.fields.map((function(t){var i=t.name.indexOf(e.search);if(-1!=i){t.left=t.name.substr(0,i),t.center=t.name.substr(i,e.search.length);var a=i+e.search.length;t.right=t.name.substr(a,t.name.length-a)}else t.left="",t.center="",t.right="";return t}))},save:function(){var e=this.copyfields.filter((function(e){return e.check}));e.length<2?this.$message.error("至少要显示两列"):this.$emit("save",this.copyfields)},reSet:function(){this.copyfields=Object(f["z"])(this.fields)}}},y=g,v=(i("ed50"),i("2877")),w=Object(v["a"])(y,h,m,!1,null,"77792baa",null),k=w.exports,A=i("e510"),S=i("5841"),_=i("5da1"),T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{ref:"wkDialog",attrs:{visible:e.visible,"append-to-body":!0,"close-on-click-modal":!1,title:e.title,width:"500px"},on:{close:e.handleCancel}},[i("div",{staticClass:"form-add-dialog-body"},[i("el-form",{ref:"schemeForm",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"参保方案"}},[i("el-select",{staticStyle:{width:"100%"},model:{value:e.form.schemeId,callback:function(t){e.$set(e.form,"schemeId",t)},expression:"form.schemeId"}},e._l(e.schemeList,(function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})})))],1)],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.handleConfirm,expression:"handleConfirm"}],attrs:{type:"primary"}},[e._v("保存")]),e._v(" "),i("el-button",{nativeOn:{click:function(t){return e.handleCancel(t)}}},[e._v("取消")])],1)])},C=[],x=(i("a9e3"),i("41e8")),L=i("cccc"),D=i("9dba"),F=i("6bfe"),I={name:"UpdateSchemeDialog",components:{},mixins:[D["a"]],props:{id:[String,Number],list:Array,type:[String,Number],visible:{type:Boolean,required:!0,default:!1}},data:function(){return{loading:!1,title:"修改社保方案",schemeList:[],rules:{schemeId:[{required:!0,message:"请选择",trigger:"blur"}]},form:{}}},computed:{},watch:{visible:{handler:function(e){e&&(0==this.schemeList.length&&this.getSchemList(),Object(F["a"])(this.list)&&1===this.list.length?this.form={schemeId:this.list[0].schemeId}:this.form={schemeId:""})},immediate:!0}},mounted:function(){},methods:{handleCancel:function(){this.$emit("update:visible",!1)},getSchemList:function(){var e=this;Object(L["l"])({pageType:0}).then((function(t){e.schemeList=t.data.list.map((function(e){return{label:e.schemeName,value:e.schemeId}}))})).catch((function(){}))},handleConfirm:function(){var e=this;this.$refs.schemeForm.validate((function(t){t&&(e.loading=!0,1==e.type?e.form.employeeIds=[e.id]:e.form.employeeIds=e.list.map((function(e){return e.employeeId})),Object(x["h"])(e.form).then((function(t){e.$message.success("操作成功"),e.$emit("change"),e.handleCancel(),e.loading=!1})).catch((function(){e.loading=!1})))}))}}},O=I,$=(i("b557"),Object(v["a"])(O,T,C,!1,null,"7d33ff49",null)),j=$.exports,R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{ref:"wkDialog",attrs:{visible:e.visible,"append-to-body":!0,"close-on-click-modal":!1,title:e.title,width:"500px"},on:{close:e.handleCancel}},[i("div",{staticClass:"form-add-dialog-body"},[i("el-form",{ref:"giveupForm",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"原因"}},[i("el-input",{attrs:{autosize:{minRows:3},maxlength:800,type:"textarea",resize:"none"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1)],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.handleConfirm,expression:"handleConfirm"}],attrs:{type:"primary"}},[e._v("保存")]),e._v(" "),i("el-button",{nativeOn:{click:function(t){return e.handleCancel(t)}}},[e._v("取消")])],1)])},E=[],N={name:"GiveUpLeaveDialog",components:{},mixins:[D["a"]],props:{id:[String,Number],visible:{type:Boolean,required:!0,default:!1}},data:function(){return{loading:!1,title:"放弃离职",rules:{},form:{}}},computed:{},watch:{visible:{handler:function(e){e&&(this.form={remarks:""})},immediate:!0}},mounted:function(){},methods:{handleCancel:function(){this.$emit("update:visible",!1)},handleConfirm:function(){var e=this;this.$refs.giveupForm.validate((function(t){t&&(e.loading=!0,e.form.employeeId=e.id,Object(r["b"])(e.form).then((function(t){e.$message.success("操作成功"),e.$emit("change"),e.handleCancel(),e.loading=!1})).catch((function(){e.loading=!1})))}))}}},H=N,P=(i("c514"),Object(v["a"])(H,R,E,!1,null,"ccba2ad4",null)),q=P.exports,z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{ref:"wkDialog",attrs:{visible:e.visible,"append-to-body":!0,"close-on-click-modal":!1,title:e.title,fullscreen:""},on:{close:e.close}},[i("div",{staticClass:"dep-add"},[i("div",{staticClass:"dep-add__header"},[i("el-button",{attrs:{type:"primary"},on:{click:e.selectClick}},[e._v("从系统管理选择员工")])],1),e._v(" "),i("el-form",{ref:"tableFrom",attrs:{model:e.tableForm,"validate-on-rule-change":!1,"show-message":!1,"hide-required-asterisk":""}},[i("el-table",{attrs:{data:e.tableList,height:e.tableHeight,stripe:"",border:""}},[e._l(e.fieldList,(function(t,a){return i("el-table-column",{key:a,attrs:{prop:t.field,label:t.name,"min-width":t.disabled?120:170,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row,o=a.$index;return[t.disabled?[e._v("\n              "+e._s(e.fieldFormatter(n,t))+"\n            ")]:"text"==t.formType?i("el-form-item",{attrs:{prop:"table["+o+"]."+t.field,rules:{required:!0,message:"请输入",trigger:"change"},label:""}},[i("el-input",{attrs:{maxlength:100},model:{value:n[t.field],callback:function(i){e.$set(n,t.field,i)},expression:"row[item.field]"}})],1):"structure"==t.formType?i("wk-dep-select",{staticStyle:{width:"100%"},attrs:{options:e.depOptions,props:t.props,radio:""},model:{value:n[t.field],callback:function(i){e.$set(n,t.field,i)},expression:"row[item.field]"}}):"user"==t.formType?i("wk-user-select",{staticStyle:{width:"100%"},attrs:{props:t.props,radio:""},model:{value:n[t.field],callback:function(i){e.$set(n,t.field,i)},expression:"row[item.field]"}}):"date"==t.formType?i("el-form-item",{attrs:{prop:"table["+o+"]."+t.field,rules:{required:!0,message:"请输入",trigger:"change"},label:""}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:n[t.field],callback:function(i){e.$set(n,t.field,i)},expression:"row[item.field]"}})],1):"typeValue"==t.field?i("el-form-item",{attrs:{prop:"table["+o+"]."+t.field,rules:{required:!0,message:"请输入",trigger:"change"},label:""}},[i("el-select",{staticStyle:{width:"100%"},model:{value:n[t.field],callback:function(i){e.$set(n,t.field,i)},expression:"row[item.field]"}},e._l(n.typeValueOptions,(function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})})))],1):"select"==t.formType?i("el-form-item",{attrs:{prop:"table["+o+"]."+t.field,rules:{required:!0,message:"请输入",trigger:"change"},label:""}},[i("el-select",{staticStyle:{width:"100%"},on:{change:function(i){e.selectChange(i,n,t)}},model:{value:n[t.field],callback:function(i){e.$set(n,t.field,i)},expression:"row[item.field]"}},e._l(t.setting,(function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})})))],1):e._e()]}}])})})),e._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text"},on:{click:function(i){e.deleteClick(t)}}},[e._v("删除")])]}}])})],2)],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.handleConfirm,expression:"handleConfirm"}],attrs:{type:"primary"}},[e._v("保存")]),e._v(" "),i("el-button",{nativeOn:{click:function(t){return e.close(t)}}},[e._v("取消")])],1),e._v(" "),i("wk-dep-user-dialog",{attrs:{visible:e.depUserViewDialogShow,props:{showDisableUser:!1}},on:{"update:visible":function(t){e.depUserViewDialogShow=t},change:e.selectUserChange}})],1)},V=[],U=(i("a434"),i("e17e")),W=i("5c0a"),B=i("de98"),M=i("2581"),G=i("8b13"),J={name:"DepAddEmployDialog",components:{WkUserSelect:W["a"],WkDepSelect:B["a"],WkDepUserDialog:M["a"]},mixins:[D["a"]],props:{visible:{type:Boolean,required:!0,default:!1}},data:function(){return{loading:!1,title:"从组织部门添加员工",depOptions:[],users:[],deps:[],tableList:[],tableForm:{},fieldList:[{name:"姓名",field:"employeeName",formType:"text",disabled:!0,setting:[]},{name:"手机号码",field:"mobile",formType:"text",disabled:!0,setting:[]},{name:"性别",field:"sex",formType:"radio",disabled:!0,setting:G["d"].sexSetting},{name:"岗位",field:"post",formType:"text",disabled:!0,setting:[]},{name:"部门",field:"deptId",formType:"structure",props:{dataType:"hrm"},setting:[]},{name:"直属上级",field:"parentId",formType:"user",props:{label:"employeeName",value:"employeeId"},setting:[]},{name:"工号",field:"jobNumber",formType:"text",setting:[]},{name:"入职日期",field:"entryTime",formType:"date",setting:[]},{name:"聘用形式",field:"employmentForms",formType:"select",setting:G["d"].employmentFormsSetting},{name:"试用期/非正式类型",field:"typeValue",formType:"select"}],tableHeight:document.documentElement.clientHeight-195,depUserViewDialogShow:!1}},computed:{},watch:{visible:{handler:function(e){e&&this.depOptions&&0==this.depOptions.length&&this.getDepOptions()},immediate:!0}},mounted:function(){var e=this;window.onresize=function(){e.tableHeight=document.documentElement.clientHeight-195}},methods:{close:function(){this.$emit("update:visible",!1)},selectClick:function(){this.depUserViewDialogShow=!0},selectUserChange:function(e,t,i,a){var n=this;this.users=i,this.deps=a,this.users.length>0||this.deps.length>0?(this.loading=!0,Object(U["b"])({deptIdList:t,userIdList:e}).then((function(e){var t=e.data||[],i=[],a=n.tableList?n.tableList.map((function(e){return e.userId})):[];t.forEach((function(e){if(a.includes(e.userId)){var t=n.tableList.find((function(t){return t.userId===e.userId}));t&&i.push(t)}else{var o={employeeName:e.realname,sex:e.sex,mobile:e.mobile,userId:e.userId,post:e.post,typeValueOptions:[]};i.push(o)}})),n.tableList=i,n.tableForm={table:n.tableList},n.loading=!1})).catch((function(){n.loading=!1}))):this.$message.error("请选择")},fieldFormatter:function(e,t){return"sex"==t.field?G["d"].sexValue[e.sex]:e[t.field]},deleteClick:function(e){this.tableList.splice(e.$index,1)},getTypeValueOptions:function(e){return e.employmentForms?1==e.employmentForms?G["d"].probationSetting:2==e.employmentForms?G["d"].statusSetting:[]:[]},selectChange:function(e,t,i){"employmentForms"==i.field&&(this.$set(t,"typeValueOptions",this.getTypeValueOptions(t)),this.$set(t,"typeValue",""))},getDepOptions:function(){var e=this;Object(l["e"])().then((function(t){e.depOptions=t.data||[]})).catch((function(){}))},handleConfirm:function(){var e=this;this.$refs.tableFrom.validate((function(t){if(!t)return!1;for(var i=Object(f["z"])(e.tableList),a=0;a<i.length;a++){var n=i[a];delete n["typeValueOptions"],1==n.employmentForms?n.probation=n.typeValue:2==n.employmentForms&&(n.status=n.typeValue),delete n["typeValue"]}e.loading=!0,Object(s["g"])(i).then((function(t){e.$message.success("操作成功"),e.$emit("change"),e.close(),e.loading=!1})).catch((function(){e.loading=!1}))}))}}},K=J,X=(i("d5ba"),Object(v["a"])(K,z,V,!1,null,"2055ab7a",null)),Q=X.exports,Y=i("25ba"),Z=i("2f62"),ee=i("24f4"),te=i("92af"),ie={name:"EmployeeIndex",components:{XrHeader:c["a"],XrTableHeader:d["a"],EmployeeCreateView:A["a"],EmployeeDetail:S["a"],WkPopoverFilter:u["a"],WkFieldSet:k,FormAddDialog:_["a"],UpdateSchemeDialog:j,GiveUpLeaveDialog:q,DepAddEmployDialog:Q,WkBorderMenu:Y["a"]},beforeRouteUpdate:function(e,t,i){var a=this.$route.query;a.depAddEmplogyShow&&(this.depAddEmplogyShow=!0),i()},data:function(){return{loading:!1,createType:"",isCreate:!1,tableHeight:document.documentElement.clientHeight-345,list:[],fieldList:[],sortFields:["sex","dateOfBirth","age","entryTime","becomeTime","fieldName","jobNumber","birthday","deptId"],sortData:{},currentPage:1,pageSize:15,pageSizes:[15,30,60,100],total:0,search:"",queryParams:{},popoverFilterWidth:document.documentElement.clientWidth-80,tabType:"12",tabLeftList:[{label:"在职",name:"11",num:0},{label:"全职",name:"12",num:0},{label:"实习",name:"3",num:0},{label:"劳务",name:"5",num:0},{label:"顾问",name:"6",num:0},{label:"返聘",name:"7",num:0},{label:"外包",name:"8",num:0},{label:"兼职",name:"4",num:0}],tabCenterList:[{label:"试用",name:"2",num:0},{label:"正式",name:"1",num:0}],tabRightList:[{label:"待入职",name:"13",num:0},{label:"待离职",name:"14",num:0},{label:"已离职",name:"15",num:0}],rowID:"",showDview:!1,filterObj:{},filterList:[{name:"手机号码",field:"mobile",formType:"text",setting:[]},{name:"性别",field:"sex",formType:"radio",setting:[{label:"男",value:1},{label:"女",value:2}]},{name:"工作地点",field:"workAddress",formType:"text",setting:[]},{name:"聘用形式",field:"employmentForms",formType:"select",setting:[{label:"正式",value:1},{label:"非正式",value:2}]},{name:"入职日期",field:"entryTime",formType:"dateRange",setting:[]},{name:"岗位",field:"post",formType:"text",setting:[]},{name:"转正日期",field:"becomeTime",formType:"dateRange",setting:[]},{name:"工号",field:"jobNumber",formType:"text",setting:[]},{name:"部门",field:"deptId",formType:"structure",props:{dataType:"hrm"},request:l["e"],setting:[]}],selectionList:[],formAddType:"",formAddForm:{},formAddRules:{},formAddFields:[],formAddDialogShow:!1,handleRowData:null,fieldSetLoading:!1,updateSchemeType:1,updateSchemeDialogShow:!1,giveUpLeaveShow:!1,depAddEmplogyShow:!1,helpObj:{dataType:31,dataId:288}}},computed:Object(o["a"])(Object(o["a"])({},Object(Z["b"])(["hrm","hrmUserType","userInfo"])),{},{employeeAuth:function(){return this.hrm.employee},createAuth:function(){return this.employeeAuth&&this.employeeAuth.save},deleteAuth:function(){return this.employeeAuth&&this.employeeAuth.delete},excelexportAuth:function(){return this.employeeAuth&&this.employeeAuth.excelexport},excelimportAuth:function(){return this.employeeAuth&&this.employeeAuth.excelimport},detailAuth:function(){return this.employeeAuth&&this.employeeAuth.read},moreHandleShow:function(){return this.employeeAuth.confirmEntry||this.employeeAuth.againOnboarding||this.employeeAuth.become||this.employeeAuth.changePost||this.employeeAuth.promotion||this.employeeAuth.setInsured||this.employeeAuth.cancelLevel||this.employeeAuth.leave},headerMoreHandle:function(){var e=[];return this.excelimportAuth&&e.push({type:"import",name:"导入",icon:"wk wk-import"}),this.excelexportAuth&&e.push({type:"export",name:"导出",icon:"wk wk-export"}),e},tabelHandles:function(){var e=[];return this.deleteAuth&&e.push({label:"删除",command:"delete",icon:"wk wk-delete"}),this.multiInsuredShow&&e.push({label:"参保方案",command:"security",icon:"wk wk-approval-9"}),this.excelexportAuth&&e.push({label:"导出选中",command:"export",icon:"wk wk-export"}),e},multiInsuredShow:function(){return this.employeeAuth.setInsured&&("12"==this.tabType||"2"==this.tabType||"1"==this.tabType)},hasFilterContent:function(){if(this.filterObj){for(var e=!1,t=Object.keys(this.filterObj),i=0;i<t.length;i++){var a=t[i];""!=this.filterObj[a]&&this.filterObj[a]!=[]&&null!=this.filterObj[a]&&void 0!=this.filterObj[a]&&(e=!0)}return e}return!1},showFieldList:function(){return this.fieldList.filter((function(e){return 1!=e.isHide}))},setFieldList:function(){for(var e=[],t=[],i=0;i<this.fieldList.length;i++){var a=Object(f["z"])(this.fieldList[i]);a.left="",a.center="",a.right="",a.check=1!=a.isHide,a.check?e.push(a):t.push(a)}return e.concat(t)},formAddTitle:function(){return{confirm:"",again:"",official:"办理转正","change-post":"调整部门/岗位","change-level":"晋升/降级",security:"","give-up-leave":"",leave:"办理离职"}[this.formAddType]}}),created:function(){var e=this;window.onresize=function(){e.tableHeight=document.documentElement.clientHeight-(e.selectionList.length>0?395:345)},this.$bus.on("import-crm-done-bus",(function(){e.refreshPageData()}));var t=this.$route.query;if(t)if("filter"==t.workbench){var i=this.$route.query;i&&i.tabType?this.tabType=i.tabType:(this.tabType="",this.queryParams=i,delete this.queryParams["workbench"])}else t.depAddEmplogyShow&&(this.depAddEmplogyShow=!0);this.getFieldList(),this.refreshList(),this.getTabsNum()},mounted:function(){this.initTask()},beforeDestroy:function(){this.$bus.off("import-crm-done-bus")},methods:{refreshPageData:function(){this.$store.dispatch("GetHrmUserInfo"),this.getList(),this.getTabsNum()},getTabsNum:function(){var e=this;Object(s["I"])().then((function(t){var i=t.data||{};e.tabLeftList.forEach((function(e){e.num=i[parseInt(e.name)]||0})),e.tabCenterList.forEach((function(e){e.num=i[parseInt(e.name)]||0})),e.tabRightList.forEach((function(e){e.num=i[parseInt(e.name)]||0}))})).catch((function(){}))},tabClick:function(e){this.queryParams={},this.refreshList()},resetFilter:function(){this.filterObj={},this.refreshList()},createClick:function(){this.handleRowData=null,this.createType="new",this.isCreate=!0},createFromDepClick:function(){this.depAddEmplogyShow=!0},createSaveSuccess:function(){this.getTabsNum(),this.refreshList()},searchClick:function(e){this.search=e,this.refreshList()},detailHandle:function(e){"delete"===e.type&&(this.$store.dispatch("GetHrmUserInfo"),this.showDview=!1),this.getTabsNum(),this.getList()},getFieldList:function(){var e=this;Object(s["s"])().then((function(t){var i=t.data||[];i.forEach((function(t){t.sortable=e.sortFields.includes(t.fieldName)})),e.fieldList=i})).catch((function(){}))},refreshList:function(){this.handleCurrentChange(1)},handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},sortChange:function(e,t,i){this.currentPage=1,this.sortData=e,this.getList()},getList:function(){var e=this;this.loading=!0;var t={page:this.currentPage,limit:this.pageSize,employeeName:this.search,status:this.tabType};for(var i in this.filterObj)t[i]=this.filterObj[i];for(var a in this.queryParams)t[a]=this.queryParams[a];this.sortData.order&&(t.sortField=this.sortData.prop,t.order="ascending"==this.sortData.order?2:1),Object(s["H"])(t).then((function(t){e.list=t.data.list,e.total=t.data.totalRow,t.data.totalRow&&Math.ceil(t.data.totalRow/e.pageSize)<e.currentPage&&e.currentPage>1?(e.currentPage=e.currentPage-1,e.getList()):(e.total=t.data.totalRow,e.loading=!1),e.$nextTick((function(){var e=document.querySelector(".el-table__body-wrapper");e.scrollTop=1,0!=e.scrollLeft&&(e.scrollLeft=e.scrollLeft-1)})),e.loading=!1})).catch((function(){e.loading=!1}))},fieldFormatter:function(e,t){var i=G["d"]["".concat(t.property,"Value")];return i?i[e[t.property]]||"--":"highestEducation"==t.property?G["c"].educationValue[e[t.property]]||"--":"contractType"==t.property?te["a"].contractTypeValue[e.contractType]||"--":"term"==t.property?te["a"].termValue[e.term]||"--":"deptId"==t.property?e.deptName:"parentId"==t.property?e.parentName:"channelId"==t.property?e.channelName:e[t.property]||"--"},cellClassName:function(e){e.row;var t=e.column;e.rowIndex,e.columnIndex;return this.detailAuth&&"employeeName"==t.property?"can-visit--underline":""},handleCommand:function(e){var t=this;"delete"===e?this.$confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["k"])(t.selectionList.map((function(e){return e.employeeId}))).then((function(e){t.$message({type:"success",message:"删除成功"}),t.getTabsNum(),t.getList()})).catch((function(){}))})).catch((function(){})):"security"===e?(this.updateSchemeType=2,this.updateSchemeDialogShow=!0):"export"===e&&(this.loading=!0,Object(s["r"])({employeeIds:this.selectionList.map((function(e){return e.employeeId}))}).then((function(e){Object(f["d"])(e),t.loading=!1})).catch((function(){t.loading=!1})))},formChange:function(e,t,i,a,n){"change-post"!==this.formAddType&&"change-level"!==this.formAddType||"changeType"!=e.field?"leave"===this.formAddType&&"quitType"==e.field&&(1==i?n.quitReason=1:2==i?n.quitReason=11:3==i&&(n.quitReason=""),this.formAddRules=ee["a"].getRules(n),this.formAddFields=ee["a"].getFields(n)):(n.changeReason=7==i?4:1,this.formAddFields=G["b"].fieldsFunc(i,this.handleRowData.status))},headerMoreHandleClick:function(e){var t=this;if("export"==e){this.loading=!0;var i={employeeName:this.search,status:this.tabType};for(var a in this.filterObj)i[a]=this.filterObj[a];for(var n in this.queryParams)i[n]=this.queryParams[n];Object(s["r"])(i).then((function(e){Object(f["d"])(e),t.loading=!1})).catch((function(){t.loading=!1}))}else"import"==e&&this.$wkImport.import("hrm",{ownerSelectShow:!1,repeatRuleShow:!1,importRequest:s["T"],templateRequest:s["q"],userInfo:this.userInfo})},getRowDropdownItems:function(e){var t=[];return 2==e.entryStatus?this.employeeAuth.confirmEntry&&t.push({label:"确认入职",command:"confirm",icon:"wk wk-activation"}):4==e.entryStatus?this.employeeAuth.againOnboarding&&t.push({label:"再入职",command:"again",icon:"wk wk-approval-17"}):(2==e.status&&this.employeeAuth.become&&t.push({label:"办理转正",command:"official",icon:"wk wk-transfer"}),this.employeeAuth.changePost&&t.push({label:"调整部门/岗位",command:"change-post",icon:"wk wk-employees"}),this.employeeAuth.promotion&&t.push({label:"晋升/降级",command:"change-level",icon:"wk wk-approval-12"}),1!=e.status&&2!=e.status||this.employeeAuth.setInsured&&t.push({label:"参保方案",command:"security",icon:"wk wk-approval-9"}),3==e.entryStatus?this.employeeAuth.cancelLevel&&t.push({label:"放弃离职",command:"give-up-leave",icon:"wk wk-reset"}):this.employeeAuth.leave&&t.push({label:"办理离职",command:"leave",icon:"wk wk-approval-16"})),t},getRowDropdownShow:function(e){if(2==e.entryStatus){if(this.employeeAuth.confirmEntry)return!0}else if(4==e.entryStatus){if(this.employeeAuth.againOnboarding)return!0}else{if(2==e.status&&this.employeeAuth.become)return!0;if(this.employeeAuth.changePost)return!0;if(this.employeeAuth.promotion)return!0;if((1==e.status||2==e.status)&&this.employeeAuth.setInsured)return!0;if(3==e.entryStatus){if(this.employeeAuth.cancelLevel)return!0}else if(this.employeeAuth.leave)return!0}return!1},handleTypeClick:function(e,t){this.handleRowData=t,"leave"===e?(this.formAddType=e,this.formAddForm={quitType:1,quitReason:1},this.formAddRules=ee["a"].getRules(this.formAddForm),this.formAddFields=ee["a"].getFields(this.formAddForm),this.formAddDialogShow=!0):"official"===e?(this.formAddType=e,this.formAddForm={newDept:t.deptId||"",newParentId:t.parentId||"",newPost:t.post||"",becomeTime:t.becomeTime,changeType:4},this.formAddRules=G["e"].rules,this.formAddFields=G["e"].fields,this.formAddDialogShow=!0):"again"===e?(this.handleRowData=t,this.createType="again",this.isCreate=!0):"change-post"===e||"change-level"===e?(this.formAddType=e,this.formAddForm={changeType:"change-post"===e?5:6,changeReason:1,oldDept:t.deptId||"",newDept:"",oldPost:t.post||"",newPost:"",oldPostLevel:t.postLevel||"",newPostLevel:"",oldWorkAddress:t.workAddress||"",newWorkAddress:"",entryTime:t.entryTime||""},this.formAddRules=G["b"].rules,this.formAddFields=G["b"].fieldsFunc(this.formAddForm.changeReason,t.status),this.formAddDialogShow=!0):"give-up-leave"===e?this.giveUpLeaveShow=!0:"security"===e?(this.updateSchemeType=1,this.selectionList=[t],this.updateSchemeDialogShow=!0):"confirm"===e&&(this.handleRowData=t,this.createType="confirm",this.isCreate=!0)},handleRowClick:function(e,t,i){this.detailAuth&&"employeeName"==t.property&&(this.rowID=e.employeeId,this.showDview=!0)},handleSelectionChange:function(e){this.selectionList=e,this.tableHeight=document.documentElement.clientHeight-(this.selectionList.length>0?395:345)},formAddPass:function(){var e=this;this.$refs.formAdddialog.loading=!0,this.formAddForm.employeeId=this.handleRowData.employeeId;var t=null;"leave"===this.formAddType?t=r["a"]:"official"===this.formAddType?t=s["J"]:"change-post"===this.formAddType?t=s["L"]:"change-level"===this.formAddType&&(t=s["O"]),t(this.formAddForm).then((function(t){e.$refs.formAdddialog.loading=!1,e.$message.success("".concat(e.formAddTitle,"成功")),e.formAddDialogShow=!1,e.getTabsNum(),e.getList()})).catch((function(){e.$refs.formAdddialog.loading=!1}))},fieldSetSave:function(e){var t=this;this.fieldSetLoading=!0,e.forEach((function(e,t){e.isHide=e.check?0:1,e.sort=t})),Object(s["t"])(e).then((function(e){t.$message.success("操作成功"),t.getFieldList(),t.fieldSetLoading=!1})).catch((function(){t.fieldSetLoading=!1}))},handleHeaderDragend:function(e,t,i,a){if(i.property){var n=this.showFieldList.find((function(e){return e.fieldName==i.property}));n&&Object(s["u"])({width:e,fieldId:n.fieldId}).then((function(e){})).catch((function(){}))}},initTask:function(){var e=this.$route.query;"detail"===e.event&&(this.rowID=e.id,this.showDview=!0)}}},ae=ie,ne=(i("8ec8"),Object(v["a"])(ae,a,n,!1,null,"c8a6f454",null));t["default"]=ne.exports},d5ba:function(e,t,i){"use strict";i("d844")},d844:function(e,t,i){},ed50:function(e,t,i){"use strict";i("44a9")}}]);