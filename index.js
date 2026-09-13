import{a as S,S as q,i as n}from"./assets/vendor-CpJWJOGi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();let x="49718296-934511357bd75d639d0773032",M="https://pixabay.com/api/";async function B(r,t,a){return await S.get(M,{params:{key:x,q:r,page:t,per_page:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).catch(i=>{throw i})}let h=document.querySelector("ul.gallery"),p=document.querySelector("#load-more-btn"),f=document.querySelector("#loader"),y=document.querySelector("#loaderText"),$=new q(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function k(r){if(r.length===0){let a={theme:"dark",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",icon:"fa-solid fa-triangle-exclamation",message:"Sorry, there are no images matching your search query. Please try again!"};n.show(a);return}let t=r.map(function(a){let{webformatURL:i,largeImageURL:e,tags:o,likes:l,views:w,comments:b,downloads:E}=a;return`<li class="gallery-item">
      <a href="${e}" class="gallery-link">
        <img
            class="gallery-image"
            src="${i}" 
            alt="${o}"
        />
        <div class="image-description">
          <div><h2>Likes</h2><p>${l}</p></div>
          <div><h2>Views</h2><p>${w}</p></div>
          <div><h2>Comments</h2><p>${b}</p></div>
          <div><h2>Downloads</h2><p>${E}</p></div>
        </div>
      </a>
      </li>
    `});h.innerHTML+=t.join(""),$.refresh()}function P(){h.innerHTML=""}function R(){y.innerHTML="Loading images, please wait...",f.classList.add("loader")}function v(){y.innerHTML=null,f.classList.remove("loader")}function T(){p.style.display="block"}function d(){p.style.display="none"}d();v();let u=document.querySelector("form"),m={theme:"dark",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",icon:"fa-solid fa-triangle-exclamation"},c="",s=1,g=15,L=()=>B(c,s,g).then(r=>{var t=r.data.hits;if(t.length===0){n.show({message:"No image available."});return}k(t);let a=document.querySelector(".gallery-item");a&&window.scrollBy({top:window.innerHeight+a.getBoundingClientRect().height,behavior:"smooth"}),s*g>=r.totalHits?(d(),n.show({message:"We're sorry, but you've reached the end of search results."})):T()});u.addEventListener("submit",r=>{r.preventDefault(),P();let t=u.querySelector("input");if(c=t.value.trim(),m.message="Enter search param",!c){n.show(m);return}t.value="",s=1,L()});let H=document.querySelector("#load-more-btn");H.addEventListener("click",async()=>{s++,R(),d();try{L(c,s)}catch(r){let t={theme:"dark",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",icon:"fa-solid fa-triangle-exclamation",message:r};n.show(t)}finally{v()}});
//# sourceMappingURL=index.js.map
