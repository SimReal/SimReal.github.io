/*========================================================================================= EstimatedPolynomial ===*/

public class EstimatedPolynomial extends PolynomialFunction {

  private var errorMatrix :SymmetricMatrix;

  this.EstimatedPolynomial = EstimatedPolynomial;
  this.error               = error              ;
  /*--------------------------------------------------------------------------------------- EstimatedPolynomial ---*/

  EstimatedPolynomial(coeffs,e) {          // coeffs:Array, e:SymmetricMatrix
    super(coeffs)  ;
    errorMatrix = e;
  }
  /*----------------------------------------------------------------------------------------------------- error ---*/

  function error(x)  {
    var n       = degree() + 1;
    var errors  = new Array(n);
    errors[0]   = 1;
    for(var i=1; i<n; i++) {
      errors[i] = errors[i-1] * x;
    }
    var errorVector = new DhbVector(errors);                                      // DhbVector
    var answer      = errorVector.productV(errorMatrix.productV(errorVector));    // Number
    return Math.sqrt(answer);
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/