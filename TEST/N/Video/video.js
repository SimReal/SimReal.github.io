/*================================================================================================= CLayer ===*/

function CVideo() {  

var video;        // video
int();

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  { alert("video");
    create_video();
  }

  function createVideo() {
    video = document.getElementById("idVideo");
  }

  function videoPlay() {
    var button = document.getElementById("play");
    if(video.paused) {
      video.play();
      button.textContent = "||"; }
    else {
      video.pause();
      button.textContent = ">";
    }
  }

  function restart() {
    video.currentTime = 0;
  }

  function skip(value) {
    video.currentTime = 0;
  }


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

/*============================================================================================================*/

