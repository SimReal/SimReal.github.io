/*========================================================================================== PolynomialFunction ===*/

function PolynomialFunction (coefficientT) {   //  coefficient :Array   implements I_OneVariableFunction

  var coefficient      = coefficientT      ;   // :Array , array of coefficients
  var n                = coefficient.length;   // :Number, polynom degree
  var m                = n-1               ;   // :Number, number of coefficients = m+1

  this.degree          = degree            ;
  this.get_coefficient = get_coefficient   ;
  this.value           = value             ;

  /*---------------------------------------------------------------------------------------------------- degree ---*/

  function degree()                        {
    return m;
  }
  /*------------------------------------------------------------------------------------------- get_coefficient ---*/

  function get_coefficient()               {   // return Array
    return coefficient;
  }
  /*----------------------------------------------------------------------------------------------------- value ---*/

  function value (x)                       {   // x:Number, return Number        
    var n1      = n               ;            // Number
    var answer  = coefficient[--n1];           // Number
    while (n1 > 0) {
      answer = answer * x + coefficient[--n1];
    }
    return answer;
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/