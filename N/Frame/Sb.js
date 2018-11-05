/*=============================================================================================== Sb ===*/

function Sb (layParent,xPos,yPos,len,minV,maxV,stepV,valueV,infoT) {

            /* Scrollbar                                 */

            /* layParent :parent layer                   */
            /* xPos      :x position                     */
            /* yPos      :y position                     */
            /* len       :length                         */
            /* minV      :min value                      */
            /* maxV      :max value                      */
            /* stepV     :step value                     */
            /* valueV    :init value (position)          */
            /* infoT     :checkBox information (tooltip) */
            
  var info             = (typeof infoT     !== 'undefined') ? infoT     : '' ; 

  var obj              = null           ;

  this.get_obj         = get_obj        ;
  this.get_value       = get_value      ;
  this.set_value       = set_value      ;
  this.enable          = enable         ;
  this.scrollPosition  = scrollPosition ;
  this.set_widthHeight = set_widthHeight;
  this.set_vertical    = set_vertical   ;
  this.set_x           = set_x          ;
  this.set_y           = set_y          ;
  this.show            = show           ;

  init();

  /*------------------------------------------------------------------------------------------- init ---*/

  function init() {
    obj  = document.createElement("input")    ;
    (layParent.get_obj()) .appendChild(obj)   ;
    obj       .type           = 'range'       ;
    obj       .style.position = 'absolute'    ;
    obj       .style.left     =  xPos + 'px'  ;
    obj       .style.top      =  yPos + 'px'  ;
    obj       .style.width    =  len  + 'px'  ;
    obj       .min            =  minV         ;
    obj       .max            =  maxV         ;
    obj       .step           =  stepV        ;
    obj       .value          =  valueV       ; 
  }
  /*---------------------------------------------------------------------------------------- get_obj ---*/

  function get_obj()             {
    return obj;
  }
  /*-------------------------------------------------------------------------------------- get_value ---*/

  function get_value()           {
    return obj.value;
  }
  /*-------------------------------------------------------------------------------------- set_value ---*/

  function set_value(v)          { 
     obj.value = v;
  }
  /*----------------------------------------------------------------------------------------- enable ---*/

  function enable(b)             {
    obj.disabled = !b;
  }
  /*-------------------------------------------------------------------------------------- set_value ---*/

  function scrollPosition()      { 
     return Number(obj.value);
  }
  /*----------------------------------------------------------------------------------------- set_hw ---*/

  function set_widthHeight(w,h)  {
    obj.style.width  = w + 'px';
    obj.style.height = h + 'px';
  }
  function set_vertical() {
  //obj.style.orient = 'vertical';
    obj.style.appearance = 'slider-vertical';
  }
  /*----------------------------------------------------------------------------------------- set_xy ---*/

  function set_x(xPos)           {
     obj  .style.left    =  xPos + 'px'  ;
  }
  function set_y(yPos)           {
     obj  .style.top     =  yPos + 'px'  ;
  }
  /*------------------------------------------------------------------------------------------- show ---*/

  function show(b)               {
    if(b) {
      obj.style.visibility = 'visible'; }
    else {
      obj.style.visibility = 'hidden';
    }
  }
  /*----------------------------------------------------------------------------------------------------*/
}
/*======================================================================================================*/