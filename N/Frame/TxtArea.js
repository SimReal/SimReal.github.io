/*========================================================================================== TxtArea ===*/

function TxtArea (layParent,xPos,yPos,w,h,txt) {

                 /* Text area                 */

                 /* layParent :parent layer   */
                 /* xPos      :x position     */
                 /* yPos      :y position     */
                 /* w         :box width      */
                 /* h         :box height     */
                 /* txt       :text           */
            
            
  var obj         = null     ;

  this.get_obj      = get_obj  ;
  this.get_value    = get_value;
  this.set_value    = set_value;
  this.set_disable  = set_disable
  this.set_editable = set_editable;
  this.show         = show     ;

  init();

  /*------------------------------------------------------------------------------------------- init ---*/

  function init()       {

    obj  = document.createElement("textArea") ;
    (layParent.get_obj()) .appendChild(obj)   ;
    obj       .style.type       = 'label'     ;
    obj       .style.position   = 'absolute'  ;
    obj       .style.left       =  xPos + 'px';
    obj       .style.top        =  yPos + 'px';
    obj       .style.width      =  w    + 'px';
    obj       .style.height     =  h    + 'px';
    obj       .style.wrap       = 'hard'      ;
    obj       .style.fontFamily = 'Verdana'   ;
    obj       .style.fontSize   = '11px'      ;
    obj       .readOnly         = 'true'      ;
    obj       .innerHTML        =  txt        ;      
  }
  /*---------------------------------------------------------------------------------------- get_obj ---*/

  function get_obj()    {
    return obj;
  }
  /*-------------------------------------------------------------------------------------- get_value ---*/

  function get_value()      {
    return obj.value;
  }
  function set_value(s)     {
    return obj.value = s;
  }
  function set_disable(b)   {
    if(b) {
      obj.disabled = true;  }
    else {
      obj.disabled = false;
    }
  }
  function set_editable(b)  {
    if(b) {
      obj.readOnly = false; }
    else {
      obj.readOnly = true;
    }
  }
  /*------------------------------------------------------------------------------------------- show ---*/

  function show(b)          {
    if(b) {
      obj.style.visibility = 'visible'; }
    else {
      obj.style.visibility = 'hidden';
    }
  }
  /*----------------------------------------------------------------------------------------------------*/
}
/*======================================================================================================*/