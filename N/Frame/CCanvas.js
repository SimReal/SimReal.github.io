/*================================================================================================ CCanvas ===*/

function CCanvas (layerParent,zIndex,nColorT,xInT,yInT) {

                 /* Canvas

                 /* layerParent :parent layer  */
                 /* zIndex      :z index       */
                 /* ncolorT     :layer color   */
                 /* xInT        :x position    */
                 /* yInT        :y position    */
   
   
  var nColor           = (typeof nColorT !== 'undefined') ? nColorT : 1;
  var xIn              = (typeof xInT    !== 'undefined') ? xInT    : 0;
  var yIn              = (typeof yInT    !== 'undefined') ? yInT    : 0;

  var layParent        = layerParent;                                // parent layer
  var zNdx             = zIndex     ;                                // z index
  var x0               = xIn        ;                                // origin x coordinate
  var y0               = yIn        ;                                //        y coordinate
  var thick            = 1          ;                                // drawing thickness
  var color            = nColor     ;                                //         color
  var alpha            = 1          ;                                //         alpha
  var idT              = null       ;                                // sheet name
  var xPos             = 0          ;                                // sheet x-position
  var yPos             = 0          ;                                // sheet y-position
  var w                = 774        ;                                // sheet width
  var h                = 585        ;                                // shee  height
  var obj              = null       ;                                // object
  var cSim             = null       ;
  var cS               = null       ;
  var colorFill        = null       ;
  var angle            = 0          ;                                // rotated angle

  this.init            = init       ;                                // public function
  this.get_obj         = get_obj    ;
  this.get_x0          = get_x0     ;
  this.get_y0          = get_y0     ;
  this.set_x0          = set_x0     ;
  this.set_y0          = set_y0     ;
  this.set_xy          = set_xy     ;
  this.set_color       = set_color  ;
  this.set_alpha       = set_alpha  ;
  this.show            = show       ;
  this.moveTo          = moveTo     ;
  this.moveToWo        = moveToWo   ;
  this.lineTo          = lineTo     ;
  this.lineToWo        = lineToWo   ;
  this.lineFromTo      = lineFromTo ;
  this.lineStyle       = lineStyle  ;
  this.rec             = rec        ;
  this.arc             = arc        ;
  this.circle          = circle     ;
  this.vector          = vector     ;
  this.beginPath       = beginPath  ;
  this.beginFill       = beginFill  ;
  this.beginFillGradLin= beginFillGradLin;
  this.beginFillGradRad= beginFillGradRad;
  this.set_fillStyle   = set_fillStyle;
  this.fill            = fill       ;
  this.endFill         = endFill    ;
  this.set_txt         = set_txt    ;
  this.set_txtRel      = set_txtRel ;
  this.set_image       = set_image  ;
  this.translate       = translate  ;
  this.rotate          = rotate     ;
  this.rotateP         = rotateP    ;
  this.clear           = clear      ;
  this.stroke          = stroke     ;
  this.show            = show       ;

  init();

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {                          
    obj  = document.createElement("canvas")    ;
    idT  = makeId()                            ;
    (layParent.get_obj()) .appendChild(obj)    ; 
    obj       .id              = idT           ; 
    obj       .type            = 'canvas'      ;
    obj       .style.position  = 'absolute'    ;
    obj       .style.left      = '0px'         ;
    obj       .style.top       = '0px'         ;
    obj       .width           = 614           ; 
    obj       .height          = 441           ;    
    obj       .style.border    = "1px solid"   ;
    cSim     = document.getElementById(idT)    ;
    cS       = cSim    .getContext("2d")       ;
    cS        .strokeStyle = color             ;   
  }
  /*----------------------------------------------------------------------------------------------- makeId ---*/

  function makeId()            {
    var txt = "";
    var pElement = "abcdefgh0123456789";
    for(var i=0;i<5;i++) {
      txt += pElement.charAt(Math.floor(Math.random() * pElement.length));
    }
    return txt;
  }
  /*-------------------------------------------------------------------------------------------- lineStyle ---*/

  function lineStyle(nThick,nCol,nAlpha) {
    thick = nThick; cS.lineWidth   = thick;
    color = nCol  ; cS.strokeStyle = color; 
    alpha = nAlpha; cS.globalAlpha = alpha;
    cS.strokeStyle = color;
  }
  /*-------------------------------------------------------------------------------------------- set_color ---*/

  function set_color(nColor)   {
    color  = nColor             ;
    cS      .strokeStyle = color;   
  }
  /*----------------------------------------------------------------------------------------------- set_x0 ---*/

  function set_x0(x0T)         {
    x0 = x0T;
  }
  /*------------------------------------------------------------------------------------------------ set_y0 --*/

  function set_y0(y0T)         {
    y0 = y0T;
  }
  /*------------------------------------------------------------------------------------------------ set_xy --*/

  function set_xy(x0T,y0T)     {
    x0 = x0T;
    y0 = y0T;
  }
  /*-------------------------------------------------------------------------------------------- set_alpha ---*/

  function set_alpha(alphaT)   {
    alpha          = alphaT;
    cS.globalAlpha = alphaT;
  }
  /*---------------------------------------------------------------------------------------------- get_obj ---*/

  function get_obj()           {
    return cS;
  }
  /*-------------------------------------------------------------------------------------------- get_color ---*/

  function get_color()         {
    return color;
  }
  /*----------------------------------------------------------------------------------------------- get_x0 ---*/

  function get_x0()            {
    return x0;
  }
  /*------------------------------------------------------------------------------------------------ get_y0 --*/

  function get_y0()            {
    return y0;
  }
  /*----------------------------------------------------------------------------------------------- moveTo ---*/

  function moveTo(xPos,yPos)   {        
    cS.beginPath(); cS.moveTo(x0+xPos,y0+yPos);
  }
  function moveToWo(xPos,yPos) {
    cS.moveTo(x0+xPos,y0+yPos);
  }
  /*----------------------------------------------------------------------------------------------- lineTo ---*/

  function lineTo(xPos,yPos)   {           
    cS.lineTo(x0+xPos,y0+yPos);  cS.stroke();
  }
  /*--------------------------------------------------------------------------------------------- lineToWo ---*/
 
  function lineToWo(xPos,yPos)                  {
    cS.lineTo(x0+xPos,y0+yPos);
  }
  function lineFromTo(x1,y1,x2,y2,nW,nCol)      {
    cS.beginPath();  
    cS.moveTo(x0+x1,y0+y1);
    cS.lineTo(x0+x2,y0+y2);                cS.lineWidth = nW; cS.strokeStyle = nCol; cS.stroke();
  }
  function rec(xPos,yPos,w,h,nW,nCol)           {
    cS.beginPath();
    cS.rect(x0+xPos,y0+yPos,w,h);          cS.lineWidth = nW; cS.strokeStyle = nCol; cS.stroke();
  }
  function arc(xPos,yPos,r,vStart,vEnd,nW,nCol) {
    cS.beginPath();
    cS.arc(x0+xPos,y0+yPos,r,vStart,vEnd); cS.lineWidth = nW; cS.strokeStyle = nCol;  cS.stroke();
  }
  function circle(xPos,yPos,r,nW,nCol) {
    arc(xPos,yPos,r,0,2*Math.PI,nW,nCol);
  }
  /*----------------------------------------------------------------------------------------------- vector ---*/
  
  function vector(x1,y1,x2,y2,nW,nCol) {
    if ((x1 != x2) || (y1 != y2)) {
      var beta     = Math.PI/6;
      var d        = 5;
      var distance = d/Math.cos(beta);
      var gamma    = Math.atan((y2-y1)/(x2-x1));           // compute arrow angel
      var theta1   = Math.PI-gamma-beta;  
      var theta2   = Math.PI+gamma-beta;  
      
      if (x1 == x2) {
        theta1 = Math.PI/2.0-beta;
        theta2 = Math.PI + (Math.PI/2.0-beta);
        if (y2 < y1) {
          theta1 = theta1+Math.PI;
          theta2 = theta2+Math.PI;    
        }  }

      else if (x2 < x1)   {
        theta1 = theta1+Math.PI;
        theta2 = theta2+Math.PI; 
      }

      var x3 = Math.round(x2+distance*Math.cos(theta1));   // arrow corner
      var y3 = Math.round(y2-distance*Math.sin(theta1));
      var x4 = Math.round(x2+distance*Math.cos(theta2));
      var y4 = Math.round(y2+distance*Math.sin(theta2));

      cS.beginPath();                                      // vector
      cS.moveTo(x0+x1,y0+y1);
      cS.lineTo(x0+x2,y0+y2);
      cS.lineTo(x0+x3,y0+y3);
      cS.lineTo(x0+x4,y0+y4);
      cS.lineTo(x0+x2,y0+y2);
      cS.closePath();
      cS.lineWidth = nW;
      cS.fillStyle = nCol;
      cS.fill();
      cS.strokeStyle = nCol;
      cS.stroke();
    }  
  }
  /*----------------------------------------------------------------------------------------------- rotate ---*/

  function rotate(v)           {
    cS.rotate(v);
  }
  /*----------------------------------------------------------------------------------------------- rotate ---*/

  function rotateP(v,xT,yT)    {
    cS.translate(xT,yT);  cS.rotate(-angle);  cS.rotate(v);  cS.translate(-xT,-yT); angle = v;
  }
  /*-------------------------------------------------------------------------------------------- translate ---*/

  function translate(xT,yT)    {
    cS.translate(xT,yT);
  }
  /*-------------------------------------------------------------------------------------------- set_image ---*/

  function set_image(xPos,yPos,sImageName)  {
    var link    = new Image();
    link.src    = sImageName;
    link.onload = function() {
      cS.drawImage(link,xPos,yPos);
    }
  }
  /*-------------------------------------------------------------------------------------------- beginPath ---*/

  function beginPath()         {
    cS.beginPath();
  }
  /*---------------------------------------------------------------------------------------- set_fillStyle ---*/

  function set_fillStyle(nCol) {
    colorFill    = nCol  ;  
    cS.fillStyle = colorFill;
  }  
  /*-------------------------------------------------------------------------------------------- beginFill ---*/

  function beginFill(nCol,nAlpha) {
    set_fillStyle(nCol  );
    set_alpha    (nAlpha);
  }
  function beginFillGradLin(nCol1,nCol2,nAlpha,x1,y1,x2,y2) {
    var grd          = cS.createLinearGradient(x1,y1,x2,y2);
    grd.addColorStop   (0,nCol1);
    grd.addColorStop   (1,nCol2);
    cS.fillStyle     = grd      ;
    set_alpha          (nAlpha) ;
  }
  function beginFillGradRad(nCol1,nCol2,nAlpha,x1,y1,r1,x2,y2,r2) {
    var grd          = cS.createRadialGradient(x0+x1,y0+y1,r1,x0+x2,y0+y2,r2);
    grd.addColorStop   (0,nCol1);
    grd.addColorStop   (1,nCol2);
    cS.fillStyle     = grd      ;
    set_alpha          (nAlpha) ;  
  }
  /*---------------------------------------------------------------------------------------------- endFill ---*/

  function endFill()           {
    fill();
  }
  /*------------------------------------------------------------------------------------------------- fill ---*/

  function fill()              {
    cS.fill();  cS.stroke();  cS.closePath();
  }
  /*---------------------------------------------------------------------------------------------- set_txt ---*/

  function set_txt(txt,xPos,yPos,size)    {
    cS.font = size.toString() + "px Verdana";
    cS.fillText(txt,xPos,yPos);
  }
   /*---------------------------------------------------------------------------------------------- set_txt ---*/

  function set_txtRel(txt,xPos,yPos,size) {
    cS.font = size.toString() + "px Verdana";
    cS.fillText(txt,x0+xPos,y0+yPos);
  }
  /*----------------------------------------------------------------------------------------------- stroke ---*/

  function stroke()            {
    cS.stroke();
  }
  /*------------------------------------------------------------------------------------------------ clear ---*/

  function clear()             {       
    cS.clearRect(0,0,cSim.width,cSim.height);
  }
  /*------------------------------------------------------------------------------------------------- show ---*/

  function show(b)             {
    if(b==true) {
      obj.style.visibility = 'visible'; }
    else { 
      obj.style.visibility = 'hidden' ;
    }
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/