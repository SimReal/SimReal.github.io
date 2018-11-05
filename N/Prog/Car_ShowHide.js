/*=========================================================================================== Car_ShowHide ===*/

function Car_ShowHide() {

 
  var layerSim         = null;                               // layer      simulation window       
  var layerObj         = null;                               //            control    window

  var nColLayer        = '#FFFFFF';                          // color      layer  default
  var nColCanvas       = '#000000';                          // color      canvas default drawing

  var fC               = null;                               // calculator engine

  var cS_car           = null;                               // canvas     car

  var car              = null;                               // car        external object
  var sCarName         = 'N/image/Car1.jpg';                 //            figure     name
  var x0               =  50;                                //            start pos  x
  var y0               = 220;                                //                       y
  var v                = 200;                                //            speed 
  var cb_show          = null;                               //            show / hide      check box
                              
  this.movePos         = movePos;                            // public     function(s)
  
  init();                                                    // start      function

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {     
    init_layer         () ;                                  // init   layer
    init_canvas        () ;                                  //        canvas (graphical area)
    init_calculator    () ;                                  //        calculator
    init_obj           () ;                                  //        control objects
    init_listener      () ;                                  //        actions of objects 
  }
  /*------------------------------------------------------------------------------------------- init_layer ---*/

  function init_layer()       {
    layerSim = (new CLayer('sim',1,nColLayer)).get_obj();    // create layer simulations   
    layerObj = (new CLayer('obj',2,nColLayer)).get_obj();    // create layer control objects
  }
  /*------------------------------------------------------------------------------------------ init_canvas ---*/

  function init_canvas()      {
    cS_car   = new CCanvas (layerSim,1,nColCanvas);          // create the area for the car
  }
  /*-------------------------------------------------------------------------------------- init_calculator ---*/

  function init_calculator () {
    fC       = new FunctionCompute ();                       // create calculator engine
  }
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()         { 
    car      = new ObjExt(layerSim,sCarName,x0,y0,0.5);      // create the car
    cb_show  = makeCb   (layerObj, 20,300, 15,15,"Show/Hide ",true ,65,15);
  }
  /*---------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener()    {
    cb_show.onclick = function() { act_cbShow();}
  } 
  /*----------------------------------------------------------------------------------------------- action ---*/

  function act_cbShow() {
    car.show(cb_show.checked);
  }

  /*---------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t)         {
    car.moveTo(x0+v*t,y0);                                   // move the car
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/
