import{r as i,j as s,L as h}from"./index-8c65de2b.js";const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUCAYAAABroNZJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF9SURBVHgB7VRBVsIwEJ1JIj51U24QblDwAuUGHkFPwK4+XLHjPTbACdAb6Algr/B6A3IDusIFTcZJKYi1ii59z/9e02by82cmzQxCBXohBRcCOoR0BUQBIBog9xAv1H0VH8uGfkhaSjflT50bCAyzdLFs1lY0ewmmh3tEWURJmngBB27MG+rxQjasFQ329+jt59INv41kyGlspFux+1k8V+0yeXBpV/4dz2X9gwgvTDjk6EBWs3JKBOknjwgBAQR5igV4PlYEhAy9z58fgmoUwunOGXNTQqfzdAYtu/RGDhPhBygOf7lLW1WRBq3sGlB01hbb/k/km4SbWuFuui8nszJffBF2xGN4qrLQz6WwkY9UuIOzOybyW/yL/D0RdAmPCWSZyefSJXyVEydgVkXPbyzXDtcL6X74qrvJmbld1EZsHu1I8XPNizbfPdtw2wDQ7EUcZU+IMpKytuQ6MnAMRZPaCDveTgv0uV4UYoevfHBUA8lsuAXczZVvVPAGUJSXikwt4Y4AAAAASUVORK5CYII=",j=()=>{const[c,a]=i.useState([]),[t,l]=i.useState(1);i.useEffect(()=>{const e=localStorage.getItem("cartItems");e&&a(JSON.parse(e))},[]);const r=()=>{l(t+1)},d=()=>{t>1&&l(t-1)},A=e=>{const n=c.filter(o=>o.id!==e);a(n),localStorage.setItem("cartItems",JSON.stringify(n))};return s.jsxs("div",{className:"Card__page",children:[s.jsx("div",{className:"Restangle",children:s.jsxs("div",{className:"Restangle__block",children:[s.jsx("ul",{className:"ProductDetails__subtitle",children:s.jsx("li",{children:"Product Details"})}),s.jsxs("ul",{className:"info__cardPage",children:[s.jsx("li",{children:"Price"}),s.jsx("li",{children:"Quantity"}),s.jsx("li",{children:"shipping"}),s.jsx("li",{children:"subtotal"}),s.jsx("li",{children:"action"})]})]})}),c.length===0?s.jsx("p",{className:"notF__cardPage",children:"No items in the cart"}):s.jsxs("div",{className:"Card__list_p",children:[c.map(e=>s.jsxs("div",{className:"Card__item",children:[s.jsxs("div",{className:"CardPage__img",children:[s.jsx("img",{src:e.img,alt:e.title}),s.jsx("h3",{children:e.title})]}),s.jsxs("span",{children:["$",e.price*t,".00"]}),s.jsxs("div",{className:"Card__count",children:[s.jsx("button",{onClick:d,children:"-"}),t,s.jsx("button",{onClick:r,children:"+"})]}),s.jsx("p",{children:e.description}),s.jsx("button",{onClick:()=>A(e.id),children:s.jsx("img",{src:u,alt:"DeleteIcon"})})]},e.id)),s.jsx("div",{className:"Checkout",children:s.jsx(h,{to:"/checkout",children:s.jsx("button",{className:"Checkout__btn",children:"Checkout"})})})]})]})};export{j as default};
