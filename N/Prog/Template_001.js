/*=========================================================================================== Template_001 ===*/

function Template_001() {

 
  var layerSim         = null;                               // layer      simulation window       
  var layerObj         = null;                               //            control    window

  var nColLayer        = '#FFFFFF';                          // color      layer  default
  var nColCanvas       = '#000000';                          // color      canvas default drawing

  var fC               = null;                               // calculator engine

                              
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
  }
  /*-------------------------------------------------------------------------------------- init_calculator ---*/

  function init_calculator () {
    fC       = new FunctionCompute ();                       // create calculator engine
  }
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()         { 
  }
  /*---------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener()    {
  } 
  /*----------------------------------------------------------------------------------------------- action ---*/

  /*---------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t)         {
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/
