/*================================================================================================= Particle_01 ===*/

function Particle_01 () {


  var layerSim          = null;                            // layer         simulation window       
  var layerObj          = null;                            //               control    window
  var layerCx           = null;                            //               coordinate axis  x
  var layerCy           = null;                            //                                y
  var layerTab          = null;

  var nColLayer         = null;                            // color         layer  default
  var nColCanvas        = '#000000';                       // color         canvas default drawing (black)

  var mc_fig            = null;

  var mc_grid           = null;
  var mc_axis           = null;

  var mc_P              = null;                            // point
  var mc_FPoint         = null;

  var mc_r              = null;                            // position     vector
  var mc_v              = null;                            // velocity     vector
  var mc_a              = null;                            // acceleration vector

  var bR                = false;
  var bV                = false;
  var bA                = false;

  var mc_pathPre        = null; 
  var mc_path           = null;
  var mc_exp            = null;

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
  var xScale0           = 1; //1/25       ;
  var yScale0           = 1; //1/25       ;
  var xScale            = 1/25       ;
  var yScale            = 1/25       ;

  var nColAxis          = '#AAAAAA';
  var nColGrid          = '#CCCCCC';
  var nColEditY         = '#FFFFFF';
  var nColEditN         = '#AAFFFAA';
  var nColorFunction    = '#FF00AA'; //0xFF0000;
  var nColPathPre       = '#BBBBFF';
  var nColPath          = '#FF00ff';

  var nColR             = '#000000';
  var nColV             = '#0000FF';
  var nColA             = '#FF0000';

  var nVFac             = 5;                     // vector factor
  
  var txt_rxA           = null;
  var txt_ryA           = null;
  var txt_rx            = null;
  var txt_ry            = null;

  var txt_vxA           = null;
  var txt_vyA           = null;
  var txt_vx            = null;
  var txt_vy            = null;

  var txt_axA           = null;
  var txt_ayA           = null;
  var txt_ax            = null;
  var txt_ay            = null;

  var cb_axis           = null;
  var cb_grid           = null;
  var cb_P              = null;

  var cb_r              = null;
  var cb_v              = null;
  var cb_a              = null;

  var cb_math           = null;                // mathematical model
  var cb_exp            = null;                // experiment

  var rb_math           = null;                // mathematical model
  var rb_exp            = null;                // experiment
  var sGroup            = 'gr1';               // radioButton 

  var cb_coord          = null;
  var cb_origin         = null;
  var cb_path           = null; 
  var cb_pathPre        = null;
  var cb_path10         = null;
  var cb_path100        = null;
  var bPath             = false;
  var bPathPre          = false;
  var bPath10           = false;
  var bPath100          = true ;
  var nPath10           = 10;
  var nPath100          = 100;
  var nPath             = nPath100;

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

  var particle          = null     // particle
  var r0x               =   0;
  var r0y               =   0;
  var v0x               =   0;
  var v0y               =   0;
  var rx                =   0;
  var ry                =   0;
  var vx                =   0;
  var vy                =   0;
  var ax                =   0;
  var ay                =   0;

  var nTimeArray        = 20000;
  var rxArray           = Array(nTimeArray);
  var ryArray           = Array(nTimeArray);
  var vxArray           = Array(nTimeArray);
  var vyArray           = Array(nTimeArray);
  var axArray           = Array(nTimeArray);
  var ayArray           = Array(nTimeArray);

  var fCtMin            = null   
  var fCtMax            = null   
  var fCtCur            = null   

  var bAuto             = false;

  var txt_head          = null;
  var sHead             = "Particle - Mathematical Model";

  var nNumExp           = 100;
  var nNumExpGroup      =  20;
  var txt_xA            = null;
  var txt_yA            = null;
  var txt_expA          = Array(nNumExp);
  var txt_expX          = Array(nNumExp);
  var txt_expY          = Array(nNumExp);

  var txt_vFac          = null;
  var sVFac             = "Vector scale";

  var sb_tab            = null;

  var sb_VFac           = null;
  var nVFac             = 5;                     // vector factor

  var fCrx              = null;
  var fCry              = null;
  var fCvx              = null;
  var fCvy              = null;
  var fCax              = null;
  var fCay              = null;

  var fCtTimeStart      = null;
  var fCtTimeEnd        = null;

  var tTimeStartA       = null;        // prePath time start
  var tTimeEndA         = null;        //              end
  var tTimeStart        = 0;           // prePath time start
  var tTimeEnd          = 10;          //              end

  var txt_tTimeStart    = null;
  var txt_tTimeEnd      = null;

  var tTime             = 0;       // current time
  var nTime             = 4;       // current move_particle paramter n

//var excel             = null;
//var excel = new ActiveXObject("Excel.Application");
//var excel_file = excel.Workbooks.Open("N/prog/Physics/k03/Particle.xls");
//var excel_sheet = excel.Worksheets("Sheet1");
//var data = excel_sheet.Cells(1,1).Value;

var xhttp = null; //= new XMLHttpRequest();

  sInfo                 = "\r" +
                          " Particle Motion - Mathematical Modelling \r\r" +
 
                          " In this application you can make a mathematical model \r" +
                          " of the motion of particle \r" +
                          " by a given expression for position, velocity or acceleration \r" +
                          " as a function of time.\r" +
                          " At the same time it's possible to compare this model \r" +
                          " to the result from a particle experiment.";
                                                  

  this.movePos          = movePos ;                         // public     function(s)
  this.get_info         = get_info;    


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
    init_path       ();
    show_exp        (false);
    act_PbClearMath (); 
    init_rxry       (); 
    act_TxtRx       ();
    act_TxtRy       (); 
    draw_pathPre    ();
    init_vector     ();
    move_particle   (tTime,nTime);
  }
  /*------------------------------------------------------------------------------------------------ init_layer ---*/

  function init_layer()       {
    layerSim     = new CLayer('sim' ,51,nColLayer);                            // create layer simulations   
    layerObj     = new CLayer('obj' ,52,nColLayer);                            // create layer control objects
  //layerFormula = new CLayer('sim' ,53,nColLayer);  layerFormula.show(false)  // create layer formula
    layerCx      = new CLayer('sim' ,54,nColLayer);  layerCx     .show(false)  // create layer coordinate x
    layerCy      = new CLayer('sim' ,54,nColLayer);  layerCy     .show(false)  //                         y
  //layerTab     = new CLayer('obj' ,55,nColLayer);

  //layerTab.set_ps(20,50,200,100);
    layerCx.set_ps(x0mc+17,y0mc+ 2,50,50);  layerCy.set_ps(x0mc-25,y0mc-35,50,50); // layerCoord   pos/size
  }
  /*--------------------------------------------------------------------------------------------------- init_mc ---*/

  function init_canvas() {
    mc_grid           = new CCanvas (layerSim, 1,nColGrid  ,xOrigin_0,yOrigin_0);
    mc_axis           = new CCanvas (layerSim, 2,nColCanvas,x0mc,y0mc);
    mc_exp            = new CCanvas (layerSim, 3,nColCanvas,x0mc,y0mc);
    mc_pathPre        = new CCanvas (layerSim, 4,nColCanvas,x0mc,y0mc);     mc_pathPre.show(bPathPre);
    mc_path           = new CCanvas (layerSim, 5,nColCanvas,x0mc,y0mc);     mc_path   .show(bPath   );
    mc_r              = new CCanvas (layerSim, 6,nColCanvas,x0mc,y0mc);     mc_r      .show(bR      );
    mc_v              = new CCanvas (layerSim, 7,nColCanvas,x0mc,y0mc);     mc_v      .show(bV      );
    mc_a              = new CCanvas (layerSim, 8,nColCanvas,x0mc,y0mc);     mc_a      .show(bA      );
    mc_P              = new CCanvas (layerSim,10,nColCanvas,x0mc,y0mc);
    mc_FPoint         = new CCanvas (layerSim,15,nColCanvas,x0mc,y0mc);
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
  function init_vector() {
    mc_r.clear(); mc_r.lineStyle(0.5,nColR,1);
    mc_v.clear(); mc_v.lineStyle(0.5,nColV,1);
    mc_a.clear(); mc_a.lineStyle(0.5,nColA,1);
  }
  /*------------------------------------------------------------------------------------------ init_calculator ---*/
  function init_calculator() {
    fCrx          = new FunctionCompute();
    fCry          = new FunctionCompute();
    fCvx          = new FunctionCompute();
    fCvy          = new FunctionCompute();
    fCax          = new FunctionCompute();
    fCay          = new FunctionCompute();
    fCtTimeStart  = new FunctionCompute();
    fCtTimeEnd    = new FunctionCompute();
  }
  function init_path() {
    mc_path    .clear();  mc_path    .lineStyle(0.5,nColPath   ,1);
    mc_pathPre .clear();  mc_pathPre .lineStyle(0.5,nColPathPre,1);  mc_pathPre.show(false);
  }
  function init_rxry() {
    txt_rx.set_value("10cos(3t)");
    txt_ry.set_value("5sin(2t)");
  }
  /*-------------------------------------------------------------------------------------------------- objLoad ---*/

  function objLoad() {                          // complete load of external objects
  }
  /*------------------------------------------------------------------------------------------------- init_obj ---*/

 function init_obj() {

    pointF           = new ObjExt  (layerSim,0,0,sPointName,1,xOrigin,yOrigin); pointF.show(false);
    particle         = new ObjExt  (layerSim,0,0,sPointName,1,xOrigin,yOrigin); objLoad();

    txt_head         = new Txt     (layerObj,  25,  10,210,20,sHead     ,false,false,'#FFFFFF','#0000FF');
 
  //xhttp = new XMLHttpRequest();
    
    txt_rxA           = new Txt     (layerObj , 10, 70, 30,20,"rx"     ,false,false,'#FFFFFF','#0000FF');
    txt_ryA           = new Txt     (layerObj , 10, 90, 30,20,"ry"     ,false,false,'#FFFFFF','#0000FF');
    txt_vxA           = new Txt     (layerObj , 10,120, 30,20,"vx"     ,false,false,'#FFFFFF','#0000FF');
    txt_vyA           = new Txt     (layerObj , 10,140, 30,20,"vy"     ,false,false,'#FFFFFF','#0000FF');
    txt_axA           = new Txt     (layerObj , 10,170, 30,20,"ax"     ,false,false,'#FFFFFF','#0000FF');
    txt_ayA           = new Txt     (layerObj , 10,190, 30,20,"ay"     ,false,false,'#FFFFFF','#0000FF');

    txt_rx            = new Txt     (layerObj , 40, 70,150,20,""       ,true ,true);
    txt_ry            = new Txt     (layerObj , 40, 90,150,20,""       ,true ,true);
    txt_vx            = new Txt     (layerObj , 40,120,150,20,""       ,true ,true);
    txt_vy            = new Txt     (layerObj , 40,140,150,20,""       ,true ,true);
    txt_ax            = new Txt     (layerObj , 40,170,150,20,""       ,true ,true);
    txt_ay            = new Txt     (layerObj , 40,190,150,20,""       ,true ,true);
    
     
    txt_xA            = new Txt     (layerObj,  65,  40,20,20,"x"     ,false,false,'#FFFFFF','#0000FF');
    txt_yA            = new Txt     (layerObj, 130,  40,20,20,"y"     ,false,false,'#FFFFFF','#0000FF');
    for(var i=1;i<=nNumExp;i++) {
      txt_expA[i]     = new Txt     (layerObj , 30,60+((i-1)%20)*15, 30,15,i     ,false,false);
      txt_expX[i]     = new Txt     (layerObj , 70,60+((i-1)%20)*15, 50,15,""    ,true ,true );
      txt_expY[i]     = new Txt     (layerObj ,135,60+((i-1)%20)*15, 50,15,""    ,true ,true );
      if(i>nNumExpGroup) {
        txt_expA[i].show(false);  txt_expX[i].show(false);  txt_expY[i].show(false);
      }
    }
    txt_coordX       = new Txt     (layerCx ,   0,   0, 50,20,"1"       ,false,true );   txt_coordX.set_alpha(0.5);
    txt_coordY       = new Txt     (layerCy ,   0,   0, 50,20,"1"       ,false,true );   txt_coordY.set_alpha(0.5);

    txt_tTimeStartA  = new Txt     (layerObj ,102,360, 50,20,"tStart"   ,false,false);
    txt_tTimeEndA    = new Txt     (layerObj ,162,360, 50,20,"tEnd"     ,false,false);
    txt_tTimeStart   = new Txt     (layerObj ,107,340, 50,20,"0"        ,true ,true );
    txt_tTimeEnd     = new Txt     (layerObj ,167,340, 50,20,"2PI"      ,true ,true );

    cb_r             = new Cb      (layerObj,   2, 250, 15,15,"r"       ,false,20,15);
    cb_v             = new Cb      (layerObj,   2, 270, 15,15,"v"       ,false,20,15);
    cb_a             = new Cb      (layerObj,   2, 290, 15,15,"a"       ,false,20,15);

    cb_path          = new Cb      (layerObj,   2, 320, 15,15,"Path"    ,false,60,15);
    cb_pathPre       = new Cb      (layerObj,   2, 340, 15,15,"PathPre" ,false,60,15);
    cb_path10        = new Cb      (layerObj, 102, 320, 15,15,"1/10"    ,false,60,15);
    cb_path100       = new Cb      (layerObj, 162, 320, 15,15,"1/100"   ,true,60,15);
    cb_axis          = new Cb      (layerObj,   2, 370, 15,15,"Axis"    ,true ,50,15);   cb_axis.show(false);
    cb_grid          = new Cb      (layerObj,   2, 390, 15,15,"Grid"    ,true ,50,15);   cb_grid.show(false);
  //cb_math          = new Cb      (layerObj,   2, 400, 15,15,"Math"    ,true ,50,15);
  //cb_exp           = new Cb      (layerObj,   2, 420, 15,15,"Exp"     ,false ,50,15);
    cb_coord         = new Cb      (layerObj,  72, 400, 15,15,"Coord"   ,false,50,15);
    cb_origin        = new Cb      (layerObj,  72, 420, 15,15,"Origin"  ,false,50,15);

    rb_math          = new Rb      (layerObj,   2, 400, 15,15,"Math"    ,true ,50,15,sGroup);
    rb_exp           = new Rb      (layerObj,   2, 420, 15,15,"Exp"     ,false,50,15,sGroup);

  //pb_reset         = new Pb      (layerObj,   5, 420,212,20,"Reset"               );
    pb_clearMath     = new Pb      (layerObj,  40, 220,150,20,"Clear"               );
    pb_reset         = new Pb      (layerObj, 155, 420, 62,20,"Reset"               );
 
    sb_V             = new Sb      (layerSim,   7, 419,600, 0, 2*xMax  ,1,  0         );   sb_V.set_value(sP0);
    sb_VFac          = new Sb      (layerObj, 102, 290,110, 0, 20*nVFac,1, 10*nVFac   );
    sb_tab           = new Sb      (layerObj,  35, 365,160, 0, nNumExp ,1,  0         ); //sb_tab.set_widthHeight(20,100);
  //sb_tab.set_vertical();  sb_tab.set_widthHeight(20,100);
  }
  /*--------------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener() {
    txt_rx           .get_obj() .oninput     = function() { act_TxtRx           ();}
    txt_ry           .get_obj() .oninput     = function() { act_TxtRy           ();}
    txt_vx           .get_obj() .oninput     = function() { act_TxtVx           ();}
    txt_vy           .get_obj() .oninput     = function() { act_TxtVy           ();}
    txt_ax           .get_obj() .oninput     = function() { act_TxtAx           ();}
    txt_ay           .get_obj() .oninput     = function() { act_TxtAy           ();}
    
    txt_coordX       .get_obj() .oninput     = function() { act_TxtCoordX       ();}
    txt_coordY       .get_obj() .oninput     = function() { act_TxtCoordY       ();}
    txt_tTimeStart   .get_obj() .oninput     = function() { act_TxtTimeStart    ();}
    txt_tTimeEnd     .get_obj() .oninput     = function() { act_TxtTimeEnd      ();}
    cb_grid          .get_obj() .onclick     = function() { act_CbGrid          ();}
    cb_axis          .get_obj() .onclick     = function() { act_CbAxis          ();}
    cb_r             .get_obj() .onclick     = function() { act_CbR             ();}
    cb_v             .get_obj() .onclick     = function() { act_CbV             ();}
    cb_a             .get_obj() .onclick     = function() { act_CbA             ();}
    cb_path          .get_obj() .onclick     = function() { act_CbPath          ();}
    cb_pathPre       .get_obj() .onclick     = function() { act_CbPathPre       ();}
    cb_path10        .get_obj() .onclick     = function() { act_CbPath10        ();}
    cb_path100       .get_obj() .onclick     = function() { act_CbPath100       ();}
  //cb_math          .get_obj() .onclick     = function() { act_CbMath          ();}
  //cb_exp           .get_obj() .onclick     = function() { act_CbExp           ();}
    cb_coord         .get_obj() .onclick     = function() { act_CbCoord         ();}
    cb_origin        .get_obj() .onclick     = function() { act_CbOrigin        ();}
    rb_math          .get_obj() .onclick     = function() { act_RbMath          ();}
    rb_exp           .get_obj() .onclick     = function() { act_RbExp           ();}
    pb_clearMath     .get_obj() .onclick     = function() { act_PbClearMath     ();}
    pb_reset         .get_obj() .onclick     = function() { act_PbReset         ();}
  //sb_V             .get_obj() .onmousedown = function() { act_sbV             ();}
  //sb_V             .get_obj() .onmousemove = function() { act_sbV             ();}
  //sb_V             .get_obj() .ontouchmove = function() { act_sbV             ();}
    sb_VFac          .get_obj() .onmousedown = function() { act_sbVFac          ();}
    sb_VFac          .get_obj() .onmousemove = function() { act_sbVFac          ();}
    sb_VFac          .get_obj() .ontouchmove = function() { act_sbVFac          ();}
    sb_tab           .get_obj() .onmousedown = function() { act_sbTab           ();}
    sb_tab           .get_obj() .onmousemove = function() { act_sbTab           ();}
    sb_tab           .get_obj() .ontouchmove = function() { act_sbTab           ();}
    for(var i=1;i<=nNumExp;i++) {
      txt_expX[i]    .get_obj() .oninput     = function() { act_txtExp          ();}
      txt_expY[i]    .get_obj() .oninput     = function() { act_txtExp          ();}
    }
    
    document.onclick      = function() {act_click();}    // click the new postion of origin
    window.ontouchstart = function() {act_click();}
    window.ontouchmove  = function() {act_click();}
  }
  /*---------------------------------------------------------------------------------------------------- action ---*/

  function act_click() {
    if(cb_origin.selected() && event.clientX <= 615 && event.clientY <= 530) {
      moveOrigin();
    }
  }
  function act_TxtTimeStart() {
    var s = txt_tTimeStart.value();
    if(s == "") {
      s = "0"; 
    }
    fCtTimeStart.exprX(s);
    tTimeStart = fCtTimeStart.valueX(1);
    draw_pathPre();
  }
  function act_TxtTimeEnd  () {
    var s = txt_tTimeEnd.value();
    if(s == "") {
      s = "0"; 
    }
    fCtTimeEnd.exprX(s);
    tTimeEnd = fCtTimeEnd.valueX(1);
    draw_pathPre();
  }
  function act_TxtRx() {
    var s = txt_rx.value();
    if(s == "") {
      s = "0";
    }
    fCrx.exprX(s,"t");
    fCvx .exprX (fCrx.get_derivate_function_symbolic());       
    fCax.exprX (fCvx.get_derivate_function_symbolic());   
    if(bPathPre) {
      draw_pathPre();
    }
    move_particle(tTime,nTime);
  //var a = is_tIn(s);
  }
  function act_TxtRy() {
    var s = txt_ry.value();
    if(s == "") {
      s = "0";
    }
    fCry.exprX(s,"t");    
    fCvy .exprX (fCry.get_derivate_function_symbolic());   
    fCay.exprX (fCvy.get_derivate_function_symbolic());
    if(bPathPre) {
      draw_pathPre();
    }
    move_particle(tTime,nTime);
  }
  function act_TxtVx() {
    var s = txt_vx.value();
    if(s != "") {
      fCvx.exprX(s,"t");
    }
  }
  function act_TxtVy() {
    var s = txt_vy.value();
    if(s != "") {
      fCvy.exprX(s,"t");
    }
  }
  function act_TxtAx() {
    var s = txt_ax.value();
    if(s != "") {
      fCax.exprX(s,"t");
    }
  }
  function act_TxtAy() {
    var s = txt_ay.value();
    if(s != "") {
      fCay.exprX(s,"t");
    }
  }
  function act_CbR() {
    bR = cb_r.selected();
    mc_r.show(bR);
  }
  function act_CbV() {
    bV = cb_v.selected();
    mc_v.show(bV);
  }
  function act_CbA() {
    bA = cb_a.selected();
    mc_a.show(bA);
  }
  function act_CbMath() {
    var b = cb_math.selected();
    cb_exp.select(!b);
    show_math(b);
    show_exp(!b);
  }
  function act_RbExp()  {
    var b = rb_exp.selected();
  //cb_math.select(!b);
    show_math(!b);
    show_exp(b);
    sb_tab.show(b);
    if(b) {
      act_sbTab();
    }
  }
   function act_RbMath() {
    var b = rb_math.selected();
  //cb_exp.select(!b);
    show_math(b);
    show_exp(!b);
  }
  function act_CbExp()  {
    var b = cb_exp.selected();
    cb_math.select(!b);
    show_math(!b);
    show_exp(b);
    sb_tab.show(b);
    if(b) {
      act_sbTab();
    }
  }

  function act_CbPath() {
    bPath = cb_path.selected();
    mc_path.show(bPath);
  }
  function act_CbPath10() {
    bPath10  = cb_path10.selected();
    bPath100 = !bPath10;
    if(bPath10) {
      nPath = 10; }
    else {
      nPath = 100;
    }
    cb_path100.select(bPath100);
  }
  function act_CbPath100() {
    bPath100 = cb_path100.selected();
    bPath10  = !bPath100;
    if(bPath10) {
      nPath = 10; }
    else {
      nPath = 100;
    }
    cb_path10.select(bPath10);
  }

  function act_CbPathPre() {
    bPathPre = cb_pathPre.selected();
    mc_pathPre.show(bPathPre);
  }
  
  function act_CbOrigin() {
    if(cb_origin.selected()) {
      cb_coord.select(false);
      sP0 = Number(sb_V.scrollPosition()) - xOrigin;
      layerCx.show(false);
      layerCy.show(false);
    }
  }

  function act_CbGrid() {
    mc_grid.show(cb_grid.selected());
  }

  function act_CbAxis() {
    mc_axis.show(cb_axis.selected());
  }

  function act_CbCoord() {
    if(cb_coord.selected()) {
      cb_origin.select(false);
    }
    layerCx.show(cb_coord.selected());
    layerCy.show(cb_coord.selected());
  }

  function act_TxtCoordX() {
    var s = txt_coordX.value();
    var n = 1;
    if(s != "") {
      n = Number(s);
    }      
    xScaleGraph = n/25;
    xScale      = n/25;
    move_particle(tTime,nTime);
    redraw_path();
    draw_pathPre();
    act_txtExp();
  }

  function act_TxtCoordY() {
    var s = txt_coordY.value();
    var n = 1;
    if(s != "") {
      n = Number(s); 
    }      
    yScaleGraph = n/25;
    yScale      = n/25;
    move_particle(tTime,nTime);
    redraw_path();
    draw_pathPre();
    act_txtExp();
  }
  function show_math(b) {
    txt_rxA.show(b); txt_ryA.show(b); txt_vxA.show(b); txt_vyA.show(b); txt_axA.show(b); txt_ayA.show(b);
    txt_rx .show(b); txt_ry .show(b); txt_vx .show(b); txt_vy .show(b); txt_ax .show(b); txt_ay .show(b);
    txt_tTimeStartA.show(b); txt_tTimeEndA.show(b);txt_tTimeStart.show(b); txt_tTimeEnd.show(b);
    cb_path        .show(b); cb_pathPre .show(b);
    cb_path10      .show(b); cb_path100 .show(b);
    cb_r           .show(b); cb_v       .show(b);  cb_a.show(b);
    sb_VFac        .show(b);
    pb_clearMath   .show(b);
  }
  function show_exp(b) {
    txt_xA.show(b);   txt_yA.show(b);  sb_tab.show(b);
    txt_tTimeStartA.show(!b); txt_tTimeEndA.show(!b);  txt_tTimeStart.show(!b); txt_tTimeEnd.show(!b);
    cb_path        .show(!b); cb_pathPre  .show(!b);
    cb_path10      .show(!b); cb_path100  .show(!b);
    cb_r           .show(!b); cb_v        .show(!b);  cb_a.show(!b);
    sb_VFac        .show(!b);
    pb_clearMath   .show(!b);
    if(b) {
      act_sbTab(); }
    else {
      for(var i=1; i<=nNumExp;i++) {
        txt_expA[i].show(b);  txt_expX[i].show(b);  txt_expY[i].show(b);
      }
    }
  }
  function act_txtExp() {
    var xPos = 0;
    var yPos = 0;
    var len  = 3;
    mc_exp.clear();
    mc_exp.lineStyle(0.5,'#0000FF',1);
    for(var i=1;i<=nNumExp;i++) {
      xPos = txt_expX[i].value();   yPos = txt_expY[i].value(); 
      if(xPos != "" && yPos != "") {
        mc_exp.moveTo(Number(xPos)*xScale0/xScale-len,-Number(yPos)*yScale0/yScale    ); mc_exp.lineTo(Number(xPos)*xScale0/xScale+len,-Number(yPos)*yScale0/yScale  );
        mc_exp.moveTo(Number(xPos)*xScale0/xScale    ,-Number(yPos)*yScale0/yScale-len); mc_exp.lineTo(Number(xPos)*xScale0/xScale    ,-Number(yPos)*yScale0/yScale+len);
      }
    }
  }
  function show_tabGroup(start,end) {
    var b = false;
    for(var i=1; i<=nNumExp;i++) {
      b = (i>=start && i<=end);
      txt_expA[i].show(b);  txt_expX[i].show(b);  txt_expY[i].show(b);
    }
  }
  function act_sbVFac() {
    nVFac = 1/10*sb_VFac.scrollPosition();
    draw_vector();
  }
  function act_sbTab() {
    var n     = sb_tab.scrollPosition();
    var start = 0;
    var end   = 0;
    if(n>=nNumExp-nNumExpGroup) {
      start = nNumExp - nNumExpGroup;
      end   = nNumExp; }
    else if(n>=nNumExp - 2*nNumExpGroup) {
      start = nNumExp  - 2*nNumExpGroup;
      end   = nNumExp  - 1*nNumExpGroup; }
    else if(n>=nNumExp - 3*nNumExpGroup) {
      start = nNumExp  - 3*nNumExpGroup;
      end   = nNumExp  - 2*nNumExpGroup; }
    else if(n>=nNumExp - 4*nNumExpGroup) {
      start = nNumExp  - 4*nNumExpGroup;
      end   = nNumExp  - 3*nNumExpGroup; }
    else if(n>=nNumExp - 5*nNumExpGroup) {
      start = nNumExp  - 5*nNumExpGroup;
      end   = nNumExp  - 4*nNumExpGroup;
    } 
    show_tabGroup(start,end);
  }
   
  function act_PbClearMath() {
    txt_rx .set_value("");   txt_ry.set_value("");   rx = 0;  ry = 0;
    txt_vx .set_value("");   txt_vy.set_value("");   vx = 0;  vy = 0;
    txt_ax .set_value("");   txt_ay.set_value("");   ax = 0;  ay = 0;
    fCrx   .exprX("0","t");    fCry.exprX("0","t");
    fCvx   .exprX("0","t");    fCvy.exprX("0","t");
    fCax   .exprX("0","t");    fCay.exprX("0","t");
    act_PbReset();
    mc_path.clear(); mc_pathPre.clear();
    cb_path.select(false);  cb_pathPre.select(false);
    particle.set_xy((0*xScale0/xScale+xOrigin-xOrigin_0),(0*yScale0/yScale+yOrigin-yOrigin_0)); 
  //act_pbResetOut();
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
    move_canvas      (); 
  //act_pbResetOut();
    } 
  }
  /*---------------------------------------------------------------------------------------------------- is_tIn ---*/
  
  function is_tIn(s) {
    var bIn    = false;
    var sS     = s;
    var sLen   = sS.length;
    var sA     = new Array();
    for(var i=0;i<sLen;i++) {
      sA[i] = sS.charAt(i);
    }
    var i = 0;
    while(i<=sLen && !bIn) {
      if(sA[i] == "t") {
       bIn = true;  alert(bIn);
      }
      i++;
    }
    return bIn;
  }

  /*------------------------------------------------------------------------------------------------------- move ---*/
 
  function moveOrigin() {
    var xTmp = simPosX();
    var yTmp = simPosY();
    xOrigin  =  8 + 25*Math.round(xTmp/25);
    yOrigin  = 15 + 25*Math.round(yTmp/25);
    if(xOrigin >= 0 && xOrigin <= 610 && yOrigin >= 5 && yOrigin <= 420) {
    mc_axis.clear(); 
    xMin    = xMin0+(xOrigin_0-xOrigin);  
    xMax    = xMax0+(xOrigin_0-xOrigin);  
    yMax    = yMax0+(yOrigin_0-yOrigin);  
    yMin    = yMin0+(yOrigin_0-yOrigin);  
    sP      = Number(sb_V.scrollPosition());
    var x1  = xOrigin + sP0;
    sb_V.set_value(x1);  
    move_canvas();  
    }
  }
  
  function move_canvas() {
    mc_axis          .set_xy(xOrigin,yOrigin);  init_axis();   
    mc_P             .set_xy(xOrigin,yOrigin);
    mc_FPoint        .set_xy(xOrigin,yOrigin);
    particle.set_xy(xF/xScale + xOrigin - xOrigin_0,-yF/yScale + yOrigin - yOrigin_0);
    mc_path    .set_xy(xOrigin,yOrigin);
    mc_pathPre .set_xy(xOrigin,yOrigin);
    mc_exp     .set_xy(xOrigin,yOrigin);  act_txtExp();
    reset_particle();
    redraw_path ();
    draw_pathPre();
    draw_vector ();
    layerCx.set_ps(x0mc+17 + xOrigin - xOrigin_0,y0mc+ 2 + yOrigin - yOrigin_0,50,50);
    layerCy.set_ps(x0mc-25 + xOrigin - xOrigin_0,y0mc-35 + yOrigin - yOrigin_0,50,50); // layerCoord
  } 
  /*----------------------------------------------------------------------------------------------- redraw_path ---*/

  function redraw_path() {
     var rx1;
     var ry1;
     var t1 = 0;
     mc_path.clear();
     while(t1 <= tTime) {
       if(Math.abs(Math.round(t1*nPath)/nPath - t1) <= Math.pow(10,-5)) {
         rx1 =  fCrx.valueX(t1);
         ry1 = -fCry.valueX(t1); 
         mc_path.moveTo(rx1*xScale0/xScale-1,ry1*yScale0/yScale  ); mc_path.lineTo(rx1*xScale0/xScale+1,ry1*yScale0/yScale  );
         mc_path.moveTo(rx1*xScale0/xScale  ,ry1*yScale0/yScale-1); mc_path.lineTo(rx1*xScale0/xScale  ,ry1*yScale0/yScale+1);
       }
       t1 = t1 + 0.01;
     }
  }
  /*------------------------------------------------------------------------------------------------- draw_path ---*/
  
  function draw_path(t,n) { 
    switch (n) {
      case 0:
      case 1: if(Math.round(t*nPath)/nPath == t) {
              mc_path.moveTo(rx*xScale0/xScale-1,ry*yScale0/yScale  ); mc_path.lineTo(rx*xScale0/xScale+1,ry*yScale0/yScale  );
              mc_path.moveTo(rx*xScale0/xScale  ,ry*yScale0/yScale-1); mc_path.lineTo(rx*xScale0/xScale  ,ry*yScale0/yScale+1);
              } break;
      case 3: mc_path.clear();
              if(bPath10) {
                var rx1;
                var ry1;
                var t1 = 0;
                while(t1 <= t) {
                  if(Math.abs(Math.round(t1*nPath)/nPath - t1) <= Math.pow(10,-5)) {
                     rx1 =  fCrx.valueX(t1);
                     ry1 = -fCry.valueX(t1);  
                     mc_path.moveTo(rx1*xScale0/xScale-1,ry1*yScale0/yScale  ); mc_path.lineTo(rx1*xScale0/xScale+1,ry1*yScale0/yScale  );
                     mc_path.moveTo(rx1*xScale0/xScale  ,ry1*yScale0/yScale-1); mc_path.lineTo(rx1*xScale0/xScale  ,ry1*yScale0/yScale+1); 
                  }
                  t1 = t1 + 0.01;
                }}
               else if(bPath100) {
                  var rx1 =  fCrx.valueX(t);
                  var ry1 = -fCry.valueX(t);   
                  mc_path.moveTo(rx1*xScale0/xScale-1,ry1*yScale0/yScale  ); mc_path.lineTo(rx1*xScale0/xScale+1,ry1*yScale0/yScale  );
                  mc_path.moveTo(rx1*xScale0/xScale  ,ry1*yScale0/yScale-1); mc_path.lineTo(rx1*xScale0/xScale  ,ry1*yScale0/yScale+1); 
               }
               break;
      case 4: mc_path.clear(); break;
    } 
  }
 /*----------------------------------------------------------------------------------------------- draw_pathPre ---*/

  function draw_pathPre() {
    var t1  = tTimeStart;
    var dt  = 0.01;
    var rx1 =  fCrx.valueX(t1);
    var ry1 = -fCry.valueX(t1);
    mc_pathPre.clear();
    mc_pathPre.moveTo(rx1*xScale0/xScale-1,ry1*yScale0/yScale);
    while(t1 <= tTimeEnd) {
      rx1 =  fCrx.valueX(t1);
      ry1 = -fCry.valueX(t1);
      mc_pathPre.lineTo(rx1*xScale0/xScale-1,ry1*yScale0/yScale);
      t1 = t1 + dt;
    }
  }
  
  /*----------------------------------------------------------------------------------------------- draw_vector ---*/

  function draw_vector() {
    draw_R();
    draw_V();
    draw_A();
  }
  function draw_R() {                                                             // draw r
    mc_r.clear();
    mc_r.vector(xOrigin-xOrigin_0,yOrigin-yOrigin_0,rx*xScale0/xScale+xOrigin-xOrigin_0,ry*yScale0/yScale+yOrigin-yOrigin_0);
  }
  function draw_V() {                                                             // draw v
    var x1 = rx     *xScale0/xScale+xOrigin-xOrigin_0;
    var y1 = ry     *yScale0/yScale+yOrigin-yOrigin_0;
    var x2 = x1 + vx*nVFac;
    var y2 = y1 + vy*nVFac;
    mc_v.clear();
    mc_v.vector(x1,y1,x2,y2);
  }
  function draw_A() {                                                             // draw a
    var x1 = rx     *xScale0/xScale+xOrigin-xOrigin_0;
    var y1 = ry     *yScale0/yScale+yOrigin-yOrigin_0;
    var x2 = x1 + ax*nVFac;
    var y2 = y1 + ay*nVFac;
    mc_a.clear();
    mc_a.vector(x1,y1,x2,y2);
  }
  /*--------------------------------------------------------------------------------------------- reset_particle ---*/

  function reset_particle() {
    compute_rva(tTime,4);
    particle.set_xy((rx*xScale0/xScale+xOrigin-xOrigin_0),(ry*yScale0/yScale+yOrigin-yOrigin_0));
  }
  /*----------------------------------------------------------------------------------------------- compute_rva ---*/
  
  function compute_rva(t,n) {
    rx =  fCrx.valueX(t);
    ry = -fCry.valueX(t);  
    vx =  fCvx.valueX(t);
    vy = -fCvy.valueX(t);  
    ax =  fCax.valueX(t);
    ay = -fCay.valueX(t);  
  }
  /*--------------------------------------------------------------------------------------------- move_particle ---*/

  function move_particle(t,n) {
    compute_rva(t,n);
    xF = (rx-xMax0 + xOrigin_0-xOrigin)*xScale;
    yF = (ry-yMax0 + yOrigin_0-yOrigin)*yScale;
    particle.set_xy((rx*xScale0/xScale+xOrigin-xOrigin_0),(ry*yScale0/yScale+yOrigin-yOrigin_0)); 
    draw_path(t,n);
    draw_vector();
  }
  /*-------------------------------------------------------------------------------------------------- get_info ---*/

  function get_info()    {
    return sInfo;                                                       // get information
  }
  /*--------------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t,n)  {
    tTime = t;
    nTime = n;
    move_particle(t,n);
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/