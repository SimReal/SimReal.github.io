/*==================================================================================== PolynomialLeastSquareFit ===*/

function PolynomialLeastSquareFit(nT)         {

  var n                         = nT  ;                        //:Number     polynom degree
  var systemMatrix              = null;                        //:Array 
  var systemConstants           = null;                        //:Array 

  this.PolynomialLeastSquareFit = PolynomialLeastSquareFit;
  this.accumulateAverage        = accumulateAverage       ;
  this.accumulateBin            = accumulateBin           ;
  this.accumulatePoint          = accumulatePoint         ;
  this.accumulatePointE         = accumulatePointE        ;
  this.accumulateWeightedPoint  = accumulateWeightedPoint ;
  this.evaluate                 = evaluate                ;
  this.reset                    = reset                   ;

  init();

  /*---------------------------------------------------------------------------------- PolynomialLeastSquareFit ---*/
 
  function init()                             {
    var n1 = n + 1;
    systemMatrix = new Array(n1);
    for(var i=0;i<n1;i++) {
      systemMatrix[i] = new Array(n1);
    }
    systemConstants = new Array(n1);
    reset();
  }
  /*----------------------------------------------------------------------------------------- accumulateAverage ---*/

  function accumulateAverage(x,m)             {     // x:Number, m:StatisticalMoments
    accumulatePointE(x,m.average(),m.errorOnAverage());
  }
  /*--------------------------------------------------------------------------------------------- accumulateBin ---*/

  function accumulateBin(x,n)                 {     // x:Number, n:Number
    accumulateWeightedPoint(x,n,1.0/Math.max(1,n));
  }
  /*------------------------------------------------------------------------------------------- accumulatePoint ---*/

  function accumulatePoint(x,y)               {     // x:Number, y:Number
    accumulateWeightedPoint(x,y,1);
  }
  /*------------------------------------------------------------------------------------------- accumulatePoint ---*/

  function accumulatePointE(x:Number,y,error) {     // x:Number, y:Number, error:Number
    accumulateWeightedPoint(x,y,1.0/(error*error));
  }
  /*----------------------------------------------------------------------------------- accumulateWeightedPoint ---*/

  function accumulateWeightedPoint(x,y,w)     {     // x:Number, y:Number, w:Number
    var xp1 = w;
    var xp2 = 0;
    for(var i=0; i<n+1;i++) {
      systemConstants[i] += xp1*y;
      xp2 = xp1;
      for(var j=0; j<=i; j++) {
        systemMatrix[i][j] += xp2;
        xp2 *= x;
      }
      xp1 *= x;
    }
  }
  /*-------------------------------------------------------------------------------------------------- evaluate ---*/

  function evaluate()                         {    // return:EstimatedPolynomial {
    for(var i=0; i<n+1; i++) {
      for(var j=i+1; j<n+1; j++) {
        systemMatrix[i][j] = systemMatrix[j][i];
      }
    }
    var lup        :LUPDecomposition    = new LUPDecomposition           (systemMatrix   );
    var components :Array               = lup.inverseMatrixComponents    (               );
    var lA         :Array               = lup.solve                      (systemConstants);
    var sM         :SymmetricMatrix     = SymmetricMatrix.fromComponents (components     );
    var ep         :EstimatedPolynomial = new EstimatedPolynomial        (lA,sM          );
    return ep;
  }
  /*----------------------------------------------------------------------------------------------------- reset ---*/

  public function reset()                     {
    for(var i=0; i<n+1; i++) {
      systemConstants[i] = 0;
      for(var j=0; j<n+1; j++) {
        systemMatrix[i][j] = 0;
      }
    }
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/