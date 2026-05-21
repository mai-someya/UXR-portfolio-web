// ─── Sprite image paths ──────────────────────────────────────────────────
window.__resources = {
  maiFront:   'images/maiFront.png',
  alfieFront: 'images/alfieFront.png',
  maiSide:    'images/maiSide.png',
};

// ─── React hooks shorthand ───────────────────────────────────────────────
const { useState, useEffect, useRef } = React;

// ─── Palette ─────────────────────────────────────────────────────────────
const BR = {
  sky:    '#7DD4E0',
  teal:   '#3BBFB0',
  meadow: '#A8DFA0',
  gold:   '#F5C842',
  deep:   '#1A3A3A',
  foam:   '#F2F8F8',
  deep70: 'rgba(26,58,58,.72)',
  deep50: 'rgba(26,58,58,.5)',
  deep20: 'rgba(26,58,58,.18)',
  deep10: 'rgba(26,58,58,.1)',
  deep05: 'rgba(26,58,58,.05)',
  paper:  '#ffffff',
  sand:   '#F2E2BD',
  water:  '#BFE9EE',
  waterDk:'#7DD4E0',
};

// ─── Tabler outline icons ────────────────────────────────────────────────
const ICONS = {
  'map-pin':       <><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/></>,
  'compass':       <><path d="M8 16l2 -6l6 -2l-2 6l-6 2"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 3l0 2"/><path d="M12 19l0 2"/><path d="M3 12l2 0"/><path d="M19 12l2 0"/></>,
  'map':           <><path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13"/><path d="M9 4v13"/><path d="M15 7v13"/></>,
  'mountain':      <><path d="M3 20l5 -10l4 6l3 -2l6 6h-18"/><path d="M14 9l1 -1"/></>,
  'anchor':        <><path d="M12 9v12"/><path d="M9 12h6"/><path d="M12 6a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"/><path d="M6 16a6 6 0 0 0 6 6"/><path d="M18 16a6 6 0 0 1 -6 6"/></>,
  'telescope':     <><path d="M21.063 7.61l-1 1.732a4.999 4.999 0 0 1 -6.83 1.83l-1.732 -1l8.562 -2.561z"/><path d="M9.07 8.57l5.196 3"/><path d="M11.57 4.234l-1 1.732a3.999 3.999 0 0 0 1.465 5.464a3.999 3.999 0 0 0 5.464 -1.464l1 -1.732"/><path d="M12 13l1.5 6.5"/><path d="M9 14l-2 7"/><path d="M14 12.5l3.5 3.5"/></>,
  'flag':          <><path d="M5 21v-16"/><path d="M5 5l9 0l-1 4l1 4l-9 0"/></>,
  'sparkles':      <><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"/></>,
  'file-text':     <><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M9 9l1 0"/><path d="M9 13l6 0"/><path d="M9 17l6 0"/></>,
  'mail':          <><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/><path d="M3 7l9 6l9 -6"/></>,
  'book':          <><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v13"/></>,
  'star':          <><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1.002l3.086 -6.253l3.086 6.253l6.9 1.002l-5 4.867l1.179 6.873z"/></>,
  'arrow-right':   <><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></>,
  'arrow-left':    <><path d="M5 12l14 0"/><path d="M5 12l6 6"/><path d="M5 12l6 -6"/></>,
  'chevron-right': <><path d="M9 6l6 6l-6 6"/></>,
  'chevron-down':  <><path d="M6 9l6 6l6 -6"/></>,
  'x':             <><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></>,
  'download':      <><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 11l5 5l5 -5"/><path d="M12 4l0 12"/></>,
  'leaf':          <><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></>,
  'home':          <><path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/></>,
  'tree-pine':     <><path d="M12 22v-3"/><path d="M5 19h14l-4 -5h2l-4 -5h2l-5 -7l-5 7h2l-4 5h2z"/></>,
  'mood-happy':    <><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 10l.01 0"/><path d="M15 10l.01 0"/><path d="M9.5 15a3.5 3.5 0 0 0 5 0"/></>,
  'route':         <><path d="M6 19a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z"/><path d="M18 9a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z"/><path d="M11.5 17h2.5a3 3 0 0 0 0 -6h-4a3 3 0 0 1 0 -6h2.5"/></>,
  'eye':           <><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></>,
  'bulb':          <><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></>,
  'tools':         <><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"/><path d="M14.5 5.5l4 4"/><path d="M12 8l-5 -5l-4 4l5 5"/></>,
  'rocket':        <><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"/><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"/></>,
  'linkedin':      <><path d="M4 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M3 9l0 11"/><path d="M9 9l0 11"/><path d="M9 13a3 3 0 0 1 6 0l0 7"/></>,
  'users':         <><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></>,
  'chart-bar':     <><path d="M3 12h4v9h-4z"/><path d="M9 7h4v14h-4z"/><path d="M15 3h4v18h-4z"/></>,
  'wrench':        <><path d="M8.56 2.9a4 4 0 0 1 4.433 6.461l-8 8a2 2 0 0 1 -2.828 -2.828l8 -8a4 4 0 0 1 -1.605 -3.633z"/><path d="M17.5 15.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/></>,
  'hammer':        <><path d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385"/><path d="M18.121 15.192l3.535 -3.535l-3.535 -3.536l-1.768 1.768l.707 .707l-1.414 1.414l-.707 -.707l-1.768 1.768z"/></>,
  'laptop':        <><path d="M3 19l18 0"/><path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/></>,
};

function Icon({ name, size=20, color, stroke=2, className='', style }) {
  const body = ICONS[name];
  if (!body) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color || 'currentColor'} strokeWidth={stroke}
      strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style}>
      {body}
    </svg>
  );
}

// ─── Editable text (read-only display) ───────────────────────────────────
function Editable({ id, defaultValue='', className='', style, tag='span' }) {
  const Tag = tag;
  return <Tag className={className} style={style}>{defaultValue}</Tag>;
}

// ─── Sprite wrapper ───────────────────────────────────────────────────────
function Sprite({ src, width, height, walking=false, style, className='' }) {
  return (
    <img src={src} width={width} height={height}
      alt="" draggable={false}
      className={`br-sprite ${walking?'br-walking':''} ${className}`}
      style={{ ...style }}/>
  );
}

// ─── Stat bar ─────────────────────────────────────────────────────────────
function StatBar({ label, value, color, suffix='%' }) {
  return (
    <div className="br-stat">
      <span className="br-stat-label">{label}</span>
      <div className="br-stat-track">
        <div className="br-stat-fill" style={{ width:`${value}%`, background:color }}/>
      </div>
      <span className="br-stat-val">{value}{suffix}</span>
    </div>
  );
}

// ─── Star row ─────────────────────────────────────────────────────────────
function StarRow({ count=8, filled=8, size=16 }) {
  return (
    <div style={{display:'inline-flex', gap:3}}>
      {Array.from({length:count}).map((_,i)=>(
        <svg key={i} width={size} height={size} viewBox="0 0 24 24"
          fill={i<filled?BR.gold:'transparent'} stroke={i<filled?BR.gold:BR.deep20}
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1.002l3.086 -6.253l3.086 6.253l6.9 1.002l-5 4.867l1.179 6.873z"/>
        </svg>
      ))}
    </div>
  );
}

// ─── Heart row ────────────────────────────────────────────────────────────
function HeartRow({ count=8, filled=8, size=16 }) {
  return (
    <div style={{display:'inline-flex', gap:2, flexWrap:'nowrap'}}>
      {Array.from({length:count}).map((_,i)=>(
        <svg key={i} width={size} height={size} viewBox="0 0 24 24"
          fill={i<filled ? '#E53E3E' : 'transparent'}
          stroke={i<filled ? '#C53030' : BR.deep20}
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>
        </svg>
      ))}
    </div>
  );
}

// ─── App data ─────────────────────────────────────────────────────────────
const { useState: aUseState, useEffect: aUseEffect, useRef: aUseRef } = React;

const PROJECTS = [
  { id:'forest',   tag:'Generative', icon:'tree-pine',
    title:'Services Tool Adoption',
    subtitle:'Shaped team strategy',
    timeline:'6 weeks',
    method:'Literature review · stakeholder workshops · qualitative interviews',
    highlight:'Artifact Adopted by Leadership',
    color: BR.meadow, colorDk:'#6FB370',
    pos:{ x:36, y:42 },
    bg:'linear-gradient(180deg, #BFE9D0 0%, #A8DFA0 100%)',
    scenes:[
      { name:'Intro', icon:'file-text',
        body:'Sellers were using third-party tools to fill gaps for jobs that Square already supports. We needed to build a more comprehensive and cohesive suite of tools to meet our sellers needs, but didn\'t know what jobs to prioritize or how to win sellers\' adopting these tools.' },
      { name:'Objective', icon:'flag',
        body:'Understand how service-based businesses adopt tools across their workflow, identify the jobs those tools are hired to do, and determine where Square has the strongest opportunity to close the gap — so the team could prioritize the product roadmap with confidence rather than assumption.' },
      { name:'Approach', icon:'compass',
        layout:'approach',
        intro:'Previous research had gone deep on individual service audiences — but what was missing was a horizontal view across the full segment. With reorgs consolidating those audiences onto one team, and competitors moving fast to bundle business tools as payments became commoditized, the question shifted from \'who are our sellers\' to \'what jobs are they hiring tools to do\' — and where is Square leaving them to cobble together solutions.',
        preSpeech:'I initially tried to explore internal data, but realized we need primary research since it was common that tool usage happened outside of Square.',
        postSpeech:'The workshop added critical nuance to our hypothesis that leads management was the biggest opportunity, breaking it into two distinct jobs: generating leads and managing leads. Generating leads pointed to API and partnership conversations for marketing, while managing leads was something the product team could build and solve for.',
        methods:[
          { num:'1/', title:'Lit Review',  body:'Synthesized existing research to identify gaps, build hypotheses, and shape the discussion guide.' },
          { num:'2/', title:'Interviews',  body:"Twelve, 60-minute moderated conversations because internal data couldn't capture workflows happening outside Square's ecosystem." },
          { num:'3/', title:'Workshop',    body:'I designed the workshop as a start to my analysis, by bringing product and marketing into the same room to gut-check early JTBD framing before finalizing the output.' },
          { num:'4/', title:'Deliverable', body:'Delivered as a deck with the JsTBD framework, presented to a cross-functional audience of 50 across Product, Design, Engineering, Marketing, and Research.' },
        ],
        sectionImages:{
          title:'Stakeholder Workshop on FigJam',
          paths:['images/Services tool adoption-workshop 1.png','images/Services tool adoption-workshop 2.png'],
          cover: true,
          objectPosition: 'left center',
        },
      },
      { name:'Findings', icon:'bulb',
        layout:'findings',
        bullets:[
          'Tools are hired in acute moments, not planned in advance. Sellers adopt tools reactively as their business scales and grows.',
          '"Grow Customer" jobs-to-be-done are the highest-pain, lowest-cohesion part of the workflow. Sellers reactively cobble together scheduling, CRM, and communications tools to manage their growing customer base — and only recognize the fragmentation once it\'s too late.',
        ],
        topImages:['images/finding 1- services tool adoption.png','images/finding 2- services tool adoption.png'],
        sideImage:'images/finding 3- services tool adoption.png',
        charSpeech:'Qualitative findings helped convey the need for a more cohesive solution for this job. I pulled in product satisfaction metrics because it wasn\'t enough to convey the full pain point, as it  showed our internal tools we\'re also missing core functionalities. Combined, it made this job harder to deprioritize.',
      },
      { name:'Impact', icon:'rocket',
        bullets:[
          'A JTBD framework referenced by PMs, designers, and marketers 18 months later for customer-informed decisions.',
          '2 product roadmap items added, each spawning follow-on research: a navigation usability study and prototype testing that resolved critical gaps before launch.',
          'Directly informed one of three core pillars of the Services 2025 + 2026 strategy',
          '2 net-new research initiatives generated: Generative + Evaluative.',
        ],
        sectionImages:{
          title:'JTBD Framework Examples',
          paths:['images/services tool adoption-framework example 1.png','images/services tool adoption-framework example 2.png'],
        },
        quotes:[{
          char:'images/wizard.png',
          label:'Lead/Principal PM (Annual Review Feedback)',
          text:"Your Tool Adoption Research was not only thorough and reflective of critical business priorities but also recognized by the XNFL team as highly impactful in shaping GTM strategy and product roadmap prioritization. This demonstrated your ability to generate insights that resonate across cross-functional stakeholders and directly influence business strategy.",
        }],
      },
    ],
  },
  { id:'beach',    tag:'Generative + Evaluative', icon:'anchor',
    title:'Recurring Revenue Products',
    subtitle:'Defined product strategy',
    timeline:'4 weeks',
    method:'AI-assisted market sizing · interviews · rapid prototype testing',
    highlight:'Ambiguous Brief, AI Workflow',
    color: BR.sky, colorDk:'#56AFC1',
    pos:{ x:51, y:25 },
    bg:'linear-gradient(180deg, #BFE9EE 0%, #F2E2BD 100%)',
    scenes:[
      { name:'Intro', icon:'file-text',
        body:'Enabling sellers to grow their recurring revenue was a net new strategic pillar for the Services team. Square had X feature with low adoption. The hypothesis: its language and structure skewed too retail for service sellers. But the real question was bigger: is X even the right feature, or is the opportunity in something structurally adjecent like Y?' },
      { name:'Objective', icon:'flag',
        body:'The goal was to determine what to anchor the product strategy on: X, Y or something completely new. Y was the leading hypothesis, but without knowing where X and Y structurally overlapped, and understanding the opportunity size, the team didn\'t know what or how to build.' },
      { name:'Approach', icon:'compass',
        layout:'approach',
        intro:'The original ask was big: a foundational discovery AND market sizing but we had no time to do both rigorously. I pushed back — we agreed to deprioritize market sizing and focus on qualitative discovery. The website audit changed that. It gave us a starting point for the discussion guide and revealed that market sizing was answerable without a full quant study.',
        preSpeech:'It was an ambiguous ask so I started with what we knew & had access to: existing research and business websites to answer what we could before interviews and to inform the discussion guide.',
        methods:[
          { num:'1/', title:'Website Audit', body:'Reviewed 20 websites to confirm language differences across 3 industries before committing to a larger sizing exercise.' },
          { num:'2/', title:'Sizing',        body:'Computational Web Scraping (1,000+ sites, AI-assisted): used AI to generate Python and R scripts to quantify language as a market-sizing proxy.' },
          { num:'3/', title:'Interviews',   body:'Qualitative Interviews (n=13): used to understand workflows, pain points, and JsTBD — info not on websites or past research.' },
          { num:'4/', title:'Hack Week',    bg:'#1B4D5C', body:'I identified an opportunity to test a X upsell at checkout (web), a direct lever for the recurring strategy. I ran rapid prototype testing (n=12) in parallel without disrupting the core research program.' },
          { num:'5/', title:'Deliverable',  body:'A topline one-pager with design principles. The PM and designer aligned on the strategic direction and began sequencing the build.', note:'Project was closed due to layoff before the broader share-out.' },
        ],
        postSpeech:'The website audit confirmed meaningful differences by audience and inspired me to attempt a market sizing exercise, which was originally out of scope.',
        postSpeechCol:2,
        postSpeechMaxWidth:'52%',
      },
      { name:'Findings', icon:'bulb',
        bullets:[
          'Language differed by vertical — and signaled different product expectations. Health & beauty sellers used "Y"; services, retail, and food & beverage sellers used "X" or "recurring service". Scraping 1,000+ sites confirmed this at scale.',
          'Y involves ad hoc scheduling built around an ongoing relationship; X runs on a fixed, automated schedule with little relational depth.',
          'The most consistent pain point: management burden. A customer-facing surface for self-management is necessary to drive adoption.',
          'Despite X showing a larger raw opportunity, Y was the recommendation since it\'s more aligned to Square\'s broader strategy and buildable on existing X infrastructure. Fix X first, layer Y on top. One sequenced build, not two.',
        ] },
      { name:'Impact', icon:'rocket',
        bullets:[
          'Directly informed product strategy on how to approach a net-new strategic pillar. Got buy-in from the Principal PM without significant pushback — the recommendation was grounded in seller evidence and tied clearly to Square\'s broader strategy.',
          'What was scoped as a single-feature focus became a phased, component-sharing roadmap.',
          'Hack Week sprint took a X upsell concept from initial prototype to user-validated, build-ready design in one week — earned verbal commitment from the Principal PM to allocate engineering resources, and was presented as a case study in research and design crit as a model for AI-assisted rapid testing.',
        ] },
    ],
  },
  { id:'mountain', tag:'Generative + Evaluative', icon:'mountain',
    title:'P2P Payment Integration',
    subtitle:'Informed design + product strategy',
    timeline:'6 weeks',
    method:'Moderated interviews · discrete choice · unmoderated usability',
    highlight:'Executive Visibility, Engineer Constraints',
    color:'#D9E3E5', colorDk:'#8FA8AB',
    pos:{ x:39, y:78 },
    bg:'linear-gradient(180deg, #C5D5D8 0%, #8FA8AB 100%)',
    scenes:[
      { name:'Intro', icon:'file-text',
        body:'Square\'s core business is card processing, but an estimated $XB annually was flowing off-platform through Y, and sellers had been asking for a native integration for years. The opportunity was real, but so was the tension: the integration needed to deliver business value without cannibalizing card revenue.',
        body2:'Two levers were on the table: a transaction fee and a Square Checking requirement. Engineering constraints meant the Alpha couldn\'t support auto-reconciliation. The team suspected all three would muddy the Alpha signal — making it impossible to tell whether low adoption meant the product didn\'t work, or just that the friction did. A successful Alpha would unlock expansion beyond Invoices into higher-volume surfaces like in-person checkout.',
      },
      { name:'Objective', icon:'flag',
        body:'The objectives were two-fold: understand the adoption potential for a native Y integration, and optimize the product experience to reflect real user expectations within the constraints of what was business and engineering feasible.',
      },
      { name:'Approach', icon:'compass',
        layout:'approach',
        intro:'The Alpha had hard constraints. Engineering limitations were largely fixed, the timeline was tight, and the project had CEO-level visibility. Direct pushback on the designs wasn\'t an option, so I structured the research to do the advocating.',
        intro2:'The core tension: measuring adoption potential while showing sellers an experience full of friction. Without careful design, any drop-off would be unreadable — was it low demand, or just bad UX? The research needed to separate those two signals, so findings could clearly attribute friction to specific constraints and make the case that those constraints weren\'t as fixed as they seemed.',
        intro3:'I developed a 3-track research program across two audiences and two product surfaces — comprehensive enough for CEO-level visibility, tight enough to hit a 3-month Alpha launch. I brought in a quant UXR and a rapid researcher to stay within the timeline without sacrificing depth.',
        methods:[
          { num:'1/', title:'Seller Experience (Led by me!)',
            bg:'#1B4D5C',
            body:'Moderated interviews to capture off-platform behaviors, mental models, and friction points the prototype alone couldn\'t surface. n=9 moderated interviews with Square Invoices sellers who currently use Y · 60-min sessions including prototype test · 4 weeks' },
          { num:'2/', title:'Pricing Survey',
            body:'Discrete choice to isolate willingness to pay from product experience — keeping demand signal separate from UX friction. n=1,000 · Discrete Choice · 3 concepts across 3 pricing structures · 4 weeks' },
          { num:'3/', title:'Buyer Experience',
            body:'Included buyer research to ensure B2C friction wasn\'t deprioritized, as the buyer experience was equally important to successful adoption. n=8 buyers who use Y and have paid with a Square invoice · Unmoderated usability test via UserTesting · 1 week' },
        ],
      },
      { name:'Seller Experience Findings', icon:'bulb',
        bullets:[
          'A fee kills the value proposition: sellers view Y\'s no-fee model as its core benefit. Introducing a charge doesn\'t reduce adoption — it eliminates it.',
          'Auto-reconciliation isn\'t a nice-to-have — it\'s a table stake. Sellers expect Y in Square to behave like every other payment method: funds land automatically, invoice status updates instantly. Manual reconciliation made the integration feel less reliable than using Y directly.',
          'Square Checking was assumed to have fees or lack core banking features. This misconception reframed the adoption decision from "try a new feature" to "switch my bank" before sellers even evaluated the integration. New messaging highlighting "free" and the ability to deposit checks & cash directly drove copy and value prop updates.',
        ],
        quotesGroupLabel:'Seller Quotes',
        quotes:[
          {
            char:'images/fox.png',
            text:"Yeah, I'll tell you this right off the jump. If Square is going to charge me a processing fee to process this transaction, I'm never going to use it because why would I have Square take 1% of this transaction? The first thing that came [to mind is] \"what is the processing fee?\"",
          },
          {
            char:'images/goat.png',
            text:"The key factor for us turning that on would be that it's pretty much automated. And so if it were to go to our bank account we're still going through the manual way of marking it paid as. It makes it not an incentive to want to turn that button on.",
          },
        ],
      },
      { name:'Impact', icon:'rocket',
        bullets:[
          '3 key launch risks identified and acted on: fee model changed to free; manual reconciliation removed; Square Checking messaging updated to address misconceptions head-on.',
          'Enabled Alpha to ship in 3 months by scoping and overseeing a 3-track research program across two audiences, two product surfaces, and two partner researchers.',
          'Shared early, unpolished signals with senior PMs and design weekly — by the time findings were formalized, the team had already begun stress-testing solutions with engineering, accelerating decision-making without waiting for a final readout.',
        ],
        quotes:[{
          char:'images/captain.png',
          label:'Senior Design Partner',
          text:"Working with Mai on the Y Alpha research project has been a genuine pleasure. She is an incredibly talented and dedicated research partner, and I've enjoyed collaborating and learning from her... The key findings she delivered were instrumental in shaping the Alpha and continue to be referenced and shared with cross-functional partners almost weekly. Mai also played a key role in refining the initial end-to-end flows for the Y MVP. Even with significant implementation constraints, she used seller insights to surface flaws in the proposed MVP experience, which ultimately secured buy-in and guided the team toward a much stronger MVP direction.",
        }],
      },
    ],
  },
  { id:'town',     tag:'Generative Research', icon:'home',
    title:'Voice AI Research',
    subtitle:'Redirected Investments',
    timeline:'2-week sprint',
    method:'Survey',
    highlight:'Self-Initiated Research',
    color: BR.gold, colorDk:'#C99E25',
    pos:{ x:62, y:55 },
    bg:'linear-gradient(180deg, #F8D673 0%, #F5C842 100%)',
    scenes:[
      { name:'Intro', icon:'file-text',
        body:'Voice AI had momentum at Square — multiple teams, including mine, were building, scoping, and investing in new features independently. The problem: no one had asked sellers what they actually needed, or whether voice AI fit into their workflow at all. Teams were aligning around features before understanding where they\'d have the strongest impact and adoption.',
      },
      { name:'Objective', icon:'flag',
        body:'Identify if, and where, voice AI fit in user workflows across the use cases that teams were already exploring.',
      },
      { name:'Approach', icon:'compass',
        bodyBold: true,
        body:'A qualitative approach would have generated hypotheses. I needed evidence, fast. Teams were already mid-build — waiting on a larger study wasn\'t an option.',
        body2:'I chose a quick-turn quantitative survey (n=400 across 4 industries) because the findings had to be both timely and defensible. The industries mapped directly to Square\'s product structure so findings landed with each stakeholder.',
        body3:'Shared as a deck and recording to accommodate holiday timing. Supplemented with individual readouts for teams with immediate decisions to make.',
      },
      { name:'Findings', icon:'bulb',
        bullets:[
          'Receptivity to voice AI is context-dependent. Sellers factor in environment (background noise, privacy, comfort speaking aloud) and error cost — how much damage a wrong response could do — before they\'d consider it useful.',
          'Sellers were most open to voice AI on routine, repetitive tasks. Comfort with complex or high-stakes tasks was low. Routine use cases aren\'t the ceiling — they\'re the bridge to broader adoption, which teams had been skipping over.',
        ],
        charSpeech:'For those teams whose direction were misaligned with the findings, I shared learnings early with triangulated evidence from prior research and added seller clips to help stakeholders deeply understand seller needs. This led to any pushback being resolved before the final report was shared.',
      },
      { name:'Impact', icon:'rocket',
        bullets:[
          'Redirected 3 product teams from seller-facing voice AI features toward back-office use cases where adoption barriers were lowest — aligning roadmaps to where the technology could actually land.',
          'Direct team saved an estimated ½ to 1 quarter of misallocated resources.',
          'Cited in, and strengthened, a company-wide AI framework.',
        ],
        quotes:[{
          char:'images/queen.png',
          label:'Manager (Annual Review Feedback)',
          text:"You showed good instincts for where research was or wasn't needed, including flagging a need for Voice AI research. Your openness to broadening the scope and lens of that research helped it become a valuable input to decisions being made across Square ([redacted], inventory, etc.), not just your direct team.",
        }],
      },
    ],
  },
  { id:'quant', tag:'Quantitative Research', icon:'chart-bar',
    title:'Quantitative Research',
    subtitle:'Highlights of my quantitative experience',
    popoverTag:'Bonus',
    popoverSubtitle:'Highlight of my quantitative experience',
    popoverSimple:true,
    timeline:'Across 8 years',
    method:'CSAT · survey design · discrete choice · behavioral analysis',
    highlight:'CEO-level visibility',
    color:'#D0DFE2', colorDk:'#6D8A8E',
    pos:{ x:80, y:28 },
    bg:'linear-gradient(180deg, #C5D5D8 0%, #8FA8AB 100%)',
    scenes:[
      { name:'Highlights', icon:'chart-bar', simpleHeader:true,
        bullets:[
          'Designed and launched Square\'s first consolidated CSAT program spanning 38 products and 4,000+ respondents, replacing siloed per-team surveys. Program was among the first internal signals to identify churn as a company-wide risk, directly informing executive annual planning up to the CEO level.',
          'Fielded a large-scale survey (n=628) among hair salon sellers to quantify feature prioritization preferences for a calendar redesign serving 500K+ users, integrating findings with 10 moderated interviews to influence prioritization of five roadmap features and drive a 5% post-launch improvement in customer satisfaction.',
        ],
        ctas:[
          { text:'Learn More About My Quant Roots', href:'#projects', action:'open-side-quest', actionData:'market' },
          { text:'See Quant Research Toolkit', href:'#toolkits', action:'toolkit-slide', actionData:1 },
        ],
      },
    ],
  },
];

const STRENGTHS = [
  { label: 'Product Strategist',
    evidence: 'I translate research into decisions that stick — challenging pricing assumptions, redirecting roadmaps, and reframing engineering constraints as launch risks before teams build in the wrong direction.' },
  { label: 'Dot Connector',
    evidence: 'I connect the dots others miss because I\'m equally fluent in qual and quant. From behavioral data and large-scale surveys to usability testing and moderating in-depth interviews — I bring it all into one cohesive story.'},
  { label: 'AI-Powered Researcher',
    evidence: 'AI handles the operational, I handle the human. I use it to move faster — automating charts, writing SQL queries, and scraping data with R and Python scripts. That speed buys me time for what AI can\'t touch: understanding business context and building the relationships that make research actually land.' },
];

const TAGLINE_DEFAULT = `Pick a destination and see what I've accomplished'.`;

// ─── Top Nav ──────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label:'Projects',    href:'#map',      icon:'map' },
  { label:'Side Quests', href:'#projects', icon:'compass' },
  { label:'Research Toolkit', href:'#toolkits', icon:'wrench' },
  { label:'LinkedIn',    href:'https://www.linkedin.com/in/mai-someya/', icon:'laptop', external:true },
  { label:'Resume',      href:'https://drive.google.com/file/d/1FI5s8yIk56g6DIPGYpn6A01yYOdvoXWb/view?usp=sharing', icon:'file-text', external:true },
];

function Nav({ onOpen }) {
  const [cursor, setCursor] = aUseState({ left:0, width:0, opacity:0 });
  const ulRef = aUseRef(null);

  const handleEnter = (e) => {
    const li = e.currentTarget;
    const ul = ulRef.current;
    if (!ul) return;
    const ulRect = ul.getBoundingClientRect();
    const liRect = li.getBoundingClientRect();
    setCursor({ left: liRect.left - ulRect.left - 2, width: liRect.width, opacity: 1 });
  };

  return (
    <header className="mob-header" style={{
      display:'flex', alignItems:'center', justifyContent:'flex-end', gap:10,
      padding:'14px 24px', position:'sticky', top:0, zIndex:50,
      background:'#F2F8F8', backdropFilter:'blur(8px)',
    }}>

      {/* Sliding pill nav */}
      <ul ref={ulRef} className="mob-nav" style={{
        position:'relative', listStyle:'none', margin:0, padding:4,
        display:'flex', alignItems:'center', gap:0,
        background:'#fff',
        border:`2px solid ${BR.deep}`,
        borderRadius:999,
        overflow:'hidden',
      }} onMouseLeave={() => setCursor(c => ({...c, opacity:0}))}>

        {/* Sliding highlight */}
        <li aria-hidden style={{
          position:'absolute', top:4, bottom:4,
          left: cursor.left, width: cursor.width,
          background: BR.deep, borderRadius:999,
          opacity: cursor.opacity,
          transition:'left .2s ease, width .2s ease, opacity .12s ease',
          pointerEvents:'none', zIndex:0,
        }}/>

        {NAV_ITEMS.map(item => (
          <li key={item.label} className="mob-nav-item" style={{position:'relative', zIndex:1}}
            onMouseEnter={handleEnter}>
            <a href={item.href}
              {...(item.external ? {target:'_blank', rel:'noopener noreferrer'} : {})}
              style={{
                display:'inline-flex', alignItems:'center', gap:6,
                padding:'7px 14px',
                fontFamily:'Nunito', fontWeight:600, fontSize:13,
                color: BR.deep, textDecoration:'none',
                mixBlendMode:'difference',
                cursor:'pointer', whiteSpace:'nowrap', userSelect:'none',
              }}>
              <span className="mob-nav-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

    </header>
  );
}

// ─── Stats mini-bar (above hero) ─────────────────────────────────────────
function StatsBanner() {
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:28,
      padding:'10px 20px', marginBottom:24,
      background:'#fff', borderRadius:12,
      border:`1px solid rgba(26,58,58,.08)`,
      boxShadow:'0 1px 2px rgba(26,58,58,.04)',
      flexWrap:'wrap',
    }}>
      <div style={{display:'flex', alignItems:'center', gap:8, flex:'1 1 160px'}}>
        <Icon name="telescope" size={14} color={BR.teal}/>
        <span className="br-cap" style={{color:BR.deep70}}>Qualitative</span>
        <div style={{flex:1, height:6, background:BR.deep10, borderRadius:999, overflow:'hidden', minWidth:60}}>
          <div style={{width:'100%', height:'100%', background:BR.teal, borderRadius:999}}/>
        </div>
        <span style={{fontFamily:'Nunito', fontWeight:700, fontSize:12, color:BR.deep}}>100%</span>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:8, flex:'1 1 160px'}}>
        <Icon name="telescope" size={14} color={BR.sky}/>
        <span className="br-cap" style={{color:BR.deep70}}>Quantitative</span>
        <div style={{flex:1, height:6, background:BR.deep10, borderRadius:999, overflow:'hidden', minWidth:60}}>
          <div style={{width:'90%', height:'100%', background:BR.sky, borderRadius:999}}/>
        </div>
        <span style={{fontFamily:'Nunito', fontWeight:700, fontSize:12, color:BR.deep}}>90%</span>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <span className="br-cap" style={{color:BR.deep70}}>Years XP</span>
        <StarRow count={8} filled={8} size={13}/>
        <span style={{fontFamily:'Nunito', fontWeight:700, fontSize:12, color:BR.deep}}>8 yrs</span>
      </div>
    </div>
  );
}

// ─── HERO / INTRO ─────────────────────────────────────────────────────────
function Hero() {
  const [activeS, setActiveS] = aUseState(null);
  return (
    <section id="about" className="br-fadeup" style={{position:'relative', padding:'40px 0 60px'}}>
      <div className="mob-hero-grid" style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:48, alignItems:'center'}}>

        {/* Left: Character card with stats inside */}
        <div>
          <CharacterScene/>
        </div>

        {/* Right: Title + intro + strengths */}
        <div style={{display:'flex', flexDirection:'column', gap:16}}>
          <div className="br-cap">
            <Icon name="sparkles" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
            Adventure awaits.
          </div>
          <h1 className="br-h1" style={{margin:0}}>
            Hi, I'm{' '}
            <span className="br-display italic" style={{color:BR.teal}}>Mai Someya.</span>
          </h1>
          <div style={{display:'flex', flexDirection:'column', gap:8}}>
            <p className="br-body" style={{color:BR.deep70, margin:0}}>
              I'm a mixed-methods UX researcher with 8 years across market research and UX research, bringing a dual lens most researchers don't have: the strategic range to shape business and GTM decisions, and the depth to uncover the behaviors and friction points that drive product strategy.
            </p>
            <p className="br-body" style={{color:BR.deep70, margin:0}}>
              From identifying research gaps to building long lasting frameworks, I have a proven track record driving product and roadmap decisions across fintech and consumer products at a global scale.
            </p>
            <p className="br-body" style={{color:BR.deep70, margin:0}}>
              At my core, I'm a learner and adventurer . I'm always reaching for new tools, methods, and ways of thinking. My newest adventure is this portfolio, built from scratch using Claude Code, VS Code, HTML, and JavaScript.
            </p>
          </div>

          {/* Key strengths */}
          <div style={{marginTop:8}}>
            <div className="br-cap" style={{marginBottom:12}}>
              <Icon name="bulb" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
              Key strengths
            </div>
            <div style={{display:'flex', flexWrap:'wrap', gap:10}}>
              {STRENGTHS.map((s,i)=>(
                <button key={i}
                  className={`br-chip ${activeS===i?'active':''}`}
                  onClick={()=>{
                    const next = activeS === i ? null : i;
                    setActiveS(next);
                    if (next !== null && typeof gtag === 'function') {
                      gtag('event', 'open_strength', { event_category: 'Portfolio', event_label: s.label });
                    }
                  }}>
                  <Editable id={`strength_${i}`} defaultValue={s.label}/>
                  <Icon name={activeS===i?'chevron-down':'chevron-right'} size={14}/>
                </button>
              ))}
            </div>
            {activeS!=null && (
              <div className="br-card br-fadeup" style={{
                marginTop:14, padding:'16px 20px',
                background:'linear-gradient(180deg, #fff 0%, #FFFBEB 100%)',
                borderLeft:`4px solid ${BR.gold}`, borderRadius:12,
              }}>
                <div className="br-body" style={{fontSize:16}}>
                  <Editable id={`evidence_${activeS}`}
                    defaultValue={STRENGTHS[activeS].evidence}/>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

function CharacterScene() {
  return (
    <div className="mob-char-card" style={{
      width:280, borderRadius:24, overflow:'hidden',
      boxShadow:'0 12px 40px rgba(26,58,58,.18)',
    }}>
      {/* Scene area */}
      <div style={{
        position:'relative', height:290,
        background:`linear-gradient(180deg, ${BR.sky} 0%, ${BR.meadow} 100%)`,
      }}>
        {/* Sun */}
        <div style={{
          position:'absolute', top:24, right:32, width:46, height:46, borderRadius:'50%',
          background:BR.gold, boxShadow:`0 0 0 8px rgba(245,200,66,.25)`,
        }}/>
        {/* Cloud */}
        <svg width="80" height="28" viewBox="0 0 80 28" style={{position:'absolute', top:54, left:30}}>
          <path d="M10 20 Q 6 10, 18 10 Q 22 4, 32 8 Q 42 2, 50 10 Q 60 8, 62 18 Q 56 24, 38 22 Q 18 24, 10 20 Z"
            fill="rgba(255,255,255,.85)"/>
        </svg>
        {/* Distant hills */}
        <svg width="280" height="80" viewBox="0 0 280 80" style={{position:'absolute', bottom:90, left:0}} preserveAspectRatio="none">
          <path d="M0 60 Q 40 30 80 40 Q 120 18 160 38 Q 200 22 240 40 Q 270 30 280 38 L 280 80 L 0 80 Z"
            fill="#7BC4A5" opacity=".75"/>
          <path d="M0 70 Q 50 50 100 60 Q 150 40 200 60 Q 250 50 280 58 L 280 80 L 0 80 Z"
            fill="#5FA88B" opacity=".85"/>
        </svg>
        {/* Ground */}
        <div style={{
          position:'absolute', bottom:0, left:0, right:0, height:90,
          background:`linear-gradient(180deg, #88C572 0%, #6BA855 100%)`,
        }}/>
        {/* Grass tufts */}
        {[20, 80, 130, 200, 250].map((x,i)=>(
          <div key={i} style={{
            position:'absolute', bottom:24, left:x, width:8, height:5,
            background:'#3F7E3A', borderRadius:'4px 4px 0 0',
          }}/>
        ))}
        {/* Path stones */}
        {[[125,56],[140,48],[156,42],[172,38]].map(([x,y],i)=>(
          <div key={i} style={{
            position:'absolute', bottom:y, left:x, width:14, height:6,
            borderRadius:8, background:'#D9CDA6', opacity:.85 - i*.1,
          }}/>
        ))}
        {/* Mai sprite */}
        <div className="br-bob" style={{
          position:'absolute', bottom:22, left:'50%', transform:'translateX(-50%)',
          filter:'drop-shadow(0 6px 0 rgba(26,58,58,.15))',
        }}>
          <Sprite src={window.__resources.maiFront} width={140} height={244}/>
        </div>
      </div>

      {/* Stats strip inside card */}
      <div style={{
        background:'#fff', padding:'14px 18px',
        display:'flex', flexDirection:'column', gap:9,
      }}>
        <div>
          <span className="br-cap" style={{color:BR.deep70, display:'block', marginBottom:5, fontSize:9.5}}>Qualitative</span>
          <div style={{height:7, background:BR.deep10, borderRadius:999, overflow:'hidden'}}>
            <div style={{width:'100%', height:'100%', background:BR.teal, borderRadius:999}}/>
          </div>
        </div>
        <div>
          <span className="br-cap" style={{color:BR.deep70, display:'block', marginBottom:5, fontSize:9.5}}>Quantitative</span>
          <div style={{height:7, background:BR.deep10, borderRadius:999, overflow:'hidden'}}>
            <div style={{width:'90%', height:'100%', background:BR.sky, borderRadius:999}}/>
          </div>
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <span className="br-cap" style={{color:BR.deep70, fontSize:9.5}}>8 Years XP</span>
          <HeartRow count={8} filled={8} size={11}/>
        </div>
      </div>
    </div>
  );
}

// ─── Cartographer section ─────────────────────────────────────────────────
function Cartographer() {
  return (
    <section className="br-fadeup" style={{padding:'12px 0 36px'}}>
      <div className="br-card mob-cart-grid" style={{
        padding:'24px 28px', display:'grid',
        gridTemplateColumns:'auto 1fr', gap:24, alignItems:'center',
        background:`linear-gradient(135deg, #fff 0%, #F2F8F8 100%)`,
        borderRadius:20,
      }}>
        <div style={{position:'relative', width:120, height:120}}>
          <div style={{
            position:'absolute', inset:0, borderRadius:20, overflow:'hidden',
            background:`radial-gradient(circle at 50% 60%, ${BR.meadow} 0%, ${BR.sky} 100%)`,
          }}/>
          <div className="br-bob" style={{
            position:'absolute', inset:0, display:'grid', placeItems:'end center',
            paddingBottom:6,
          }}>
            <Sprite src={window.__resources.alfieFront} width={110} height={140}
              style={{objectFit:'contain'}}/>
          </div>
        </div>

        <div style={{position:'relative'}}>
          <div className="br-bubble tail-left" style={{padding:'18px 22px', borderRadius:18}}>
            <div className="br-cap" style={{color:BR.teal, marginBottom:6}}>
              <Editable id="npc_name" defaultValue="Alfie · Your guide"/>
            </div>
            <div className="br-body" style={{fontSize:18}}>
              <Editable id="npc_line" multiline
                defaultValue="Welcome, traveler! Four paths lie ahead — each a project. Hover above any zone to glimpse what Mai's been up to. Click a zone to walk it and read the full tale."/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Map Context module (Mai + Square intro) ─────────────────────────────
function MapContext() {
  return (
    <div className="br-card" style={{
      padding:'22px 20px',
      display:'flex', flexDirection:'column', gap:16,
      background:`linear-gradient(135deg, #fff 0%, #F2F8F8 100%)`,
      borderRadius:20,
    }}>
      {/* Square logo */}
      <div style={{
        width:52, height:52, borderRadius:14,
        background:'#fff', border:`1px solid ${BR.deep10}`,
        boxShadow:'0 2px 10px rgba(26,58,58,.12)',
        display:'grid', placeItems:'center', overflow:'hidden',
        flexShrink:0,
      }}>
        <img src="images/square.png" width={42} draggable={false}
          style={{imageRendering:'auto', display:'block'}}/>
      </div>

      <div>
        <div className="br-cap" style={{color:BR.teal, marginBottom:10}}>
          Lead UXR for Services
        </div>
        <div className="br-body" style={{fontSize:13.5, color:BR.deep70, lineHeight:1.65}}>
          You might know Square from the little white card reader at your favorite coffee shop, but it's actually a suite of 38+ hardware and software products helping small businesses run and grow across dozens of industries.
        </div>
        <div className="br-body" style={{fontSize:13.5, color:BR.deep70, lineHeight:1.65, marginTop:10}}>
          I was the embedded lead researcher on the Services team, partnering closely with product, design, engineering, and data science to support service-based businesses. Think salons, accountants, and lawn care companies. My focus was on three flagship products: Square Appointments, Invoices, and Virtual Terminal, across web, desktop, and hardware surfaces.
        </div>
      </div>
    </div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────
const TESTIMONIALS_DATA = [
  {
    type:'user',
    quote:"Your Tool Adoption Research was not only thorough and reflective of critical business priorities but also recognized by the XNFL team as highly impactful in shaping GTM strategy and product roadmap prioritization. This demonstrated your ability to generate insights that resonate across cross-functional stakeholders and directly influence business strategy.",
    name:'Lead/Principal PM',
    projectId:'forest', projectLabel:'Services Tool Adoption',
  },
  {
    type:'quote',
    quote:"Working with Mai has been a genuine pleasure. She is an incredibly talented and dedicated research partner, and I've enjoyed collaborating and learning from her. The key findings she delivered were instrumental in shaping the Alpha and continue to be referenced and shared with cross-functional partners almost weekly... Even with significant implementation constraints, she used seller insights to surface flaws in the proposed MVP experience, which ultimately secured buy-in and guided the team toward a much stronger MVP direction.",
    name:'Senior Design Partner',
    projectId:'mountain', projectLabel:'P2P Integration',
  },
  {
    type:'user',
    quote:"You showed good instincts for where research was or wasn't needed... Your openness to broadening the scope and lens of that research helped it become a valuable input to decisions being made across Square — not just their direct team.",
    name:'Manager',
    projectId:'town', projectLabel:'Voice AI',
  },
];

function TestimonialQuoteIcon() {
  return (
    <svg width="36" height="27" viewBox="0 0 48 36" fill="none"
      style={{flexShrink:0, color:BR.teal, opacity:.45}}>
      <path d="M14.9951 36C12.4951 36 10.2285 35.0167 8.19513 33.05C6.1618 31.0833 5.14513 28.8333 5.14513 26.3C5.14513 22.8 6.2118 19.4833 8.34513 16.35C10.4785 13.2167 13.2285 10.1 16.5951 7L21.4951 11.25C19.3618 13.1333 17.6785 14.8833 16.4451 16.5C15.2118 18.1167 14.5951 19.9833 14.5951 22.1H19.9951V36H14.9951ZM37.9951 36C35.4951 36 33.2285 35.0167 31.1951 33.05C29.1618 31.0833 28.1451 28.8333 28.1451 26.3C28.1451 22.8 29.2118 19.4833 31.3451 16.35C33.4785 13.2167 36.2285 10.1 39.5951 7L44.4951 11.25C42.3618 13.1333 40.6785 14.8833 39.4451 16.5C38.2118 18.1167 37.5951 19.9833 37.5951 22.1H42.9951V36H37.9951Z"
        fill="currentColor"/>
    </svg>
  );
}

function TestimonialCard({ t }) {
  return (
    <div style={{
      display:'flex', flexDirection:'column', alignItems:'center',
      justifyContent:'center', textAlign:'center',
      padding:'36px 32px',
      background:`linear-gradient(135deg, ${BR.sky}28 0%, ${BR.meadow}22 100%)`,
      borderRadius:20, boxSizing:'border-box',
    }}>
      <TestimonialQuoteIcon/>
      <p className="br-body" style={{
        fontSize:16, lineHeight:1.8, color:BR.deep, fontStyle:'italic',
        margin:'18px 0 22px',
      }}>{t.quote}</p>
      <div className="br-cap" style={{color:BR.deep50}}>{t.name}</div>
      {t.projectId && (
        <button onClick={() => document.dispatchEvent(new CustomEvent('open-project', {detail: t.projectId}))}
          style={{marginTop:6, background:'none', border:'none', cursor:'pointer', padding:0,
            fontFamily:'Nunito', fontWeight:600, fontSize:11, letterSpacing:'.08em',
            textTransform:'uppercase', color:BR.teal, textDecoration:'underline', textUnderlineOffset:'3px'}}>
          {t.projectLabel}
        </button>
      )}
    </div>
  );
}

function Testimonials() {
  const [idx, setIdx] = aUseState(0);
  const total = TESTIMONIALS_DATA.length;
  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);

  return (
    <section className="br-fadeup" style={{padding:'12px 0 48px'}}>
      <div style={{marginBottom:28, textAlign:'center'}}>
        <h2 className="br-h2">
          In their{' '}
          <span className="br-display italic" style={{color:BR.teal}}>own words.</span>
        </h2>
      </div>

      {/* Carousel — single layout for desktop and mobile */}
      <div style={{maxWidth:680, margin:'0 auto'}}>
        <div style={{position:'relative', paddingBottom:4}}>
          {/* Stack layers */}
          <div style={{
            position:'absolute', left:14, right:14, top:10, bottom:0,
            borderRadius:20,
            background:`linear-gradient(135deg, ${BR.sky}14 0%, ${BR.meadow}10 100%)`,
            zIndex:0,
          }}/>
          <div style={{
            position:'absolute', left:7, right:7, top:5, bottom:0,
            borderRadius:20,
            background:`linear-gradient(135deg, ${BR.sky}20 0%, ${BR.meadow}16 100%)`,
            zIndex:1,
          }}/>
          {/* Active card */}
          <div key={idx} className="tk-fade" style={{position:'relative', zIndex:2}}>
            <TestimonialCard t={TESTIMONIALS_DATA[idx]}/>
          </div>
        </div>

        {/* Navigation */}
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:16, marginTop:24}}>
          <button onClick={prev} style={{
            width:36, height:36, borderRadius:'50%', cursor:'pointer',
            border:`1.5px solid ${BR.deep20}`, background:'#fff',
            display:'grid', placeItems:'center',
            fontFamily:'Nunito', fontWeight:700, fontSize:20, color:BR.deep,
            boxShadow:'0 2px 8px rgba(26,58,58,.08)', lineHeight:1,
          }}>&#8249;</button>
          <div style={{display:'flex', gap:6, alignItems:'center'}}>
            {TESTIMONIALS_DATA.map((_, i) => (
              <div key={i} onClick={() => setIdx(i)} style={{
                width: i===idx ? 20 : 6, height:6, borderRadius:999,
                background: i===idx ? BR.teal : BR.deep20,
                transition:'all .3s ease', cursor:'pointer',
              }}/>
            ))}
          </div>
          <button onClick={next} style={{
            width:36, height:36, borderRadius:'50%', cursor:'pointer',
            border:`1.5px solid ${BR.deep20}`, background:'#fff',
            display:'grid', placeItems:'center',
            fontFamily:'Nunito', fontWeight:700, fontSize:20, color:BR.deep,
            boxShadow:'0 2px 8px rgba(26,58,58,.08)', lineHeight:1,
          }}>&#8250;</button>
        </div>
      </div>
    </section>
  );
}

// ─── Island Map ───────────────────────────────────────────────────────────
function IslandMap({ onOpen }) {
  const [hovered, setHovered] = aUseState(null);
  const [revealed, setRevealed] = aUseState(false);
  const [hasInteracted, setHasInteracted] = aUseState(false);
  const target = hovered
    ? PROJECTS.find(p => p.id === hovered).pos
    : { x:50, y:50 };

  // Hotspot zones over map2.png displayed with objectFit:'contain'.
  // Image is square (1254×1254) in a 16:10 container → rendered at 62.5% of width,
  // centred with 18.75% margins each side.
  // container_x = 18.75 + img_x * 0.625  |  container_y = img_y (unchanged)
  const ZONES = [
    { id:'beach',    zIndex:5, style:{ left:'36%', top:'3%',  width:'30%', height:'47%' } }, // Mountains (upper center)
    { id:'forest',   zIndex:4, style:{ left:'10%', top:'15%', width:'31%', height:'55%' } }, // Forest (left)
    { id:'town',     zIndex:4, style:{ left:'55%', top:'30%', width:'40%', height:'50%' } }, // City (right)
    { id:'mountain', zIndex:6, style:{ left:'25%', top:'65%', width:'28%', height:'30%' } }, // Beach (bottom)
    { id:'quant',    zIndex:7, style:{ left:'77%', top:'5%',  width:'14%', height:'22%' } }, // Small island (top right)
  ];

  return (
    <section id="map" className="br-fadeup" style={{padding:'24px 0 40px'}}>
      <div className="mob-map-header" style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:18}}>
        <div>
          <div className="br-cap" style={{color:BR.teal, marginBottom:6}}>
            <Icon name="map" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
            The Map
          </div>
          <h2 className="br-h2">
            Pick a destination,{' '}
            <span className="br-display italic" style={{color:BR.teal}}>
              see what I've accomplished'.
            </span>
          </h2>
        </div>
        <div className="br-cap mob-map-hint" style={{color:BR.deep50}}>
          <Icon name="mood-happy" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
          Hover any zone · Click for details
        </div>
      </div>

      <div style={{position:'relative'}}>

        {/* Map grid — blurred until user clicks Start exploring */}
        <div className="mob-map-grid" style={{
          display:'grid', gridTemplateColumns:'300px 1fr', gap:20, alignItems:'stretch',
          filter: revealed ? 'none' : 'blur(5px)',
          transition: 'filter 0.5s ease',
          pointerEvents: revealed ? 'auto' : 'none',
          userSelect: revealed ? 'auto' : 'none',
        }}>
        <MapContext/>
        <div className="br-card" style={{
          padding:0, overflow:'hidden', position:'relative', borderRadius:24,
          boxShadow:'0 4px 12px rgba(26,58,58,.08), 0 24px 60px rgba(26,58,58,.12)',
        }}>
        {/* Ocean teal background fills the side margins from objectFit:contain */}
        <div style={{position:'relative', aspectRatio:'16/10', userSelect:'none', background:'#1A5870'}}>

          {/* ── Map image — contain keeps it pixel-perfect with no stretching ── */}
          <img
            src="images/map2.png"
            alt="Adventure Map"
            draggable={false}
            style={{
              position:'absolute', inset:0,
              width:'100%', height:'100%',
              objectFit:'contain', objectPosition:'center',
              display:'block',
            }}
          />

          {/* ── Clickable/hoverable zone hotspots ── */}
          {ZONES.map(z => {
            const proj = PROJECTS.find(p => p.id === z.id);
            return (
              <div
                key={z.id}
                style={{
                  position:'absolute', cursor:'pointer',
                  ...z.style, zIndex: z.zIndex,
                  background: hovered === z.id ? 'rgba(245,200,66,.10)' : 'transparent',
                  transition:'background .2s ease',
                }}
                onMouseEnter={() => { setHovered(z.id); setHasInteracted(true); }}
                onMouseLeave={() => setHovered(null)}
                onClick={() => { setHasInteracted(true); onOpen(proj); }}
              />
            );
          })}

          {/* ── Alfie alongside Mai ── */}
          <div style={{
            position:'absolute',
            left:`${target.x}%`, top:`${target.y}%`,
            transform:'translate(4px, -90%)',
            transition:'left .9s cubic-bezier(.5,.15,.3,1), top .9s cubic-bezier(.5,.15,.3,1)',
            pointerEvents:'none', zIndex:10,
            filter:'drop-shadow(0 3px 0 rgba(26,58,58,.18))',
          }}>
            <div className={revealed && !hasInteracted && !hovered ? 'map-bounce' : ''}>
              <Sprite src={window.__resources.alfieFront} width={44} height={76} walking={!!hovered}/>
            </div>
          </div>

          {/* ── Mai ── */}
          <div style={{
            position:'absolute',
            left:`${target.x}%`, top:`${target.y}%`,
            transform:'translate(-50%, -90%)',
            transition:'left .9s cubic-bezier(.5,.15,.3,1), top .9s cubic-bezier(.5,.15,.3,1)',
            pointerEvents:'none', zIndex:11,
            filter:'drop-shadow(0 4px 0 rgba(26,58,58,.2))',
          }}>
            <div className={revealed && !hasInteracted && !hovered ? 'map-bounce' : ''} style={{animationDelay:'.18s'}}>
              <Sprite src={window.__resources.maiFront} width={56} height={98} walking={!!hovered}/>
            </div>
          </div>

          {/* ── Hover popup ── */}
          {hovered && <HoverPopover project={PROJECTS.find(p => p.id === hovered)}/>}

        </div>
      </div>
        </div>{/* closes mob-map-grid */}

        {/* ── Alfie overlay — shown until revealed ── */}
        {!revealed && (
          <div style={{
            position:'absolute', inset:0,
            display:'flex', alignItems:'center', justifyContent:'center',
            zIndex:10, padding:'0 16px',
          }}>
            <div className="br-card" style={{
              padding:'24px 28px', maxWidth:540, width:'100%',
              display:'grid', gridTemplateColumns:'auto 1fr', gap:24, alignItems:'center',
              background:'linear-gradient(135deg, #fff 0%, #F2F8F8 100%)',
              borderRadius:20,
              boxShadow:'0 8px 48px rgba(26,58,58,.28)',
            }}>
              {/* Alfie sprite */}
              <div style={{position:'relative', width:100, height:100}}>
                <div style={{
                  position:'absolute', inset:0, borderRadius:18, overflow:'hidden',
                  background:`radial-gradient(circle at 50% 60%, ${BR.meadow} 0%, ${BR.sky} 100%)`,
                }}/>
                <div className="br-bob" style={{
                  position:'absolute', inset:0, display:'grid', placeItems:'end center', paddingBottom:4,
                }}>
                  <Sprite src={window.__resources.alfieFront} width={100} height={128} style={{objectFit:'contain'}}/>
                </div>
              </div>

              {/* Bubble + CTA */}
              <div>
                <div className="br-bubble tail-left" style={{padding:'16px 20px', borderRadius:16, marginBottom:16}}>
                  <div className="br-cap" style={{color:BR.teal, marginBottom:5}}>Alfie · Your guide</div>
                  <div className="br-body" style={{fontSize:16}}>
                    Welcome, traveler! Four paths lie ahead — each a project. Hover any zone to glimpse what Mai's been up to. Click a zone to walk it and read the full tale.
                  </div>
                </div>
                <button className="br-btn primary" onClick={() => setRevealed(true)} style={{fontSize:14, padding:'10px 20px'}}>
                  Start exploring <Icon name="arrow-right" size={15}/>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>{/* closes position:relative wrapper */}
    </section>
  );
}

function WaterPattern() {
  return (
    <div style={{
      position:'absolute', inset:0,
      backgroundImage:`url("data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'>
          <path d='M0 20 Q 10 12 20 20 T 40 20 T 60 20 T 80 20' stroke='${BR.waterDk}' stroke-width='1.2' fill='none' opacity='.35'/>
          <path d='M0 30 Q 10 22 20 30 T 40 30 T 60 30 T 80 30' stroke='${BR.waterDk}' stroke-width='1.2' fill='none' opacity='.22'/>
        </svg>
      `)}")`,
      backgroundRepeat:'repeat',
    }}/>
  );
}

function IslandSVG({ hovered, onHover, onOpen }) {
  // SVG zone centers (viewBox 0 0 100 60) — used for character movement targets via pos
  const ENDS = { forest:{x:20,y:25}, beach:{x:58,y:11}, mountain:{x:44,y:50}, town:{x:74,y:34} };

  // Helper: layered pine tree
  const Pine = ({x, y, s=1}) => (
    <g>
      <rect x={x-.55*s} y={y} width={1.1*s} height={2.2*s} fill="#7A5030"/>
      <path d={`M ${x} ${y-7*s} L ${x-3.8*s} ${y} L ${x+3.8*s} ${y} Z`} fill="#1E4A26"/>
      <path d={`M ${x} ${y-10*s} L ${x-2.8*s} ${y-5*s} L ${x+2.8*s} ${y-5*s} Z`} fill="#2A6032"/>
      <path d={`M ${x} ${y-13*s} L ${x-1.8*s} ${y-9*s} L ${x+1.8*s} ${y-9*s} Z`} fill="#387040"/>
    </g>
  );

  return (
    <svg viewBox="0 0 100 60" preserveAspectRatio="none"
      style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
      <defs>
        <pattern id="map-grid" width="3.5" height="3.5" patternUnits="userSpaceOnUse">
          <path d="M 3.5 0 L 0 0 0 3.5" fill="none" stroke="rgba(255,255,255,.035)" strokeWidth=".35"/>
        </pattern>
        <radialGradient id="island-vignette" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(0,0,0,0)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,.18)"/>
        </radialGradient>
      </defs>

      {/* Parchment grid overlay */}
      <rect x="0" y="0" width="100" height="60" fill="url(#map-grid)"/>

      {/* Ocean swirl waves */}
      <path d="M 0 8 Q 5 5 10 9 Q 15 13 20 8 Q 25 3 30 8" stroke="rgba(255,255,255,.07)" strokeWidth="1.2" fill="none"/>
      <path d="M 0 16 Q 4 13 8 17 Q 12 21 16 16" stroke="rgba(255,255,255,.06)" strokeWidth="1" fill="none"/>
      <path d="M 80 55 Q 86 52 92 56 Q 96 58 100 54" stroke="rgba(255,255,255,.07)" strokeWidth="1.2" fill="none"/>
      <path d="M 0 50 Q 4 47 7 51" stroke="rgba(255,255,255,.07)" strokeWidth="1" fill="none"/>
      <path d="M 90 6 Q 94 4 98 8" stroke="rgba(255,255,255,.06)" strokeWidth="1" fill="none"/>
      <path d="M 93 20 Q 96 18 99 22" stroke="rgba(255,255,255,.06)" strokeWidth="1" fill="none"/>

      {/* ── Sandy coastline (outer island) ── */}
      <path d="M 12 48 Q 6 36 8 22 Q 10 10 24 7 Q 38 3 54 4 Q 68 4 80 10
               Q 90 15 93 27 Q 96 40 90 50 Q 82 57 65 58 Q 48 60 32 57 Q 14 53 12 48 Z"
        fill="#C8A044" stroke="#A88030" strokeWidth=".4" strokeLinejoin="round"/>

      {/* ── Rocky cliff edges (left coast) ── */}
      <path d="M 12 48 Q 9 42 10 34 Q 11 26 13 18" stroke="#7A6030" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".55"/>
      {[[11,46],[10,40],[10,34],[11,26],[12,20]].map(([x,y],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="2.8" ry="1.6" fill="#8A7040" opacity=".45"/>
      ))}
      {/* Right coast rocks */}
      <path d="M 90 50 Q 92 44 92 36 Q 92 28 91 20" stroke="#7A6030" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".4"/>

      {/* ── Green grass interior ── */}
      <path d="M 17 47 Q 13 35 15 23 Q 18 13 28 10 Q 42 7 56 7 Q 70 6 80 14
               Q 88 20 88 32 Q 88 44 80 51 Q 68 57 52 57 Q 34 57 24 53 Q 17 50 17 47 Z"
        fill="#4A7830" stroke="#3A6822" strokeWidth=".35"/>

      {/* ── River from mountains down ── */}
      <path d="M 62 20 Q 60 26 56 30 Q 52 34 50 38 Q 48 42 46 48"
        stroke="#5AABCC" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity=".7"/>
      <path d="M 62 20 Q 60 26 56 30 Q 52 34 50 38 Q 48 42 46 48"
        stroke="#8ACCE0" strokeWidth=".8" fill="none" strokeLinecap="round" opacity=".45"/>

      {/* ══════════ MOUNTAINS (upper center, project='beach') ══════════ */}
      <g style={{cursor:'pointer'}} onClick={()=>onOpen('beach')}
        onMouseEnter={()=>onHover('beach')} onMouseLeave={()=>onHover(null)}
        opacity={hovered==='beach' ? 1 : .92}>
        {/* Base foliage at mountain feet */}
        <path d="M 38 28 Q 50 23 66 23 Q 78 23 88 28" fill="#3A6822" opacity=".7"/>
        {/* Left peak */}
        <path d="M 40 28 L 50 10 L 60 28 Z" fill="#7888A2"/>
        <path d="M 40 28 L 50 10 L 45 28 Z" fill="#5A6880" opacity=".35"/>
        <path d="M 47 16 L 50 10 L 53 16 Z" fill="#D4E4F4"/>
        <path d="M 48.5 13 L 50 10 L 51.5 13 Z" fill="#EEF6FF"/>
        {/* Center peak (tallest) */}
        <path d="M 50 28 L 62 5 L 74 28 Z" fill="#6878A0"/>
        <path d="M 50 28 L 62 5 L 56 28 Z" fill="#505870" opacity=".35"/>
        <path d="M 58 13 L 62 5 L 66 13 Z" fill="#D8ECFC"/>
        <path d="M 60 9 L 62 5 L 64 9 Z" fill="#EEF6FF"/>
        <path d="M 61 7 L 62 5 L 63 7 Z" fill="#fff"/>
        {/* Right peak */}
        <path d="M 64 28 L 74 9 L 84 28 Z" fill="#7888A8"/>
        <path d="M 64 28 L 74 9 L 69 28 Z" fill="#5A6880" opacity=".3"/>
        <path d="M 70 16 L 74 9 L 78 16 Z" fill="#D4E4F4"/>
        <path d="M 72 13 L 74 9 L 76 13 Z" fill="#EEF6FF"/>
        {/* Far-right smaller peak */}
        <path d="M 76 28 L 82 16 L 88 28 Z" fill="#8898B0"/>
        <path d="M 80 22 L 82 16 L 84 22 Z" fill="#DDEEFA"/>
        {/* Rocky texture at base */}
        <path d="M 40 28 Q 55 24 70 25 Q 80 24 88 28" fill="none" stroke="#8898A8" strokeWidth=".8" opacity=".5"/>
        {/* Tree line at base */}
        <Pine x={42} y={28} s={.6}/> <Pine x={47} y={27} s={.65}/> <Pine x={84} y={28} s={.55}/> <Pine x={88} y={27} s={.6}/>
        {/* Hit area */}
        <rect x="36" y="4" width="54" height="26" fill="transparent"/>
      </g>

      {/* ══════════ FOREST (left side, project='forest') ══════════ */}
      <g style={{cursor:'pointer'}} onClick={()=>onOpen('forest')}
        onMouseEnter={()=>onHover('forest')} onMouseLeave={()=>onHover(null)}
        opacity={hovered==='forest' ? 1 : .92}>
        {/* Forest floor shadow */}
        <ellipse cx="22" cy="36" rx="13" ry="9" fill="#1E4220" opacity=".45"/>
        {/* Background small trees */}
        {[[15,30],[20,26],[26,24],[31,26],[35,30]].map(([x,y],i)=>(
          <Pine key={`bg${i}`} x={x} y={y} s={.58}/>
        ))}
        {/* Mid-layer trees */}
        {[[14,36],[19,32],[25,29],[30,33],[35,37]].map(([x,y],i)=>(
          <Pine key={`mid${i}`} x={x} y={y} s={.78}/>
        ))}
        {/* Foreground tall trees */}
        {[[18,40],[24,36],[29,39]].map(([x,y],i)=>(
          <Pine key={`fg${i}`} x={x} y={y} s={.92}/>
        ))}
        {/* Rocky outcrops on forest floor */}
        <ellipse cx="15" cy="42" rx="2.5" ry="1.2" fill="#8A7040" opacity=".5"/>
        <ellipse cx="34" cy="41" rx="2" ry="1" fill="#8A7040" opacity=".45"/>
        {/* Hit area */}
        <rect x="10" y="18" width="28" height="28" fill="transparent"/>
      </g>

      {/* ══════════ CITY (right center, project='town') ══════════ */}
      <g style={{cursor:'pointer'}} onClick={()=>onOpen('town')}
        onMouseEnter={()=>onHover('town')} onMouseLeave={()=>onHover(null)}
        opacity={hovered==='town' ? 1 : .92}>
        {/* City ground/cobblestone plaza */}
        <path d="M 58 52 Q 64 47 76 46 Q 88 46 92 50 Q 90 57 76 57 Q 62 57 58 52 Z"
          fill="#C0A060" opacity=".5"/>
        {/* City walls */}
        <rect x="60" y="43" width="30" height="11" rx="1" fill="#C4A058" stroke="#A88038" strokeWidth=".4"/>
        {/* Large cathedral / dome building */}
        <rect x="68" y="32" width="12" height="14" fill="#D0B068"/>
        <path d="M 67.5 32 Q 74 25 80.5 32 Z" fill="#5A7888"/>
        <path d="M 68.5 32 Q 74 26.5 79.5 32 Z" fill="#4A6878" opacity=".8"/>
        <rect x="73.4" y="22.5" width=".9" height="3.5" fill="#9A8040"/>
        {/* Left tower */}
        <rect x="60" y="29" width="6" height="16" fill="#C8A850"/>
        <path d="M 59.5 29 L 63 23.5 L 66.5 29 Z" fill="#9A7830"/>
        <rect x="62" y="36" width="2.5" height="3" fill="#6A4818"/>
        <rect x="61" y="31" width="1.8" height="1.8" fill="#8AC0D0" opacity=".85"/>
        <rect x="63.5" y="31" width="1.8" height="1.8" fill="#8AC0D0" opacity=".85"/>
        {/* Right tower */}
        <rect x="83" y="30" width="6" height="15" fill="#C09848"/>
        <path d="M 82.5 30 L 86 24.5 L 89.5 30 Z" fill="#9A7830"/>
        <rect x="85" y="37" width="2.5" height="3" fill="#6A4818"/>
        <rect x="83.5" y="32" width="1.8" height="1.8" fill="#8AC0D0" opacity=".85"/>
        <rect x="86" y="32" width="1.8" height="1.8" fill="#8AC0D0" opacity=".85"/>
        {/* Smaller buildings */}
        <rect x="58" y="37" width="6" height="8" fill="#D0A860"/>
        <path d="M 57.5 37 L 61 32.5 L 64.5 37 Z" fill="#A08030"/>
        <rect x="59.5" y="41" width="2.5" height="4" fill="#6A4818"/>
        <rect x="87" y="38" width="5" height="7" fill="#C89848"/>
        <path d="M 86.5 38 L 89.5 34 L 92.5 38 Z" fill="#9A7030"/>
        {/* City arched gate */}
        <rect x="71" y="48" width="6" height="6" fill="#B09050"/>
        <path d="M 71 48 Q 74 44.5 77 48" fill="#8A7040"/>
        {/* Green trees near city */}
        {[[59,46],[90,46]].map(([x,y],i)=>(
          <g key={i}>
            <rect x={x-.4} y={y-3} width=".8" height="3.5" fill="#6A4820"/>
            <circle cx={x} cy={y-5} r="3" fill="#2A6020"/>
            <circle cx={x} cy={y-5} r="1.8" fill="#3A7A2A" opacity=".7"/>
          </g>
        ))}
        {/* Hit area */}
        <rect x="56" y="22" width="38" height="34" fill="transparent"/>
      </g>

      {/* ══════════ BEACH (bottom center, project='mountain') ══════════ */}
      <g style={{cursor:'pointer'}} onClick={()=>onOpen('mountain')}
        onMouseEnter={()=>onHover('mountain')} onMouseLeave={()=>onHover(null)}
        opacity={hovered==='mountain' ? 1 : .92}>
        {/* Sandy beach cove */}
        <path d="M 32 55 Q 36 51 46 51 Q 56 51 60 55 Q 56 58 46 58 Q 36 58 32 55 Z"
          fill="#D4B458"/>
        {/* Palm tree 1 */}
        <rect x="36.6" y="46" width=".9" height="7" fill="#9A6E30"/>
        <path d="M 37 46 Q 33 43 31 41" stroke="#2A7030" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 37 46 Q 37 43 37 41" stroke="#2A7030" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 37 46 Q 40 43 43 42" stroke="#2A7030" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Palm tree 2 */}
        <rect x="52.6" y="44" width=".9" height="7" fill="#9A6E30"/>
        <path d="M 53 44 Q 50 41 48 40" stroke="#2A7030" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 53 44 Q 55 41 58 40" stroke="#2A7030" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 53 44 Q 53 41 53 39" stroke="#2A7030" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Dock/pier */}
        <rect x="43" y="55" width="12" height="1.4" fill="#9A7040" rx=".4"/>
        <rect x="44"   y="55" width=".8" height="3" fill="#7A5028"/>
        <rect x="47"   y="55" width=".8" height="3" fill="#7A5028"/>
        <rect x="50"   y="55" width=".8" height="3" fill="#7A5028"/>
        <rect x="53.5" y="55" width=".8" height="3" fill="#7A5028"/>
        {/* Boat */}
        <path d="M 40 57 Q 43 58.5 46 57" fill="#C07030" stroke="#8B4018" strokeWidth=".5"/>
        <rect x="42.5" y="55" width=".45" height="2.2" fill="#7A3818"/>
        {/* Hit area */}
        <rect x="28" y="40" width="36" height="18" fill="transparent"/>
      </g>

      {/* ── Small rocky islands in ocean ── */}
      <g opacity=".85">
        <ellipse cx="96" cy="14" rx="3.5" ry="2" fill="#7A6840"/>
        <path d="M 93.5 13 Q 96 11 98.5 13" fill="#9A8858" opacity=".7"/>
        <ellipse cx="5" cy="52" rx="2.8" ry="1.6" fill="#7A6840"/>
        <ellipse cx="97" cy="50" rx="2.2" ry="1.3" fill="#7A6840"/>
        <ellipse cx="6" cy="16" rx="2" ry="1.2" fill="#7A6840"/>
        <ellipse cx="90" cy="56" rx="2.5" ry="1.4" fill="#7A6840"/>
        <ellipse cx="93" cy="58" rx="1.5" ry=".9" fill="#6A5830"/>
      </g>

      {/* ── Compass rose (bottom-left, in ocean) ── */}
      <g transform="translate(9,52)">
        <circle r="5.5" fill="rgba(14,44,54,.72)" stroke="#C8A840" strokeWidth=".5"/>
        <circle r="4.5" fill="none" stroke="#C8A840" strokeWidth=".25" opacity=".5"/>
        {/* Cardinal points */}
        <path d="M 0 -4.8 L .9 -1.8 L 0 -3 L -.9 -1.8 Z" fill="#E8D060"/>
        <path d="M 0 4.8 L .9 1.8 L 0 3 L -.9 1.8 Z" fill="#C0A848" opacity=".75"/>
        <path d="M -4.8 0 L -1.8 .9 L -3 0 L -1.8 -.9 Z" fill="#C0A848" opacity=".75"/>
        <path d="M 4.8 0 L 1.8 .9 L 3 0 L 1.8 -.9 Z" fill="#C0A848" opacity=".75"/>
        {/* Diagonal points */}
        <path d="M -3.4 -3.4 L -1.4 -1 L -1 -1.4 Z" fill="#C0A848" opacity=".5"/>
        <path d="M 3.4 -3.4 L 1.4 -1 L 1 -1.4 Z" fill="#C0A848" opacity=".5"/>
        <path d="M -3.4 3.4 L -1.4 1 L -1 1.4 Z" fill="#C0A848" opacity=".5"/>
        <path d="M 3.4 3.4 L 1.4 1 L 1 1.4 Z" fill="#C0A848" opacity=".5"/>
        <text x="0" y="-5.8" textAnchor="middle" style={{fontFamily:'serif', fontSize:2.2, fontWeight:700, fill:'#E8D060', letterSpacing:0}}>N</text>
        <text x="0" y="7.6" textAnchor="middle" style={{fontFamily:'serif', fontSize:1.6, fill:'#C8B040', opacity:.75}}>S</text>
        <text x="-7" y=".6" textAnchor="middle" style={{fontFamily:'serif', fontSize:1.6, fill:'#C8B040', opacity:.75}}>W</text>
        <text x="7" y=".6" textAnchor="middle" style={{fontFamily:'serif', fontSize:1.6, fill:'#C8B040', opacity:.75}}>E</text>
        <circle r=".7" fill="#E8D060"/>
      </g>

      {/* Vignette */}
      <rect x="0" y="0" width="100" height="60" fill="url(#island-vignette)"/>
    </svg>
  );
}

function Pin({ project, hovered, onEnter, onLeave, onClick }) {
  return (
    <button
      onMouseEnter={onEnter} onMouseLeave={onLeave}
      onFocus={onEnter} onBlur={onLeave}
      onClick={onClick}
      style={{
        position:'absolute',
        left:`${project.pos.x}%`, top:`${project.pos.y}%`,
        transform:`translate(-50%, -100%) ${hovered?'scale(1.08)':'scale(1)'}`,
        background:'transparent', border:'none', padding:0, cursor:'pointer',
        transition:'transform .25s ease', zIndex: hovered ? 7 : 4,
      }}>
      <div style={{position:'relative', display:'flex', flexDirection:'column', alignItems:'center', gap:6}}>
        <span className="br-ring" style={{
          position:'absolute', top:14, width:36, height:36, borderRadius:'50%',
          background: hovered ? 'rgba(245,200,66,.45)' : 'rgba(245,200,66,.3)',
          pointerEvents:'none',
        }}/>
        <div className="br-pulse" style={{
          width:44, height:44, borderRadius:'50%',
          background: hovered ? BR.gold : '#fff',
          border:`3px solid ${BR.deep}`, display:'grid', placeItems:'center',
          boxShadow:'0 4px 12px rgba(26,58,58,.25)',
        }}>
          <Icon name={project.icon} size={22} color={BR.deep} stroke={2}/>
        </div>
        <div style={{
          width:0, height:0,
          borderLeft:'5px solid transparent', borderRight:'5px solid transparent',
          borderTop:`8px solid ${BR.deep}`,
          marginTop:-4,
        }}/>
        <div style={{
          marginTop:-3,
          background:BR.deep, color:'#fff',
          padding:'4px 10px', borderRadius:8,
          fontFamily:'Nunito', fontWeight:700, fontSize:11,
          letterSpacing:'.08em', textTransform:'uppercase',
          whiteSpace:'nowrap',
          boxShadow:'0 4px 12px rgba(26,58,58,.2)',
        }}>
          {project.subtitle.length > 22 ? project.tag : project.subtitle.split('·')[0].trim() || project.tag}
        </div>
      </div>
    </button>
  );
}

function HoverPopover({ project }) {
  const onLeft  = project.pos.x < 50;
  const isTop   = project.pos.y < 50;
  const left    = project.pos.x + (onLeft ? 7 : -7);
  const top     = isTop ? project.pos.y + 8 : project.pos.y - 4;
  const transform = isTop
    ? (onLeft ? 'translate(0, 0)' : 'translate(-100%, 0)')
    : (onLeft ? 'translate(0, -100%)' : 'translate(-100%, -100%)');
  return (
    <div style={{
      position:'absolute',
      left:`${left}%`, top:`${top}%`,
      transform,
      zIndex:10, pointerEvents:'none', width:280,
    }}>
      <div className="br-card br-slidein" style={{
        padding:'16px 18px',
        borderTop:`4px solid ${project.colorDk}`,
        borderRadius:14,
      }}>
        <div style={{marginBottom:8}}>
          <span className="br-tag gold">
            <Icon name="map-pin" size={11} color={BR.deep}/> {project.popoverTag || project.tag}
          </span>
        </div>
        <div className="br-h3" style={{fontSize:18, marginBottom:4}}>{project.title}</div>
        <div className="br-body" style={{fontSize:14, color:BR.deep70, marginBottom: project.popoverSimple ? 0 : 10}}>
          {project.popoverSubtitle || project.subtitle}
        </div>
        {!project.popoverSimple && (
          <div style={{display:'flex', flexDirection:'column', gap:4, fontSize:13}}>
            <Row icon="eye"    label="Timeline"   value={project.timeline}/>
            <Row icon="tools"  label="Method" value={project.method}/>
            <Row icon="flag"   label="Highlight" value={project.highlight}/>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ icon, label, value }) {
  return (
    <div style={{display:'flex', alignItems:'flex-start', gap:6}}>
      <Icon name={icon} size={14} color={BR.deep50} style={{marginTop:2, flexShrink:0}}/>
      <div>
        <span style={{fontFamily:'Nunito', fontWeight:700, fontSize:12,
          textTransform:'uppercase', letterSpacing:'.06em', color:BR.deep50}}>
          {label}
        </span>{' '}
        <span style={{fontFamily:'Nunito', fontWeight:500, fontSize:13, color:BR.deep}}>{value}</span>
      </div>
    </div>
  );
}

// ─── Project grid ─────────────────────────────────────────────────────────
function ProjectsGrid({ onOpen }) {
  return (
    <section id="projects" className="br-fadeup" style={{padding:'12px 0 60px'}}>
      <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:18}}>
        <h2 className="br-h2">
          <Editable id="projects_h2_a" defaultValue="Side"/>{' '}
          <span className="br-display italic" style={{color:BR.teal}}>
            <Editable id="projects_h2_b" defaultValue="Quests."/>
          </span>
        </h2>
        <div className="br-cap" style={{color:BR.deep50}}>4 destinations · 8 years</div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:20}}>
        {PROJECTS.map(p=>(
          <button key={p.id} onClick={()=>onOpen(p)} className="br-card hover" style={{
            textAlign:'left', padding:0, overflow:'hidden', cursor:'pointer',
            border:'none', borderRadius:18,
          }}>
            <div style={{height:110, background:p.bg, position:'relative',
              display:'flex', alignItems:'center', justifyContent:'space-between',
              padding:'0 22px'}}>
              <div style={{display:'flex', flexDirection:'column', gap:8}}>
                <span className="br-tag" style={{
                  background:'rgba(255,255,255,.7)', color:BR.deep, borderColor:'rgba(255,255,255,.4)',
                }}>
                  <Icon name={p.icon} size={11}/> {p.tag}
                </span>
              </div>
              <div style={{
                width:64, height:64, borderRadius:'50%',
                background:'rgba(255,255,255,.6)', display:'grid', placeItems:'center',
              }}>
                <Icon name={p.icon} size={32} color={BR.deep} stroke={1.8}/>
              </div>
            </div>
            <div style={{padding:'20px 22px'}}>
              <div className="br-display" style={{fontSize:24, lineHeight:1.15, marginBottom:6}}>
                <Editable id={`pgrid_title_${p.id}`} defaultValue={p.title}/>
              </div>
              <div className="br-body" style={{fontSize:15, color:BR.deep70, marginBottom:14}}>
                <Editable id={`pgrid_sub_${p.id}`} defaultValue={p.subtitle}/>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:8,
                color:BR.teal, fontFamily:'Nunito', fontWeight:700, fontSize:14}}>
                Walk the path <Icon name="arrow-right" size={16}/>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

// ─── Quest page modal ─────────────────────────────────────────────────────
function QuestPage({ project, onClose, onNavigate }) {
  const scrollRef = aUseRef(null);
  aUseEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [project]);
  aUseEffect(() => {
    if (project && typeof gtag === 'function') {
      gtag('event', 'open_project', { event_category: 'Portfolio', event_label: project.title });
    }
  }, [project]);
  aUseEffect(() => {
    const handler = e => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  onNavigate(prev);
      if (e.key === 'ArrowRight') onNavigate(next);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose, onNavigate, prev, next]);
  if (!project) return null;
  const idx  = PROJECTS.findIndex(p => p.id === project.id);
  const prev = PROJECTS[idx > 0 ? idx - 1 : PROJECTS.length - 1];
  const next = PROJECTS[idx < PROJECTS.length - 1 ? idx + 1 : 0];
  const DEFAULT_SCENES = [
    { name:'Intro',      icon:'file-text', hint:'Overview and background of the project.' },
    { name:'Objective',  icon:'flag',      hint:'The business question and research goals we were trying to answer.' },
    { name:'Approach',   icon:'compass',   hint:'Study design · participants · timeline · my role.' },
    { name:'Findings',   icon:'bulb',      hint:'Top insights with supporting data, quotes, and clips.' },
    { name:'Impact',     icon:'rocket',    hint:'Shipped decisions, downstream artifacts, and measurable outcomes.' },
    { name:'Reflection', icon:'book',      hint:'What I\'d do differently next time + key learnings.' },
  ];
  const SCENES = project.scenes || DEFAULT_SCENES;
  return (
    <div ref={scrollRef} style={{
      position:'fixed', inset:0, background:'rgba(26,58,58,.45)', zIndex:60,
      overflowY:'auto',
      backdropFilter:'blur(6px)',
    }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="br-slidein mob-modal-content" style={{
        background:BR.foam, margin:'40px auto', maxWidth:1200, width:'calc(100% - 32px)',
        borderRadius:24, overflow:'hidden',
        boxShadow:'0 24px 60px rgba(26,58,58,.4)',
      }}>
        {/* Banner */}
        <div className="mob-modal-banner" style={{
          position:'relative', padding:'28px 32px 0', height:280, overflow:'hidden',
          background: project.bg,
        }}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', position:'relative', zIndex:2}}>
            <div>
              <button className="br-btn ghost" onClick={onClose} style={{
                color:BR.deep, background:'rgba(255,255,255,.7)', padding:'8px 12px',
              }}>
                <Icon name="arrow-left" size={16}/> Back to map
              </button>
              {(() => {
                const methods = project.method
                  ? project.method.split('·').map(m => m.trim())
                  : [];
                const pill = (text, bg, color, border) => (
                  <span key={text} className="br-tag" style={{
                    background:bg, color, borderColor:border,
                    textTransform:'capitalize', whiteSpace:'nowrap', flexShrink:0,
                  }}>{text}</span>
                );
                return project.id === 'quant' ? null : (
                  <div className="mob-pills" style={{marginTop:18, display:'flex', gap:6, flexWrap:'nowrap', alignItems:'center'}}>
                    {pill(project.tag, 'rgba(59,191,176,.2)', '#0F5E55', 'rgba(59,191,176,.4)')}
                    {methods.map(m =>
                      pill(m, 'rgba(245,200,66,.28)', '#6A4E00', 'rgba(245,200,66,.55)')
                    )}
                    {project.timeline && pill(project.timeline, 'rgba(125,212,224,.25)', '#1A5A6A', 'rgba(125,212,224,.45)')}
                  </div>
                );
              })()}
              <h1 className="br-h1 mob-project-title" style={{marginTop:10, color:BR.deep, fontSize:48, maxWidth:660}}>
                <Editable id={`q_title_${project.id}`} defaultValue={project.title}/>
              </h1>
              <p className="br-body" style={{fontSize:18, color:BR.deep70, maxWidth:560, marginTop:6}}>
                <Editable id={`q_sub_${project.id}`} defaultValue={project.subtitle} multiline/>
              </p>
            </div>
            <button className="br-btn ghost" onClick={onClose} style={{padding:8, borderRadius:999}}>
              <Icon name="x" size={20}/>
            </button>
          </div>

          <div className="mob-modal-sprite" style={{position:'absolute', bottom:-4, right:48, filter:'drop-shadow(0 6px 0 rgba(26,58,58,.18))'}}>
            <Sprite src={window.__resources.maiSide} width={120} height={220}/>
          </div>
          <svg style={{position:'absolute', left:0, bottom:24, width:'100%', height:40}} preserveAspectRatio="none" viewBox="0 0 1200 40">
            <path d="M0 30 Q 300 10 600 28 T 1200 24" stroke={BR.deep} strokeWidth="2.5" strokeDasharray="6 8" fill="none" opacity=".4"/>
          </svg>
        </div>

        <div className="mob-modal-body" style={{padding:'32px 32px 40px'}}>
          <div style={{marginBottom:20}}>
            <CharQuote
              src={window.__resources.alfieFront}
              text={`At Square, we call our users "sellers" and our seller's customers "buyers". You'll see this language throughout.`}
            />
          </div>
          <div className="br-cap" style={{marginBottom:14, color:BR.teal}}>
            <Icon name="route" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
            Walk the path · scroll to explore
          </div>
          <div style={{
            display:'flex', flexDirection:'column', gap:18,
          }}>
            {SCENES.map((sc,i)=>(
              <SceneCard key={sc.name} idx={i} scene={sc} pid={project.id} accent={project.colorDk} onClose={onClose}/>
            ))}

            {(prev || next) && (
              <div style={{display:'flex', justifyContent:'center', gap:12, paddingTop:4}}>
                {prev && (
                  <button className="br-btn outline mob-nav-btn" onClick={()=>onNavigate(prev)} style={{
                    width:220, justifyContent:'flex-start', padding:'10px 16px', borderRadius:12, flexShrink:0,
                  }}>
                    <Icon name="arrow-left" size={15}/>
                    <span style={{overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{prev.title}</span>
                  </button>
                )}
                {next && (
                  <button className="br-btn outline mob-nav-btn" onClick={()=>onNavigate(next)} style={{
                    width:220, justifyContent:'space-between', padding:'10px 16px', borderRadius:12, flexShrink:0,
                  }}>
                    <span style={{overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{next.title}</span>
                    <Icon name="arrow-right" size={15}/>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Character speech bubble ─────────────────────────────────────────────
function CharSpeech({ text }) {
  return (
    <div style={{display:'flex', gap:12, alignItems:'flex-start'}}>
      {/* Character avatar — tall enough to show the head */}
      <div style={{
        width:52, height:68, borderRadius:12, overflow:'hidden', flexShrink:0,
        background:`linear-gradient(180deg, ${BR.sky} 0%, ${BR.meadow} 100%)`,
        display:'flex', alignItems:'flex-start', justifyContent:'center',
        boxShadow:'0 4px 14px rgba(26,58,58,.2)',
        border:'2px solid rgba(255,255,255,.5)',
      }}>
        <img src={window.__resources.maiFront} width={50} draggable={false} className="br-sprite"/>
      </div>

      {/* Speech bubble with proper left-pointing tail */}
      <div style={{position:'relative', flex:1}}>
        {/* CSS triangle tail */}
        <div style={{
          position:'absolute', left:-8, top:16,
          width:0, height:0,
          borderTop:'7px solid transparent',
          borderRight:'9px solid #fff',
          borderBottom:'7px solid transparent',
          filter:'drop-shadow(-1px 0 1px rgba(26,58,58,.07))',
        }}/>
        <div style={{
          background:'#fff',
          borderRadius:'2px 14px 14px 14px',
          padding:'13px 16px',
          boxShadow:'0 2px 12px rgba(26,58,58,.1), 0 1px 3px rgba(26,58,58,.06)',
        }}>
          <p className="br-body" style={{
            fontSize:14, color:BR.deep70, margin:0, fontStyle:'italic', lineHeight:1.65,
          }}>{text}</p>
        </div>
      </div>
    </div>
  );
}

function SceneCard({ idx, scene, pid, accent, onClose }) {
  const hasContent = scene.body || scene.bullets || scene.layout;
  return (
    <div style={{
      borderRadius:16, overflow:'hidden',
      boxShadow:'0 2px 8px rgba(26,58,58,.07), 0 0 0 1px rgba(26,58,58,.06)',
    }}>
      {/* Quest chapter header */}
      <div style={{
        padding:'16px 22px 14px',
        borderBottom:`1px solid rgba(26,58,58,.07)`,
        display:'flex', alignItems:'center', gap:16,
        background:'#fff',
      }}>
        {!scene.simpleHeader && (
          <div style={{
            width:46, height:46, borderRadius:14, flexShrink:0,
            background:accent,
            display:'grid', placeItems:'center',
            boxShadow:`0 4px 12px ${accent}55`,
          }}>
            <Icon name={scene.icon} size={22} color="#fff" stroke={1.8}/>
          </div>
        )}
        <div>
          {!scene.simpleHeader && (
            <div className="br-cap" style={{color:BR.deep50, marginBottom:3}}>
              Chapter {String(idx+1).padStart(2,'0')}
            </div>
          )}
          <h3 className="br-display" style={{fontSize:22, lineHeight:1.1, color:BR.deep, margin:0}}>
            {scene.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div style={{
        padding:'20px 22px',
        background: hasContent
          ? 'linear-gradient(180deg, #fff 0%, #FAFDF8 100%)'
          : '#fff',
      }}>
        {scene.layout === 'approach' ? (
          <>
            {/* Framing statement — brand Nunito Bold */}
            <p className="br-body" style={{
              color:BR.deep, margin:'0 0 20px 0', fontWeight:700,
            }}>{scene.intro}</p>
            {scene.intro2 && <p className="br-body" style={{color:BR.deep70, margin:'-4px 0 20px 0'}}>{scene.intro2}</p>}
            {scene.intro3 && <p className="br-body" style={{color:BR.deep70, margin:'-4px 0 20px 0'}}>{scene.intro3}</p>}

            {/* Optional pre-speech (left-anchored, stops ~halfway) */}
            {scene.preSpeech && (
              <div className="mob-speech-box" style={{maxWidth:'55%', marginBottom:20}}>
                <CharSpeech text={scene.preSpeech}/>
              </div>
            )}

            {/* Optional approach bullets — shown between intro and cards */}
            {scene.bullets && (
              <div style={{display:'flex', flexDirection:'column', gap:10, marginBottom:20}}>
                {scene.bullets.map((b, i) => (
                  <div key={i} style={{display:'flex', gap:12, alignItems:'flex-start'}}>
                    <div style={{
                      width:6, height:6, borderRadius:'50%',
                      background:accent, marginTop:7, flexShrink:0,
                      boxShadow:`0 0 0 2px ${accent}30`,
                    }}/>
                    <p className="br-body" style={{fontSize:14, color:BR.deep70, margin:0, lineHeight:1.65}}>{b}</p>
                  </div>
                ))}
              </div>
            )}

            {/* N method cards — dynamic column count */}
            <div className="mob-methods-grid" style={{
              display:'grid',
              gridTemplateColumns:`repeat(${scene.methods.length}, 1fr)`,
              gap:12, marginBottom:20,
            }}>
              {scene.methods.map((m, i) => (
                <div key={i} style={{
                  background: m.bg || '#2B5A27', borderRadius:16, padding:'20px 18px',
                  display:'flex', flexDirection:'column', gap:10,
                  boxShadow:'0 4px 14px rgba(26,58,58,.22)',
                }}>
                  <div>
                    <span className="br-cap" style={{
                      color:BR.gold, display:'block', marginBottom:5,
                    }}>{m.num}</span>
                    <h4 className="br-display" style={{
                      fontSize:18, lineHeight:1.1, color:'#fff', margin:0,
                    }}>{m.title}</h4>
                  </div>
                  <p className="br-body" style={{
                    fontSize:14, lineHeight:1.6,
                    color:'rgba(255,255,255,.78)', margin:0,
                  }}>{m.body}</p>
                  {m.note && (
                    <p className="br-body" style={{
                      fontSize:13, lineHeight:1.55,
                      color:'rgba(255,255,255,.55)', margin:0, fontStyle:'italic',
                    }}>{m.note}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Post speech — aligned to its corresponding phase column */}
            {scene.postSpeech && (()=>{
              const col = scene.postSpeechCol || 3;
              const pct = Math.round((col-1) / scene.methods.length * 100);
              return (
                <div className="mob-speech-indent" style={{marginLeft:`${pct}%`, marginBottom: scene.closingSpeech ? 16 : 0, ...(scene.postSpeechMaxWidth ? {maxWidth: scene.postSpeechMaxWidth} : {})}}>
                  <CharSpeech text={scene.postSpeech}/>
                </div>
              );
            })()}

            {/* Closing speech — aligned to its corresponding phase column */}
            {scene.closingSpeech && (()=>{
              const col = scene.closingSpeechCol || scene.methods.length;
              const pct = Math.round((col-1) / scene.methods.length * 100);
              return (
                <div className="mob-speech-indent" style={{marginLeft:`${pct}%`}}>
                  <CharSpeech text={scene.closingSpeech}/>
                </div>
              );
            })()}
          </>
        ) : scene.layout === 'findings' ? (
          <>
            {/* Finding bullets */}
            <div style={{display:'flex', flexDirection:'column', gap:14, marginBottom:20}}>
              {scene.bullets.map((b, i) => (
                <div key={i} style={{display:'flex', gap:14, alignItems:'flex-start'}}>
                  <div style={{
                    width:8, height:8, borderRadius:'50%',
                    background:accent, marginTop:6, flexShrink:0,
                    boxShadow:`0 0 0 3px ${accent}28`,
                  }}/>
                  <p className="br-body" style={{fontSize:15, color:BR.deep70, margin:0, lineHeight:1.65}}>{b}</p>
                </div>
              ))}
            </div>

            {/* Finding 1 + 2 above the character */}
            <div className="mob-findings-grid" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:16}}>
              {scene.topImages.map((src, i) => (
                <div key={i} style={{
                  borderRadius:10, overflow:'hidden',
                  boxShadow:'0 2px 10px rgba(26,58,58,.1)',
                  border:`1px solid ${BR.deep10}`,
                }}>
                  <img src={src} alt="" style={{width:'100%', height:'auto', display:'block'}}/>
                </div>
              ))}
            </div>

            {/* Character (left) + Finding 3 (right) side by side */}
            <div className="mob-findings-side" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, alignItems:'start'}}>
              <CharSpeech text={scene.charSpeech}/>
              <div style={{
                borderRadius:10, overflow:'hidden',
                boxShadow:'0 2px 10px rgba(26,58,58,.1)',
                border:`1px solid ${BR.deep10}`,
              }}>
                <img src={scene.sideImage} alt="" style={{width:'100%', height:'auto', display:'block'}}/>
              </div>
            </div>
          </>
        ) : scene.bullets ? (
          <div style={{display:'flex', flexDirection:'column', gap:16}}>
            <div style={{display:'flex', flexDirection:'column', gap:14}}>
              {scene.bullets.map((b, i) => (
                <div key={i} style={{display:'flex', gap:14, alignItems:'flex-start'}}>
                  <div style={{
                    width:8, height:8, borderRadius:'50%',
                    background:accent, marginTop:6, flexShrink:0,
                    boxShadow:`0 0 0 3px ${accent}28`,
                  }}/>
                  <p className="br-body" style={{fontSize:15, color:BR.deep70, margin:0, lineHeight:1.65}}>{b}</p>
                </div>
              ))}
            </div>
            {scene.charSpeech && <CharSpeech text={scene.charSpeech}/>}
          </div>
        ) : scene.body ? (
          <>
            <p className="br-body" style={{fontSize:15, color: scene.bodyBold ? BR.deep : BR.deep70, margin:0, lineHeight:1.65, ...(scene.bodyBold ? {fontWeight:700} : {})}}>{scene.body}</p>
            {scene.body2 && (
              <p className="br-body" style={{fontSize:15, color:BR.deep70, margin:'12px 0 0 0', lineHeight:1.65}}>{scene.body2}</p>
            )}
            {scene.body3 && (
              <p className="br-body" style={{fontSize:15, color:BR.deep70, margin:'12px 0 0 0', lineHeight:1.65}}>{scene.body3}</p>
            )}
          </>
        ) : (
          <>
            <p className="br-body" style={{fontSize:15, color:BR.deep50, marginBottom:14, lineHeight:1.65, fontStyle:'italic'}}>{scene.hint}</p>
            <div style={{
              height:90, borderRadius:12, overflow:'hidden',
              background:`linear-gradient(135deg, ${BR.foam} 0%, #EAF4F0 100%)`,
              border:`1.5px dashed ${BR.deep20}`,
              display:'grid', placeItems:'center',
            }}>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:6}}>
                <Icon name="eye" size={22} color={BR.deep20}/>
                <span className="br-cap" style={{color:BR.deep20}}>Evidence · Artifacts · Quotes</span>
              </div>
            </div>
          </>
        )}

        {/* Section images — works for any scene type, always at the bottom */}
        {scene.sectionImages && (
          <div style={{marginTop:24}}>
            {scene.sectionImages.title && (
              <div className="br-cap" style={{color:BR.deep50, marginBottom:12}}>
                {scene.sectionImages.title}
              </div>
            )}
            <div className="mob-section-imgs" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
              {scene.sectionImages.paths.map((src, i) => (
                <div key={i} style={{
                  borderRadius:10, overflow:'hidden',
                  boxShadow:'0 2px 12px rgba(26,58,58,.1)',
                  border:`1px solid ${BR.deep10}`,
                  ...(scene.sectionImages.cover ? {height:220} : {}),
                }}>
                  <img
                    src={src}
                    alt=""
                    style={{
                      width:'100%', display:'block',
                      ...(scene.sectionImages.cover
                        ? {height:'100%', objectFit:'cover', objectPosition: scene.sectionImages.objectPosition || 'center'}
                        : {height:'auto'}),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Character quotes — stakeholder feedback & seller clips */}
        {scene.quotes && scene.quotes.length > 0 && (
          <div style={{marginTop:24}}>
            {scene.quotesGroupLabel && (
              <div className="br-cap" style={{color:BR.deep50, marginBottom:14}}>
                {scene.quotesGroupLabel}
              </div>
            )}
            <div style={{display:'flex', flexDirection:'column', gap:16}}>
              {scene.quotes.map((q, qi) => (
                <CharQuote key={qi} src={q.char} text={q.text} label={q.label}/>
              ))}
            </div>
          </div>
        )}

        {/* CTA button — e.g. "Learn more about my quant roots" */}
        {(scene.cta || scene.ctas) && (
          <div style={{marginTop:24, display:'flex', flexWrap:'wrap', gap:10}}>
            {(scene.ctas || [scene.cta]).map((cta, i) => (
              <a key={i} className={`br-btn ${cta.variant || (i === 0 ? 'sky' : 'accent')}`} href={cta.href}
                onClick={() => {
                  if (cta.action) document.dispatchEvent(new CustomEvent(cta.action, { detail: cta.actionData }));
                  if (onClose) onClose();
                }}
                style={{textDecoration:'none', display:'inline-flex'}}>
                {cta.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Drawer (resume / contact) ────────────────────────────────────────────
function Drawer({ kind, onClose }) {
  if (!kind) return null;
  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, background:'rgba(26,58,58,.45)', zIndex:70,
      display:'grid', placeItems:'center', backdropFilter:'blur(4px)',
    }}>
      <div onClick={e=>e.stopPropagation()} className="br-slidein br-card" style={{
        width:540, maxWidth:'calc(100% - 32px)', padding:'28px 32px',
        borderRadius:20, position:'relative',
      }}>
        <button onClick={onClose} style={{
          position:'absolute', right:14, top:14, background:'transparent', border:'none', cursor:'pointer',
        }}><Icon name="x" size={20} color={BR.deep70}/></button>

        {kind==='resume' && <>
          <div className="br-tag gold" style={{marginBottom:12}}>
            <Icon name="file-text" size={12}/> Item · Scroll
          </div>
          <h2 className="br-h2" style={{fontSize:32, marginBottom:6}}>
            <Editable id="resume_h2" defaultValue="The Resume Scroll"/>
          </h2>
          <p className="br-body" style={{color:BR.deep70, marginBottom:18}}>
            <Editable id="resume_desc" multiline
              defaultValue="Picking up the scroll downloads my CV (PDF). Wire your real file once ready."/>
          </p>
          <div style={{
            display:'flex', alignItems:'center', gap:16, padding:'14px 18px',
            background:BR.foam, borderRadius:12,
          }}>
            <Icon name="file-text" size={32} color={BR.teal}/>
            <div style={{flex:1}}>
              <div className="br-h3"><Editable id="resume_file" defaultValue="resume_v8.pdf"/></div>
              <div className="br-cap">PDF · 220 KB</div>
            </div>
            <button className="br-btn primary">
              <Icon name="download" size={16}/> Download
            </button>
          </div>
        </>}

        {kind==='contact' && <>
          <div className="br-tag teal" style={{marginBottom:12}}>
            <Icon name="mail" size={12}/> Item · Mailbox
          </div>
          <h2 className="br-h2" style={{fontSize:32, marginBottom:6}}>
            <Editable id="contact_h2" defaultValue="Drop a letter."/>
          </h2>
          <p className="br-body" style={{color:BR.deep70, marginBottom:18}}>
            <Editable id="contact_desc" multiline
              defaultValue="Send me a note — I check the mailbox daily."/>
          </p>
          <div style={{display:'flex', flexDirection:'column', gap:12}}>
            <Field id="contact_from"  label="From"    placeholder="your name"/>
            <Field id="contact_email" label="Email"   placeholder="you@email.com"/>
            <Field id="contact_msg"   label="Message" placeholder="write your letter…" tall/>
            <button className="br-btn primary" style={{alignSelf:'flex-start'}}>
              <Icon name="arrow-right" size={16}/> Send letter
            </button>
          </div>
        </>}
      </div>
    </div>
  );
}

function Field({ id, label, placeholder, tall }) {
  return (
    <div>
      <div className="br-cap" style={{marginBottom:6}}>{label}</div>
      <div style={{
        border:`1.5px solid ${BR.deep20}`, borderRadius:10, padding:'10px 14px',
        background:'#fff', minHeight: tall ? 96 : 'auto',
      }}>
        <Editable id={id} defaultValue="" placeholder={placeholder}
          multiline={tall} style={{fontFamily:'Nunito', fontSize:16, color:BR.deep, display:'block', minHeight: tall?64:'auto'}}/>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{padding:'30px 0 60px', borderTop:`1px solid ${BR.deep10}`, marginTop:40}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <span className="br-body" style={{color:BR.deep50, fontSize:15, letterSpacing:'.02em'}}>
          Mai Someya{' '}
          <span style={{color:BR.deep20, margin:'0 6px'}}>/</span>
          {' '}User Experience Researcher
        </span>
      </div>
    </footer>
  );
}

// ─── Side Quests ──────────────────────────────────────────────────────────
const SIDE_QUEST_CATS = [
  {
    id:'consumer', label:'Market Research', icon:'eye',
    colorDk:'#2DAB9D',
    bg:'linear-gradient(135deg, rgba(59,191,176,.12) 0%, #F2F8F8 100%)',
    sections:[
      { title:'Overview',      hint:'Describe your consumer insights work and what makes it distinctive.' },
      { title:'Featured Work', hint:'Highlight specific projects, studies, or deliverables in this space.' },
      { title:'Methods Used',  hint:'List the research methods, tools, and frameworks you applied.' },
    ],
  },
  {
    id:'market', label:'Market Research', icon:'users', image:'images/market research.png', imgPosition:'center 20%',
    colorDk:'#56AFC1',
    bg:'linear-gradient(135deg, rgba(125,212,224,.18) 0%, #F2F8F8 100%)',
    sections:[],
    bullets:[
      'Redefined Square Invoices\' ideal customer profile by leading a qualitative research program across 20 sellers, replacing a volume-only audience definition with a complexity-based segmentation framework adopted by leadership, marketing, and sales — directly shifting campaign targeting strategy and informing pitch deck content for prospective customers.',
      'Managed end-to-end execution of Square\'s quarterly NPS program and Global Brand Tracker across 10 international markets, including survey programming, sampling, vendor coordination, analysis, and reporting to 50+ senior stakeholders including the CMO.',
      'Conducted rapid 10-day qualitative research for the CMO to diagnose abnormal acquisition patterns during COVID, analyzing 15 unmoderated interviews to surface macro and micro behavioral shifts that directly informed future marketing strategy timing.',
      'Identified a gap in insight velocity and built Square\'s Global Monthly Quantitative Research Program (n=500) from scratch — cut turnaround from 3 months to 4 weeks, scaled from US-only to 10+ international markets, adopted across 20+ teams; established panel management, survey templates, and tagging conventions that became the team\'s reusable research ops foundation.',
      'Led 50+ consumer research studies across journey mapping, segmentation, and benchmarking for Fortune 100 clients (Google, Samsung, Philips, Bank of America) — applied Discrete Choice, MaxDiff, KANO, TURF, and Segmentation to answer complex product, pricing, and positioning questions.',
    ],
  },
  {
    id:'quant', label:'Quantitative', icon:'chart-bar',
    colorDk:'#6D8A8E',
    bg:'linear-gradient(135deg, rgba(143,168,171,.22) 0%, #F2F8F8 100%)',
    sections:[],
    bullets:[
      'Designed and launched Square\'s first consolidated CSAT program spanning 38 products and 4,000+ respondents, replacing siloed per-team surveys. Program was among the first internal signals to identify churn as a company-wide risk, directly informing executive annual planning up to the CEO level.',
      'Fielded a large-scale survey (n=628) among hair salon sellers to quantify feature prioritization preferences for a calendar redesign serving 500K+ users, integrating findings with 10 moderated interviews to influence prioritization of five roadmap features and drive a 5% post-launch improvement in customer satisfaction.',
    ],
  },
  {
    id:'life', label:'Real Life Adventures', icon:'mountain', image:'images/real life adventures.jpeg', imgPosition:'center 80%',
    colorDk:'#C99E25',
    bg:'linear-gradient(135deg, rgba(245,200,66,.22) 0%, #F2F8F8 100%)',
    sections:[],
    photoRows:[
      {
        textSide:'right', imgHeight:260,
        content:[
          {t:"I love real life adventures in nature. Some highlights have been: "},
          {t:"Half Dome", tip:"16 miles"},
          {t:", "},
          {t:"Mt. Whitney", tip:"22 miles"},
          {t:", and the "},
          {t:"Inca Trail to Machu Picchu", tip:"25 miles"},
          {t:" . These days I mainly stick to smaller adventures with my partner and dog Alfie around the PNW. I've recently gotten into bikepacking (yes, that's biking + backpacking, and yes, it's as chaotic and wonderful as it sounds)."},
        ],
        images:[
          { src:'images/Half Dome.jpg',    pos:'center top' },
          { src:'images/hiking.jpeg',      pos:'center' },
          { src:'images/bikepacking.jpeg', pos:'center' },
        ],
      },
      {
        textSide:'left', imgHeight:280,
        placeholder:"Story time about a pizza adventure: one summer in 2019, my partner and I went to NYC and attempted to hit as many pizza shops in one weekend as possible in an attempt to find the best slice. We managed to hit 15 spots — at the top of the list was L'Industrie! I share this story as an example of how unhinged we are, but also as a testament to how much we love pizza (obvi) and food in general (cooking it too!).",
        images:[
          { src:'images/Pizza.jpg', pos:'center' },
          { src:'images/food.png',  pos:'center' },
        ],
      },
      {
        textSide:'right', imgHeight:260, textSize:16,
        content:[
          {t:"My favorite adventure has been adopting our son (yes, son) Alfie from "},
          {t:"PAWS", link:"https://www.paws.org/"},
          {t:". He is my adventure buddy and has joined us on countless hiking, backpacking, and camping trips. He loves chicken and barking at squirrels."},
        ],
        images:[
          { src:'images/alfie 1.jpeg', pos:'center' },
          { src:'images/alfie 2.jpeg', pos:'center' },
          { src:'images/alfie 3.jpeg', pos:'center' },
        ],
      },
    ],
  },
];

// ─── Character quote bubble (stakeholder / seller quotes) ────────────────
function CharQuote({ src, text, label }) {
  return (
    <div>
      {label && (
        <div className="br-cap" style={{color:BR.deep50, marginBottom:8}}>{label}</div>
      )}
      <div style={{display:'flex', gap:12, alignItems:'flex-start'}}>
        {/* Avatar — same gradient + border + bob as CharSpeech/Mai */}
        <div className="br-bob" style={{flexShrink:0}}>
          <div style={{
            width:60, height:74, borderRadius:12, overflow:'hidden',
            background:`linear-gradient(180deg, ${BR.sky} 0%, ${BR.meadow} 100%)`,
            display:'flex', alignItems:'flex-end', justifyContent:'center',
            boxShadow:'0 4px 14px rgba(26,58,58,.2)',
            border:'2px solid rgba(255,255,255,.5)',
          }}>
            <img src={src} draggable={false}
              style={{
                width:56, height:70,
                objectFit:'contain', objectPosition:'bottom center',
                display:'block',
              }}/>
          </div>
        </div>
        {/* Speech bubble with left-pointing tail */}
        <div style={{position:'relative', flex:1}}>
          <div style={{
            position:'absolute', left:-8, top:16,
            width:0, height:0,
            borderTop:'7px solid transparent',
            borderRight:'9px solid #fff',
            borderBottom:'7px solid transparent',
            filter:'drop-shadow(-1px 0 1px rgba(26,58,58,.06))',
          }}/>
          <div style={{
            background:'#fff', borderRadius:'2px 14px 14px 14px',
            padding:'13px 16px',
            boxShadow:'0 2px 12px rgba(26,58,58,.1), 0 1px 3px rgba(26,58,58,.06)',
          }}>
            <p className="br-body" style={{
              fontSize:14, color:BR.deep70, margin:0, fontStyle:'italic', lineHeight:1.65,
            }}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HoverTooltip({ text, label }) {
  const [visible, setVisible] = aUseState(false);
  return (
    <span style={{position:'relative', display:'inline'}}
      onMouseEnter={()=>setVisible(true)}
      onMouseLeave={()=>setVisible(false)}>
      <span style={{borderBottom:'1.5px dotted rgba(26,58,58,.35)', cursor:'default'}}>{text}</span>
      {visible && (
        <span style={{
          position:'absolute', bottom:'calc(100% + 5px)', left:'50%',
          transform:'translateX(-50%)',
          background:'rgba(26,58,58,.88)', color:'#fff',
          padding:'4px 10px', borderRadius:6,
          fontFamily:'Nunito', fontWeight:600, fontSize:12,
          whiteSpace:'nowrap', pointerEvents:'none', zIndex:10,
          boxShadow:'0 2px 8px rgba(26,58,58,.25)',
        }}>{label}</span>
      )}
    </span>
  );
}

function SideQuestPage({ category, onClose, cats, onNavigate }) {
  const scrollRef = aUseRef(null);
  aUseEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [category]);
  aUseEffect(() => {
    if (category && typeof gtag === 'function') {
      gtag('event', 'open_side_quest', { event_category: 'Portfolio', event_label: category.label });
    }
  }, [category]);
  aUseEffect(() => {
    const handler = e => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  onNavigate(prev);
      if (e.key === 'ArrowRight') onNavigate(next);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose, onNavigate, prev, next]);
  if (!category) return null;
  const idx  = cats ? cats.findIndex(c => c.id === category.id) : -1;
  const prev = cats && idx >= 0 ? cats[idx > 0 ? idx - 1 : cats.length - 1] : null;
  const next = cats && idx >= 0 ? cats[idx < cats.length - 1 ? idx + 1 : 0] : null;
  return (
    <div ref={scrollRef} style={{
      position:'fixed', inset:0, background:'rgba(26,58,58,.45)', zIndex:60,
      overflowY:'auto',
      backdropFilter:'blur(6px)',
    }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="br-slidein mob-modal-content" style={{
        background:BR.foam, margin:'40px auto', maxWidth:1200, width:'calc(100% - 32px)',
        borderRadius:24, overflow:'hidden',
        boxShadow:'0 24px 60px rgba(26,58,58,.4)',
      }}>
        <div className="mob-modal-banner" style={{
          position:'relative', padding:'28px 32px 32px',
          background: category.bg,
          borderBottom:`1px solid rgba(26,58,58,.08)`,
        }}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', position:'relative', zIndex:2}}>
            <div>
              <button className="br-btn ghost" onClick={onClose} style={{
                color:BR.deep, background:'rgba(255,255,255,.7)', padding:'8px 12px',
              }}>
                <Icon name="arrow-left" size={16}/> Back
              </button>
              <div style={{marginTop:18, display:'flex', gap:8}}>
                <span className="br-tag" style={{background:'rgba(255,255,255,.7)', color:BR.deep, borderColor:'rgba(255,255,255,.4)'}}>
                  <Icon name={category.icon} size={11}/> Side Quest
                </span>
              </div>
              <h1 className="br-h1 mob-project-title" style={{marginTop:10, color:BR.deep, fontSize:48, maxWidth:660}}>
                {category.label}
              </h1>
            </div>
            <button className="br-btn ghost" onClick={onClose} style={{padding:8, borderRadius:999}}>
              <Icon name="x" size={20}/>
            </button>
          </div>
        </div>

        <div className="mob-modal-body" style={{padding:'32px 32px 40px'}}>
          {category.id === 'life' && (
            <div style={{marginBottom:20}}>
              <CharSpeech text="Hey! If you explored this far into my portfolio. Thank you for taking the time to get to know me outside of being a researcher. Hope you enjoyed reading it, as I did making it!"/>
            </div>
          )}
          <div className="br-cap" style={{marginBottom:14, color:BR.teal}}>
            <Icon name="route" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
            Scroll to explore
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:18}}>
            {/* Category-level bullets (replaces sections for market / quant) */}
            {category.bullets && category.bullets.length > 0 && (
              <div className="br-card" style={{
                padding:'22px 24px', borderRadius:16,
                borderTop:`4px solid ${category.colorDk}`,
              }}>
                <div style={{display:'flex', flexDirection:'column', gap:14}}>
                  {category.bullets.map((b, i) => (
                    <div key={i} style={{display:'flex', gap:14, alignItems:'flex-start'}}>
                      <div style={{
                        width:8, height:8, borderRadius:'50%', flexShrink:0, marginTop:6,
                        background:category.colorDk,
                        boxShadow:`0 0 0 3px ${category.colorDk}28`,
                      }}/>
                      <p className="br-body" style={{
                        fontSize:15, color: b.startsWith('Placeholder') ? BR.deep50 : BR.deep70,
                        fontStyle: b.startsWith('Placeholder') ? 'italic' : 'normal',
                        margin:0, lineHeight:1.65,
                      }}>{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {category.sections.map((sec, i) => (
              <div key={i} className="br-card" style={{
                padding:'20px 22px', borderRadius:16,
                borderTop:`4px solid ${category.colorDk}`,
              }}>
                <span className="br-cap" style={{color:BR.deep50, display:'block', marginBottom:10}}>
                  Section {String(i+1).padStart(2,'0')}
                </span>
                <h3 className="br-display" style={{fontSize:24, lineHeight:1, marginBottom:12, color:BR.deep}}>
                  {sec.title}
                </h3>
                {sec.body ? (
                  <p className="br-body" style={{fontSize:15, color:BR.deep70}}>{sec.body}</p>
                ) : (
                  <div style={{
                    minHeight:80, padding:'16px 18px', borderRadius:10,
                    border:`2px dashed ${BR.deep20}`,
                    display:'flex', alignItems:'center',
                    color:BR.deep50, fontFamily:'Nunito', fontSize:14, fontStyle:'italic',
                  }}>
                    {sec.hint}
                  </div>
                )}
              </div>
            ))}

            {/* Photo rows — rendered for categories that have them (e.g. Real Life Adventures) */}
            {category.photoRows && category.photoRows.map((row, ri) => {

              const imgBlock = (
                <div className="mob-photo-img" style={{
                  display:'grid',
                  gridTemplateColumns:`repeat(${row.images.length}, 1fr)`,
                  gap:10,
                }}>
                  {row.images.map((img, ii) => (
                    <div key={ii} style={{
                      height:row.imgHeight, borderRadius:12, overflow:'hidden',
                      boxShadow:'0 2px 8px rgba(26,58,58,.1)',
                    }}>
                      <img
                        src={img.src}
                        alt=""
                        style={{
                          width:'100%', height:'100%',
                          objectFit:'cover',
                          objectPosition: img.pos || 'center',
                          display:'block',
                        }}
                      />
                    </div>
                  ))}
                </div>
              );
              const txtBlock = (
                <div className="br-card mob-photo-text" style={{
                  padding:'22px', borderRadius:16,
                  borderTop:`4px solid ${category.colorDk}`,
                  display:'flex', flexDirection:'column', justifyContent:'center',
                  minHeight:row.imgHeight,
                }}>
                  <p className="br-body" style={{
                    color:BR.deep70, fontStyle:'italic', margin:0, lineHeight:1.65, fontSize: row.textSize || 14,
                  }}>
                    {row.content
                      ? row.content.map((part, pi) =>
                          part.strike ? <s key={pi}>{part.t}</s>
                          : part.tip  ? <HoverTooltip key={pi} text={part.t} label={part.tip}/>
                          : part.link ? <a key={pi} href={part.link} target="_blank" rel="noopener noreferrer" style={{color:BR.teal, textDecorationColor:BR.teal, fontStyle:'normal'}}>{part.t}</a>
                          : <span key={pi}>{part.t}</span>
                        )
                      : row.placeholder
                    }
                  </p>
                </div>
              );
              return (
                <div key={`row-${ri}`} className="mob-photo-row" style={{
                  display:'grid',
                  gridTemplateColumns: row.textSide === 'right' ? '3fr 2fr' : '2fr 3fr',
                  gap:16, alignItems:'stretch',
                }}>
                  {row.textSide === 'right'
                    ? <>{imgBlock}{txtBlock}</>
                    : <>{txtBlock}{imgBlock}</>
                  }
                </div>
              );
            })}

            {next && (
              <div style={{display:'flex', justifyContent:'center', gap:12, paddingTop:8}}>
                <button className="br-btn outline mob-nav-btn" onClick={()=>onNavigate(next)} style={{
                  width:220, justifyContent:'space-between', padding:'10px 16px', borderRadius:12, flexShrink:0,
                }}>
                  <span style={{overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{next.label}</span>
                  <Icon name="arrow-right" size={15}/>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SideQuestTile({ cat, onClick }) {
  const [tilt, setTilt] = aUseState({ x:0, y:0 });
  const ref = aUseRef(null);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    setTilt({ x: x * 9, y: -y * 9 });
  };

  return (
    <div style={{perspective:'1000px'}}>
      <div ref={ref} onClick={onClick} onMouseMove={onMove}
        onMouseLeave={() => setTilt({x:0,y:0})}
        style={{
          position:'relative', height:320, borderRadius:18, overflow:'hidden',
          cursor:'pointer',
          transform:`rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition:'transform .15s ease',
          boxShadow:'0 8px 36px rgba(26,58,58,.22)',
        }}>
        <img src={cat.image} alt={cat.label} style={{
          position:'absolute', inset:0, width:'100%', height:'100%',
          objectFit:'cover', objectPosition: cat.imgPosition || 'center', display:'block',
        }}/>
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(180deg, rgba(0,0,0,.18) 0%, transparent 38%, rgba(0,0,0,.62) 100%)',
        }}/>
        <div style={{
          position:'absolute', inset:0, padding:22,
          display:'flex', flexDirection:'column', justifyContent:'space-between',
        }}>
          <span className="br-tag" style={{
            background:'rgba(255,255,255,.18)', color:'#fff',
            borderColor:'rgba(255,255,255,.35)', backdropFilter:'blur(4px)',
            width:'fit-content',
          }}>
            <Icon name={cat.icon} size={11}/> Side Quest
          </span>
          <div>
            <div className="br-display" style={{
              fontSize:26, lineHeight:1.1, marginBottom:12, color:'#fff',
              textShadow:'0 2px 10px rgba(0,0,0,.4)',
            }}>{cat.label}</div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              padding:'10px 18px', borderRadius:10,
              background:'rgba(255,255,255,.14)', backdropFilter:'blur(8px)',
              border:'1px solid rgba(255,255,255,.25)',
              color:'#fff', fontFamily:'Nunito', fontWeight:700, fontSize:14,
            }}>
              Explore <Icon name="arrow-right" size={16}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideQuests() {
  const [selected, setSelected] = aUseState(null);
  const filteredCats = SIDE_QUEST_CATS.filter(c => c.id !== 'consumer' && c.id !== 'quant');
  aUseEffect(() => {
    const handler = e => {
      const cat = SIDE_QUEST_CATS.find(c => c.id === e.detail);
      if (cat) setSelected(cat);
    };
    document.addEventListener('open-side-quest', handler);
    return () => document.removeEventListener('open-side-quest', handler);
  }, []);
  return (
    <>
      <section id="projects" className="br-fadeup" style={{padding:'12px 0 60px'}}>
        <div style={{marginBottom:18}}>
          <div className="br-cap" style={{color:BR.teal, marginBottom:6}}>
            <Icon name="leaf" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
            Side Quests
          </div>
          <h2 className="br-h2">
            Outside of{' '}
            <span className="br-display italic" style={{color:BR.teal}}>UXR</span>
          </h2>
        </div>
        <div className="mob-sq-grid" style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:20}}>
          {filteredCats.map(cat=>(
            <SideQuestTile key={cat.id} cat={cat} onClick={()=>setSelected(cat)}/>
          ))}
        </div>
      </section>
      <SideQuestPage category={selected} onClose={()=>setSelected(null)} cats={filteredCats} onNavigate={setSelected}/>
    </>
  );
}

// ─── Research Toolkits ────────────────────────────────────────────────────
const TOOLKITS = [
  { id:'qual',     accent:'#6FB370', image:'images/Qualitative.png',
    title:'Qualitative Research',
    bullets:[
      'Moderated & unmoderated interviews',
      'Journey mapping, personas and framework development',
      'Generative research: Foundational, discovery',
      'Evaluative research: Usability (RITE), concept, prototype testing',
      'Stakeholder co-creation workshops, brainstorms',
      'Secondary research synthesis: Literature and competitive reviews',
    ] },
  { id:'quant',    accent:'#56AFC1', image:'images/Quantitative.png',
    title:'Quantitative Research',
    bullets:[
      'Survey design and methodology',
      'Longitudinal tracking programs (NPS, CSAT, brand tracker)',
      'A/B testing, card sort, tree testing',
      'Behavioral and product data analysis',
      'Basic statistics & application of advanced statistics: Discrete Choice, MaxDiff, KANO, TURF, and regression, factor, and driver analysis',
    ] },
  { id:'strategy', accent:'#C99E25', image:'images/Research Strategy.png',
    title:'Research Strategy & Operations',
    bullets:[
      'Multi-phase, mixed-methods research planning from ambiguous briefs',
      'Proactive research gap identification and direct influence on product roadmap & strategy',
      'Research ops: recruitment, panel & vendor management, templates, repositories, budget',
      'Stakeholder education: coached PMs, designers, and junior researchers on study design, methodologies, analysis',
    ] },
  { id:'ai',       accent:'#3BBFB0', image:'images/AI Methods.png',
    title:'AI Methods & Product Research',
    bullets:[
      'Built and socialized AI-assisted workflows: agents for charts, survey and discussion guides',
      'Researched AI adoption and user demand',
      { pre:'Published ', linkText:'white paper on voice AI commerce adoption (2020)', url:'https://www.ipsos.com/sites/default/files/ct/publication/documents/2020-11/ipsos_cracking_the_code_for_vcomm_nov_3.pdf' },
    ] },
  { id:'domain',   accent:'#8FA8AB', image:'images/Domain.png', imagePadding:36,
    title:'Domain Expertise',
    bullets:[
      'B2B/B2B2C: Fintech, payments, and commerce',
      'Service-based business: Professional Services, Home & Repair, Health & Beauty',
      'B2C: Consumer market research (Google, Meta, Samsung, Adidas, Philips, iRobot)',
    ] },
];

function ResearchToolkits() {
  const [idx, setIdx] = aUseState(0);
  const t = TOOLKITS[idx];
  const prev = () => setIdx(i => (i - 1 + TOOLKITS.length) % TOOLKITS.length);
  const next = () => setIdx(i => (i + 1) % TOOLKITS.length);
  aUseEffect(() => {
    const handler = e => {
      setIdx(e.detail);
      setTimeout(() => {
        const el = document.getElementById('toolkits');
        if (el) el.scrollIntoView({ behavior:'smooth' });
      }, 100);
    };
    document.addEventListener('toolkit-slide', handler);
    return () => document.removeEventListener('toolkit-slide', handler);
  }, []);

  const renderBullets = () => (
    <ul style={{margin:0, padding:'0 0 0 18px', display:'flex', flexDirection:'column', gap:10}}>
      {t.bullets.map((b, i) => (
        <li key={i} className="br-body" style={{fontSize:15, color:BR.deep70, lineHeight:1.65}}>
          {typeof b === 'string' ? b : (
            <>
              {b.pre}
              <a href={b.url} target="_blank" rel="noopener noreferrer"
                style={{color:BR.teal, textDecoration:'underline', textUnderlineOffset:'2px'}}>
                {b.linkText}
              </a>
              {b.post || ''}
            </>
          )}
        </li>
      ))}
    </ul>
  );

  const Nav = () => (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:14, marginTop:28}}>
      <button className="br-btn outline" onClick={prev}
        style={{width:44, height:44, padding:0, borderRadius:999, display:'grid', placeItems:'center', flexShrink:0}}>
        <Icon name="arrow-left" size={18}/>
      </button>
      <div style={{display:'flex', gap:8, alignItems:'center'}}>
        {TOOLKITS.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            width: i === idx ? 24 : 8, height:8,
            borderRadius:999, border:'none', cursor:'pointer', padding:0,
            background: i === idx ? BR.teal : BR.deep20,
            transition:'all .3s ease',
          }}/>
        ))}
      </div>
      <button className="br-btn outline" onClick={next}
        style={{width:44, height:44, padding:0, borderRadius:999, display:'grid', placeItems:'center', flexShrink:0}}>
        <Icon name="arrow-right" size={18}/>
      </button>
    </div>
  );

  return (
    <section id="toolkits" className="br-fadeup" style={{padding:'12px 0 60px'}}>
      <div style={{marginBottom:28}}>
        <div className="br-cap" style={{color:BR.teal, marginBottom:6}}>
          <Icon name="hammer" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
          Research Toolkit
        </div>
        <h2 className="br-h2">
          The methods{' '}
          <span className="br-display italic" style={{color:BR.teal}}>behind the work.</span>
        </h2>
      </div>

      {/* ── Desktop: image left + overlapping card right ── */}
      <div className="tk-desktop" style={{display:'flex', alignItems:'center', position:'relative'}}>
        <div style={{
          width:420, height:420, borderRadius:24, overflow:'hidden', flexShrink:0,
          background:'#edf7f5', boxShadow:'0 4px 24px rgba(26,58,58,.14)',
          display:'flex', alignItems:'center', justifyContent:'center',
          padding: t.imagePadding || 0,
        }}>
          <img key={idx} src={t.image} alt={t.title} className="tk-fade"
            style={{width:'100%', height:'100%', objectFit:'contain', objectPosition:'center', display:'block'}}/>
        </div>
        <div key={`d${idx}`} className="br-card tk-fade" style={{
          marginLeft:-80, zIndex:1, flex:1,
          padding:'32px 32px 28px',
          borderTop:`4px solid ${t.accent}`,
          borderRadius:20,
          boxShadow:'0 8px 40px rgba(26,58,58,.14)',
        }}>
          <div style={{marginBottom:20}}>
            <h3 className="br-display" style={{margin:0, color:BR.deep, fontSize:26, lineHeight:1.1}}>{t.title}</h3>
          </div>
          {renderBullets()}
        </div>
      </div>

      {/* ── Mobile: image top + card below ── */}
      <div className="tk-mobile" style={{display:'none'}}>
        <div style={{borderRadius:20, overflow:'hidden', marginBottom:16, background:BR.deep10, aspectRatio:'4/3'}}>
          <img key={`mi${idx}`} src={t.image} alt={t.title} className="tk-fade"
            style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block'}}/>
        </div>
        <div key={`mc${idx}`} className="br-card tk-fade" style={{
          padding:'22px 20px',
          borderTop:`4px solid ${t.accent}`,
          borderRadius:16,
        }}>
          <div style={{marginBottom:16}}>
            <h3 className="br-display" style={{margin:0, color:BR.deep, fontSize:22, lineHeight:1.1}}>{t.title}</h3>
          </div>
          {renderBullets()}
        </div>
      </div>

      <Nav/>
    </section>
  );
}

// ─── App root ─────────────────────────────────────────────────────────────
function AdventureApp() {
  const [drawer, setDrawer] = aUseState(null);
  const [quest, setQuest]   = aUseState(null);
  aUseEffect(() => {
    const handler = e => {
      const proj = PROJECTS.find(p => p.id === e.detail);
      if (proj) setQuest(proj);
    };
    document.addEventListener('open-project', handler);
    return () => document.removeEventListener('open-project', handler);
  }, []);

  return (
    <div className="br-root" style={{minHeight:'100vh'}}>
      <div className="mob-root-wrap" style={{maxWidth:1200, margin:'0 auto', padding:'0 24px 60px'}}>
        <Nav onOpen={setDrawer}/>
        <Hero/>
        <Testimonials/>
        <IslandMap onOpen={setQuest}/>
        <SideQuests/>
        <ResearchToolkits/>
        <Footer/>
      </div>
      <Drawer kind={drawer} onClose={()=>setDrawer(null)}/>
      <QuestPage project={quest} onClose={()=>setQuest(null)} onNavigate={setQuest}/>
    </div>
  );
}

// ─── Mount ────────────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(<AdventureApp/>);

