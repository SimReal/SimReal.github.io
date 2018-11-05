/*========================================================================================= RandomWalk_010 ===*/

function RandomWalk_010() {

 
  var layerSim         = null;                               // layer    simulation window       
  var layerObj         = null;                               //          control    window

  var cS_axis          = null;                               // canvas   axis
  var cS_path          = null;                               //          path

  var cb_path          = null;                               // control  object     check boxes

  var point            = null;                               // external array object of points
  var sPointName       = 'N/image/Box2.jpg';                 // point figure name
 
  var nColLayer        = '#FFFFFF';                          // color    layer  default
  var nColCanvas       = '#000000';                          // color    canvas default drawing
  var nColAxis         = '#0000FF';                          // color    axis
 
  var x0               = 300;                                // origin   x
  var y0               = 220;                                //          y

  var nAx              = 275;                                // axis length x       
  var nAy              = 175;                                //             y

  var nCbX             =  70;                                // cb start position x
  var nCbY             = 220;                                //                   y
  var nCbVdist         =  20;                                // cb vertical distance

  var nDist            =   2;                                // point move

  var nTime            =   0;                                // time internal

  var nPoint           =  10;                                // number of points

                               
  this.movePos         = movePos;                            // public function(s)
  
  init();                                                    // start function

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {     
    init_layer          ();                                  // init layer
    init_canvas         ();                                  //      canvas (graphical area)
    init_axis           ();                                  //      coordinat axis
    init_obj            ();                                  //      control objects
    init_listener       ();                                  //      actions of objects  
  }
  /*------------------------------------------------------------------------------------------- init_layer ---*/

  function init_layer() {
    layerSim  = (new CLayer('sim',1,nColLayer)).get_obj();   // layer for simulations   
    layerObj  = (new CLayer('obj',2,nColLayer)).get_obj();   // layer for control objects
  }
  /*------------------------------------------------------------------------------------------ init_canvas ---*/

  function init_canvas()    {
    cS_axis    = new CCanvas (layerSim,1,nColCanvas);
    cS_path    = new Array(nPoint+1);
    for(var i=1;i<=nPoint;i++) {
      cS_path[i] = new CCanvas (layerSim,i+1,rndColor());
    }
  }
  /*-------------------------------------------------------------------------------------------- init_axis ---*/

  function init_axis()     { 
    cS_axis.vector(x0-nAx,y0    ,x0+nAx,y0    ,1,nColAxis);
    cS_axis.vector(x0    ,y0+nAy,x0    ,y0-nAy,1,nColAxis);
  }
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()      { 
    point         = new Array(nPoint+1);
    for(var i=1;i<=nPoint;i++) {
      point[i]    = new ObjExt(layerSim,sPointName,x0,y0);
    }
    cb_path       = new Array(nPoint+1);
    for(var i=1;i<=nPoint;i++) {
      cb_path[i]  = makeCb   (layerObj, nCbX,nCbY + nCbVdist*(i-1), 15,15,"Path " + i,true ,60,15);
    } 
  }
  /*---------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener() {
    for(var i=1;i<=nPoint;i++) {
      cb_path[i].onclick = function() { act_cbPath();}
    }
  } 
  /*----------------------------------------------------------------------------------------------- action ---*/
 
  function act_cbPath() {
    for(var i=1;i<=nPoint;i++) {
      cS_path[i].show(cb_path[i].checked);
    }
  }
  /*-------------------------------------------------------------------------------------------- draw_path ---*/

  function draw_path(t) {
    for(var i=1;i<=nPoint;i++) {
      if(t<=0.01) {
        cS_path[i].clear();
        cS_path[i].moveTo(point[i].get_x(),point[i].get_y());
      }
      cS_path[i].lineTo(point[i].get_x(),point[i].get_y());
    }
  }
  /*--------------------------------------------------------------------------------------------- rndColor ---*/

  function rndColor() {
    return '#' + Math.floor(16777215*Math.random()).toString(16);
  }
  /*---------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t) {
    nTime = t;
    if(t==0) {
      for(var i=1;i<=nPoint;i++) {
        point[i].moveTo(x0,y0); }}
    else {
      var choice;
      var x01;
      var y01;
      for(var i=1;i<=nPoint;i++) {
        choice = Math.floor(8*Math.random()); 
        x01    = point[i].get_x();
        y01    = point[i].get_y();
        switch(choice) {
          case 0: x01 = x01 + nDist;                    break;
          case 1: x01 = x01 - nDist;                    break;
          case 2: y01 = y01 + nDist;                    break;
          case 3: y01 = y01 - nDist;                    break;
          case 4: x01 = x01 + nDist; y01 = y01 - nDist; break;
          case 5: x01 = x01 + nDist; y01 = y01 + nDist; break;
          case 6: x01 = x01 - nDist; y01 = y01 - nDist; break;
          case 7: x01 = x01 - nDist; y01 = y01 + nDist; break;
        }
        point[i].moveTo(x01,y01)
      }
    }
    draw_path(t);
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/