'use client';
// Home "Why Himalayan Drop" section, layout "strata". The markup is static; this component adds the
// interactive behaviour. Styles are in app/globals.css under .why-strata.
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from './LangProvider';
import { localizeHref } from '@/lib/i18n';

const HTML = "<div class=\"wrap\">\n <div class=\"head\">\n  <div><span class=\"eyebrow\">Why Himalayan Drop</span><h2>Trust, <em>layer by layer.</em></h2></div>\n  <p class=\"sub\">Open each layer to see what stands behind every jar, from our promise on the surface down to the mountain it comes from.</p>\n </div>\n <div class=\"stack\" id=\"stack\"></div>\n</div>";

export default function WhyStrata() {
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

var L=[
 {k:'The promise',t:'60-day guarantee',r:'60 days',big:'60',u:'days to decide',p:'Use it for 60 days. If it is not for you, send it back and we refund you.',m:'How the guarantee works',href:'/policies/'},
 {k:'The standard',t:'Quality standards',r:'GMP · ISO',big:'GMP',u:'ISO 22000 · ISO 9001',p:'Produced under GMP and ISO food-safety standards. The certificates are on our certificates page for anyone to read.',m:'See the certificates',href:'/certificates/'},
 {k:'The proof',t:'Independently lab tested',r:'Third party',big:'Lab',u:'Third-party tested',p:'Each product is tested by an independent laboratory for heavy metals. The results are published on our lab results page.',m:'Read the lab results',href:'/lab-results/'},
 {k:'The home',t:'Designed in Denmark',r:'Denmark',big:'DK',u:'A Danish brand',p:'Himalayan Drop is a Danish brand. Designed in Denmark, sourced in the Himalayas, with the same care at every step.',m:'Meet the brand',href:'/our-story/'},
 {k:'The source',t:'Hand-harvested at 5,000 m',r:'5,000 m',big:'5,000 m',u:'Skardu, Pakistan',p:'Our shilajit comes from above 5,000 metres near Skardu, Pakistan, where it is collected by hand and brought down the mountain.',m:'Explore our shilajit',href:'/our-shilajit/'}
];
var JAR="/images/why/5df4feb9.webp", cur=4, stack=document.getElementById('stack');
// seeded wave so the strata edges stay the same on every load
var seed=11;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
function wave(){var pts=[],n=16;for(var i=0;i<=n;i++){pts.push([i/n*100,3+rnd()*15])}return pts}
var seam='<svg viewBox="0 0 1000 58" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a220c"/><stop offset=".35" stop-color="#150a05"/><stop offset="1" stop-color="#050203"/></linearGradient><linearGradient id="sh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f0b44c" stop-opacity="0"/><stop offset=".3" stop-color="#ffd98a" stop-opacity=".95"/><stop offset=".55" stop-color="#f0b44c" stop-opacity=".4"/><stop offset=".85" stop-color="#ffd98a" stop-opacity=".9"/><stop offset="1" stop-color="#f0b44c" stop-opacity="0"/></linearGradient></defs><path d="M0,22 C70,10 150,34 250,20 S430,6 540,22 S740,36 840,18 S960,8 1000,20 L1000,58 L0,58Z" fill="url(#sg)"/><g class="shine"><path d="M-40,22 C70,10 150,34 250,20 S430,6 540,22 S740,36 840,18 S960,8 1040,20" fill="none" stroke="url(#sh)" stroke-width="2.6" stroke-linecap="round"/><path d="M60,29 C150,20 230,34 330,27 S520,20 640,30" fill="none" stroke="#ffd98a" stroke-opacity=".28" stroke-width="1.4" stroke-linecap="round"/></g></svg>';
L.forEach(function(c,i){
 var dk=i>=2,w=wave();
 var clip=i?'polygon('+w.map(function(p){return p[0]+'% '+p[1]+'px'}).join(',')+',100% 100%,0 100%)':'none';
 var edge=i?'<svg class="edge" viewBox="0 0 100 22" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+w.map(function(p){return p[0]+','+p[1]}).join(' ')+'"/></svg>':'';
 var s=document.createElement('section');s.className='slab';s.style.setProperty('--z',i+1);s.dataset.i=i;
 s.innerHTML='<div class="rock l'+(i+1)+(dk?' dk':' light')+(i===4?' core':'')+'" style="--clip:'+clip+'">'+edge+
  '<button class="row" type="button" id="h'+i+'" aria-expanded="false" aria-controls="p'+i+'"><span class="lab"><small>'+c.k+'</small><b>'+c.t+'</b></span><span class="reading">'+c.r+'</span><span class="plus" aria-hidden="true"></span></button>'+
  '<div class="body" id="p'+i+'" role="region" aria-labelledby="h'+i+'"><div class="inner"><div class="cols"><div class="txt"><p>'+c.p+'</p><a class="more" href="'+H(c.href)+'">'+c.m+' &rarr;</a></div><div class="big">'+c.big+'<small>'+c.u+'</small></div>'+(i===4?'<img class="jar" src="'+JAR+'" alt="Himalayan Drop Shilajit Resin jar">':'')+'</div></div></div>'+
  (i===4?'<div class="seam">'+seam+'<span class="drip"></span></div>':'')+'</div>';
 s.querySelector('.row').addEventListener('click',function(){cur=cur===i?-1:i;sync()});
 stack.appendChild(s)});
// the last layer's rock carries the seam; keep it in the same clip box
function sync(){[].forEach.call(stack.children,function(s,i){var o=i===cur;s.classList.toggle('open',o);s.querySelector('.row').setAttribute('aria-expanded',o)})}
sync();

    return () => { root.removeEventListener('click', onClick); cleanup(); };
  }, [lang, router]);
  return <div className="why-strata" ref={ref} dangerouslySetInnerHTML={{ __html: HTML }} suppressHydrationWarning />;
}
