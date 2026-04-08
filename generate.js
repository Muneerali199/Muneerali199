import fs from 'fs/promises';
import satori from 'satori';
import { ReadmeUI } from './index.jsx';

async function generateMasterpiece() {
  console.log('Initiating Build Sequence: Cyber-Glass Framework w/ Ambient Animations...');

  const [interRegular, interBold, firaRegular] = await Promise.all([
    fs.readFile('./node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'),
    fs.readFile('./node_modules/@fontsource/inter/files/inter-latin-800-normal.woff'),
    fs.readFile('./node_modules/@fontsource/fira-code/files/fira-code-latin-400-normal.woff')
  ]);

  let svg = await satori(
    ReadmeUI(),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: interBold,
          weight: 800,
          style: 'normal',
        },
        {
          name: 'Fira Code',
          data: firaRegular,
          weight: 400,
          style: 'normal',
        }
      ],
    }
  );

  // THE SECRET SAUCE - RESPONSIVENESS AND ANIMATIONS
  // 1. Swap hardcoded width/height for viewBox to ensure perfect responsive scaling on Mobile/Desktop
  svg = svg.replace('width="1200" height="630"', 'viewBox="0 0 1200 630" width="100%" height="auto"');

  // 2. Inject CSS animations. Note: GitHub blocks raw cursor `:hover` events on <img> SVGs for security. 
  // To achieve the premium feeling you want, we inject Continuous Ambient Keyframe Animations instead.
  // This makes the graphic feel alive and breathing without requiring manual cursor interaction.
  const styleBlock = `
    <style>
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
      @keyframes pulseBackground {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
      }
      @keyframes dashAnim {
        to { stroke-dashoffset: -1000; }
      }
      @keyframes rotateOrbit {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      /* Bento Box Levitation */
      #card-1 { animation: float 8s ease-in-out infinite; }
      #card-2 { animation: float 8s ease-in-out infinite 1.5s; }
      #card-3 { animation: float 8s ease-in-out infinite 3s; }
      
      /* Deep Background Orbs Breathing */
      #bg-orb-1 { animation: pulseBackground 12s ease-in-out infinite; transform-origin: 200px 150px; }
      #bg-orb-2 { animation: pulseBackground 15s ease-in-out infinite reverse; transform-origin: 1000px 500px; }
      
      /* Pulse Heartbeat Flow */
      #pulse-line {
        stroke-dasharray: 20 40;
        stroke-dashoffset: 0;
        animation: dashAnim 4s linear infinite;
      }
      
      /* Orbiting Tech Stack */
      #orbit-group {
        animation: rotateOrbit 20s linear infinite;
      }
    </style>
  `;

  // Append style block right before closing SVG tag
  svg = svg.replace('</svg>', styleBlock + '</svg>');

  await fs.writeFile('readme-header.svg', svg);
  console.log('✅ Animated Masterpiece generated: readme-header.svg');
}

generateMasterpiece().catch(console.error);
