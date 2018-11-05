/*================================================================================================== CProg ===*/

function CProg(ProgName) {  

var progC;                                                           // simulation program
var bPlay          = false;                                          // is the simulation running

//this.progPlay      = progPlay     ;                                  // public function
//this.progRestart   = progRestart  ;
//this.progStep      = progStep     ;
//this.get_bProgPlay = get_bProgPlay;

simStart(ProgName);

  /*--------------------------------------------------------------------------------------------- SimStart ---*/

  function simStart(ProgName) { alert(11);
    init(ProgName);
  }
  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init(ProgName)  {  
  //create_prog(ProgName);
  }
/*
  function create_prog(ProgName) {
    progC = document.getElementById(ProgName);
    //videoC.style.position = absolute;
  }

  function progPlay() {  
  //var button = document.getElementById("play");
    ifprogC.paused) {
      progC.play();
      bPlay = true;
    //button.textContent = "||"; }
      }
    else {
      progC.pause();
      bPlay = false;
    //button.textContent = ">";
    }
  }
  
  function progRestart() {
    progC.currentTime = 0;
  }

  function videoStep(value) {  //alert("step");
    videoC.currentTime += value;  //alert(videoC.currentTime);
  }

  function get_bPlay() {
    return bPlay;
  }
*/
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/

