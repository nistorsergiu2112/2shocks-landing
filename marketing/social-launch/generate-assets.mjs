import { readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const require = createRequire('/Users/sergiunistorcosmin/Desktop/2shocks assets/2shocks-documents/brand/brand-assets-v2/package.json');
const { Resvg } = require('@resvg/resvg-js');
const out = fileURLToPath(new URL('.', import.meta.url));
const root = fileURLToPath(new URL('../../', import.meta.url));
const mark = readFileSync(root+'brand-assets/svg/2shocks-symbol-yellow.svg','utf8').replace(/<\?xml[^>]*>/g,'');
const symbol = (x,y,s) => `<svg x="${x}" y="${y}" width="${s}" height="${s}" viewBox="0 0 96 96">${mark.replace(/<svg[^>]*>/,'').replace(/<\/svg>\s*$/,'')}</svg>`;
const text = (x,y,s,t,color='#F5F5F2',weight=600) => `<text x="${x}" y="${y}" font-family="Arial" font-size="${s}" font-weight="${weight}" fill="${color}">${t}</text>`;
const render = (name,w,h,body) => {
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="#0B0B0F"/>${body}</svg>`;
  writeFileSync(out+name+'.svg',svg);
  writeFileSync(out+name+'.png',new Resvg(svg).render().asPng());
};
copyFileSync(root+'brand-assets/platform/2shocks-app-icon.png',out+'profile-logo.png');
render('launch-instagram-facebook',1080,1350,
 symbol(68,68,62)+text(152,116,48,'2Shocks')+
 text(72,241,21,'FOR UK MOTORCYCLE OWNERS','#F8CD47')+
 text(66,366,92,'Your bike’s')+text(66,468,92,'history.')+
 text(66,604,92,'Your next')+text(66,706,92,'service.')+
 text(66,842,102,'Together.','#F8CD47')+
 '<path d="M72 917H1008" stroke="#343439" stroke-width="2"/>'+
 text(72,986,28,'An app in the making. Ownership made simpler.','#C3C3C8',400)+
 text(72,1107,29,'COMING SOON','#F8CD47')+
 text(72,1167,32,'Follow the build.','#F5F5F2',400)+text(72,1263,26,'2shocks.com','#C3C3C8',400));
render('launch-x',1600,900,
 symbol(78,66,64)+text(165,115,46,'2Shocks')+
 text(80,244,22,'FOR UK MOTORCYCLE OWNERS','#F8CD47')+
 text(74,356,83,'Your bike’s history.')+text(74,462,83,'Your next service.')+
 text(74,581,94,'Together.','#F8CD47')+
 '<path d="M80 647H1520" stroke="#343439" stroke-width="2"/>'+
 text(80,719,30,'An app in the making. Follow the build.','#C3C3C8',400)+
 text(80,824,27,'COMING SOON','#F8CD47')+text(1270,824,27,'2shocks.com','#C3C3C8',400));
render('story-reel-cover',1080,1920,
 symbol(94,240,64)+text(182,288,48,'2Shocks')+
 text(94,493,23,'FOR UK MOTORCYCLE OWNERS','#F8CD47')+
 text(87,650,96,'Your bike’s')+text(87,760,96,'history.')+
 text(87,925,96,'Your next')+text(87,1035,96,'service.')+
 text(87,1200,105,'Together.','#F8CD47')+
 text(94,1390,29,'COMING SOON','#F8CD47')+
 text(94,1460,36,'Follow the build.','#F5F5F2',400)+text(94,1560,28,'2shocks.com','#C3C3C8',400));
console.log('Created profile logo and three PNG/SVG launch formats.');
