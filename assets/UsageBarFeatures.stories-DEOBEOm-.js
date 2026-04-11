import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{U as z}from"./UsageBar-DFsqMcCK.js";import"./index-Dn5KckCc.js";const K=[{name:"UI",value:10,color:"#E85D04"},{name:"Photos",value:30},{name:"Videos",value:15},{name:"System Data",value:33},{name:"Other",value:8}],Z={title:"Features",component:z,args:{items:K,total:100,showFallbackColors:!0},argTypes:{items:{control:"object"},total:{control:{type:"number",min:0,max:500}},darkMode:{control:"boolean"},showLabels:{control:"boolean"},showPercentage:{control:"boolean"},compactLayout:{control:"boolean"},showFallbackColors:{control:"boolean"},animated:{control:"boolean"},transitionDuration:{control:{type:"number",min:0,max:3,step:.1}},showTooltipOnHover:{control:"boolean"},segmentGap:{control:{type:"number",min:0,max:10}},segmentBorderRadius:{control:{type:"number",min:0,max:20}},height:{control:{type:"number",min:4,max:40}},borderRadius:{control:{type:"number",min:0,max:20}},rtl:{control:"boolean"},errorMessage:{control:"text"},ariaLabel:{control:"text"},className:{control:"text"},remaining:{control:"object"},onItemClick:{table:{disable:!0}},renderTooltip:{table:{disable:!0}},renderSegment:{table:{disable:!0}}},decorators:[e=>r.jsx("div",{style:{padding:24,maxWidth:600,margin:"0 auto"},children:r.jsx(e,{})})]},o={args:{animated:!0,transitionDuration:.5}},t={args:{showTooltipOnHover:!0}},n={args:{renderTooltip:(e,a)=>r.jsxs("span",{children:[r.jsx("strong",{children:e.name})," — ",a]})},argTypes:{renderTooltip:{table:{disable:!0}}}},s={args:{compactLayout:!0,showLabels:!1,renderSegment:(e,a,J)=>r.jsx("div",{style:{...J,opacity:.7}})},argTypes:{renderSegment:{table:{disable:!0}}}},c={args:{segmentGap:3,segmentBorderRadius:4,compactLayout:!0}},l={args:{items:[{name:"Photos",value:30,color:"linear-gradient(90deg, #4facfe, #00f2fe)"},{name:"Videos",value:15,color:"linear-gradient(90deg, #f093fb, #f5576c)"},{name:"Music",value:20,color:"linear-gradient(90deg, #43e97b, #38f9d7)"}],showFallbackColors:!1,compactLayout:!0}},m={args:{height:16,borderRadius:8}},i={args:{compactLayout:!0,showPercentage:!0,total:150,remaining:{name:"Available",color:"#d4d4d4"}}},u={args:{},render:e=>r.jsx(z,{...e,onItemClick:a=>alert(`Clicked: ${a.name} (${a.value})`)})},d={args:{rtl:!0,compactLayout:!0,showPercentage:!0}},p={args:{ariaLabel:"Storage usage: 96 of 100 GB used"}};var g,b,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    animated: true,
    transitionDuration: 0.5
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,S,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showTooltipOnHover: true
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,L,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    renderTooltip: (item, pct) => <span>
                <strong>{item.name}</strong> &mdash; {pct}
            </span>
  },
  argTypes: {
    renderTooltip: {
      table: {
        disable: true
      }
    }
  }
}`,...(x=(L=n.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var C,T,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    compactLayout: true,
    showLabels: false,
    renderSegment: (_item: UsageBarProps['items'][0], _pct: string, style: React.CSSProperties) => <div style={{
      ...style,
      opacity: 0.7
    }} />
  },
  argTypes: {
    renderSegment: {
      table: {
        disable: true
      }
    }
  }
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var k,R,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    segmentGap: 3,
    segmentBorderRadius: 4,
    compactLayout: true
  }
}`,...(j=(R=c.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var P,G,B;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'Photos',
      value: 30,
      color: 'linear-gradient(90deg, #4facfe, #00f2fe)'
    }, {
      name: 'Videos',
      value: 15,
      color: 'linear-gradient(90deg, #f093fb, #f5576c)'
    }, {
      name: 'Music',
      value: 20,
      color: 'linear-gradient(90deg, #43e97b, #38f9d7)'
    }],
    showFallbackColors: false,
    compactLayout: true
  }
}`,...(B=(G=l.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var H,A,_;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    height: 16,
    borderRadius: 8
  }
}`,...(_=(A=m.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var D,F,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    compactLayout: true,
    showPercentage: true,
    total: 150,
    remaining: {
      name: 'Available',
      color: '#d4d4d4'
    }
  }
}`,...(O=(F=i.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var U,I,M;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:"{\n  args: {},\n  render: args => <UsageBar {...args} onItemClick={item => alert(`Clicked: ${item.name} (${item.value})`)} />\n}",...(M=(I=u.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var $,E,V;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    rtl: true,
    compactLayout: true,
    showPercentage: true
  }
}`,...(V=(E=d.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var W,N,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Storage usage: 96 of 100 GB used'
  }
}`,...(q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const ee=["Animated","HoverTooltips","CustomTooltip","CustomSegment","SegmentGap","GradientColors","CustomHeight","RemainingSpace","ClickableSegments","RightToLeft","WithAriaLabel"];export{o as Animated,u as ClickableSegments,m as CustomHeight,s as CustomSegment,n as CustomTooltip,l as GradientColors,t as HoverTooltips,i as RemainingSpace,d as RightToLeft,c as SegmentGap,p as WithAriaLabel,ee as __namedExportsOrder,Z as default};
