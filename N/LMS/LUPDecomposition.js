/*================================================================================= LUPDecomposition ===*/

function LUPDecomposition(components)   { // components:Array

  var rows                     = null  ;  //:Array
  var permutation              = null  ;  //:Array
  var parity                   = 1     ;  //:Number = 1
  var n                        = 0     ;  //:Number                // number of rows/cols in matrix rows
  var nMax                     = 10    ;  //:Number = 10           // max number of rows/cols in rows
  var nNaN                     = -99999;  //:Number = -99999;

  this.LUPDecomposition        = LUPDecomposition       ;
  this.determinant             = determinant            ;
  this.inverseMatrixComponents = inverseMatrixComponents;
  this.symmetrizeComponents    = symmetrizeComponents   ;
  this.solve                   = solve                  ;

  init();

  /*------------------------------------------------------------------------------- LUPDecomposition ---*/

  function init()                        {   
    var nRows = components   .length;                        // number of rows
    var nCols = components[0].length;                        // number of columns
    if(nRows == nCols) {                                     // square matrix
      rows = components;
      n    = nRows     ;
    }
    init();
  }
  /*------------------------------------------------------------------------------------------- init ---*/
  
  function init() {
    permutation = null;
    parity      = 1   ;
  }
  /*--------------------------------------------------------------------------- backwardSubstitution ---*/

  function backwardSubstitution (xTilde)  {   //xTilde:Array, return Array
    var answer = new Array(n);
    for(var i=n-1; i>=0; i--) {
      answer[i] = xTilde[i];
      for(var j=i+1; j<n; j++) {
        answer[i] -= rows[i][j] * answer[j];
      }
      answer[i] /= rows[i][i];
    }
    return answer;
  }
  /*-------------------------------------------------------------------------------------- decompose ---*/

  function decompose() {
    permutation = new Array(n);
    for(var i=0; i<n; i++) {
      permutation[i] = i;
    }
    parity = 1;
    for(var i=0; i<n; i++) {
      swapRows(i,largestPivot(i));
      pivot(i);
    }
  }
  /*------------------------------------------------------------------------------------- decomposed ---*/

  function decomposed()                     {  // return Boolean
    if(parity == 1 && permutation == null) {
      decompose();
    }
    return parity != 0;
  }
  /*------------------------------------------------------------------------------------ determinant ---*/

  function determinant()                    {  //  return Number
    if(!decomposed()) {
      return nNaN;
    }
    var det :Number = parity;
    for(var i=0; i<n; i++) {
      det *=  rows[i][i];
    }
    return det;
  }
  /*---------------------------------------------------------------------------- forwardSubstitution ---*/

  function forwardSubstitution (c)          {  // c:Array, return Array
    var answer  = new Array(n);
    for(var i=0; i<n; i++) {
      answer[i] = c[permutation[i]];
      for(var j=0; j<=i-1; j++) {
        answer[i] -= rows[i][j] * answer[j];
      }
    }
    return answer;
  }
  /*------------------------------------------------------------------------ inverseMatrixComponents ---*/

  function inverseMatrixComponents()        {  // return Array
    if(!decomposed()) {
      return null;
    }
    var n = rows.length;
  //var inverseRows :Array = pushIntoInverseRows();
    var inverseRows = pushIntoInverseRows();   // new Array(n)  2 dim array n x n
    var i=0;i<n;i++) {
      inverseRows[i] = new Array(n);
    }

    var column  = new Array(n);
    for(var i=0; i<n; i++) {
      for(var j=0; j<n; j++) {
        column[j] = 0;
      }
      column[i] = 1;
      column    = solve(column);
      for(var j=0; j<n; j++) {
        inverseRows[j][i] = column[j];
      }
    }
    return inverseRows;
  }
  /*----------------------------------------------------------------------------------- largestPivot ---*/

  function largestPivot(k)                  {  // k:Number, return Number
    var maximum  = Math.abs(rows[k][k]);       // Number
    var ab       = 0;                          // Number
    var index    = k;                          // Number
    for(var i=k+1; i<n; i++) {
      ab = Math.abs(rows[i][k]);
      if(ab > maximum) {
        maximum = ab;
        index   = i ;
      }
    }
    return index;
  }

  /*------------------------------------------------------------------------------------------ pivot ---*/

  function pivot(k)                         {   // k:Number
    var inversePivot  = 1/rows[k][k];           // Number
    var k1            = k + 1       ;           // Number
    for(var i=k1; i<n; i++) {
      rows[i][k] *= inversePivot;
      for(var j=k1; j<n; j++) {
        rows[i][j] -= rows[i][k] * rows[k][j];
      }
    }
  }
  /*--------------------------------------------------------------------------------------- swapRows ---*/

  function swapRows(i,k)                    {   // i:Number, k:Number
    if(i != k) {
      var temp = 0;                             // Number
      for(var j=0; j<n; j++) {
        temp       = rows[i][j];
        rows[i][j] = rows[k][j];
        rows[k][j] = temp      ;
      }
      var nTemp      = 0             ;          // Number
      nTemp          = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = nTemp         ;
      parity         = -parity       ;
   
    }
  }
  /*---------------------------------------------------------------------------- pushIntoInverseRows ---*/

  function pushIntoInverseRows()            {   // return Array
    var invRows = new Array();
    for(var i=0; i<nMax; i++) {
      invRows.push([0,0,0,0,0,0,0,0,0,0]);
    }
    return invRows;
  }
  /*--------------------------------------------------------------------------- symmetrizeComponents ---*/

  function symmetrizeComponents(components) {   // components:Array
    var n = components.length;                  // Number
    for(var i=0; i<n; i++) {
      for(var j=i+1; j<n; j++) {
        components[i][j] += components[j][i];
        components[i][j] *= 0.5             ;
        components[j][i] += components[i][j];
      }
    }
  }
  /*------------------------------------------------------------------------------------------ solve ---*/

  function solve (c)                        {    // c:Array, return Array
    var bDecomposed  = decomposed();             // Boolean
    if(bDecomposed) {
      return  backwardSubstitution(forwardSubstitution(c)); }
    else {
      return null;
    }
  }
  /*----------------------------------------------------------------------------------------------------*/
}
/*======================================================================================================*/