(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80d6958a"],{"970d":function(e,t,n){"use strict";n("d38c")},"9a4b":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{staticClass:"crm-ralative",attrs:{visible:e.visible,"close-on-click-modal":!1,title:e.getTitle(),width:e.contentWidth,"append-to-body":""},on:{close:e.closeView}},[n("div",{ref:"crContainer",staticClass:"cr-container-wrap"},[n("div",{staticClass:"cr-container"},[e.currentDataType||e.config.isCommon?e._e():n("div",{staticClass:"cr-body-side"},e._l(e.leftSides,(function(t,i){return n("div",{key:i,staticClass:"side-item",class:e.leftType===t.type?"side-item-select":"side-item-default",on:{click:function(n){e.sideClick(t)}}},[e._v(e._s(t.name)+"\n          "),t.num>0?n("span",{staticClass:"side-item__num"},[e._v(e._s("("+t.num+")"))]):e._e()])}))),e._v(" "),e.config.isCommon?n("div",[n("crm-relative-table",{ref:"moduleTable",attrs:{props:e.config,"selected-data":e.currentSelectedData[e.leftType]},on:{"selection-change":function(t){e.selectionChange(t,e.leftSides.find((function(t){return t.type===e.leftType})))}}})],1):n("div",{style:{"padding-left":e.currentDataType?"0":"150px"}},[n("keep-alive",{attrs:{include:e.leftSides.filter((function(e){return e.loaded})).map((function(e){return e.component}))}},[n(e.getCurrentComponent(e.leftType),{ref:"moduleTable",tag:"component",staticClass:"crm-table-index",attrs:{props:e.componentConfig[e.leftType],"selected-data":e.currentSelectedData[e.leftType]},on:{"selection-change":function(t){e.selectionChange(t,e.leftSides.find((function(t){return t.type===e.leftType})))}}})],1)],1)]),e._v(" "),n("div",{class:["dialog-footer",{"is-common":e.config.isCommon}]},[e._t("footer"),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.confirmClick(!1)}}},[e._v("确定")]),e._v(" "),n("el-button",{on:{click:e.closeView}},[e._v("取消")])],2)])])},a=[],s=n("5530"),c=(n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("b64b"),n("14d9"),n("b0c0"),n("ed08")),r=n("8ed6"),o={isCommon:!1,type:"",name:"",dataType:null,showTypes:null,params:null,paramsObj:null,mainTableProps:null},l={name:"CrmRelatieve",components:{CrmRelativeTable:function(){return n.e("chunk-9dd2429e").then(n.bind(null,"38dd"))}},provide:function(){return{elForm:"",elFormItem:""}},props:{props:Object,dataType:String,showTypes:Array,selectedData:{type:Object,default:function(){return{}}},visible:Boolean,radio:{type:Boolean,default:!0}},data:function(){return{leftType:"",leftSides:[],currentSelectedData:{}}},computed:{config:function(){return Object(r["a"])(Object(s["a"])({},o),this.props||{})},currentDataType:function(){return this.dataType||this.config.dataType},currentShowTypes:function(){return this.showTypes||this.config.showTypes||["customer","contacts","leads","business","contract","product","receivables"]},componentConfig:function(){var e=this,t=function(t){var n={};e.currentDataType?n=e.config.params:e.config.paramsObj&&e.config.paramsObj[t]&&(n=e.config.paramsObj[t]);var i=Object(s["a"])({isSelect:!0,showModuleName:!1,selectionHandle:!1,radio:e.radio,params:n,otherHeight:340},e.config.mainTableProps||{});return i},n={};return this.leftSides.forEach((function(e){n[e.type]=t(e.type)})),n},contentWidth:function(){return this.currentDataType&&!this.config.isCommon?"1050px":"910px"}},watch:{visible:function(e){var t=this;e&&this.$nextTick((function(){var e=t.getCurrentMainTable();e.updateTableHeight&&e.updateTableHeight()}))},selectedData:function(e){this.handleCurrentSelectData(e)}},mounted:function(){this.handleCurrentSelectData(this.selectedData)},methods:{handleCurrentSelectData:function(e){if(this.config.isCommon){var t={};t[this.config.type]=[],this.currentSelectedData=t}else if(e&&Object.keys(e).length)this.currentSelectedData=Object(c["z"])(e);else{var n={};if(this.currentDataType)n[this.currentDataType]=[],this.currentSelectedData=n;else{for(var i=0;i<this.currentShowTypes.length;i++){var a=this.currentShowTypes[i];n[a]=[]}this.currentSelectedData=n}}if(this.config.isCommon)this.leftSides.push({name:this.config.name,isCommon:!0,loaded:!0,num:0,type:this.config.type}),this.leftType=this.config.type;else if(0===this.leftSides.length){var s=this.getLeftItems();if(this.currentDataType){var r=s[this.currentDataType];r.loaded=!0,this.leftSides.push(r),this.leftType=this.currentDataType}else{for(var o=0;o<this.currentShowTypes.length;o++){var l=s[this.currentShowTypes[o]],u=this.currentSelectedData[l.type];l.num=u?u.length:0,this.leftSides.push(l)}if(this.leftSides.length>0){var d=this.leftSides[0];d.loaded=!0,this.leftType=d.type}}}else if(!this.currentDataType)for(var p=0;p<this.leftSides.length;p++){var h=this.leftSides[p],f=this.currentSelectedData[h.type];h.num=f?f.length:0}},refreshList:function(){this.$refs["crm"+this.currentDataType][0].refreshList()},sideClick:function(e){this.leftType=e.type,e.loaded=!0},closeView:function(){this.$emit("cancel"),this.closeEmit()},closeEmit:function(){this.$emit("close"),this.$emit("update:visible",!1)},selectionChange:function(e,t){t.num=e.length,this.currentSelectedData[this.leftType]=e},confirmClick:function(){var e=this;this.currentDataType&&(this.currentSelectedData[this.leftType]=this.getCurrentMainTable().selectionList),this.currentDataType?this.$emit("changeCheckout",{data:this.currentSelectedData[this.currentDataType]?this.currentSelectedData[this.currentDataType]:[],props:this.config}):this.$emit("changeCheckout",{data:this.currentSelectedData,props:this.config}),this.$nextTick((function(){e.closeEmit()}))},getCurrentMainTable:function(){return this.$refs.moduleTable},getCurrentComponent:function(e){var t;return(null===(t=this.getLeftItems()[e])||void 0===t?void 0:t.component)||"CrmRelativeTable"},getTitle:function(){return this.config.isCommon?this.config.name:"leads"==this.currentDataType?"关联线索模块":"customer"==this.currentDataType?"关联客户模块":"contacts"==this.currentDataType?"关联联系人模块":"business"==this.currentDataType?"关联商机模块":"product"==this.currentDataType?"关联产品模块":"contract"==this.currentDataType?"关联合同模块":"receivables"==this.currentDataType?"关联回款模块":"item"==this.currentDataType?"关联事项":"module"==this.currentDataType?"关联产品模块":"关联相关信息"},setSelections:function(e){this.getCurrentMainTable().setSelections(e)},toggleRowSelection:function(e,t,n){this.getCurrentMainTable().toggleRowSelection(e,t,n)},getLeftItems:function(){return{customer:{name:"客户",loaded:!1,num:0,type:"customer",component:"CustomerIndex"},contacts:{name:"联系人",loaded:!1,num:0,type:"contacts",component:"ContactsIndex"},leads:{name:"线索",loaded:!1,num:0,type:"leads",component:"LeadsIndex"},business:{name:"商机",loaded:!1,num:0,type:"business",component:"BusinessIndex"},contract:{name:"合同",loaded:!1,num:0,type:"contract",component:"ContractIndex"},product:{name:"产品",loaded:!1,num:0,type:"product",component:"ProductIndex"},receivables:{name:"回款",loaded:!1,num:0,type:"receivables",component:"ReceivablesIndex"},item:{name:"全部事项",loaded:!1,num:0,type:"item",component:"AllItem"},module:{name:"产品",loaded:!1,num:0,type:"module",component:"ModuleIndex"}}}}},u=l,d=(n("970d"),n("2877")),p=Object(d["a"])(u,i,a,!1,null,"f4e2ed60",null);t["default"]=p.exports},d38c:function(e,t,n){}}]);