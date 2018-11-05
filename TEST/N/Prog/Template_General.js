/*======================================================================================== ApplicationName ===*/

function ApplicationName() {

 
  var layerSim         = null;                               // layer      simulation window       
  var layerObj         = null;                               //            control    window
 
  var nColLayer        = '#FFFFFF';                          // color      layer  default
  var nColCanvas       = '#000000';                          // color      canvas default drawing

  var fC               = null;                               // calculator engine 

  var txt_name         = null;                               // txt        text field
  var cb_name          = null;                               // cb         checkBox
  var pb_name          = null;                               // pb         pushButton
                              
  this.movePos         = movePos;                            // public     function(s)
  
  init();                                                    // start      function

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {     
    init_layer      ();                                      // init layer
    init_canvas     ();                                      //      canvas (graphical area)
    init_calculator ();                                      //      calculator
    init_obj        ();                                      //      control objects
    init_listener   ();                                      //      actions of objects  
  }
  /*------------------------------------------------------------------------------------------- init_layer ---*/

  function init_layer()    {
    layerSim  = (new CLayer('sim',1,nColLayer)).get_obj();   // layer for simulations   
    layerObj  = (new CLayer('obj',2,nColLayer)).get_obj();   // layer for control objects
  }
  /*------------------------------------------------------------------------------------------ init_canvas ---*/

  function init_canvas()   {
  }
  /*-------------------------------------------------------------------------------------- init_calculator ---*/

  function init_calculator () {
    fC       = new FunctionCompute ();                       // create calculator engine
  }
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()      { 
    txt_name = makeTxt  (layerObj,  1,100,200, 20,"",true);
    cb_name  = makeCb   (layerObj, 20,300, 15,15,"Text",true ,60,15);
  }
  /*---------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener() {
    txt_name .onkeyup = function() { act_txtName ();}
    cb_name  .onclick = function() { act_cbName  ();}
  } 
  /*----------------------------------------------------------------------------------------------- action ---*/

  function act_txtName() {
  }
  function act_cbName() {
  }
  /*---------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t)      {
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/
