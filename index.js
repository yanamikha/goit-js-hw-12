import{a as q,i as l,S as k}from"./assets/vendor-CpJWJOGi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();let M="49718296-934511357bd75d639d0773032",B="https://pixabay.com/api/";async function p(i,o){return await q.get(B,{params:{key:M,q:i,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{let a={theme:"dark",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",icon:"fa-solid fa-triangle-exclamation",message:t};l.show(a)})}let f=document.querySelector("ul.gallery"),y=document.querySelector("#load-more-btn"),v=document.querySelector("#loader"),L=document.querySelector("#loaderText"),R=new k(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function w(i){if(i.length===0){let t={theme:"dark",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",icon:"fa-solid fa-triangle-exclamation",message:"Sorry, there are no images matching your search query. Please try again!"};l.show(t);return}let o=i.map(function(t){let{webformatURL:a,largeImageURL:e,tags:r,likes:n,views:x,comments:E,downloads:S}=t;return`<li class="gallery-item">
      <a href="${e}" class="gallery-link">
        <img
            class="gallery-image"
            src="${a}" 
            alt="${r}"
        />
        <div class="image-description">
          <div><h2>Likes</h2><p>${n}</p></div>
          <div><h2>Views</h2><p>${x}</p></div>
          <div><h2>Comments</h2><p>${E}</p></div>
          <div><h2>Downloads</h2><p>${S}</p></div>
        </div>
      </a>
      </li>
    `});f.innerHTML+=o.join(""),R.refresh()}function $(){f.innerHTML=""}function b(){L.innerHTML="Loading images, please wait...",v.classList.add("loader")}function h(){L.innerHTML=null,v.classList.remove("loader")}function m(){y.style.display="block"}function d(){y.style.display="none"}d();h();let g=document.querySelector("form"),s={theme:"dark",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",icon:"fa-solid fa-triangle-exclamation"},c="",u=1;g.addEventListener("submit",i=>{i.preventDefault(),$();let o=g.querySelector("input");if(c=o.value.trim(),s.message="Enter search param",!c){l.show(s);return}o.value="",p(c,1).then(t=>{var a=t.hits;b(),w(a),a.length>0?m():d(),h()}).catch(t=>{s.message=t,l.show(s)})});let P=document.querySelector("#load-more-btn");P.addEventListener("click",async()=>{u++,b(),d();try{p(c,u).then(i=>{var o=i.hits;if(o.length===0){l.show({message:"No image available."});return}w(o);let t=document.querySelector(".gallery-item");t&&window.scrollBy({top:window.innerHeight+t.getBoundingClientRect().height*2,behavior:"smooth"}),u*15>=i.totalHits?(d(),l.show({message:"We're sorry, but you've reached the end of search results."})):m()})}catch(i){let o={theme:"dark",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",icon:"fa-solid fa-triangle-exclamation",message:i};l.show(o)}finally{h(),m()}});
//# sourceMappingURL=index.js.map
