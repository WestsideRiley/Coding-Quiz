var timerEl = document.getElementById('countdown');

//Countdown function for the timer 
function countdown() {
  var timeLeft =  120;

    function LoseTime(){
      timeLeft-=10;
    }
    
    function StopTime(){
      clearInterval(timeInterval);
      
    }

    document.getElementById("Next5").addEventListener("click", StopTime);
    document.getElementById("Next6").addEventListener("click", StopTime);

    function SaveFinalTime(){

    }
    //Criteria for losing time

    { document.getElementById("op2").addEventListener("click", LoseTime); 
      document.getElementById("op3").addEventListener("click", LoseTime); 
      document.getElementById("op4").addEventListener("click", LoseTime); 
      document.getElementById("op5").addEventListener("click", LoseTime); 
      document.getElementById("op6").addEventListener("click", LoseTime); 
      document.getElementById("op8").addEventListener("click", LoseTime); 
      document.getElementById("op9").addEventListener("click", LoseTime); 
      document.getElementById("op10").addEventListener("click", LoseTime); 
      document.getElementById("op11").addEventListener("click", LoseTime); 
      document.getElementById("op12").addEventListener("click", LoseTime); 
      document.getElementById("op13").addEventListener("click", LoseTime); 
      document.getElementById("op14").addEventListener("click", LoseTime); 
      document.getElementById("op15").addEventListener("click", LoseTime); 
      document.getElementById("op17").addEventListener("click", LoseTime); 
      document.getElementById("op18").addEventListener("click", LoseTime); 
      document.getElementById("op20").addEventListener("click", LoseTime); 
    }

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


//Functions for Switching buttons to move from one question to another. 
{
function changeDisplay(){
  var change = document.getElementById("options1");
  change.classList.replace("d-none", "d-flex");
}

function changeDisplay2(){
  var change = document.getElementById("options2");
  change.classList.replace("d-none", "d-flex");

  var change = document.getElementById("options1");
  change.classList.replace("d-flex", "d-none");
}

function changeDisplay3(){
  var change = document.getElementById("options3");
  change.classList.replace("d-none", "d-flex");

  var change = document.getElementById("options2");
  change.classList.replace("d-flex", "d-none");
}

function changeDisplay4(){
  var change = document.getElementById("options4");
  change.classList.replace("d-none", "d-flex");

  var change = document.getElementById("options3");
  change.classList.replace("d-flex", "d-none");
}

function changeDisplay5(){
  var change = document.getElementById("options5");
  change.classList.replace("d-none", "d-flex");

  var change = document.getElementById("options4");
  change.classList.replace("d-flex", "d-none");
}

function changeDisplay6(){
  var change = document.getElementById("options6");
  change.classList.replace("d-none", "d-flex");

  var change = document.getElementById("options5");
  change.classList.replace("d-flex", "d-none");

  var change = document.getElementById("question");
  change.classList.replace("d-flex", "d-none");
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

function changeNext6(){
  var change = document.getElementById("Next6");
  change.classList.replace("d-none", "d-flex");

  var change = document.getElementById("Next5");
  change.classList.replace("d-flex", "d-none");
}

function clearResponse(){
  document.getElementById("generateResponse").innerText=""
}
}

//Click events for switching to the correct button and beginning the timer when the Start button is clicked
{
document.getElementById("StartQuiz").addEventListener("click", changeDisplay);
document.getElementById("Next1").addEventListener("click",changeDisplay2);
document.getElementById("Next2").addEventListener("click",changeDisplay3);
document.getElementById("Next3").addEventListener("click",changeDisplay4);
document.getElementById("Next4").addEventListener("click",changeDisplay5);
document.getElementById("Next5").addEventListener("click",changeDisplay6);
document.getElementById("Next5").addEventListener("click",changeNext6);
document.getElementById("StartQuiz").addEventListener("click", countdown);
}

//Click events for going from one question to the next
{
document.getElementById("StartQuiz").addEventListener("click",StartQuiz);
document.getElementById("Next1").addEventListener("click",StartQuestion2);
document.getElementById("Next2").addEventListener("click",StartQuestion3);
document.getElementById("Next3").addEventListener("click",StartQuestion4);
document.getElementById("Next4").addEventListener("click",StartQuestion5);
document.getElementById("Next5").addEventListener("click",StartEndPage);
}

//Click event to ensure that the response after each question is cleared
{
document.getElementById("Next1").addEventListener("click", clearResponse);
document.getElementById("Next2").addEventListener("click", clearResponse);
document.getElementById("Next3").addEventListener("click", clearResponse);
document.getElementById("Next4").addEventListener("click", clearResponse);
document.getElementById("Next5").addEventListener("click", clearResponse);
}

//Click event to ensure that the buttons are enabled when the user moves to the next question
{
document.getElementById("Next1").addEventListener("click", enable);
document.getElementById("Next2").addEventListener("click", enable);
document.getElementById("Next3").addEventListener("click", enable);
document.getElementById("Next4").addEventListener("click", enable);
document.getElementById("Next5").addEventListener("click", enable);
}

//Function that starts the quiz and move to the first question
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
  
  document.getElementById("op1").addEventListener("click", disable);
  document.getElementById("op2").addEventListener("click", disable);
  document.getElementById("op3").addEventListener("click", disable);
  document.getElementById("op4").addEventListener("click", disable);
 
  document.getElementById("op1").addEventListener("click", changeNext1);
  document.getElementById("op2").addEventListener("click", changeNext1);
  document.getElementById("op3").addEventListener("click", changeNext1);
  document.getElementById("op4").addEventListener("click", changeNext1);

}

//Function for filling in the second question
function StartQuestion2(){

  document.getElementById("question").innerText="_________ means there is no value. It holds a value, but not a real value";

  document.getElementById("op5").innerText="Variable";
  document.getElementById("op6").innerText="Array";
  document.getElementById("op7").innerText="Null";
  document.getElementById("op8").innerText="Object";

  document.getElementById("op5").addEventListener("click", Answer5); 
  document.getElementById("op6").addEventListener("click", Answer6); 
  document.getElementById("op7").addEventListener("click", Answer7); 
  document.getElementById("op8").addEventListener("click", Answer8); 
  
  document.getElementById("op5").addEventListener("click", disable);
  document.getElementById("op6").addEventListener("click", disable);
  document.getElementById("op7").addEventListener("click", disable);
  document.getElementById("op8").addEventListener("click", disable);
 
  document.getElementById("op5").addEventListener("click", changeNext2);
  document.getElementById("op6").addEventListener("click", changeNext2);
  document.getElementById("op7").addEventListener("click", changeNext2);
  document.getElementById("op8").addEventListener("click", changeNext2);


  }


//Function for fillin in the third question
function StartQuestion3(){

  document.getElementById("question").innerText="_________ is a data type that invokes a block of code when called";

  document.getElementById("op9").innerText="Array";
  document.getElementById("op10").innerText="Function";
  document.getElementById("op11").innerText="Null";
  document.getElementById("op12").innerText="Boolean";

  document.getElementById("op9").addEventListener("click", Answer9); 
  document.getElementById("op10").addEventListener("click", Answer10); 
  document.getElementById("op11").addEventListener("click", Answer11); 
  document.getElementById("op12").addEventListener("click", Answer12); 
 
  document.getElementById("op9").addEventListener("click", disable);
  document.getElementById("op10").addEventListener("click", disable);
  document.getElementById("op11").addEventListener("click", disable);
  document.getElementById("op12").addEventListener("click", disable);

  document.getElementById("op9").addEventListener("click", changeNext3);
  document.getElementById("op10").addEventListener("click", changeNext3);
  document.getElementById("op11").addEventListener("click", changeNext3);
  document.getElementById("op12").addEventListener("click", changeNext3);
}

//Function for filling in the fourth question
function StartQuestion4(){

  document.getElementById("question").innerText="_________is also a group of data but in the form of a key:value pair. ";

  document.getElementById("op13").innerText="Variable";
  document.getElementById("op14").innerText="Array";
  document.getElementById("op15").innerText="Null";
  document.getElementById("op16").innerText="Object";

  document.getElementById("op13").addEventListener("click", Answer13); 
  document.getElementById("op14").addEventListener("click", Answer14); 
  document.getElementById("op15").addEventListener("click", Answer15); 
  document.getElementById("op16").addEventListener("click", Answer16); 

  document.getElementById("op13").addEventListener("click", disable);
  document.getElementById("op14").addEventListener("click", disable);
  document.getElementById("op15").addEventListener("click", disable);
  document.getElementById("op16").addEventListener("click", disable);
 
  document.getElementById("op13").addEventListener("click", changeNext4);
  document.getElementById("op14").addEventListener("click", changeNext4);
  document.getElementById("op15").addEventListener("click", changeNext4);
  document.getElementById("op16").addEventListener("click", changeNext4);
}

//Function for fillin in the fifth question
function StartQuestion5(){

  document.getElementById("question").innerText="_________ is a mathematical symbol that produces a result based on two values (or variables)";

  document.getElementById("op17").innerText="Variable";
  document.getElementById("op18").innerText="Array";
  document.getElementById("op19").innerText="Operator";
  document.getElementById("op20").innerText="Object";

  document.getElementById("op17").addEventListener("click", Answer17); 
  document.getElementById("op18").addEventListener("click", Answer18); 
  document.getElementById("op19").addEventListener("click", Answer19); 
  document.getElementById("op20").addEventListener("click", Answer20); 

  document.getElementById("op17").addEventListener("click", disable);
  document.getElementById("op18").addEventListener("click", disable);
  document.getElementById("op19").addEventListener("click", disable);
  document.getElementById("op20").addEventListener("click", disable);
 
  document.getElementById("op17").addEventListener("click", changeNext5);
  document.getElementById("op18").addEventListener("click", changeNext5);
  document.getElementById("op19").addEventListener("click", changeNext5);
  document.getElementById("op20").addEventListener("click", changeNext5);
}

//Function for moving to the Final Score Page
function StartEndPage(){

  document.getElementById("question").innerText="_________ means there is no value. It holds a value, but not a real value";

  document.getElementById("op1").innerText="Variable";
  document.getElementById("op2").innerText="Array";
  document.getElementById("op3").innerText="Null";
  document.getElementById("op4").innerText="Object";

  document.getElementById("op1").addEventListener("click", Answer5); 
  document.getElementById("op2").addEventListener("click", Answer6); 
  document.getElementById("op3").addEventListener("click", Answer7); 
  document.getElementById("op4").addEventListener("click", Answer8); 
 
  document.getElementById("op1").addEventListener("click", changeNext2);
  document.getElementById("op2").addEventListener("click", changeNext2);
  document.getElementById("op3").addEventListener("click", changeNext2);
  document.getElementById("op4").addEventListener("click", changeNext2);
}

//Parameters for defining the Responses of each question
{
function Answer1(){
  document.getElementById("generateResponse").innerText="Correct"
}

function Answer2(){
  document.getElementById("generateResponse").innerText="Incorrect"
}

function Answer3(){
  document.getElementById("generateResponse").innerText="Incorrect"
}

function Answer4(){
  document.getElementById("generateResponse").innerText="Incorrect"
}

function Answer5(){
  document.getElementById("generateResponse").innerText="Incorrect"    
}
  
function Answer6(){
  document.getElementById("generateResponse").innerText="Incorrect"
}
  
function Answer7(){
  document.getElementById("generateResponse").innerText="Correct"
}
  
function Answer8(){
  document.getElementById("generateResponse").innerText="Incorrect"
}

function Answer9(){
  document.getElementById("generateResponse").innerText="Incorrect"    
}
  
function Answer10(){
  document.getElementById("generateResponse").innerText="Correct"
  }
  
function Answer11(){
  document.getElementById("generateResponse").innerText="Incorrect"
}
  
function Answer12(){
  document.getElementById("generateResponse").innerText="Incorrect"
}

function Answer13(){
  document.getElementById("generateResponse").innerText="Incorrect"    
}
  
function Answer14(){
  document.getElementById("generateResponse").innerText="Incorrect"
}
  
function Answer15(){
  document.getElementById("generateResponse").innerText="Incorrect"
}
  
function Answer16(){
  document.getElementById("generateResponse").innerText="Correct"
}

function Answer17(){
  document.getElementById("generateResponse").innerText="Incorrect"    
}
  
function Answer18(){
  document.getElementById("generateResponse").innerText="Incorrect"
}
  
function Answer19(){
  document.getElementById("generateResponse").innerText="Correct"
}
  
function Answer20(){
  document.getElementById("generateResponse").innerText="Incorrect"
}
}

//Function for disabling the ability select a new answer once one has been selected
function disable(){
      document.getElementById("op1").disabled=true; 
      document.getElementById("op2").disabled=true;
      document.getElementById("op3").disabled=true;
      document.getElementById("op4").disabled=true;

      document.getElementById("op5").disabled=true; 
      document.getElementById("op6").disabled=true;
      document.getElementById("op7").disabled=true;
      document.getElementById("op8").disabled=true;

      document.getElementById("op9").disabled=true; 
      document.getElementById("op10").disabled=true;
      document.getElementById("op11").disabled=true;
      document.getElementById("op12").disabled=true;

      document.getElementById("op13").disabled=true; 
      document.getElementById("op14").disabled=true;
      document.getElementById("op15").disabled=true;
      document.getElementById("op16").disabled=true;

      document.getElementById("op17").disabled=true; 
      document.getElementById("op18").disabled=true;
      document.getElementById("op19").disabled=true;
      document.getElementById("op20").disabled=true;
}

//Function for enabling buttons as the user moves from one question to another
function enable(){
      document.getElementById("op1").disabled=false; 
      document.getElementById("op2").disabled=false;
      document.getElementById("op3").disabled=false;
      document.getElementById("op4").disabled=false;

      document.getElementById("op5").disabled=false; 
      document.getElementById("op6").disabled=false;
      document.getElementById("op7").disabled=false;
      document.getElementById("op8").disabled=false;
      
      document.getElementById("op9").disabled=false; 
      document.getElementById("op10").disabled=false;
      document.getElementById("op11").disabled=false;
      document.getElementById("op12").disabled=false;

      document.getElementById("op13").disabled=false; 
      document.getElementById("op14").disabled=false;
      document.getElementById("op15").disabled=false;
      document.getElementById("op16").disabled=false;

      document.getElementById("op17").disabled=false; 
      document.getElementById("op18").disabled=false;
      document.getElementById("op19").disabled=false;
      document.getElementById("op20").disabled=false;
}
    
