var timerEl = document.getElementById('countdown');


function countdown() {
  var timeLeft =  120;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
    } 
    else if (timeLeft === 1) {
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
    } 
    else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
  }, 1000);
}


function StartQuiz(){

document.getElementById("StartQuiz").style.display="none";

document.getElementById('StartQuiz').id='Next1';

document.getElementById("question").innerText="A data type that can be represented as a value of true or false";

document.getElementById("op1").innerText="Boolean";
document.getElementById("op2").innerText="String";
document.getElementById("op3").innerText="Element";
document.getElementById("op4").innerText="Array";

document.getElementById("op1").onclick = function(){
var createResponse=document.getElementById("options");
createResponse.innerHTML+= "Correct";
}

document.getElementById("op2").onclick = function(){
var createResponse=document.getElementById("options");
createResponse.innerHTML+= "Incorrect";

}

document.getElementById("op3").onclick = function(){
var createResponse=document.getElementById("options");
createResponse.innerHTML+= "Incorrect";
}

document.getElementById("op4").onclick = function(){
var createResponse=document.getElementById("options");
createResponse.innerHTML+= "Incorrect";
}


};
