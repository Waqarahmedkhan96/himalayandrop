'use client';
// Home "Why Himalayan Drop" section, layout "core". The markup is static; this component adds the
// interactive behaviour. Styles are in app/globals.css under .why-core.
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from './LangProvider';
import { localizeHref } from '@/lib/i18n';

const HTML = "<div class=\"wrap\">\n <div class=\"head\">\n  <div><span class=\"eyebrow\">Why Himalayan Drop</span><h2>Trust, <em>layer by layer.</em></h2></div>\n  <p class=\"sub\">Five layers stand behind every jar. Tap one to read more, from the promise on the surface down to the mountain at the core.</p>\n </div>\n <div class=\"stack\"><div class=\"stackclip\" id=\"stack\"></div>\n  <svg class=\"vein\" id=\"vein\" viewBox=\"0 0 24 1000\" preserveAspectRatio=\"none\" aria-hidden=\"true\"><defs><linearGradient id=\"vg\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#3a220c\"/><stop offset=\".5\" stop-color=\"#150a05\"/><stop offset=\"1\" stop-color=\"#050203\"/></linearGradient></defs>\n   <path d=\"M12,0 C5,110 20,200 11,330 S4,520 13,650 S20,860 12,1000\" stroke=\"url(#vg)\" stroke-width=\"11\"/>\n   <path d=\"M9.4,0 C2.4,110 17.4,200 8.4,330 S1.4,520 10.4,650 S17.4,860 9.4,1000\" stroke=\"#f0b44c\" stroke-opacity=\".55\" stroke-width=\"1.5\"/>\n   <path class=\"glint\" d=\"M9.4,0 C2.4,110 17.4,200 8.4,330 S1.4,520 10.4,650 S17.4,860 9.4,1000\" stroke=\"#ffe3a0\" stroke-width=\"2.6\"/></svg>\n </div>\n</div>";

export default function WhyCore() {
  const ref = useRef(null);
  const router = useRouter();
  const lang = useLang();
  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const document = {
      getElementById: (id) => root.querySelector('#' + id),
      createElement: (t) => window.document.createElement(t),
    };
    const H = (h) => localizeHref(h, lang);
    let cleanup = () => {};
    var st0=root.querySelector('#stack');if(st0)st0.innerHTML='';
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a.more');
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
      e.preventDefault();
      router.push(a.getAttribute('href'));
    };
    root.addEventListener('click', onClick);

var S={guarantee:"/images/certs/guarantee.webp",gmp:"/images/certs/gmp.webp",i22:"/images/certs/iso22000.webp",i90:"/images/certs/iso9001.webp",metals:"/images/certs/lab-tested.webp"},JAR="/images/jars/resin-gold.webp";
var flag='<svg viewBox="0 0 200 200" aria-hidden="true"><defs><linearGradient id="fg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7e7bd"/><stop offset=".5" stop-color="#cca25e"/><stop offset="1" stop-color="#a8803f"/></linearGradient><clipPath id="fc"><circle cx="100" cy="100" r="78"/></clipPath></defs><circle cx="100" cy="100" r="96" fill="url(#fg)"/><circle cx="100" cy="100" r="86" fill="none" stroke="#7a5a28" stroke-opacity=".5" stroke-width="2"/><g clip-path="url(#fc)"><rect width="200" height="200" fill="#a8142a"/><rect x="62" width="26" height="200" fill="#fff"/><rect y="86" width="200" height="26" fill="#fff"/></g><circle cx="100" cy="100" r="78" fill="none" stroke="#f7e7bd" stroke-width="3"/></svg>';
var L=[
 {k:'The promise',g:'60',t:'60-day guarantee',e:'Try it for 60 days. Not for you? Send it back for a refund.',p:'Use it for 60 days. If it is not for you, send it back and we refund you.',m:'How the guarantee works',href:'/policies/',med:'<img src="'+S.guarantee+'" alt="60 days guarantee seal">',cls:''},
 {k:'The standard',g:'GMP',mid:1,t:'Quality standards',e:'Produced to GMP, ISO 22000 and ISO 9001 standards.',p:'Produced under GMP and ISO food-safety standards. The certificates are on our certificates page for anyone to read.',m:'See the certificates',href:'/certificates/',med:'<img src="'+S.gmp+'" alt="GMP certified seal"><img src="'+S.i22+'" alt="ISO 22000 certified seal"><img src="'+S.i90+'" alt="ISO 9001 certified seal">',cls:' trio'},
 {k:'The proof',g:'Lab',t:'Independently lab tested',e:'Independent lab results for heavy metals, published for everyone.',p:'Each product is tested by an independent laboratory for heavy metals. The results are published on our lab results page.',m:'Read the lab results',href:'/lab-results/',med:'<img src="'+S.metals+'" alt="Heavy metals tested seal">',cls:''},
 {k:'The home',g:'DK',t:'Designed in Denmark',e:'Designed in Denmark, sourced in the Himalayas.',p:'Himalayan Drop is a Danish brand. Designed in Denmark, sourced in the Himalayas, with the same care at every step.',m:'Meet the brand',href:'/our-story/',med:flag,cls:' flag'},
 {k:'The source',g:'5,000 m',t:'Hand-harvested at 5,000 m',e:'Collected by hand near Skardu, Pakistan.',p:'Our shilajit comes from above 5,000 metres near Skardu, Pakistan, where it is collected by hand and brought down the mountain.',m:'Explore our shilajit',href:'/our-shilajit/',med:'<img src="'+JAR+'" alt="Himalayan Drop Shilajit Resin jar">',cls:' jar',long:1}
];
var cur=innerWidth<900?-1:0,stack=document.getElementById('stack');
var seed=11;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
function wave(){var pts=[],n=16;for(var i=0;i<=n;i++){pts.push([i/n*100,3+rnd()*15])}return pts}
var seam='<svg viewBox="0 0 1000 58" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a220c"/><stop offset=".35" stop-color="#150a05"/><stop offset="1" stop-color="#050203"/></linearGradient><linearGradient id="sh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f0b44c" stop-opacity="0"/><stop offset=".3" stop-color="#ffd98a" stop-opacity=".95"/><stop offset=".55" stop-color="#f0b44c" stop-opacity=".4"/><stop offset=".85" stop-color="#ffd98a" stop-opacity=".9"/><stop offset="1" stop-color="#f0b44c" stop-opacity="0"/></linearGradient></defs><path d="M0,22 C70,10 150,34 250,20 S430,6 540,22 S740,36 840,18 S960,8 1000,20 L1000,58 L0,58Z" fill="url(#sg)"/><g class="shine"><path d="M-40,22 C70,10 150,34 250,20 S430,6 540,22 S740,36 840,18 S960,8 1040,20" fill="none" stroke="url(#sh)" stroke-width="2.6" stroke-linecap="round"/><path d="M60,29 C150,20 230,34 330,27 S520,20 640,30" fill="none" stroke="#ffd98a" stroke-opacity=".28" stroke-width="1.4" stroke-linecap="round"/></g></svg>';
L.forEach(function(c,i){
 var dk=i>=2,w=wave();
 var clip=i?'polygon('+w.map(function(p){return p[0]+'% '+p[1]+'px'}).join(',')+',100% 100%,0 100%)':'none';
 var edge=i?'<svg class="edge" viewBox="0 0 100 22" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+w.map(function(p){return p[0]+','+p[1]}).join(' ')+'"/></svg>':'';
 var s=document.createElement('section');s.className='slab';s.style.setProperty('--z',i+1);
 s.innerHTML='<div class="rock l'+(i+1)+(dk?' dk':' light')+(i===4?' core':'')+'" style="--clip:'+clip+'">'+edge+
  '<button class="row" type="button" id="h'+i+'" aria-expanded="false" aria-controls="p'+i+'"><span class="giant'+(c.long?' g-long':'')+(c.mid?' g-mid':'')+'">'+c.g+'</span><span class="lab"><small>'+c.k+'</small><b>'+c.t+'</b><em>'+c.e+'</em></span></button>'+
  '<span class="plus" aria-hidden="true"></span>'+
  '<div class="body" id="p'+i+'" role="region" aria-labelledby="h'+i+'"><div class="inner"><div class="more-wrap"><p>'+c.p+'</p><a class="more" href="'+H(c.href)+'">'+c.m+' &rarr;</a></div></div></div>'+
  (i===4?'<div class="seam">'+seam+'<span class="drip"></span></div>':'')+'</div>'+
  '<div class="medal'+c.cls+'">'+c.med+'</div>';
 s.querySelector('.row').addEventListener('click',function(){cur=cur===i?-1:i;sync()});
 s.querySelector('.plus').addEventListener('click',function(){cur=cur===i?-1:i;sync()});
 s.querySelector('.plus').style.pointerEvents='auto';s.querySelector('.plus').style.cursor='pointer';
 stack.appendChild(s)});
function sync(){[].forEach.call(stack.children,function(s,i){var o=i===cur;s.classList.toggle('open',o);s.querySelector('.row').setAttribute('aria-expanded',o)})}
sync();

    return () => { root.removeEventListener('click', onClick); cleanup(); };
  }, [lang, router]);
  return <div className="why-core" ref={ref} dangerouslySetInnerHTML={{ __html: HTML }} suppressHydrationWarning />;
}
