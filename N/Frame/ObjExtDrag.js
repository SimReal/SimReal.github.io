/*============================================================================================= ObjExtDrag ===*/

function ObjExtDrag(layerObjExt,xPosObj,yPosObj,nameObjExt,sizeFac,xOriginT,yOriginT,fDownT,fMoveT,fUpT) {

  var sizeF            = (typeof sizeFac  !== 'undefined') ? sizeFac  : 1;
  var xOrigin          = (typeof xOriginT !== 'undefined') ? xOriginT : 0;
  var yOrigin          = (typeof yOriginT !== 'undefined') ? yOriginT : 0;
  var fDown            = (typeof fDownT   !== 'undefined') ? fDownT   : null;    // callback function
  var fMove            = (typeof fMoveT   !== 'undefined') ? fMoveT   : null;
  var fUp              = (typeof fUpT     !== 'undefined') ? fUpT     : null;

  var layerObj         = layerObjExt;                                // parent layer
  var nameObj          = nameObjExt ;                                // object name
  var xPos             = xPosObj    ;                                // object x-position
  var yPos             = yPosObj    ;                                // object y-position
  var bDrag            = false      ;                                // dragging the object (default = false)
  var obj              = null       ;                                // object
 
  this.init            = init       ;                                // public function
  this.get_obj         = get_obj    ;
  this.get_x           = get_x      ;
  this.get_y           = get_y      ;
  this.show            = show       ;
  this.moveTo          = moveTo     ;
//this.act_mouseDown   = act_mouseDown;
//this.act_mouseMove   = act_mouseMove;
//this.act_mouseUp     = act_mouseUp  ;
//this.act_touchStart  = act_touchStart;

  init();

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {
    obj  = document.createElement("img")      ;
    (layerObj.get_obj()).appendChild(obj);                                 
    obj.src = nameObj; 
    obj.onload = function() {initObj()};                                        
  //obj  .style.position = 'relative';
  //obj  .style.left     =  (xPos-obj.width/2 ) + 'px';        
  //obj  .style.top      =  (yPos-obj.height/2) + 'px';
  //obj  .style.cursor   = 'pointer';
  //obj  .style.draggable = true;
  //event_action();      //f(); //owner.test();
  }
  function initObj()  {                                      
    obj  .style.position = 'relative';
    obj  .style.width    = (obj.width) * sizeF; 
    obj  .style.height   = 'auto'; // obj.height * sizeF;
    obj  .style.left     =  (xOrigin+xPos-obj.width/2 ) + 'px';        
    obj  .style.top      =  (yOrigin+yPos-obj.height/2) + 'px';
    obj  .style.cursor   = 'pointer';
    obj  .style.draggable = true;
  //event_action();      //f(); //owner.test();
  }
  /*------------------------------------------------------------------------------------------ even_action ---*/

  function event_action() {
    obj             .onmousedown = function() { action_mouseDown (); alert("down");}
    obj             .onmousemove = function() { action_mouseMove ();}
    obj             .ontouchmove = function() { action_mouseUp   ();}
/*
    obj      .addEventListener("mousedown" ,act_mouseDown ); alert("m");
    obj      .addEventListener("mousemove" ,act_mouseMove );
    obj      .addEventListener("mouseup"   ,act_mouseUp   );
    document .addEventListener("mousemove" ,act_mouseMove );
*/
    obj      .addEventListener("touchstart",act_touchStart);
    obj      .addEventListener("touchmove" ,act_touchMove );
    document .addEventListener("touchmove" ,act_touchMove );
  }

  function act_mouseDown() {
    bDrag = true;
    if(fDown != null) {
      fDown(xPos,yPos);
    }
  }
  function act_mouseMove() {
    if(bDrag) {
      obj.style.left = (window.event.clientX- 12) + 'px';
      obj.style.top  = (window.event.clientY-127) + 'px';
      xPos = (window.event.clientX- 12);
      yPos = (window.event.clientY-127);
      if(fMove != null) {
        fMove(xPos,yPos);
      }
    }
  }
  function act_mouseUp() { //if(bDrag) {f(xPos)};
    bDrag = false; //alert(xPos);
    if(fUp != null) {
      fUp(xPos,yPos);
    }
  }
  function act_touchStart() {
    alert("touchStart");
  }
  function act_touchMove() {
    alert("touchMove");
  }

  /*---------------------------------------------------------------------------------------------- get_obj ---*/
  
  function get_obj() {
    return obj;
  }
  /*------------------------------------------------------------------------------------------------ get_x ---*/
  
  function get_x() {
    return xPos;
  }
  /*------------------------------------------------------------------------------------------------ get_y ---*/
  
  function get_y() {
    return yPos;
  }
  /*------------------------------------------------------------------------------------------------- show ---*/

  function show(b) {
    if(b==true) {
      obj.style.visibility = 'visible'; }
    else {
      obj.style.visibility = 'hidden';
    }
  }
  /*----------------------------------------------------------------------------------------------- moveTo ---*/

  function moveTo(xNew,yNew) {
    xPos           = xNew;
    yPos           = yNew;
    obj.style.left = (xPos-obj.width/2 ) + 'px';
    obj.style.top  = (yPos-obj.height/2) + 'px';
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/