/*================================================================================================ Car_001 ===*/

function Car_001() {

 
  var layerSim         = null;                               // layer    simulation window       
  var layerObj         = null;                               //          control    window

  var nColLayer        = '#FFFFFF';                          // color    layer  default
  var nColCanvas       = '#000000';                          // color    canvas default drawing

  var cS_car           = null;                               // canvas   car

  var txt_v            = "0";                                // txtField velocity

  var car              = null;                               // external object     car
  var sCarName         = 'N/image/Car1.jpg';                 // car      figure     name

  var x0               =  50;                                // car      start pos  x
  var y0               = 220;                                //                     y

  var v                = 0;                                  // car      speed 
  var vTmp             = 0;                                  //          tmp value of v

  var fC               = null;                               // FunctionCompute - Calculator Engine

  this.movePos         = movePos;                            // public function(s)
  
  init();                                                    // start function

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {     
    init_layer          () ;                                 // init layer
    init_canvas         () ;                                 //      canvas (graphical area)
    init_compute        () ;                                 //      compute
    init_obj            () ;                                 //      control objects
    init_listener       () ;                                 //      actions of objects 
  }
  /*------------------------------------------------------------------------------------------- init_layer ---*/

  function init_layer() {
    layerSim  = (new CLayer('sim',1,nColLayer)).get_obj();   // layer for simulations   
    layerObj  = (new CLayer('obj',2,nColLayer)).get_obj();   // layer for control objects
  }
  /*------------------------------------------------------------------------------------------ init_canvas ---*/

  function init_canvas()   {
    cS_car    = new CCanvas (layerSim,1,nColCanvas);         // create the area for the car
  }
  /*----------------------------------------------------------------------------------------- init_compute ---*/

  function init_compute()  {
    fC = new FunctionCompute();
  }  
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()      {
    txt_v = makeTxt   (layerObj,  1,100,200, 20,"",true); 
    car   = new ObjExt(layerSim,sCarName,x0,y0);               // create the car
  }
  /*---------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener() {
    txt_v .onkeyup = function() { act_txtV();}
  } 
  /*----------------------------------------------------------------------------------------------- action ---*/

  function act_txtV() {
    fC.infixPostfix(txt_v.value);
    vTmp = fC.get_postfixArray();
  //var b = fC.postfixValue();
  //txt_output.value = b;
  }
  /*---------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t) {
    v = fC.postfixValue(t);                                   // compute
    car.moveTo(x0+v*t,y0);                                   // move the car
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/
