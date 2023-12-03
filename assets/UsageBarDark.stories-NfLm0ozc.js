import{U as a,j as e}from"./UsageBar-QtNeRPsh.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const P={title:"Usage Bar Dark",component:a,parameters:{}},o=[{name:"UI",value:10,color:"#E85D04"},{name:"Photos",value:30},{name:"Videos",value:15},{name:"System Data",value:33},{name:"Other",value:8}],r={backgroundColor:"#212121",padding:48},F={maxWidth:500,margin:"0 auto"},s=()=>e.jsx("div",{style:r,children:e.jsx(a,{darkMode:!0,showFallbackColors:!0,items:o,total:100})}),t=()=>e.jsx("div",{style:r,children:e.jsx(a,{showLabels:!1,showFallbackColors:!0,darkMode:!0,items:o,total:100})}),l=()=>e.jsx("div",{style:r,children:e.jsx(a,{showPercentage:!0,showFallbackColors:!0,darkMode:!0,items:o,total:100})}),d=()=>e.jsx("div",{style:{...r,...F},children:e.jsx(a,{showPercentage:!0,showFallbackColors:!0,compactLayout:!0,darkMode:!0,items:o,total:100})}),c=()=>e.jsx("div",{style:{...r,...F},children:e.jsx(a,{showLabels:!1,compactLayout:!0,showFallbackColors:!0,darkMode:!0,items:o,total:100})}),n=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"If sum of values exceeds total."}),e.jsx("div",{style:r,children:e.jsx(a,{items:o,total:50})})]});var i,m,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => <div style={mainDarkModeContainerStyle}>
        <UsageBar darkMode showFallbackColors items={items} total={100} />
    </div>`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,k,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div style={mainDarkModeContainerStyle}>
        <UsageBar showLabels={false} showFallbackColors darkMode items={items} total={100} />
    </div>`,...(h=(k=t.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var y,M,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => <div style={mainDarkModeContainerStyle}>
        <UsageBar showPercentage showFallbackColors darkMode items={items} total={100} />
    </div>`,...(g=(M=l.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var v,C,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div style={{
  ...mainDarkModeContainerStyle,
  ...compactContainerStyle
}}>
        <UsageBar showPercentage showFallbackColors compactLayout darkMode items={items} total={100} />
    </div>`,...(x=(C=d.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var b,w,S;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`() => <div style={{
  ...mainDarkModeContainerStyle,
  ...compactContainerStyle
}}>
        <UsageBar showLabels={false} compactLayout showFallbackColors darkMode items={items} total={100} />
    </div>`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,L,D;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`() => <>
        <p>If sum of values exceeds total.</p>
        <div style={mainDarkModeContainerStyle}>
            <UsageBar items={items} total={50} />
        </div>
    </>`,...(D=(L=n.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const W=["darkMode","darkModeWithoutLabels","darkModeWithPercentages","darkModeCompact","darkModeCompactWithoutLabels","error"];export{W as __namedExportsOrder,s as darkMode,d as darkModeCompact,c as darkModeCompactWithoutLabels,l as darkModeWithPercentages,t as darkModeWithoutLabels,P as default,n as error};
