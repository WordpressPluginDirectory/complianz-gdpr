"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[1629],{81629:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var n=i(81621),s=i(16535),d=i(9588),o=i(73710);const c=(0,n.vt)(((e,t)=>({documentsLoaded:!1,region:"",fileName:"",serviceName:"",fetching:!1,updating:!1,loadingFields:!1,documents:[],regions:[],fields:[],editDocumentId:!1,resetEditDocumentId:t=>{e({editDocumentId:!1,region:"",serviceName:""})},editDocument:async t=>{e({updating:!0}),await d.doAction("load_processing_agreement",{id:t}).then((t=>{e({fields:t.fields,region:t.region,serviceName:t.serviceName,updating:!1,fileName:t.file_name})})).catch((e=>{console.error(e)})),e({editDocumentId:t})},setRegion:t=>{e({region:t})},setServiceName:t=>{e({serviceName:t})},updateField:(i,n)=>{let d=!1,c=!1;e((0,s.Ay)((e=>{e.fields.forEach((function(e,t){e.id===i&&(c=t,d=!0)})),!1!==c&&(e.fields[c].value=n)})));let a=(0,o.updateFieldsListWithConditions)(t().fields);e({fields:a})},save:async(i,n)=>{e({updating:!0});let s=t().editDocumentId;await d.doAction("save_processing_agreement",{fields:t().fields,region:i,serviceName:n,post_id:s}).then((t=>(e({updating:!1}),t))).catch((e=>{console.error(e)})),t().fetchData()},deleteDocuments:async i=>{let n=t().documents.filter((e=>i.includes(e.id)));e((e=>({documents:e.documents.filter((e=>!i.includes(e.id)))})));let s={};s.documents=n,await d.doAction("delete_processing_agreement",s).then((e=>e)).catch((e=>{console.error(e)}))},fetchData:async()=>{if(t().fetching)return;e({fetching:!0});const{documents:i,regions:n}=await d.doAction("get_processing_agreements",{}).then((e=>e)).catch((e=>{console.error(e)}));e((()=>({documentsLoaded:!0,documents:i,regions:n,fetching:!1})))},fetchFields:async t=>{let i={region:t};e({loadingFields:!0});const{fields:n}=await d.doAction("get_processing_agreement_fields",i).then((e=>e)).catch((e=>{console.error(e)}));let s=(0,o.updateFieldsListWithConditions)(n);e((e=>({fields:s,loadingFields:!1})))}})))}}]);