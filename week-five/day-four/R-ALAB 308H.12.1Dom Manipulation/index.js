var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector("main");
let bgColor =  getComputedStyle(document.documentElement).getPropertyValue('--main-bg');
mainEl.style.setProperty("background-color",bgColor);
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");
let topMenuEl = document.querySelector("nav#top-menu");
topMenuEl.style.setProperty("height","100%");
let topMenuElbgColor =  getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');
topMenuEl.style.setProperty("background-color",topMenuElbgColor);
topMenuEl.classList.add("flex-around");
for (const link in menuLinks) {
    let elem = document.createElement("a");
    elem.href = menuLinks[link].href;
    elem.innerText = menuLinks[link].text;
    topMenuEl.appendChild(elem);
  }
