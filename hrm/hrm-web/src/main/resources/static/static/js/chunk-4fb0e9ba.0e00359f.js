(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fb0e9ba"],{"1fac":function(t,e,n){"use strict";n("cb3b")},ae97:function(t,e,n){},cb3b:function(t,e,n){},d356:function(t,e,n){"use strict";n("ae97")},f1bf:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scheme-index",attrs:{id:"employee-main-container"}},[n("xr-header",{attrs:{"ft-top":"0"}},[n("el-page-header",{attrs:{slot:"label",content:t.titleMonth+"月发放详情"},on:{back:t.goBack},slot:"label"}),t._v(" "),n("template",{slot:"ft"},[t.hasFilterContent?n("el-button",{attrs:{type:"text"},on:{click:t.resetFilter}},[t._v("清除筛选")]):t._e(),t._v(" "),n("wk-popover-filter",{staticStyle:{"margin-right":"5px"},attrs:{width:t.popoverFilterWidth,"field-from":t.filterObj,"field-list":t.filterList,"has-content":t.hasFilterContent,placement:"bottom-end"},on:{"update:fieldFrom":function(e){t.filterObj=e},sure:t.refreshList,reset:t.resetFilter}})],1)],2),t._v(" "),n("div",{staticClass:"crm-container"},[t.selectionList.length>0?n("xr-table-header",{attrs:{handles:t.tabelHandles,selects:t.selectionList},on:{command:t.handleCommand}}):t._e(),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"n-table--border el-table-header--white",staticStyle:{width:"100%"},attrs:{id:"crm-table","row-height":40,data:t.list,height:t.tableHeight,"use-virtual":"",stripe:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[t.sendAuth?n("el-table-column",{attrs:{"show-overflow-tooltip":"",fixed:"",type:"selection",align:"center",width:"55"}}):t._e(),t._v(" "),t._l(t.fieldList,(function(e,a){return n("el-table-column",{key:a,attrs:{fixed:0==a,prop:e.fieldName,label:e.name,"min-width":e.width,"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return["readStatus"===e.column.property?[t._v("\n            "+t._s(t.getReadStatus(e.row[e.column.property]))+"\n          ")]:"remarks"===e.column.property?[e.row[e.column.property]?[t._v("\n              "+t._s(e.row[e.column.property])+"\n            ")]:t.sendAuth?n("el-button",{attrs:{type:"text"},on:{click:function(n){t.handleCommand("add",e.row)}}},[t._v("添加")]):t._e()]:[t._v("\n            "+t._s(t.fieldFormatter(e.row,e.column))+"\n          ")]]}}])})})),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},nativeOn:{click:function(n){n.preventDefault(),t.checkDetail(e.row)}}},[t._v("\n            查看明细\n          ")])]}}])}),t._v(" "),n("el-table-column")],2),t._v(" "),n("div",{staticClass:"p-contianer"},[n("el-pagination",{staticClass:"p-bar",attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),n("slip-detail-dialog",{attrs:{id:t.rowData.id,visible:t.detailDialogShow},on:{"update:visible":function(e){t.detailDialogShow=e}}})],1)},r=[],o=n("5530"),i=(n("14d9"),n("b64b"),n("d81d"),n("fa12")),l=n("0f4c"),c=n("f468"),s=n("8e93"),u=n("9011"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{ref:"wkDialog",attrs:{visible:t.visible,"append-to-body":!0,"close-on-click-modal":!1,title:t.title,width:"500px"},on:{close:t.handleCancel}},[n("div",{staticClass:"slip-dialog-body"},[n("div",{staticClass:"slip-header"},[n("div",{staticClass:"slip-header__title"},[t._v(t._s(t.totalValue))]),t._v(" "),n("div",{staticClass:"slip-header__des"},[t._v("实发金额（元）")])]),t._v(" "),t._l(t.list,(function(e,a){return n("div",{key:a},[n("flexbox",{staticClass:"slip-item"},[n("div",{staticClass:"slip-item__title text-one-line is-class"},[t._v(t._s(e.name))])]),t._v(" "),t._l(e.optionList,(function(a,r){return n("flexbox",{key:"sub"+r,staticClass:"slip-item"},[n("div",{staticClass:"slip-item__title text-one-line"},[t._v(t._s(a.name)),e.remark?n("el-tooltip",{attrs:{content:e.remark,effect:"dark",placement:"top"}},[n("i",{staticClass:"wk wk-help wk-help-tips",staticStyle:{"margin-left":"3px"}})]):t._e()],1),t._v(" "),n("div",{staticClass:"slip-item__value"},[t._v(t._s(a.value))])])}))],2)}))],2),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{nativeOn:{click:function(e){return t.handleCancel(e)}}},[t._v("关闭")])],1)])},h=[],p=(n("a9e3"),n("9dba")),m={name:"SlipDetailDialog",components:{},mixins:[p["a"]],props:{id:[String,Number],visible:{type:Boolean,required:!0,default:!1}},data:function(){return{loading:!1,title:"明细详情",totalValue:0,list:[]}},computed:{},watch:{visible:{handler:function(t){t&&this.getDetail()},immediate:!0}},mounted:function(){},methods:{handleCancel:function(){this.close()},close:function(){this.$emit("update:visible",!1)},getDetail:function(){var t=this;this.loading=!0,Object(i["M"])(this.id).then((function(e){t.list=e.data||[];for(var n=!1,a=0;a<t.list.length;a++){var r=t.list[a];if(r.optionList){for(var o=0;o<r.optionList.length;o++){var i=r.optionList[o];if(240101===i.code){t.totalValue=i.value||0,n=!0;break}}if(n)break}}t.loading=!1})).catch((function(){t.loading=!1}))}}},f=m,y=(n("1fac"),n("2877")),b=Object(y["a"])(f,d,h,!1,null,"4130416a",null),S=b.exports,g=n("2f62"),v={name:"SalarySlipDetail",components:{XrHeader:c["a"],XrTableHeader:s["a"],WkPopoverFilter:u["a"],SlipDetailDialog:S},data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-210,list:[],fieldList:[],currentPage:1,pageSize:15,pageSizes:[15,30,60,100],total:0,popoverFilterWidth:document.documentElement.clientWidth-80,filterObj:{},selectionList:[],rowData:{},detailDialogShow:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(g["b"])(["hrm"])),{},{salaryAuth:function(){return this.hrm.salary},sendAuth:function(){return this.salaryAuth&&this.salaryAuth.sendSlip},id:function(){return this.$route.params.id},titleMonth:function(){return this.$route.params.month},tabelHandles:function(){var t=[];return this.sendAuth&&t.push({label:"编辑备注",command:"edit",icon:"wk wk-circle-edit"},{label:"删除备注",command:"delete",icon:"wk wk-delete"}),t},hasFilterContent:function(){if(this.filterObj){for(var t=!1,e=Object.keys(this.filterObj),n=0;n<e.length;n++){var a=e[n];""!=this.filterObj[a]&&this.filterObj[a]!=[]&&null!=this.filterObj[a]&&void 0!=this.filterObj[a]&&(t=!0)}return t}return!1},filterList:function(){return[{name:"员工姓名/工号",field:"search",formType:"text",setting:[]},{name:"部门",field:"deptId",formType:"structure",props:{dataType:"hrm"},request:l["e"],setting:[]},{name:"查看状态",field:"readStatus",formType:"select",setting:[{label:"未查看",value:0},{label:"已查看",value:1}]},{name:"备注",field:"remarks",formType:"text",setting:[]}]}}),watch:{},created:function(){var t=this;window.onresize=function(){t.tableHeight=document.documentElement.clientHeight-(t.selectionList.length>0?260:210)},this.fieldList=this.getFieldList(),this.refreshPageData()},methods:{goBack:function(){this.$router.go(-1)},refreshPageData:function(){this.refreshList()},resetFilter:function(){this.filterObj={},this.refreshList()},refreshList:function(){this.handleCurrentChange(1)},handleSizeChange:function(t){this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},getList:function(){var t=this;this.loading=!0;var e={page:this.currentPage,limit:this.pageSize,id:this.id};for(var n in this.filterObj)e[n]=this.filterObj[n];Object(i["P"])(e).then((function(e){t.list=e.data.list,t.total=e.data.totalRow,e.data.totalRow&&Math.ceil(e.data.totalRow/t.pageSize)<t.currentPage&&t.currentPage>1?(t.currentPage=t.currentPage-1,t.getList()):(t.total=e.data.totalRow,t.loading=!1),t.$nextTick((function(){var t=document.querySelector(".el-table__body-wrapper");t.scrollTop=1,0!=t.scrollLeft&&(t.scrollLeft=t.scrollLeft-1)})),t.loading=!1})).catch((function(){t.loading=!1}))},fieldFormatter:function(t,e){return t[e.property]||"--"},handleCommand:function(t,e){var n=this;if("delete"===t)this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.updateRemarks({ids:n.selectionList.map((function(t){return t.id})),remarks:""})})).catch((function(){}));else if("edit"===t){var a="";1===this.selectionList.length&&(a=this.selectionList[0].remarks),this.$prompt("","备注",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"text",inputValue:a,inputPlaceholder:"请输入内容",closeOnClickModal:!1}).then((function(t){var e=t.value;n.updateRemarks({ids:n.selectionList.map((function(t){return t.id})),remarks:e})})).catch((function(){}))}else"add"===t&&this.$prompt("","备注",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"text",inputValue:"",inputPlaceholder:"请输入内容",closeOnClickModal:!1}).then((function(t){var a=t.value;n.updateRemarks({ids:[e.id],remarks:a})})).catch((function(){}))},updateRemarks:function(t){var e=this;Object(i["R"])(t).then((function(t){e.$message({type:"success",message:"操作成功"}),e.getList()})).catch((function(){}))},handleSelectionChange:function(t){this.selectionList=t,this.tableHeight=document.documentElement.clientHeight-(this.selectionList.length>0?260:210)},getFieldList:function(){return[{fieldName:"employeeName",name:"姓名",width:140},{fieldName:"jobNumber",name:"工号",width:80},{fieldName:"deptName",name:"部门",width:80},{fieldName:"post",name:"岗位",width:180},{fieldName:"mobile",name:"手机号码",width:140},{fieldName:"readStatus",name:"查看状态",width:80},{fieldName:"remarks",name:"备注",width:120}]},checkDetail:function(t){this.rowData=t,this.detailDialogShow=!0},getReadStatus:function(t){return{0:"未查看",1:"已查看"}[t]}}},j=v,T=(n("d356"),Object(y["a"])(j,a,r,!1,null,"20eb0992",null));e["default"]=T.exports},fa12:function(t,e,n){"use strict";n.d(e,"A",(function(){return r})),n.d(e,"C",(function(){return o})),n.d(e,"G",(function(){return i})),n.d(e,"H",(function(){return l})),n.d(e,"B",(function(){return c})),n.d(e,"E",(function(){return s})),n.d(e,"F",(function(){return u})),n.d(e,"z",(function(){return d})),n.d(e,"J",(function(){return h})),n.d(e,"y",(function(){return p})),n.d(e,"x",(function(){return m})),n.d(e,"K",(function(){return f})),n.d(e,"w",(function(){return y})),n.d(e,"v",(function(){return b})),n.d(e,"u",(function(){return S})),n.d(e,"I",(function(){return g})),n.d(e,"D",(function(){return v})),n.d(e,"V",(function(){return j})),n.d(e,"U",(function(){return T})),n.d(e,"T",(function(){return C})),n.d(e,"S",(function(){return O})),n.d(e,"N",(function(){return w})),n.d(e,"O",(function(){return _})),n.d(e,"Q",(function(){return k})),n.d(e,"P",(function(){return R})),n.d(e,"R",(function(){return L})),n.d(e,"M",(function(){return F})),n.d(e,"L",(function(){return x})),n.d(e,"m",(function(){return D})),n.d(e,"r",(function(){return q})),n.d(e,"t",(function(){return A})),n.d(e,"s",(function(){return M})),n.d(e,"o",(function(){return U})),n.d(e,"q",(function(){return P})),n.d(e,"p",(function(){return N})),n.d(e,"j",(function(){return z})),n.d(e,"h",(function(){return B})),n.d(e,"a",(function(){return H})),n.d(e,"i",(function(){return E})),n.d(e,"n",(function(){return $})),n.d(e,"l",(function(){return I})),n.d(e,"k",(function(){return V})),n.d(e,"b",(function(){return W})),n.d(e,"d",(function(){return J})),n.d(e,"e",(function(){return X})),n.d(e,"f",(function(){return G})),n.d(e,"c",(function(){return K})),n.d(e,"g",(function(){return Q})),n.d(e,"W",(function(){return Y}));n("d3b7"),n("159b"),n("b64b");var a=n("b775");function r(){return Object(a["a"])({url:"hrmSalaryMonthRecord/addNextMonthSalary",method:"post"})}function o(t){var e=new FormData;return Object.keys(t).forEach((function(n){e.append(n,t[n])})),Object(a["a"])({url:"hrmSalaryMonthRecord/computeSalaryData",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}function i(t){return Object(a["a"])({url:"hrmSalaryMonthRecord/queryPaySalaryNumByType/".concat(t),method:"post"})}function l(){return Object(a["a"])({url:"hrmSalaryMonthRecord/queryNoPaySalaryEmployee",method:"post"})}function c(){return Object(a["a"])({url:"hrmSalaryMonthRecord/queryEmployeeChangeNum",method:"post"})}function s(){return Object(a["a"])({url:"hrmSalaryMonthRecord/querySalaryOptionHead",method:"post"})}function u(t){return Object(a["a"])({url:"hrmSalaryMonthRecord/querySalaryPageList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function d(){return Object(a["a"])({url:"hrmSalaryMonthRecord/queryLastSalaryMonthRecord",method:"post"})}function h(t){return Object(a["a"])({url:"hrmSalaryMonthRecord/querySalaryOptionCount/".concat(t),method:"post"})}function p(t){return Object(a["a"])({url:"hrmSalaryHistoryRecord/queryHistorySalaryList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function m(t){return Object(a["a"])({url:"hrmSalaryHistoryRecord/queryHistorySalaryDetail",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function f(t){return Object(a["a"])({url:"hrmSalaryMonthRecord/updateSalary",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function y(){return Object(a["a"])({url:"hrmSalaryMonthRecord/downloadAttendanceTemp",method:"post",responseType:"blob",headers:{"Content-Type":"application/json;charset=UTF-8"}})}function b(){return Object(a["a"])({url:"hrmSalaryMonthRecord/downCumulativeTaxOfLastMonthTemp",method:"post",responseType:"blob",headers:{"Content-Type":"application/json;charset=UTF-8"}})}function S(){return Object(a["a"])({url:"hrmSalaryMonthRecord/downloadAdditionalDeductionTemp",method:"post",responseType:"blob",headers:{"Content-Type":"application/json;charset=UTF-8"}})}function g(t){return Object(a["a"])({url:"hrmSalaryMonthRecord/submitExamine",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function v(t){return Object(a["a"])({url:"hrmSalaryMonthRecord/deleteSalary/".concat(t),method:"post"})}function j(){return Object(a["a"])({url:"hrmSalarySlipTemplate/querySlipTemplateList",method:"post"})}function T(t){return Object(a["a"])({url:"hrmSalarySlipTemplateOption/queryTemplateOptionByTemplateId/".concat(t),method:"post"})}function C(t){return Object(a["a"])({url:"hrmSalarySlipTemplate/deleteSlipTemplate/".concat(t),method:"post"})}function O(t){return Object(a["a"])({url:"hrmSalarySlipTemplate/addSlipTemplate",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function w(t){return Object(a["a"])({url:"hrmSalarySlipRecord/querySlipEmployeePageList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function _(t){return Object(a["a"])({url:"hrmSalarySlipRecord/sendSalarySlip",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function k(t){return Object(a["a"])({url:"hrmSalarySlipRecord/querySendRecordList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function R(t){return Object(a["a"])({url:"hrmSalarySlipRecord/querySendDetailList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function L(t){return Object(a["a"])({url:"hrmSalarySlipRecord/setSlipRemarks",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function F(t){return Object(a["a"])({url:"hrmSalarySlipRecord/querySlipDetail/".concat(t),method:"post"})}function x(t){return Object(a["a"])({url:"hrmSalarySlipRecord/deleteSendRecord/".concat(t),method:"post"})}function D(t){return Object(a["a"])({url:"hrmSalaryArchives/querySalaryArchivesList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function q(t){return Object(a["a"])({url:"hrmSalaryChangeTemplate/deleteChangeTemplate/".concat(t),method:"post"})}function A(){return Object(a["a"])({url:"hrmSalaryChangeTemplate/queryChangeSalaryOption",method:"post"})}function M(){return Object(a["a"])({url:"hrmSalaryChangeTemplate/queryChangeTemplateList",method:"post"})}function U(t){return Object(a["a"])({url:"hrmSalaryChangeTemplate/setChangeTemplate",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function P(t){return Object(a["a"])({url:"hrmSalaryArchives/setFixSalaryRecord",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function N(t){return Object(a["a"])({url:"hrmSalaryArchives/setChangeSalaryRecord",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function z(t){return Object(a["a"])({url:"hrmSalaryArchives/queryChangeOptionByTemplateId",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function B(){return Object(a["a"])({url:"hrmSalaryArchives/queryBatchChangeOption",method:"post"})}function H(t){return Object(a["a"])({url:"hrmSalaryArchives/batchChangeSalaryRecord",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function E(t){return Object(a["a"])({url:"hrmSalaryArchives/querySalaryArchivesById/".concat(t),method:"post"})}function $(t){return Object(a["a"])({url:"hrmSalaryArchives/queryChangeRecordList/".concat(t),method:"post"})}function I(t){return Object(a["a"])({url:"hrmSalaryArchives/queryFixSalaryRecordById/".concat(t),method:"post"})}function V(t){return Object(a["a"])({url:"hrmSalaryArchives/queryChangeSalaryRecordById/".concat(t),method:"post"})}function W(t){return Object(a["a"])({url:"hrmSalaryArchives/cancelChangeSalary/".concat(t),method:"post"})}function J(t){return Object(a["a"])({url:"hrmSalaryArchives/deleteChangeSalary/".concat(t),method:"post"})}function X(){return Object(a["a"])({url:"hrmSalaryArchives/downLoadChangeTemplate",method:"post",responseType:"blob",headers:{"Content-Type":"application/json;charset=UTF-8"}})}function G(){return Object(a["a"])({url:"hrmSalaryArchives/downLoadFixTemplate",method:"post",responseType:"blob",headers:{"Content-Type":"application/json;charset=UTF-8"}})}function K(t){var e=new FormData;return Object.keys(t).forEach((function(n){e.append(n,t[n])})),Object(a["a"])({url:"hrmSalaryArchives/exportChangeSalaryRecord",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function Q(t){var e=new FormData;return Object.keys(t).forEach((function(n){e.append(n,t[n])})),Object(a["a"])({url:"hrmSalaryArchives/exportFixSalaryRecord",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}function Y(t){return Object(a["a"])({url:"hrmSalaryMonthRecord/useExamineEmailTokenForSalaryPageList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"},customConfig:{removeToken:!0}})}}}]);