  /*===================================================================================== SimRealN_frame.js ===*/

  <!--
  var openwin;
  function popupwin(url,myname,w,h,s) {
    settings= 'height='+h+',width='+w+',scrollbars='+s+',toolbar=no,location=no,menubar=no,status=no,resizable=yes,dependent=no'
    openwin = window.open(url,myname,settings);
  }//-->

  /*---------------------------------------------------------------------------------------- include script ---*/

  this.simPosX        = simPosX       ;
  this.simPosY        = simPosY       ;
  this.stopTimer      = stopTimer     ;
  this.act_pbReset    = act_pbReset   ;
  this.act_pbResetOut = act_pbResetOut;
  this.act_pbBwd      = act_pbBwd     ;
  this.act_pbStop     = act_pbStop    ;
  this.act_pbRun      = act_pbRun     ;
  this.autoStart      = autoStart     ;

  function simPosX() {
    return xSimPos;
  }
  function simPosY() {
    return ySimPos;
  }

  var bFirst           = true;

  var pId_Stream       = document.getElementById("File_Stream" );
  var pId_SimV         = document.getElementById("SimV"        );  
  var pId_Sim          = document.getElementById("File_Sim"    );  var pId_SimAuto = document.getElementById("SimAuto");
  var pId_FileSim      = document.getElementById("File_Sim"    ); 


  var pId_FileTheory   = document.getElementById("File_Theory" );
  var pId_TagTheory    = document.getElementById("VideoTheory" ); 

  var pId_FileStream   = document.getElementById("File_Stream" );
  var pId_FileFormula  = document.getElementById("File_Formula");
  var pId_FileEx       = document.getElementById("File_Ex"     );
  var pId_FileApp      = document.getElementById("File_App"    );


  var pId_FileSimV     = document.getElementById("File_SimV"   );
  var pId_TagSimV      = document.getElementById("Video1"      ); 
  var pId_TagApp       = document.getElementById("VideoApp"    );                                      ///////////////////////////
 

  pId_TagTheory  .src  = pId_FileTheory.getAttribute("text");   pId_TagTheory .type = "video/mp4";     
      
 
  pId_TagSimV    .src  = pId_FileSimV  .getAttribute("text");   pId_TagSimV   .type = "video/mp4";
  pId_TagApp     .src  = pId_FileApp   .getAttribute("text");   pId_TagApp    .type = "video/mp4";    /////////////////////


  var txt_File_Theory  = pId_FileTheory  .getAttribute("text");   
  var txt_File_Stream  = pId_FileStream  .getAttribute("text");
  var txt_File_Formula = pId_FileFormula .getAttribute("text");
  var txt_File_SimV    = pId_FileSimV    .getAttribute("text");
  var txt_File_Sim     = pId_FileSim     .getAttribute("text"); 
//if(txt_File_Sim.endsWith("*")) {txt_File_Sim = txt_File_Sim.substring(0,txt_File_Sim.length-1); //alert(txt_File_Sim);}
  var txt_File_Ex      = pId_FileEx      .getAttribute("text");
  var txt_File_App     = pId_FileApp     .getAttribute("text");

  var body             = document.getElementsByTagName('body')[0];
  var head             = document.getElementsByTagName('head')[0];

  var layerInfo        = null;                                          // info
  var layerHelp        = null;                                          // help information
  var layerCalculator  = null;
  var layerSimCalc     = null;
  var layerObjCalc     = null;
  var layerCalcSim     = null;
  var layerCalcObj     = null;
  var cHelp            = null;
//var bHelp            = false;
  var bCalc            = false;

  var txt_info         = null ;

  function autoStart() {
    if(pId_SimAuto != null) { 
      act_pbSim();
    }
  }
  /*-------------------------------------------------------------------------------------------------- make_div ---*/

  function make_div(parent,idDiv,bShow,pos,L,T) {
    var obj = document.createElement('div');

    obj   .id             = idDiv;
    obj   .style.display  = bShow;
    obj   .style.position = pos  ;
    obj   .style.left     = L    ;
    obj   .style.top      = T    ;
    parent.appendChild(obj)      ;
    return obj                   ;
  }
  /*----------------------------------------------------------------------------------------------- make_canvas ---*/

  function make_canvas(parent,idCanvas,pos,W,H) { 
    var obj = document.createElement('canvas');

    obj   .id             = idCanvas;
    obj   .style.position = pos  ;
    obj   .style.width    = W    ;
    obj   .style.height   = H    ;
    obj   .style.border   = '1px solid #000000';
    parent.appendChild(obj)      ;
    return obj                   ;
  }
  /*----------------------------------------------------------------------------------------------- make_iframe ---*/

  function make_iframe(parent,idIframe,W,H) {
    var obj = document.createElement('iframe');

    obj   .id             = idIframe;
    obj   .src            = ''   ;
    obj   .style.width    = W    ;
    obj   .style.height   = H    ;
    obj   .style.border   = '1px solid #000000';
    parent.appendChild(obj)      ;
    return obj                   ;
  }

  /*--------------------------------------------------------------------------------------------- create_script ---*/

  var script_CLayer           = document.createElement('script');
  var script_ObjectHandler    = document.createElement('script');
  var script_ObjExt           = document.createElement('script');
  var script_ObjExt2          = document.createElement('script');
  var script_ObjExtDrag       = document.createElement('script');
  var script_CCanvas          = document.createElement('script');
  var script_LayerHandler     = document.createElement('script');
  var script_CanvasHandler    = document.createElement('script');  
  var script_Stack            = document.createElement('script'); 
  var script_StackS           = document.createElement('script'); 
  var script_BinaryTreeE      = document.createElement('script'); 
  var script_Isometric        = document.createElement('script');
  var script_Txt              = document.createElement('script');
  var script_TxtM             = document.createElement('script');
  var script_TxtArea          = document.createElement('script');
  var script_Cb               = document.createElement('script');
  var script_Rb               = document.createElement('script');
  var script_Pb               = document.createElement('script');
  var script_Sb               = document.createElement('script');
  var script_Vector           = document.createElement('script');

  script_CLayer         .type = 'text/javascript';  script_CLayer         .src  = 'N/Frame/CLayer.js'         ;  head.appendChild(script_CLayer         );
  script_ObjExt         .type = 'text/javascript';  script_ObjExt         .src  = 'N/Frame/ObjExt.js'         ;  head.appendChild(script_ObjExt         );
  script_ObjExt2        .type = 'text/javascript';  script_ObjExt2        .src  = 'N/Frame/ObjExt2.js'        ;  head.appendChild(script_ObjExt2        );
  script_ObjExtDrag     .type = 'text/javascript';  script_ObjExtDrag     .src  = 'N/Frame/ObjExtDrag.js'     ;  head.appendChild(script_ObjExtDrag     );

  script_CCanvas        .type = 'text/javascript';  script_CCanvas        .src  = 'N/Frame/CCanvas.js'        ;  head.appendChild(script_CCanvas        );
  script_LayerHandler   .type = 'text/javascript';  script_LayerHandler   .src  = 'N/Frame/LayerHandler.js'   ;  head.appendChild(script_LayerHandler   );
  script_CanvasHandler  .type = 'text/javascript';  script_CanvasHandler  .src  = 'N/Frame/CanvasHandler.js'  ;  head.appendChild(script_CanvasHandler  );

  script_Stack          .type = 'text/javascript';  script_Stack          .src  = 'N/Frame/Stack.js'          ;  head.appendChild(script_Stack          );
  script_StackS         .type = 'text/javascript';  script_StackS         .src  = 'N/Frame/StackS.js'         ;  head.appendChild(script_StackS         );
  script_BinaryTreeE    .type = 'text/javascript';  script_BinaryTreeE    .src  = 'N/Frame/BinaryTreeE.js'    ;  head.appendChild(script_BinaryTreeE    );

  script_Isometric      .type = 'text/javascript';  script_Isometric      .src  = 'N/Frame/Isometric.js'      ;  head.appendChild(script_Isometric);
  script_Txt            .type = 'text/javascript';  script_Txt            .src  = 'N/Frame/Txt.js'            ;  head.appendChild(script_Txt         );
  script_TxtM           .type = 'text/javascript';  script_TxtM           .src  = 'N/Frame/TxtM.js'           ;  head.appendChild(script_TxtM        );
  script_TxtArea        .type = 'text/javascript';  script_TxtArea        .src  = 'N/Frame/TxtArea.js'        ;  head.appendChild(script_TxtArea     );
  script_Cb             .type = 'text/javascript';  script_Cb             .src  = 'N/Frame/Cb.js'             ;  head.appendChild(script_Cb          );
  script_Rb             .type = 'text/javascript';  script_Rb             .src  = 'N/Frame/Rb.js'             ;  head.appendChild(script_Rb          );
  script_Pb             .type = 'text/javascript';  script_Pb             .src  = 'N/Frame/Pb.js'             ;  head.appendChild(script_Pb          );
  script_Sb             .type = 'text/javascript';  script_Sb             .src  = 'N/Frame/Sb.js'             ;  head.appendChild(script_Sb          );
  script_Vector         .type = 'text/javascript';  script_Vector         .src  = 'N/Frame/Vector.js'         ;  head.appendChild(script_Vector      );

  var script_video    = document.createElement('script');    //alert(pId_Sim.getAttribute("text"));
  var script_prog     = document.createElement('script');

  script_video .type  = 'text/javascript';  script_video .src  = pId_SimV.getAttribute("text")   ;  head.appendChild(script_video );  
  script_prog  .type  = 'text/javascript';  script_prog  .src  = pId_Sim .getAttribute("text")   ;  head.appendChild(script_prog  ); 

  /*---------------------------------------------------------------------------------------------- variable ---*/

//var layCalculator   = null;                                           // layer - Calculator
  var laySimCalc      = null;
  var layObjCalc      = null;

//var laySim
  var laySim          = null;   cSim = null;                            // layer - simulation                        
  var layObj          = null;                                           //         control object
  var laySimReal      = null;                                           //         SimReal
  var layTheory       = null;                                           //         video theory
  var laySimV         = null;                                           //         video simulation
  var layEx           = null;                                           //         exercises
  var layApp          = null;                                           //         application
  var layVideoApp     = null;                                           //         application
  var layVideoTheory  = null;                                           //         video Theory
  var layVideoSimV    = null;                                           //         video SimV
  var layVideoApp     = null;                                           //         video App

  var layDivInfo      = null;                                           //         div info
  var layDivHelp      = null;                                           //             help

//var laySimCalc      = null;
//var layObjCalc      = null;

  var canV     ;

  var pbSimReal;                                                        // pushbutton - SimReal+
  var pbCalc   ;                                                        //              calculator
  var pbTheory ;                                                        //              theory (video lesson)
  var pbStream ;                                                        //              streaming
  var pbFormula;                                                        //              formula
  var pbSimV   ;                                                        //              video simulation
  var pbSim    ;                                                        //              interactive simulation
  var pbEx     ;                                                        //              exercise
  var pbApp    ;                                                        //              application
  var pbInfo   ;                                                        //              simulation info
  var pbHelp   ;                                                        //              help

  var pbVRun   ;                                                        // video      - start/stop
  var pbVReset ;                                                        //              reset 
  var pbVBwd   ;                                                        //              backward 10 sec
  var pbVFwd   ;                                                        //              forward  10 sec
  var pbVEnd   ;                                                        //              end

  var pbReset  ;                                                        // simulation - reset
  var pbBwd    ;                                                        //              backward 0.01 sec
  var pbFwd    ;                                                        //              forward  0.01 sec
  var pbStop   ;                                                        //              stop
  var pbRun    ;                                                        //              start/stop

  var txtSim   ;                                                        // textfield  - simulation info   
  var txtMenu  ;                                                        //              Main Menu

  var xSimPos  = null;                                                  // mousePosition - x
  var ySimPos  = null;                                                  //                 y

  var simCur  = null;                                                   // current simulation
  var simNew  = null;                                                   // new     simulation
  var simRet  = null;                                                   // return  replaced simulation
  var fileRef = null;

  var bSimReal = true ;
  var bCalc    = false;
  var bTheory  = false;
  var bStream  = false;
  var bFormula = false;
  var bSimV    = false;
  var bSim     = true ;
  var bEx      = false;
  var bApp     = false;
  var bInfo    = false;
  var bHelp    = false;

  var txtMpos  ;                                                        // mouse position
  var txtTime  ;                                                        // timer

  var simCalculator  = null;                                            // current  calculator
  var simCalc        = null;
  var simCalcPrev    = null;
  var simTheory      = null;                                            // current  video Theory
  var simSimV        = null;                                            // current  video SimV
  var simSim         = null;                                            // current  simulation Sim
  var simE           = null;                                            // current  simulation
  var simEx          = null;                                            // current  exercise
  var simApp         = null;                                            // current  application
  var simEprev       = null;                                            // previous simE
  var simSimPrev     = null;                                            // previous simSim
  var simCalcPrev    = null;                                            // previous calculator

  /*================================================================================================= Frame ===*/
 
  var lSimRealN = document.getElementById("layerSimRealN");     

  var nStart    =  2;
  var nW        = 70;
  pbCalc        = makePb (lSimRealN,  2,2,128,23,"Calculator");
  pbStream      = makePb (lSimRealN,130,2, 70,23,"Stream "   );
  pbTheory      = makePb (lSimRealN,200,2, 70,23,"Theory"    );   pbTheory .id = "Theory" ;
  pbFormula     = makePb (lSimRealN,270,2, 70,23,"Formula"   );
  pbSimV        = makePb (lSimRealN,340,2, 70,23,"SimV   "   );   pbSimV   .id = "SimV"   ;
  pbSim         = makePb (lSimRealN,410,2, 70,23,"Sim"       );   pbSim    .id = "Sim"    ;    //pbSim.style.background = '#DDDDEE';
  pbEx          = makePb (lSimRealN,480,2, 70,23,"Ex"        );
  pbApp         = makePb (lSimRealN,550,2, 70,23,"App"       );                                     

  pbInfo        = makePb (lSimRealN,622,2,114,23,"Info"      );
  pbHelp        = makePb (lSimRealN,736,2,114,23,"Help"      );

  pbVRun        = makePb (lSimRealN,  2,477, 50,23,">"       );       // video buttons
  pbVReset      = makePb (lSimRealN, 52,477, 50,23,"||<"     );
  pbVBwd        = makePb (lSimRealN,102,477, 50,23,"|<"      );
  pbVFwd        = makePb (lSimRealN,152,477, 50,23,">|"      );
  pbVEnd        = makePb (lSimRealN,202,477, 50,23,">||"     );

  pbReset       = makePb (lSimRealN,623,477, 46,23,"Reset"   );
  pbBwd         = makePb (lSimRealN,669,477, 45,23,"Bwd"     );
  pbFwd         = makePb (lSimRealN,714,477, 45,23,"Fwd"     );
  pbStop        = makePb (lSimRealN,759,477, 45,23,"Stop"    );
  pbRun         = makePb (lSimRealN,804,477, 45,23,"Run"     );


//txtMenu       = makeTxt2(950,104,100,16,"Main Menu"); txtMenu.style.border ='none'; txtMenu.style.background = '#DDDDDD';

  txtMpos       = makeTxtLb2(425,575,120,23," x =       y =");
  txtTime       = makeTxtLb2(547,575, 80,23," t = 0");

  pbCalc         .setAttribute("onclick","act_pbCalc   ()");
  pbStream       .setAttribute("onclick","act_pbStream ()");
  pbTheory       .setAttribute("onclick","act_pbTheory ()");
  pbSimV         .setAttribute("onclick","act_pbSimV   ()");
  pbSim          .setAttribute("onclick","act_pbSim    ()");
  pbEx           .setAttribute("onclick","act_pbEx     ()");   
  pbApp          .setAttribute("onclick","act_pbApp    ()");

  pbInfo         .setAttribute("onclick","act_pbInfo ()");
  pbHelp         .setAttribute("onclick","act_pbHelp   ()");

  pbVRun         .setAttribute("onclick","act_pbVRun   ()");
  pbVReset       .setAttribute("onclick","act_pbVReset ()");
  pbVBwd         .setAttribute("onclick","act_pbVBwd   ()");
  pbVFwd         .setAttribute("onclick","act_pbVFwd   ()");

  pbReset        .setAttribute("onclick","act_pbReset  ()");
  pbBwd          .setAttribute("onclick","act_pbBwd    ()");
  pbFwd          .setAttribute("onclick","act_pbFwd    ()");
  pbStop         .setAttribute("onclick","act_pbStop   ()");
  pbRun          .setAttribute("onclick","act_pbRun    ()");

  enable_topButton();

  var prog  = document.getElementById("SimReal");
  var tTmp;// = document.getElementById("txtTime");
  var c     = document.getElementById("canvasSim_000" );  var ctx     = c.getContext("2d");   // background color for frame top/bottom
  var cSimV = document.getElementById("canvasSimV_00" );  var ctxSimV = cSimV.getContext("2d"); 

  var w     = 1100; //1332;     
  var h     =  500; //640;
  var d     =   27;
  var m     =  250; //300;
  var contr =  230; //253;

  var wSimV = 1100; //1332;     
  var hSimV =  500;
 
//var colGrad = ctx.createLinearGradient(0,0,0,d);
//colGrad.addColorStop(0,'#8B8BB8');
//colGrad.addColorStop(1,'#C3C3FF');
//ctx.fillStyle = colGrad;

  ctx.fillStyle = "#DDDDDD"; //"#DDDDEE";
//ctx.fillRect (0,  0,w,d) ;                        // with div static in html
//ctx.fillRect (0,h-d,w,d) ;
  ctx.fillRect (0, -19,w,d) ;                       // with div dynamically included from js in html
  ctx.fillRect (0, 142,w,d-19) ;
  ctx.moveTo   (w-m      ,0); ctx.lineTo(w-m      ,h); ctx.stroke();
  ctx.moveTo   (w-m-contr,0); ctx.lineTo(w-m-contr,h); ctx.stroke();
 
  ctxSimV.fillStyle = "#FFFFFF";
  ctxSimV.fillRect  (0,0,wSimV,hSimV);  ctxSimV.stroke();
  
  var bRun  = false;
  var t     = 0;
  var tStop = 0;
  var tVar     ;

  enable_videoButton(false);
  enable_simButton  (false);

//if(pId_SimAuto != null) { alert(pId_SimAuto);  act_pbSim();}

  /*-------------------------------------------------------------------------------------- enable_topButton ---*/

  function enable_topButton() {
    pbCalc    .disabled  = true;
    pbStream  .disabled  = (txt_File_Stream  == ""); //true ;
    pbTheory  .disabled  = (txt_File_Theory  == ""); //false;
    pbFormula .disabled  = (txt_File_Formula == "");true ;
    pbSimV    .disabled  = (txt_File_SimV    == ""); //false;
    pbSim     .disabled  = (txt_File_Sim     == ""); //false;
    pbEx      .disabled  = (txt_File_Ex      == "");true ;
    pbApp     .disabled  = (txt_File_App     == "");true ;
    pbInfo    .disabled  = false;
    pbHelp    .disabled  = false;
  }
  /*------------------------------------------------------------------------------------ enable_videoButton ---*/
 
  function enable_videoButton(b) {
    pbVRun  .disabled = !b;
    pbVReset.disabled = !b;
    pbVBwd  .disabled = !b;
    pbVFwd  .disabled = !b;
    pbVEnd  .disabled = !b;
  }

  /*-------------------------------------------------------------------------------------- enable_simButton ---*/

  function enable_simButton(b) {
    pbReset.disabled = !b;
    pbBwd  .disabled = !b;
    pbFwd  .disabled = !b;
    pbStop .disabled = !b;
    pbRun  .disabled = !b;
  }
  /*-------------------------------------------------------------------------------------------- hide_frame ---*/

  function hide_frame() {
    laySim         = document.getElementById("layerSimSim");
    layObj         = document.getElementById("layerSimObj");
    laySimCalc     = document.getElementById("layerSimCalc");
    layObjCalc     = document.getElementById("layerObjCalc");
  //laySimReal     = document.getElementById("simR"       );
    layTheory      = document.getElementById("layerSimSimV"  );
    laySimV        = document.getElementById("layerSimSimV");  
    layApp         = document.getElementById("layerSimSimV");                   //////////////////////
    layVideoTheory = document.getElementById("layerVideoTheory"  );
    layVideoApp    = document.getElementById("layerVideoApp");
    layVideoSimV   = document.getElementById("layerVideo"  );
    layDivInfo     = document.getElementById("layerDivInfo");
    layDivHelp     = document.getElementById("layerDivHelp");

    laySim          .style.display = "none";  
    layObj          .style.display = "none";
    layTheory       .style.display = "none";
    laySimV         .style.display = "none";
    layApp          .style.display = "none";                                /////////////////////////
    layVideoTheory  .style.display = "none";
    layVideoSimV    .style.display = "none";
    layVideoApp     .style.display = "none";
  //laySimReal      .style.display = "none";  
    laySimCalc      .style.display = "none";
    layObjCalc      .style.display = "none";

    layDivInfo      .style.display = "none";
    layDivHelp      .style.display = "none";

    if(simCalculator != null) {
      simCalculator.show(false);
    }
    if(layerCalcSim != null) {
      layerCalcSim.show(false);
    }
    if(layerCalcObj != null) {
      layerCalcObj.show(false);
    }
    bCalc = false;
    if(layerInfo != null) {
      layerInfo.style.visibility = 'hidden';
      bInfo = false;
    }
    if(layerHelp != null) {
      layerHelp.get_obj().style.visibility = 'hidden'
      bHelp = false;
    }
  }
  /*----------------------------------------------------------------------------------------- act_pbSimReal ---*/

  function act_pbSimReal() { 
    hide_frame();
  //laySimReal.style.display = 'inline';
  }
  /*------------------------------------------------------------------------------------------ act_pbTheory ---*/

  function act_pbCalc  () {
    bCalc = true;
    if (layerCalcSim == null) {
      layerCalcSim  = (new CLayer('simCalc',90,'#FFFFFF'))//.get_obj();
      layerCalcObj  =  new CLayer('objCalc',90,'#FFFFFF');
    //layerCalcObj.set_color('#FF0000');
    //layerCalcSim.get_obj().style.opacity = 1.0;
    //layerCalcObj.get_obj().style.opacity = 0.5;  //layerCalcObj.get_obj().style.filter = alpha(opacity=100);
    }
    hide_frame();
  //layerCalculator.get_obj().style.visibility = 'inline';
  //layerCalculator.get_obj().style.visibility = 'hidden';
    if(simE != null) {
    //simE.show(false);
    }
    simEprev = simE;
    hide_frame();
    show_simButtons(true);
    enable_videoButton(false);
    enable_simButton  (true );
    act_pbVPause();
    simE = simSim;
  //laySim    .style.display  = 'inline';   
  //layObj    .style.display  = 'inline';   
    document.body.onmousemove = getMousePos; //pbSim.style.background = '#DDDDDE';


  //var fName = get_fName(txt_File_Sim);//alert(fName);
    var fName = get_fName('N/prog/Calculator/Calculator.js');//alert(fName);
  //var fName = "N/prog/Calculator/Calculator.js";   //get_fName(txt_File_Sim);//alert(fName);

/*
    var fn    = window[fName]; //alert("2");

    act_sim();
    if(simSimPrev == null) { //alert("new");
      simSim     = eval( new fn); 
      simSimPrev = simSim; }
    else {  //alert("prev");
      simSim   = simSimPrev;
    }
  //simSim   = new Prog_V1DintSum3(); //window.alert(8);
    simSim     = eval( new fn); 
    simSimPrev = simSim; 
    simE     = simSim;
  //simE.set_layer(layerCalcSim,layerCalcObj);
  //simE.show(true);
*/
  //laySim.appendChild(layerCalcSim);
  //layObj.appendChild(layerCalcObj);

  //layerCalcSim.show(true);
  //layerCalcObj.show(true);
  //act_sim();


    hide_frame();

    laySimCalc.style.display  = 'inline'   ;   
    layObjCalc.style.display  = 'inline'   ;   

  //laySim    .style.display  = 'inline'   ;   
  //layObj    .style.display  = 'inline'   ;   
  //document.body.onmousemove = getMousePos; 
  //if(simE != null) {
  //  delete(simE);
  //}

    
  //laySimCalc.style.display = 'inline';
  //layObjCalc.style.display = 'inline';

  //simSim   = new Calculator(layerCalcSim,layerCalcObj); //window.alert(8);
  //simE     = simSim;
  //simCalculator = simE;
    if(simCalculator == null) {
      simCalculator = new Calculator(layerCalcSim,layerCalcObj); }
    else {
    //simCalculator.show(true);
    //if(layerCalcSim != null) {
      //layerCalcSim.show(true);
    //}
    //if(layerCalcObj != null) {
      //layerCalcObj.show(true);
    //}
      simCalculator.show(true);
    }
  //simE = simCalculator;
    simCalcPrev = simE;

    bCalc = true;
  }

  function act_pbStream() {
  //window.open("https://video.uia.no/media/t/0_3f2b1eep/39516");
    act_pbVPause();
    pbVRun.textContent = ">";
    window.open(txt_File_Stream);
  }
  function act_pbTheory() {
    simEprev = simE;
    hide_frame();
    show_simButtons(false);
    enable_videoButton(true );
    enable_simButton  (false);
    act_pbVPause();                                
    layTheory     .style.display = 'inline';
  //layVideoTheory.style.x       = 200;
  //layVideoTheory.style.y       = 27;
    layVideoTheory.style.display = 'inline';
  //simE         = new CVideo("Video1");
    simTheory    = new CVideo("VideoTheory");   
    simE         = simTheory;
    act_pbVRun ();
  //if(bFirst) {
  //  bFirst = false;
  //  for(var i=0;i<=10000;i++) {
  //  }
  //  act_pbTheory();
  //}
  }
  /*-------------------------------------------------------------------------------------------- act_pbSimV ---*/

  function act_pbSimV() {
    simEprev = simE;
    hide_frame(); 
    show_simButtons(false);
    enable_videoButton(true );
    enable_simButton  (false);
    act_pbVPause();
    laySimV       .style.display = 'inline';
  //layVideoSimV  .style.x       = 200;
  //layVideoSimV  .style.y       = 27;
    layVideoSimV  .style.display = 'inline';
    simSimV      = new CVideo("Video1");    
    simE         = simSimV;
    act_pbVRun ();
  }
  /*--------------------------------------------------------------------------------------------- act_pbSim ---*/

  function act_pbSim() {
    simEprev = simE;
    hide_frame();
    show_simButtons(true);
    enable_videoButton(false);
    enable_simButton  (true );
    act_pbVPause();
    simE = simSim;
    laySim    .style.display  = 'inline';   
    layObj    .style.display  = 'inline';   
    document.body.onmousemove = getMousePos; //pbSim.style.background = '#DDDDDE';
    act_SimRun();
  //act_RandomWalk_004();
  }
  /*---------------------------------------------------------------------------------------------- act_pbEx ---*/

  function act_pbEx() {
    hide_frame();
    layEx    .style.display = 'inline';   //cSim.style.visibility = "visible";
  }
  /*--------------------------------------------------------------------------------------------- act_pbApp ---*/

  function act_pbApp() { 
    simEprev = simE;
  //hide_frame();
  //layApp  .style.display = 'inline';   //cSim.style.visibility = "visible";
    hide_frame();                  
    enable_videoButton(true );      
    enable_simButton  (false);      
    act_pbVPause();
    layApp        .style.display = 'inline';                        //////////////////////               
    layVideoApp   .style.display = 'inline';  
  //layVideoSimV  .style.x       = 200;
  //layVideoSimV  .style.y       = 27;
  //layVideoSimV  .style.display = 'inline';
    simApp       = new CVideo("VideoApp");    
    simE         = simApp;                     
    act_pbVRun ();  
  }
  /*-------------------------------------------------------------------------------------------- act_pbInfo ---*/

  function act_pbInfo() {
    if(layerInfo == null)  {
      layerInfo  = (new CLayer('info',100,'#FFFFFF')).get_obj();
      txt_info   = makeTxtArea  (layerInfo,  3,3,610,439,"",true);
    //cHelp      = new ObjExt(layerHelp,"N/image/Help.jpg",422,222,1);
      bInfo = !bInfo; }
    else {
      bInfo = !bInfo;
    //layerInfo.show(bInfo);
      if(bInfo) {
        layerInfo.style.visibility = 'visible'; }
      else {
        layerInfo.style.visibility = 'hidden';
      }
    }
    if(bInfo && bHelp) {
      bHelp = false;
      layerHelp.get_obj().style.visibility = 'hidden';
    }
  //layerInfo.appendChild(simE.get_info());
    txt_info.value = simE.get_info();
    if(bCalc == true) {
      txt_info.value = simCalculator.get_info();
    }

  //simE.show_info(true);
/*
    simEprev = simE;
    hide_frame(); 
    show_simButtons(false);
    enable_videoButton(true );
    enable_simButton  (false);
    act_pbVPause();
    laySimV       .style.display = 'inline';
  //layVideoSimV  .style.x       = 200;
  //layVideoSimV  .style.y       = 27;
    layVideoSimV  .style.display = 'inline';
    simSimV      = new CVideo("Video1");
    simE         = simSimV;
    act_pbVRun ();
*/

  //laySimCalc.style.display  = 'hidden'   ;   
  //layObjCalc.style.display  = 'hidden'   ; 
  }
  /*-------------------------------------------------------------------------------------------- act_pbHelp ---*/

  function act_pbHelp() { 
    if(layerHelp == null)  { 
      layerHelp  = (new CLayer('help',100,'#FFFFFF'))//.get_obj();
    //cHelp      = new ObjExt(layerHelp,"N/image/Help.jpg",422,222,1);
      cHelp      = new ObjExt(layerHelp,422,222,"N/image/Help.jpg",1);
      bHelp = !bHelp; }
    else { 
      bHelp = !bHelp;
    //layerHelp.show(bHelp);
      if(bHelp) {
        layerHelp.get_obj().style.visibility = 'visible'; }
      else {
        layerHelp.get_obj().style.visibility = 'hidden';
      }
    }
    if(bHelp && bInfo) {
      bInfo = false;
      layerInfo.style.visibility = 'hidden';
    }
/*
    simEprev = simE;
    hide_frame(); 
    show_simButtons(false);
    enable_videoButton(true );
    enable_simButton  (false);
    act_pbVPause();
    laySimV       .style.display = 'inline';
  //layVideoSimV  .style.x       = 200;
  //layVideoSimV  .style.y       = 27;
    layVideoSimV  .style.display = 'inline';
    simSimV      = new CVideo("Video1");
    simE         = simSimV;
    act_pbVRun ();
*/
  }
  function load_video(videoUrl) {
    var video;
    try {
      video = new Video();
    } catch(e) {
      video = document.createElement('video');
    }
    video.src = videoUrl;
    bindOnce(video, 'canplaythrough', function() {alert("Loaded");});
    video.onerror = function(e){alert("Error");};
    video.load();  video.play();
  }

  function replaceSim(oldSim) {
    var newSim = createjsFile("SHM_001.js","SHM_001"); //alert(newSim.id);
    return oldSim.parentNode.replaceChild(newSim, oldSim);                  
  }

  function getMousePos() {
    xSimPos = window.event.clientX -  12;
    ySimPos = window.event.clientY - 125;
    if(xSimPos >= 0 && xSimPos <= 774 && ySimPos >= 0 && ySimPos <= 445) {
      txtMpos.value = ""; }
    //txtMpos.value = " x = " + (window.event.clientX -12).toString() + "     y = " + (window.event.clientY - 125).toString(); }
    else {
      txtMpos.value = "";
    }
  //txtMpos.value = " x = " + (window.event.clientX -12).toString() + "     y = " + (window.event.clientY - 125).toString();
  }
  function createjsFile(src,id) {
    var obj  = document.createElement("script");
    obj       .setAttribute("id",id);
    obj       .setAttribute("type","text/javaScript");
    obj       .setAttribute("language","JavaScript");
    obj       .setAttribute("src",src);
    return obj;
  }
  function makeScript(src,id) {   //alert("script");
    var obj  = document.createElement("script");
    obj       .setAttribute("id",id);
    obj       .setAttribute("type","text/javaScript");
    obj       .setAttribute("language","JavaScript");
    obj       .setAttribute("src",src);
    document  .body.appendChild(obj);  //alert("script2");
    return obj;
  }  
  function disable_pb() {
  //bSimReal = true ;   pbSimReal.disabled = false;
    bCalc    = false;   pbCalc   .disabled = true ;
    bTheory  = false;   pbTheory .disabled = true ;
    bStream  = false;   pbStream .disabled = true ;
    bFormula = false;   pbFormula.disabled = true ;
    bSimV    = false;   pbSimV   .disabled = true ;
    bSim     = true ;   pbSim    .disabled = true ;
    bEx      = false;   pbEx     .disabled = true ;
    bApp     = false;   pbApp    .disabled = true ;
  //bInfo    = false;   pbInfo   .disabled = true ;
  //bHelp    = false;   pbHelp   .disabled = true ;
  }
  function show_simButtons(b) {
    if(b) {
      pbReset.style.visibility = 'visible';
      pbBwd  .style.visibility = 'visible';
      pbFwd  .style.visibility = 'visible';  
      pbStop .style.visibility = 'visible';
      pbRun  .style.visibility = 'visible';
      txtTime.style.visibility = 'visible'; 
      txtMpos.style.visibility = 'visible';}
    else {
      pbReset.style.visibility = 'hidden' ;
      pbBwd  .style.visibility = 'hidden' ;
      pbFwd  .style.visibility = 'hidden' ; 
      pbStop .style.visibility = 'hidden' ;
      pbRun  .style.visibility = 'hidden' ;
      txtTime.style.visibility = 'hidden' ;
      txtMpos.style.visibility = 'hidden' ;
    }
  }
  /*------------------------------------------------------------------------------- act_menu video butttons ---*/

  function act_pbVRun() {  
    simE.videoPlay();  
    if(simE.get_bPlay() == true) { 
      pbVRun.textContent = "||" }
    else {
      pbVRun.textContent = ">"
    }
  }
  function act_pbVPause() { 
    if(simE != null && simE != simSim) {     
      if(simE.get_bPlay() == true) {  
        act_pbVRun(); 
      } 
    }
    if(simE != null && simE == simSim) {
      simE = simEprev;
      if(simE != null && simE != simSim) {     
        if(simE.get_bPlay() == true) {  
          act_pbVRun(); 
        } 
      }
    }
  }
  function act_pbVReset() { 
    simE.videoRestart();
  }
  function act_pbVBwd() {  
    simE.videoStep(-10);
  }
  function act_pbVFwd() {  
    simE.videoStep(10);
  }

  /*---------------------------------------------------------------------------------------------- act_menu ---*/

  function act_sim() {
    hide_frame();
  //disable_pb();
    laySim    .style.display  = 'inline'   ;   
    layObj    .style.display  = 'inline'   ;   
    document.body.onmousemove = getMousePos; 
    if(simE != null) {
      delete(simE);
    }
  }

  function get_fName(s) {
  //var s = 'N/js_prog/Prog_V1DintSum3.js';
    var len = s.length;
    s = s.substring(0,len-3);
    var i = s.length-1;
    while (i>= 0 && s.charAt(i) != '/') {
    //alert(s.charAt(i));
      i = i - 1;
    }
  //alert(s.substring(10,s.length));
    return s.substring(i+1,s.length);
  }

  function act_SimRun() {
/*
    var s = 'Car_001()';
    var tmpFunc = new Function(s);
    act_sim();
  //simSim   = new tmpFunc();  alert(simSim);//window.alert(8);
    simSim   = new eval(s);
  //simSim   = new Car_001(); //window.alert(8);
    simE     = simSim;
*/

  //if(txt_File_Sim.endsWith("*")) {txt_File_Sim = txt_File_Sim.substring(0,txt_File_Sim.length-1);   alert(txt_File_Sim);}
    var fName = get_fName(txt_File_Sim); //alert(fName);
    act_sim();

  //fName = 'new ' + fName; //alert(fName);
    var fn    = window[fName]; //alert(fName);//alert("2");  

  //simSim = fn;
  //if(typeof fn === "function") new Function(fName); //fn();
  //if(typeof fn === "function") fn();
  //simSim = fn;
  //simE   = simSim;
    act_sim();
    if(simSimPrev == null) { //alert("new");
      simSim     = eval( new fn);
      simSimPrev = simSim; }
    else {  //alert("prev");
      simSim   = simSimPrev;
    }
  //simSim   = new Prog_V1DintSum3(); //window.alert(8);
    simE     = simSim;

/*
    switch (txt_File_Sim) {
      case 'N/js_prog/Template_001.js'         : act_Template_001         (); break;
      case 'N/js_prog/Car_001.js'              : act_Car_001              (); break;
      case 'N/js_prog/Car_002.js'              : act_Car_002              (); break;
      case 'N/js_prog/Car_ShowHide.js'         : act_Car_ShowHide         (); break;
      case 'N/js_prog/Car_Position.js'         : act_Car_Position         (); break;
      case 'N/js_prog/Prog_V1DintSum3.js'      : act_Prog_V1DintSum3      (); break;
      case 'N/js_prog/RandomWalk_004.js'       : act_RandomWalk_004       (); break;
      case 'N/js_prog/Ellipse_001.js'          : act_Ellipse_001          (); break;
      case 'N/js_prog/Stat_PI_SquareCircle.js' : act_Stat_PI_SquareCircle (); break;
      case 'N/js_prog/VectorField2D.js'        : act_VectorField2D        (); break;
      case 'N/js_prog/RandomWalk_010.js'       : act_RandomWalk_010       (); break;
    }
*/
  }
/*
  function act_SimRun() {
    if(txt_File_Sim == 'N/js_prog/RandomWalk_004.js') {
      act_RandomWalk_004(); }
    else if(txt_File_Sim == 'N/js_prog/Ellipse_001.js') {
      act_Ellipse_001(); }
    else if(txt_File_Sim == 'N/js_prog/Stat_PI_SquareCircle.js') {
      act_Stat_PI_SquareCircle(); }
    else if(txt_File_Sim == 'N/js_prog/VectorField2D.js') {
      act_VectorField2D(); }
    else if(txt_File_Sim == 'N/js_prog/RandomWalk_010.js')
    }  
  }
*/
/*
  function act_Template_001      () {   // window.alert(5);
    act_sim();
    simSim   = new Template_001();
    simE     = simSim;
  }
  function act_Car_001      () {   // window.alert(5);
    act_sim();
  //pbSim     .disabled = false;
  //pbSimV    .disabled = false;
  //pbTheory  .disabled = false;       window.alert(7);
    simSim   = new Car_001(); //window.alert(8);
    simE     = simSim;
  //simE  = new RandomWalk_004();
  }
  function act_Car_002      () {   // window.alert(5);
    act_sim();
    simSim   = new Car_002(); //window.alert(8);
    simE     = simSim;
  }
  function act_Car_ShowHide () {   // window.alert(5);
    act_sim();
    simSim   = new Car_ShowHide(); //window.alert(8);
    simE     = simSim;
  }
  function act_Car_Position      () {   // window.alert(5);
    act_sim();
    simSim   = new Car_Position(); //window.alert(8);
    simE     = simSim;
  }
  function act_Prog_V1DintSum3   () {   //alert("3");// window.alert(5);
    act_sim();
    simSim   = new Prog_V1DintSum3(); //window.alert(8);
    simE     = simSim;
  }
  function act_RandomWalk_004      () {   // window.alert(5);
    act_sim();
  //pbSim     .disabled = false;
  //pbSimV    .disabled = false;
  //pbTheory  .disabled = false;       window.alert(7);
    simSim   = new RandomWalk_004(); //window.alert(8);
    simE     = simSim;
  //simE  = new RandomWalk_004();
  }
  function act_Ellipse_001      () {   // window.alert(5);
    act_sim();
  //pbSim     .disabled = false;
  //pbSimV    .disabled = false;
  //pbTheory  .disabled = false;       window.alert(7);
    simSim   = new Ellipse_001(); //window.alert(8);
    simE     = simSim;
  //simE  = new RandomWalk_004();
  }
  function act_Stat_PI_SquareCircle      () {   // window.alert(5);
    act_sim();
  //pbSim     .disabled = false;
  //pbSimV    .disabled = false;
  //pbTheory  .disabled = false;       window.alert(7);
    simSim   = new Stat_PI_SquareCircle(); //window.alert(8);
    simE     = simSim;
  //simE  = new RandomWalk_004();
  }
  function act_VectorField2D      () {   // window.alert(5);
    act_sim();
  //pbSim     .disabled = false;
  //pbSimV    .disabled = false;
  //pbTheory  .disabled = false;       window.alert(7);
    simSim   = new VectorField2D(); //window.alert(8);
    simE     = simSim;
  //simE  = new RandomWalk_004();
  }
  function act_RandomWalk_010      () {   // window.alert(5);
    act_sim();
  //pbSim     .disabled = false;
  //pbSimV    .disabled = false;
  //pbTheory  .disabled = false;       window.alert(7);
    simSim   = new RandomWalk_010(); //window.alert(8);
    simE     = simSim;
  //simE  = new RandomWalk_004();
  }
*/
  /*---------------------------------------------------------------------------------------- run simulation ---*/

  function act_pbResetOut() {
    bRun = false;
    clearInterval(tVar);
    t = 0;
    txtTime.value = " t = " + t.toString();
    simE.movePos(t,4);
  }
  function act_pbReset() {
    stopTimer();
    t = 0;
    txtTime.value = " t = " + t.toString();
    simE.movePos(t,4); 
  }
  function act_pbBwd()   {
    stopTimer();
    if(t>0) {
      t = Math.round(100*(t-0.01))/100;
    }
    txtTime.value = " t = " + t.toString();
    simE.movePos(t,3);
  }
  function act_pbFwd()   {  
    stopTimer();
    t             = Math.round(100*(t+0.01))/100;
    txtTime.value = " t = " + t.toString();
    simE.movePos(t,2);
  }
  function act_pbStop()  {
    stopTimer();
    bRun = false;
  }
  function act_pbRun()   {
    startStopTimer();
  }
//function act_pbInfo()  {
//}
  /*------------------------------------------------------------------------------------------------- timer ---*/

  function startStopTimer() {
    if(bRun) {
      bRun = false; 
      stopTimer(); }
    else {
      bRun = true;
      tVar = setInterval(function() {timeRun(bRun)},10);
      txtTime.value = " t = " + t.toString();
    }
    txtTime.value = " t = " + t.toString();
  }
  function stopTimer() {
    bRun = false;
    clearInterval(tVar);
    simE.movePos(t,1);
  }
  function timeRun(bRun) {
    if(bRun) {
      t = Math.round(100*(t+0.01))/100;
      txtTime.value = " t = " + t.toString();
      simE.movePos(t,0); }
    else {
      simE.movePos(t,1);
    }
  }   
  /*-----------------------------------------------------------------------------------------------------------*/
  /*===========================================================================================================*/
