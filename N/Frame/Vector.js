/*================================================================================================= Vector ===*/

function Vector (cCanvasT) {

                /* Vector             */

                /* cCanvasT :canvas   */
                
               
  var cCanvas = cCanvasT ;
  var cS      = null     ;
  var thick   = 1        ;
  var color   = '#000000';
  var alpha   = 1        ;
  var x0      = 0        ;
  var y0      = 0        ;
  var w       = 614      ;
  var h       = 441      ;
  
  this.init            = init       ;                                // public function
  this.set_color       = set_color  ;
  this.get_color       = get_color  ;
  this.arrow           = arrow      ;
  this.show            = show       ;
  this.moveTo          = moveTo     ;
  this.moveToWo        = moveToWo   ;
  this.lineTo          = lineTo     ;
  this.lineToWo        = lineToWo   ;
  this.lineFromTo      = lineFromTo ;
  this.lineStyle       = lineStyle  ;
  this.beginPath       = beginPath  ;
  this.fill            = fill       ;
  this.clear           = clear      ;
  this.stroke          = stroke     ;
  this.show            = show       ;

  init();

  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {  
    x0 = cCanvas.get_x0();
    y0 = cCanvas.get_y0();               
    cS = cCanvas.get_obj();
    w  = cS.width         ;
    h  = cS.height        ;
  }
  /*-------------------------------------------------------------------------------------------- lineStyle ---*/

  function lineStyle(nThick,nCol,nAlpha)  {
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
 
  function lineToWo(xPos,yPos)                  {
    cS.lineTo(x0+xPos,y0+yPos);
  }
  function lineFromTo(x1,y1,x2,y2,nW,nCol)      {
    cS.beginPath();  cS.moveTo(x0+x1,y0+y1);  cS.lineTo(x0+x2,y0+y2);  cS.lineWidth = nW; cS.strokeStyle = nCol; cS.stroke();
  }
  function rec(xPos,yPos,w,h,nW,nCol) {
    cS.beginPath();  cS.rect(x0+xPos,y0+yPos,w,h);  cS.lineWidth = nW; cS.strokeStyle = nCol; cS.stroke();
  }
  function arc(xPos,yPos,r,vStart,vEnd,nW,nCol) {
    cS.beginPath();  cS.arc(x0+xPos,y0+yPos,r,vStart,vEnd); cS.lineWidth = nW; cS.strokeStyle = nCol;  cS.stroke();
  }
  function circle(xPos,yPos,r,nW,nCol)          {
    arc(xPos,yPos,r,0,2*Math.PI,nW,nCol);
  }

  function arrow(x1,y1,x2,y2,nW,nCol)           {
    color = nCol;  cS.strokeStyle = color;
    if ((x1 != x2) || (y1 != y2)) {
      var beta     = Math.PI/6;
      var d        = 5;
      var distance = d/Math.cos(beta);
      var gamma    = Math.atan((y2-y1)/(x2-x1));          // compute arrow angel
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

      var x3 = Math.round(x2+distance*Math.cos(theta1));  // arrow corner
      var y3 = Math.round(y2-distance*Math.sin(theta1));
      var x4 = Math.round(x2+distance*Math.cos(theta2));
      var y4 = Math.round(y2+distance*Math.sin(theta2));

      cS.beginPath()        ;                             // vector
      cS.moveTo(x0+x1,y0+y1);
      cS.lineTo(x0+x2,y0+y2);
      cS.lineTo(x0+x3,y0+y3);
      cS.lineTo(x0+x4,y0+y4);
      cS.lineTo(x0+x2,y0+y2);
      cS.closePath()        ;
      cS.lineWidth  = nW    ;
      cS.fillStyle  = nCol  ;
      cS.fill()             ;
      cS.strokeStyle = nCol ;
      cS.stroke()           ;
    }  
  }
  /*-------------------------------------------------------------------------------------------- beginPath ---*/

  function beginPath() {
    cS.beginPath();
  }
  /*-------------------------------------------------------------------------------------------- beginFill ---*/

  function fill()      {
    cS.fill();  cS.stroke();  cS.closePath();
  }
  /*----------------------------------------------------------------------------------------------- stroke ---*/

  function stroke()    {
    cS.stroke();
  }
  /*------------------------------------------------------------------------------------------------ clear ---*/

  function clear()     { 
    cCanvas.clear();      
  }
  /*------------------------------------------------------------------------------------------------- show ---*/

  function show(b)     {
    if(b==true) {
      obj.style.visibility = 'visible'; }
    else { 
      obj.style.visibility = 'hidden' ;
    }
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/