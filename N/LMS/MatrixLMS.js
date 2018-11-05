/*=================================================================================================== MatrixLMS ===*/

function MatrixLMS(a)                       {   // a:Array

  var components      = a;                      // :Array;
  var nRow            = components   .length;   // :Number;
  var nCol            = components[0].length;   // :Number;
  var lup             = null                    // :LUPDecomposition = null;

  this.rows           = rows          ;
  this.columns        = columns       ;
  this.productV       = productV      ;
  this.secureProductV = secureProductV;
 
  /*------------------------------------------------------------------------------------------------------ rows ---*/

  function rows()                           {   // return Number
    return nRow;
  }
  /*--------------------------------------------------------------------------------------------------- columns ---*/

  function columns()                        {   // return Number
    return nCol;
  }
  /*-------------------------------------------------------------------------------------------------- productV ---*/

  function productV (v)                     {   // v:DhbVector, return DhbVector

                  /* Product of the matrix with the vector */

    var na = this.rows    ();      // Number
    var ma = this.columns ();      // Number
    var v1 = Number(v.dimension);  // Number
    if(v1 != ma) {
    //if(v.dimension != ma) {
      return null; }
    else {
      return secureProductV(v);
    }
  }
  /*-------------------------------------------------------------------------------------------- secureProductV ---*/

  function secureProductV (v)               {   // v:DhbVector, return DhbVector 

    var na               = rows     (  );
    var ma               = columns  (  ); 
    var vectorComponents = new Array(na);
    for(var i=0; i<na; i++) {
      vectorComponents[i] = 0;
      for(var j=0; j<ma; j++) {
        vectorComponents[i] += components[i][j] * v.components[j];
      }
    }
    return new DhbVector(vectorComponents);
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/