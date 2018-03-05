var playing = false;
var score;
var timeremaining;
var action;
var correctAnswer;
//if we click start/reset button
document.getElementById("reset").onclick = function () {
  //if we playing
  if (playing == true) {
    location.reload();
  } else { //if we are not playing

    //change mode to playing\
    playing = true;

    //set score to 0
    score = 0;
    document.getElementById("scorevalue").innerHTML = score;

    //show countdown box
    show("timeout");    
    timeremaining = 60;
    
    //hide game over box
    hide("gameover");

    //change button to reset
    document.getElementById("reset").innerHTML = "Reset Game";

    //start countdown
    startcountdown();
    
    //generate QA
    generateQA();
  }
}
//if we playing
//reload the page

//if we are not playing
//change mode to playing
//set score to 0
//show countdown box
//change button to reset
//Gemnerate question and miltiple answer

//start countdown function
    function startcountdown() {
      action = setInterval(function () {
        timeremaining -= 1;
        document.getElementById("remainingtime").innerHTML = timeremaining;
        
        if(timeremaining == 0){//game over
          stopcountdown();
        
        show("gameover");
        document.getElementById("gameover").innerHTML="<p>Game over ! </p><p>Your score is " + score + ".</p>";
            
         hide("timeout");
          hide("correct");
          hide("wrong");
          playing=false;
          
          
        document.getElementById("reset").innerHTML = "Start Game";
      }
      }, 1000);

    }
//functions

function stopcountdown(){
  clearInterval(action);
}

function show(ID){
  document.getElementById(ID).style.display = "block";
}
function hide(ID){
  document.getElementById(ID).style.display = "none";
}

function generateQA(){
  var x =1+Math.round(9*Math.random());
  var y =1+Math.round(9*Math.random());
  correctAnswer= x*y;
  document.getElementById("question").innerHTML= x + "×" + y;
  var correctPos= 1+Math.round(3*Math.random());
  
  document.getElementById("box"+ correctPos).innerHTML=correctAnswer;
  
}