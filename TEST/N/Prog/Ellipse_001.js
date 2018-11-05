/*============================================================================================ Ellipse_001 ===*/

function Ellipse_001() {

  var layerSimL        = null;                                         //          simulation window object      
  var layerObjL        = null;                                         //          control    window object

  var layerSim         = null;                                         //          simulation window      
  var layerObj         = null;                                         //          control    window

  var imgFormula       = null;                                         // external objects - formula
  var pointA           = null; pointB = null; pointE = null;           //                    points

  var txt_headLine     = null;                                         // control  objects - text header
  var txt_angle        = null;                                         //                    rotation angle 
  var cb_circleA       = null;                                         //                    show   circle A
  var cb_circleB       = null;                                         //                    show   circle B                       
  var cb_ellipse       = null;                                         //                    show   ellipse
  var rb_ellipseAuto   = null;                                         //                    show   ellipseAuto
  var rb_ellipseStep   = null;                                         //                    show   ellipseStep
  var sb_ellipseStep   = null;                                         //                    scroll ellipseStep
  var bSbDown          = false;                                        //                    scrolling


  var cS_axis          = null;                                         // canvas  axis
  var cS_circleA       = null;                                         //         circle A
  var cS_circleB       = null;                                         //         circle B
  var cS_ellipse       = null;                                         //         ellipse
  var cS_ellipseS      = null;                                         //         ellipse step
  var cS_hLine         = null;                                         //         help lines

  var x0               = 300; //400;                                          // origin
  var y0               = 220; //300;

  var xLen             = 200; //300;                                          // axis length        
  var yLen             = 175; //250;

  var a                = 150; //200;                                          // radius circle A
  var b                =  75; //100;                                          // radius circle B

  var nTime            = 0  ;                                          // time internal current

                             
  this.movePos         = movePos;                                      // public function

  simStart();

  /*--------------------------------------------------------------------------------------------- simStart ---*/

  function simStart() { 
   init();
  }
  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  { //alert("init9990000");
    init_layer     ();                            // init layer
    init_canvas    ();                            // init canvas (graphical area)
    init_axis      ();                            // init coordinat axis
    init_circle    ();                            // init circle A and B
    init_ellipse   ();                            // init ellipse
    init_obj       ();                            // init control objects
    init_listener  ();                            // init actions of control objects  
  }
  /*------------------------------------------------------------------------------------------- init_layer ---*/

  function init_layer() { 
    layerSimL  = new CLayer('sim','#ffffff',10);  layerSim = layerSimL.get_obj();
    layerObjL  = new CLayer('obj','#ffffff',10);  layerObj = layerObjL.get_obj();
  }
  /*------------------------------------------------------------------------------------------ init_canvas ---*/

  function init_canvas()    {
    cS_axis     = new CCanvas (layerSim,1,'#000000');
    cS_circleA  = new CCanvas (layerSim,2,'#000000'); 
    cS_circleB  = new CCanvas (layerSim,3,'#000000'); 
    cS_ellipse  = new CCanvas (layerSim,4,'#ff0000'); 
    cS_ellipseS = new CCanvas (layerSim,5,'#ff0000');   cS_ellipseS.show(false);
    cS_hLine    = new CCanvas (layerSim,6,'#000000');
  }
  /*-------------------------------------------------------------------------------------------- init_axis ---*/

  function init_axis()     { 
    cS_axis.moveTo(x0-xLen,y0     ); cS_axis.lineTo(x0+xLen,y0     );
    cS_axis.moveTo(x0     ,y0-yLen); cS_axis.lineTo(x0     ,y0+yLen); 
  }
  /*------------------------------------------------------------------------------------------ init_circle ---*/

  function init_circle()   {
    cS_circleA.circle(x0,y0,a);
    cS_circleB.circle(x0,y0,b);
  }
  /*----------------------------------------------------------------------------------------- init_ellipse ---*/

  function init_ellipse()  {
    var tmp = 0;
    cS_ellipse.moveTo(x0+a,y0);
    while (tmp<=2*Math.PI) {
      cS_ellipse.lineTo(x0+a*Math.cos(tmp),y0-b*Math.sin(tmp));
      tmp = tmp + 0.01;
    }
    cS_ellipseS.moveTo(x0+a,y0);
  }
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()      {
    txt_headLine     = makeTxtLb(layerObj,  1,  1,225,20,"                  Ellipse Construction",true);
    txt_angle        = makeTxtLb(layerObj, 10,380,200,20,"Angle  =  0",true     ); 
    cb_circleA       = makeCb   (layerObj, 30,200, 15,15,"Circle A",true ,60,15          );
    cb_circleB       = makeCb   (layerObj, 30,230, 15,15,"Circle B",true ,60,15          );
    cb_ellipse       = makeCb   (layerObj, 30,260, 15,15,"Ellipse" ,true ,60,15          );
    rb_ellipseAuto   = makeRb   (layerObj,150,200, 15,15,"Auto"    ,true ,50,15,"ellipse");
    rb_ellipseStep   = makeRb   (layerObj,150,230, 15,15,"Step"    ,false,50,15,"ellipse"); 
    sb_ellipseStep   = makeSb   (layerObj, 10,330,200, 0,1000,1,0); 

    imgFormula       = new ObjExt(layerObj,"image/Formula.jpg ",120  ,100);

    pointA           = new ObjExt(layerSim,"N/image/Point_02.jpg",x0+a,y0 );
    pointB           = new ObjExt(layerSim,"N/image/Point_02.jpg",x0+b,y0 );
    pointE           = new ObjExt(layerSim,"N/image/Point_03.jpg",x0+a,y0 );
  }
  /*---------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener() {
   cb_circleA     .onclick     = function() { act_cbCircleA     ();}
   cb_circleB     .onclick     = function() { act_cbCircleB     ();} 
   cb_ellipse     .onclick     = function() { act_cbEllipse     ();} 
   rb_ellipseAuto .onclick     = function() { act_rbEllipseAuto ();}  
   rb_ellipseStep .onclick     = function() { act_rbEllipseStep ();} 
   sb_ellipseStep .onmousedown = function() { act_sbEDown       ();}  
   sb_ellipseStep .onmousemove = function() { act_sbEMove       ();}  
   sb_ellipseStep .onmouseout  = function() { act_sbEOut        ();} 
  } 
  /*----------------------------------------------------------------------------------------------- action ---*/

  function act_cbCircleA() {
    cS_circleA.show(cb_circleA.checked);
    pointA    .show(cb_circleA.checked);
    test_hLine();
  }
  
  function act_cbCircleB() {
    cS_circleB.show(cb_circleB.checked);
    pointB   .show(cb_circleB.checked);
    test_hLine();
  }

  function act_cbEllipse() {
    cS_ellipse .show(cb_ellipse.checked);
    cS_ellipseS.show(cb_ellipse.checked);
  }

  function act_rbEllipseAuto  () {
    cS_ellipse .show(true );
    cS_ellipseS.show(false);
  }

  function act_rbEllipseStep()   {
    cS_ellipse .show(false);
    cS_ellipseS.show(true );
  }

  function act_sbEDown() { 
    bSbDown = true;
  } 

  function act_sbEMove() {  
    if(bSbDown) {  
      var nTimeTmp    = sb_ellipseStep.value/100           ;
      txt_angle.value = " Angle  =   " + nTimeTmp.toString(); 
      movePos(nTimeTmp);
    }
  }

  function act_sbEOut()  {
    bSbDown = false;
  } 
  /*------------------------------------------------------------------------------------------- test_hLine ---*/

  function test_hLine()  {
    cS_hLine.show(cb_circleA.checked && cb_circleB.checked && cb_ellipse.checked);
  }
  /*------------------------------------------------------------------------------------------- draw_hLine ---*/
 
  function draw_hLine(t) {
    cS_hLine.clear();
    cS_hLine.moveTo(x0,y0)                            ;  cS_hLine.lineTo(x0+a*Math.cos(t),y0-a*Math.sin(t)); 
    cS_hLine.moveTo(x0+b*Math.cos(t),y0-b*Math.sin(t));  cS_hLine.lineTo(x0+a*Math.cos(t),y0-b*Math.sin(t));
    cS_hLine.lineTo(x0+a*Math.cos(t),y0-a*Math.sin(t)); 
  }
  /*-------------------------------------------------------------------------------------- clearSimEllipse ---*/

  function clearSimEllipse() {
    cS_hLine.clear();
  }
  /*------------------------------------------------------------------------------------- draw_ellipseStep ---*/

  function draw_ellipseStep(t) { 
    if(t>0) { 
      cS_ellipseS.lineTo(pointE.get_x(),pointE.get_y()); }
    else {
      cS_ellipseS.clear();
      cS_ellipseS.moveTo(pointE.get_x(),pointE.get_y());
    }
  }
  /*---------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t) {
    nTime = t;
    txt_angle.value = "Angle  =   " + nTime.toString();
    pointA.moveTo(x0+a*Math.cos(t),y0-a*Math.sin(t));
    pointB.moveTo(x0+b*Math.cos(t),y0-b*Math.sin(t));
    pointE.moveTo(x0+a*Math.cos(t),y0-b*Math.sin(t));
    draw_hLine      (t); 
    draw_ellipseStep(t);
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/