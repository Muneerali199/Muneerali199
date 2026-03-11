<!-- ═══════════════════════════════════════════════════════════ -->
<!--                    HERO WAVE HEADER                        -->
<!-- ═══════════════════════════════════════════════════════════ -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=120&color=0:0d1117,40:1a0533,70:0d1b3e,100:0d1117&section=header&animation=fadeIn" />

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                   ANIMATED 3D HERO SVG                     -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 220" width="100%">
  <defs>
    <!-- Deep space background gradient -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   style="stop-color:#050810"/>
      <stop offset="30%"  style="stop-color:#0d0a1f"/>
      <stop offset="60%"  style="stop-color:#080d1a"/>
      <stop offset="100%" style="stop-color:#050810"/>
    </linearGradient>
    <!-- Purple-cyan glow for orbs -->
    <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   style="stop-color:#8B5CF6;stop-opacity:0.9"/>
      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:0"/>
    </radialGradient>
    <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   style="stop-color:#06b6d4;stop-opacity:0.8"/>
      <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:0"/>
    </radialGradient>
    <radialGradient id="orb3" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   style="stop-color:#f59e0b;stop-opacity:0.7"/>
      <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0"/>
    </radialGradient>
    <radialGradient id="orb4" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   style="stop-color:#ec4899;stop-opacity:0.7"/>
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:0"/>
    </radialGradient>
    <!-- TEXT backdrop gradient - SOLID dark pill -->
    <linearGradient id="textBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   style="stop-color:#0f0a1e;stop-opacity:0.96"/>
      <stop offset="100%" style="stop-color:#050810;stop-opacity:0.96"/>
    </linearGradient>
    <!-- Neon border gradient for text pill -->
    <linearGradient id="pillarBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   style="stop-color:#8B5CF6"/>
      <stop offset="50%"  style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#ec4899"/>
    </linearGradient>
    <!-- Text glow filter - STRONG -->
    <filter id="textGlow" x="-20%" y="-50%" width="140%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <filter id="hardGlow" x="-10%" y="-40%" width="120%" height="180%">
      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softBlur">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
    <filter id="medBlur">
      <feGaussianBlur stdDeviation="9"/>
    </filter>
  </defs>

  <!-- ── BACKGROUND ── -->
  <rect width="900" height="220" fill="url(#bg)" rx="0"/>

  <!-- ── SUBTLE GRID (very faint) ── -->
  <g stroke="#8B5CF6" stroke-width="0.4" opacity="0.07">
    <line x1="0" y1="44" x2="900" y2="44"/><line x1="0" y1="88" x2="900" y2="88"/>
    <line x1="0" y1="132" x2="900" y2="132"/><line x1="0" y1="176" x2="900" y2="176"/>
    <line x1="90"  y1="0" x2="90"  y2="220"/><line x1="180" y1="0" x2="180" y2="220"/>
    <line x1="270" y1="0" x2="270" y2="220"/><line x1="360" y1="0" x2="360" y2="220"/>
    <line x1="450" y1="0" x2="450" y2="220"/><line x1="540" y1="0" x2="540" y2="220"/>
    <line x1="630" y1="0" x2="630" y2="220"/><line x1="720" y1="0" x2="720" y2="220"/>
    <line x1="810" y1="0" x2="810" y2="220"/>
  </g>

  <!-- ── BACKGROUND GLOW ORBS (behind everything) ── -->
  <circle cx="110" cy="80"  r="90"  fill="url(#orb1)" filter="url(#softBlur)" opacity="0.55">
    <animate attributeName="cy"      values="80;110;80"   dur="5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.55;0.8;0.55" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="800" cy="140" r="100" fill="url(#orb2)" filter="url(#softBlur)" opacity="0.5">
    <animate attributeName="cy"      values="140;105;140" dur="6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0.75;0.5"  dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="450" cy="20"  r="60"  fill="url(#orb3)" filter="url(#softBlur)" opacity="0.3">
    <animate attributeName="cx"      values="450;480;450" dur="7s" repeatCount="indefinite"/>
  </circle>
  <circle cx="680" cy="190" r="55"  fill="url(#orb4)" filter="url(#softBlur)" opacity="0.35">
    <animate attributeName="cx"      values="680;650;680" dur="4.5s" repeatCount="indefinite"/>
  </circle>

  <!-- ── FLOATING CODE SNIPPETS (corners, faint) ── -->
  <text x="18" y="38" font-family="monospace" font-size="9.5" fill="#8B5CF6" opacity="0">
    const future = await build();
    <animate attributeName="opacity" values="0;0.55;0.55;0" dur="6s" begin="0.5s" repeatCount="indefinite"/>
  </text>
  <text x="18" y="198" font-family="monospace" font-size="9" fill="#f59e0b" opacity="0">
    0x8B5CF6::transfer(∞)
    <animate attributeName="opacity" values="0;0.5;0.5;0" dur="7s" begin="2s" repeatCount="indefinite"/>
  </text>
  <text x="610" y="198" font-family="monospace" font-size="9" fill="#06b6d4" opacity="0">
    deploying to production...
    <animate attributeName="opacity" values="0;0.5;0.5;0" dur="5s" begin="1s" repeatCount="indefinite"/>
  </text>
  <text x="630" y="34" font-family="monospace" font-size="9" fill="#ec4899" opacity="0">
    model.fit(dreams, reality)
    <animate attributeName="opacity" values="0;0.5;0.5;0" dur="6s" begin="3s" repeatCount="indefinite"/>
  </text>

  <!-- ── FLOATING PARTICLES ── -->
  <circle cx="200" cy="50"  r="2"   fill="#8B5CF6" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="3s"   begin="0s"   repeatCount="indefinite"/><animate attributeName="cy" values="50;25;50"   dur="3s"   repeatCount="indefinite"/></circle>
  <circle cx="380" cy="170" r="1.5" fill="#06b6d4" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="4s"   begin="1s"   repeatCount="indefinite"/><animate attributeName="cy" values="170;140;170" dur="4s"   repeatCount="indefinite"/></circle>
  <circle cx="700" cy="60"  r="2"   fill="#f59e0b" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="2.8s" begin="0.5s" repeatCount="indefinite"/><animate attributeName="cy" values="60;30;60"   dur="2.8s" repeatCount="indefinite"/></circle>
  <circle cx="560" cy="190" r="1.5" fill="#ec4899" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="3.5s" begin="2s"   repeatCount="indefinite"/><animate attributeName="cx" values="560;590;560" dur="3.5s" repeatCount="indefinite"/></circle>
  <circle cx="310" cy="130" r="1.5" fill="#8B5CF6" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="4.5s" begin="1.5s" repeatCount="indefinite"/><animate attributeName="cy" values="130;100;130" dur="4.5s" repeatCount="indefinite"/></circle>
  <circle cx="820" cy="90"  r="2"   fill="#7ee787" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="3.2s" begin="0.8s" repeatCount="indefinite"/><animate attributeName="cy" values="90;60;90"   dur="3.2s" repeatCount="indefinite"/></circle>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!--  TEXT SECTION — solid pill backdrop so text is ALWAYS     -->
  <!--  perfectly readable regardless of orb positions           -->
  <!-- ══════════════════════════════════════════════════════════ -->

  <!-- Outer neon border glow (blurred) -->
  <rect x="200" y="68" width="500" height="90" rx="18" fill="none"
        stroke="url(#pillarBorder)" stroke-width="3" opacity="0.6" filter="url(#medBlur)"/>

  <!-- Solid dark pill backdrop -->
  <rect x="203" y="71" width="494" height="84" rx="16" fill="url(#textBg)"/>

  <!-- Crisp neon border on top -->
  <rect x="203" y="71" width="494" height="84" rx="16" fill="none"
        stroke="url(#pillarBorder)" stroke-width="1.5" opacity="0.9"/>

  <!-- Decorative inner accent lines -->
  <line x1="232" y1="113" x2="332" y2="113" stroke="#8B5CF6" stroke-width="1" opacity="0.6"/>
  <line x1="568" y1="113" x2="668" y2="113" stroke="#06b6d4" stroke-width="1" opacity="0.6"/>

  <!-- MAIN NAME — white fill + purple shadow = crystal clear -->
  <text x="450" y="106" text-anchor="middle"
        font-family="'JetBrains Mono', 'Courier New', monospace"
        font-size="36" font-weight="bold"
        fill="none" stroke="#8B5CF6" stroke-width="6" stroke-opacity="0.5" filter="url(#softBlur)">
    &lt; Muneer Ali /&gt;
  </text>
  <text x="450" y="106" text-anchor="middle"
        font-family="'JetBrains Mono', 'Courier New', monospace"
        font-size="36" font-weight="bold" letter-spacing="1"
        fill="#ffffff" filter="url(#hardGlow)">
    &lt; Muneer Ali /&gt;
  </text>

  <!-- SUBTITLE — bright violet, clearly readable -->
  <text x="450" y="133" text-anchor="middle"
        font-family="'JetBrains Mono', 'Courier New', monospace"
        font-size="12.5" letter-spacing="2"
        fill="#c4b5fd">
    Full-Stack · Blockchain · AI/ML · Open Source
  </text>

  <!-- ── CORNER BRACKET ACCENTS ── -->
  <path d="M14,14 L48,14 L48,20 M14,14 L14,50 L20,50"   stroke="#8B5CF6" stroke-width="2.5" fill="none" opacity="0.8"/>
  <path d="M886,14 L852,14 L852,20 M886,14 L886,50 L880,50" stroke="#8B5CF6" stroke-width="2.5" fill="none" opacity="0.8"/>
  <path d="M14,206 L48,206 L48,200 M14,206 L14,170 L20,170"  stroke="#06b6d4" stroke-width="2.5" fill="none" opacity="0.8"/>
  <path d="M886,206 L852,206 L852,200 M886,206 L886,170 L880,170" stroke="#06b6d4" stroke-width="2.5" fill="none" opacity="0.8"/>
</svg>
</div>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                  ANIMATED TYPING BAR                       -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=20&pause=1000&color=8B5CF6&center=true&vCenter=true&repeat=true&width=650&height=48&lines=Building+scalable+full-stack+apps+%F0%9F%9A%80;Crafting+smart+contracts+%26+DeFi+protocols+%E2%9B%93;Training+AI+agents+%26+LLMs+%F0%9F%A4%96;Contributing+to+Open+Source+%F0%9F%8C%90;Turning+ideas+into+products+%F0%9F%92%A1)](https://git.io/typing-svg)

</div>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                   BADGE ROW                                -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">

<img src="https://komarev.com/ghpvc/?username=Muneerali199&label=PROFILE+VIEWS&color=8B5CF6&style=for-the-badge&labelColor=0d1117" />
&nbsp;
<a href="https://github.com/Muneerali199?tab=followers"><img src="https://img.shields.io/github/followers/Muneerali199?label=FOLLOWERS&style=for-the-badge&color=06b6d4&labelColor=0d1117" /></a>
&nbsp;
<img src="https://img.shields.io/badge/OPEN%20SOURCE-CONTRIBUTOR-ec4899?style=for-the-badge&labelColor=0d1117" />
&nbsp;
<img src="https://img.shields.io/badge/BASED%20IN-DELHI%20%F0%9F%87%AE%F0%9F%87%B3-f59e0b?style=for-the-badge&labelColor=0d1117" />

</div>

<br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                  ABOUT — TERMINAL CARD                     -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 278" width="96%">
  <defs>
    <linearGradient id="termBg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   style="stop-color:#0d0f1a"/>
      <stop offset="100%" style="stop-color:#0a0d16"/>
    </linearGradient>
    <linearGradient id="termBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   style="stop-color:#8B5CF6"/>
      <stop offset="50%"  style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#ec4899"/>
    </linearGradient>
    <filter id="tGlow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Outer glow border -->
  <rect x="1" y="1" width="858" height="276" rx="14" fill="none"
        stroke="url(#termBorder)" stroke-width="1.5"/>
  <!-- Main body -->
  <rect width="860" height="278" rx="14" fill="url(#termBg2)"/>
  <!-- Title bar -->
  <rect width="860" height="38" rx="14" fill="#12141f"/>
  <rect y="24" width="860" height="14" fill="#12141f"/>
  <!-- Traffic lights with glow -->
  <circle cx="24" cy="19" r="7" fill="#ff5f57" filter="url(#tGlow)"/>
  <circle cx="46" cy="19" r="7" fill="#febc2e" filter="url(#tGlow)"/>
  <circle cx="68" cy="19" r="7" fill="#28c840" filter="url(#tGlow)"/>
  <!-- Titlebar text -->
  <text x="430" y="24" text-anchor="middle" font-family="JetBrains Mono, monospace"
        font-size="11" fill="#6e7681">muneer@universe:~ $</text>
  <!-- Separator line -->
  <line x1="0" y1="38" x2="860" y2="38" stroke="#1e2230" stroke-width="1"/>

  <!-- Line 1: whoami -->
  <text x="22" y="68" font-family="JetBrains Mono, monospace" font-size="12" fill="#7ee787">❯</text>
  <text x="36" y="68" font-family="JetBrains Mono, monospace" font-size="12" fill="#58a6ff">whoami</text>
  <text x="22" y="88" font-family="JetBrains Mono, monospace" font-size="11.5" fill="#e6edf3">  Muneer Ali — Full-Stack Dev · Blockchain · AI/ML Explorer · Open Source</text>

  <!-- Line 2: skills -->
  <text x="22" y="110" font-family="JetBrains Mono, monospace" font-size="12" fill="#7ee787">❯</text>
  <text x="36" y="110" font-family="JetBrains Mono, monospace" font-size="12" fill="#58a6ff">cat skills.txt</text>

  <text x="22" y="130" font-family="JetBrains Mono, monospace" font-size="11" fill="#c4b5fd">  ⚡ Frontend   </text>
  <text x="130" y="130" font-family="JetBrains Mono, monospace" font-size="11" fill="#e6edf3">React · Next.js · TypeScript · Tailwind CSS · HTML · CSS</text>

  <text x="22" y="148" font-family="JetBrains Mono, monospace" font-size="11" fill="#c4b5fd">  ⚡ Backend    </text>
  <text x="130" y="148" font-family="JetBrains Mono, monospace" font-size="11" fill="#e6edf3">Node.js · Express · MongoDB · Docker · Firebase · GCP</text>

  <text x="22" y="166" font-family="JetBrains Mono, monospace" font-size="11" fill="#c4b5fd">  ⚡ Blockchain  </text>
  <text x="130" y="166" font-family="JetBrains Mono, monospace" font-size="11" fill="#e6edf3">Solidity · Smart Contracts · DeFi · Web3 · MiniChain</text>

  <text x="22" y="184" font-family="JetBrains Mono, monospace" font-size="11" fill="#c4b5fd">  ⚡ AI / ML    </text>
  <text x="130" y="184" font-family="JetBrains Mono, monospace" font-size="11" fill="#e6edf3">LLMs · OpenAI · Computer Vision · Intelligent Agents</text>

  <text x="22" y="202" font-family="JetBrains Mono, monospace" font-size="11" fill="#c4b5fd">  ⚡ Languages   </text>
  <text x="130" y="202" font-family="JetBrains Mono, monospace" font-size="11" fill="#e6edf3">TypeScript · JavaScript · Python · Java · C++ · Dart</text>

  <!-- Line 3: location -->
  <text x="22" y="224" font-family="JetBrains Mono, monospace" font-size="12" fill="#7ee787">❯</text>
  <text x="36" y="224" font-family="JetBrains Mono, monospace" font-size="12" fill="#58a6ff">cat contact.txt</text>
  <text x="22" y="246" font-family="JetBrains Mono, monospace" font-size="11" fill="#e6edf3">  📍 Delhi, India  ·  📫 alimuneerali245@gmail.com  ·  🌐 AOSSIE Contributor</text>

  <!-- Blinking cursor -->
  <rect x="22" y="257" width="9" height="14" rx="1" fill="#58a6ff">
    <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite"/>
  </rect>
</svg>
</div>

<br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                    GITHUB STATS                            -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">

<img height="175" src="https://github-readme-stats.vercel.app/api?username=Muneerali199&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d0f1a&title_color=8B5CF6&icon_color=06b6d4&text_color=c4b5fd&border_radius=14&ring_color=8B5CF6" />
&nbsp;&nbsp;
<img height="175" src="https://github-readme-streak-stats.herokuapp.com?user=Muneerali199&theme=tokyonight&hide_border=true&background=0d0f1a&ring=8B5CF6&fire=f59e0b&currStreakLabel=8B5CF6&sideLabels=c4b5fd&currStreakNum=ffffff&sideNums=c4b5fd&dates=6e7681&border_radius=14" />

</div>

<div align="center">
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Muneerali199&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d0f1a&title_color=8B5CF6&text_color=c4b5fd&border_radius=14&langs_count=8&card_width=500" />
</div>

<br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--              TECH STACK SECTION HEADER                     -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 56" width="96%">
  <defs>
    <linearGradient id="secBg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   style="stop-color:#0d0f1a"/>
      <stop offset="50%"  style="stop-color:#130d24"/>
      <stop offset="100%" style="stop-color:#0d0f1a"/>
    </linearGradient>
    <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   style="stop-color:#8B5CF6;stop-opacity:0"/>
      <stop offset="50%"  style="stop-color:#8B5CF6;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:0"/>
    </linearGradient>
  </defs>
  <rect width="860" height="56" rx="12" fill="url(#secBg)" stroke="#1e2230" stroke-width="1"/>
  <rect x="0" y="54" width="860" height="2" rx="1" fill="url(#accentLine)"/>
  <text x="430" y="35" text-anchor="middle" font-family="JetBrains Mono, monospace"
        font-size="16" font-weight="bold" fill="white" letter-spacing="3">⚡  TECH STACK &amp; TOOLS  ⚡</text>
</svg>
</div>

<br/>

<!-- LANGUAGE BADGES -->
<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-8B5CF6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-f59e0b?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-06b6d4?style=for-the-badge&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-ec4899?style=for-the-badge&logo=openjdk&logoColor=white)
![C++](https://img.shields.io/badge/C++-8B5CF6?style=for-the-badge&logo=cplusplus&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-06b6d4?style=for-the-badge&logo=dart&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-f59e0b?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-ec4899?style=for-the-badge&logo=css3&logoColor=white)

</div>

<!-- FRONTEND BADGES -->
<div align="center">

![React](https://img.shields.io/badge/React-06b6d4?style=for-the-badge&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-ffffff?style=for-the-badge&logo=nextdotjs&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8B5CF6?style=for-the-badge&logo=vite&logoColor=white)

</div>

<!-- BACKEND + DEVOPS BADGES -->
<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-7ee787?style=for-the-badge&logo=nodedotjs&logoColor=black)
![Express](https://img.shields.io/badge/Express-8B5CF6?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7ee787?style=for-the-badge&logo=mongodb&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-06b6d4?style=for-the-badge&logo=docker&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-f59e0b?style=for-the-badge&logo=firebase&logoColor=black)
![GCP](https://img.shields.io/badge/GCP-ec4899?style=for-the-badge&logo=googlecloud&logoColor=white)

</div>

<!-- BLOCKCHAIN + AI BADGES -->
<div align="center">

![Solidity](https://img.shields.io/badge/Solidity-06b6d4?style=for-the-badge&logo=solidity&logoColor=white)
![Web3.js](https://img.shields.io/badge/Web3.js-8B5CF6?style=for-the-badge&logo=web3dotjs&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-f59e0b?style=for-the-badge&logo=tensorflow&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-7ee787?style=for-the-badge&logo=openai&logoColor=black)
![Git](https://img.shields.io/badge/Git-ec4899?style=for-the-badge&logo=git&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-8B5CF6?style=for-the-badge&logo=figma&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-06b6d4?style=for-the-badge&logo=visualstudiocode&logoColor=white)

</div>

<br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                  FEATURED PROJECTS                         -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 56" width="96%">
  <defs>
    <linearGradient id="accentLine2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   style="stop-color:#f59e0b;stop-opacity:0"/>
      <stop offset="50%"  style="stop-color:#f59e0b;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:0"/>
    </linearGradient>
  </defs>
  <rect width="860" height="56" rx="12" fill="url(#secBg)" stroke="#1e2230" stroke-width="1"/>
  <rect x="0" y="54" width="860" height="2" rx="1" fill="url(#accentLine2)"/>
  <text x="430" y="35" text-anchor="middle" font-family="JetBrains Mono, monospace"
        font-size="16" font-weight="bold" fill="white" letter-spacing="3">🚀  FEATURED PROJECTS  🚀</text>
</svg>
</div>

<br/>

<div align="center">

[![DraftdeckAI](https://github-readme-stats.vercel.app/api/pin/?username=Muneerali199&repo=Draftdeckai&theme=tokyonight&hide_border=true&bg_color=0d0f1a&title_color=8B5CF6&icon_color=06b6d4&text_color=c4b5fd&border_radius=14)](https://github.com/Muneerali199/Draftdeckai)
&nbsp;
[![Thunder](https://github-readme-stats.vercel.app/api/pin/?username=Muneerali199&repo=thunder&theme=tokyonight&hide_border=true&bg_color=0d0f1a&title_color=f59e0b&icon_color=ec4899&text_color=c4b5fd&border_radius=14)](https://github.com/Muneerali199/thunder)

</div>

<div align="center">

[![Uptime](https://github-readme-stats.vercel.app/api/pin/?username=Muneerali199&repo=uptime&theme=tokyonight&hide_border=true&bg_color=0d0f1a&title_color=06b6d4&icon_color=8B5CF6&text_color=c4b5fd&border_radius=14)](https://github.com/Muneerali199/uptime)

</div>

<br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                  ACTIVITY GRAPH                            -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">
<img width="96%" src="https://github-readme-activity-graph.vercel.app/graph?username=Muneerali199&bg_color=0d0f1a&color=8B5CF6&line=8B5CF6&point=06b6d4&area=true&area_color=8B5CF6&hide_border=true&radius=14&title_color=8B5CF6" />
</div>

<br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                    SPOTIFY                                 -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 52" width="96%">
  <defs>
    <linearGradient id="spotifyLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   style="stop-color:#1db954;stop-opacity:0"/>
      <stop offset="50%"  style="stop-color:#1db954;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:0"/>
    </linearGradient>
  </defs>
  <rect width="860" height="52" rx="12" fill="url(#secBg)" stroke="#1e2230" stroke-width="1"/>
  <rect x="0" y="50" width="860" height="2" rx="1" fill="url(#spotifyLine)"/>
  <text x="430" y="32" text-anchor="middle" font-family="JetBrains Mono, monospace"
        font-size="15" font-weight="bold" fill="white" letter-spacing="2">🎧  NOW PLAYING ON SPOTIFY</text>
</svg>
</div>

<div align="center">

[![Spotify](https://spotifygit.vercel.app/api/spotify)](https://open.spotify.com/user/31tpqnoarhpaxxz7226elu4w4muy)

</div>

<br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                 CONTRIBUTION SNAKE                         -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 52" width="96%">
  <defs>
    <linearGradient id="snakeLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   style="stop-color:#00FF41;stop-opacity:0"/>
      <stop offset="50%"  style="stop-color:#00FF41;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#7ee787;stop-opacity:0"/>
    </linearGradient>
  </defs>
  <rect width="860" height="52" rx="12" fill="url(#secBg)" stroke="#1e2230" stroke-width="1"/>
  <rect x="0" y="50" width="860" height="2" rx="1" fill="url(#snakeLine)"/>
  <text x="430" y="32" text-anchor="middle" font-family="JetBrains Mono, monospace"
        font-size="15" font-weight="bold" fill="white" letter-spacing="2">🐍  CONTRIBUTION SNAKE</text>
</svg>
</div>

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)"  srcset="https://raw.githubusercontent.com/Muneerali199/Muneerali199/output/github-contribution-grid-snake-dark.svg"/>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Muneerali199/Muneerali199/output/github-contribution-grid-snake.svg"/>
    <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/Muneerali199/Muneerali199/output/github-contribution-grid-snake.svg" width="96%"/>
  </picture>
</div>

<br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                    CONNECT                                 -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 52" width="96%">
  <defs>
    <linearGradient id="connectLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   style="stop-color:#8B5CF6;stop-opacity:0"/>
      <stop offset="30%"  style="stop-color:#8B5CF6;stop-opacity:1"/>
      <stop offset="70%"  style="stop-color:#ec4899;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:0"/>
    </linearGradient>
  </defs>
  <rect width="860" height="52" rx="12" fill="url(#secBg)" stroke="#1e2230" stroke-width="1"/>
  <rect x="0" y="50" width="860" height="2" rx="1" fill="url(#connectLine)"/>
  <text x="430" y="32" text-anchor="middle" font-family="JetBrains Mono, monospace"
        font-size="15" font-weight="bold" fill="white" letter-spacing="2">🌐  CONNECT WITH ME</text>
</svg>
</div>

<br/>

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-8B5CF6?style=for-the-badge&logo=vercel&logoColor=white)](https://muneerali.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/muneerali199)
[![Twitter / X](https://img.shields.io/badge/Twitter%20%2F%20X-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/muneerali199)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/Muneerali199)
[![Instagram](https://img.shields.io/badge/Instagram-ec4899?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/muneer.xyz)
[![LeetCode](https://img.shields.io/badge/LeetCode-f59e0b?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/muneerali199/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:alimuneerali245@gmail.com)

</div>

<br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                  DEV QUOTE                                 -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div align="center">

![Quote](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight&border=true)

</div>

<br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                 ANIMATED FOOTER                            -->
<!-- ═══════════════════════════════════════════════════════════ -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:8B5CF6,40:6d28d9,70:06b6d4,100:8B5CF6&height=110&section=footer&text=Thanks%20for%20visiting!&fontSize=20&fontColor=ffffff&animation=twinkling&fontAlignY=68&desc=Let%27s%20build%20something%20amazing%20together&descSize=13&descColor=c4b5fd&descAlignY=85" />
