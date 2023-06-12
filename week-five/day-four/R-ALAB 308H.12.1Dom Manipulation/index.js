var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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
    elem.subLinks = menuLinks[link].subLinks;
    topMenuEl.appendChild(elem);
  }
  let subMenuEl = document.querySelector("#sub-menu");
  subMenuEl.style.setProperty("height","100%");
  let subMenuElbgColor =  getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');
  subMenuEl.style.setProperty("background-color",subMenuElbgColor);
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.setProperty("position","absolute");
  subMenuEl.style.setProperty("top","0");
  
  let topMenuLinks = document.querySelectorAll("nav#top-menu a");
  //console.log(topMenuLinks);
  var showingSubMenu = false;
  topMenuEl.addEventListener("click",function(event) {
        event.preventDefault();
        var target = event.currentTarget;
        if (event.target.tagName.toLowerCase() != "a") {
            return;
        }
        else
        {
            console.log(event.target.href);
            console.log(event.target.innerText);
            if (event.target.classList.contains("active")) {
                event.target.classList.remove("active");
                showingSubMenu = false;
                subMenuEl.style.setProperty("top","0");
                return;
            }
            
            topMenuLinks.forEach(topMenuLink => {
                topMenuLink.classList.remove("active");
            });
            
            event.target.classList.add("active");
            console.log(event.target);
            if (Object.hasOwnProperty('subLinks')) {
                console.log("This link has a sub link!");
                showingSubMenu = true;
            }
            else
                showingSubMenu = false;
        }

  })

