/*==================================================================================================== PointTab ===*/

function PointTab()  {

/*------------------------------------------------------------------------------------------------------ import ---*/

import flash .display  .MovieClip          ;
import flash .display  .Sprite             ;
import flash .display  .Graphics           ;

/*============================================================================================== class PointTab ===*/

public class PointTab {

                                               /* Organizing arrays of points */

  private var sim         :Object   ;                                // sim

  private var owner       :Object   ;                                // owner   (LMS_obj)
  //private var sim         :Sim        ;
  //private var owner       :Object     ;                              // owner         (Param_Cls_001)
  private var mc_parent   :Sprite  ;                              // movieclip     parent
  private var mc_point    :Sprite  ;                              //               drawing point
  private var mc_pointGraph :Sprite;                              //               drawing polynom
  private var mc_pointArray :Array;
  private var mc_graphArray :Array;
  private var mc_pointZero  :Sprite;
  private var mc_pointGraphZero :Sprite;

  private var nMemCurrentX    :Number = 1;
  private var nMemCurrentY    :Number = 1;
  private var nMemCurrentProd :Number = 1;                       // current graph window (Sprite);

  private var mathematics :Mathematics;                              // mathematical  operations

  private var pointTabX   :Array      ;                              // point array   x
  private var pointTabY   :Array      ;                              //               y

  private var pointTabXC  :Array      ;                              // copy table
  private var pointTabYC  :Array      ;

  private var nPointMax   :Number     = 20;                          // max number of points in array
  private var nPoint      :Number     = 0 ;                          // current number of points

  private var x0          :Number;                                   // origin        x0
  private var y0          :Number;                                   //               y0

  private var x00         :Number = 165;
  private var y00         :Number = 156;
  private var x0quad1     :Number = 40 ;
  private var y0quad1     :Number = 256;
  private var x0quad14    :Number    = 40      ;                  // origo  quad14
  private var y0quad14    :Number    = 156     ;     

  private var xScale      :Number  = 1/25;                                   // scale         x
  private var yScale      :Number  = 1/25;                                   //               y

  private var xMinGraph   :Number;                                   // drawing area  xMinGraph
  private var yMinGraph   :Number;                                   //               yMinGraph
  private var xMaxGraph   :Number;                                   //               xMaxGraph
  private var yMaxGraph   :Number;                                   //               yMaxGraph
 
  private var a           :Number;                                   // y = a*x+b     a
  private var b           :Number;                                   //               b

  private var fit            :PolynomialLeastSquareFit;
  private var estimation     :EstimatedPolynomial     ;
  private var nPolynomDegree :Number = 0;
  private var bEstimatedPolynom :Boolean = false;
  private var bAuto       :Boolean = false;                          // manual or auto data transfer

  private var sPolynom    :String = "";

  private var bLinAx      :Boolean = false;     // y = ax

  private var nPolynomial    :Number = 1;
  private var nExponential_1 :Number = 2;
  private var nExponential_2 :Number = 3;
  private var nLn            :Number = 4;
  private var nPower         :Number = 5;
  private var nSin           :Number = 6;
  private var nLMS           :Number = 1;

  private var nRoundTo       :Number = 0.0001;

  private var yAVG           :Number = 0;                               // average (computed for polynomial n=0)

  private var nSumError      :Number;
  private var nFunction      :Number;

  private var nMaxMem        :Number  = 10   ;
  private var bMultiGraph    :Boolean = false;
  private var bPair          :Boolean = false ;

  /*-------------------------------------------------------------------------------------------------- PointTab ---*/

  //public function PointTab(sim:Sim,owner:Object,mc_parent:Sprite,mc_point:Sprite,mc_pointGraph:Sprite,
  //                         xMinGraph:Number,yMinGraph:Number,xMaxGraph:Number,yMaxGraph:Number,
  //                         x0:Number,y0:Number,xScale:Number,yScale:Number) {

  public function PointTab(sim:Object,owner:Object,mc_parent:Sprite,mc_pointZero:Sprite,mc_pointArray:Array,mc_pointGraphZero:Sprite,mc_graphArray:Array,
                           xMinGraph:Number,yMinGraph:Number,xMaxGraph:Number,yMaxGraph:Number,
                           x0:Number,y0:Number,xScale:Number,yScale:Number) {

    this.sim       = sim        ;
    this.owner     = owner      ;
    this.mc_parent = mc_parent  ;
    this.mc_pointZero  = mc_pointZero   ;               this.mc_pointArray = mc_pointArray;    mc_point      = mc_pointArray[1][1]; //mc_point = mc_pointZero;
    this.mc_pointGraphZero = mc_pointGraphZero;         this.mc_graphArray = mc_graphArray;    mc_pointGraph = mc_graphArray[1][1]; //mc_pointGraph = mc_pointGraphZero;
    this.xMinGraph = xMinGraph  ;
    this.yMinGraph = yMinGraph  ;
    this.xMaxGraph = xMaxGraph  ;
    this.yMaxGraph = yMaxGraph  ;
    this.x0        = x0         ;
    this.y0        = y0         ;
    this.xScale    = xScale     ;
    this.yScale    = yScale     ;

    pointTabX      = new Array();
    pointTabY      = new Array();

    pointTabXC     = new Array();
    pointTabYC     = new Array();

    mathematics = new Mathematics();
    //mc_point = mc_pointArray[1][2];
    //mc_pointGraph = mc_graphArray[1][2];
    //trace(mc_pointArray[1][2] + "    " + mc_graphArray[1][2]);
    /*
    for(var i=1;i<=10;i++) {
      for(var j=1;j<=10;j++) {
       trace(mc_pointArray[i][j] + "    " + mc_graphArray[i][j]);
      }
    }
    */
  }

  public function set_auto(bAuto:Boolean) {
    this.bAuto = bAuto;  //trace(bAuto);
  }

  public function set_xyScale(x0:Number,y0:Number,xScale:Number,yScale:Number) {
    this.x0     = x0    ;
    this.y0     = y0    ;
    this.xScale = xScale;
    this.yScale = yScale;
  }

  public function set_x0(x0:Number) {
    this.x0 = x0;
    drawPointAll();
    if(bEstimatedPolynom) {
      draw_estimatedPolynom();
    } 
  }
  public function set_y0(y0:Number) {
    this.y0 = y0;
    drawPointAll();
    if(bEstimatedPolynom) {
      draw_estimatedPolynom();
    } 
  }
  public function set_xScale(xScale:Number) {
    this.xScale = xScale;
    drawPointAll();
    if(bEstimatedPolynom) {
      draw_estimatedPolynom();
    } 
  }
  public function set_yScale(yScale:Number) {
    this.yScale = yScale;
    drawPointAll();
    if(bEstimatedPolynom) {
      draw_estimatedPolynom();
    } 
  }
/*
  public function transfer_data(xTab:Array,yTab:Array) {
    if(bAuto) {
      var n :Number = xTab.length; trace(n);
      nPoint        = 0          ;
      for(var i=0; i<n; i++) {
        pointTabX[i] = xTab[i];
        pointTabY[i] = yTab[i];
        nPoint++;
        trace(pointTabX[i]);trace(pointTabY[i]);trace("");
      }
      drawPointAll();
    }
  }
*/
   public function transfer_data() {
    if(bAuto) {
      var xTab :Array  = sim.get_pointTabX();
      var yTab :Array  = sim.get_pointTabY();
      var n    :Number = sim.get_nPointTabMax(); //xTab.length; //trace(n);
      nPoint        = 0          ;
      for(var i:Number=0; i<n; i++) {
        pointTabX[i] = xTab[i];
        pointTabY[i] = yTab[i];
        nPoint++;
        //trace(pointTabX[i]);trace(pointTabY[i]);trace("");
      }
      drawPointAll();
    }
  }


/*
  public function transfer_data(x:Number,y:Number,n:Number) {
    pointTabX[n] = x;
    pointTabY[n] = y;
    nPoint++;
  }
*/
  /*------------------------------------------------------------------------------------------------- drawPoint ---*/

  public function drawPoint (x:Number,y:Number) {

                            /* Point drawing and coordinate putting in array */

    if(!bAuto) {
      if(x>=xMinGraph && x<=xMaxGraph && y>=yMinGraph && y<=yMaxGraph) {

        mc_point.graphics.lineStyle(0.5,0xFF0000,100);                          // draw point
        mc_point.graphics.moveTo(x-2,y-2);
        mc_point.graphics.lineTo(x+2,y+2);
        mc_point.graphics.moveTo(x-2,y+2);
        mc_point.graphics.lineTo(x+2,y-2);

        pointTabX[nPoint] = (x-x0)*xScale                              // put coord into array   x
        pointTabY[nPoint] = (y0-y)*yScale;                             //                        y
        nPoint++;                                                      // number of points
      } 
    }
  }

  /*------------------------------------------------------------------------------------------------- drawPoint ---*/

  public function drawPoint_fromTable (x:Number,y:Number) {

                            /* Point drawing and coordinate putting in array */

    if(!bAuto) {
      if(x>=xMinGraph && x<=xMaxGraph && y>=yMinGraph && y<=yMaxGraph) {

        mc_point.graphics.lineStyle(0.5,0xFF0000,100);                          // draw point
        mc_point.graphics.moveTo(x-2,y-2);
        mc_point.graphics.lineTo(x+2,y+2);
        mc_point.graphics.moveTo(x-2,y+2);
        mc_point.graphics.lineTo(x+2,y-2);

        //pointTabX[nPoint] = (x-x0)*xScale                              // put coord into array   x
        //pointTabY[nPoint] = (y0-y)*yScale;                             //                        y
        //nPoint++;                                                      // number of points
      } 
    }
    pointTabX[nPoint] = (x-x0)*xScale                              // put coord into array   x
    pointTabY[nPoint] = (y0-y)*yScale;                             //                        y
    nPoint++;
  }

  /*--------------------------------------------------------------------------------------------- drawPointAuto ---*/

  public function drawPointAuto (xA:Number,yA:Number) {

                            /* Point drawing and coordinate putting in array */

    var x:Number = x0+xA/xScale;
    var y:Number = y0-yA/yScale;

    if(x>=xMinGraph && x<=xMaxGraph && y>=yMinGraph && y<=yMaxGraph) {

      mc_point.graphics.lineStyle(0.5,0xFF0000,100);                           // draw point
      mc_point.graphics.moveTo(x-2,y-2);
      mc_point.graphics.lineTo(x+2,y+2);
      mc_point.graphics.moveTo(x-2,y+2);
      mc_point.graphics.lineTo(x+2,y-2);
    } 
    pointTabX[nPoint] = xA;                                                   // put coord into array   x
    pointTabY[nPoint] = yA;                                                   //                        y
    nPoint++;                   //trace("nPoint");trace(nPoint);                                             // number of points
  }
  /*---------------------------------------------------------------------------------------------- drawPointAll ---*/

  public function drawPointAll () {

                            /* Point drawing (all points) */
    var x :Number;
    var y :Number;

    sortPointTab();

    mc_point.graphics.clear();
    mc_point.graphics.lineStyle(0.5,0xFF0000,100);

    for(var i:Number=0; i<nPoint; i++) {
      x = x0 + pointTabX[i]/xScale;
      y = y0 - pointTabY[i]/yScale;
      if(x>=xMinGraph && x<=xMaxGraph && y>=yMinGraph && y<=yMaxGraph) {
        mc_point.graphics.moveTo(x-2,y-2);
        mc_point.graphics.lineTo(x+2,y+2);
        mc_point.graphics.moveTo(x-2,y+2);
        mc_point.graphics.lineTo(x+2,y-2); 
      }                                                
    } 
  }

  public function set_nPolynomDegree(nPolynomDegree :Number) {
    this.nPolynomDegree = nPolynomDegree;
  }
  /*----------------------------------------------------------------------------------------------------- clear ---*/

  public function clear() {                                          // clear the drawing area
    mc_point.graphics.clear();
    mc_pointGraph.graphics.clear();
    nPoint = 0;
  }

  public function clearPoint() {                                          // clear the drawing area
    mc_point.graphics.clear();
    nPoint = 0;
  }

  public function clearPointGraph() {                                         
    mc_pointGraph.graphics.clear();
    bEstimatedPolynom = false;
  }
  /*---------------------------------------------------------------------------------------------- sortPointTab ---*/

  public function sortPointTab() {

                  /* Sorting the pointTabX in increasing order                 */ 
                  /* and changing the order in pointTabY the corresponding way */

    var changed :Boolean = true;
    var xTmp    :Number        ;
    var yTmp    :Number        ;
    var j       :Number  = 1   ;

    while(changed) {
      changed = false;
      for(var i:Number=0; i<nPoint-1-j; i++) {
        if(pointTabX[i] > pointTabX[i+1]) {
          changed        = true;
          xTmp           = pointTabX[i];
          pointTabX[i]   = pointTabX[i+1];
          pointTabX[i+1] = xTmp;
          yTmp           = pointTabY[i];
          pointTabY[i]   = pointTabY[i+1];
          pointTabY[i+1] = yTmp;
        }
      }
      j++;
    }
      

  }

  public function set_polynomial() {
    nLMS = nPolynomial;   //trace(nLMS);
  }
  public function set_exponential_1() {
    nLMS = nExponential_1;
  }
   public function set_exponential_2() {
    nLMS = nExponential_2;
  }
  public function set_power() {
    nLMS = nPower;
  }
  public function set_ln() {
    nLMS = nLn;
  }
  public function set_sin() {
    nLMS = nSin;
  }

  public function lsm(x0:Number,y0:Number,xScale:Number,yScale:Number) {
    //trace(nLMS);
    switch(nLMS) {
      case nPolynomial    : lsm_polynomial    (x0,y0,xScale,yScale);  break;
      case nExponential_1 : lsm_exponential_1 (x0,y0,xScale,yScale);  break;
      case nExponential_2 : lsm_exponential_2 (x0,y0,xScale,yScale);  break;
      case nLn            : lsm_ln            (x0,y0,xScale,yScale);  break;
      case nPower         : lsm_power         (x0,y0,xScale,yScale);  break;
      case nSin           : lsm_sin           (x0,y0,xScale,yScale);  break;
      //case nPower         : lsm_powerFunction (x0,y0,xScale,yScale);  break;
    }
    owner.set_error(nSumError);
  }

  public function lsm_exponential_2(x0:Number,y0:Number,xScale:Number,yScale:Number) {    //trace("expllll");
    this.x0     = x0    ;  //trace(x0);
    this.y0     = y0    ;  //trace(y0);
    this.xScale = xScale;  //trace(xScale);
    this.yScale = yScale;  //trace(yScale);

    var xp:Array = new Array();      //trace(nPoint);
    var yp:Array = new Array();
    var numPos :Number =0;
    var numNeg :Number =0;
    for(var i:Number=0;i<nPoint;i++) {
      xp[i] = pointTabX[i]; //xp[i] = Math.log(xp[i]);
      yp[i] = pointTabY[i]; yp[i] = Math.log(Math.abs(yp[i]));
      if(pointTabY[i] >= 0) {
        numPos++; }
      else {
        numNeg++;
      }
    }
    //trace(xp); trace(yp);
    
    //var fA :Function_Analysis = new Function_Analysis();
    //b = fA.lsm_exponential_B(xp,yp,nPoint)  ;
    //a = fA.lsm_exponential_A(xp,yp,nPoint,b);
    
    b = Mathematics.lsmTab_A(xp,yp,nPoint);                          // y = a*x + b     a    
    var lna :Number = Mathematics.lsmTab_B(xp,yp,nPoint);
    if(numPos >= numNeg) {
      a = Math.exp(lna); }
    else {
      a = -Math.exp(lna);
    }                                                    //trace("bbbbb"),trace(b);trace(a);

    a = Mathematics.roundTo(a,nRoundTo);                 //trace(a);
    b = Mathematics.roundTo(b,nRoundTo);                 //trace(b);
    var sa :String = a.toString();
    var sb :String = b.toString();
 
    var sy :String = "y=" + sa + "*e^(" + sb + "*x)";
    owner.set_function(sy);

	var color_draw :Number = 0x0000FF;                               // start drawing the line
    mc_pointGraph.graphics.lineStyle(0.5,color_draw,100);    
    mc_pointGraph.graphics.moveTo(xMinGraph,fExp(xMinGraph,a,b));
    for(var x:Number=xMinGraph; x<=xMaxGraph; x++) {
      if(((fExp(x,a,b) > yMinGraph) && (fExp(x,a,b) < yMaxGraph)) && 
        ((x > xMinGraph) && ((fExp(x-1,a,b) > yMinGraph) && (fExp(x-1,a,b) < yMaxGraph)))) {
        mc_pointGraph.graphics.lineTo(x,fExp(x,a,b));}
      else {
         mc_pointGraph.graphics.moveTo(x,fExp(x,a,b));
      }
    }

    nSumError   = 0;
    for(var j:Number=0; j<nPoint; j++) {
      nFunction = a*Math.pow(Math.E,b*xp[j]);
      //nSumError = nSumError + Math.abs(nFunction-pointTabY[j]);
      nSumError = nSumError + Math.pow(nFunction-pointTabY[j],2);
    }
    nSumError = Math.sqrt(nSumError/nPoint);
  }

  public function lsm_exponential_1(x0:Number,y0:Number,xScale:Number,yScale:Number) {    // y = a*b^x
    this.x0     = x0    ;  //trace(x0);
    this.y0     = y0    ;  //trace(y0);
    this.xScale = xScale;  //trace(xScale);
    this.yScale = yScale;  //trace(yScale);

    var xp:Array = new Array();      //trace(nPoint);
    var yp:Array = new Array();
    var numPos :Number =0;
    var numNeg :Number =0;
    for(var i:Number=0;i<nPoint;i++) {
      xp[i] = pointTabX[i]; //xp[i] = Math.log(xp[i]);
      yp[i] = pointTabY[i]; yp[i] = Math.log(Math.abs(yp[i]));
      if(pointTabY[i] >= 0) {
        numPos++; }
      else {
        numNeg++;
      }
    }
    //trace(xp); trace(yp);
    
    //var fA :Function_Analysis = new Function_Analysis();
    //b = fA.lsm_exponential_B(xp,yp,nPoint)  ;
    //a = fA.lsm_exponential_A(xp,yp,nPoint,b);
    
    //b = Mathematics.lsmTab_A(xp,yp,nPoint);                          // y = a*x + b     a    
    //var lna :Number = Mathematics.lsmTab_B(xp,yp,nPoint);
    
    //b       = 0
    //var lna = Mathematics.lsmTab_A(xp,yp,nPoint);
    var lna :Number = Mathematics.lsmTab_B(xp,yp,nPoint);
    var lnb :Number = Mathematics.lsmTab_A(xp,yp,nPoint);
    if(numPos >= numNeg) {
      a = Math.exp(lna); }
    else {
      a = -Math.exp(lna);
    }                                                    //trace("bbbbb"),trace(b);trace(a);
    b = Math.exp(lnb);

    a = Mathematics.roundTo(a,nRoundTo);                 //trace(a);
    b = Mathematics.roundTo(b,nRoundTo);                 //trace(b);
    var sa :String = a.toString();
    var sb :String = b.toString();
 
    var sy :String = "y=" + sa + "*" + sb + "^x";
    owner.set_function(sy);

	var color_draw :Number = 0x0000FF;                               // start drawing the line
    mc_pointGraph.graphics.lineStyle(0.5,color_draw,100);    
    mc_pointGraph.graphics.moveTo(xMinGraph,fPowFunc(xMinGraph,a,b));
    for(var x:Number=xMinGraph; x<=xMaxGraph; x++) {
      if(((fPowFunc(x,a,b) > yMinGraph) && (fPowFunc(x,a,b) < yMaxGraph)) && 
        ((x > xMinGraph) && ((fPowFunc(x-1,a,b) > yMinGraph) && (fPowFunc(x-1,a,b) < yMaxGraph)))) {
        mc_pointGraph.graphics.lineTo(x,fPowFunc(x,a,b));}
      else {
         mc_pointGraph.graphics.moveTo(x,fPowFunc(x,a,b));
      }
    }

    nSumError   = 0;
    for(var j:Number=0; j<nPoint; j++) {
      nFunction = a*Math.pow(b,xp[j]);
      //nSumError = nSumError + Math.abs(nFunction-pointTabY[j]);
      nSumError = nSumError + Math.pow(nFunction-pointTabY[j],2);
    }
    nSumError = Math.sqrt(nSumError/nPoint);
  }

  public function lsm_power(x0:Number,y0:Number,xScale:Number,yScale:Number) {               // y = ax^b

    this.x0     = x0    ;
    this.y0     = y0    ;
    this.xScale = xScale;
    this.yScale = yScale;

    var xp:Array = new Array();
    var yp:Array = new Array();
    var numPos :Number =0;
    var numNeg :Number =0;      //trace("nPoint");trace(nPoint); trace(pointTabX); trace(pointTabY);
    for(var i:Number=0;i<nPoint;i++) {
      xp[i] = pointTabX[i]; xp[i] = Math.abs(xp[i]);
      if(xp[i] == 0) { xp[i] = xp[i] + 0.0000000001;} 
      xp[i] = Math.log(Math.abs(xp[i]));
      //if(pointTabX[i]<0) {
      //  xp[i] = -xp[i];
      //}
      yp[i] = pointTabY[i]; yp[i] = Math.abs(yp[i]);
      if(yp[i] == 0) { yp[i] = yp[i] + 0.0000000001;}
      yp[i] = Math.log(Math.abs(yp[i]));
      if(pointTabY[i] >= 0) {
        numPos++; }
      else {
        numNeg++;
      }
    }
    //trace("xyTabbbb");trace(xp);trace("xyTy");trace(yp);trace("");
    //var fA :Function_Analysis = new Function_Analysis();
    //b = fA.lsm_exponential_B(xp,yp,nPoint)  ;
    //a = fA.lsm_exponential_A(xp,yp,nPoint,b);
    
    b = Mathematics.lsmTab_A(xp,yp,nPoint);                          // y = a*x + b     a
    var lna :Number = Mathematics.lsmTab_B(xp,yp,nPoint);
    if(numPos >= numNeg) {
      a = Math.exp(lna); }
    else {
      a = -Math.exp(lna);
    }
    a = Mathematics.roundTo(a,nRoundTo);
    b = Mathematics.roundTo(b,nRoundTo);
    var sa :String = a.toString();
    var sb :String = b.toString();
 
    var sy :String = "y=" + sa + "*x^(" + sb + ")";
    owner.set_function(sy);

	var color_draw :Number = 0x0000FF;                               // start drawing the line
    mc_pointGraph.graphics.lineStyle(0.5,color_draw,100);    
    mc_pointGraph.graphics.moveTo(xMinGraph,fPower(xMinGraph,a,b));
    for(var x:Number=xMinGraph; x<=xMaxGraph; x++) {
      if(((fPower(x,a,b) > yMinGraph) && (fPower(x,a,b) < yMaxGraph)) && 
        ((x > xMinGraph) && ((fPower(x-1,a,b) > yMinGraph) && (fPower(x-1,a,b) < yMaxGraph)))) {
        mc_pointGraph.graphics.lineTo(x,fPower(x,a,b));}
      else {
         mc_pointGraph.graphics.moveTo(x,fPower(x,a,b));
      }
    }

    nSumError   = 0;
    for(var j:Number=0; j<nPoint; j++) {
      nFunction = a*Math.pow(pointTabX[j],b);
      //nSumError = nSumError + Math.abs(nFunction-pointTabY[j]);
      nSumError = nSumError + Math.pow(nFunction-pointTabY[j],2);
    }
    nSumError = Math.sqrt(nSumError/nPoint);
  }

  public function lsm_ln(x0:Number,y0:Number,xScale:Number,yScale:Number) {
    this.x0     = x0    ;
    this.y0     = y0    ;
    this.xScale = xScale;
    this.yScale = yScale;

    var xp:Array = new Array();
    var yp:Array = new Array();
    var numPos :Number =0;
    var numNeg :Number =0;
    for(var i:Number=0;i<nPoint;i++) {
      xp[i] = pointTabX[i];  xp[i] = Math.log(Math.abs(xp[i]));
      yp[i] = pointTabY[i];  //yp[i] = Math.exp(yp[i]);
      //yp[i] = pointTabX[i]; yp[i] = Math.log(yp[i]);
      //xp[i] = pointTabY[i]; //xp[i] = Math.log(xp[i]);
      if(pointTabY[i] >= 0) {
        numPos++; }
      else {
        numNeg++;
      }
    }
  
    //var fA :Function_Analysis = new Function_Analysis();
    //b = fA.lsm_exponential_B(xp,yp,nPoint)  ;
    //a = fA.lsm_exponential_A(xp,yp,nPoint,b);
    
    //////////var lna :Number = Mathematics.lsmTab_B(xp,yp,nPoint);
    var lna :Number = Mathematics.lsmTab_Ln(xp,yp,nPoint);
    a = Math.exp(lna);
    //a = Mathematics.lsmTab_A(xp,yp,nPoint);                          // y = a*x + b     a
    //a = 2 - a;
    a = Mathematics.roundTo(a,nRoundTo);
    //var lna :Number = Mathematics.lsmTab_B(xp,yp,nPoint);
    //if(numPos >= numNeg) {
    //  a = Math.exp(lna); }
    //else {
    //  a = -Math.exp(lna);
    //}
    //a = Math.exp(lna);

    //b = 1/(Mathematics.lsmTab_A(xp,yp,nPoint));                          // y = a*x + b     a
    //var lna :Number = -Mathematics.lsmTab_B(xp,yp,nPoint);
    //a = Math.exp(lna);   

    var sa :String = a.toString();
    //var sb :String = b.toString();
 
    //var sy :String = "y=" + sa + "*ln(" + sb + "*x)";
    var sy :String = "y=" + "ln(" + sa + "*" + "x" + ")";
    owner.set_function(sy);

	var color_draw :Number = 0x0000FF;                               // start drawing the line
    mc_pointGraph.graphics.lineStyle(0.5,color_draw,100);    
    mc_pointGraph.graphics.moveTo(xMinGraph,fLn(xMinGraph,a,b));
    for(var x:Number=xMinGraph; x<=xMaxGraph; x++) {
      if(((fLn(x,a,b) > yMinGraph) && (fLn(x,a,b) < yMaxGraph)) && 
        ((x > xMinGraph) && ((fLn(x-1,a,b) > yMinGraph) && (fLn(x-1,a,b) < yMaxGraph)))) {
        mc_pointGraph.graphics.lineTo(x,fLn(x,a,b));}
      else {
         mc_pointGraph.graphics.moveTo(x,fLn(x,a,b));
      }
    }

    nSumError   = 0;
    for(var j:Number=0; j<nPoint; j++) {
      nFunction = a*Math.log(a*pointTabX[j]);
      //nSumError = nSumError + Math.abs(nFunction-pointTabY[j]);
      nSumError = nSumError + Math.pow(nFunction-pointTabY[j],2);
    }
    nSumError = Math.sqrt(nSumError/nPoint);
  }

/*
  public function lsm_ln(x0:Number,y0:Number,xScale:Number,yScale:Number) {
    this.x0     = x0    ;
    this.y0     = y0    ;
    this.xScale = xScale;
    this.yScale = yScale;

    var xp:Array = new Array();
    var yp:Array = new Array();
    var numPos :Number =0;
    var numNeg :Number =0;
    for(var i:Number=0;i<nPoint;i++) {
      xp[i] = pointTabX[i];
      yp[i] = pointTabY[i];  yp[i] = Math.exp(yp[i]);
      //yp[i] = pointTabX[i]; yp[i] = Math.log(yp[i]);
      //xp[i] = pointTabY[i]; //xp[i] = Math.log(xp[i]);
      if(pointTabY[i] >= 0) {
        numPos++; }
      else {
        numNeg++;
      }
    }
    
    //var fA :Function_Analysis = new Function_Analysis();
    //b = fA.lsm_exponential_B(xp,yp,nPoint)  ;
    //a = fA.lsm_exponential_A(xp,yp,nPoint,b);
    
    a = Mathematics.lsmTab_A(xp,yp,nPoint);                          // y = a*x + b     a
    a = 2 - a;
    a = Mathematics.roundTo(a,nRoundTo);
    //var lna :Number = Mathematics.lsmTab_B(xp,yp,nPoint);
    //if(numPos >= numNeg) {
    //  a = Math.exp(lna); }
    //else {
    //  a = -Math.exp(lna);
    //}
    //a = Math.exp(lna);

    //b = 1/(Mathematics.lsmTab_A(xp,yp,nPoint));                          // y = a*x + b     a
    //var lna :Number = -Mathematics.lsmTab_B(xp,yp,nPoint);
    //a = Math.exp(lna);   

    var sa :String = a.toString();
    //var sb :String = b.toString();
 
    //var sy :String = "y=" + sa + "*ln(" + sb + "*x)";
    var sy :String = "y=" + "ln(" + sa + "*" + "x" + ")";
    owner.set_function(sy);

	var color_draw :Number = 0x0000FF;                               // start drawing the line
    mc_pointGraph.graphics.lineStyle(0.5,color_draw,100);    
    mc_pointGraph.graphics.moveTo(xMinGraph,fLn(xMinGraph,a,b));
    for(var x:Number=xMinGraph; x<=xMaxGraph; x++) {
      if(((fLn(x,a,b) > yMinGraph) && (fLn(x,a,b) < yMaxGraph)) && 
        ((x > xMinGraph) && ((fLn(x-1,a,b) > yMinGraph) && (fLn(x-1,a,b) < yMaxGraph)))) {
        mc_pointGraph.graphics.lineTo(x,fLn(x,a,b));}
      else {
         mc_pointGraph.graphics.moveTo(x,fLn(x,a,b));
      }
    }

    nSumError   = 0;
    for(var j:Number=0; j<nPoint; j++) {
      nFunction = a*Math.log(a*pointTabX[j]);
      //nSumError = nSumError + Math.abs(nFunction-pointTabY[j]);
      nSumError = nSumError + Math.pow(nFunction-pointTabY[j],2);
    }
    nSumError = Math.sqrt(nSumError/nPoint);
  }
*/

  public function set_bStart(bStart:String) {
    b = Number(bStart);
    lsm_sin(x0,y0,xScale,yScale);
  }
  public function lsm_sin(x0:Number,y0:Number,xScale:Number,yScale:Number) {               // y = a*sin(bx)
    this.x0     = x0    ;  //trace(x0);
    this.y0     = y0    ;  //trace(y0);
    this.xScale = xScale;  //trace(xScale);
    this.yScale = yScale;  //trace(yScale);

    var xp:Array = new Array();      //trace(nPoint);
    var yp:Array = new Array();
    var sxp :Array = new Array();
    var syp :Array = new Array();
    for(var i:Number=0;i<nPoint;i++) {
      xp[i] = pointTabX[i]; //xp[i] = Math.log(xp[i]);
      yp[i] = pointTabY[i]; //yp[i] = Math.log(Math.abs(yp[i]));
      sxp[i] = "(" + (xp[i]).toString() + ")";
      syp[i] = "(" + (yp[i]).toString() + ")";
    }
    
    var st1     :String = "";
    var sn1     :String = "";
    var st2     :String = "";
    var sn2     :String = "";
    var sPluss  :String = "";
    for(var i:Number=0;i<nPoint;i++) {
      if(i>0) {
        sPluss = "+";
      } 
      st1 = st1 + sPluss + syp[i] + "(sin(" + sxp[i] + "(x)))";
      sn1 = sn1 + sPluss +          "(sin(" + sxp[i] + "(x)))^2";
      st2 = st2 + sPluss + sxp[i] + "*" + syp[i] + "(cos(" + sxp[i] + "(x)))";
      sn2 = sn2 + sPluss + sxp[i] +                "(sin(" + sxp[i] + "(x)))" + "*" + "(cos(" + sxp[i] + "(x)))";
    }
    var y :String = "(" + st1 + "*" + sn2 + ")" + "-" + "(" + st2 + "*" + sn1 + ")";
    //y = "2sin(2x)+sin(x)";
    //owner.set_function(y);
    //var fC :FunctionCompute = new FunctionCompute();
    //fC.infixPostfix(y);
    //b = fC.postfixValue(1.5);   trace(b);
    //y = "2sin(2x)+sin(x)";
    var fA :Function_Analysis = new Function_Analysis();
    b = fA.newton(y,1.5);
  
    var t1     :Number = 0;
    var n1     :Number = 0;
    var t2     :Number = 0;
    var n2     :Number = 0;
    var bStart :Number = 0; 
    for(var i:Number=0;i<nPoint;i++) {
      t1 = t1 + yp[i]*Math.sin(b*xp[i]);
      n1 = n1 + Math.pow(Math.sin(b*xp[i]),2);
      t2 = t2 + xp[i]*yp[i]*Math.cos(b*xp[i]);
      n2 = n2 + xp[i]*Math.sin(b*xp[i])*Math.cos(b*xp[i]);
    }
    a = t1/n1;

    y = a.toString() + "sin(" + b + "x)";
    owner.set_function(y);

    var color_draw :Number = 0x0000FF;                               // start drawing the line
    mc_pointGraph.graphics.clear();
    mc_pointGraph.graphics.lineStyle(0.5,color_draw,100);    
    mc_pointGraph.graphics.moveTo(xMinGraph,fSin(xMinGraph,a,b));
    for(var x:Number=xMinGraph; x<=xMaxGraph; x++) {
      if(((fSin(x,a,b) > yMinGraph) && (fSin(x,a,b) < yMaxGraph)) && 
        ((x > xMinGraph) && ((fSin(x-1,a,b) > yMinGraph) && (fSin(x-1,a,b) < yMaxGraph)))) {
        mc_pointGraph.graphics.lineTo(x,fSin(x,a,b));}
      else {
         mc_pointGraph.graphics.moveTo(x,fSin(x,a,b));
      }
    }

    //trace(b);
    //trace(y);
/*
    var t1     :Number = 0;
    var n1     :Number = 0;
    var t2     :Number = 0;
    var n2     :Number = 0;
    var bStart :Number = 0; 
    for(var i:Number=0;i<nPoint;i++) {
      t1 = t1 + yp[i]*Math.sin(b*xp[i]);
      n1 = n1 + Math.pow(Math.sin(b*xp[i]));
      t2 = t2 + xp[i]*yp[i]*Math.cos(b*xp[i]);
      n2 = n2 + xp[i]*Math.sin(b*xp[i])*Math.cos(b*xp[i]);
    }
    a = t1/n1;
      
    
    //var fA :Function_Analysis = new Function_Analysis();
    //b = fA.lsm_exponential_B(xp,yp,nPoint)  ;
    //a = fA.lsm_exponential_A(xp,yp,nPoint,b);
    
    b = Mathematics.lsmTab_A(xp,yp,nPoint);                          // y = a*x + b     a    
    var lna :Number = Mathematics.lsmTab_B(xp,yp,nPoint);
    if(numPos >= numNeg) {
      a = Math.exp(lna); }
    else {
      a = -Math.exp(lna);
    }                                                    //trace("bbbbb"),trace(b);trace(a);

    a = Mathematics.roundTo(a,nRoundTo);                 //trace(a);
    b = Mathematics.roundTo(b,nRoundTo);                 //trace(b);
    var sa :String = a.toString();
    var sb :String = b.toString();
 
    var sy :String = "y=" + sa + "*e^(" + sb + "*x)";
    owner.set_function(sy);

	var color_draw :Number = 0x0000FF;                               // start drawing the line
    mc_pointGraph.graphics.lineStyle(0.5,color_draw,100);    
    mc_pointGraph.graphics.moveTo(xMinGraph,fExp(xMinGraph,a,b));
    for(var x:Number=xMinGraph; x<=xMaxGraph; x++) {
      if(((fExp(x,a,b) > yMinGraph) && (fExp(x,a,b) < yMaxGraph)) && 
        ((x > xMinGraph) && ((fExp(x-1,a,b) > yMinGraph) && (fExp(x-1,a,b) < yMaxGraph)))) {
        mc_pointGraph.graphics.lineTo(x,fExp(x,a,b));}
      else {
         mc_pointGraph.graphics.moveTo(x,fExp(x,a,b));
      }
    }

    nSumError   = 0;
    for(var j:Number=0; j<nPoint; j++) {
      nFunction = a*Math.pow(Math.E,b*xp[j]);
      //nSumError = nSumError + Math.abs(nFunction-pointTabY[j]);
      nSumError = nSumError + Math.pow(nFunction-pointTabY[j],2);
    }
    nSumError = Math.sqrt(nSumError/nPoint);
*/
  }

  private function fExp(x:Number,a:Number,b:Number) :Number{
    var xNew :Number = (x-x0) * xScale;
    return    y0-(a*Math.exp(b*xNew)) / yScale;
  }
  private function fPowFunc(x:Number,a:Number,b:Number) :Number{
    var xNew :Number = (x-x0) * xScale;
    return    y0-(a*Math.pow(b,xNew)) / yScale;
  }

  private function fPower(x:Number,a:Number,b:Number) :Number{
    var xNew :Number = (x-x0) * xScale;
    return    y0-(a*Math.pow(xNew,b)) / yScale;
  }

  private function fLn(x:Number,a:Number,b:Number) :Number{
    var xNew :Number = (x-x0) * xScale;
    return    y0-(Math.log(a*xNew)) / yScale;
    //return    y0-(1/b*Math.log(xNew) - Math.log(a)) * yScale;
  }
  private function fSin(x:Number,a:Number,b:Number) :Number{
    var xNew :Number = (x-x0) * xScale;
    return    y0-(a*Math.sin(b*xNew)) / yScale;
  }
  /*------------------------------------------------------------------------------------------------------- lms ---*/

  public function lsm_polynomial(x0       :Number,y0       :Number,xScale   :Number,yScale   :Number) {
                      //xMinGraph:Number,yMinGraph:Number,xMaxGraph:Number,yMaxGraph:Number) {

                                           /* Least Square Mean */

    this.x0        = x0       ;                                      // origin        x0
    this.y0        = y0       ;                                      //               y0
    this.xScale    = xScale   ;                                      // scale         x
    this.yScale    = yScale   ;                                      //               y
    //this.xMinGraph = xMinGraph;                                      // drawing area  xMinGraph
    //this.yMinGraph = yMinGraph;                                      //               yMinGraph
    //this.xMaxGraph = xMaxGraph;                                      //               xMaxGraph
    //this.yMaxGraph = yMaxGraph;                                      //               yMaxGraph   
/*
    sortPointTab();
         
    if(nPolynomDegree == 1) {   
      lsm_line(); }                                                 // draw line  
    else {
*/
      var a :Array = new Array(3);                                    // only test for LUP
      for(var i:Number=0;i<3;i++) {
        a[i] = new Array(3);
      }
      a[0][0] = 3; a[0][1] =  2; a[0][2] =  4;
      a[1][0] = 2; a[1][1] = -5; a[1][2] = -1;
      a[2][0] = 1; a[2][1] = -2; a[2][2] =  2;
   
      var c :Array = new Array(3);
      c[0] = 16; c[1] = 6; c[2] = 10;

      var lup :LUPDecomposition = new LUPDecomposition(a);
      var s   :Array            = lup.solve(c);

      draw_estimatedPolynom();   
    //}
  }

  private function isInsideGraphArea(x:Number,y:Number) :Boolean {
    if((x>xMinGraph) && (x<xMaxGraph) && (y>yMinGraph) && (y<yMaxGraph)) {
      return true; }
    else {
      return false;
    }
  }
  /*--------------------------------------------------------------------------------------------- lsm_linePoint ---*/

  public function lsm_linePoint() {                                  // compute average
    var xp:Array = new Array();
    var yp:Array = new Array();
    var ySUM       :Number = 0;
    var ySUM_graph :Number = 0;
    var yAVG_graph :Number;
    for(var i:Number=0; i<nPoint; i++) {  
      xp[i] = x0 + (pointTabX[i])/xScale ;
      yp[i] = y0 - (pointTabY[i])/yScale;
      ySUM_graph = ySUM_graph + yp[i];
      ySUM       = ySUM + pointTabY[i];
    }
    yAVG_graph = ySUM_graph/nPoint;
    yAVG       = ySUM/nPoint;
    var color_draw :Number = 0x0000FF;                               // start drawing the line
    var x          :Number = xp[0]   ;
    var i          :Number = 0       ;
    mc_pointGraph.graphics.lineStyle(0.5,color_draw,100);   
    //mc_pointGraph.moveTo(x[i],yp[i]);

    /*
    while(i < nPoint-1) {
      //mc_pointGraph.moveTo(xp[i],yp[i]);
      mc_pointGraph.moveTo(xp[i],yAVG_graph);
      //if(isInsideGraphArea(xp[i],yp[i]) && isInsideGraphArea(xp[i+1],yp[i+1])) {
      if(isInsideGraphArea(xp[i],yAVG_graph) && isInsideGraphArea(xp[i+1],yAVG_graph)) {
        //mc_pointGraph.lineTo(xp[i+1],yp[i+1]); 
        mc_pointGraph.lineTo(xp[i+1],yAVG_graph); 
      }
      i++;
    }
    */

    mc_pointGraph.graphics.moveTo(xMinGraph,yAVG_graph);
    for(var x:Number=xMinGraph; x<=xMaxGraph; x++) {
      if(((yAVG_graph > yMinGraph) && (yAVG_graph < yMaxGraph)) && 
        ((x > xMinGraph) && ((yAVG_graph > yMinGraph) && (yAVG_graph < yMaxGraph)))) {
        mc_pointGraph.graphics.lineTo(x,yAVG_graph);}
      else {
         mc_pointGraph.graphics.moveTo(x,yAVG_graph);
      }
    }

    nSumError   = 0;
    for(var j:Number=0; j<nPoint; j++) {
      nFunction = yAVG;
      //nSumError = nSumError + Math.abs(nFunction-pointTabY[j]);
      nSumError = nSumError + Math.pow(nFunction-pointTabY[j],2);
    }
    nSumError = Math.sqrt(nSumError/nPoint);
  }
  /*-------------------------------------------------------------------------------------------------- lsm_line ---*/

  public function lsm_line() {

                               /* Drawing the best stright line by Least Square Mean (lsm) */
/*
     var equation :Equation = new Equation();
     
     var a1 :Array = new Array(3);                                    // only test for LUP
      for(var i=0;i<3;i++) {
        a1[i] = new Array(3);
      }
      a1[0][0] = 3; a1[0][1] =  2; a1[0][2] =  4;
      a1[1][0] = 2; a1[1][1] = -5; a1[1][2] = -1;
      a1[2][0] = 1; a1[2][1] = -2; a1[2][2] =  2;
   
      var c :Array = new Array(3);
      c[0] = 16; c[1] = 6; c[2] = 10;
   
      equation.init(a1,c,3);
      equation.solve();
*/
    var xp:Array = new Array();
    var yp:Array = new Array();
    for(var i:Number=0;i<nPoint;i++) {
      //xp[i] = (pointTabX[i]-x0)*xScale; //trace(x[i]);
      //yp[i] = (y0-pointTabY[i])/yScale; //trace(y[i]); trace("");
      xp[i] = pointTabX[i];
      yp[i] = pointTabY[i];
    }
    
    if(!bLinAx) {
      a = Mathematics.lsmTab_A(xp,yp,nPoint);                          // y = a*x + b     a
      b = Mathematics.lsmTab_B(xp,yp,nPoint);                          //                 b
      a = Mathematics.roundTo(a,nRoundTo);
      b = Mathematics.roundTo(b,nRoundTo); }
    else {  //trace(xp);trace(yp);trace(nPoint);
      a = Mathematics.lsmTab_A_LinAx(xp,yp,nPoint);    
      a = Mathematics.roundTo(a,nRoundTo);
      b = 0;
    }

	var color_draw :Number = 0x0000FF;                               // start drawing the line
    mc_pointGraph.graphics.lineStyle(0.5,color_draw,100);    
    mc_pointGraph.graphics.moveTo(xMinGraph,fLine(xMinGraph,a,b));
    for(var x:Number=xMinGraph; x<=xMaxGraph; x++) {
      if(((fLine(x,a,b) > yMinGraph) && (fLine(x,a,b) < yMaxGraph)) && 
        ((x > xMinGraph) && ((fLine(x-1,a,b) > yMinGraph) && (fLine(x-1,a,b) < yMaxGraph)))) {
        mc_pointGraph.graphics.lineTo(x,fLine(x,a,b));}
      else {
         mc_pointGraph.graphics.moveTo(x,fLine(x,a,b));
      }
    }

    nSumError   = 0;
    for(var j:Number=0; j<nPoint; j++) {
      nFunction = a*xp[j]+b;
      //nSumError = nSumError + Math.abs(nFunction-yp[j]);
      nSumError = nSumError + Math.pow(nFunction-yp[j],2);
    }
    nSumError = Math.sqrt(nSumError/nPoint);
  }

  public function set_linAx(bLinAx:Boolean) {
    this.bLinAx = bLinAx;   //trace(bLinAx);
  }
  /*----------------------------------------------------------------------------------------------------- fLine ---*/

  public function fLine(x:Number,a:Number,b:Number) :Number {        // y = a*x + b 

                       /* Return y(x) in y = a*x + b */

    var xNew :Number = (x-x0) * xScale;
    return    y0-(a*xNew+b) / yScale;
  }
  /*------------------------------------------------------------------------------------- draw_estimatedPolynom ---*/

  public function draw_estimatedPolynom() { //estimation:EstimatedPolynomial) {
    bEstimatedPolynom = true;
    sortPointTab();
    mc_pointGraph.graphics.clear();

    if(nPolynomDegree == 0) {
      lsm_linePoint(); }
    else if(nPolynomDegree == 1) {   
      lsm_line(); }                                                 // draw line  
    else {

      fit = new PolynomialLeastSquareFit(nPolynomDegree);
      for(var i=0; i<nPoint; i++) {
        fit.accumulatePoint(pointTabX[i],pointTabY[i]);
      }
      estimation = fit.evaluate();
      var color_draw :Number = 0x0000FF;                               // start drawing the line
      mc_pointGraph.graphics.lineStyle(0.5,color_draw,100);    
      mc_pointGraph.graphics.moveTo(xMinGraph,fPolynom(xMinGraph,estimation));
      var pValue  :Number; 
      var pValue1 :Number;

      for(var x:Number=xMinGraph; x<=xMaxGraph; x++) {
        pValue  = fPolynom(x,estimation);
        pValue1 = fPolynom(x-1,estimation); 
        if((pValue > yMinGraph) && (pValue < yMaxGraph) && 
          (x > xMinGraph) && (pValue1 > yMinGraph) && (pValue1 < yMaxGraph)) {
          mc_pointGraph.graphics.lineTo(x,pValue);}
        else {
          mc_pointGraph.graphics.moveTo(x,pValue);
        }
      }  
    }
    set_sPolynom();


    if(nPolynomDegree>1) {
      nSumError   = 0;
      for(var j:Number=0; j<nPoint; j++) {
        nFunction = estimation.value(pointTabX[j]);
        //nSumError = nSumError + Math.abs(nFunction-pointTabY[j]);
        nSumError = nSumError + Math.pow(nFunction-pointTabY[j],2);
        //trace("x  " + pointTabX[j] + "   yp  " + pointTabY[j] + "   y  " + nFunction);
      }
      nSumError = Math.sqrt(nSumError/nPoint);
      //trace("");
    }
  }
  /*------------------------------------------------------------------------------------------- get_coefficient ---*/

  public function set_sPolynom() {
    var sY :String = "y=";
    var sb :String = ""  ;
    var coeff :Array = new Array();
    //var coeffAcc : Array = new Array();
    if(nPolynomDegree == 0) {
      sY = "y=" + yAVG.toString(); }
    else if(nPolynomDegree == 1) {
      if(b>=0) {
        sb = "+";
      }
      a = Mathematics.roundTo(a,nRoundTo);
      b = Mathematics.roundTo(b,nRoundTo);
      sY = "y=" + a.toString() + "*x" + sb + b.toString(); }
    else {
      //var coeff :Array = estimation.get_coefficient();
      coeff = estimation.get_coefficient();
      //coeffAcc = coeff;
      for(var i:Number=nPolynomDegree; i>=0; i--) {
        coeff[i] = Mathematics.roundTo(coeff[i],nRoundTo);
        if(coeff[i] < 0) {
          sb = ""; }
        else {
          sb = "+";
        }
        if(i == nPolynomDegree) {
          sY = sY + (coeff[i]).toString() + "*x^" + i.toString(); }
        else {
           if(i > 0) {
             sY = sY +  sb + (coeff[i]).toString() + "*x^" + i.toString(); }
           else {
             sY = sY +  sb + (coeff[i]).toString();
           }
        }
      }
    }
    sPolynom = sY;
    owner.set_function(sPolynom);   
    //owner.set_sPolynom(sPolynom);
    
    /*
    if(nPolynomDegree>1) {
      nSumError   = 0;
      for(var j:Number=0; j<nPoint; j++) {
        //nFunction = 0;
        //for(var k:Number=0; k<=nPolynomDegree; k++) {
          //trace(coeff[k]);
          //trace(pointTabX[k];
          //nFunction = nFunction + coeffAcc[k]*Math.pow(pointTabX[j],k);
          nFunction = estimation.value(pointTabX[j]);;
        //}
        nSumError = nSumError + Math.abs(nFunction-pointTabY[j]);
        trace(nFunction);
        trace("");
      }
      trace("");
    }
    */
  }
  /*---------------------------------------------------------------------------------------------- get_sPolynom ---*/

  public function get_sPolynom() {
    return sPolynom;
  }
  /*-------------------------------------------------------------------------------------------------- fPolynom ---*/

  public function fPolynom(x:Number,estimation:EstimatedPolynomial) {
    var xNew :Number = (x-x0)*xScale;
    var yNew :Number = estimation.value(xNew);
    return y0-yNew/yScale;
  }

  public function show_pointPointGraph(bShow:Boolean) {
    //mc_point      .clear();
    //mc_pointGraph .clear();
    mc_point      .visible = bShow;
    mc_pointGraph .visible = bShow;
  }
  public function set_scale(xScale:Number,yScale:Number) {
    this.xScale = xScale;
    this.yScale = yScale;
  }
  public function set_quad1(bSet:Boolean) {
    if(bSet) {
      x0 = x0quad1;  y0 = y0quad1; }
    else {
      x0 = x00    ;  y0 = y00    ;
    }
  }
  public function set_quad14(bSet:Boolean) {
    if(bSet) {
      x0 = x0quad14;  y0 = y0quad14; }
    else {
      x0 = x00    ;  y0 = y00    ;
    }
  }

  public function set_currentGraph(nMemCurrentX:Number,nMemCurrentY:Number) {
    //trace(nMemCurrentX + "     " + nMemCurrentY);
    //trace(mc_pointArray[1][2]);
    //trace(mc_graphArray[1][2]);
    //trace(mc_pointArray[nMemCurrentX,nMemCurrentY] + "    " + mc_graphArray[nMemCurrentX,nMemCurrentY] );
    this.nMemCurrentX  = nMemCurrentX;
    this.nMemCurrentY  = nMemCurrentY;
    this.nMemCurrentProd = nMemCurrentProd;
    mc_point      = mc_pointArray[nMemCurrentX][nMemCurrentY];
    mc_pointGraph = mc_graphArray[nMemCurrentX][nMemCurrentY];
    if(!bMultiGraph) {
      clear_nonCurrentGraph();
    }
    if(bPair && (nMemCurrentX != nMemCurrentY)) {
      mc_pointArray[nMemCurrentX][nMemCurrentY].visible = false;
      mc_graphArray[nMemCurrentX][nMemCurrentY].visible = false;
    }
  }

  public function show_allCurrentGraph() {
    bMultiGraph = true;
    if(bPair) {
      for(var i=1; i<=nMaxMem; i++) {
        for(var j=1; j<=nMaxMem; j++) {
          mc_pointArray[i][j].visible = (i==j);
          mc_graphArray[i][j].visible = (i==j);
        }
      }}
    else {
      for(var i=1; i<=nMaxMem; i++) {
        for(var j=1;j<=nMaxMem;j++) {
          mc_pointArray[i][j].visible = true;
          mc_graphArray[i][j].visible = true;
        }
      }
    }
  }
  
  public function clear_nonCurrentGraph() {    //trace("clear   " + nMemCurrentX + "   " + nMemCurrentY);
    //trace(nMemCurrentProd);
    bMultiGraph = false;
    for(var i=1; i<=nMaxMem; i++) {
      for(var j=1;j<=nMaxMem;j++) {
        if(i != nMemCurrentX || j != nMemCurrentY) {   //trace("ij   "  + i  +  "   " + j);
          //mc_pointArray[i][j].graphics.clear();
          //mc_graphArray[i][j].graphics.clear();
          mc_pointArray[i][j].visible = false;
          mc_graphArray[i][j].visible = false;
        }
      }
    }
    mc_pointArray[nMemCurrentX][nMemCurrentY].visible = true;
    mc_graphArray[nMemCurrentX][nMemCurrentY].visible = true;
    if(bPair && nMemCurrentX != nMemCurrentY) {
      mc_pointArray[nMemCurrentX][nMemCurrentY].visible = false;
      mc_graphArray[nMemCurrentX][nMemCurrentY].visible = false;
    }
  }

  public function set_pair(bPair:Boolean) {
    this.bPair = bPair;
    if(bMultiGraph) {
      show_allCurrentGraph(); }
    else {
      clear_nonCurrentGraph();
    }
  }

  public function set_tabXYCopy() {
    var m:int = pointTabX.length;
    for(var i:int=0;i<m;i++) {
     pointTabXC[i] = pointTabX[i];   //trace("x");trace(pointTabXC);
     pointTabYC[i] = pointTabY[i];   //trace("y");trace(pointTabYC);
    }
    //trace("x");trace(pointTabXC);
    //trace("y");trace(pointTabYC);
  }

  public function get_tabXCopy() :Array {
    return pointTabXC;
  }
  public function get_tabYCopy() :Array {
    return pointTabYC;
  }

  public function set_nRoundTo(n:Number) {
    nRoundTo = Math.pow(10,-n);
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/