// SELECTEURS
// document.querySelector("h4").style.background = "yellow"
// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.background = "red";
});

/* PRIORITE: <div> > #id > .class > baliseHTML */
//----------------------------------------------------------

//Mouse Events

const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(87,65,0,1)";
});
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(3deg)";
});
response.addEventListener("mouseout", () => {
  response.style.transform = "rotate(0deg)";
});

//----------------------------------------------------------

//KeyPress event
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  console.log(audio.src);
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (e.key === "z") ring(e.key);
});

// --------------------------------
// Scroll Event

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//---------------------------------
// Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    //Affiche le contenu des varibales
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//--------------------------

//Load event
window.addEventListener("load", () => {
  console.log("Document chargé !");
});
//----------------------------
// ForEach
const boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});
//---------------------------------------
// addEventListener Vs onclick

// document.body.onclick = () => {
//   console.log("click !");
// };
// document.body.onclick = () => {
//   console.log("scroll !");
// };
// = !! on ne peut pas propager 2 fois le meme evenement sur une balise avec cette méthode contrairement à addEventListener

//Bubbling => fin (de base l'eventlistener est paramétré en mode Bubbling)
document.body.addEventListener(
  "click",
  () => {
    console.log("clik 1!");
  },
  false
);

//Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2!");
  },
  true
);

//----------------------------------------------
//Stop propagation
questionContainer.addEventListener("click", (e) => {
  alert("Test !");
  e.stopPropagation();
});

//removEventListener

//-----------------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
//window.open("http://google.com", "cours js", "height=600", "width=800");
//window.close()

//Evénements adossés à Window
//alert("hello");

//confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

// prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");
  questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3";
});

//

setTimeout(() => {
  //logique à éxecuter
  questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += "<div class='box'><h2>Nouvelle Boite !</h2></div>";
// }, 1000);

// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });

//Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "https://bd-web.fr";
// };

//Navigator
// console.log(navigator.userAgent);
// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

/*var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Votre position actuelle est :");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);*/

//History

// console.log(window.history);
// window.history.back()
// history.go(-2)
//----------------------

//SetProperty----------------------------
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
