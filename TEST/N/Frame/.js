/*================================================================================================ CCanvas ===*/

function CCanvas(layerParent,zIndex,nColor,xInT,yInT) {

  var xIn              = (typeof xInT !== 'undefined') ? xInT : 0;
  var yIn              = (typeof yInT !== 'undefined') ? yInT : 0;

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
  var h                = 585                                         // shee  height
  var obj              = null       ;                                // object
  var cSim             = null       ;
  var cS               = null       ;
  
  this.init            = init       ;                                // public function
  this.set_color       = set_color  ;
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
  this.fill            = fill       ;
  this.clear           = clear      ;
  this.stroke          = stroke     ;
  this.show            = show       ;

  init();

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {                            //alert("CSheet");
    obj  = document.createElement("canvas")    ;
    idT  = makeId()                            ;
    layParent .appendChild(obj)                ; 
    obj       .id              = idT           ; 
    obj       .type            = 'canvas'      ;
    obj       .style.position  = 'absolute'    ;
    obj       .style.left      = '0px'         ;
    obj       .style.top       = '0px'         ;
    obj       .width           = 614; //774           ;
    obj       .height          = 441; //585           ;
    obj       .style.border    = "1px solid"   ;
    cSim     = document.getElementById(idT)    ;
    cS       = cSim    .getContext("2d")       ;
    cS        .strokeStyle = color             ;    //alert(cS.strokeStyle);
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
  /*-------------------------------------------------------------------------------------------- get_color ---*/

  function get_color()         {
    return color;
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
 
  function lineToWo(xPos,yPos) {
    cS.lineTo(x0+xPos,y0+yPos);
  }
  function lineFromTo(x1,y1,x2,y2,nW,nCol) {
    cS.beginPath();  cS.moveTo(x0+x1,y0+y1);  cS.lineTo(x0+x2,y0+y2);  cS.lineWidth = nW; cS.strokeStyle = nCol; cS.stroke();
  }
  function rec(xPos,yPos,w,h,nW,nCol) {
    cS.beginPath();  cS.rect(x0+xPos,y0+yPos,w,h);  cS.lineWidth = nW; cS.strokeStyle = nCol; cS.stroke();
  }
  function arc(xPos,yPos,r,vStart,vEnd,nW,nCol) {
    cS.beginPath();  cS.arc(x0+xPos,y0+yPos,r,vStart,vEnd); cS.lineWidth = nW; cS.strokeStyle = nCol;  cS.stroke();
  }
  function circle(xPos,yPos,r,nW,nCol) {
    arc(xPos,yPos,r,0,2*Math.PI,nW,nCol);
  }

  function vector(x1,y1,x2,y2,nW,nCol) {
    if ((x1 != x2) || (y1 != y2)) {
      var beta     = Math.PI/6;
      var d        = 5;
      var distance = d/Math.cos(beta);
      var gamma    = Math.atan((y2-y1)/(x2-x1));  //alert(gamma);          // compute arrow angel
      var theta1   = Math.PI-gamma-beta;  //alert(theta1);
      var theta2   = Math.PI+gamma-beta;  //alert(theta2);

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

      var x3 = Math.round(x2+distance*Math.cos(theta1));  // arrow corner
      var y3 = Math.round(y2-distance*Math.sin(theta1));
      var x4 = Math.round(x2+distance*Math.cos(theta2));
      var y4 = Math.round(y2+distance*Math.sin(theta2));

      cS.beginPath();                                     // vector
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
  /*-------------------------------------------------------------------------------------------- beginPath ---*/

  function beginPath() {
    cS.beginPath();
  }
  /*-------------------------------------------------------------------------------------------- beginFill ---*/

  function fill()              {
    cS.fill();  cS.stroke();  cS.closePath();
  }
  /*----------------------------------------------------------------------------------------------- stroke ---*/

  function stroke()    {
    cS.stroke();
  }
  /*------------------------------------------------------------------------------------------------ clear ---*/

  function clear()     {       
    cS.clearRect(0,0,cSim.width,cSim.height);
  }
  /*------------------------------------------------------------------------------------------------- show ---*/

  function show(b)     {
    if(b==true) {
      obj.style.visibility = 'visible'; }
    else { 
      obj.style.visibility = 'hidden';
    }
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/