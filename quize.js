
const questionIndex= 0;
const score = 0;

const currentTime= document.querySelector("#currentTime");
const timer =document.querySelector("#startTime");
const questionsEl = document.getElementById("questions");
const wrapper =document.querySelector("#wrapper");



const timeLeft= 15;
const penalty =10;
const hold= 0;
const ulCreate= document.createElement("ul");


timer.addEventListener("click", function(){
  if(hold===0){
    hold=setInterval(function(){
      timeLeft--;
      currentTime.textContent ="Time:" + timeLeft;
      
      if(timeLeft<=0){
        clearInterval(hold);
        allDone();
        currentTime.textContent= " Time is up";
      }

    }, 1000)

  }
  render(questionIndex)

});



function render(questionIndex){

  questionsEl.innerHTML ="";
  ulCreate.innerHTML ="";

  for ( i= 0; i< questions.length; i++){
    const userQeustions= questions[questionIndex].question;
    const userChoices = questions[questionIndex].choices;
    questionsEl.textContent= userQeustions;
  }

  userChoices.forEach(function (newItem){
    const listItem =document.createElement("li");
    listItem.textContent= newItem;
    questionsEl.appendChild(ulCreate);
    listItem.addEventListener("click",(compare));
  })
}

function compare(event){
  const element =event.target;

  if(element.matches("li")){

    const createDiv =document.createElement("div");
    createDiv.setAttribute("id", "createDiv");

    if(element.textContent == questions[questionIndex].answer){
        score++;
        createDiv.textContent = "Correct!";

      } else {
        timeLeft= timeLeft-penalty;
        createDiv.textContent= "Wrong!";
      }
    }


    questionIndex++;

if (questionIndex >=questions.length){
  allDone();
  createDiv.textContent = "Quize ended";

}else {
  render(questionIndex);

}
questionsEl.appendChild(createDiv);
}

function allDone(){
  currentTime.innerHTML ="";
  questionsEl.innerHTML="";

  const createHeader1= document.createElement("h1");
  createHeader1.setAttribute("id","createH1");
  createHeader1.textContent =" All Done!";
  questionsEl.appendChild(createHeader1);


const createParagraph= document.createElement("p");
    createParagraph.setAttribute("id", "createParagraph");
    questionsEl.appendChild(createParagraph);

    if (timeLeft >= 0) {
      const timeRemaining = secondsLeft;
      clearInterval(hold);
      createParagraph.textContent = "Your final score is: " + timeRemaining;
  }


  const createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsEl.appendChild(createLabel);

    const createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // initial and storage

    const initials = createInput.value;

    if (initials==null) {

        console.log("Plese enter your initials!");

    } else {
        const finalScore = {
            initials: initials,
            score: timeRemaining
        }
        console.log(finalScore);
        const  allScores = localStorage.getItem("allScores");
        if (allScores === 0) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        const newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
      
        window.location.replace("./highscore.html");
    }
});


}
