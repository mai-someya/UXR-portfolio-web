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
      { name:'Intro', icon:'telescope',
        body:'Sellers were using third-party tools to fill gaps for jobs that Square already supports. The team needed a more comprehensive and cohesive suite of tools, but didn\'t know what to prioritize or how to execute.' },
      { name:'Objective', icon:'flag',
        body:'Define how service-based businesses adopt tools across their workflow, identify the jobs those tools are hired to do, and determine where Square has the strongest opportunity to close the gap — so the team could prioritize the product roadmap with confidence rather than assumption.' },
      { name:'Approach', icon:'tools',
        layout:'approach',
        intro:'Foundational research requires rigor. I designed a multi-method approach to ensure comprehensive coverage before drawing conclusions.',
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
        },
      },
      { name:'Findings', icon:'bulb',
        layout:'findings',
        bullets:[
          'Tools are hired in acute moments, not planned in advance. Sellers adopt tools reactively at each growth stage — payments and websites at launch, lead management and scheduling as they scale.',
          '"Grow Customer" jobs-to-be-done are the highest-pain, lowest-cohesion part of the workflow. Sellers cobble together scheduling, CRM, and communications tools to manage leads — and only recognize the fragmentation once they\'re already scaling.',
        ],
        topImages:['images/finding 1- services tool adoption.png','images/finding 2- services tool adoption.png'],
        sideImage:'images/finding 3- services tool adoption.png',
        charSpeech:'Qualitative findings alone weren\'t enough to convey pain. I pulled in product satisfaction metrics to make it harder to deprioritize this learning.',
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
  { id:'beach',    tag:'Generative + Evaluative Research', icon:'anchor',
    title:'Recurring Revenue Products',
    subtitle:'Defined product strategy',
    timeline:'4 weeks',
    method:'AI-assisted market sizing · interviews · rapid prototype testing',
    highlight:'Ambiguous Brief, AI Workflow',
    color: BR.sky, colorDk:'#56AFC1',
    pos:{ x:51, y:25 },
    bg:'linear-gradient(180deg, #BFE9EE 0%, #F2E2BD 100%)',
    scenes:[
      { name:'Intro', icon:'telescope',
        body:'Enabling sellers to grow their recurring revenue was a net new strategic pillar for the Services team. Square had X feature with low adoption. The hypothesis: its language and structure skewed too retail for service sellers. But the real question was bigger: is X even the right model, or is the opportunity in Y?' },
      { name:'Objective', icon:'flag',
        body:'The goal was to determine what to anchor the product strategy on: X, Y or something else. Y was the leading hypothesis, but without knowing where X and Y structurally overlapped, and understanding the opportunity size, the team didn\'t know what or how to build.' },
      { name:'Approach', icon:'tools',
        layout:'approach',
        intro:'The original ask was big: a foundational discovery AND market sizing but we had no time to do both rigorously. I pushed back — we agreed to deprioritize market sizing and focus on qualitative discovery. The website audit changed that. It gave us a starting point for the discussion guide and revealed that market sizing was answerable without a full quant study.',
        preSpeech:'It was an ambiguous ask so I started with what we knew & had access to: existing research and business websites to answer what we could before interviews and to inform the discussion guide.',
        methods:[
          { num:'1/', title:'Website Audit', body:'Reviewed 20 websites to confirm language differences across 3 industries before committing to a larger sizing exercise.' },
          { num:'2/', title:'Sizing',        body:'Computational Web Scraping (1,000+ sites, AI-assisted): used AI to generate Python and R scripts to quantify language as a market-sizing proxy.' },
          { num:'3/', title:'Interviews',   body:'Qualitative Interviews (n=13): used to understand workflows, pain points, and JsTBD — info not on websites or past research.' },
          { num:'4/', title:'Hack Week',    body:'I identified an opportunity to test a subscription upsell at checkout (web), a direct lever for the recurring strategy. I ran rapid prototype testing (n=12) in parallel without disrupting the core research program.' },
          { num:'5/', title:'Deliverable',  body:'A topline one-pager with design principles. The PM and designer aligned on the strategic direction and began sequencing the build.' },
        ],
        postSpeech:'The website audit confirmed meaningful differences by audience and inspired me to attempt a market sizing exercise, which was originally out of scope.',
        postSpeechCol:2,
        closingSpeech:'Project closed due to layoff before the broader share-out.',
        closingSpeechCol:5,
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
  { id:'mountain', tag:'Generative + Evaluative Research', icon:'mountain',
    title:'P2P Payment Integration',
    subtitle:'Informed design + product strategy',
    timeline:'6 weeks',
    method:'Moderated interviews · discrete choice · unmoderated usability',
    highlight:'Executive Visibility, Engineer Constraints',
    color:'#D9E3E5', colorDk:'#8FA8AB',
    pos:{ x:39, y:78 },
    bg:'linear-gradient(180deg, #C5D5D8 0%, #8FA8AB 100%)',
    scenes:[
      { name:'Intro', icon:'telescope',
        body:'Square\'s core business is card processing, but an estimated $XB annually was flowing off-platform through [X], and sellers had been asking for a native integration for years. The opportunity was real, but so was the tension: the integration needed to deliver business value without cannibalizing card revenue.',
        body2:'Two levers were on the table: a transaction fee and a Square Checking requirement. Engineering constraints meant the Alpha couldn\'t support auto-reconciliation. The team suspected all three would muddy the Alpha signal — making it impossible to tell whether low adoption meant the product didn\'t work, or just that the friction did. A successful Alpha would unlock expansion beyond Invoices into higher-volume surfaces like in-person checkout.',
      },
      { name:'Objective', icon:'flag',
        body:'Validate adoption potential for a native [X] integration and optimize the Alpha designs to reflect real user expectations — even where business and engineering constraints limited what was possible.',
      },
      { name:'Approach', icon:'tools',
        layout:'approach',
        intro:'I structured the research to pressure-test the assumptions and friction points most likely to distort the Alpha signal, so any drop-off would reflect real demand — not bad UX.',
        bullets:[
          'I brought in a quant UXR to run a discrete choice and a rapid researcher for the buyer usability test to stay within the timeline without sacrificing depth.',
          'I included buyer research to gauge comprehension of the multi-step payment flow, ensuring B2C signal wasn\'t crowded out by the seller workstreams.',
          'I chose a moderated interview for the seller flow because it had constraints that needed explaining, required deep probing, and needed discovery questions to capture off-platform [X] behaviors and mental models.',
          'Delivered as a shareable document — anticipated to be broadly shared across the org, presented to executive and director-level stakeholders, and cited in a company-wide strategy presentation.',
        ],
        methods:[
          { num:'1/', title:'Seller Experience',
            body:'n=9 moderated interviews with Square Invoices sellers who currently use [X] · 60-min sessions including prototype test · 4 weeks' },
          { num:'2/', title:'Pricing Survey',
            body:'n=1,000 · Discrete Choice · 3 concepts across 3 pricing structures · 4 weeks' },
          { num:'3/', title:'Buyer Experience',
            body:'n=8 buyers who use [X] and have paid with a Square invoice · Unmoderated usability test via UserTesting · 1 week' },
        ],
      },
      { name:'Findings', icon:'bulb',
        bullets:[
          'A fee kills the value proposition: sellers view [X]\'s no-fee model as its core benefit. Introducing a charge doesn\'t reduce adoption — it eliminates it.',
          'Auto-reconciliation isn\'t a nice-to-have — it\'s a table stake. Sellers expect [X] in Square to behave like every other payment method: funds land automatically, invoice status updates instantly. Manual reconciliation made the integration feel less reliable than using [X] directly.',
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
          text:"Working with Mai on the X Alpha research project has been a genuine pleasure. She is an incredibly talented and dedicated research partner, and I've enjoyed collaborating and learning from her... The key findings she delivered were instrumental in shaping the Alpha and continue to be referenced and shared with cross-functional partners almost weekly. Mai also played a key role in refining the initial end-to-end flows for the X MVP. Even with significant implementation constraints, she used seller insights to surface flaws in the proposed MVP experience, which ultimately secured buy-in and guided the team toward a much stronger MVP direction.",
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
      { name:'Intro', icon:'telescope',
        body:'Voice AI had momentum at Square — multiple teams, including mine, were building, scoping, and investing in new features independently. The problem: no one had asked sellers what they actually needed, or whether voice AI fit into their workflow at all. Teams were aligning around features before understanding where they\'d have the strongest impact and adoption.',
      },
      { name:'Objective', icon:'flag',
        body:'Identify if, and where, voice AI fit in user workflows across the use cases teams were already exploring.',
      },
      { name:'Approach', icon:'tools',
        body:'A qualitative approach would have generated hypotheses. I needed evidence, fast. Teams were already mid-build — waiting on a larger study wasn\'t an option.',
        body2:'I chose a quick-turn quantitative survey (n=400 across 4 industries) because the findings had to be both timely and defensible. The industries mapped directly to Square\'s product structure so findings landed with each stakeholder.',
        body3:'Shared as a deck and recording to accommodate holiday timing. Supplemented with individual readouts for teams with immediate decisions to make.',
      },
      { name:'Findings', icon:'bulb',
        bullets:[
          'Receptivity to voice AI is context-dependent. Sellers factor in environment (background noise, privacy, comfort speaking aloud) and error cost — how much damage a wrong response could do — before they\'d consider it useful.',
          'Sellers were most open to voice AI on routine, repetitive tasks. Comfort with complex or high-stakes tasks was low. Routine use cases aren\'t the ceiling — they\'re the bridge to broader adoption, which teams had been skipping over.',
        ],
        charSpeech:'For teams where findings contradicted their direction, I shared learnings early with triangulated evidence from prior research and added seller clips to help stakeholders deeply understand seller needs. This led to any pushback being resolved before the final report was shared.',
      },
      { name:'Impact', icon:'rocket',
        bullets:[
          '3 different product teams scoped down or removed voice AI from their product roadmap based on findings.',
          'Direct team saved an estimated ½ to 1 quarter of misallocated resources.',
          'Cited in, and strengthened, a company-wide AI framework.',
        ],
        quotes:[{
          char:'images/queen.png',
          label:'Manager (Annual Review Feedback)',
          text:"You showed good instincts for where research was or wasn't needed, including flagging a need for Voice AI research. Your openness to broadening the scope and lens of that research helped it become a valuable input to decisions being made across Square ([redacted], inventory, etc.), not just their direct team.",
        }],
      },
    ],
  },
];

const STRENGTHS = [
  { label: 'Product Strategist',
    evidence: 'I translate research into decisions that stick — challenging pricing assumptions, redirecting roadmaps, and reframing engineering constraints as launch risks before teams build in the wrong direction.' },
  { label: 'Mixed Methods',
    evidence: 'I match method to question across the full spectrum, from behavioral data analysis and large-scale surveys to moderated prototype testing and foundational frameworks, with equal fluency in qual and quant.'},
  { label: 'AI-Powered Researcher',
    evidence: 'I build what I need. From automated charting tools to SQL recruitment queries to R and Python scraping scripts (and yes, this site too), I use AI to move faster so more time goes toward the thinking that actually requires a human.' },
];

const TAGLINE_DEFAULT = `Pick a destination and see what I've accomplished'.`;

// ─── Top Nav ──────────────────────────────────────────────────────────────
function Nav({ onOpen }) {
  return (
    <header style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'14px 0', position:'relative', zIndex:5,
    }}>
      <nav style={{display:'flex', gap:4, alignItems:'center', marginLeft:'auto'}}>
        <a className="br-btn outline" href="#map" style={{fontSize:13, padding:'7px 13px'}}>
          <Icon name="map" size={14}/> Projects
        </a>
        <a className="br-btn outline" href="#projects" style={{fontSize:13, padding:'7px 13px'}}>
          <Icon name="compass" size={14}/> Side Quests
        </a>
        <a className="br-btn outline" href="#toolkits" style={{fontSize:13, padding:'7px 13px'}}>
          <Icon name="tools" size={14}/> Toolkits
        </a>
        <a className="br-btn outline" href="https://www.linkedin.com/in/mai-someya/" target="_blank" rel="noopener noreferrer" style={{fontSize:13, padding:'7px 13px'}}>
          <Icon name="linkedin" size={14}/> LinkedIn
        </a>
        <a className="br-btn primary" href="https://drive.google.com/file/d/1FI5s8yIk56g6DIPGYpn6A01yYOdvoXWb/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{fontSize:13, padding:'7px 13px'}}>
          <Icon name="file-text" size={14}/> Resume
        </a>
      </nav>
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
      <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:48, alignItems:'center'}}>

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
              I'm a mixed-methods UX researcher with 8 years across both market research and UX research, bringing a dual lens most researchers don't have: the strategic range to shape business and GTM decisions, and the depth to uncover the behaviors and friction points that drive product design.
            </p>
            <p className="br-body" style={{color:BR.deep70, margin:0}}>
              From identifying research gaps to building artifacts that outlast the project, I have a proven track record driving product and roadmap decisions across fintech and consumer products at global scale.
            </p>
            <p className="br-body" style={{color:BR.deep70, margin:0}}>
              At my core, I'm a learner — endlessly curious and always pushing the edges of what I know. I built this portfolio using Claude Code, VS Code, HTML, and JavaScript, having never coded before, because that's the same mindset I bring to every role: embrace the unfamiliar, try new tools, and figure it out.
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
                  onClick={()=>setActiveS(activeS===i?null:i)}>
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
                <div className="br-cap" style={{color:'#A07820', marginBottom:6}}>Evidence</div>
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
    <div style={{
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
      <div className="br-card" style={{
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
                defaultValue="Welcome, traveler! Four paths lie ahead — each a project. Hover any to glimpse what's along the road. Click to walk it and read the full tale."/>
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
          You might know Square from the little white card reader at your favorite coffee shop — but it's actually a suite of 38+ hardware and software products helping small businesses run and grow across dozens of industries.
        </div>
        <div className="br-body" style={{fontSize:13.5, color:BR.deep70, lineHeight:1.65, marginTop:10}}>
          I was embedded as the lead researcher on the Services team, partnering closely with product, design, engineering, and data science to support service-based businesses. Think salons, accountants, and lawn care companies. My focus was on three flagship products: Square Appointments, Invoices, and Virtual Terminal, across web, desktop, and hardware surfaces.
        </div>
      </div>
    </div>
  );
}

// ─── Island Map ───────────────────────────────────────────────────────────
function IslandMap({ onOpen }) {
  const [hovered, setHovered] = aUseState(null);
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
  ];

  return (
    <section id="map" className="br-fadeup" style={{padding:'24px 0 40px'}}>
      <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:18}}>
        <div>
          <div className="br-cap" style={{color:BR.teal, marginBottom:6}}>
            <Icon name="map" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
            The Map
          </div>
          <h2 className="br-h2">
            Pick a destination,{' '}
            <span className="br-display italic" style={{color:BR.teal}}>
              see what I built there.
            </span>
          </h2>
        </div>
        <div className="br-cap" style={{color:BR.deep50}}>
          <Icon name="mood-happy" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
          Hover any zone · Click for details
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'300px 1fr', gap:20, alignItems:'stretch'}}>
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
                onMouseEnter={() => setHovered(z.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onOpen(proj)}
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
            <Sprite src={window.__resources.alfieFront} width={44} height={76} walking={!!hovered}/>
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
            <Sprite src={window.__resources.maiFront} width={56} height={98} walking={!!hovered}/>
          </div>

          {/* ── Hover popup ── */}
          {hovered && <HoverPopover project={PROJECTS.find(p => p.id === hovered)}/>}

        </div>
      </div>
      </div>
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
            <Icon name="map-pin" size={11} color={BR.deep}/> {project.tag}
          </span>
        </div>
        <div className="br-h3" style={{fontSize:18, marginBottom:4}}>{project.title}</div>
        <div className="br-body" style={{fontSize:14, color:BR.deep70, marginBottom:10}}>
          {project.subtitle}
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:4, fontSize:13}}>
          <Row icon="eye"    label="Timeline"   value={project.timeline}/>
          <Row icon="tools"  label="Method" value={project.method}/>
          <Row icon="flag"   label="Highlight" value={project.highlight}/>
        </div>
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
function QuestPage({ project, onClose }) {
  if (!project) return null;
  const DEFAULT_SCENES = [
    { name:'Intro',      icon:'telescope', hint:'Overview and background of the project.' },
    { name:'Objective',  icon:'flag',      hint:'The business question and research goals we were trying to answer.' },
    { name:'Approach',   icon:'tools',     hint:'Study design · participants · timeline · my role.' },
    { name:'Findings',   icon:'bulb',      hint:'Top insights with supporting data, quotes, and clips.' },
    { name:'Impact',     icon:'rocket',    hint:'Shipped decisions, downstream artifacts, and measurable outcomes.' },
    { name:'Reflection', icon:'book',      hint:'What I\'d do differently next time + key learnings.' },
  ];
  const SCENES = project.scenes || DEFAULT_SCENES;
  return (
    <div style={{
      position:'fixed', inset:0, background:'rgba(26,58,58,.45)', zIndex:60,
      overflowY:'auto',
      backdropFilter:'blur(6px)',
    }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="br-slidein" style={{
        background:BR.foam, margin:'40px auto', maxWidth:1200, width:'calc(100% - 32px)',
        borderRadius:24, overflow:'hidden',
        boxShadow:'0 24px 60px rgba(26,58,58,.4)',
      }}>
        {/* Banner */}
        <div style={{
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
                return (
                  <div style={{marginTop:18, display:'flex', gap:6, flexWrap:'nowrap', alignItems:'center'}}>
                    {pill(project.tag, 'rgba(59,191,176,.2)', '#0F5E55', 'rgba(59,191,176,.4)')}
                    {methods.map(m =>
                      pill(m, 'rgba(245,200,66,.28)', '#6A4E00', 'rgba(245,200,66,.55)')
                    )}
                    {project.timeline && pill(project.timeline, 'rgba(125,212,224,.25)', '#1A5A6A', 'rgba(125,212,224,.45)')}
                  </div>
                );
              })()}
              <h1 className="br-h1" style={{marginTop:10, color:BR.deep, fontSize:48, maxWidth:660}}>
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

          <div style={{position:'absolute', bottom:-4, right:48, filter:'drop-shadow(0 6px 0 rgba(26,58,58,.18))'}}>
            <Sprite src={window.__resources.maiSide} width={120} height={220}/>
          </div>
          <svg style={{position:'absolute', left:0, bottom:24, width:'100%', height:40}} preserveAspectRatio="none" viewBox="0 0 1200 40">
            <path d="M0 30 Q 300 10 600 28 T 1200 24" stroke={BR.deep} strokeWidth="2.5" strokeDasharray="6 8" fill="none" opacity=".4"/>
          </svg>
        </div>

        <div style={{padding:'32px 32px 40px'}}>
          <div className="br-cap" style={{marginBottom:14, color:BR.teal}}>
            <Icon name="route" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
            Walk the path · scroll to explore
          </div>
          <div style={{
            display:'flex', flexDirection:'column', gap:18,
          }}>
            {SCENES.map((sc,i)=>(
              <SceneCard key={sc.name} idx={i} scene={sc} pid={project.id} accent={project.colorDk}/>
            ))}
            <div style={{display:'grid', placeItems:'center', padding:'16px 0'}}>
              <Icon name="flag" size={32} color={BR.teal}/>
            </div>
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

function SceneCard({ idx, scene, pid, accent }) {
  const hasContent = scene.body || scene.bullets || scene.layout;
  return (
    <div style={{
      borderRadius:16, overflow:'hidden',
      boxShadow:'0 2px 8px rgba(26,58,58,.07), 0 0 0 1px rgba(26,58,58,.06)',
    }}>
      {/* Quest chapter header */}
      <div style={{
        padding:'16px 22px 14px',
        background:`linear-gradient(135deg, ${accent}22 0%, rgba(242,248,248,0) 60%)`,
        borderBottom:`1px solid rgba(26,58,58,.07)`,
        display:'flex', alignItems:'center', gap:16,
        background:'#fff',
      }}>
        <div style={{
          width:46, height:46, borderRadius:14, flexShrink:0,
          background:accent,
          display:'grid', placeItems:'center',
          boxShadow:`0 4px 12px ${accent}55`,
        }}>
          <Icon name={scene.icon} size={22} color="#fff" stroke={1.8}/>
        </div>
        <div>
          <div className="br-cap" style={{color:BR.deep50, marginBottom:3}}>
            Chapter {String(idx+1).padStart(2,'0')}
          </div>
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

            {/* Optional pre-speech (left-anchored, stops ~halfway) */}
            {scene.preSpeech && (
              <div style={{maxWidth:'55%', marginBottom:20}}>
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
            <div style={{
              display:'grid',
              gridTemplateColumns:`repeat(${scene.methods.length}, 1fr)`,
              gap:12, marginBottom:20,
            }}>
              {scene.methods.map((m, i) => (
                <div key={i} style={{
                  background:'#2B5A27', borderRadius:16, padding:'20px 18px',
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
                </div>
              ))}
            </div>

            {/* Post speech — aligned to its corresponding phase column */}
            {scene.postSpeech && (()=>{
              const col = scene.postSpeechCol || 3;
              const pct = Math.round((col-1) / scene.methods.length * 100);
              return (
                <div style={{marginLeft:`${pct}%`, marginBottom: scene.closingSpeech ? 16 : 0}}>
                  <CharSpeech text={scene.postSpeech}/>
                </div>
              );
            })()}

            {/* Closing speech — aligned to its corresponding phase column */}
            {scene.closingSpeech && (()=>{
              const col = scene.closingSpeechCol || scene.methods.length;
              const pct = Math.round((col-1) / scene.methods.length * 100);
              return (
                <div style={{marginLeft:`${pct}%`}}>
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
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:16}}>
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
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, alignItems:'start'}}>
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
            <p className="br-body" style={{fontSize:15, color:BR.deep70, margin:0, lineHeight:1.65}}>{scene.body}</p>
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
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
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
                        ? {height:'100%', objectFit:'cover', objectPosition:'center'}
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
    id:'consumer', label:'Consumer Insights', icon:'eye',
    colorDk:'#2DAB9D',
    bg:'linear-gradient(135deg, rgba(59,191,176,.12) 0%, #F2F8F8 100%)',
    sections:[
      { title:'Overview',      hint:'Describe your consumer insights work and what makes it distinctive.' },
      { title:'Featured Work', hint:'Highlight specific projects, studies, or deliverables in this space.' },
      { title:'Methods Used',  hint:'List the research methods, tools, and frameworks you applied.' },
    ],
  },
  {
    id:'market', label:'Market Research', icon:'telescope',
    colorDk:'#56AFC1',
    bg:'linear-gradient(135deg, rgba(125,212,224,.18) 0%, #F2F8F8 100%)',
    sections:[
      { title:'Overview',      hint:'Describe your market research experience and scope.' },
      { title:'Featured Work', hint:'Highlight specific projects, reports, or deliverables.' },
      { title:'Methods Used',  hint:'List the methods, tools, and data sources you used.' },
    ],
  },
  {
    id:'quant', label:'Quantitative', icon:'tools',
    colorDk:'#6D8A8E',
    bg:'linear-gradient(135deg, rgba(143,168,171,.22) 0%, #F2F8F8 100%)',
    sections:[
      { title:'Overview',      hint:'Describe your quantitative research experience.' },
      { title:'Featured Work', hint:'Highlight specific analyses, surveys, or studies.' },
      { title:'Methods Used',  hint:'List the statistical methods and tools you use.' },
    ],
  },
  {
    id:'life', label:'Real Life Adventures', icon:'mountain',
    colorDk:'#C99E25',
    bg:'linear-gradient(135deg, rgba(245,200,66,.22) 0%, #F2F8F8 100%)',
    sections:[],
    photoRows:[
      {
        textSide:'right', imgHeight:260,
        content:[
          {t:"This probably isn't a surprise, but as someone who lives in the PNW, I love "},
          {t:"walking a lot in", strike:true},
          {t:" nature. I've chilled out a bit since hiking "},
          {t:"Half Dome", tip:"16 miles"},
          {t:", "},
          {t:"Mt. Whitney", tip:"22 miles"},
          {t:", and the "},
          {t:"Inca Trail to Machu Picchu", tip:"25 miles"},
          {t:" and mainly stick to smaller adventures with my partner and dog Alfie around the PNW. In an attempt to give my knees a break, I've recently gotten into bikepacking (yes, that's biking + backpacking, and yes, it's as chaotic and wonderful as it sounds)."},
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
        placeholder:"My favorite adventure has been adopting our son (yes, son) Alfie from PAWS. He is my adventure buddy and has joined us on countless hiking, backpacking, and camping trips. He loves eating chicken and barking at squirrels.",
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

function SideQuestPage({ category, onClose }) {
  if (!category) return null;
  return (
    <div style={{
      position:'fixed', inset:0, background:'rgba(26,58,58,.45)', zIndex:60,
      overflowY:'auto',
      backdropFilter:'blur(6px)',
    }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="br-slidein" style={{
        background:BR.foam, margin:'40px auto', maxWidth:1200, width:'calc(100% - 32px)',
        borderRadius:24, overflow:'hidden',
        boxShadow:'0 24px 60px rgba(26,58,58,.4)',
      }}>
        <div style={{
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
              <h1 className="br-h1" style={{marginTop:10, color:BR.deep, fontSize:48, maxWidth:660}}>
                {category.label}
              </h1>
            </div>
            <button className="br-btn ghost" onClick={onClose} style={{padding:8, borderRadius:999}}>
              <Icon name="x" size={20}/>
            </button>
          </div>
        </div>

        <div style={{padding:'32px 32px 40px'}}>
          <div className="br-cap" style={{marginBottom:14, color:BR.teal}}>
            <Icon name="route" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
            Scroll to explore
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:18}}>
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
                <div style={{
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
                <div className="br-card" style={{
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
                          : <span key={pi}>{part.t}</span>
                        )
                      : row.placeholder
                    }
                  </p>
                </div>
              );
              return (
                <div key={`row-${ri}`} style={{
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
          </div>
        </div>
      </div>
    </div>
  );
}

function SideQuests() {
  const [selected, setSelected] = aUseState(null);
  return (
    <>
      <section id="projects" className="br-fadeup" style={{padding:'12px 0 60px'}}>
        <div style={{marginBottom:18}}>
          <div className="br-cap" style={{color:BR.teal, marginBottom:6}}>
            <Icon name="leaf" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
            Side Quests
          </div>
          <h2 className="br-h2">
            Life{' '}
            <span className="br-display italic" style={{color:BR.teal}}>beyond the brief.</span>
          </h2>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20}}>
          {SIDE_QUEST_CATS.filter(c => c.id !== 'market').map(cat=>(
            <button key={cat.id} onClick={()=>setSelected(cat)} className="br-card hover" style={{
              textAlign:'left', padding:0, overflow:'hidden', cursor:'pointer',
              border:'none', borderRadius:18,
            }}>
              <div style={{
                height:100, background:cat.bg,
                display:'flex', alignItems:'center', justifyContent:'space-between',
                padding:'0 22px',
                borderBottom:`2px solid rgba(26,58,58,.06)`,
              }}>
                <span className="br-tag" style={{
                  background:'rgba(255,255,255,.75)', color:BR.deep, borderColor:'rgba(255,255,255,.5)',
                }}>
                  <Icon name={cat.icon} size={11}/> Side Quest
                </span>
                <div style={{
                  width:60, height:60, borderRadius:'50%',
                  background:'rgba(255,255,255,.65)', display:'grid', placeItems:'center',
                }}>
                  <Icon name={cat.icon} size={28} color={cat.colorDk} stroke={1.8}/>
                </div>
              </div>
              <div style={{padding:'20px 22px'}}>
                <div className="br-display" style={{fontSize:24, lineHeight:1.15, marginBottom:8, color:BR.deep}}>
                  {cat.label}
                </div>
                <div style={{display:'flex', alignItems:'center', gap:8,
                  color:BR.teal, fontFamily:'Nunito', fontWeight:700, fontSize:14}}>
                  Explore <Icon name="arrow-right" size={16}/>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      <SideQuestPage category={selected} onClose={()=>setSelected(null)}/>
    </>
  );
}

// ─── Research Toolkits ────────────────────────────────────────────────────
const TOOLKITS = [
  { id:'qual',     span:3, accent:'#6FB370', title:'Qualitative Research',
    bullets:[
      'Moderated & unmoderated interviews',
      'Journey mapping, personas and framework development',
      'Generative research: Foundational, discovery',
      'Evaluative research: Usability (RITE), concept, prototype testing',
      'Stakeholder co-creation workshops, brainstorms',
      'Secondary research synthesis: Literature and competitive reviews',
    ] },
  { id:'quant',    span:3, accent:'#56AFC1', title:'Quantitative Research',
    bullets:[
      'Survey design and methodology',
      'Longitudinal tracking programs (NPS, CSAT, brand tracker)',
      'A/B testing, card sort, tree testing',
      'Behavioral and product data analysis',
      'Basic statistics & application of advanced statistics: Discrete Choice, MaxDiff, KANO, TURF, segmentation',
    ] },
  { id:'strategy', span:2, accent:'#C99E25', title:'Research Strategy & Operations',
    bullets:[
      'Multi-phase, mixed-methods research planning from ambiguous briefs',
      'Proactive research gap identification and direct influence on product roadmap & strategy',
      'Research ops: recruitment, panel & vendor management, templates, repositories, budget',
      'Stakeholder education: coached PMs, designers, and junior researchers on study design, methodologies, analysis',
    ] },
  { id:'ai',       span:2, accent:'#3BBFB0', title:'AI Methods & Product Research',
    bullets:[
      'Built and socialized AI-assisted workflows: agents for charts, survey and discussion guides',
      'Researched AI adoption and user demand',
      'Published white paper on voice AI commerce adoption (2020)',
    ] },
  { id:'domain',   span:2, accent:'#8FA8AB', title:'Domain Expertise',
    bullets:[
      'B2B/B2B2C: Fintech, payments, and commerce',
      'Service-based business: Professional Services, Home & Repair, Health & Beauty',
      'B2C: Consumer market research (Google, Meta, Samsung, Adidas, Philips, iRobot)',
    ] },
];

function ResearchToolkits() {
  return (
    <section id="toolkits" className="br-fadeup" style={{padding:'12px 0 60px'}}>
      <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:18}}>
        <div>
          <div className="br-cap" style={{color:BR.teal, marginBottom:6}}>
            <Icon name="tools" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
            Research Toolkits
          </div>
          <h2 className="br-h2">
            The methods{' '}
            <span className="br-display italic" style={{color:BR.teal}}>behind the work.</span>
          </h2>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:20}}>
        {TOOLKITS.map(t => (
          <div key={t.id} className="br-card" style={{
            padding:'24px 22px', borderRadius:16,
            borderTop:`4px solid ${t.accent}`,
            gridColumn:`span ${t.span}`,
          }}>
            <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:16}}>
              <div style={{
                width:10, height:10, borderRadius:'50%',
                background:t.accent, flexShrink:0,
                boxShadow:`0 0 0 3px ${t.accent}30`,
              }}/>
              <h3 className="br-h3" style={{margin:0, color:BR.deep}}>{t.title}</h3>
            </div>
            <ul style={{margin:0, padding:'0 0 0 16px', display:'flex', flexDirection:'column', gap:8}}>
              {t.bullets.map((b, i) => (
                <li key={i} className="br-body" style={{fontSize:14, color:BR.deep70, lineHeight:1.6}}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── App root ─────────────────────────────────────────────────────────────
function AdventureApp() {
  const [drawer, setDrawer] = aUseState(null);
  const [quest, setQuest]   = aUseState(null);

  return (
    <div className="br-root" style={{minHeight:'100vh'}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'0 24px 60px'}}>
        <Nav onOpen={setDrawer}/>
        <Hero/>
        <Cartographer/>
        <IslandMap onOpen={setQuest}/>
        <SideQuests/>
        <ResearchToolkits/>
        <Footer/>
      </div>
      <Drawer kind={drawer} onClose={()=>setDrawer(null)}/>
      <QuestPage project={quest} onClose={()=>setQuest(null)}/>
    </div>
  );
}

// ─── Mount ────────────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(<AdventureApp/>);

