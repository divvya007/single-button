// let container = document.getElementById("container");
// // creating home div
// let navBarHome = document.createElement("div");
// navBarHome.innerHTML = "Home";
// navBarHome.id = "home";
// navBarHome.className = "navBarElements";
let navBar = document.getElementById("nav");
navBar.className = "navBar";
let navigation = document.createElement("div");
navigation.innerHTML = "Menu";
navigation.className = "menuContents";
navBar.append(navigation);
// creating search bar
let searchBar = document.createElement("input");
searchBar.type = "searchBar";
searchBar.className = "search";
navBar.append(searchBar);

//creating dropbox
let dropBox = document.createElement("div");
dropBox.className = "dropBox";
navigation.append(dropBox);

// creating dropbox contents
let contentLink = document.createElement("ul");
contentLink.id = "contentLink";
dropBox.append(contentLink);

let contentHome = document.createElement("li");
contentHome.innerHTML = "Home";
contentLink.appendChild(contentHome);

let contentAbout = document.createElement("li");
contentAbout.innerHTML = "About";
contentLink.appendChild(contentAbout);

let contentContact = document.createElement("li");
contentContact.innerHTML = "Contact";
contentLink.appendChild(contentContact);

navigation.addEventListener("click", myFunction);
function myFunction() {
  if (dropBox.style.display == "none") {
    dropBox.style.display = "block";
  } else {
    dropBox.style.display = "none";
  }
}

// container.append(navBarHome);
// // creating contact div
// let navBarContact = document.createElement("div");
// navBarContact.innerHTML = "Contact";
// navBarContact.id = "contact";
// navBarContact.className = "navBarElements";
// container.append(navBarContact);

// // news div

// let navBarNews = document.createElement("div");
// navBarNews.innerHTML = "News";
// navBarNews.id = "news";
// navBarNews.className = "navBarElements";
// container.append(navBarNews);

// // about div
// let navBarAbout = document.createElement("div");
// navBarAbout.innerHTML = "About";
// navBarAbout.id = "about";
// navBarAbout.className = "navBarElements";
// container.append(navBarAbout);
