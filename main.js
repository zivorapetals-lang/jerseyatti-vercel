// Image paths used across the site
var IMG={
  "r1": "assets/r1.jpg",
  "r2": "assets/r2.jpg",
  "ind": "assets/ind.jpg",
  "chg": "assets/chg.jpg",
  "fb": "assets/fb.jpg",
  "cr": "assets/cr.jpg",
  "gp": "assets/gp.jpg",
  "logo": "assets/logo.png"
};

// Set src for every <img data-i="key">
document.querySelectorAll("img[data-i]").forEach(function(e){e.src=IMG[e.getAttribute("data-i")]});

(function(){
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.15});
  els.forEach(function(e){io.observe(e)});
})();
(function(){
var D=[{c:'Authentic',t:'Authentic home',d:'Modern club-style home kit',s:'stripes',a:'#8e1c32',b:'#f2f0ea'},
{c:'Authentic',t:'Authentic away',d:'Clean white away kit',s:'plain',a:'#f2f0ea',b:'#14233f'},
{c:'Retro',t:'Retro hoops',d:'Classic hooped shirt',s:'hoops',a:'#1f4fa8',b:'#f2f0ea'},
{c:'Retro',t:'Retro sash',d:'Vintage sash design',s:'sash',a:'#f2f0ea',b:'#b8294a'},
{c:'Special editions',t:'Tricolour special',d:'Independence Day edition',s:'tri',a:'#ffffff',b:'#1a2a8a'},
{c:'Tees',t:'Classic tee',d:'Everyday football tee',s:'tee',a:'#0b0b0b',b:'#f2f0ea'},
{c:'Team kits',t:'Team squad kit',d:'Name and number for every player',s:'plain',a:'#1d3b8b',b:'#f2f0ea'}];
var C=['All','Authentic','Retro','Tees','Special editions','Team kits'];
var CO=[['Claret','#8e1c32'],['Blue','#1f4fa8'],['Black','#0b0b0b'],['White','#f2f0ea'],['Green','#138808'],['Gold','#e8a317'],['Purple','#6b2fa0']];
var SZ=['XS','S','M','L','XL','XXL'];
var S={i:0,a:D[0].a,b:D[0].b,n:'',u:'',z:'M',lg:'',lp:'left',ls:1,v:'back'},cat='All';
function $(i){return document.getElementById(i)}
function jersey(o){
 var p=o.s==='tee'?'M125 70L165 52Q200 85 235 52L275 70L330 105L305 150L282 135L282 340Q200 352 118 340L118 135L95 150L70 105Z':'M120 70L165 52Q200 90 235 52L280 70L350 120L318 172L282 150L282 340Q200 356 118 340L118 150L82 172L50 120Z';
 var id='c'+Math.random().toString(36).slice(2,8),f='',i;
 if(o.s==='stripes')for(i=0;i<9;i++)f+='<rect x="'+(50+i*36)+'" y="40" width="18" height="330" fill="'+o.b+'"/>';
 if(o.s==='hoops')for(i=0;i<8;i++)f+='<rect x="40" y="'+(60+i*38)+'" width="320" height="19" fill="'+o.b+'"/>';
 if(o.s==='sash')f='<polygon points="30,130 130,60 370,290 270,360" fill="'+o.b+'"/>';
 if(o.s==='tri')f='<rect x="40" y="40" width="320" height="110" fill="#ff9933"/><rect x="40" y="150" width="320" height="110" fill="#fff"/><rect x="40" y="260" width="320" height="120" fill="#138808"/>';
 var v=o.v||'back',n=(o.n||'').toUpperCase(),st='fill="#fff" stroke="#000" stroke-width="6" stroke-linejoin="round" paint-order="stroke" text-anchor="middle"',t='';
 if(n&&v==='back')t+='<text x="200" y="150" '+st+' font-family="Barlow Condensed,sans-serif" font-weight="700" letter-spacing="4" font-size="'+Math.max(14,24-Math.max(0,n.length-7)*1.6)+'">'+n.replace(/[<>&]/g,'')+'</text>';
 if(o.u!==''&&v==='back')t+='<text x="200" y="270" '+st+' font-family="Bodoni Moda,serif" font-weight="900" font-size="110">'+(+o.u)+'</text>';
 if(o.lg){var Q={left:[250,128,48,'front'],centre:[200,176,84,'front'],back:[200,98,46,'back']}[o.lp||'left'];if(Q[3]===v){var z=Q[2]*(o.ls||1);t+='<image href="'+o.lg+'" x="'+(Q[0]-z/2)+'" y="'+(Q[1]-z/2)+'" width="'+z+'" height="'+z+'" preserveAspectRatio="xMidYMid meet"/>'}}
 return '<svg viewBox="0 0 400 400" role="img" aria-label="Jersey preview"><defs><clipPath id="'+id+'"><path d="'+p+'"/></clipPath></defs><g clip-path="url(#'+id+')"><rect width="400" height="400" fill="'+o.a+'"/>'+f+'</g><path d="'+p+'" fill="none" stroke="#f2f0ea" stroke-width="3" stroke-linejoin="round"/><path d="M165 52Q200 90 235 52" fill="none" stroke="'+o.b+'" stroke-width="7"/>'+t+'</svg>';
}
var P=[{c:'Retro',t:'Retro white shirt',d:'Classic retro, number 10',img:IMG.r1,k:2},
{c:'Retro',t:'Retro long sleeve',d:'Classic retro, number 7',img:IMG.r2,k:3},
{c:'Special editions',t:'Independence Day',d:'Tricolour special edition',img:IMG.ind,k:4},
{c:'Team kits',t:'Chelsea Chargers',d:'Custom kit and crest, est. 2025',img:IMG.chg,k:6},
{c:'Team kits',t:'Football squad',d:'Tournament kits with names and numbers',img:IMG.fb,k:6},
{c:'Team kits',t:'Cricket squad',d:'Matching whites for the whole team',img:IMG.cr,k:6},
{c:'Tees',t:'Group tees',d:'Matching tees for a whole team',img:IMG.gp,k:5}];
function grid(){
 var g=$('grid');g.innerHTML='';
 var L=P.concat(D.map(function(d,k){return {c:d.c,t:d.t,d:d.d,k:k,dr:d}}).filter(function(x){return x.c==='Authentic'}));
 L.forEach(function(x){
  if(cat!=='All'&&x.c!==cat)return;
  var b=document.createElement('button');b.className='card';b.type='button';b.style.animationDelay=(g.children.length*70)+'ms';
  b.innerHTML=(x.img?'<span class="ph"><img src="'+x.img+'" alt="'+x.t+'" loading="lazy"></span>':jersey({s:x.dr.s,a:x.dr.a,b:x.dr.b,n:'',u:''}))+'<h3>'+x.t+'</h3><p>'+x.d+'</p><b>Customise</b>';
  b.onclick=function(){var d=D[x.k];S.i=x.k;S.a=d.a;S.b=d.b;$('dz').value=x.k;sw();draw();$('custom').scrollIntoView({behavior:'smooth'})};
  b.onmousemove=function(e){var r=b.getBoundingClientRect();b.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*10+'deg');b.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*10+'deg')};
  b.onmouseleave=function(){b.style.setProperty('--rx','0deg');b.style.setProperty('--ry','0deg')};
  g.appendChild(b);
 });
}
function tabs(){
 var t=$('tabs');t.innerHTML='';
 C.forEach(function(c){var b=document.createElement('button');b.type='button';b.className='tab'+(c===cat?' on':'');b.textContent=c;b.onclick=function(){cat=c;tabs();grid()};t.appendChild(b)});
}
function sw(){
 [['sa','a'],['sb','b']].forEach(function(x){
  var w=$(x[0]);w.innerHTML='';
  CO.forEach(function(c){var b=document.createElement('button');b.type='button';b.title=c[0];b.setAttribute('aria-label',c[0]);b.style.background=c[1];if(S[x[1]]===c[1])b.className='on';b.onclick=function(){S[x[1]]=c[1];sw();draw()};w.appendChild(b)});
 });
}
function szs(){
 var w=$('sz');w.innerHTML='';
 SZ.forEach(function(z){var b=document.createElement('button');b.type='button';b.textContent=z;if(S.z===z)b.className='on';b.onclick=function(){S.z=z;szs();draw()};w.appendChild(b)});
}
function cn(h){for(var i=0;i<CO.length;i++)if(CO[i][1]===h)return CO[i][0];return h}
function draw(){
 var d=D[S.i],pv=$('pv');
 pv.innerHTML=jersey({s:d.s,a:S.a,b:S.b,n:S.n,u:S.u,lg:S.lg,lp:S.lp,ls:S.ls,v:S.v});
 pv.classList.remove('pop');void pv.offsetWidth;pv.classList.add('pop');
 $('msg').value='Hi Jersey Atti! I would like to order:\nDesign: '+d.t+'\nColours: '+cn(S.a)+' with '+cn(S.b)+' trim\nName: '+(S.n.toUpperCase()||'none')+'\nNumber: '+(S.u===''?'none':S.u)+'\nSize: '+S.z+'\nLogo: '+(S.lg?LN[S.lp]+' (I will send the file in this DM)':'none')+'\nPlease share the price and delivery details.';
}
var dz=$('dz');
D.forEach(function(d,k){var o=document.createElement('option');o.value=k;o.textContent=d.t+' ('+d.c+')';dz.appendChild(o)});
dz.onchange=function(){S.i=+dz.value;S.a=D[S.i].a;S.b=D[S.i].b;sw();draw()};
$('nm').oninput=function(){S.n=this.value;S.v='back';vts();draw()};
$('nu').oninput=function(){var v=this.value.replace(/\D/g,'').slice(0,2);S.u=v;S.v='back';vts();draw()};
$('cp').onclick=function(){var m=$('msg'),b=this;m.select();function ok(){b.textContent='Copied. Paste it in the DM.';setTimeout(function(){b.textContent='Copy message'},2500)}
 try{if(navigator.clipboard){navigator.clipboard.writeText(m.value).then(ok,function(){document.execCommand('copy')&&ok()})}else if(document.execCommand('copy'))ok()}catch(e){}};
document.querySelectorAll('.fl').forEach(function(e,k){e.innerHTML='<img src="'+(k?IMG.r2:IMG.r1)+'" alt="">'});
window.addEventListener('scroll',function(){var h=document.documentElement;$('prog').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
var LN={left:'Left chest',centre:'Centre chest',back:'Back, under the collar'};
function pills(id,items,key,fn){var w=$(id);w.innerHTML='';items.forEach(function(x){var b=document.createElement('button');b.type='button';b.textContent=x[1];if(S[key]===x[0])b.className='on';b.onclick=function(){fn(x[0])};w.appendChild(b)})}
function lps(){pills('lp',[['left','Left chest'],['centre','Centre chest'],['back','Back']],'lp',function(k){S.lp=k;S.v=k==='back'?'back':'front';lps();vts();draw()})}
function vts(){pills('vt',[['front','Front'],['back','Back']],'v',function(k){S.v=k;vts();draw()})}
$('lgf').onchange=function(){var f=this.files[0],m=$('lgm');if(!f)return;
 if(!/^image\//.test(f.type)||f.size>8e6){m.textContent='Please choose an image file under 8 MB.';return}
 var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var out=r.result;
  try{var W=im.width||512,H=im.height||512,s=Math.min(1,512/Math.max(W,H)),cv=document.createElement('canvas');cv.width=Math.max(1,Math.round(W*s));cv.height=Math.max(1,Math.round(H*s));cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);out=cv.toDataURL('image/png')}catch(e){}
  S.lg=out;S.v=S.lp==='back'?'back':'front';$('lgo').hidden=false;$('lgx').hidden=false;m.textContent='Logo added. Attach the same file in the DM.';lps();vts();draw()};
  im.onerror=function(){m.textContent='We could not read that image. Try a PNG or JPG.'};im.src=r.result};r.readAsDataURL(f)};
$('lgx').onclick=function(){S.lg='';$('lgf').value='';$('lgo').hidden=true;this.hidden=true;$('lgm').textContent='PNG, JPG, WebP or SVG. The logo stays in your browser. Attach the same file in the DM.';draw()};
$('ls').oninput=function(){S.ls=this.value/100;draw()};
lps();vts();
tabs();grid();sw();szs();draw();
})();

(function(){
var b=document.body,rm=matchMedia('(prefers-reduced-motion:reduce)').matches,hov=matchMedia('(hover:hover)').matches,intro=document.getElementById('intro');
function go(){b.classList.add('go');b.classList.remove('lock')}
var nm=document.querySelector('.shirt .name');
if(nm){var t=nm.textContent;nm.setAttribute('aria-label',t);nm.innerHTML='';t.split('').forEach(function(c,i){var s=document.createElement('span');s.setAttribute('aria-hidden','true');s.style.setProperty('--i',i);s.textContent=c;nm.appendChild(s)})}
if(rm||!intro){if(intro)intro.remove();go()}else{
 var c=document.getElementById('cnt'),bar=document.getElementById('bar'),lab=document.getElementById('lab'),t0=performance.now(),done=false;
 var fin=function(){if(done)return;done=true;c.textContent='90\u2032';bar.style.width='100%';lab.textContent='Full time';intro.classList.add('out');setTimeout(go,350);setTimeout(function(){intro.remove()},1300)};
 var tick=function(now){var p=Math.min(1,(now-t0)/2200),e=1-Math.pow(1-p,2.2);if(done)return;c.textContent=Math.round(e*90)+'\u2032';bar.style.width=(e*100)+'%';if(p<1)requestAnimationFrame(tick);else fin()};
 requestAnimationFrame(tick);document.getElementById('sk').onclick=fin;
}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.3});
document.querySelectorAll('section h2').forEach(function(h){if(h.children.length)return;var w=h.textContent.trim().split(/\s+/);h.innerHTML=w.map(function(x,i){return '<span class="w"><span style="--i:'+i+'">'+x+'</span></span>'}).join(' ');h.classList.add('sp');io.observe(h)});
var tr=document.getElementById('track');
if(tr){var ks=['r1','ind','chg','fb','r2','cr','gp'];ks.concat(ks).forEach(function(k){var s=document.createElement('span');s.className='ph';s.innerHTML='<img src="'+IMG[k]+'" alt="" loading="lazy">';tr.appendChild(s)})}
var hero=document.querySelector('.hero');
if(hero&&hov&&!rm)hero.addEventListener('mousemove',function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;hero.style.setProperty('--sx',(x*-16)+'px');hero.style.setProperty('--sy',(y*-12)+'px');hero.style.setProperty('--mx',(x*24)+'px');hero.style.setProperty('--my',(y*18)+'px')});
var tl=document.getElementById('tl'),fill=document.getElementById('tlf');
function tlu(){if(!tl)return;var r=tl.getBoundingClientRect(),m=innerHeight*.62;fill.style.height=Math.max(0,Math.min(r.height-36,m-r.top))+'px';tl.querySelectorAll('li').forEach(function(l){l.classList.toggle('on',l.getBoundingClientRect().top<m)})}
addEventListener('scroll',tlu,{passive:true});tlu();
var cu=document.getElementById('cur');
if(cu&&hov&&!rm){var cx=0,cy=0,tx=0,ty=0;addEventListener('mousemove',function(e){tx=e.clientX;ty=e.clientY;cu.style.opacity=1});
 (function f(){cx+=(tx-cx)*.18;cy+=(ty-cy)*.18;cu.style.transform='translate('+(cx-17)+'px,'+(cy-17)+'px) scale('+(cu.classList.contains('big')?1.7:1)+')';requestAnimationFrame(f)})();
 document.addEventListener('mouseover',function(e){cu.classList.toggle('big',!!e.target.closest('a,button,select,input'))})}
})();
