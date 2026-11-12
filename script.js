const nav=document.querySelector('.nav');const menuBtn=document.querySelector('.menu-btn');const menu=document.querySelector('#menu');
const siteLoader=document.querySelector('#site-loader');
const loaderStart=performance.now();
const finishLoader=()=>{const minimum=matchMedia('(prefers-reduced-motion: reduce)').matches?100:1500;const elapsed=performance.now()-loaderStart;setTimeout(()=>{document.body.classList.remove('is-loading');document.body.classList.add('site-ready');if(siteLoader)setTimeout(()=>siteLoader.remove(),900)},Math.max(0,minimum-elapsed))};
if(document.readyState==='complete')finishLoader();else addEventListener('load',finishLoader,{once:true});
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});
menuBtn.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});}
document.querySelector('#quote-form').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const message=`Hello Saiprasad Glass & Aluminium,%0A%0AName: ${encodeURIComponent(data.get('name'))}%0APhone: ${encodeURIComponent(data.get('phone'))}%0AService: ${encodeURIComponent(data.get('service'))}%0AProject details: ${encodeURIComponent(data.get('details')||'Not specified')}`;window.open(`https://wa.me/919604363657?text=${message}`,'_blank','noopener')});
document.querySelector('#year').textContent=new Date().getFullYear();

// Subtle architectural depth, enabled only for precise pointers.
if(!reduced&&matchMedia('(pointer:fine)').matches){
  const precision=document.querySelector('.precision-break');
  const precisionImage=document.querySelector('.precision-image');
  if(precision&&precisionImage){
    precision.addEventListener('pointermove',e=>{const r=precision.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;precisionImage.style.transform=`scale(1.035) translate(${x*-12}px,${y*-10}px)`});
    precision.addEventListener('pointerleave',()=>precisionImage.style.transform='');
  }
  document.querySelectorAll('.project').forEach(card=>card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',`${((e.clientX-r.left)/r.width)*100}%`);card.style.setProperty('--my',`${((e.clientY-r.top)/r.height)*100}%`)}));
}
