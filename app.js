// create an instance of object
let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

// it will add voice options
window.speechSynthesis.onvoiceschanged = () => {
   voices = window.speechSynthesis.getVoices();
   speech.voice = voices[0];

   voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

// it will change speech voice that is selected on dropdown
voiceSelect.addEventListener("change", () => {
   speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener('click', () => {
   speech.text = document.querySelector("textarea").value;
   window.speechSynthesis.speak(speech);
})