/*======================================================================================== ApplicationName ===*/

function ApplicationName() {

 
  var layerSim         = null;                               // layer    simulation window       
  var layerObj         = null;                               //          control    window
 
  var nColLayer        = '#FFFFFF';                          // color    layer  default
  var nColCanvas       = '#000000';                          // color    canvas default drawing
   
                              
  this.movePos         = movePos;                            // public function(s)
  
  init();                                                    // start function

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {     
    init_layer    ();                                        // init layer
    init_canvas   ();                                        //      canvas (graphical area)
    init_obj      ();                                        //      control objects
    init_listener ();                                        //      actions of objects  
  }
  /*------------------------------------------------------------------------------------------- init_layer ---*/

  function init_layer()    {
    layerSim  = (new CLayer('sim',1,nColLayer)).get_obj();   // layer for simulations   
    layerObj  = (new CLayer('obj',2,nColLayer)).get_obj();   // layer for control objects
  }
  /*------------------------------------------------------------------------------------------ init_canvas ---*/

  function init_canvas()   {
  }
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()      { 
  }
  /*---------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener() {
  } 
  /*----------------------------------------------------------------------------------------------- action ---*/

  /*---------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t)      {
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/
