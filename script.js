// Récupération des différents éléments
const btn = document.querySelector(".btn");
const text = document.querySelector("#text");
const counter = document.querySelector(".counter");

// Ecoute de l'événement "click" sur le bouton "lire le texte"
btn.addEventListener("click", () => {
  // SpeechSynthesisUtterance de l'API Web Speech représente une requête vocale. Il contient le contenu que le service vocal doit lire et des informations sur la manière de le lire.
  let utterance = new SpeechSynthesisUtterance(text.value);
  //console.log(utterance);
  utterance.voice = window.speechSynthesis.getVoices()[0];
  //Afin de trouver toutes les voix supportées par votre navigateur et choisir la voix qui vous convient
  console.log(speechSynthesis.getVoices());
  window.speechSynthesis.speak(utterance);
});

// Déclaration de la fonction updateCounter qui permettre le calcul des lettres, espaces, signes de ponctuation, chiffres et symbole et bloque l'écriture d'autres éléments
const updateCounter = () => {
  counter.textContent =
    text.value.length + "/" + text.getAttribute("maxLength"); // Récupérer et afficher le longueur du texte saisi par l'internaute
  // remainingCounter.textContent =
  // textarea.getAttribute("maxLength") - textarea.value.length; // calcul du nombre restant de caractère à saisir
};

// Appel de la fonction updateCounter
updateCounter();

text.addEventListener("keyup", updateCounter);
