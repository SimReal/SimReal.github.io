/*================================================================================================ Car_001 ===*/

class Car_001 {

 
  layerSim         : null;                               // layer    simulation window       
  var layerObj         = null;                               //          control    window

  var cS_car           = null;                               // canvas   car

  var car              = null;                               // external object     car
  var sCarName         = 'N/image/Car1.jpg';                 // car      figure     name

  var x0               =  50;                                // car      start pos  x
  var y0               = 220;                                //                     y

  var v                = 200;                                // car      speed
 
  var nColLayer        = '#FFFFFF';                          // color    layer  default
  var nColCanvas       = '#000000';                          // color    canvas default drawing
   
                              
  this.movePos         = movePos;                            // public function(s)
  
//init();                                                    // start function

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  constructor ()  {     
    init_layer          () ;                                 // init layer
    init_canvas         () ;                                 //      canvas (graphical area)
    init_obj            () ;                                 //      control objects
    init_listener       () ;                                 //      actions of objects 
    movePos             (0);                                 //      position
  }
  /*------------------------------------------------------------------------------------------- init_layer ---*/

  function init_layer() {
    layerSim  = (new CLayer('sim',1,nColLayer)).get_obj();   // layer for simulations   
    layerObj  = (new CLayer('obj',2,nColLayer)).get_obj();   // layer for control objects
  }
  /*------------------------------------------------------------------------------------------ init_canvas ---*/

  function init_canvas()    {
    cS_car    = new CCanvas (layerSim,1,nColCanvas);         // create the area for the car
  }
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()      { 
    car = new ObjExt(layerSim,sCarName,x0,y0);               // create the car
  }
  /*---------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener() {
  } 
  /*----------------------------------------------------------------------------------------------- action ---*/

  /*---------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t) {
    car.moveTo(x0+v*t,y0);                                   // move the car
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/
