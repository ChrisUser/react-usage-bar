import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{U as a}from"./UsageBar-DWASMHb_.js";import"./index-CqrSl2Gl.js";const W={title:"Usage Bar Dark",component:a,parameters:{}},o=[{name:"UI",value:10,color:"#E85D04"},{name:"Photos",value:30},{name:"Videos",value:15},{name:"System Data",value:33},{name:"Other",value:8}],r={backgroundColor:"#212121",padding:48},L={maxWidth:500,margin:"0 auto"},s=()=>e.jsx("div",{style:r,children:e.jsx(a,{darkMode:!0,showFallbackColors:!0,items:o,total:100})}),t=()=>e.jsx("div",{style:r,children:e.jsx(a,{showLabels:!1,showFallbackColors:!0,darkMode:!0,items:o,total:100})}),d=()=>e.jsx("div",{style:r,children:e.jsx(a,{showPercentage:!0,showFallbackColors:!0,darkMode:!0,items:o,total:100})}),l=()=>e.jsx("div",{style:{...r,...L},children:e.jsx(a,{showPercentage:!0,showFallbackColors:!0,compactLayout:!0,darkMode:!0,items:o,total:100})}),n=()=>e.jsx("div",{style:{...r,...L},children:e.jsx(a,{showLabels:!1,compactLayout:!0,showFallbackColors:!0,darkMode:!0,items:o,total:100})}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"If sum of values exceeds total."}),e.jsx("div",{style:r,children:e.jsx(a,{items:o,total:50})})]});s.__docgenInfo={description:"",methods:[],displayName:"darkMode"};t.__docgenInfo={description:"",methods:[],displayName:"darkModeWithoutLabels"};d.__docgenInfo={description:"",methods:[],displayName:"darkModeWithPercentages"};l.__docgenInfo={description:"",methods:[],displayName:"darkModeCompact"};n.__docgenInfo={description:"",methods:[],displayName:"darkModeCompactWithoutLabels"};c.__docgenInfo={description:"",methods:[],displayName:"error"};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => <div style={mainDarkModeContainerStyle}>
        <UsageBar darkMode showFallbackColors items={items} total={100} />
    </div>`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,k,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => <div style={mainDarkModeContainerStyle}>
        <UsageBar showLabels={false} showFallbackColors darkMode items={items} total={100} />
    </div>`,...(h=(k=t.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var y,g,M;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => <div style={mainDarkModeContainerStyle}>
        <UsageBar showPercentage showFallbackColors darkMode items={items} total={100} />
    </div>`,...(M=(g=d.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var C,v,b;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div style={{
  ...mainDarkModeContainerStyle,
  ...compactContainerStyle
}}>
        <UsageBar showPercentage showFallbackColors compactLayout darkMode items={items} total={100} />
    </div>`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,w,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div style={{
  ...mainDarkModeContainerStyle,
  ...compactContainerStyle
}}>
        <UsageBar showLabels={false} compactLayout showFallbackColors darkMode items={items} total={100} />
    </div>`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,j,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => <>
        <p>If sum of values exceeds total.</p>
        <div style={mainDarkModeContainerStyle}>
            <UsageBar items={items} total={50} />
        </div>
    </>`,...(_=(j=c.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const B=["darkMode","darkModeWithoutLabels","darkModeWithPercentages","darkModeCompact","darkModeCompactWithoutLabels","error"];export{B as __namedExportsOrder,s as darkMode,l as darkModeCompact,n as darkModeCompactWithoutLabels,d as darkModeWithPercentages,t as darkModeWithoutLabels,W as default,c as error};
