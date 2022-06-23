const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', run)

function run() {
 const fName = document.querySelector('#firstName').value
 const fMidName = document.querySelector('#firstMiddle').value
 const lMidName = document.querySelector('#lastMiddle').value
 const lName = document.querySelector('#lastName').value

 const fullName =  `${fName} ${fMidName} ${lMidName} ${lName}`
 
   document.querySelector('#placeToYell').innerText = fullName
 
   let parentYelling = new SpeechSynthesisUtterance(fullName);
 
   synth.speak(parentYelling);
}