
/*=========================================================================================================== CDiv ===*/


  var body =  document.getElementsByTagName('body')[0];

  var div_000    = make1_div    (body   ,'layerSimRealN'   ,'inline','absolute',  8,98);       //div_000.style.display = 'none';
  var div_001    = make1_div    (div_000,'layerSimSim'     ,'inline','absolute',  2,27);  
  var div_002    = make1_div    (div_000,'layerSimSimV'    ,'inline','absolute',  2,27);
  var div_003    = make1_div    (div_000,'layerVideoTheory','none'  ,'absolute',  2, 7);
  var div_004    = make1_div    (div_000,'layerVideo'      ,'none'  ,'absolute',  2,27);
  var div_005    = make1_div    (div_000,'layerSimObj'     ,'inline','absolute',621,27);
  var div_006    = make1_div    (div_000,'layerVideoApp'   ,'inline','absolute',  2,27);

  var div_007    = make1_div    (div_000,'layerSimCalc'    ,'inline','absolute',  2,27);       // calculator  sim
  var div_008    = make1_div    (div_000,'layerObjCalc'    ,'inline','absolute',621,27);       //             obj

  var div_009    = make1_div    (div_000,'layerDivInfo'    ,'inline','absolute',  2,27);       // info
  var div_010    = make1_div    (div_000,'layerDivHelp'    ,'inline','absolute',  2,27);       // help

  var canvas_000 = make1_canvas (div_000,'canvasSim_000',849,500);
  var canvas_001 = make1_canvas (div_001,'canvasSim_00' ,616,447);
  var canvas_002 = make1_canvas (div_002,'canvasSimV_00',845,447);

  var canvas_007 = make1_canvas (div_007,'canvasSimCalc_00' ,616,447);

  var iframe_000 = make1_iframe (div_005,'frameSimObj',226,447);

  var iframe_008 = make1_iframe (div_008,'frameObjObj',226,447);

  var video_003  = make1_video  (div_003,'VideoTheory','absolute',130, 29,572,431);
  var video_004  = make1_video  (div_004,'Video1'     ,'absolute', 55,  9,730,431);
  var video_005  = make1_video  (div_006,'VideoApp'   ,'absolute', 55,  9,730,431);


  function make1_div(parent,idDiv,bShow,pos,L,T) {
    var obj = document.createElement('div');

    obj   .id             = idDiv;
    obj   .style.display  = bShow;
    obj   .style.position = pos  ;
    obj   .style.left     = L    ;
    obj   .style.top      = T    ;
    parent.appendChild(obj)      ;  
    return obj                   ;
  }

  function make1_canvas(parent,idCanvas,W,H) {
    var obj = document.createElement('canvas');

    obj   .id             = idCanvas;
    obj   .style.width    = W    ;
    obj   .style.height   = H    ;
    obj   .style.border   = '1px solid #000000';
    parent.appendChild(obj)      ;
    return obj                   ;
  }

  function make1_iframe(parent,idIframe,W,H) {
    var obj = document.createElement('iframe');

    obj   .id             = idIframe;
    obj   .src            = ''   ;
    obj   .style.width    = W    ;
    obj   .style.height   = H    ;
    obj   .style.border   = '1px solid #000000';
    parent.appendChild(obj)      ;
    return obj                   ;
  }

  function make1_video(parent,idVideo,pos,L,T,W,H) {  
    var obj = document.createElement('video');

    obj   .id             = idVideo;
    obj   .style.position = pos  ;
    obj   .style.left     = L    ;
    obj   .style.top      = T    ;
    obj   .style.width    = W    ;
    obj   .style.height   = H    ;
    parent.appendChild(obj)      ;
    return obj                   ;
  }

  /*---------------------------------------------------------------------------------------------------------------*/
/*=================================================================================================================*/