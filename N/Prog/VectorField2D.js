/*============================================================================================== VectorField_2D ===*/

function VectorField_2D() {



  var layerSimL        = null;                                         //          simulation window object      
  var layerObjL        = null;                                         //          control    window object

  var layerSim         = null;                                         //          simulation window      
  var layerObj         = null;                                         //          control    window

  var mc_fig           = null;

  var mc_graph         = null;
  var mc_grid          = null;
  var mc_axis          = null;
  var mc_F             = null;
  var mc_FPoint        = null;


  var xOrigin          = 308;
  var yOrigin          = 225;

  var x0Current        = 250;
  var y0Current        = 205;
  var xMin             =  x0-225;
  var yMin             =  y0-170; 

  var xMax             = x0+220  ;
  var yMax             = y0+180  ; 
  var zMax             = z0 + 180;

  var txt_VectorField  = null;
  var txt_M            = null;
  var txt_N            = null;

  var cb_rot           = null;
  var pb_reset         = null;


  var xCb              = 10;
  var yCb              = 30;
  var dxCb             = 60;
  var dyCb             = 18;
                    

  var x0Graph          = 125        ;
  var y0Graph          = 250        ;
  var xScaleGraph      = 1/25       ;
  var yScaleGraph      = 1/25       ;
  var zScaleGraph      = 1/25       ;
  var x0_mc3D          = 125        ;
  var y0_mc3D          = 250        ;
  var x00              = 0          ;
  var y00              = 0          ;
  var z00              = 0          ;
  var x0               = 0          ;
  var y0               = 0          ;
  var z0               = 0          ;
  
  var xRotMax          = 490;

  var xMinGraph        = 15-x0Graph -50;
  var yMinGraph        = 31-y0Graph ;
  var xMaxGraph        = 340-x0Graph;
  var yMaxGraph        = 390-y0Graph;

  var alphaInit        = 110        ;
  var thetaInit        = 15         ;
  var nRotStep         = 10         ;

  var xMousePosDown    = 0   ;
  var yMousePosDown    = 0   ;
  var xMousePosMove    = 0   ;
  var yMousePosMove    = 0   ;
  var xMousePosUp      = 0   ;
  var yMousePosUp      = 0   ;
  var xMousePosPrev    = 0   ;
  var yMousePosPrev    = 0   ;

  var nAlpha           = null; 
  var iso              = null;
  var vectorAxis       = null;
  var vectorF          = null;
  var vectorFPoint     = null;

  var bDrag            = false;
  var bRot             = true;
  

  var grc              = null;
  var grcGraph         = null;

  var txt_xAxisA       = null;
  var txt_yAxisA       = null;
  var txt_zAxisA       = null;

  var nColor           = null;

  var sb_fac           = null;
  var nFac             = 1;

  var pb_resetNfac     = null;
       
  var txt_FT           = null;
  var txt_MT           = null;
  var txt_NT           = null;
  var cb_grid          = null;
  var cb_gridSnap      = null;
  var cb_gridF         = null;
  var cb_FPoint        = null;
  var cb_FAuto         = null;
  var pb_clearF        = null;
  var nM               = 0   ;
  var nN               = 0   ;
  var pointF           = null;
  var xPointF          = 0   ;
  var yPointF          = 0   ;
  var fCM              = null;
  var fCN              = null;

  var txt_head         = null;
  var txt_info         = null;
  var sHead            = null;
  var sInfo            = null;
  var lb               = "&#013;&#010";

  this.movePos         = movePos;

  init();

  /*----------------------------------------------------------------------------------------------------- init ---*/

  function init() {

    sHead       = "Vector Field 2D";

    sInfo       = "hello " + lb +  "hello 2";
/*
    sInfo       = "\n" +
                  " The study of 2D vector field: \n\n" +

                  " F = F(x,y) = [F1,F2] = [F1(x,y),F2(x,y)] \n\n" +
 

                  " Write in the data field F1 and F2. \n" +
                  " Move the gray sphere around in the plane. \n" +
                  " From the sphere you will always see the vector field at the position of the sphere. \n" +
                  " You can show/hide the sphere by using the checkbox 'FPoint'. \n" +
                  " When the checkbox 'FAuto' is marked, \n" +
                  " a copy of the vectorfield will be put into the position of the sphere \n" +
                  " every time you release the mouse. \n" +
                  " If the checkboxes 'Grid' and 'GridSnap' are marked, the sphere (and copy of the vector field) \n" +
                  " will be located in the nearest grid position. \n\n" +
      
                  " F1                         : Data field for the x-component of the vector field \n" + 
                  " F2                         : Data field for the y-component of the vector field \n" +
                  " Grid                      : Shows the grid \n" +
                  " GridSnap              : Sphere with a copy of the vector field will be located at the nearest grid position \n" +
                  " GridF                    : Automatic appearence of the vector field at every grid position \n" +
                  " FAuto                   : Locate a copy of the vector field when the mouse is released. \n" +
                  " FPoint                   : Show/hide the gray moveable sphere with the associated vector field \n" +
                  " Clear VectorField : Clear the vector field";

    txt_head.text = sHead ;
    //txt_info.text = sInfo ;

    iso         = new Isometric(10,5) ;
    iso          .set_alpha(alphaInit);
    iso          .set_theta(thetaInit);
*/
    init_layer   ();
    init_canvas  ();
    init_axis    ();
    init_obj     ();
    init_listener();
    draw_grid    ();
  //show_sim     (false);
  }
  /*------------------------------------------------------------------------------------------- init_layer ---*/

  function init_layer() {     
    layerSimL  = new CLayer('sim',10,'#ffffff');  layerSim = layerSimL.get_obj();   
    layerObjL  = new CLayer('obj',10,'#ffffff');  layerObj = layerObjL.get_obj(); 
  }
   /*--------------------------------------------------------------------------------------------------- init_mc ---*/

  function init_canvas() {
    mc_grid    = new CCanvas (layerSim,1,'#DDDDDD',xOrigin,yOrigin);  mc_grid .show(false);
    mc_axis    = new CCanvas (layerSim,2,'#000000',xOrigin,yOrigin);
    mc_F       = new CCanvas (layerSim,3,'#AAAAFF',xOrigin,yOrigin);  mc_F    .show(false); 
    mc_graph   = new CCanvas (layerSim,4,'#AAAAFF',xOrigin,yOrigin);  mc_graph .show(false);
    mc_FPoint  = new CCanvas (layerSim,5,'#0000FF',xOrigin,yOrigin); 
  }
  /*------------------------------------------------------------------------------------------------ init_axis ---*/

  function init_axis() {
     mc_axis.vector(x0-300,y0     ,x0+300,y0    ,1,'#AAAAAA');
     mc_axis.vector(x0    ,y0+200 ,x0    ,y0-200,1,'#AAAAAA');
  }
  /*------------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj() {
 
    txt_head    = makeTxtLb  (layerObj, 65,50, 210, 20,sHead,false);
  //txt_info    = makeTxtLb  (layerSim, 10,10, 300,300,sInfo,false);

    txt_VectorField = makeTxtLb  (layerObj, 35,110, 210, 20,"F = [F1,F2] = [F1(x,y),F2(x,y)]",false);

    txt_MT      = makeTxtLb  (layerObj, 10,150, 25, 20,"F1",false);
    txt_NT      = makeTxtLb  (layerObj, 10,175, 25, 20,"F2",false);
    txt_M       = makeTxt    (layerObj, 35,150,185, 20,""  ,true );
    txt_N       = makeTxt    (layerObj, 35,175,185, 20,""  ,true );

    cb_grid     = makeCb   (layerObj, 30,225,15,15,"Grid"    ,false,60,18);
    cb_gridSnap = makeCb   (layerObj,110,225,15,15,"GridSnap",false,60,18);
    cb_gridF    = makeCb   (layerObj, 30,245,15,15,"GridF"   ,false,60,18);
    cb_FAuto    = makeCb   (layerObj, 30,265,15,15,"FAuto"   ,false,60,18);
    cb_FPoint   = makeCb   (layerObj, 30,285,15,15,"FPoint"  ,true ,60,18);

    pb_reset    = makePb   (layerObj,  5,410,212,20,"Reset");

    pointF      = new ObjExtDrag(layerSim,"N/image/Box2.jpg",xOrigin,yOrigin,point_drag,point_drag,point_up);

    fCM         = new FunctionCompute();
    fCN         = new FunctionCompute();
  }
  /*--------------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener() {
    txt_M .onkeyup     = function() { act_txtMN   ();}
    txt_N .onkeyup     = function() { act_txtMN   ();}
    cb_grid   .onclick = function() { act_cbGrid  ();}
    cb_FPoint .onclick = function() { act_cbFPoint();}
    cb_gridF  .onclick = function() { act_cbGridF ();}
    cb_FAuto  .onclick = function() { act_cbFAuto ();}
    pb_reset  .onclick = function() { act_pbReset ();}
  }
  /*---------------------------------------------------------------------------------------------------- action ---*/

  function act_txtMN() { 

    var sM  = txt_M.value;
    var sN  = txt_N.value;
    mc_F.clear();
    if(sM != "" && sN != "") {
      fCM.infixPostfix(sM);
      fCN.infixPostfix(sN);
      nM = nFac*fCM.postfixValue(1,2); //alert(nM);
      nN = nFac*fCN.postfixValue(1,2); //alert(nN);
      mc_F.clear();
      draw_vectorFP(xPointF,yPointF);
      draw_vectorFGridF();
    }
  }

  function act_pbReset() {
    cb_FPoint.checed = false;  mc_F.show(false);
    cb_FAuto.checked = false;  mc_graph.show(false);
    xPointF = xOrigin;  yPointF = yOrigin;
    pointF.moveTo(xPointF,yPointF);
    draw_vectorFP(xOrigin-xPointF,yOrigin-yPointF); 
  }

  function draw_vectorF(xPos,yPos) {
    if(cb_FAuto.checked && txt_M.value != "" && txt_N.value != "") {
      var xNew  = xPos;
      var yNew  = yPos;
      if(cb_gridSnap.checked) {
        xNew = Math.round(xNew/25)*25;
        yNew = Math.round(yNew/25)*25; //alert(xNew); alert(yNew);
        pointF.moveTo(xOrigin+xNew,yOrigin+yNew);
      }
      nM = nFac*fCM.postfixValue(xNew*xScaleGraph,-yNew*yScaleGraph); 
      nN = nFac*fCN.postfixValue(xNew*xScaleGraph,-yNew*yScaleGraph);
      mc_FPoint.clear();
      mc_FPoint.vector(xNew,yNew,xNew+nM/xScaleGraph,yNew-nN/yScaleGraph,1,0x0000FF);
      //mc_F     .vector(xNew,yNew,xNew+nM/xScaleGraph,yNew-nN/yScaleGraph,1,0x0000FF);
      mc_graph .vector(xNew,yNew,xNew+nM/xScaleGraph,yNew-nN/yScaleGraph,1,0x0000FF);
    }
  }

  function draw_vectorFP(xPos,yPos) {
    if(txt_M.value != "" && txt_N.value != "") {
      var xNew  = xPos;
      var yNew  = yPos;
      nM = nFac*fCM.postfixValue(xNew*xScaleGraph,-yNew*yScaleGraph); 
      nN = nFac*fCN.postfixValue(xNew*xScaleGraph,-yNew*yScaleGraph);
      mc_FPoint.clear();
      mc_FPoint.vector(xNew,yNew,xNew+nM/xScaleGraph,yNew-nN/yScaleGraph,1,0x0000FF);
    }
  }

  function draw_vectorFGridF() {
    mc_F.clear();
    for(var i=y0-150;i<=y0+150;i=i+25) {
      for(var j=x0-275;j<=x0+275;j=j+25) {
        nM = nFac*fCM.postfixValue(i*xScaleGraph,-j*yScaleGraph);
        nN = nFac*fCN.postfixValue(i*xScaleGraph,-j*yScaleGraph);
        mc_F.vector(i,j,i+nM/xScaleGraph,j-nN/yScaleGraph,1,0x0000FF); 
      }
    }  
  }

  function point_drag(xPos,yPos) { //alert(xPos);
    xPointF = xPos;
    yPointF = yPos;
    draw_vectorFP(xPos-xOrigin,yPos-yOrigin);
  }
  function point_up(xPos,yPos) { //alert(xPos);
    xPointF = xPos;
    yPointF = yPos;
    draw_vectorF(xPos-xOrigin,yPos-yOrigin);
  }

  function act_cbGrid() {
    mc_grid.show(cb_grid.checked);
  }
  function act_cbGridF() {
    mc_F.show(cb_gridF.checked);
  }
  function act_cbFAuto() {
  //mc_F.show(cb_FAuto.checked);
    mc_graph.show(cb_FAuto.checked);
  }
  function act_cbFPoint() {
    pointF.show(cb_FPoint.checked);
  }

  function draw_grid() {
    var xMin = x0-300;
    var xMax = x0+300;
    var yMin = y0-200;
    var yMax = y0+200;
    mc_grid.clear();  //mc_grid.set_color(0xFF0000);
    for(var i = yMin;i<=yMax;i=i+25) {
      mc_grid.moveTo(xMin,i); mc_grid.lineTo(xMax,i);
    }
    for(var i = xMin;i<=xMax;i=i+25) {
      mc_grid.moveTo(i,yMin); mc_grid.lineTo(i,yMax);
    }
  }
  /*--------------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t) {
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/