/*============================================================================================== TxtM ===*/

function TxtM(layParent,xPosT,yPosT,w,h,txt,bBorderT,bWriteT,bcgColorT,txtColorT,xOriginT,yOriginT,infoT) {

  var bBorder     = (typeof bBorderT  !== 'undefined') ? bBorderT  : true     ;
  var bWrite      = (typeof bWriteT   !== 'undefined') ? bWriteT   : true     ;
  var bcgColor    = (typeof bcgColorT !== 'undefined') ? bcgColorT : '#FFFFFF';
  var txtColor    = (typeof txtColorT !== 'undefined') ? txtColorT : '#000000';
  var xOrigin     = (typeof xOriginT  !== 'undefined') ? xOriginT  : 0        ;
  var yOrigin     = (typeof yOriginT  !== 'undefined') ? yOriginT  : 0        ;
  var info        = (typeof infoT     !== 'undefined') ? infoT     : ''       ; 

  var xPos        = xPosT;
  var yPos        = yPosT;

  var obj         = null;

  this.get_obj    = get_obj  ;
  this.get_value  = get_value;
  this.set_value  = set_value;
  this.set_xy     = set_xy   ;
  this.set_x      = set_x    ;
  this.set_y      = set_y    ;
  this.show       = show     ;

  init();

  /*------------------------------------------------------------------------------------------- init ---*/

  function init() {
    obj      = document.createElement("input")    ;
    (layParent.get_obj()) .appendChild(obj)                   ;
    obj       .style.type       = 'text'          ;
    obj       .style.position   = 'absolute'      ;
    obj       .style.left       =  xOrigin+xPos + 'px'    ;
    obj       .style.top        =  yOrigin+yPos + 'px'    ;
    obj       .style.width      =  w    + 'px'    ;
    obj       .style.height     =  h    + 'px'    ;
    obj       .style.color      =  txtColor       ;
    obj       .style.background =  bcgColor       ;
    obj       .style.fontFamily = 'Verdana'       ;
    obj       .style.fontSize   = '11px'          ;
    obj       .style.padding    = '5px'           ;
    obj       .value            =  txt            ;
    if(bBorder == false) {
      obj.style.border = 'none';
    }
    if(bWrite == false) {
      obj.disabled = 'disabled';
    }
  }
  /*---------------------------------------------------------------------------------------- get_obj ---*/

  function get_obj() {
    return obj;
  }
  /*-------------------------------------------------------------------------------------- get_value ---*/

  function get_value() {
    return obj.value;
  }
  function value() {
    return obj.value;
  }
  function set_value(s) {
    obj.value = s;
  }
  function set_xy(x,y) {
    xPos = x;
    yPos = y;
    obj.style.left = x + 'px';
    obj.style.top  = y + 'px';
  }
  function set_x(x) {
    xPos = x;
    obj.style.left = xOrigin + x + 'px';
  }
  function set_y(y) {
    yPos = y;
    obj.style.top  = yOrigin + y + 'px';
  }
  /*------------------------------------------------------------------------------------------- show ---*/

  function show(b) {
    if(b) {
      obj.style.visibility = 'visible'; }
    else {
      obj.style.visibility = 'hidden';
    }
  }
  /*----------------------------------------------------------------------------------------------------*/
}
/*======================================================================================================*/