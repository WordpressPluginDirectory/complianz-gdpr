"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[8583,8507,4759],{7320:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var c=r(51609),i=r(62848);const n=(0,r(86087).memo)((({label:e,id:t,value:r,onChange:n,required:s,defaultValue:l,disabled:a,options:o={}})=>(0,c.createElement)(i.bL,{disabled:a&&!Array.isArray(a),className:"cmplz-input-group cmplz-radio-group",value:r,"aria-label":e,onValueChange:n,required:s,default:l},Object.entries(o).map((([e,r])=>(0,c.createElement)("div",{key:e,className:"cmplz-radio-group__item"},(0,c.createElement)(i.q7,{disabled:Array.isArray(a)&&a.includes(e),value:e,id:t+"_"+e},(0,c.createElement)(i.C1,{className:"cmplz-radio-group__indicator"})),(0,c.createElement)("label",{className:"cmplz-radio-label",htmlFor:t+"_"+e},r)))))))},31356:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var c=r(51609),i=r(7320),n=r(27723),s=r(34759);const l=e=>{const{setScript:t,fetching:r}=(0,s.default)(),l=e.script,a={statistics:(0,n.__)("Statistics","complianz-gdpr"),marketing:(0,n.__)("Marketing","complianz-gdpr")};return(0,c.createElement)(c.Fragment,null,(0,c.createElement)("label",null,(0,n.__)("Category","complianz-gdpr")),(0,c.createElement)(i.default,{disabled:r,label:(0,n.__)("Marketing","complianz-gdpr"),id:"category",value:l.category,onChange:r=>((r,c)=>{let i={...l};i.category=r,t(i,e.type)})(r),defaultValue:"marketing",options:a}))}},34759:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var c=r(81621),i=r(16535),n=r(9588);const s=(0,c.vt)(((e,t)=>({integrationsLoaded:!1,fetching:!1,services:[],plugins:[],scripts:[],placeholders:[],blockedScripts:[],setScript:(t,r)=>{e((0,i.Ay)((e=>{if("block_script"===r){let r=e.blockedScripts;if(t.urls){for(const[e,c]of Object.entries(t.urls)){if(!c||0===c.length)continue;let e=!1;for(const[t,i]of Object.entries(r))c===t&&(e=!0);e||(r[c]=c)}e.blockedScripts=r}}const c=e.scripts[r].findIndex((e=>e.id===t.id));-1!==c&&(e.scripts[r][c]=t)})))},fetchIntegrationsData:async()=>{if(t().fetching)return;e({fetching:!0});const{services:r,plugins:c,scripts:i,placeholders:n,blocked_scripts:s}=await l();let a=i;a.block_script&&a.block_script.length>0&&a.block_script.forEach(((e,t)=>{e.id=t})),a.add_script&&a.add_script.length>0&&a.add_script.forEach(((e,t)=>{e.id=t})),a.whitelist_script&&a.whitelist_script.length>0&&a.whitelist_script.forEach(((e,t)=>{e.id=t})),e((()=>({integrationsLoaded:!0,services:r,plugins:c,scripts:a,fetching:!1,placeholders:n,blockedScripts:s})))},addScript:r=>{e({fetching:!0}),t().scripts[r]&&Array.isArray(t().scripts[r])||e((0,i.Ay)((e=>{e.scripts[r]=[]}))),e((0,i.Ay)((e=>{e.scripts[r].push({name:"general",id:e.scripts[r].length,enable:!0})})));let c=t().scripts;return n.doAction("update_scripts",{scripts:c}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},saveScript:(r,c)=>{e({fetching:!0}),t().scripts[c]&&Array.isArray(t().scripts[c])||e((0,i.Ay)((e=>{e.scripts[c]=[]}))),e((0,i.Ay)((e=>{const t=e.scripts[c].findIndex((e=>e.id===r.id));-1!==t&&(e.scripts[c][t]=r)})));let s=t().scripts;return n.doAction("update_scripts",{scripts:s}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},deleteScript:(r,c)=>{e({fetching:!0}),t().scripts[c]&&Array.isArray(t().scripts[c])||e((0,i.Ay)((e=>{e.scripts[c]=[]}))),e((0,i.Ay)((e=>{const t=e.scripts[c].findIndex((e=>e.id===r.id));-1!==t&&e.scripts[c].splice(t,1)})));let s=t().scripts;return n.doAction("update_scripts",{scripts:s}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},updatePluginStatus:async(t,r)=>{e({fetching:!0}),e((0,i.Ay)((e=>{const c=e.plugins.findIndex((e=>e.id===t));-1!==c&&(e.plugins[c].enabled=r)})));const c=await n.doAction("update_plugin_status",{plugin:t,enabled:r}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),c},updatePlaceholderStatus:async(t,r,c)=>{e({fetching:!0}),c&&e((0,i.Ay)((e=>{const c=e.plugins.findIndex((e=>e.id===t));-1!==c&&(e.plugins[c].placeholder=r?"enabled":"disabled")})));const s=await n.doAction("update_placeholder_status",{id:t,enabled:r}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),s}}))),l=()=>n.doAction("get_integrations_data",{}).then((e=>e)).catch((e=>{console.error(e)}))},16214:(e,t,r)=>{r.d(t,{N:()=>l});var c=r(51609),i=r(62133),n=r(91071),s=r(33362);function l(e){const t=e+"CollectionProvider",[r,l]=(0,i.A)(t),[a,o]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=e+"CollectionSlot",p=e+"CollectionItemSlot",u="data-radix-collection-item";return[{Provider:e=>{const{scope:t,children:r}=e,i=c.useRef(null),n=c.useRef(new Map).current;return c.createElement(a,{scope:t,itemMap:n,collectionRef:i},r)},Slot:c.forwardRef(((e,t)=>{const{scope:r,children:i}=e,l=o(d,r),a=(0,n.s)(t,l.collectionRef);return c.createElement(s.DX,{ref:a},i)})),ItemSlot:c.forwardRef(((e,t)=>{const{scope:r,children:i,...l}=e,a=c.useRef(null),d=(0,n.s)(t,a),f=o(p,r);return c.useEffect((()=>(f.itemMap.set(a,{ref:a,...l}),()=>{f.itemMap.delete(a)}))),c.createElement(s.DX,{[u]:"",ref:d},i)}))},function(t){const r=o(e+"CollectionConsumer",t);return c.useCallback((()=>{const e=r.collectionRef.current;if(!e)return[];const t=Array.from(e.querySelectorAll(`[${u}]`));return Array.from(r.itemMap.values()).sort(((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current)))}),[r.collectionRef,r.itemMap])},l]}},71427:(e,t,r)=>{r.d(t,{jH:()=>n});var c=r(51609);const i=(0,c.createContext)(void 0);function n(e){const t=(0,c.useContext)(i);return e||t||"ltr"}},18723:(e,t,r)=>{var c;r.d(t,{B:()=>a});var i=r(51609),n=r(88200);const s=(c||(c=r.t(i,2)))["useId".toString()]||(()=>{});let l=0;function a(e){const[t,r]=i.useState(s());return(0,n.N)((()=>{e||r((e=>null!=e?e:String(l++)))}),[e]),e||(t?`radix-${t}`:"")}},85357:(e,t,r)=>{r.d(t,{Z:()=>i});var c=r(51609);function i(e){const t=(0,c.useRef)({value:e,previous:e});return(0,c.useMemo)((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}}}]);