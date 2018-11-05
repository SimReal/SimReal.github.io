/*========================================================================================== TxtFile ===*/

function TxtFile(layParent,xPosT,yPosT,w,h,txt,bBorderT,bWriteT,bcgColorT,txtColorT,infoT) {

  var bBorder     = (typeof bBorderT  !== 'undefined') ? bBorderT  : true     ;
  var bWrite      = (typeof bWriteT   !== 'undefined') ? bWriteT   : true     ;
  var bcgColor    = (typeof bcgColorT !== 'undefined') ? bcgColorT : '#FFFFFF';
  var txtColor    = (typeof txtColorT !== 'undefined') ? txtColorT : '#000000';
  var info        = (typeof infoT     !== 'undefined') ? infoT     : ''       ; 

  var xPos        = xPosT;
  var yPos        = yPosT;
  var bVisible    = true ;

  var obj         = null;

  this.get_obj    = get_obj  ;
  this.get_value  = get_value;
  this.set_value  = set_value;
  this.value      = value    ;
  this.get_x      = get_x    ;
  this.get_y      = get_y    ;
  this.set_xy     = set_xy   ;
  this.set_x      = set_x    ;
  this.set_y      = set_y    ;
  this.set_size   = set_size ;
  this.set_bold   = set_bold ;
  this.set_alpha  = set_alpha;
  this.is_visible = is_visible;
  this.show       = show     ;

  init();

  /*------------------------------------------------------------------------------------------- init ---*/

  function init() {
    obj      = document.createElement("input")    ;
    (layParent.get_obj()) .appendChild(obj)       ;
    obj       .style.type       = 'text'          ;
    obj       .style.position   = 'absolute'      ;
    obj       .style.left       =  xPos + 'px'    ;
    obj       .style.top        =  yPos + 'px'    ;
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
  function get_x() {
    return xPos;
  }
  function get_y() {
    return yPos;
  }
  function set_xy(x,y) {
    xPos = x;
    yPos = y;
    obj.style.left = x + 'px';
    obj.style.top  = y + 'px';
  }
  function set_x(x) {
    xPos = x;
    obj.style.left = x + 'px';
  }
  function set_y(y) {
    yPos = y;
    obj.style.top  = y + 'px';
  }
  function set_size(s) {
    obj.style.fontSize = s + 'px';
  }
  function set_bold(wT)  {
    var w = (typeof wT  !== 'undefined') ? wT  : 900;
    obj.style.fontWeight = w;
  }
  /*-------------------------------------------------------------------------------------- set_alpha ---*/

  function set_alpha(alpha) {
    obj.style.opacity = alpha;
  }
  /*------------------------------------------------------------------------------------- is_visible ---*/

  function is_visible() {
    return bVisible;
  }
  /*------------------------------------------------------------------------------------------- show ---*/

  function show(b) {
    bVisible = b;
    if(b) {
      obj.style.visibility = 'visible'; }
    else {
      obj.style.visibility = 'hidden';
    }
  }
  /*----------------------------------------------------------------------------------------------------*/
}
/*======================================================================================================*/