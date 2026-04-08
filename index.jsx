import React from 'react';

export const ReadmeUI = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 1200,
        height: 630,
        backgroundColor: '#0a0a0a',
        fontFamily: 'Inter',
        overflow: 'hidden',
        position: 'relative',
        padding: '60px',
        boxSizing: 'border-box',
      }}
    >
      {/* Background SVG with procedural effects */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <filter id="fluid-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" in="noise" result="coloredNoise" />
            <feDisplacementMap in="SourceGraphic" in2="coloredNoise" scale="40" xChannelSelector="R" yChannelSelector="G" result="disp" />
            <feGaussianBlur in="disp" stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="void-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.04)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#void-grad)" />
        <circle id="bg-orb-1" cx="200" cy="150" r="120" fill="rgba(99, 102, 241, 0.15)" filter="url(#fluid-glow)" />
        <circle id="bg-orb-2" cx="1000" cy="500" r="180" fill="rgba(236, 72, 153, 0.12)" filter="url(#fluid-glow)" />
      </svg>

      {/* Hero Section - Fixed Height to prevent flex wrapping issues */}
      <div style={{ display: 'flex', flexDirection: 'column', height: 120, marginBottom: '40px' }}>
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 800,
            margin: 0,
            letterSpacing: '-0.04em',
            color: '#ffffff',
          }}
        >
          MUNEER ALI
        </h1>
        <h2
          style={{
            display: 'flex',
            fontSize: '24px',
            fontWeight: 400,
            color: '#A1A1AA',
            margin: '12px 0 0 0',
            letterSpacing: '-0.02em',
            fontFamily: 'Fira Code',
          }}
        >
          <span style={{ color: '#6366F1', marginRight: '8px' }}>const</span> role = <span style={{ color: '#10B981', marginLeft: '8px' }}>'Principal Design Engineer'</span>;
        </h2>
      </div>

      {/* Bento Grid - Exact pixel dimensions for flawless rendering */}
      <div style={{ display: 'flex', flexDirection: 'row', width: 1080, height: 350, gap: '30px' }}>
        
        {/* Card 1: Tech Orbit */}
        <div
          id="card-1"
          style={{
            display: 'flex',
            width: 400,
            height: 350,
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            padding: '32px',
            flexDirection: 'column',
            boxSizing: 'border-box',
          }}
        >
          <h3 style={{ fontSize: '14px', color: '#71717A', margin: '0 0 20px 0', fontFamily: 'Fira Code', letterSpacing: '0.1em' }}>
            // TECH_ORBIT
          </h3>
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: 230,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Native SVG for reliable orbital layout and animation tracking */}
            <svg width="240" height="240" viewBox="0 0 240 240" style={{ position: 'absolute' }}>
              <circle cx="120" cy="120" r="110" fill="none" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />
              
              {/* Rotating Group */}
              <g id="orbit-group" style={{ transformOrigin: '120px 120px' }}>
                <circle cx="120" cy="10" r="14" fill="#61DAFB" />
                <circle cx="230" cy="120" r="14" fill="#3178C6" />
                <circle cx="120" cy="230" r="14" fill="#F7DF1E" />
                <circle cx="10" cy="120" r="14" fill="#41B883" />
              </g>

              {/* Core Node */}
              <circle cx="120" cy="120" r="30" fill="#ffffff" filter="drop-shadow(0 0 10px rgba(255,255,255,0.5))" />
            </svg>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', width: 650, height: 350, gap: '30px' }}>
          
          {/* Card 2: System Pulse */}
          <div
            id="card-2"
            style={{
              display: 'flex',
              width: 650,
              height: 160,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '32px',
              flexDirection: 'column',
              boxSizing: 'border-box',
              position: 'relative'
            }}
          >
            <h3 style={{ fontSize: '14px', color: '#71717A', margin: 0, fontFamily: 'Fira Code', letterSpacing: '0.1em' }}>
              // SYSTEM_PULSE
            </h3>
            <svg width="580" height="80" viewBox="0 0 580 80" style={{ position: 'absolute', bottom: 20, left: 32 }}>
              <defs>
                <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path 
                id="pulse-line"
                d="M 0 40 L 150 40 L 180 10 L 220 70 L 250 20 L 290 60 L 320 40 L 580 40"
                fill="none" 
                stroke="#10B981" 
                strokeWidth="4" 
                filter="url(#neon-glow)"
              />
            </svg>
          </div>

          {/* Card 3: Current Focus */}
          <div
            id="card-3"
            style={{
              display: 'flex',
              width: 650,
              height: 160,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '32px',
              flexDirection: 'column',
              justifyContent: 'center',
              boxSizing: 'border-box',
            }}
          >
            <h3 style={{ fontSize: '14px', color: '#71717A', margin: '0 0 16px 0', fontFamily: 'Fira Code', letterSpacing: '0.1em' }}>
              // CURRENT_FOCUS
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '22px', color: '#E4E4E7', margin: 0, lineHeight: 1.4, fontWeight: 500 }}>
              <span style={{ display: 'flex' }}>Architecting <span style={{ color: '#A78BFA', marginLeft: '6px' }}>scalable distributed systems</span></span>
              <span style={{ display: 'flex', marginTop: '4px' }}>and exploring the bleeding edge of <span style={{ color: '#F472B6', marginLeft: '6px' }}>generative UI</span>.</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
