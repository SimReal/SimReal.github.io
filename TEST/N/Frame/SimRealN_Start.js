/*========================================================================================================= SimRealN_Start.js ===*/

  <!--
  var openwin;
  function popupwin(url,myname,w,h,s) {
    settings= 'height='+h+',width='+w+',scrollbars='+s+',toolbar=no,location=no,menubar=no,status=no,resizable=yes,dependent=no'
    openwin = window.open(url,myname,settings);
  }//-->

  /*---------------------------------------------------------------------------------------------------------- include script ---*/
 
  var head                     = null;
  var body                     = null;

  var script_Div               = null;
  var script_ObjectHandler     = null;
  var script_SimRealNFrame     = null;
  var script_Video             = null;
  var script_Sim               = null;
  var script_Calc              = null;

  create_head             ();
  create_body             ();
  create_div              ();  //alert("load 0");
  create_ObjectHandler    (); 
//create_SimRealNFrame    ();  //alert("load 2");
  create_Video            ();
  create_Sim              ();
  create_Calc             ();
  create_SimRealNFrame    ();
  this.onload = function() {autoStart();}

  function create_head () {
    head                       =  document.getElementsByTagName('head')[0];
  }
  function create_body () {
    body                       =  document.getElementsByTagName('body')[0];
  }

  function create_div  () {   
    script_Div                 =  document.createElement('script');
    script_Div           .type = 'text/javascript'                ;
    script_Div           .src  = 'N/Frame/CDiv.js'             ; 
    body.appendChild (script_Div  )                               ;   
  }

  function create_ObjectHandler () {
    script_ObjectHandler         =  document.createElement('script');
    script_ObjectHandler .type   = 'text/javascript'                ;
    script_ObjectHandler .src    = 'N/Frame/ObjectHandler.js'    ;
    script_ObjectHandler .async  = false                          ;      
  //script_ObjectHandler .onload = function() {objHC()}           ;
  //script_ObjectHandler .onload = function() {objHC()}           ;
    head.appendChild (script_ObjectHandler  )                     ;  //alert("load 1");
  //script_ObjectHandler .onload = function() {objHC()}           ;
  }
  function ObjHC() {
  //head.appendChild (script_ObjectHandler  )                     ;
  //alert("load 1b");
  }

  function create_SimRealNFrame () {
    script_SimRealNFrame       =  document.createElement('script');   //script_ObjectHandler.onload = function() {objHC()};
    script_SimRealNFrame .type = 'text/javascript'                ;     script_ObjectHandler.onreadystatechange = function() {objHC()};  //script_ObjectHandler .onload = function() {objHC()};
    script_SimRealNFrame .src  = 'N/Frame/SimRealN_Frame.js'   ;
    script_SimRealNFrame .async  = false                          ; 
    head.appendChild(script_SimRealNFrame  )                      ;
  }

  function create_Video() {
    script_Video               =  document.createElement('script');
    script_Video .id           = 'SimV'                           ;
    script_Video .type         = 'text/javascript'                ;
    script_Video .src          = 'N/Video/CVideo.js'           ;
    head.appendChild (script_Video  );
  }

  function create_Sim() {
    script_Sim                 =  document.createElement('script');
    script_Sim   .id           = 'Sim'                            ;
    script_Sim   .type         = 'txt/javascript'                 ; //alert(1);
    script_Sim   .src          = 'N/Prog/CProg.js'             ; //alert(2);
  //script_Sim   .src          = 'N/Prog/RandomWalk_004.js'    ;
    head.appendChild(script_Sim  )                                ; //alert(script_Sim.src);
  }
  function create_Calc() {
    script_Calc                 =  document.createElement('script');
    script_Calc   .id           = 'Calc'                           ;
    script_Calc   .type         = 'txt/javascript'                 ; //alert(1);
    script_Calc   .src          = 'N/Prog/CProg.js'             ; //alert(2);
  //script_Calc   .src          = 'N/Prog/RandomWalk_004.js'    ;
    head.appendChild(script_Calc )                                ; //alert(script_Sim.src);
  }
  /*-----------------------------------------------------------------------------------------------------------------------------*/
/*===============================================================================================================================*/

