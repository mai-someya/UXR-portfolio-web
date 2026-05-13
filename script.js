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
  { id:'forest',   tag:'Foundational Research', icon:'tree-pine',
    title:'Services Tool Adoption',
    subtitle:'Shaped team strategy',
    role:'Sole researcher · 40-person team',
    method:'Mixed-methods · diary + interviews',
    impact:'Strategy artifact adopted by leadership',
    color: BR.meadow, colorDk:'#6FB370',
    pos:{ x:24, y:32 },
    bg:'linear-gradient(180deg, #BFE9D0 0%, #A8DFA0 100%)',
  },
  { id:'beach',    tag:'Product Strategy', icon:'anchor',
    title:'Recurring Revenue Products',
    subtitle:'Defined product strategy for Square',
    role:'Embedded researcher · PM partnership',
    method:'Qualitative generative · 18 interviews',
    impact:'Anchored two roadmap quarters',
    color: BR.sky, colorDk:'#56AFC1',
    pos:{ x:78, y:32 },
    bg:'linear-gradient(180deg, #BFE9EE 0%, #F2E2BD 100%)',
  },
  { id:'mountain', tag:'Design + Product', icon:'mountain',
    title:'P2P Payment Integration',
    subtitle:'Informed design + product · exec visibility',
    role:'Cross-functional partner',
    method:'Concept testing + journey mapping',
    impact:'Decision memo shaped exec read-out',
    color:'#D9E3E5', colorDk:'#8FA8AB',
    pos:{ x:24, y:74 },
    bg:'linear-gradient(180deg, #C5D5D8 0%, #8FA8AB 100%)',
  },
  { id:'town',     tag:'Proactive Discovery', icon:'home',
    title:'Voice AI Research',
    subtitle:'Identified the need · influenced product',
    role:'Initiator + lead researcher',
    method:'Behavioral logs + survey · n=240',
    impact:'Reframed an opportunity space',
    color: BR.gold, colorDk:'#C99E25',
    pos:{ x:78, y:74 },
    bg:'linear-gradient(180deg, #F8D673 0%, #F5C842 100%)',
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

const INTRO_DEFAULT = `I'm a mixed-methods UX researcher with 8 years spanning market research and UX research, a combination that brings both business-level strategy and deep user understanding to every study. As a sole researcher for a 40-person cross-functional team, I owned my research roadmap end-to-end — from identifying where research was needed to creating long-term artifacts that shaped product and team strategy.`;

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
      <div style={{display:'grid', gridTemplateColumns:'160px auto 1fr', gap:40, alignItems:'center'}}>

        {/* Left: Vertical stats panel */}
        <div style={{
          display:'flex', flexDirection:'column', gap:24,
          background:'#fff', borderRadius:16, padding:'24px 20px',
          boxShadow:'0 1px 2px rgba(26,58,58,.06), 0 8px 24px rgba(26,58,58,.06)',
        }}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:6, marginBottom:10}}>
              <Icon name="telescope" size={12} color={BR.teal}/>
              <span className="br-cap" style={{color:BR.deep70}}>Qualitative</span>
            </div>
            <div style={{height:10, background:BR.deep10, borderRadius:999, overflow:'hidden'}}>
              <div style={{width:'100%', height:'100%', background:BR.teal, borderRadius:999}}/>
            </div>
          </div>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:6, marginBottom:10}}>
              <Icon name="telescope" size={12} color={BR.sky}/>
              <span className="br-cap" style={{color:BR.deep70}}>Quantitative</span>
            </div>
            <div style={{height:10, background:BR.deep10, borderRadius:999, overflow:'hidden'}}>
              <div style={{width:'90%', height:'100%', background:BR.sky, borderRadius:999}}/>
            </div>
          </div>
          <div>
            <span className="br-cap" style={{color:BR.deep70, display:'block', marginBottom:10}}>8 Years XP</span>
            <HeartRow count={8} filled={8} size={12}/>
          </div>
        </div>

        {/* Center: Character — full-height wrapper to stretch alongside right column */}
        <div style={{position:'relative', alignSelf:'stretch', minHeight:340}}>
          <div style={{position:'sticky', top:0}}>
            <CharacterScene/>
          </div>
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
          <p className="br-body" style={{maxWidth:520, color:BR.deep70}}>
            Mixed-methods UX researcher with 8 years spanning market research and UX research, a combination that brings both business-level strategy and deep user understanding to every study.
          </p>
          <p className="br-body" style={{maxWidth:520, color:BR.deep70}}>
            From identifying research gaps to building artifacts that outlast the project, I have a proven track record driving product and roadmap decisions across fintech and consumer products at global scale.
          </p>

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
                marginTop:14, padding:'16px 20px', maxWidth:520,
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
    <div style={{position:'relative', width:280, height:340}}>
      <div style={{
        position:'absolute', inset:0, borderRadius:24, overflow:'hidden',
        background:`linear-gradient(180deg, ${BR.sky} 0%, ${BR.meadow} 100%)`,
        boxShadow:'0 12px 40px rgba(26,58,58,.18)',
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
      </div>

      {/* Mai sprite */}
      <div className="br-bob" style={{
        position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)',
        filter:'drop-shadow(0 6px 0 rgba(26,58,58,.15))',
      }}>
        <Sprite src={window.__resources.maiFront} width={140} height={244}/>
      </div>

      {/* Nameplate */}
      <div style={{
        position:'absolute', bottom:-14, left:'50%', transform:'translateX(-50%)',
        background:'#fff', padding:'6px 14px', borderRadius:999,
        boxShadow:'0 6px 18px rgba(26,58,58,.15)',
        display:'flex', alignItems:'center', gap:6,
      }}>
        <Icon name="map-pin" size={14} color={BR.teal}/>
        <span style={{fontFamily:'Nunito', fontWeight:700, fontSize:13, color:BR.deep}}>
          <Editable id="location" defaultValue="Seattle, WA"/>
        </span>
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

// ─── Island Map ───────────────────────────────────────────────────────────
function IslandMap({ onOpen }) {
  const [hovered, setHovered] = aUseState(null);
  const target = hovered
    ? PROJECTS.find(p => p.id === hovered).pos
    : { x:50, y:52 };

  return (
    <section id="map" className="br-fadeup" style={{padding:'24px 0 40px'}}>
      <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:18}}>
        <div>
          <div className="br-cap" style={{color:BR.teal, marginBottom:6}}>
            <Icon name="map" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
            The Map
          </div>
          <h2 className="br-h2">
            <Editable id="map_h2_a" defaultValue="Pick a destination,"/>{' '}
            <span className="br-display italic" style={{color:BR.teal}}>
              <Editable id="map_h2_b" defaultValue="see what I built there."/>
            </span>
          </h2>
        </div>
        <div className="br-cap" style={{color:BR.deep50}}>
          <Icon name="mood-happy" size={12} style={{verticalAlign:'-2px', marginRight:6}}/>
          Hover any zone · Click to begin a quest
        </div>
      </div>

      <div className="br-card" style={{
        padding:0, overflow:'hidden', position:'relative', borderRadius:24,
        boxShadow:'0 4px 12px rgba(26,58,58,.08), 0 24px 60px rgba(26,58,58,.12)',
      }}>
        <div style={{ position:'relative', aspectRatio:'16/10' }}>
          {/* Sky/Water background */}
          <div style={{
            position:'absolute', inset:0,
            background:`linear-gradient(180deg, ${BR.sky} 0%, ${BR.water} 40%, ${BR.sky} 100%)`,
          }}/>
          <WaterPattern/>
          <IslandSVG hovered={hovered} onHover={setHovered} onOpen={(id)=>onOpen(PROJECTS.find(p=>p.id===id))}/>

          {/* Alfie alongside Mai */}
          <div style={{
            position:'absolute',
            left:`${target.x}%`, top:`${target.y}%`,
            transform:'translate(4px, -90%)',
            transition:'left .9s cubic-bezier(.5,.15,.3,1), top .9s cubic-bezier(.5,.15,.3,1)',
            pointerEvents:'none', zIndex:5,
            filter:'drop-shadow(0 3px 0 rgba(26,58,58,.12))',
          }}>
            <Sprite src={window.__resources.alfieFront} width={44} height={76} walking={!!hovered}/>
          </div>

          {/* Mai walking */}
          <div style={{
            position:'absolute',
            left:`${target.x}%`, top:`${target.y}%`,
            transform:'translate(-50%, -90%)',
            transition:'left .9s cubic-bezier(.5,.15,.3,1), top .9s cubic-bezier(.5,.15,.3,1)',
            pointerEvents:'none', zIndex:6,
            filter:'drop-shadow(0 4px 0 rgba(26,58,58,.15))',
          }}>
            <Sprite src={window.__resources.maiFront} width={56} height={98} walking={!!hovered}/>
          </div>

          {hovered && <HoverPopover project={PROJECTS.find(p=>p.id===hovered)}/>}

          {/* Compass */}
          <div style={{position:'absolute', left:18, bottom:18, display:'flex', gap:10, alignItems:'center'}}>
            <div style={{
              width:48, height:48, borderRadius:'50%',
              background:'rgba(255,255,255,.92)',
              boxShadow:'0 4px 12px rgba(26,58,58,.18)',
              display:'grid', placeItems:'center',
            }}>
              <Icon name="compass" size={28} color={BR.deep} stroke={1.8}/>
            </div>
            <div className="br-cap" style={{
              padding:'6px 10px', background:'rgba(255,255,255,.92)',
              borderRadius:8, boxShadow:'0 4px 12px rgba(26,58,58,.12)',
            }}>4 paths · 4 projects</div>
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
  return (
    <svg viewBox="0 0 100 60" preserveAspectRatio="none"
      style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
      <path d="M 12 18 Q 10 12 18 10 Q 30 4 50 6 Q 70 5 82 10 Q 92 14 92 24
              Q 96 36 88 46 Q 78 56 60 56 Q 40 58 22 54 Q 8 48 6 36 Q 4 24 12 18 Z"
        fill={BR.sand} stroke="#D9C99A" strokeWidth=".3" strokeLinejoin="round"/>
      <path d="M 18 22 Q 18 14 28 14 Q 42 10 56 13 Q 70 14 80 18 Q 88 22 86 30
              Q 90 40 80 46 Q 70 52 56 50 Q 40 52 28 48 Q 16 42 16 32 Q 14 24 18 22 Z"
        fill={BR.meadow} stroke="#85B97D" strokeWidth=".3" strokeLinejoin="round"/>

      <g opacity={hovered==='mountain' ? 1 : .88} style={{cursor:'pointer'}}
        onClick={()=>onOpen('mountain')}
        onMouseEnter={()=>onHover('mountain')}
        onMouseLeave={()=>onHover(null)}>
        {hovered==='mountain' && <rect x="12" y="28" width="28" height="24" rx="2" fill="rgba(245,200,66,.18)" stroke="rgba(245,200,66,.55)" strokeWidth=".6"/>}
        <path d="M 16 50 L 22 36 L 26 44 L 30 30 L 36 50 Z" fill="#9DB6B9" stroke="#7D9498" strokeWidth=".3"/>
        <path d="M 28 32 L 30 30 L 32 32" fill="#fff"/>
        <rect x="12" y="28" width="28" height="24" fill="transparent"/>
      </g>
      <g opacity={hovered==='forest' ? 1 : .88} style={{cursor:'pointer'}}
        onClick={()=>onOpen('forest')}
        onMouseEnter={()=>onHover('forest')}
        onMouseLeave={()=>onHover(null)}>
        {hovered==='forest' && <rect x="14" y="16" width="22" height="14" rx="2" fill="rgba(245,200,66,.18)" stroke="rgba(245,200,66,.55)" strokeWidth=".6"/>}
        {[[20,22],[24,20],[28,22],[22,25],[26,24],[30,25]].map(([x,y],i)=>(
          <g key={i}>
            <path d={`M ${x-1.5} ${y+2} L ${x} ${y-1.5} L ${x+1.5} ${y+2} Z`} fill="#5FA088"/>
            <rect x={x-.2} y={y+1.6} width=".4" height="1.2" fill="#6E4F30"/>
          </g>
        ))}
        <rect x="14" y="16" width="22" height="14" fill="transparent"/>
      </g>
      <g opacity={hovered==='beach' ? 1 : .88} style={{cursor:'pointer'}}
        onClick={()=>onOpen('beach')}
        onMouseEnter={()=>onHover('beach')}
        onMouseLeave={()=>onHover(null)}>
        {hovered==='beach' && <rect x="62" y="17" width="26" height="14" rx="2" fill="rgba(245,200,66,.18)" stroke="rgba(245,200,66,.55)" strokeWidth=".6"/>}
        <ellipse cx="76" cy="26" rx="10" ry="5" fill={BR.sand} opacity=".9"/>
        {[[72,22],[78,21],[80,25]].map(([x,y],i)=>(
          <g key={i}>
            <rect x={x-.2} y={y} width=".4" height="3" fill="#6E4F30"/>
            <ellipse cx={x-1.4} cy={y-.4} rx="1.2" ry=".5" fill="#3BBFB0"/>
            <ellipse cx={x+1.4} cy={y-.4} rx="1.2" ry=".5" fill="#3BBFB0"/>
            <ellipse cx={x} cy={y-1} rx="1.2" ry=".5" fill="#3BBFB0"/>
          </g>
        ))}
        <rect x="62" y="17" width="26" height="14" fill="transparent"/>
      </g>
      <g opacity={hovered==='town' ? 1 : .88} style={{cursor:'pointer'}}
        onClick={()=>onOpen('town')}
        onMouseEnter={()=>onHover('town')}
        onMouseLeave={()=>onHover(null)}>
        {hovered==='town' && <rect x="62" y="38" width="26" height="14" rx="2" fill="rgba(245,200,66,.18)" stroke="rgba(245,200,66,.55)" strokeWidth=".6"/>}
        <ellipse cx="76" cy="46" rx="10" ry="5" fill="#E8D9B0" opacity=".8"/>
        {[[72,42],[76,44],[80,42],[74,46],[78,46]].map(([x,y],i)=>(
          <g key={i}>
            <rect x={x-1.6} y={y} width="3.2" height="3" fill="#E9B57C"/>
            <path d={`M ${x-1.8} ${y} L ${x} ${y-1.4} L ${x+1.8} ${y}`} fill="#C57C4F"/>
            <rect x={x-.4} y={y+1.2} width=".8" height="1.4" fill="#6E4F30"/>
          </g>
        ))}
        <rect x="62" y="38" width="26" height="14" fill="transparent"/>
      </g>

      <circle cx="50" cy="32" r="3.6" fill="#F2E7C8" stroke="#D9C99A" strokeWidth=".4"/>
      <circle cx="50" cy="32" r="1.4" fill={BR.gold}/>

      {PROJECTS.map((p,i)=>{
        const dx = (p.pos.x - 50);
        const dy = (p.pos.y - 52);
        const mx = 50 + dx*.5 + (i%2===0 ? -4 : 4);
        const my = 32 + (dy*.6);
        return (
          <path key={p.id}
            d={`M 50 32 Q ${mx} ${my} ${p.pos.x} ${p.pos.y}`}
            fill="none" stroke={hovered===p.id ? BR.gold : '#C99E25'}
            strokeWidth={hovered===p.id ? 1.2 : .8}
            strokeDasharray={hovered===p.id ? "1.6 1.6" : "1.2 2"}
            strokeLinecap="round" opacity={hovered===p.id?1:.7}
            style={{transition:'all .25s ease'}}/>
        );
      })}

      <g opacity=".6">
        <path d="M 4 30 L 7 30 L 6 32 L 5 32 Z" fill={BR.deep}/>
        <path d="M 5.5 27 L 5.5 30" stroke={BR.deep} strokeWidth=".25"/>
        <path d="M 5.5 27 L 7 30" stroke={BR.deep} strokeWidth=".25"/>
        <path d="M 93 48 L 96 48 L 95 50 L 94 50 Z" fill={BR.deep}/>
        <path d="M 94.5 45 L 94.5 48" stroke={BR.deep} strokeWidth=".25"/>
      </g>
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
        <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:8}}>
          <span className="br-tag gold">
            <Icon name="map-pin" size={11} color={BR.deep}/> Quest
          </span>
          <span className="br-tag">{project.tag}</span>
        </div>
        <div className="br-h3" style={{fontSize:18, marginBottom:4}}>{project.title}</div>
        <div className="br-body" style={{fontSize:14, color:BR.deep70, marginBottom:10}}>
          {project.subtitle}
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:4, fontSize:13}}>
          <Row icon="eye"    label="Role"   value={project.role}/>
          <Row icon="tools"  label="Method" value={project.method}/>
          <Row icon="flag"   label="Impact" value={project.impact}/>
        </div>
        <div style={{
          marginTop:10, paddingTop:10, borderTop:`1px dashed ${BR.deep20}`,
          display:'flex', alignItems:'center', justifyContent:'space-between',
          color:BR.teal, fontFamily:'Nunito', fontWeight:700, fontSize:13,
        }}>
          Click to begin <Icon name="arrow-right" size={16}/>
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
  const SCENES = [
    { name:'Intro',      icon:'telescope', hint:'Overview and background of the project.' },
    { name:'Objective',  icon:'flag',      hint:'The business question and research goals we were trying to answer.' },
    { name:'Approach',   icon:'tools',     hint:'Study design · participants · timeline · my role.' },
    { name:'Findings',   icon:'bulb',      hint:'Top insights with supporting data, quotes, and clips.' },
    { name:'Impact',     icon:'rocket',    hint:'Shipped decisions, downstream artifacts, and measurable outcomes.' },
    { name:'Reflection', icon:'book',      hint:'What I\'d do differently next time + key learnings.' },
  ];
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
              <div style={{marginTop:18, display:'flex', gap:8}}>
                <span className="br-tag" style={{background:'rgba(255,255,255,.7)', color:BR.deep, borderColor:'rgba(255,255,255,.4)'}}>
                  <Icon name="map-pin" size={11}/> Quest
                </span>
                <span className="br-tag" style={{background:'rgba(255,255,255,.7)', color:BR.deep, borderColor:'rgba(255,255,255,.4)'}}>
                  {project.tag}
                </span>
              </div>
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

function SceneCard({ idx, scene, pid, accent }) {
  return (
    <div className="br-card" style={{
      padding:'20px 22px', borderRadius:16,
      borderTop:`4px solid ${accent}`,
    }}>
      <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:10}}>
        <div style={{
          width:36, height:36, borderRadius:10, background:BR.foam,
          display:'grid', placeItems:'center', color:BR.deep,
        }}>
          <Icon name={scene.icon} size={20}/>
        </div>
        <span className="br-cap" style={{color:BR.deep50}}>Scene {String(idx+1).padStart(2,'0')}</span>
      </div>
      <h3 className="br-display" style={{fontSize:24, lineHeight:1, marginBottom:8}}>
        <Editable id={`q_${pid}_scene${idx}_name`} defaultValue={scene.name}/>
      </h3>
      <p className="br-body" style={{fontSize:15, color:BR.deep70, marginBottom:12}}>
        <Editable id={`q_${pid}_scene${idx}_body`} defaultValue={scene.hint} multiline/>
      </p>
      <div style={{
        height:120, borderRadius:10, background:BR.foam,
        border:`2px dashed ${BR.deep20}`,
        display:'grid', placeItems:'center', color:BR.deep50,
      }}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:4}}>
          <Icon name="eye" size={20}/>
          <span className="br-cap" style={{color:BR.deep50}}>Screenshot · Quote · Clip</span>
        </div>
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
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:14}}>
        <div className="br-display italic" style={{fontSize:22, color:BR.deep}}>
          <Editable id="footer_tagline" defaultValue={TAGLINE_DEFAULT}/>
        </div>
        <div className="br-cap" style={{color:BR.deep50}}>
          © <Editable id="footer_year" defaultValue="2026"/> · Made with <Icon name="sparkles" size={11} color={BR.gold} style={{verticalAlign:'-2px'}}/> and curiosity
        </div>
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
    sections:[
      { title:'Overview',    hint:'Describe what real-life experiences shape you as a researcher.' },
      { title:'Adventures',  hint:'Highlight memorable experiences and what you learned from them.' },
      { title:'Takeaways',   hint:'Reflect on how these adventures inform your research mindset.' },
    ],
  },
];

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
        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:18}}>
          <h2 className="br-h2">
            Side{' '}
            <span className="br-display italic" style={{color:BR.teal}}>Quests.</span>
          </h2>
          <div className="br-cap" style={{color:BR.deep50}}>4 tracks · 8 years</div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:20}}>
          {SIDE_QUEST_CATS.map(cat=>(
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
        <Footer/>
      </div>
      <Drawer kind={drawer} onClose={()=>setDrawer(null)}/>
      <QuestPage project={quest} onClose={()=>setQuest(null)}/>
    </div>
  );
}

// ─── Mount ────────────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(<AdventureApp/>);

