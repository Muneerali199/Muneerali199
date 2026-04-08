import fs from 'fs/promises';
import satori from 'satori';
import { ReadmeUI } from './index.jsx';

async function generateMasterpiece() {
  console.log('Initiating Build Sequence: Cyber-Glass Framework...');

  // Use local .woff fonts instead of network .woff2
  const [interRegular, interBold, firaRegular] = await Promise.all([
    fs.readFile('./node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'),
    fs.readFile('./node_modules/@fontsource/inter/files/inter-latin-800-normal.woff'),
    fs.readFile('./node_modules/@fontsource/fira-code/files/fira-code-latin-400-normal.woff')
  ]);

  const svg = await satori(
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

  await fs.writeFile('readme-header.svg', svg);
  console.log('✅ Masterpiece generated: readme-header.svg');
}

generateMasterpiece().catch(console.error);
