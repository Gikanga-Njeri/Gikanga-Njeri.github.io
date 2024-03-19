const containerEl = document.querySelector(".container");

const careers = ["Instructor","Graphic Designer", "Web Developer", "Freelancer", "Virtual Assistant", "Entertainer"];

let careerindex = 0;

let characterIndex = 0;

let vowelE = careers[careerindex].slice(0,1) ===  "E" ? "an" : "a";

// let vowelI = careers[careerindex].slice(0,1) ===  "I" ? "an" : "a";

updateText();

function updateText(){
  characterIndex++;
  containerEl.innerHTML = 
  `<h1>Welcome to my page viewers</h1>
  <h2>I 
am ${vowelE} ${careers[careerindex].slice(0,characterIndex)}</h2>
<h3>Thank you </h3>`;

if(characterIndex === careers[careerindex].length){
  careerindex++
  characterIndex = 0
}

if(careerindex === careers.length){
  careerindex =0;
}
setTimeout(updateText,200)
}