/*========================================================================================== LMSTable_Background ===*/

function LMSTable_Background()   {

/*------------------------------------------------------------------------------------------------------ import ---*/

import flash .display  .MovieClip          ;
import flash .display  .Sprite             ;
import flash .display  .Graphics           ;
import flash .display  .GradientType       ;
import flash .geom     .Matrix             ;
import flash .display  .SpreadMethod       ;
import flash .display  .InterpolationMethod;

/*================================================================================== class LMSTable_Background ===*/

public class LMSTable_Background {

  private var owner     :Object;
  private var mc        :Sprite;

  private var x1        :Number;
  private var y1        :Number;
  private var x2        :Number;
  private var y2        :Number;       

  private var frame_color          :Number = 0x000000;               // graph line color
  private var frame_thickness      :Number = 0.5;
  private var frame_alpha          :Number = 100;                    // graph line transparency


  private var gradientType         :String = GradientType.LINEAR           ;             // gradientFill info
  private var color_001            :Number = 0x7B7BA8; //0xFFFFFF; //0x7B7BA8                      ;
  private var color_002            :Number = 0xB3B3F5; //0x99CCFF; //0xB3B3F5                      ;
  private var colors               :Array  = [color_001, color_002]        ;
  private var color_003            :Number = 0x8B8BB8                      ;
  private var color_004            :Number = 0xC3C3FF                      ;
  private var colors34             :Array  = [color_003, color_004]        ;
  private var alphas               :Array  = [100,100]                     ;
  private var ratios               :Array  = [0, 255]                      ;
  private var spreadMethod         :String = SpreadMethod.PAD              ;
  private var interp               :String = InterpolationMethod.LINEAR_RGB;
  private var focalPtRatio         :Number = 0                             ;
  private var boxRotation          :Number = -Math.PI/2                    ;

  private var g                    :Graphics                               ;   

  /*--------------------------------------------------------------------------------------- LMSTable_Background ---*/

  public function LMSTable_Background(owner:Object,mc:Sprite,x1:Number,y1:Number,x2:Number,y2:Number) {
    this.owner = owner;
    this.mc    = mc   ;
    this.x1    = x1   ;   this.y1 = y1;
    this.x2    = x2   ;   this.y2 = y2;
    init()            ;
  }
  /*------------------------------------------------------------------------------------------------------ init ---*/

  private function init() {
    set_backgroundColor();
  }
  /*--------------------------------------------------------------------------------------- set_backgroundColor ---*/

  private function set_backgroundColor() {
    g = mc.graphics;
    var matrix       :Matrix = new Matrix();
    var boxWidth     :Number = x2-x1;
    var boxHeight    :Number = y2-y1;
    var tx           :Number = x1   ;
    var ty           :Number = y1   ;
    matrix.createGradientBox(boxWidth, boxHeight, boxRotation, tx, ty);
    
    g.clear             ();
    g.beginGradientFill (gradientType,colors,alphas,ratios,matrix,spreadMethod,interp,focalPtRatio);
    g.drawRect          (tx,ty,boxWidth,boxHeight);
    g.endFill           ();
    g.lineStyle         (frame_thickness,frame_color,frame_alpha);
    g.drawRect          (tx,ty,boxWidth,boxHeight);
  } 
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/