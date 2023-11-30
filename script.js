// Récupération des différents éléments
const btn = document.querySelector(".btn");
const text = document.querySelector("#text");

// Ecoute de l'événement "click" sur le bouton "lire le texte"
btn.addEventListener("click", () => {
  // SpeechSynthesisUtterance de l'API Web Speech représente une requête vocale. Il contient le contenu que le service vocal doit lire et des informations sur la manière de le lire.
  let utterance = new SpeechSynthesisUtterance(text.value);
  //console.log(utterance);
  utterance.voice = window.speechSynthesis.getVoices()[0];
  //console.log(speechSynthesis.getVoices());
  window.speechSynthesis.speak(utterance);
});
