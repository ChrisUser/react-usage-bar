import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{U as f}from"./UsageBar-DFsqMcCK.js";import"./index-Dn5KckCc.js";const j=[{name:"UI",value:10,color:"#E85D04"},{name:"Photos",value:30},{name:"Videos",value:15},{name:"System Data",value:33},{name:"Other",value:8}],E={title:"Usage Bar Dark",component:f,args:{items:j,total:100,showFallbackColors:!0,darkMode:!0},argTypes:{items:{control:"object"},total:{control:{type:"number",min:0,max:500}},darkMode:{control:"boolean"},showLabels:{control:"boolean"},showPercentage:{control:"boolean"},compactLayout:{control:"boolean"},showFallbackColors:{control:"boolean"},animated:{control:"boolean"},transitionDuration:{control:{type:"number",min:0,max:3,step:.1}},showTooltipOnHover:{control:"boolean"},segmentGap:{control:{type:"number",min:0,max:10}},segmentBorderRadius:{control:{type:"number",min:0,max:20}},height:{control:{type:"number",min:4,max:40}},borderRadius:{control:{type:"number",min:0,max:20}},rtl:{control:"boolean"},errorMessage:{control:"text"},ariaLabel:{control:"text"},className:{control:"text"},remaining:{control:"object"},onItemClick:{table:{disable:!0}},renderTooltip:{table:{disable:!0}},renderSegment:{table:{disable:!0}}},decorators:[e=>o.jsx("div",{style:{backgroundColor:"#212121",padding:48},children:o.jsx(e,{})})]},r={},a={args:{showLabels:!1}},t={args:{showPercentage:!0}},s={args:{showPercentage:!0,compactLayout:!0},decorators:[e=>o.jsx("div",{style:{backgroundColor:"#212121",padding:48,maxWidth:500,margin:"0 auto"},children:o.jsx(e,{})})]},n={args:{showLabels:!1,compactLayout:!0},decorators:[e=>o.jsx("div",{style:{backgroundColor:"#212121",padding:48,maxWidth:500,margin:"0 auto"},children:o.jsx(e,{})})]},c={args:{darkMode:!1,total:50},decorators:[e=>o.jsxs("div",{style:{backgroundColor:"#212121",padding:48},children:[o.jsx("p",{style:{color:"#ccc"},children:"If sum of values exceeds total."}),o.jsx(e,{})]})]};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var i,u,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    showLabels: false
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,b,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    showPercentage: true
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,y,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    showPercentage: true,
    compactLayout: true
  },
  decorators: [Story => <div style={{
    backgroundColor: '#212121',
    padding: 48,
    maxWidth: 500,
    margin: '0 auto'
  }}><Story /></div>]
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var v,L,M;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showLabels: false,
    compactLayout: true
  },
  decorators: [Story => <div style={{
    backgroundColor: '#212121',
    padding: 48,
    maxWidth: 500,
    margin: '0 auto'
  }}><Story /></div>]
}`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var C,D,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    darkMode: false,
    total: 50
  },
  decorators: [Story => <div style={{
    backgroundColor: '#212121',
    padding: 48
  }}>
                <p style={{
      color: '#ccc'
    }}>If sum of values exceeds total.</p>
                <Story />
            </div>]
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const I=["DarkMode","DarkModeWithoutLabels","DarkModeWithPercentages","DarkModeCompact","DarkModeCompactWithoutLabels","Error"];export{r as DarkMode,s as DarkModeCompact,n as DarkModeCompactWithoutLabels,t as DarkModeWithPercentages,a as DarkModeWithoutLabels,c as Error,I as __namedExportsOrder,E as default};
