import{a as w,i as b,S as x}from"./assets/vendor-483db976.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const g of o.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const n={key:"42207525-2f984868f7881b9b68563ca8c",image_type:"photo",orientation:"horizontal",safesearch:!0,q:"",page:1,per_page:15};async function p(){return(await w.get("https://pixabay.com/api/",{params:n})).data}const O="/Axios/assets/octagon-7962080a.svg",S="/Axios/assets/close_button-de5d3efc.svg";function v(s,t,c,a){t.classList.remove("is-visible"),a.innerHTML+=s.map(e=>`<li class='gallery-item'><a class='gallery-link' href=${e.largeImageURL}><img class='gallery-img' src=${e.webformatURL} width='360' height='200' alt=${e.tags}><span class="img-loader"></span></a><ul class='desc-wrapper'><li class='desc-text'><h3>Likes</h3><p>${e.likes}</p></li><li class='desc-text'><h3>Views</h3><p>${e.views}</p></li><li class='desc-text'><h3>Comments</h3><p>${e.comments}</p></li><li class='desc-text'><h3>Downloads</h3><p>${e.downloads}</p></li></ul></li>`).join(""),c.refresh(),q()}function u(s,t,c){b.show({class:"my-iziToast",backgroundColor:"#EF4040",messageColor:"#fff",messageSize:16,messageLineHeight:"24",message:s,position:"topRight",iconUrl:O,progressBarColor:"#B51B1B;",close:!1,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",buttons:[[`<button type="button" style="background-color: #EF4040; padding-top: 15px; padding-bottom: 15px"><img src=${S}></button>`,function(a,e){a.hide({transitionOut:"fadeOutRight"},e)}]],onOpening:function(a,e){t.classList.remove("is-visible"),c.addEventListener("input",()=>{b.hide({transitionOut:"fadeOutRight"},e)},{once:!0})}})}function q(){document.querySelectorAll(".gallery-img").forEach(t=>t.addEventListener("load",()=>{t.nextSibling.classList.add("img-loader-hidden")}))}const m=document.querySelector(".form"),r=m.elements.text,f=document.querySelector(".gallery-container"),i=document.querySelector(".loader"),l=document.querySelector(".loader-button");let h,d;const L=new x(".gallery-link");m.addEventListener("submit",async s=>{if(s.preventDefault(),l.removeEventListener("click",y),l.classList.remove("is-visible"),f.innerHTML="",!r.value.trim())u("Search field can not be empty",i,r);else{i.classList.add("is-visible"),n.page=1,n.q=r.value;try{d=(await p()).hits;const t=(await p()).totalHits;d.length?(h=Math.ceil(t/n.per_page),v(d,i,L,f),h>1&&(l.classList.add("is-visible"),l.addEventListener("click",y),n.page+=1)):u("Sorry, there are no images matching your search query. Please, try again!",i,r)}catch(t){u("Oops! Something went wrong. Try again!",i,r),console.log(t)}}m.reset()});async function y(s){if(l.classList.remove("is-visible"),i.classList.add("is-visible"),n.page>h)l.removeEventListener("click",y),u("We're sorry, but you've reached the end of search results.",i,r);else try{d=(await p()).hits,v(d,i,L,f),n.page+=1,l.classList.add("is-visible"),R()}catch(t){u("Oops! Something went wrong. Try again!",i,r),console.log(t)}}function R(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height,t=Math.ceil(s*2.5);window.scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
