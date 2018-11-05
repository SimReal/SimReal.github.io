/*=============================================================================================== Cb ===*/

function Cb (layParent,xPos,yPos,w,h,txt,b,wl,wh,infoT) {

            /* CheckBox                                  */

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


  var info          = (typeof infoT     !== 'undefined') ? infoT : ''; 

  var dxLb          = 18;   // displacement in x-direction of checkbox label
  var dyLb          =  3;   // displacement in y-direction of checkbox label

  var obj           = null       ;                   // javaScript object
  var lbl           = null       ;                   // checkBox   label

  this.get_obj      = get_obj    ;                   // return the javaScript object
  this.get_checked  = get_checked;                   // return checkBox checked (true/false) 
  this.checked      = checked    ;                   // return checkBox checked (true/false) 
  this.selected     = selected   ;                   // return checkBox checked (true/false)
  this.select       = select     ;                   // mark / unmark the checkBox
  this.check        = check      ;                   // mark / unmark the checkBox   
  this.enable       = enable     ;                   // enable / disable the checkBox
  this.enabled      = enabled    ;                   // return checkBox enabled (true/false)
  this.show         = show       ;                   // show / hide the checkBox
  this.hide         = hide       ;                   // hide / show the checkBox

  init();

  /*------------------------------------------------------------------------------------------- init ---*/

  function init()           {
    obj      = document.createElement("input");
    (layParent.get_obj()) .appendChild(obj)   ;
    obj       .type           = 'checkbox'    ;
    obj       .style.position = 'absolute'    ;
    obj       .style.left     =  xPos + 'px'  ;
    obj       .style.top      =  yPos + 'px'  ;
    obj       .style.width    =  w    + 'px'  ;
    obj       .style.height   =  h    + 'px'  ;
    obj       .checked        =  b            ;
    lbl      = new Txt(layParent,xPos+dxLb,yPos+dyLb,wl,wh,txt,false,false);
  }                            ; 
  /*---------------------------------------------------------------------------------------- get_obj ---*/

  function get_obj()        {
    return obj;
  }
  /*------------------------------------------------------------------------------------ get_checked ---*/

  function get_checked()    {
    return obj.checked;
  }
  /*---------------------------------------------------------------------------------------- checked ---*/

  function checked()        {
    return obj.checked;
  }
  /*--------------------------------------------------------------------------------------- selected ---*/

  function selected()       {
    return obj.checked;
  }
  /*----------------------------------------------------------------------------------- set_selected ---*/

  function set_selected(bT) {
    var b = (typeof bT !== 'undefined') ? bT : true ;
    obj.checked = b;
  }
  /*----------------------------------------------------------------------------------------- select ---*/

  function select(bT)       {
    var b = (typeof bT !== 'undefined') ? bT : true ;
    obj.checked = b;
  }
  /*------------------------------------------------------------------------------------------ check ---*/

  function check(bT)        {
    var b = (typeof bT !== 'undefined') ? bT : true ;
    obj.checked = b;
  }
  /*---------------------------------------------------------------------------------------- enabled ---*/

  function enabled()        {
    return !(obj.disabled);
  }
  /*----------------------------------------------------------------------------------------- enable ---*/

  function enable(b)        {
    obj.disabled = !b;
  }
  /*------------------------------------------------------------------------------------------- hide ---*/

  function hide(bT)         {
    var b = (typeof bT !== 'undefined') ? bT : false;
    show(!b);
  }    
  /*------------------------------------------------------------------------------------------- show ---*/

  function show(bT)         {
    var b = (typeof bT !== 'undefined') ? bT : true ;
    if(b) {
      obj.style.visibility = 'visible';
      lbl.show(true)                  ; }
    else  {
      obj.style.visibility = 'hidden' ;
      lbl.show(false)                 ;
    }
  }
  /*----------------------------------------------------------------------------------------------------*/
}
/*======================================================================================================*/