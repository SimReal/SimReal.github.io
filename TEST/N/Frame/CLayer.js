/*================================================================================================= CLayer ===*/

function CLayer (idName,zIndex,color,xInT,yInT,layerParentT) { 

                /* Layer

                /* idName       :id name      */
                /* zIndex       :z index      */
                /* color        :layer color  */
                /* xInT         :x position   */
                /* yInT         :y position   */
                /* layerParentT :layer parent */
              

  var xIn              = (typeof xInT         !== 'undefined') ? xInT         : 0   ;
  var yIn              = (typeof yInT         !== 'undefined') ? yInT         : 0   ;
  var layerParent      = (typeof layerParentT !== 'undefined') ? layerParentT : null;

  var id               = idName     ;
  var zNdx             = zIndex     ;                                // z index
  var bgColor          = color      ;                                // background color

  var visible          = null       ;

  var layerSim0        = null       ;
  var layerSimV0       = null       ;
  var layerObj0        = null       ;
  var layerInfo0       = null       ;
  var layerHelp0       = null       ;
  var layParent        = null       ;                                // parent layer

  var layerSimCalc     = null       ;
  var layerObjCalc     = null       ;

  var L                = null       ;
  var T                = null       ;
  var W                = null       ;
  var H                = null       ;

  var x0Tot           = 2           ;
  var y0Tot           = 2           ;
  var WTot            = 840;        ;
  var HTot            = 444;        ;

  var x0sim            = xIn        ;
  var y0sim            = yIn        ;
  var Wsim             = 615;       ;
  var Hsim             = 442;       ;

  var x0simV           = 2          ;
  var y0simV           = 2          ;
  var WsimV            = 615;       ;
  var HsimV            = 444;       ;

  var x0obj            = 2          ;
  var y0obj            = 2          ;
  var Wobj             = 223;       ;
  var Hobj             = 444;       ;

  var obj              = null       ;                                // object
  
  this.get_obj         = get_obj    ;                                // public function
  this.get_visible     = get_visible;
  this.set_ps          = set_ps     ;
  this.set_color       = set_color  ;
  this.show            = show       ;
  this.appendL         = appendL    ;

  init();  

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {   
    create_layer();
  }
  function create_layer() {   
    layerSim0     = document.getElementById("layerSimSim" );  
    layerSimV0    = document.getElementById("layerSimSimV");
    layerObj0     = document.getElementById("layerSimObj" );    
 
    layerSimCalc  = document.getElementById("layerSimCalc");                        
    layerObjCalc  = document.getElementById("layerObjCalc");

    layerInfo0    = document.getElementById("layerDivInfo");
    layerHelp0    = document.getElementById("layerDivHelp");

    if(id=='obj')    {
      layParent = layerObj0;
      L = x0obj;  T = y0obj;  W = Wobj;  H = Hobj; }
    else if(id=='sim') {
      layParent = layerSim0;
      L = x0sim;  T = y0sim;  W = Wsim;  H = Hsim; }
    else if(id=='info') {
      layParent = layerSim0; 
      L = x0sim;  T = y0sim;  W = Wsim;  H = Hsim; }
    else if(id=='help') {
      layParent = layerSim0; 
      L = x0Tot;  T = y0Tot;  W = WTot;  H = HTot; }
    else if(id=='tot') {
      layParent = layerSim0;
      L = x0Tot;  T = y0Tot;  W = WTot;  H = HTot; }
    else {
      layParent = layerSim0;
      L = x0sim;  T = y0sim;  W = Wsim;  H = Hsim;
    }
    
    if(id=='objCalc') {
      layParent = layerObjCalc;
      L = x0obj;  T = y0obj;  W = Wobj;  H = Hobj; }
    else if(id=='simCalc') {
      layParent = layerSimCalc;
       L = x0sim;  T = y0sim;  W = Wsim; H = Hsim;
    }

    obj = document.createElement('div');
    var ST= 'position:absolute'
    +'; left:'+L
    +'; top:'+T
    +'; width:'+W
    +'; height:'+H
    +'; clip:rect(0,'+W+','+H+',0)'
    +'; visibility:'+(null==visible || 1==visible ? 'visible':'hidden')
    +(null==zNdx  ? '' : '; z-index:'+zNdx)
    +(null==bgColor ? '' : '; background-color:'+bgColor)
 
    var LR= '<DIV id='+id+' style="'+ST+'"></DIV>';

    obj.setAttribute('id',id);
    obj.setAttribute('style',ST);
    layParent.appendChild(obj);
  }
  /*------------------------------------------------------------------------------------------ set_bgColor ---*/

  function set_color(nColor)   {
    bgColor  = nColor;  
  }
  /*---------------------------------------------------------------------------------------------- get_obj ---*/

  function get_obj()           {
    return obj;
  }
  /*-------------------------------------------------------------------------------------------- get_color ---*/

  function get_bgColor()       {
    return bgColor;
  }
  function get_visible()       {
    return visible;
  }
  /*----------------------------------------------------------------------------------------------- set_ps ---*/

  function set_ps(xT,yT,wT,hT) {                        // set position and size
    obj.style.left   = xT;
    obj.style.top    = yT;
    obj.style.width  = wT;
    obj.style.height = hT;
  }
  function appendL(layerT,n)   {
    if(n == 1) {
      layerSim0.appendChild(layerT.get_obj()); }
    else {
      layerObj0.appendChild(layerT.get_obj());
    }
  }
  /*------------------------------------------------------------------------------------------------- show ---*/

  function show(b)             {
    visible = true;
    if(b==true) {
      obj.style.visibility = 'visible'; }
    else {
      obj.style.visibility = 'hidden';
    }
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/