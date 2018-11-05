/*================================================================================================= ObjExt ===*/

function ObjExt (layerObjExt,xPosObj,yPosObj,nameObjExt,sizeFac,xOriginT,yOriginT) {


                /* External object                           */

                /* layerObjExt :parent layer                 */
                /* xPosObj     :x position                   */
                /* yPosObj     :y position                   */
                /* nameObjExt  :file name of external object */
                /* sizeFac     :size factor (default 1)      */
                /* xOriginT    :x origin    (default 0)      */
                /* yOriginT    :y origin    (default 0)      */

                
  var sizeF            = (typeof sizeFac  !== 'undefined') ? sizeFac  : 1;
  var xOrigin          = (typeof xOriginT !== 'undefined') ? xOriginT : 0;
  var yOrigin          = (typeof yOriginT !== 'undefined') ? yOriginT : 0;

  var layerObj         = layerObjExt;                                // parent layer
  var nameObj          = nameObjExt ;                                // object name
  var xPos             = xPosObj    ;                                // object x-position
  var yPos             = yPosObj    ;                                // object y-position
  var obj              = null       ;                                // object

  this.init            = init       ;                                // public function
  this.get_obj         = get_obj    ;
  this.get_x           = get_x      ;
  this.get_y           = get_y      ;
  this.set_x           = set_x      ;
  this.set_y           = set_y      ;
  this.set_xy          = set_xy     ;
  this.set_origin      = set_origin ;
  this.rotate          = rotate     ;
  this.rotateRad       = rotateRad  ;
  this.rotateDeg       = rotateDeg  ;
  this.show            = show       ;
  this.hide            = hide       ;
  this.moveTo          = moveTo     ;

  init();

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()            {
    obj  = document.createElement("img") ;  
    (layerObj.get_obj()).appendChild(obj);                               
    obj.src = nameObj        ;
    obj.onload = function() {initObj()};
  }
  function initObj()         {
    obj  .style.position = 'absolute';
    obj  .style.width    = (obj.width) * sizeF; 
    obj  .style.height   = 'auto';
    obj  .style.left     =  (xOrigin+xPos-obj.width/2 ) + 'px';       
    obj  .style.top      =  (yOrigin+yPos-obj.height/2) + 'px';
  }

  function set_width()       {
    obj  .style.width    = (obj.width) * sizeF; 
    obj  .style.height   = 'auto';
    obj  .style.left     =  (xOrigin+xPos-obj.width/2 ) + 'px';       
    obj  .style.top      =  (yOrigin+yPos-obj.height/2) + 'px';
  }

  /*---------------------------------------------------------------------------------------------- get_obj ---*/
  
  function get_obj()         {
    return obj;
  }
  /*------------------------------------------------------------------------------------------------ get_x ---*/
  
  function get_x()           {
    return xPos;
  }
  /*------------------------------------------------------------------------------------------------ get_y ---*/
  
  function get_y()           {
    return yPos;
  }
  /*------------------------------------------------------------------------------------------------ get_x ---*/
  
  function set_x(x)          {
    xPos           = x;
    obj.style.left = (xOrigin+xPos-obj.width/2 ) + 'px';    
  }
  /*------------------------------------------------------------------------------------------------ get_y ---*/
  
  function set_y(y)          {
    yPos          = y;
    obj.style.top = (yOrigin+yPos-obj.height/2) + 'px';    //alert(obj.style.top);
  }
  /*----------------------------------------------------------------------------------------------- set_xy ---*/

  function set_xy(x,y)       {
    set_x(x); set_y(y);
  }
  /*------------------------------------------------------------------------------------------- set_origin ---*/

  function set_origin(xOriginT,yOriginT) {
    xOrigin = xOriginT;
    yOrigin = yOriginT;
    set_xy(xPos,yPos);
  }
  /*----------------------------------------------------------------------------------------------- rotate ---*/

  function rotate(v)         {
    obj.style.WebkitTransform = "rotate("+v*180/Math.PI+"deg)";
  }
  /*-------------------------------------------------------------------------------------------- rotateRad ---*/

  function rotateRad(v)      {
    rotate(v);
  }
  /*-------------------------------------------------------------------------------------------- rotateDeg ---*/

  function rotateDeg(v)      {
    obj.style.WebkitTransform = "rotate("+v+"deg)";
  }
  /*------------------------------------------------------------------------------------------------- show ---*/

  function show(b)           {
    if(b==true) {
      obj.style.visibility = 'visible'; }
    else {
      obj.style.visibility = 'hidden' ;
    }
  }
  /*------------------------------------------------------------------------------------------------- hide ---*/
  
  function hide(b)           {
    show(!b);
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