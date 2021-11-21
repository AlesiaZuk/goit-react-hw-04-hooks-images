(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={search_form:"Searchbar_search_form__1R3LV",search_button:"Searchbar_search_button__32d7i",search:"Searchbar_search__33C9i",search_container:"Searchbar_search_container__1Yjvd"}},14:function(e,t,a){e.exports={button:"Button_button__3BEgg",buttonIsHidden:"Button_buttonIsHidden__u1HIq"}},19:function(e,t,a){},4:function(e,t,a){e.exports={gallery_title:"ImageGallery_gallery_title__10svP",gallery_list:"ImageGallery_gallery_list__3pkXg",gallery_container:"ImageGallery_gallery_container__2Ayh1",button_container:"ImageGallery_button_container__any_j"}},42:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(6),o=a.n(r),l=(a(19),a(20),a(3)),i=a(11),s=a.n(i),u=a(0);var j=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],o=c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Search images"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),o("")},children:[Object(u.jsx)("label",{children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value.toLowerCase())},className:s.a.search_form,placeholder:"Search images...",required:!0})}),Object(u.jsx)("button",{type:"submit",className:s.a.search_button,children:"Search"})]})]})},b=a(12);var d=function(e,t){return fetch("".concat("https://pixabay.com/api","/?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=").concat(12,"&key=").concat("23521874-546d3070950852676c2506258")).then((function(e){return e.json()}))},m=a(13),g=a.n(m);var _=function(){return Object(u.jsx)(g.a,{type:"Circles",color:"#b89393",height:100,width:100,timeout:3e3})},h=a(8),O=a.n(h);function f(e){var t=e.img,a=e.toggleModal,n=e.onImgClick;function c(e){if(e.preventDefault(),"IMG"===e.target.nodeName){var t={};t.largeImageURL=e.target.dataset.source,t.alt=e.target.alt,a(),n(t)}}return t.map((function(e){return Object(u.jsx)("li",{className:O.a.gallery_item,children:Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:e.largeImageURL,className:O.a.gallery_link,onClick:c,children:Object(u.jsx)("img",{src:e.webformatURL,alt:e.tags,width:"370px",height:"250px",className:O.a.gallery_image,"data-source":e.largeImageURL})})})},e.id)}))}var x=Object(n.memo)(f),y=a(14),p=a.n(y);var v=function(e){var t=e.handelClick;return Object(u.jsx)("button",{type:"button",onClick:t,className:p.a.button,children:"Load more..."})},k=a(4),I=a.n(k),w="idle",N="pending",S="resolved",C="rejected";var L=function(e){var t=e.searchQuery,a=e.toggleModal,c=e.onImgClick,r=e.page,o=e.handelClick,i=Object(n.useState)([]),s=Object(l.a)(i,2),j=s[0],m=s[1],g=Object(n.useState)(!1),h=Object(l.a)(g,2),O=h[0],f=h[1],y=Object(n.useState)(w),p=Object(l.a)(y,2),k=p[0],L=p[1],R=Object(n.useCallback)((function(){t&&d(t,r).then((function(e){e.hits.length>0?(m((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e.hits.map((function(e){var t={};return t.id=e.webformatURL,t.largeImageURL=e.largeImageURL,t.webformatURL=e.webformatURL,t.tags=e.tags,t}))))})),L(S),function(e){e.totalHits>12&&12===e.hits.length?f(!0):f(!1)}(e)):L(C)}))}),[t,r]);return Object(n.useEffect)((function(){m([]),L(w)}),[t]),Object(n.useEffect)((function(){t&&(L(N),R())}),[R,t]),"idle"===k?Object(u.jsx)("h2",{className:I.a.gallery_title,children:"Enter a keyword..."}):"pending"===k?Object(u.jsxs)("div",{className:I.a.gallery_container,children:[Object(u.jsx)(_,{}),";"]}):"rejected"===k?Object(u.jsx)("h2",{className:I.a.gallery_title,children:"No image with keyword ".concat(t)}):"resolved"===k?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("section",{children:Object(u.jsx)("ul",{className:I.a.gallery_list,children:Object(u.jsx)(x,{img:j,toggleModal:a,onImgClick:c})})}),O&&Object(u.jsx)("div",{className:I.a.button_container,children:Object(u.jsx)(v,{handelClick:o})})]}):void 0},R=a(9),U=a.n(R),E=document.querySelector("#modal-root");var M=function(e){var t=e.onClose,a=e.children;function c(e){"Escape"===e.code&&t()}return Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}})),Object(r.createPortal)(Object(u.jsxs)("div",{className:U.a.modal_backdrop,onClick:function(e){e.currentTarget===e.target&&t()},children:[Object(u.jsx)("button",{type:"button",onClick:t,className:U.a.button,children:"X"}),Object(u.jsx)("div",{className:U.a.modal_content,children:a})]}),E)},G=["container"],q=["search"],B=["search_container"],H=["image"];var z=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),i=o[0],s=o[1],b=Object(n.useState)(!1),d=Object(l.a)(b,2),m=d[0],g=d[1],_=Object(n.useState)(1),h=Object(l.a)(_,2),O=h[0],f=h[1];function x(){g((function(e){return!e}))}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("main",{children:Object(u.jsxs)("div",{className:G,children:[Object(u.jsx)("section",{className:q,children:Object(u.jsx)("div",{className:B,children:Object(u.jsx)(j,{onSubmit:function(e){c(e.trim()),f(1)}})})}),Object(u.jsx)(L,{searchQuery:a,toggleModal:x,onImgClick:function(e){s(e)},page:O,handelClick:function(){f(O+1)}})]})}),m&&Object(u.jsx)(M,{onClose:x,children:Object(u.jsx)("img",{src:i.largeImageURL,alt:i.alt,className:H})})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={gallery_item:"ImageGalleryItem_gallery_item__2xZcQ",gallery_image:"ImageGalleryItem_gallery_image__2-mzz"}},9:function(e,t,a){e.exports={modal_backdrop:"Modal_modal_backdrop__KiPLi",modal_content:"Modal_modal_content__1vwmU",button:"Modal_button__37K_N"}}},[[42,1,2]]]);
//# sourceMappingURL=main.6118131c.chunk.js.map