/*========================================================================================================= LMS ===*/

function LMS() {

    
  var sim         = null;                         // sim

  var owner       = null;                         // owner   (Graph2D_Control)
  var mc          = null;  
                       
  var lmsObj      = null;                         // presenting results

  var n           = 0   ;                         // number of equations and unknown
  var a           = null;                         // coefficients
  var b           = null;                         // right side of equations
  var x           = null;                         // unknown to be found

  var bLMS        = false;
 
  /*------------------------------------------------------------------------------------------------------- LMS ---*/

  function LMS (owner,mc)    {
    this.owner = owner
    this.mc    = mc;                              // movieclip presenting results
    this.sim   = owner.get_sim();
    init();
  }
  /*------------------------------------------------------------------------------------------------------ init ---*/
  
  function init()            {
    lmsObj = new LMS_Obj(sim,this,mc);
  }
  /*----------------------------------------------------------------------------------------------------- solve ---*/

  function solve(a,b)        {                    // solve the equations
  }
  /*---------------------------------------------------------------------------------------------- get_solution ---*/

  function get_solution()    {                    // get the solution
    return x;
  }
  /*------------------------------------------------------------------------------------------------------ show ---*/
  
  function show(bShow)                             {
    //equation_mc.show(bShow);
  }

  function set_f5FromLMS(sFunction)                {
    owner.set_f5FromLMS(sFunction);
  }

  function set_scale(xScale,yScale)                {
    lmsObj.set_scale(xScale,yScale);
  }
  function set_quad1(bSet)                         {
     lmsObj.set_quad1(bSet);
  }
  function set_quad14(bSet                         {
     lmsObj.set_quad14(bSet);
  }
  function transferDataCopyToTable(xArray,yArray)  {
    owner.transferDataCopyToTable(xArray,yArray);
  }

  function show_graph2DAxis_fromLMS(bSet)          {
    owner.show_graph2DAxis_fromLMS(bSet);
  }

  function set_quad1_fromLMS(bSet)                 {
    owner.set_quad1_fromLMS(bSet);
  }
  function set_quad14_fromLMS(bSet)                {
    owner.set_quad14_fromLMS(bSet);
  }
  function set_cbXYAxis(bSet)                      {
    lmsObj.set_cbXYAxis(bSet);
  }
  function set_cbQuad1(bSet)                       {
    lmsObj.set_cbQuad1(bSet);
  }
  function set_cbQuad14(bSet)                      {
    lmsObj.set_cbQuad14(bSet);
  }

  function test_rescaleX(xMax)                     {
    owner.test_rescaleX(xMax);
  }
  function test_rescaleY(yMax)                     {
    owner.test_rescaleY(yMax);
  }
  /*----------------------------------------------------------------------------------------------------- reset ---*/

  function reset()                                 {
    //equation_mc.reset();
  }
  /*---------------------------------------------------------------------------------------------- set_equation ---*/

  function set_lms(bSet)                           {
    bLMS = bSet         ;
    lmsObj.set_lms(bSet);
  }
  function exitLMS()                               {
    owner.exitLMS();
  }
  /*------------------------------------------------------------------------------------------------ is_toolTip ---*/

  function is_toolTip()                            {
    return owner.is_toolTip(); 
  }
  /*---------------------------------------------------------------------------------------------------------------*/ 
}
/*=================================================================================================================*/