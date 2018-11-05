/*=================================================================================================== DhBVector ===*/

function DhbVector (comp)            {   //  comp:Array


  var n               = 0     ;          //  Number            // vector dimension
  var components      = null  ;          //  Array             // vector components
  var nError          = -99999;          //  error  return

  this.dimension      = dimension     ;
  this.productN       = productN      ;
  this.productV       = productV      ; 
  this.productM       = productM      ;
  this.secureProductV = secureProductV;
  this.secureProductM = secureProductM;

  init();
  /*-------------------------------------------------------------------------------------- DhbVector ---*/

  function init() {
    n = comp.length;
    components = new Array(n);
    for(var i=0; i<n; i++) {
      components[i] = comp[i];
    }
  }
  /*-------------------------------------------------------------------------------------- dimension ---*/

  function dimension() {
    return n;
  }
  /*--------------------------------------------------------------------------------------- productN ---*/

  function productN (d)                {   // d:Number

                  /* Product of a vector by a number */

    var newComponents :Array = new Array(n);
    for(var i=0; i<n; i++) {
      newComponents[i] = d*components[i];
    }
    return new DhbVector(newComponents);
  }
  /*--------------------------------------------------------------------------------------- productV ---*/

  function productV (v)                {   // v:DhbVector, return Number
    var n1 = v.dimension();
    if(n != n1) {
      return nError; }
    else {
      return secureProductV(v);
    }
  }
  /*--------------------------------------------------------------------------------------- productM ---*/

  function productM (a)                {   // a:MatrixLMS, return DhbVector
    
                  /* Computes the product of the transposed vector with a matrix */

    var n1 = a.rows    ();
    var m1 = a.columns ();
    if(this.n == n1) {
      return secureProductM(a); }
    else {
      return null;
    }
  }
  /*---------------------------------------------------------------------------------- secureProduct ---*/

  public function secureProductV (v)   {   // v:DhbVector, return Number

                  /* Computes the scalar product (dot product) of two vectors. */
                  /* No dimension checking is made.                            */

    var sum = 0;
    for(var i=0; i<v.dimension(); i++) {
      sum += components[i] * v.components[i];
    }
    return sum;
  }
  /*---------------------------------------------------------------------------------- secureProduct ---*/

  public function secureProductM (a)   {   // a:MatrixLMS, return DhbVector

                  /* Computes the pruduct of he transposed vector with a matrix */

    var n1 = a.rows    ();
    var m1 = a.columns ();
    var vectorComponent = new Array(m1);
    for(var j=0; j<m1; j++) {
      vectorComponent[j] = 0;
      for(var i=0; i<n1; i++) {
        vectorComponent[j] += components[i] * a.components[i][j];
      }
    }
    return new DhbVector(vectorComponent);
  }
  /*----------------------------------------------------------------------------------------------------*/
}
/*======================================================================================================*/