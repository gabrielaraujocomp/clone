// === Combined from inline <script> blocks (Framer export) ===

// --- block 1 ---
try{if(localStorage.get("__framer_force_showing_editorbar_since")){const n=document.createElement("link");n.rel = "modulepreload";n.href="https://framer.com/edit/init.mjs";document.head.appendChild(n)}}catch(e){}

// --- block 2 ---
(()=>{function u(){function n(t,e,i){let r=document.createElement("a");r.href=t,r.target=i,r.rel=e,document.body.appendChild(r),r.click(),r.remove()}function o(t){if(this.dataset.hydrated){this.removeEventListener("click",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;if(/Mac|iPod|iPhone|iPad/u.test(navigator.userAgent)?t.metaKey:t.ctrlKey)return n(e,"","_blank");let r=this.getAttribute("rel")??"",c=this.getAttribute("target")??"";n(e,r,c)}function a(t){if(this.dataset.hydrated){this.removeEventListener("auxclick",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");e&&n(e,"","_blank")}function s(t){if(this.dataset.hydrated){this.removeEventListener("keydown",s);return}if(t.key!=="Enter")return;t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;let i=this.getAttribute("rel")??"",r=this.getAttribute("target")??"";n(e,i,r)}document.querySelectorAll("[data-nested-link]").forEach(t=>{t instanceof HTMLElement&&(t.addEventListener("click",o),t.addEventListener("auxclick",a),t.addEventListener("keydown",s))})}return u})()()

// --- block 3 ---
(()=>{function i(){for(let e of document.querySelectorAll("[data-framer-original-sizes]")){let t=e.getAttribute("data-framer-original-sizes");t===""?e.removeAttribute("sizes"):e.setAttribute("sizes",t),e.removeAttribute("data-framer-original-sizes")}}function a(){window.__framer_onRewriteBreakpoints=i}return a})()()

// --- block 4 ---
!function(){var w="framer_variant";function u(a,r){let n=r.indexOf("#"),t=n===-1?r:r.substring(0,n),i=n===-1?"":r.substring(n),e=t.indexOf("?"),h=e===-1?t:t.substring(0,e),d=e===-1?"":t.substring(e),s=new URLSearchParams(d),g=new URLSearchParams(a);for(let[o,l]of g)s.has(o)||o!==w&&s.append(o,l);let c=s.toString();return c===""?t+i:h+"?"+c+i}var p='div#main a[href^="#"],div#main a[href^="/"],div#main a[href^="."]',f="div#main a[data-framer-preserve-params]",m,S=(m=document.currentScript)==null?void 0:m.hasAttribute("data-preserve-internal-params");if(window.location.search&&!/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(navigator.userAgent)){let a=document.querySelectorAll(S?`${p},${f}`:f);for(let r of a){let n=u(window.location.search,r.href);r.setAttribute("href",n)}}
}()

// --- block 5 ---


