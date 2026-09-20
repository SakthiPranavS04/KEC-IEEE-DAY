import fs from 'node:fs';
import path from 'node:path';

const logos = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg',
    dest: 'public/assets/logos/ieee-master.svg'
  },
  {
    url: 'https://ieeeaps.org/images/home/main-logo-2025.svg',
    dest: 'public/assets/logos/aps-logo.svg'
  },
  {
    url: 'https://wie.ieee.org/wp-content/uploads/WIE-Logo-for-Website.png',
    dest: 'public/assets/logos/wie-logo.png'
  },
  {
    url: 'https://www.ieee-ras.org/wp-content/uploads/2025/05/ras_logo.png',
    dest: 'public/assets/logos/ras-logo.png'
  },
  {
    url: 'https://ieee-pes.org/wp-content/uploads/2022/12/ieee-pes-logo.png',
    dest: 'public/assets/logos/pes-logo.png'
  },
  {
    url: 'https://www.comsoc.org/themes/custom/betterment/components/images/comsoc-logo.svg',
    dest: 'public/assets/logos/comsoc-logo.svg'
  },
  {
    url: 'https://www.ieee-pels.org/wp-content/uploads/2023/12/PELS-Logo.png',
    dest: 'public/assets/logos/pels-logo.png'
  }
];

async function downloadAll() {
  for (const item of logos) {
    try {
      console.log(`Downloading ${item.url}...`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.error(`Failed ${item.url}: status ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(item.dest, buffer);
      console.log(`Saved ${item.dest} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${item.dest}:`, err.message);
    }
  }
}

downloadAll();
