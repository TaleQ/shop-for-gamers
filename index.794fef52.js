!function(){var e,n,t;e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),document.querySelector(".js-close-menu"),t=document.querySelector("[data-menu-btn]"),n.addEventListener("click",(function(){var o="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!o),e.classList.toggle("is__open"),t.classList.toggle("is__open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is__open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,n){return'<span class="'+n+'"></span>'}}})}();
//# sourceMappingURL=index.794fef52.js.map
