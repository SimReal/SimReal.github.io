/*========================================================================================== StatisticalMoments ===*/

function StatisticalMoments (nT)          {   // n:Number

  var n                     = nT    ;         // Number
  var moments               = null  ;         // :Array;
  var err                   = -99999;

  this.average              = average             ;
  this.errorOnAverage       = errorOnAverage      ;
  this.unnormalizedVariance = unnormalizedVariance;
  this.variance             = variance            ;    

  init();

  /*----------------------------------------------------------------------------------------- SymmetricalMatrix ---*/

  function init()                         {
    moments = new Array(n);
  }
  /*--------------------------------------------------------------------------------------------------- average ---*/

  public function average()               {
    return moments[1];
  }
  /*-------------------------------------------------------------------------------------------- errorOnAverage ---*/

  public function errorOnAverage()        {
    return Math.sqrt(variance() / moments[0]);
  }
  /*-------------------------------------------------------------------------------------- unnormalizedVariance ---*/

  public function unnormalizedVariance()  {   // return Number
    return moments[2] * moments[0];
  }
  /*-------------------------------------------------------------------------------------------------- variance ---*/

  public function variance()              {   // return Number
    if(moments[0] < 2) {
      return err; }
    else {
      return unnormalizedVariance() / (moments[0] - 1);
    }
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/