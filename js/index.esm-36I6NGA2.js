import{a as u}from"./chunk-HJSTZ4VX.js";import"./chunk-CVDQTDTO.js";var r=e=>Array.isArray(e)?u.random(e[0],e[1]):e,C=(e,t)=>{for(t=t.toUpperCase();e;){if(e.nodeName===t)return!0;e=e.parentNode}return!1},I=(e,t)=>{let i=t.move.indexOf("emit");if(i>=0){let{emitRadius:n=[50,180]}=t.moveOptions[i]||{},s=u.random(0,360)*Math.PI/180,o=[-1,1][u.random(0,1)]*r(n);e.endPos={x:e.x+o*Math.cos(s),y:e.y+o*Math.sin(s)}}},L=(e,t)=>{let i=t.move.indexOf("rotate");if(i>=0){let{angle:n=[-180,180]}=t.moveOptions[i]||{};e.endRotation=r(n)}},E=e=>Array.isArray(e)?e.map(t=>t*100):[e*100,e*100],g=class{constructor(t,i,n,s,o,a,l){this.ctx=t,this.x=i,this.y=n,this.color=s,this.radius=o,this.alpha=a,this.lineWidth=l,this.rotation=0}draw(){let{ctx:t,x:i,y:n}=this;t.save(),t.translate(i,n),t.rotate(this.rotation*(Math.PI/180)),t.globalAlpha=this.alpha;let s=this.color;if(this.color.startsWith("var(")){let[,o]=this.color.match(/var\((--[^)]+)\)/)||[];o&&(s=getComputedStyle(document.documentElement).getPropertyValue(o).trim())}this.paint(),this.lineWidth?(t.lineWidth=this.lineWidth,t.strokeStyle=s,t.stroke()):(t.fillStyle=s,t.fill()),t.globalAlpha=1,t.restore()}},w=class extends g{paint(){let{ctx:t}=this;t.beginPath(),t.arc(0,0,this.radius,0,2*Math.PI),t.closePath()}},y=class extends g{constructor(t,i,n,s,o,a,l,c){super(t,i,n,s,o,a,c),this.sides=l}paint(){let{ctx:t,sides:i,radius:n}=this;t.beginPath(),t.moveTo(n*Math.cos(0),n*Math.sin(0));for(let s=1;s<=i;s++){let o=s*2*Math.PI/i;t.lineTo(n*Math.cos(o),n*Math.sin(o))}t.closePath()}},x=class extends g{constructor(t,i,n,s,o,a,l,c){super(t,i,n,s,o,a,c),this.spikes=l}paint(){let{ctx:t,spikes:i,radius:n}=this;t.beginPath(),t.moveTo(0,-n);for(let s=0;s<i*2;s++){let o=s*Math.PI/i-Math.PI/2,a=s%2===0?n:n*.5,l=Math.cos(o)*a,c=Math.sin(o)*a;t.lineTo(l,c)}t.closePath()}},R={circle:w,polygon:y,star:x},z=(e,t,i,n)=>{let s=R[n.shape],{shapeOptions:o,colors:a,number:l}=n,{radius:c,alpha:h=1,lineWidth:f}=o;return h=E(h),Array.from({length:r(l)},()=>{let m=a[u.random(0,a.length-1)],P=[e,t,i,m,r(c),r(h)/100];s===x?P.push(r(o.spikes)):s===y&&P.push(r(o.sides));let A=new s(...P,r(f));return I(A,n),L(A,n),A})},d=document.createElement("canvas");d.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";document.body.appendChild(d);var p=d.getContext("2d"),O=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?"touchstart":"click",T=0,W=0,M=()=>{if(!p)return;let{clientWidth:e,clientHeight:t}=document.documentElement;d.width=e*2,d.height=t*2,d.style.width=e+"px",d.style.height=t+"px",p.setTransform(1,0,0,1,0,0),p.scale(2,2)},S=e=>{var t,i;T=(t=e.clientX)!==null&&t!==void 0?t:e.touches&&e.touches[0].clientX,W=(i=e.clientY)!==null&&i!==void 0?i:e.touches&&e.touches[0].clientY},Y=e=>{let{move:t,moveOptions:i}=e,n={};return t.forEach((s,o)=>{if(s==="emit"){let{radius:a=.1,alphaChange:l=!1,alphaEasing:c="linear",alphaDuration:h=[600,800],alpha:f=0}=i[o]||{};n={x:m=>m.endPos.x,y:m=>m.endPos.y,radius:r(a)},l&&(n.alpha={value:r(E(f))/100,easing:c,duration:r(h)})}else if(s==="diffuse"){let{diffuseRadius:a=[80,160],lineWidth:l=0,alphaEasing:c="linear",alphaDuration:h=[600,800],alpha:f=0}=i[o]||{};n={radius:r(a),lineWidth:r(l),alpha:{value:r(E(f))/100,easing:c,duration:r(h)}}}else s==="rotate"&&(n.rotation=a=>a.endRotation)}),n},D=e=>{for(let t of e)t.draw()},N=u({duration:1/0,update(){p&&p.clearRect(0,0,d.width,d.height)}}),v=null,b=null,k=e=>{b=e,v&&document.removeEventListener(O,v,!1),v=t=>{e.excludeElements.some(i=>C(t.target,i))||(N.play(),S(t),X(T,W))},document.addEventListener(O,v,!1),M(),window.removeEventListener("resize",M,!1),window.addEventListener("resize",M,!1)},X=(e,t)=>{if(!b||!p)return;let{particles:i}=b,n=u().timeline();i.forEach(s=>{let{move:o,moveOptions:a}=s;s.move=Array.isArray(o)?o:[o],s.moveOptions=a?Array.isArray(a)?a:[a]:[],n.add({targets:z(p,e,t,s),duration:r(s.duration),easing:s.easing||"linear",update:D,...Y(s)})}),n.play()},H=e=>{document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>k(e),{passive:!0}):k(e)};export{H as default};
