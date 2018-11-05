/*=================================================================================================== Isometric ===*/

function Isometric () {

  var maxx      = 0;
  var maxz      = 0; 
  var theta     = 0; 
  var alpha     = 0;
  var thetaDeg  = 0;
  var alphaDeg  = 0;
  var sinTheta  = 0; 
  var cosTheta  = 0; 
  var sinAlpha  = 0; 
  var cosAlpha  = 0;
  var leeway    = 0;

  var alphaRot  = 0;
  var thetaRot  = 0;

  this.set_alpha      = set_alpha     ;
  this.inc_alpha      = inc_alpha     ;
  this.set_theta      = set_theta     ;
  this.inc_theta      = inc_theta     ;
  this.get_alpha      = get_alpha     ;
  this.get_theta      = get_theta     ;
  this.mapToScreen    = mapToScreen   ;
  this.mapToScreenRot = mapToScreenRot;
  this.mapToScreenP   = mapToScreenP  ;
  this.mapToIsoWorld  = mapToIsoWorld ;
  this.calculateDepth = calculateDepth;

  init();

  /*------------------------------------------------------------------------------------------------------ Init ---*/
 
  function init(x,z) {
    maxx      = x              ;
    maxz      = z              ;
    theta     = 30             ;
    alpha     = 45             ;
    theta    *= Math.PI/180    ;
    alpha    *= Math.PI/180    ;
    sinTheta  = Math.sin(theta);
    cosTheta  = Math.cos(theta);
    sinAlpha  = Math.sin(alpha);
    cosAlpha  = Math.cos(alpha);
    leeway    = 5              ;                                       // number of valid depth per tile

    alphaRot  = 110            ;
    thetaRot  =  15            ;
  }
  /*------------------------------------------------------------------------------------------------- set_alpha ---*/

  function set_alpha(alphaT) {
    alpha      = (Math.PI/180)*alphaT; 
    alphaDeg   = alphaT         ;
    sinAlpha   = Math.sin(alpha);
    cosAlpha   = Math.cos(alpha);
  }
  /*------------------------------------------------------------------------------------------------- inc_alpha ---*/

  function inc_alpha(dAlpha) {
    alpha      = alpha + (Math.PI/180)*dAlpha;  
    alphaDeg   = alphaDeg + dAlpha; 
    sinAlpha   = Math.sin(alpha);
    cosAlpha   = Math.cos(alpha);
  }
  /*------------------------------------------------------------------------------------------------- set_theta ---*/

  function set_theta(thetaT) {     
    theta      = (Math.PI/180)*thetaT;
    thetaDeg   = thetaT         ;
    sinTheta   = Math.sin(theta);
    cosTheta   = Math.cos(theta);
  }
  /*------------------------------------------------------------------------------------------------- inc_theta ---*/

  function inc_theta(dThetaT) {    
    theta      = thetaT + (Math.PI/180)*dTheta; 
    thetaDeg   = thetaDeg + dThetaT;   
    sinTheta   = Math.sin(theta);
    cosTheta   = Math.cos(theta);
  }
  /*------------------------------------------------------------------------------------------------- get_alpha ---*/

  function get_alpha () {    
    return alphaDeg;
  }
  /*------------------------------------------------------------------------------------------------- get_theta ---*/

  function get_theta () {    
    return thetaDeg;
  }
  /*----------------------------------------------------------------------------------------------- mapToScreen ---*/

  function mapToScreen(xpp,ypp,zpp) {
    var zp  = -zpp                     ;
    var xp  = xpp*cosAlpha+ypp*sinAlpha;  
    var yp  = ypp*cosAlpha-xpp*sinAlpha;
    var x   = xp                       ;
    var z   = zp*cosTheta-yp*sinTheta  ;  
    return [x,z];
  }

  function mapToScreenRot(xpp,ypp,zpp) {
    var zp  = -zpp                      ;
    var xp  = xpp*cosAlpha+ypp*sinAlpha ;  
    var yp  = ypp*cosAlpha-xpp*sinAlpha ; 
    var x   = xp + yp*sinTheta          ;
    var z   = zp*cosTheta-yp*sinTheta   ;
    return [x,z]                        ;
  }
  /*---------------------------------------------------------------------------------------------- mapToScreenP ---*/

  function mapToScreenP(xpp,ypp,zpp) {
    var zp  = zpp                      ;
    var xp  = xpp*cosAlpha+ypp*sinAlpha;
    var yp  = ypp*cosAlpha-xpp*sinAlpha;
    var x   = xp                       ;
    var z   = zp*cosTheta-yp*sinTheta  ;
    var y   = yp*cosTheta+zp*sinTheta  ;
    return [x,z,y]                     ;
  }
  /*--------------------------------------------------------------------------------------------- mapToIsoWorld ---*/
 
  function mapToIsoWorld(screenX, screenY) {
    var y  = (screenX/cosAlpha-screenY/(sinAlpha*sinTheta))*(1/(cosAlpha/sinAlpha+sinAlpha/cosAlpha));
    var x  = (1/cosAlpha)*(screenX-y*sinAlpha);
    return [x, y];
  }
  /*------------------------------------------------------------------------------------------------- setLeeway ---*/

  function setLeeway(value) {
    leeway = value;
  }
  /*-------------------------------------------------------------------------------------------- calculateDepth ---*/

  function calculateDepth(xT,yT,zT) {
    var x      = Math.abs(xT)*leeway;
    var y      = Math.abs(yT)       ;
    var z      = Math.abs(zT)*leeway;
    var a      = maxx               ;
    var b      = maxz               ;
    var floor  = a*(b-1)+x          ;
    var depth  = a*(z-1)+x+floor*y  ;
    return depth                    ;
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/
