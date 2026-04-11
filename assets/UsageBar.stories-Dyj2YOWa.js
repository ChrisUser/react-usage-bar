import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{U as P}from"./UsageBar-DFsqMcCK.js";import"./index-Dn5KckCc.js";const C=[{name:"UI",value:10,color:"#E85D04"},{name:"Photos",value:30},{name:"Videos",value:15},{name:"System Data",value:33},{name:"Other",value:8}],M={title:"Usage Bar",component:P,args:{items:C,total:100,showFallbackColors:!0},argTypes:{items:{control:"object"},total:{control:{type:"number",min:0,max:500}},darkMode:{control:"boolean"},showLabels:{control:"boolean"},showPercentage:{control:"boolean"},compactLayout:{control:"boolean"},showFallbackColors:{control:"boolean"},animated:{control:"boolean"},transitionDuration:{control:{type:"number",min:0,max:3,step:.1}},showTooltipOnHover:{control:"boolean"},segmentGap:{control:{type:"number",min:0,max:10}},segmentBorderRadius:{control:{type:"number",min:0,max:20}},height:{control:{type:"number",min:4,max:40}},borderRadius:{control:{type:"number",min:0,max:20}},rtl:{control:"boolean"},errorMessage:{control:"text"},ariaLabel:{control:"text"},className:{control:"text"},remaining:{control:"object"},onItemClick:{table:{disable:!0}},renderTooltip:{table:{disable:!0}},renderSegment:{table:{disable:!0}}},decorators:[o=>e.jsx("div",{style:{margin:24},children:e.jsx(o,{})})]},r={},a={args:{showLabels:!1}},t={args:{showPercentage:!0}},s={args:{showPercentage:!0,compactLayout:!0},decorators:[o=>e.jsx("div",{style:{maxWidth:500,margin:"0 auto"},children:e.jsx(o,{})})]},n={args:{showLabels:!1,compactLayout:!0},decorators:[o=>e.jsx("div",{style:{maxWidth:500,margin:"0 auto"},children:e.jsx(o,{})})]},c={args:{total:50},decorators:[o=>e.jsxs("div",{style:{margin:24},children:[e.jsx("p",{children:"If sum of values exceeds total."}),e.jsx(o,{})]})]};var l,m,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    showLabels: false
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,b,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    showPercentage: true
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,x,L;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showPercentage: true,
    compactLayout: true
  },
  decorators: [Story => <div style={{
    maxWidth: 500,
    margin: '0 auto'
  }}><Story /></div>]
}`,...(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var v,S,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showLabels: false,
    compactLayout: true
  },
  decorators: [Story => <div style={{
    maxWidth: 500,
    margin: '0 auto'
  }}><Story /></div>]
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var w,f,W;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    total: 50
  },
  decorators: [Story => <div style={{
    margin: 24
  }}><p>If sum of values exceeds total.</p><Story /></div>]
}`,...(W=(f=c.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};const U=["LightMode","WithoutLabels","WithPercentages","CompactLayout","CompactLayoutWithoutLabels","Error"];export{s as CompactLayout,n as CompactLayoutWithoutLabels,c as Error,r as LightMode,t as WithPercentages,a as WithoutLabels,U as __namedExportsOrder,M as default};
