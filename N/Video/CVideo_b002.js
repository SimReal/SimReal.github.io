/*================================================================================================= CVideo ===*/

function CVideo() {  

var videoC;        // video

simStart();

  /*--------------------------------------------------------------------------------------------- SimStart ---*/

  function simStart() { alert("video");
    init();
  }
  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  { alert("video start");
    create_video();
  }

  function create_video() {
    videoC = document.getElementById("Video1");  alert("video2 end");
  }
<!--
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

-->
<!--
    <video id="Video1" width="730" height="431">
      <source src="parabel.mp4" type="video/mp4"/>
      HTML5 Video is required for this example.
      <a href="demo.mp4">Download the video</a> file.
    </video>

    <div id="buttonBar">
      <button id="restart" onclick = "restart();">Restart</button>
      <button id="rew"     onclick = "skip(-10);">Bwd    </button>
      <button id="play"    onclick = "videoPlay();">Play   </button>
      <button id="fastFwd" onclick = "skip(10) ;">Fwd    </button>
    </div>
-->
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/

