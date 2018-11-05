/*================================================================================================= CVideo ===*/

function CVideo(VideoName) {  

var videoC;                                                          // video
var bPlay          = false;                                          // is the video playing

this.videoPlay     = videoPlay   ;                                   // public function
this.videoRestart  = videoRestart;
this.videoStep     = videoStep   ;
this.get_bPlay     = get_bPlay   ;

simStart(VideoName);

  /*--------------------------------------------------------------------------------------------- SimStart ---*/

  function simStart(VideoName) {
    init(VideoName);
  }
  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init(VideoName)  {  
    create_video(VideoName);
  }

  function create_video(VideoName) {
    videoC = document.getElementById(VideoName);
    //videoC.style.position = absolute;
  }

  function videoPlay() {  
  //var button = document.getElementById("play");
    if(videoC.paused) {
      videoC.play();
      bPlay = true;
    //button.textContent = "||"; }
      }
    else {
      videoC.pause();
      bPlay = false;
    //button.textContent = ">";
    }
  }
  
  function videoRestart() {
    videoC.currentTime = 0;
  }

  function videoStep(value) {  //alert("step");
    videoC.currentTime += value;  //alert(videoC.currentTime);
  }

  function get_bPlay() {
    return bPlay;
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/

