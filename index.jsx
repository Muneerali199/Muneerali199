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
        padding: '64px',
        boxSizing: 'border-box',
      }}
    >
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
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
        <circle cx="200" cy="150" r="120" fill="rgba(99, 102, 241, 0.15)" filter="url(#fluid-glow)" />
        <circle cx="1000" cy="500" r="180" fill="rgba(236, 72, 153, 0.12)" filter="url(#fluid-glow)" />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '48px' }}>
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

      <div style={{ display: 'flex', gap: '24px', flex: 1, width: '100%' }}>
        
        <div
          style={{
            display: 'flex',
            flex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            padding: '32px',
            flexDirection: 'column',
          }}
        >
          <h3 style={{ fontSize: '14px', color: '#71717A', margin: 0, fontFamily: 'Fira Code', letterSpacing: '0.1em' }}>
            // TECH_ORBIT
          </h3>
          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                position: 'relative',
                width: 240,
                height: 240,
                borderRadius: '50%',
                border: '1px dashed rgba(255,255,255,0.15)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ width: 60, height: 60, background: '#ffffff', borderRadius: '50%', boxShadow: '0 0 40px rgba(255,255,255,0.3)' }} />
              <div style={{ position: 'absolute', top: -12, left: 108, width: 24, height: 24, background: '#61DAFB', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', bottom: 30, right: 10, width: 24, height: 24, background: '#3178C6', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', bottom: 30, left: 10, width: 24, height: 24, background: '#F7DF1E', borderRadius: '50%' }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1.2 }}>
          
          <div
            style={{
              display: 'flex',
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '32px',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <h3 style={{ fontSize: '14px', color: '#71717A', margin: 0, fontFamily: 'Fira Code', letterSpacing: '0.1em' }}>
              // SYSTEM_PULSE
            </h3>
            <div style={{ display: 'flex', flex: 1, position: 'relative', marginTop: '16px' }}>
              <svg width="100%" height="100%" viewBox="0 0 400 120" style={{ position: 'absolute', top: 0, left: 0 }}>
                <path 
                  d="M 0 60 L 80 60 L 110 10 L 140 110 L 170 30 L 210 90 L 240 60 L 400 60"
                  fill="none" 
                  stroke="#10B981" 
                  strokeWidth="4" 
                />
              </svg>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flex: 1.2,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '32px',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3 style={{ fontSize: '14px', color: '#71717A', margin: '0 0 16px 0', fontFamily: 'Fira Code', letterSpacing: '0.1em' }}>
              // CURRENT_FOCUS
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '22px', color: '#E4E4E7', margin: 0, lineHeight: 1.4, fontWeight: 500 }}>
              <span style={{ display: 'flex' }}>Architecting <span style={{ color: '#A78BFA', marginLeft: '6px' }}>scalable distributed systems</span></span>
              <span style={{ display: 'flex' }}>and exploring the bleeding edge of</span>
              <span style={{ display: 'flex' }}><span style={{ color: '#F472B6', marginRight: '6px' }}>generative UI</span>.</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
