!function(){var e,t,d;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),document.querySelector(".js-close-menu"),d=document.querySelector("[data-menu-btn]"),t.addEventListener("click",(function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is__open"),d.classList.toggle("is__open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(d){d.matches&&(e.classList.remove("is__open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"></span>'}}});var o=document.querySelector(".form__select"),a=o.querySelector(".form__select__title"),n=o.querySelectorAll(".form__select__label");a.addEventListener("click",(function(){"active"===o.getAttribute("data-state")?o.setAttribute("data-state",""):o.setAttribute("data-state","active")}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(e){a.textContent=e.target.textContent,o.setAttribute("data-state","")}));!function(){var e={openModalBuyBtn:document.querySelector("[data-modal-buy-open]"),closeModalBuyBtn:document.querySelector("[data-modal-buy-close]"),modalBuy:document.querySelector("[data-modal-buy]"),modalBuyLink:document.querySelector("[data-modal-buy-link]"),openModalAddBtn:document.querySelector("[data-modal-add-open]"),closeModalAddBtn:document.querySelector("[data-modal-add-close]"),modalAdd:document.querySelector("[data-modal-add]"),modalAddLink:document.querySelector("[data-modal-add-link]"),openModalContactsBtn:document.querySelector("[data-modal-contacts-open]"),closeModalContactsBtn:document.querySelector("[data-modal-contacts-close]"),modalContacts:document.querySelector("[data-modal-contacts]"),modalContactsLink:document.querySelector("[data-modal-contacts-link]")};function t(){e.modalBuy.classList.toggle("is-hidden")}function d(){e.modalAdd.classList.toggle("is-hidden")}function o(){e.modalContacts.classList.toggle("is-hidden")}e.openModalBuyBtn.addEventListener("click",t),e.closeModalBuyBtn.addEventListener("click",t),e.modalBuyLink.addEventListener("click",(function(){e.modalBuy.classList.add("is-hidden")})),e.openModalAddBtn.addEventListener("click",d),e.closeModalAddBtn.addEventListener("click",d),e.modalAddLink.addEventListener("click",(function(){e.modalAdd.classList.add("is-hidden")})),e.openModalContactsBtn.addEventListener("click",o),e.closeModalContactsBtn.addEventListener("click",o),e.modalContactsLink.addEventListener("click",(function(){e.modalContacts.classList.add("is-hidden")}))}()}();
//# sourceMappingURL=blog.1f487449.js.map
