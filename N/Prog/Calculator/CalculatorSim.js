/*============================================================================================= CalculatorSim ===*/

function CalculatorSim (layerCalcSim,layerCalcObj) {


  var layerSim          = null;                            // layer         simulation window       
  var layerObj          = null;                            //               control    window
  var layerFormula      = null;                            //               info
  var layerCx           = null;                            //               coordinate axis  x
  var layerCy           = null;                            //                                y

  var nColLayer         = null;                            // color         layer  default
  var nColCanvas        = '#000000';                       // color         canvas default drawing (black)

  var mc_fig            = null;

  var mc_graph          = null;
  var mc_graphMove      = null;
  var mc_grid           = null;
  var mc_axis           = null;
  var mc_function       = null;
  var mc_tangent        = null;
  var mc_functionD      = null;
  var mc_functionDD     = null;
  var mc_P              = null;                            // point
  var mc_FPoint         = null;
  var mc_derivTangent   = null;                            // tangent lines
  var mc_derivFunction  = null;                            // y'      lines
  var mc_derivFunction2 = null;

  var mc_coord          = null;

  var pointF            = null;                             // point object
  var pointO            = null;                             // point origin
  var sPointName        = 'N/image/Box2.jpg';               //       file name

  var xMin0             = -300;
  var xMax0             =  300;
  var yMin0             = -200;
  var yMax0             =  200;
  var xMin              = -300;
  var xMax              =  300;
  var yMin              = -200;
  var yMax              =  200;
  
  var x0Current         = 250;
  var y0Current         = 205;

  var txt_M             = null;
  var txt_N             = null;

  var txt_inputT        = null;   
  var txt_outputT       = null;
  var txt_functionT     = null;

  var txt_input         = null;   
  var txt_output        = null;
  var txt_function      = null;

  var txt_xInT          = null;
  var txt_yOutT         = null;
  var txt_yDOutT        = null;
  var txt_yDDOutT       = null;
  var txt_xIn           = null;
  var txt_yOut          = null;
  var txt_yDOut         = null;
  var txt_yDDOut        = null;

  var xF                = 0;             // current value x
  var yF                = 0;             //               y
  var yFD               = 0;             //               Dy
  var yFDD              = 0;             //               DDy

  var txt_coordX        = null;
  var txt_coordY        = null;

  var txt_tMinT         = null;
  var txt_tMaxT         = null;
  var txt_tCurT         = null;
  var txt_tMin          = null;
  var txt_tMax          = null;
  var txt_tCur          = null;

  var nTMin             =  0;
  var nTMax             = 10;
  var nTCur             =  0;
  var bTCur             = false;

  var rx                = "";
  var ry                = "";
  var sParam            = "";
  var nRx               = 0;                             // position
  var nRy               = 0;
  var nVx               = 0;                             // velocity
  var nVy               = 0;
  var nAx               = 0;                             // acceleration
  var nAy               = 0;

  var txt_rT            = null;
  var txt_vT            = null;
  var txt_aT            = null;

  var xCb               = 10;
  var yCb               = 30;
  var dxCb              = 60;
  var dyCb              = 18;
                    

  var xOrigin_0         = 308; 
  var xOrigin           = 308; 
  var yOrigin_0         = 215; 
  var yOrigin           = 215; 

  var x0mc              = 308; 
  var y0mc              = 215; 

  var x0Graph           = 125        ;
  var y0Graph           = 250        ;
  var xScaleGraph       = 1/25       ;
  var yScaleGraph       = 1/25       ;
  var zScaleGraph       = 1/25       ;
  var xScale0           = 1/25       ;
  var yScale0           = 1/25       ;
  var xScale            = 1/25       ;
  var yScale            = 1/25       ;

  var x0_mc3D           = 125        ;
  var y0_mc3D           = 250        ;
  var x00               = 0          ;
  var y00               = 0          ;
  var z00               = 0          ;
  var x0                = 0          ;
  var y0                = 0          ;
  var z0                = 0          ;
  
  var xRotMax           = 490        ;

  var alphaInit         = 110        ;
  var thetaInit         = 15         ;
  var nRotStep          = 10         ;

  var vectorAxis        = null;   
  var vectorR           = null;   
  var vectorV           = null;   
  var vectorA           = null;   

  var nColAxis          = '#AAAAAA';
  var nColGrid          = '#CCCCCC';
  var nColEditY         = '#FFFFFF';
  var nColEditN         = '#AAFFFAA';
  var nColorFunction    = '#FF00AA'; //0xFF0000;
  var nColorTangent     = '#000000'; //0xFF0000;
  var nColorFunctionD   = '#0000FF'; //0xFF0000;
  var nColorFunctionDD  = '#00FF00'; //0xFF0000;
  var nColDerivTangent  = '#0000FF';
  var nColDerivFunction = '#0000FF';
  var nColDerivF2       = '#AA00FF';
  var nColorR           = '#000000'; //0xAAAAAA;
  var nColorV           = '#0000FF';
  var nColorA           = '#FF0000'; //0x000000;
       
  var cb_tangent        = null;
  var cb_y              = null;
  var cb_yD             = null;
  var cb_yDD            = null;

  var cb_axis           = null;
  var cb_grid           = null;
  var cb_P              = null;
  var cb_FAuto          = null;
  var cb_R              = null;
  var cb_V              = null;
  var cb_A              = null;
  var cb_txt            = null;
  var cb_polar          = null;
  var cb_coord          = null;
  var cb_origin         = null;
  var cb_formula        = null;
  var cb_path           = null; 
  var cb_derivTangent   = null;
  var cb_derivFunction  = null;
  var pb_clear          = null;
  var pb_reset          = null;

  var sb_V              = null;
  var sb_VA             = null;
  var txt_sbVA          = null;

  var sP0               = xMax;    // start   scrollposition
  var sP                = xMax0;   // current 

  var nVA               = 1;

  var formulaVF         = null     // formula

  var pointF            = null     // pointOrigin;

  var fCtMin            = null   
  var fCtMax            = null   
  var fCtCur            = null   

  var fCinput           = null     // calculator engine  rx  
  var fCoutput          = null     //                    ry
  var fCfunction        = null     //                    function
  var fCDx              = null     //                    vx 
  var fCDy              = null     //                    vy 
  var fCDDx             = null     //                    ax  
  var fCDDy             = null     //                    ay  
  var fCyIn             = null     //                    y  In
  var fCyDIn            = null     //                    y' In
  var fCpolar           = null     //                    polar

  var bAuto             = false;

  var txt_head          = null;
  var sHead             = "Calculator";

  var txt_vFac          = null;
  var sVFac             = "Vector scale";

  sInfo                 = "\r" +
                          " Calculator \r\r" +
 
                          " Computing arithmetic expressions. \r" +
                          " Drawing graph.";  
                                                  

  this.movePos          = movePos ;                         // public     function(s)
  this.get_info         = get_info;    
  this.show             = show    ;
  this.set_layer        = set_layer

  init();                                                   // start      function
   
  /*------------------------------------------------------------------------------------------------------ init ---*/

  function init() {
    init_layer      ();
    init_canvas     ();
    init_calculator ();
    init_obj        ();
    init_listener   ();
    init_axis       ();
    init_grid       ();
  }
  /*------------------------------------------------------------------------------------------------ init_layer ---*/

  function init_layer()       {
    layerSim     = new CLayer('simCalc' ,51,nColLayer);                            // create layer simulations   
    layerObj     = new CLayer('objCalc' ,52,nColLayer);                            // create layer control objects
    layerFormula = new CLayer('simCalc' ,53,nColLayer);  layerFormula.show(false)  // create layer formula
    layerCx      = new CLayer('simCalc' ,54,nColLayer);  layerCx     .show(false)  // create layer coordinate x
    layerCy      = new CLayer('simCalc' ,54,nColLayer);  layerCy     .show(false)  //                         y

    layerCx.set_ps(x0mc+17,y0mc+ 2,50,50);  layerCy.set_ps(x0mc-25,y0mc-35,50,50); // layerCoord   pos/size
  }
  /*--------------------------------------------------------------------------------------------------- init_mc ---*/

  function init_canvas() {
    mc_grid           = new CCanvas (layerSim, 1,nColGrid  ,xOrigin_0,yOrigin_0);
    mc_axis           = new CCanvas (layerSim, 2,nColCanvas,x0mc,y0mc);
    mc_derivTangent   = new CCanvas (layerSim, 3,nColCanvas,x0mc,y0mc);      mc_derivTangent  .show(false);
    mc_derivFunction  = new CCanvas (layerSim, 4,nColCanvas,x0mc,y0mc);      mc_derivFunction .show(false);
    mc_derivFunction2 = new CCanvas (layerSim, 5,nColCanvas,x0mc,y0mc);      mc_derivFunction2.show(false);
    mc_function       = new CCanvas (layerSim, 6,nColCanvas,x0mc,y0mc);
    mc_functionD      = new CCanvas (layerSim, 7,nColCanvas,x0mc,y0mc);      mc_functionD     .show(false);
    mc_functionDD     = new CCanvas (layerSim, 8,nColCanvas,x0mc,y0mc);      mc_functionDD    .show(false);
    mc_tangent        = new CCanvas (layerSim, 9,nColCanvas,x0mc,y0mc);      mc_tangent       .show(false);
    mc_P              = new CCanvas (layerSim,10,nColCanvas,x0mc,y0mc);
    mc_FPoint         = new CCanvas (layerSim,15,nColCanvas,x0mc,y0mc);
  }
  /*------------------------------------------------------------------------------------------ init_calculator --- */

  function init_calculator() {
   
     fCpolar       = new FunctionCompute();     // polar coordinates

     fCtMin        = new FunctionCompute();     // parameter value  minimum
     fCtMax        = new FunctionCompute();     //                  maximum
     fCtCur        = new FunctionCompute();     //                  current

     fCinput       = new FunctionCompute();     // position         x
     fCoutput      = new FunctionCompute();     //                  y

     fCfunction    = new FunctionCompute();     // function
     fCyIn         = new FunctionCompute();
     fCyDIn        = new FunctionCompute();

     fCDx          = new FunctionCompute();     // 1.diff.          x
     fCDy          = new FunctionCompute();     //                  y

     fCDDx         = new FunctionCompute();     // 2.diff.          x
     fCDDy         = new FunctionCompute();     //                  y
  }
  /*------------------------------------------------------------------------------------------------- init_axis ---*/

  function init_axis() {       
    mc_axis.lineStyle (0.5,nColAxis,1);
    mc_axis.vector    (xMin,0   ,xMax,0   ,1,nColAxis);
    mc_axis.vector    (0   ,yMax,0   ,yMin,1,nColAxis);
  }
  /*------------------------------------------------------------------------------------------------- init_grid ---*/
 
  function init_grid() {
    mc_grid.clear();
    mc_grid.lineStyle(0.5,nColGrid,1);
    for(var i = yMin;i<=yMax;i=i+25) {
      mc_grid.moveTo(xMin,i); mc_grid.lineTo(xMax,i);
    }
    for(var i = xMin;i<=xMax;i=i+25) {
      mc_grid.moveTo(i,yMin); mc_grid.lineTo(i,yMax);
    }
  }
  /*-------------------------------------------------------------------------------------------------- objLoad ---*/

  function objLoad() {                          // complete load of external objects
  }
  /*------------------------------------------------------------------------------------------------- init_obj ---*/

 function init_obj() {

    pointF           = new ObjExt  (layerSim,0,0,sPointName,1,xOrigin,yOrigin);

    txt_head         = new Txt     (layerObj,  75,  10,210,20,sHead     ,false,false,'#FFFFFF','#0000FF');
 
    txt_inputT       = new Txt     (layerObj,   0,  35, 50,20,"Input"   ,false,false,'#FFFFFF','#0000FF');
    txt_outputT      = new Txt     (layerObj,   0,  85, 50,20,"Output"  ,false,false,'#FFFFFF','#0000FF');
    txt_functionT    = new Txt     (layerObj,   0, 170, 60,20,"Function",false,false,'#FFFFFF','#0000FF');
    txt_input        = new Txt     (layerObj,   5,  55,210,20,""        ,true ,true                     );
    txt_output       = new Txt     (layerObj,   5, 105,210,20,""        ,true ,false,nColEditN          );

    txt_function     = new Txt     (layerObj,   5, 190,210,20,""        ,true ,true                     );

    txt_xInT         = new Txt     (layerObj,   0, 220, 40,20,"x   = "  ,false,false                    );
    txt_yOutT        = new Txt     (layerObj,   0, 245, 40,18,"y   = "  ,false,false                    );
    txt_yDOutT       = new Txt     (layerObj,   0, 270, 40,18,"y'  = "  ,false,false                    );
    txt_yDDOutT      = new Txt     (layerObj,   0, 295, 40,18,"y'' = "  ,false,false                    );
    txt_xIn          = new Txt     (layerObj,  40, 220, 75,20,""        ,true ,true                     );
    txt_yOut         = new Txt     (layerObj,  40, 245, 75,18,""        ,true ,false,nColEditN          );
    txt_yDOut        = new Txt     (layerObj,  40, 270, 75,18,""        ,true ,false,nColEditN          );
    txt_yDDOut       = new Txt     (layerObj,  40, 295, 75,18,""        ,true ,false,nColEditN          );

    txt_coordX       = new Txt     (layerCx ,   0,   0, 50,20,"1"       ,false,true );   txt_coordX.set_alpha(0.5);
    txt_coordY       = new Txt     (layerCy ,   0,   0, 50,20,"1"       ,false,true );   txt_coordY.set_alpha(0.5);
    
    cb_tangent       = new Cb      (layerObj, 130, 220, 15,15,"Tangent" ,false,60,15);
    cb_y             = new Cb      (layerObj, 130, 245, 15,15,"Graph"   ,true ,60,15);
    cb_yD            = new Cb      (layerObj, 130, 270, 15,15,"Graph"   ,false,60,15);
    cb_yDD           = new Cb      (layerObj, 130, 295, 15,15,"Graph"   ,false,60,15);

    cb_derivTangent  = new Cb      (layerObj, 202, 223, 12,12,""        ,false, 0, 0);
    cb_derivFunction = new Cb      (layerObj, 202, 273, 12,12,""        ,false, 0, 0);

    cb_axis          = new Cb      (layerObj,   2, 370, 15,15,"Axis"    ,true ,50,15);
    cb_grid          = new Cb      (layerObj,   2, 390, 15,15,"Grid"    ,true ,50,15);
    cb_coord         = new Cb      (layerObj,  72, 370, 15,15,"Coord"   ,false,50,15);
    cb_origin        = new Cb      (layerObj,  72, 390, 15,15,"Origin"  ,false,50,15);

    pb_reset         = new Pb      (layerObj,   5, 420,212,20,"Reset"               );
 
    sb_V             = new Sb      (layerSim,   7, 419,600, 0, 2*xMax,1,  0         );   sb_V.set_value(sP0);
  }
  /*--------------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener() {
    txt_input        .get_obj() .oninput     = function() { act_TxtInput        ();}
    txt_function     .get_obj() .oninput     = function() { act_TxtFunction     ();}
    txt_xIn          .get_obj() .oninput     = function() { act_TxtXIn          ();}
    txt_coordX       .get_obj() .oninput     = function() { act_TxtCoordX       ();}
    txt_coordY       .get_obj() .oninput     = function() { act_TxtCoordY       ();}
  //cb_P             .get_obj() .onclick     = function() { act_CbFPoint        ();}
    cb_tangent       .get_obj() .onclick     = function() { act_CbTangent       ();}
    cb_y             .get_obj() .onclick     = function() { act_CbY             ();}
    cb_yD            .get_obj() .onclick     = function() { act_CbYD            ();}
    cb_yDD           .get_obj() .onclick     = function() { act_CbYDD           ();}
    cb_grid          .get_obj() .onclick     = function() { act_CbGrid          ();}
    cb_axis          .get_obj() .onclick     = function() { act_CbAxis          ();}
    cb_coord         .get_obj() .onclick     = function() { act_CbCoord         ();}
    cb_origin        .get_obj() .onclick     = function() { act_CbOrigin        ();}
    cb_derivTangent  .get_obj() .onclick     = function() { act_CbDerivTangent  ();}
    cb_derivFunction .get_obj() .onclick     = function() { act_CbDerivFunction ();}
    pb_reset         .get_obj() .onclick     = function() { act_PbReset         ();}
    sb_V             .get_obj() .onmousedown = function() { act_sbV             ();}
    sb_V             .get_obj() .onmousemove = function() { act_sbV             ();}
    sb_V             .get_obj() .ontouchmove = function() { act_sbV             ();}
    
    window.onclick      = function() {act_click();}    // click the new postion of origin
    window.ontouchstart = function() {act_click();}
    window.ontouchmove  = function() {act_click();}
  }
  /*---------------------------------------------------------------------------------------------------- action ---*/

  function act_click() {
    if(cb_origin.selected() && event.clientX <= 615 && event.clientY <= 530) {
      moveOrigin();
    }
  }
 
  function act_CbOrigin() {
    if(cb_origin.selected()) {
      sP0 = Number(sb_V.scrollPosition()) - xOrigin;
    }
  }

  function act_CbGrid() {
    mc_grid.show(cb_grid.selected());
  }

  function act_CbAxis() {
    mc_axis.show(cb_axis.selected());
  }

  function act_CbTangent() {
    mc_tangent.show(cb_tangent.selected());
  }

  function act_CbY() {
    mc_function.show(cb_y.selected());
  }

  function act_CbYD() {
    mc_functionD.show(cb_yD.selected());
  }

  function act_CbYDD() {
    mc_functionDD.show(cb_yDD.selected());
  }

  function act_CbGridF() {
    if(cb_grid.selected()) {
     draw_vectorFGridF(); }
    else {
      mc_F.clear();
    }
  }

  function act_CbFPoint() {
    mc_P.show(cb_FPoint.selected());
  }

  function act_CbF() {
    mc_FPoint.show(cb_F.selected());
  }

  function act_CbCoord() {
    layerCx.show(cb_coord.selected());
    layerCy.show(cb_coord.selected());
  }
 
  function act_CbDerivTangent() {
    mc_derivTangent.show(cb_derivTangent.checked());
  }

  function act_CbDerivFunction() {
    mc_derivFunction .show(cb_derivFunction.checked());
    mc_derivFunction2.show(cb_derivFunction.checked());
  }

  function act_TxtInput() {  
    var s = txt_input.value(); 
    if(s != "") {
      fCinput .infixPostfix (s);           
      txt_output.set_value(fCinput.valueX(1)); }
    else {
      txt_output.set_value("");
    }
  }

  function act_TxtFunction() {  
    var sF = txt_function.value();
    if(sF != "") {
      fCfunction.exprX(sF);       
      fCDy      .exprX (fCfunction.get_derivate_function_symbolic());
      fCDDy     .exprX (fCDy      .get_derivate_function_symbolic());
      draw_function();
      draw_functionD();
      draw_functionDD();
      draw_tangent();
      draw_derivTangent();
      draw_derivFunction();
    }
  }

  function act_TxtXIn() {
    xF = txt_xIn.value();
    if(xF != "") {
      var xFt = fCyIn.valueX(fCyIn.exprX(xF));
      yF   = fCfunction.valueX(xFt);
      yFD  = fCDy      .valueX(xFt);
      yFDD = fCDDy     .valueX(xFt);
      pointF.set_xy(xFt/xScale + xOrigin - xOrigin_0,-yF/yScale + yOrigin - yOrigin_0);
      sb_V.set_value(xOrigin-8+xFt/xScale);
      set_functionValue() ;
      draw_derivTangent();
      draw_derivFunction();
      act_CbOrigin();
    }
  }

  function act_TxtCoordX() {
    var s = txt_coordX.value();
    var n = 1;
    if(s != "") {
      n = Number(s);
    }      
    xScaleGraph = n/25;
    xScale      = n/25;
    draw_function();
  }

  function act_TxtCoordY() {
    var s = txt_coordY.value();
    var n = 1;
    if(s != "") {
      n = Number(s); 
    }      
    yScaleGraph = n/25;
    yScale      = n/25;
    draw_function();
    draw_functionD();
    draw_functionDD();
    draw_tangent();
  }

   function act_sbV() {
    var n  = sb_V.scrollPosition();
    if(txt_function.value() != "") {
      act_CbOrigin();
      xF   = (n-xMax0 + xOrigin_0-xOrigin)*xScale;
      yF   = fCfunction.valueX(xF);
      yFD  = fCDy      .valueX(xF);
      yFDD = fCDDy     .valueX(xF);
      set_functionValue ();
      draw_derivTangent ();
      draw_derivFunction();
      move_point(n);
    }
  }
  
  function act_PbReset() {
    var xTmp    = xOrigin_0;
    var yTmp    = yOrigin_0;
    xOrigin     =  8 + 25*Math.round(xTmp/25);
    yOrigin     = 15 + 25*Math.round((yTmp-25)/25);
    if(xOrigin >= 0 && xOrigin <= 610 && yOrigin >= 5 && yOrigin <= 420) {
    mc_axis.clear(); 
    xMin    = xMin0+(xOrigin_0-xOrigin);  
    xMax    = xMax0+(xOrigin_0-xOrigin);  
    yMax    = yMax0+(yOrigin_0-yOrigin);  
    yMin    = yMin0+(yOrigin_0-yOrigin);  
    var x1  = Number(sb_V.scrollPosition()) - (xOrigin_0 - xOrigin);
    sb_V.set_value(x1);  
    sb_V.set_value(xOrigin-8);  
    move_point(sb_V.scrollPosition());
    xF   = (sb_V.scrollPosition()-xMax0 + xOrigin_0-xOrigin)*xScale;
    yF   = fCfunction.valueX(xF);
    yFD  = fCDy      .valueX(xF);
    yFDD = fCDDy     .valueX(xF);
    set_functionValue();
    draw_derivTangent();     
    move_canvas      (); 
    } 
  }
  /*----------------------------------------------------------------------------------------- set_functionValue ---*/

  function set_functionValue() {
    var k = 1000;
    draw_tangent();
    txt_xIn    .set_value(xF  );
    txt_yOut   .set_value(Math.round(yF  *k)/k);
    txt_yDOut  .set_value(Math.round(yFD *k)/k);
    txt_yDDOut .set_value(Math.round(yFDD*k)/k);  
  }
 
  /*------------------------------------------------------------------------------------------------------ draw ---*/

  function draw_function() {
    var x = xMin*xScale;
    var y = fCfunction.valueX(x);    
    mc_function.clear();
    mc_function.lineStyle(0.5,nColorFunction,1);
    mc_function.moveTo(x/xScale,-y/yScale);
    while(x<=xMax*xScale) {
      y = fCfunction.valueX(x); 
      if(y<=-yMin*yScale && y>=-yMax*yScale) { 
        mc_function.lineTo(x/xScale,-y/yScale); }
      else {
        mc_function.moveTo(x/xScale,-y/yScale);
      }
      x = x + 0.05;
    }
    act_sbV();
  }

  function draw_functionD() {
    var x = xMin*xScale;
    var y = fCDy.valueX(x);    
    mc_functionD.clear();
    mc_functionD.lineStyle(0.5,nColorFunctionD,1);
    mc_functionD.moveTo(x/xScale,-y/yScale);
    while(x<=xMax*xScale) {
      y = fCDy.valueX(x);
      if(y<=-yMin*yScale && y>=-yMax*yScale) {  
        mc_functionD.lineTo(x/xScale,-y/yScale); }
      else {
        mc_functionD.moveTo(x/xScale,-y/yScale);
      }
      x = x + 0.05;
    }
    act_sbV();
  }

  function draw_functionDD() {
    var x = xMin*xScale;
    var y = fCDDy.valueX(x);    
    mc_functionDD.clear();
    mc_functionDD.lineStyle(0.5,nColorFunctionDD,1);
    mc_functionDD.moveTo(x/xScale,-y/yScale);
    while(x<=xMax*xScale) {
      y = fCDDy.valueX(x); 
      if(y<=-yMin*yScale && y>=-yMax*yScale) {  
        mc_functionDD.lineTo(x/xScale,-y/yScale); }
      else {
        mc_functionDD.moveTo(x/xScale,-y/yScale);
      }
      x = x + 0.05;
    }
    act_sbV();
  }

  function draw_tangent() {  
    var x = xMin*xScale;
    var y = yF + yFD*(x-xF);
    mc_tangent.clear();
    mc_tangent.lineStyle(0.5,nColorTangent,1);
    mc_tangent.moveTo(x/xScale,-y/yScale);
    while(x<=xMax*xScale) {
      y =yF + yFD*(x-xF); 
      if(y<=-yMin*yScale && y>=-yMax*yScale) {   
        mc_tangent.lineTo(x/xScale,-y/yScale); }
      else {
        mc_tangent.moveTo(x/xScale,-y/yScale);
      }
      x = x + 0.05;
    }
  }

  function draw_derivTangent() {
    var xP = pointF.get_x() - (xOrigin - xOrigin_0);   
    var yP = pointF.get_y() - (yOrigin - yOrigin_0);
    var x2 = xP + 1/xScale;
    mc_derivTangent.clear();
    mc_derivTangent.lineStyle(0.5,nColDerivTangent,1);
    mc_derivTangent.moveTo(xP,yP);
    mc_derivTangent.lineTo(x2,yP);
    mc_derivTangent.lineTo(x2,yP - yFD*(x2-xP)*xScale/xScale0*yScale0/yScale);
  }

  function draw_derivFunction() {
    var xP = pointF.get_x() - (xOrigin - xOrigin_0);  
    var yP = pointF.get_y() - (yOrigin - yOrigin_0);
    var x2 = xP + 1/xScale;
    var yD = fCDy.valueX(xF);
    mc_derivFunction  .clear();        mc_derivFunction .lineStyle(0.5,nColDerivTangent,1);
    mc_derivFunction2 .clear();        mc_derivFunction2.lineStyle(3  ,nColDerivF2     ,1);
    mc_derivFunction  .moveTo(xP,yP);
    mc_derivFunction  .lineTo(x2,yP);
    mc_derivFunction2 .moveTo(x2,yP);
    mc_derivFunction2 .lineTo(x2,yP - yFD*(x2-xP)*xScale/xScale0*yScale0/yScale);
    mc_derivFunction2 .moveTo(xP,0);
    mc_derivFunction2 .lineTo(xP,-yD/yScale);
  }
  /*------------------------------------------------------------------------------------------------------- move ---*/
 
  function moveOrigin() {
    var xTmp = simPosX();
    var yTmp = simPosY();
    xOrigin =  8 + 25*Math.round(xTmp/25);
    yOrigin = 15 + 25*Math.round(yTmp/25);
    if(xOrigin >= 0 && xOrigin <= 610 && yOrigin >= 5 && yOrigin <= 420) {
    mc_axis.clear(); 
    xMin    = xMin0+(xOrigin_0-xOrigin);  
    xMax    = xMax0+(xOrigin_0-xOrigin);  
    yMax    = yMax0+(yOrigin_0-yOrigin);  
    yMin    = yMin0+(yOrigin_0-yOrigin);  
    sP = Number(sb_V.scrollPosition());
    var x1 = xOrigin + sP0;
    sb_V.set_value(x1);  
    move_point(sb_V.scrollPosition());
    xF   = (sb_V.scrollPosition()-xMax0 + xOrigin_0-xOrigin)*xScale;
    yF   = fCfunction.valueX(xF);
    yFD  = fCDy      .valueX(xF);
    yFDD = fCDDy     .valueX(xF);
    set_functionValue ();
    draw_derivTangent ();
    draw_derivFunction();     
    move_canvas       ();  
    }
  }
  
  function move_canvas() {
    mc_axis          .set_xy(xOrigin,yOrigin);  init_axis();
    mc_derivTangent  .set_xy(xOrigin,yOrigin);      
    mc_derivFunction .set_xy(xOrigin,yOrigin);
    mc_derivFunction2.set_xy(xOrigin,yOrigin);    
    mc_function      .set_xy(xOrigin,yOrigin);
    mc_functionD     .set_xy(xOrigin,yOrigin);     
    mc_functionDD    .set_xy(xOrigin,yOrigin);     
    mc_tangent       .set_xy(xOrigin,yOrigin);    
    mc_P             .set_xy(xOrigin,yOrigin);
    mc_FPoint        .set_xy(xOrigin,yOrigin);
    pointF.set_xy(xF/xScale + xOrigin - xOrigin_0,-yF/yScale + yOrigin - yOrigin_0);
    draw_function  ();
    draw_functionD ();
    draw_functionDD();
    draw_tangent   ();
    draw_derivTangent();
    move_point(sb_V.scrollPosition());
    layerCx.set_ps(x0mc+17 + xOrigin - xOrigin_0,y0mc+ 2 + yOrigin - yOrigin_0,50,50);
    layerCy.set_ps(x0mc-25 + xOrigin - xOrigin_0,y0mc-35 + yOrigin - yOrigin_0,50,50); // layerCoord
  } 
  
  function move_point(n) {
    var xCur = (n-xMax0 + xOrigin_0-xOrigin)*xScale;
    var yCur;
    if(txt_function.value() != "") {
      yCur   = fCfunction.valueX(xCur);
      pointF  .set_x(xCur/xScale + xOrigin - xOrigin_0);
      pointF  .set_y(-yCur/yScale + yOrigin - yOrigin_0); }
    else {
      pointF  .set_x(xCur/xScale - xOrigin - xOrigin_0);
      pointF  .set_y(yOrigin - yOrigin_0); 
    }
  }
  /*-------------------------------------------------------------------------------------------------- get_info ---*/

  function get_info()    { 
    return sInfo;                                                       // get information
  }
  /*------------------------------------------------------------------------------------------------- set_layer ---*/

  function set_layer(layerSimT,layerObjT) { 
    layerSimT.appendL(layerSim,1);
    layerObjT.appendL(layerObj,2);
  }
  /*------------------------------------------------------------------------------------------------------ show ---*/

  function show(b)       {
    layerSim.show(b);     
    layerObj.show(b); 
  }    
  /*--------------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t,n)  {
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/