/*=============================================================================================== Pb ===*/

function Pb (layParent,xPos,yPos,w,h,txt,b,wl,wh,infoT) {

            /* PushButton

            /* layParent :parent layer                   */
            /* xPos      :x position                     */
            /* yPos      :y position                     */
            /* w         :box width                      */
            /* h         :box height                     */
            /* txt       :text                           */
            /* b         :checked      (true / false)    */
            /* wl        :text width                     */
            /* wh        :text height                    */
            /* infoT     :checkBox information (tooltip) */

  var info = (typeof infoT     !== 'undefined') ? infoT : ''; 

  var obj           = null   ;

  this.get_obj      = get_obj;
  this.set_txt      = set_txt;
  this.enable       = enable     ;                   // enable / disable the pushButton
  this.enabled      = enabled    ;                   // return pushButton enabled (true/false)
  this.show         = show   ;

  init();

  /*------------------------------------------------------------------------------------------- init ---*/

  function init()        {
    obj      = document.createElement("button")   ;
    (layParent.get_obj()) .appendChild(obj)       ;
    obj       .type           = 'button'          ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  w    + 'px'      ;
    obj       .style.height   =  h    + 'px'      ;
    obj       .style.fontSize = '11px'            ;
    obj       .innerHTML      =  txt              ;
  } 
  /*---------------------------------------------------------------------------------------- get_obj ---*/

  function get_obj()     {
    return obj;
  }
  /*---------------------------------------------------------------------------------------- set_txt ---*/

  function set_txt(txt)  {
    obj.innerHTML =  txt; 
  }
  /*---------------------------------------------------------------------------------------- enabled ---*/

  function enabled()        {
    return !(obj.disabled);
  }
  /*----------------------------------------------------------------------------------------- enable ---*/

  function enable(b)        {
    obj.disabled = !b;
  }
  /*------------------------------------------------------------------------------------------- show ---*/

  function show(b)       {
    if(b) {
      obj.style.visibility = 'visible';                   
    }
    else {
      obj.style.visibility = 'hidden' ;                
    }
  }
  /*----------------------------------------------------------------------------------------------------*/
}
/*======================================================================================================*/