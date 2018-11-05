/*============================================================================================= SymmetricMatrix ===*/

function SymmetricMatrix extends MatrixLMS()  {

  static var lupCRLCriticalDimension = 36;   // Number

  this.SymmetricMatrix               = SymmetricMatrix 
  this.fromComponents                = fromComponents
  /*----------------------------------------------------------------------------------------- SymmetricalMatrix ---*/

  function SymmetricMatrix (a) {      // a:Array
    super(a);
  }
  /*-------------------------------------------------------------------------------------------- fromComponents ---*/

  static function fromComponents(comp)  {    // comp:Array, return SymmetricMatrix
    if(comp.length != comp[0].length) {
      return null; }
    else {
      for(var i=0; i<comp.length; i++) {
        for(var j=0; j<i; j++) {
          if(comp[i][j] != comp[j][i]) {
            return null;
          }  
        }
      }
      return new SymmetricMatrix(comp);
    }
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/
