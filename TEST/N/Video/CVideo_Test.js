/*================================================================================================= CVideo ===*/

function CVideo_Test() {  

var videoC;        // video

simStart();

  /*--------------------------------------------------------------------------------------------- SimStart ---*/

  function simStart() { alert("video");
    init();
  }
  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {
    create_video();
  }

  function create_video() {
    videoC = document.getElementById("Video1"); alert("video end 3");
  }

  function videoPlay() {
    var button = document.getElementById("play");
    if(videoC.paused) {
      videoC.play();
      button.textContent = "||"; }
    else {
      videoC.pause();
      button.textContent = ">";
    }
  }

  
  function restart() {
    videoC.currentTime = 0;
  }

  function skip(value) {
    videoC.currentTime = 0;
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/

