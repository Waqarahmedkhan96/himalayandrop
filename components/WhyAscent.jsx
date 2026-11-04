'use client';
// Home "Why Himalayan Drop" section, layout "ascent". The markup is static; this component adds the
// interactive behaviour. Styles are in app/globals.css under .why-ascent.
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from './LangProvider';
import { localizeHref } from '@/lib/i18n';

const HTML = "<div class=\"wrap\">\n <section class=\"panel\" aria-labelledby=\"ttl\">\n  <div class=\"head\">\n   <div><span class=\"eyebrow\">Why Himalayan Drop</span><h2 id=\"ttl\">Climb to the <em>source.</em></h2></div>\n   <p class=\"sub\">Five reasons to trust us, from your door all the way up to 5,000 metres.</p>\n  </div>\n  <div class=\"stage\" id=\"stage\">\n   <svg class=\"ridge\" viewBox=\"0 0 1000 430\" preserveAspectRatio=\"none\" aria-hidden=\"true\">\n    <defs>\n     <linearGradient id=\"fillA\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#e2c487\" stop-opacity=\".30\"/><stop offset=\"1\" stop-color=\"#e2c487\" stop-opacity=\"0\"/></linearGradient>\n     <linearGradient id=\"fillB\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#b9566a\" stop-opacity=\".30\"/><stop offset=\"1\" stop-color=\"#b9566a\" stop-opacity=\"0\"/></linearGradient>\n     <linearGradient id=\"strokeG\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#b88c45\"/><stop offset=\".6\" stop-color=\"#e2c487\"/><stop offset=\"1\" stop-color=\"#f7e7bd\"/></linearGradient>\n    </defs>\n    <g class=\"grid\"><line x1=\"0\" x2=\"1000\" y1=\"105\" y2=\"105\"/><line x1=\"0\" x2=\"1000\" y1=\"185\" y2=\"185\"/><line x1=\"0\" x2=\"1000\" y1=\"265\" y2=\"265\"/><line x1=\"0\" x2=\"1000\" y1=\"345\" y2=\"345\"/></g>\n    <path class=\"back\" d=\"M0,430 L0,330 L60,296 L120,312 L200,262 L260,276 L340,218 L400,238 L480,176 L540,196 L620,126 L680,150 L760,92 L830,110 L900,70 L1000,70 L1000,430 Z\"/>\n    <path class=\"front\" d=\"M0,430 L0,392 L40,372 L80,356 L125,352 L165,330 L215,336 L260,300 L310,286 L360,270 L405,276 L440,246 L490,236 L540,214 L580,222 L620,190 L670,176 L720,160 L760,166 L800,134 L850,124 L890,118 L1000,118 L1000,430 Z\"/>\n    <path class=\"line\" pathLength=\"1\" d=\"M0,392 L40,372 L80,356 L125,352 L165,330 L215,336 L260,300 L310,286 L360,270 L405,276 L440,246 L490,236 L540,214 L580,222 L620,190 L670,176 L720,160 L760,166 L800,134 L850,124 L890,118 L1000,118\"/>\n   </svg>\n   <img class=\"jar\" src=\"/images/why/8e9ca5b8.webp\" alt=\"Himalayan Drop Shilajit Resin jar\" style=\"--jx:94;--jy:23\">\n   <ul class=\"camps\" id=\"camps\" role=\"tablist\" aria-label=\"Five reasons\"></ul>\n   <div class=\"ends\" aria-hidden=\"true\"><span>Your door</span><span>Skardu \u00b7 5,000 m+</span></div>\n  </div>\n  <div class=\"detail\" id=\"detail\" role=\"tabpanel\" aria-live=\"polite\"></div>\n </section>\n</div>";

export default function WhyAscent() {
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
    var ul0=root.querySelector('#camps');if(ul0)ul0.innerHTML='';
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a.more');
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
      e.preventDefault();
      router.push(a.getAttribute('href'));
    };
    root.addEventListener('click', onClick);

// x/y place each camp on the ridge (percent of stage width / height); they match the SVG points above.
var CAMPS=[
 {x:8,y:82.8,k:'Start here',t:'60-day guarantee',big:'60',unit:'days to decide',h:'Try it risk-free',p:'Use it for 60 days. If it is not for you, send it back and we refund you.',more:'How the guarantee works',href:'/policies/'},
 {x:26,y:69.8,k:'Made properly',t:'Quality standards',big:'GMP',unit:'ISO 22000 · ISO 9001',h:'Made to recognised standards',p:'Produced under GMP and ISO food-safety standards. The certificates are on our certificates page for anyone to read.',more:'See the certificates',href:'/certificates/'},
 {x:44,y:57.2,k:'Proven',t:'Independently lab tested',big:'Lab',unit:'Third-party tested',h:'Tested by an independent lab',p:'Each product is tested by an independent laboratory for heavy metals. The results are published on our lab results page.',more:'Read the lab results',href:'/lab-results/'},
 {x:62,y:44.2,k:'Our home',t:'Designed in Denmark',big:'DK',unit:'A Danish brand',h:'Designed in Denmark',p:'Himalayan Drop is a Danish brand. Designed in Denmark, sourced in the Himalayas, with the same care at every step.',more:'Meet the brand',href:'/our-story/'},
 {x:80,y:31.2,k:'The source',t:'Hand-harvested at 5,000 m',big:'5,000 m',unit:'Skardu, Pakistan',h:'Hand-harvested above 5,000 m',p:'Our shilajit comes from above 5,000 metres near Skardu, Pakistan, where it is collected by hand and brought down the mountain.',more:'Explore our shilajit',href:'/our-shilajit/'}
];
var cur=4,ul=document.getElementById('camps'),det=document.getElementById('detail'),stage=document.getElementById('stage');
var mq=window.matchMedia('(min-width:860px)');
CAMPS.forEach(function(c,i){
 var li=document.createElement('li');li.className='camp';li.style.setProperty('--x',c.x);li.style.setProperty('--y',c.y);
 li.innerHTML='<button type="button" role="tab" id="c'+i+'"><span class="dot"></span><span class="lab"><small>'+c.k+'</small><b>'+c.t+'</b></span></button>';
 li.firstChild.addEventListener('click',function(){cur=i;render()});
 li.firstChild.addEventListener('keydown',function(e){var d=e.key==='ArrowRight'||e.key==='ArrowDown'?1:e.key==='ArrowLeft'||e.key==='ArrowUp'?-1:0;if(!d)return;e.preventDefault();cur=(i+d+CAMPS.length)%CAMPS.length;render();document.getElementById('c'+cur).focus()});
 ul.appendChild(li)});
function render(){
 var c=CAMPS[cur];
 [].forEach.call(ul.children,function(li,i){li.classList.toggle('on',i===cur);var b=li.firstChild;b.setAttribute('aria-selected',i===cur);b.tabIndex=i===cur?0:-1});
 det.innerHTML='<div class="big">'+c.big+'<small>'+c.unit+'</small></div><div class="txt"><h3>'+c.h+'</h3><p>'+c.p+'</p><a class="more" href="'+H(c.href)+'">'+c.more+'&nbsp;<svg class="bolt" width="12" height="14" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.9 1 5.9 13.9h5.3L8.1 23l10-12.6h-5.3Z"/></svg></a></div>';
 det.setAttribute('aria-labelledby','c'+cur);
 det.style.animation='none';void det.offsetWidth;det.style.animation='';
 place();
}
function place(){ if(mq.matches){stage.after(det)} else {ul.children[cur].appendChild(det)} }
if(mq.addEventListener)mq.addEventListener('change',place);else mq.addListener(place);cleanup=function(){if(mq.removeEventListener)mq.removeEventListener('change',place);else mq.removeListener(place)};
render();

    return () => { root.removeEventListener('click', onClick); cleanup(); };
  }, [lang, router]);
  return <div className="why-ascent" ref={ref} dangerouslySetInnerHTML={{ __html: HTML }} suppressHydrationWarning />;
}
