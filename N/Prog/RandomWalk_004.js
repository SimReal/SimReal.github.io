/*========================================================================================= RandomWalk_004 ===*/

function RandomWalk_004() {

  var layerSimL        = null;                                         //          simulation window object      
  var layerObjL        = null;                                         //          control    window object

  var layerSim         = null;                                         //          simulation window      
  var layerObj         = null;                                         //          control    window

  var point            = null;                                         // external array object of points
 
  var txt_headLine     = null;                                         // control  objects - text header                      
  var cb_path          = null;                                         //                    check boxes


  var cS_axis          = null;                                         // canvas   axis
  var cS_path          = null;                                         //          path

  var x0               = 300;                                          // origin
  var y0               = 220;

  var xLen             = 200;                                          // axis length        
  var yLen             = 175;

  var xPos             = 400;                                          // point position - x
  var yPos             = 300;                                          //                  y
  var dist             =   2;                                          // point move
  var nTime            =   0;                                          // time internal

  var nPoint           =  10;                                          // number of points

                               
  this.movePos         = movePos;                                      // public function

  simStart();                                                          // start function

  /*--------------------------------------------------------------------------------------------- simStart ---*/

  function simStart() {   //window.alert(9);
   init();
  }
  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {      //alert(9);
    init_layer     ();                            // init layer
    init_canvas    ();                            // init canvas (graphical area)
    init_axis      ();                            // init coordinat axis
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
    cS_axis    = new CCanvas (layerSim,1,'#000000');
    cS_path    = new Array(nPoint+1);
    for(var i=1;i<=nPoint;i++) {
      cS_path[i] = new CCanvas (layerSim,i+1,'#' + Math.floor(16777215*Math.random()).toString(16));
    }
  }
  /*-------------------------------------------------------------------------------------------- init_axis ---*/

  function init_axis()     { 
    cS_axis.moveTo(x0-xLen,y0     ); cS_axis.lineTo(x0+xLen,y0     );
    cS_axis.moveTo(x0     ,y0-yLen); cS_axis.lineTo(x0     ,y0+yLen);
  }
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()      { 
    txt_headLine  = makeTxtLb(layerObj,  1,  1,220,20,"                Random Walk",true);
    point         = new Array(nPoint+1);
    for(var i=1;i<=nPoint;i++) {
      point[i]    = new ObjExt(layerSim,"N/image/Box2.jpg",x0,y0);
    }
    cb_path       = new Array(nPoint+1);
    for(var i=1;i<=nPoint;i++) {
      cb_path[i]  = makeCb   (layerObj, 40,200 + 20*(i-1), 15,15,"Path " + i,true ,60,15);
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
  /*------------------------------------------------------------------------------------------ randomColor ---*/

//function randomColor() {

//}
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
         case 0: x01 = x01 + dist;                   break;
         case 1: x01 = x01 - dist;                   break;
         case 2: y01 = y01 + dist;                   break;
         case 3: y01 = y01 - dist;                   break;
         case 4: x01 = x01 + dist; y01 = y01 - dist; break;
         case 5: x01 = x01 + dist; y01 = y01 + dist; break;
         case 6: x01 = x01 - dist; y01 = y01 - dist; break;
         case 7: x01 = x01 - dist; y01 = y01 + dist; break;
       }
       point[i].moveTo(x01,y01)
     }
   }
   draw_path(t);
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/