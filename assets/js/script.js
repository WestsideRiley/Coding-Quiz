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


function changeDisplay(){
  var change = document.getElementById("options");
  change.classList.replace("d-none", "d-flex");
}

function changeNext1(){
  var change = document.getElementById("Next1");
  change.classList.replace("d-none", "d-flex");
}

function changeNext2(){
  var change = document.getElementById("Next2");
  change.classList.replace("d-none", "d-flex");

  var change = document.getElementById("Next1");
  change.classList.replace("d-flex", "d-none");
}

function changeNext3(){
  var change = document.getElementById("Next3");
  change.classList.replace("d-none", "d-flex");

  var change = document.getElementById("Next2");
  change.classList.replace("d-flex", "d-none");
}

function changeNext4(){
  var change = document.getElementById("Next4");
  change.classList.replace("d-none", "d-flex");

  var change = document.getElementById("Next3");
  change.classList.replace("d-flex", "d-none");
}

function changeNext5(){
  var change = document.getElementById("Next5");
  change.classList.replace("d-none", "d-flex");

  var change = document.getElementById("Next4");
  change.classList.replace("d-flex", "d-none");
}



document.getElementById("StartQuiz").addEventListener("click",StartQuiz);
document.getElementById("StartQuiz").addEventListener("click", changeDisplay);
document.getElementById("StartQuiz").addEventListener("click", countdown);
document.getElementById("Next1").addEventListener("click", StartQuestion2)


function StartQuiz(){

  document.getElementById("StartQuiz").style.display="none";


  document.getElementById("question").innerText="A data type that can be represented as a value of true or false";

  document.getElementById("op1").innerText="Boolean";
  document.getElementById("op2").innerText="String";
  document.getElementById("op3").innerText="Element";
  document.getElementById("op4").innerText="Array";

  document.getElementById("op1").addEventListener("click", Answer1); 
  document.getElementById("op2").addEventListener("click", Answer2); 
  document.getElementById("op3").addEventListener("click", Answer3); 
  document.getElementById("op4").addEventListener("click", Answer4); 
 
  document.getElementById("op1").addEventListener("click", changeNext1);
  document.getElementById("op2").addEventListener("click", changeNext1);
  document.getElementById("op3").addEventListener("click", changeNext1);
  document.getElementById("op4").addEventListener("click", changeNext1);
  }

function StartQuestion2(){
  document.getElementById("question").innerText="A data type that can be represented as a value of true or false";

  document.getElementById("op1").innerText="Boolean";
  document.getElementById("op2").innerText="String";
  document.getElementById("op3").innerText="Element";
  document.getElementById("op4").innerText="Array";
}

function Answer1(){
  createResponse1=document.getElementById("options");
  createResponse1.innerHTML+= "Correct";
  var createResponse1 = "Correct";
}

function Answer2(){
  createResponse1=document.getElementById("options");
  createResponse1.innerHTML+= "Incorrect";
 
}

function Answer3(){
  createResponse1=document.getElementById("options");
  createResponse1.innerHTML+= "Incorrect";
}

function Answer4(){
  var createResponse1=document.getElementById("options");
  createResponse1.innerHTML+= "Incorrect";
  }
  