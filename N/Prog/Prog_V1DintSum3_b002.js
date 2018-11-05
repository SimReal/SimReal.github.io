/*=========================================================================================== Prog_V1DintSum3 ===*/

package {

/*---------------------------------------------------------------------------------------------------- import ---*/

import flash .display  .Stage              ;
import flash .display  .MovieClip          ;
import flash .display  .Sprite             ;

import flash .text     .TextField          ;
import flash .text     .TextFormat         ;
import flash .text     .TextFieldType      ;
import flash .text     .TextFieldAutoSize  ;
import flash .text     .AntiAliasType      ;

import fl    .controls .CheckBox           ;
import fl    .controls .RadioButton        ;
import fl    .controls .RadioButtonGroup   ;
import fl    .controls .Button             ;
import fl    .controls .NumericStepper     ;
import fl    .controls .ColorPicker        ;
import fl    .events   .ColorPickerEvent   ;

import fl    .controls .ComboBox           ;

import fl    .controls .Slider             ;
import fl    .controls .SliderDirection    ;

import fl    .controls .ScrollBar          ;
import fl    .controls .ScrollBarDirection ;

import flash .display  .Graphics           ;
import flash .display  .GradientType       ;
import flash .geom     .Matrix             ;
import flash .display  .SpreadMethod       ;
import flash .display  .InterpolationMethod;

import flash .events   .Event              ;
import flash .events   .MouseEvent         ;
import flash .events   .KeyboardEvent      ;
import fl    .events   .ScrollEvent        ;

/*===================================================================================== class Prog_V1DintSum3 ===*/

public class Prog_V1DintSum3 extends Prog_2D  {

  private var mc_simCar    :Sprite;

  private var mc_line      :Sprite;
  private var mc_line1     :Sprite;
  private var mc_lineM     :Sprite;
  private var mc_lineT     :Sprite;     // task line

  private var mc_car1      :Sprite;
  private var mc_car2      :Sprite;

  private var mc_graphVT   :Sprite;
  private var mc_graphST   :Sprite;

  private var mc_grid1     :Sprite;
  private var mc_grid2     :Sprite;

  private var mc_graph1    :Sprite;
  private var mc_axis1     :Sprite;
  private var mc_func1     :Sprite;
  private var mc_gLine1    :Sprite;
  private var mc_fill1     :Sprite;

  private var mc_graph2    :Sprite;
  private var mc_axis2     :Sprite;
  private var mc_func2     :Sprite;
  private var mc_gLine2    :Sprite;
  private var mc_fill2     :Sprite;

  private var mc_graphST1  :Sprite;
  private var mc_graphST2  :Sprite;

  private var mc_vt        :Sprite;
  private var mc_vt1       :Sprite;
  private var mc_vt2       :Sprite;
  private var mc_st        :Sprite;
  private var mc_st1       :Sprite;
  private var mc_st2       :Sprite;

  private var mc_formula01 :Sprite;
  private var mc_formula02 :Sprite;
  
  private var mc_task      :Sprite;
  private var g_task       :Graphics;

  private var g_grid1      :Graphics;
  private var g_grid2      :Graphics;

  private var g_graph1     :Graphics;
  private var g_axis1      :Graphics;
  private var g_func1      :Graphics;
  private var g_gLine1     :Graphics;
  private var g_fill1      :Graphics;

  private var g_graph2     :Graphics;
  private var g_axis2      :Graphics;
  private var g_func2      :Graphics;
  private var g_gLine2     :Graphics;
  private var g_fill2      :Graphics;

  private var g_line       :Graphics;
  private var g_line1      :Graphics;
  private var g_lineM      :Graphics;
  private var g_lineT      :Graphics;

  private var g_st1        :Graphics;
  private var g_st2        :Graphics;

  private var cb_car1      :CheckBox;
  private var cb_car2      :CheckBox;
  private var cb_line1     :CheckBox;
  private var cb_lineM     :CheckBox;

  private var cb_vt        :CheckBox;
  private var cb_vt1       :CheckBox;
  private var cb_vt2       :CheckBox;
  private var cb_st        :CheckBox;
  private var cb_st1       :CheckBox;
  private var cb_st2       :CheckBox;
  private var cb_formula01 :CheckBox;
  private var cb_formula02 :CheckBox;
  private var cb_grid      :CheckBox;

  private var vT           :String = "50t";
  private var txt_vT       :TextField;
  private var txt_v        :TextField;

  private var rx1          :String = "100t";
  private var rT1          :String = "100t";
  private var rx2          :String = "100t";
  private var txt_r1T      :TextField;
  private var txt_r1       :TextField;
  private var txt_r2T      :TextField;
  private var txt_r2       :TextField;

  private var sv1Tot       :String     = "100";
  private var sv2Tot       :String     = "100";

  private var txt_v10t     :TextField;
  private var txt_v11t     :TextField;
  private var txt_v12t     :TextField;
  private var txt_v13t     :TextField;

  private var txt_v20t     :TextField;
  private var txt_v21t     :TextField;
  private var txt_v22t     :TextField;
  private var txt_v23t     :TextField;

  private var txt_v10      :TextField;
  private var txt_v11      :TextField;
  private var txt_v12      :TextField;
  private var txt_v13      :TextField;

  private var txt_v20      :TextField;
  private var txt_v21      :TextField;
  private var txt_v22      :TextField;
  private var txt_v23      :TextField;

  private var txt_v1x      :TextField;
  private var txt_v1y      :TextField;
  private var txt_v2x      :TextField;
  private var txt_v2y      :TextField;

//private var sParam       :String = "";

  private var v1x          :Array;
  private var v2x          :Array;

  private var s1x          :Array;
  private var s2x          :Array;

  private var nNumPrSec    :Number = 1000;

  

  private var nT           :int = 1  ;
  private var txt_nT       :TextField;
  private var txt_n        :TextField;
  private var sb_V         :ScrollBar;

  private var txt_car1     :TextField;
  private var txt_car2     :TextField;

  private var txt_v1T      :TextField;
  private var txt_v2T      :TextField;
  private var txt_t1T      :TextField;
  private var txt_t2T      :TextField;

  private var txt_st       :TextField;
  private var txt_ss       :TextField;

  private var txt_sT       :TextField;
  private var txt_s        :TextField;

  private var t1           :Number   ;
  private var tA           :Array    ;
  private var vA           :Array    ;
  private var sA           :Array    ;

  private var x1Origin     :Number =  40;
  private var y1Origin     :Number = 360;
  private var x2Origin     :Number = 270;
  private var y2Origin     :Number = 360;
  private var lenAxisX     :Number = 210;
  private var lenAxisY     :Number = 130;
  private var nColAxis     :Number = 0x555555;

  private var xSTorigin    :Number = 150;
  private var ySTorigin    :Number = 360;

  private var xCar0        :Number =   0;
  private var yCar0        :Number =  80;

  private var xS           :Number =  50;
  private var xE           :Number = 450;

  private var xCarS        :Number =  50;
  private var yCarS        :Number = 100;
  private var dCarS        :Number =  70;

  private var xCarE        :Number = 450;
  private var xCarM        :Number = 250;

  private var xCar10       :Number = xCarS;
  private var xCar20       :Number = xCarS;

  private var yCar10       :Number = yCar0;
  private var yCar20       :Number = yCar0 + 1*dCarS;

  private var xCar1        :Number = xCarS;
  private var xCar2        :Number = xCarS;

  private var yCar1        :Number = yCar10;
  private var yCar2        :Number = yCar20;

  private var fac          :Number = 50;

  private var car1         :Point_S;
  private var car2         :Point_S;
  private var car1T        :Point_S;
  private var car2T        :Point_S;
  private var car1S        :Point_S;
  private var car2S        :Point_S;

  private var car2PosA     :Array;

  private var vector1      :Vector  ;
  private var vector2      :Vector  ;
  private var vectorST     :Vector  ;

  private var nColVector   :Number = 0xAAAAAA;
  private var nColGraph    :Number = 0xAAAAFF;
  private var nLenGraphX   :Number = 200;
  private var nLenGraphY   :Number = 100;

  private var formula_01   :Formula_001;
  private var formula_02   :Formula_002;

  private var txt_rMax     :TextField;
  private var txt_vMax     :TextField;
  private var txt_tMax     :TextField;

  private var tTime        :Number = 0  ;
  private var tMax         :Number = 4.0;
  private var  nVmax       :Number = 0  ;
  private var tR1          :String = "0";
  private var tV1          :String = "0";
  private var tR2          :String = "0";
  private var tV2          :String = "0";
  private var nR           :Number = 0  ;
  private var nV1          :Number = 0  ;
  private var nV2          :Number = 0  ;
  private var sParam       :String = "" ;
  private var velocity     :Number = 0 ;

  private var sb_task      :ScrollBar;
  private var pb_task1     :Button   ; 
  private var pb_task2     :Button   ;
  private var pb_task3     :Button   ;
  private var pb_task4     :Button   ;
  private var nTask        :Number = 0;

  private var fC1          :FunctionCompute;
  private var fCrx1        :FunctionCompute;
  private var fCvx1        :FunctionCompute;
  private var fCDx1        :FunctionComputeDerivate;

  private var fCv1x        :FunctionCompute;
  private var fCv2x        :FunctionCompute;

  private var fC2          :FunctionCompute;
  private var fCrx2        :FunctionCompute;
  private var fCvx2        :FunctionCompute;
  private var fCDx2        :FunctionComputeDerivate;

  private var bArea        :Boolean = false;

  private var bSet         :Boolean = false;

  private var sTask0       :String  = "";
  private var sTask1       :String  = "";
  private var sTask2       :String  = "";
  private var sTask3       :String  = "";
  private var sTask4       :String  = "";
  private var txt_task     :TextField;
   
  /*----------------------------------------------------------------------------------------- Prog_V1DintSum3 ---*/

  public function Prog_V1DintSum3(owner:Object,st_parent:Stage,mc_dlg:Sprite,mc_sim:Sprite) {
    super(owner,st_parent,mc_dlg,mc_sim);
    init();
    sHead         = "Motion";
    sInfo         = "\n " +
                    " The application simulates the movement of two cars (green and red). \n " +
                    " Click 'start simulation' to let the cars be moving in maximum 4.0 seconds. \n " +
                    " The simulation (and time by the end line) will stop \n " +
                    " when one of the cars reaches the end line. \n\n" +

                    " The speed of each of the cars are given by functions of the time t. \n " +
                    " Currently the application will not handle negative speeds. \n\n " +

                    " The two v-t graphs are showing the speed v1 and v2 of each car as a function of time t. ";
    
    sTask0        = "";

    sTask1        = "\n" +
                    " 1: \n\n " +

                    " Press 'Start' in the program, \n " +
                    " and explain to each other what happens. \n\n " +

                    " What do the shaded areas represent? ";

    sTask2        = "\n" +
                    " 2: \n\n " +

                    " Determine other mathematical \n " +
                    " expressions for v1 and v2, \n " +
                    " so that the cars run \n " +
                    " with different velocities, \n " +
                    " and arrive at the finish line \n " +
                    " at the same time. ";

    sTask3        = "\n" +
                    " 3: \n\n " +

                    " What can you do \n " +
                    " to make the green car \n " +
                    " be only halfway \n " +
                    " when the red car  \n " +
                    " reaches the finish line? ";

    sTask4        = "\n" +
                    " 4: \n\n " +

                    " Find velocities (v1 and v2) \n " +
                    " for the green and the red car, \n " +
                    " so that the green car \n " +
                    " has half the velocity of the red car \n " +
                    " when they reach the finish line \n " +
                    " simultaneously at 4.0 sec. \n\n " +

                    " Can you find several solutions? ";

    sTask4        = "\n" +
                    " 4: \n\n " +

                    " Find velocities (v1 and v2) \n " +
                    " for the green and the red car, \n " +
                    " so that the green car \n " +
                    " has half the velocity of the red car \n " +
                    " when they reach the finish line \n " +
                    " simultaneously at 4.0 sec. \n\n " +

                    " Can you find several solutions? ";
               
    txt_head.text = sHead ;
    txt_info.text = sInfo ;
    txt_task.text = sTask0;
  }
  /*---------------------------------------------------------------------------------------------------- init ---*/

  override protected function init() {
    super.init   ();
    init_mc      ();
    init_obj     ();
    init_listener();
    init_line    ();
    init_line1   ();
    init_grid    ();
    init_car     ();
    init_function();
    init_vector  ();
    init_graph   ();

    init_task    ();

    act_txtN     ();
    actTxt_v1();
    actTxt_v2();
    show_sim(false);
  }
  /*------------------------------------------------------------------------------------------------- init_mc ---*/

  override protected function init_mc() {
    super.init_mc();

    mc_simCar    = new Sprite;

    mc_line      = new Sprite;            g_line  = mc_line    .graphics;
    mc_line1     = new Sprite;            g_line1 = mc_line1   .graphics;    mc_line1.visible = false;
    mc_lineM     = new Sprite;            g_lineM = mc_lineM   .graphics;    mc_lineM.visible = false;              // mid  line
    mc_lineT     = new Sprite;            g_lineT = mc_lineT   .graphics;  //mc_lineT.visible = false;              // tast line

    mc_car1      = new Sprite;
    mc_car2      = new Sprite; 

    mc_grid1      = new Sprite;           g_grid1 = mc_grid1   .graphics;    mc_grid1.visible  = true ;
    mc_grid2      = new Sprite;           g_grid2 = mc_grid2   .graphics;    mc_grid2.visible  = true ;

    mc_graphVT    = new Sprite;

    mc_graph1     = new Sprite;           g_graph1 = mc_graph1 .graphics;
    mc_axis1      = new Sprite;           g_axis1  = mc_axis1  .graphics;
    mc_func1      = new Sprite;           g_func1  = mc_func1  .graphics;
    mc_gLine1     = new Sprite;           g_gLine1 = mc_gLine1 .graphics;
    mc_fill1      = new Sprite;           g_fill1  = mc_fill1  .graphics;  

    mc_graph2     = new Sprite;           g_graph2 = mc_graph2 .graphics;
    mc_axis2      = new Sprite;           g_axis2  = mc_axis2  .graphics;
    mc_func2      = new Sprite;           g_func2  = mc_func2  .graphics;
    mc_gLine2     = new Sprite;           g_gLine2 = mc_gLine2 .graphics;
    mc_fill2      = new Sprite;           g_fill2  = mc_fill2  .graphics;  

    mc_graphST    = new Sprite;
    mc_graphST1   = new Sprite;
    mc_graphST2   = new Sprite;

    mc_st         = new Sprite;           mc_st .visible = false;
    mc_st1        = new Sprite;           mc_st1.visible = false;  g_st1    = mc_st1    .graphics; 
    mc_st2        = new Sprite;           mc_st2.visible = false;  g_st2    = mc_st2    .graphics; 

    mc_formula01  = new Sprite;           mc_formula01.visible = false;
    mc_formula02  = new Sprite;           mc_formula02.visible = false;

    mc_task       = new Sprite;           g_task = mc_task.graphics;

    mc_simA        .addChild(mc_simCar);
    mc_simA        .addChild(mc_formula02);
    mc_simA        .addChild(mc_formula01);

    mc_simCar      .addChild(mc_line1);
    mc_simCar      .addChild(mc_line );
    mc_simCar      .addChild(mc_lineM);

    mc_simCar      .addChild(mc_car1 );
    mc_simCar      .addChild(mc_car2 );

    mc_simCar      .addChild(mc_graphVT);
    mc_simCar      .addChild(mc_graphST);
    mc_graphVT     .addChild(mc_grid1  );
    mc_graphVT     .addChild(mc_grid2  );
    mc_graphVT     .addChild(mc_graph1);
    mc_graphVT     .addChild(mc_graph2);


    mc_graph1      .addChild(mc_fill1 );
    mc_graph1      .addChild(mc_gLine1);
    mc_graph1      .addChild(mc_func1 );
    mc_graph1      .addChild(mc_axis1 );

    mc_graph2      .addChild(mc_fill2 );
    mc_graph2      .addChild(mc_gLine2);
    mc_graph2      .addChild(mc_func2 );
    mc_graph2      .addChild(mc_axis2 );

    mc_graphST     .addChild(mc_st );
    mc_st          .addChild(mc_st1);
    mc_st          .addChild(mc_st2);
  }
  /*----------------------------------------------------------------------------------------------- init_line ---*/
 
  private function init_line() {
    g_line .clear();  g_line .lineStyle(0.5,0x000000,1);  
    g_lineM.clear();  g_lineM.lineStyle(0.5,0xAAAAAA,1);
    g_line .moveTo(xCarS   ,yCar10-10); g_line .lineTo(xCarS   ,yCar20+10);   // start  line
    g_line .moveTo(xCarE   ,yCar10-10); g_line .lineTo(xCarE   ,yCar20+10);   // finish line
    g_lineM.moveTo(xCarM   ,yCar10-10); g_lineM.lineTo(xCarM   ,yCar20+10);   // mid    line
    g_line .moveTo(xCarS-40,201      ); g_line .lineTo(xCarE+40,201      );   // divide cars and graph
  }
  private function init_line1(xPos:Number=0) {                              // line following the red car
    g_line1.clear();  g_line1.lineStyle(0.5,0xCCCCCC,1);
    g_line1.moveTo(xPos,yCar10-10); g_line1.lineTo(xPos,yCar20+10);
  }

  private function draw_lineT(nTask:Number) {                              // task line
    g_lineT.clear();  g_lineT.lineStyle(0.5,0x0000FF,1);
    if(nTask == 1) {
      g_lineT.moveTo(8,-25); g_lineT.lineTo(8+47,-25); }
    else if(nTask == 2) {
      g_lineT.moveTo(62,-25); g_lineT.lineTo(62+47,-25); }
    else if(nTask == 3) {
      g_lineT.moveTo(116,-25); g_lineT.lineTo(116+47,-25); }
    else if(nTask == 4) {
      g_lineT.moveTo(170,-25); g_lineT.lineTo(170+47,-25);
    }
  //g_lineT.moveTo(8+(nTask-1)*70,-25); g_lineT.lineTo(10+(nTask-1)*70+70,-25);
  }

  private function init_grid() {
    g_grid1.clear();  g_grid1.lineStyle(0.5,0xDDDDDD,1);
    g_grid2.clear();  g_grid2.lineStyle(0.5,0xDDDDDD,1);
    for(var i:int=0;i<=10;i++) {
      g_grid1.moveTo(x1Origin,y1Origin-i*10);  g_grid1.lineTo(x1Origin+nLenGraphX,y1Origin-i*10);
      g_grid2.moveTo(x2Origin,y2Origin-i*10);  g_grid2.lineTo(x2Origin+nLenGraphX,y2Origin-i*10);
    }
    for(var i:int=0;i<=20;i++) {
      g_grid1.moveTo(x1Origin+i*10,y1Origin);  g_grid1.lineTo(x1Origin+i*10,y1Origin-nLenGraphY);
      g_grid2.moveTo(x2Origin+i*10,y2Origin);  g_grid2.lineTo(x2Origin+i*10,y2Origin-nLenGraphY);
    }
  }

  private function init_task() {
    g_task.clear             ();
    g_task.lineStyle(0.5,0x555555,1);
    g_task.beginFill(0xFFFFFF)      ;
    g_task.drawRect (3,-180,219,178);
    g_task.endFill  ()              ;
  }
  /*------------------------------------------------------------------------------------------------ init_car ---*/
  
  private function init_car() {
    car1.x = xCar10;   car1.y = yCar10; 
    car2.x = xCar20;   car2.y = yCar20;
    car2PosA = new Array(401);
    for(var i:int=0;i<=400;i++) {
      car2PosA[i] = 0;
    }
  }

  /*------------------------------------------------------------------------------------------- init_function ---*/  

  private function init_function() {
    fC1      = new FunctionCompute        ();
    fCrx1    = new FunctionCompute        ();
    fCvx1    = new FunctionCompute        ();
    fCDx1    = new FunctionComputeDerivate();
    fC2      = new FunctionCompute        ();
    fCrx2    = new FunctionCompute        ();
    fCvx2    = new FunctionCompute        ();
    fCDx2    = new FunctionComputeDerivate();

    fCv1x    = new FunctionCompute        ();
    fCv2x    = new FunctionCompute        ();
 
    fCDx1     .infixPostfix ("25x^2");  fCvx1 .infixPostfix ("50x");
    fCDx2     .infixPostfix ("25x^2");  fCvx2 .infixPostfix ("50x");
    tV1      = fCDx1.get_derivate_function_symbolic();

  //fCv1x     .infixPostfix ("100"); 
  //fCv2x     .infixPostfix ("50x"); 

  //fCv1x     .infixPostfix ("10x^2"); 
  //fCv2x     .infixPostfix ("50x");

    fCv1x     .infixPostfix ("45x+10"); 
    fCv2x     .infixPostfix ("18.75x^2");

  //fCv1x     .infixPostfix ("8x^2"); 
  //fCv2x     .infixPostfix ("75x^0.5");

  //fCv1x     .infixPostfix ("5x^2"); 
  //fCv2x     .infixPostfix ("25x^0.5"); 
    
  //fCv1x     .infixPostfix ("75/4x^2"); 
  //fCv2x     .infixPostfix ("-75/8x^2+75x");

    v1x = new Array(5000);
    v2x = new Array(5000);
 
    s1x = new Array(5000);
    s2x = new Array(5000);

    compute_sx();
  }
  private function compute_sx()  {
    compute_s1x();
    compute_s2x();
    draw_graphV();
  }
  private function compute_s1x() {
    var v :Number = 0;
    var s :Number = 0;  
    for(var i:Number=0;i<=tMax*nNumPrSec;i++) {
      v = fCv1x.postfixValue(i/nNumPrSec);   if(isNaN(v)) {v = 0;}
      s = s + v/nNumPrSec;   //fCv1x.postfixValue(i/nNumPrSec)*1/nNumPrSec;
      v1x[i] = v;
      s1x[i] = s;
    }
  }
  private function compute_s2x() {
    var v :Number = 0;
    var s :Number = 0;  
    for(var i:Number=0;i<=tMax*nNumPrSec;i++) {
      v = fCv2x.postfixValue(i/nNumPrSec);   if(isNaN(v)) {v = 0;}
      s = s + v/nNumPrSec;   //fCv2x.postfixValue(i/nNumPrSec)*1/nNumPrSec;
      v2x[i] = v;
      s2x[i] = s;
    }
    //trace(v2x);
  }
  /*--------------------------------------------------------------------------------------------- init_vector ---*/

  private function init_vector() {
    vector1  = new Vector(mc_axis1);
    vector2  = new Vector(mc_axis2);

    vector1   .clear(); vector2.clear();
    vector1   .arrow(x1Origin,y1Origin,x1Origin+lenAxisX,y1Origin         ,nColVector);
    vector1   .arrow(x1Origin,y1Origin,x1Origin         ,y1Origin-lenAxisY,nColVector);
    vector2   .arrow(x2Origin,y2Origin,x2Origin+lenAxisX,y2Origin         ,nColVector);
    vector2   .arrow(x2Origin,y2Origin,x2Origin         ,y2Origin-lenAxisY,nColVector);

    vectorST = new Vector(mc_st);
    vectorST  .arrow(xSTorigin,ySTorigin,xSTorigin+lenAxisX,ySTorigin,nColVector);
    vectorST  .arrow(xSTorigin,ySTorigin,xSTorigin         ,ySTorigin-lenAxisY,nColVector);
  }
  /*-------------------------------------------------------------------------------------------- init_graph ---*/

  private function init_graph() {
    g_func1.clear();  g_func1.lineStyle(0.5,nColGraph,1);
    g_func1.moveTo(x1Origin,y1Origin); g_func1.lineTo(x1Origin+nLenGraphX,y1Origin-nLenGraphY);
    g_func2.clear();  g_func2.lineStyle(0.5,nColGraph,1);
    g_func2.moveTo(x2Origin,y2Origin); g_func2.lineTo(x2Origin+nLenGraphX,y2Origin-nLenGraphY);
  }
  /*------------------------------------------------------------------------------------------------ init_obj ---*/

  override protected function init_obj() {
    super    .init_obj()        ;

    cb_car1       = objMaker.make_checkBox_U ("cb_car1"    ,"Car1"    ,  10, 25,true ,  0,1,mc_obj,this,"Show car 1 "         );
    cb_car2       = objMaker.make_checkBox_U ("cb_car2"    ,"Car2"    ,  10, 45,true ,  0,1,mc_obj,this,"Show car 2"          );
    cb_line1      = objMaker.make_checkBox_U ("cb_line1"   ,"Line"    ,  85, 45,false,  0,1,mc_obj,this,"Show control line "  );
    cb_lineM      = objMaker.make_checkBox_U ("cb_lineM"   ,"MLine"   , 160, 45,false,-10,1,mc_obj,this,"Show midline ");

    cb_vt         = objMaker.make_checkBox_U ("cb_vt"      ,"v-t"     ,  10, 75,true ,  0,1,mc_obj,this,"Show v/t graph "      );
    cb_vt1        = objMaker.make_checkBox_U ("cb_vt1"     ,"v1-t"    ,  85, 75,true ,  0,1,mc_obj,this,"Show v1/t graph "     );
    cb_vt2        = objMaker.make_checkBox_U ("cb_vt2"     ,"v2-t"    , 160, 75,true ,-10,1,mc_obj,this,"Show v2/t graph "     );
    cb_st         = objMaker.make_checkBox_U ("cb_st"      ,"s-t"     ,  10, 95,false,  0,1,mc_obj,this,"Sbow s/t graph "      );
    cb_st1        = objMaker.make_checkBox_U ("cb_st1"     ,"s1-t"    ,  80, 95,false,  0,1,mc_obj,this,"Show s1/t graph "     );   cb_st1.enabled = false;
    cb_st2        = objMaker.make_checkBox_U ("cb_st2"     ,"s2-t"    , 150, 95,false,  0,1,mc_obj,this,"Show s2/t graph "     );   cb_st2.enabled = false;

    cb_formula01  = objMaker.make_checkBox_U ("cb_formula1","Formula1",  10, 95,false,  0,1,mc_obj,this,"Formula: Differentiation / Integration ");
    cb_formula02  = objMaker.make_checkBox_U ("cb_formula2","Formula2",  85, 95,false,  0,1,mc_obj,this,"Formula: Position / Velocity ");
    cb_grid       = objMaker.make_checkBox_U ("cb_grid"    ,"Grid"    , 160, 95,true ,  0,1,mc_obj,this,"Grid ");

    txt_sT        = objMaker.make_txtField   ("txt_sT"  , 10, 150    , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"s(t) = ",false,false);
    txt_s         = objMaker.make_txtField   ("txt_s"   , 60, 150    ,150,18,true ,0xAAAAAA,true ,0xFFFFFF,formatInfo,""       ,true ,true );

    txt_car1      = objMaker.make_txtField   ("txt_car1",  0, yCar1-8, 20,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"1",false,false);
    txt_car2      = objMaker.make_txtField   ("txt_car2",  0, yCar2-8, 20,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"2",false,false);

    txt_v1T       = objMaker.make_txtField   ("txt_v1T"  , x1Origin+3, y1Origin-lenAxisY-5    , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"v1",false,false);
    txt_v2T       = objMaker.make_txtField   ("txt_v2T"  , x2Origin+3, y2Origin-lenAxisY-5    , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"v2",false,false);
    txt_t1T       = objMaker.make_txtField   ("txt_t1T"  , x1Origin+lenAxisX-10, y1Origin+2   , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"t" ,false,false);
    txt_t2T       = objMaker.make_txtField   ("txt_t2T"  , x2Origin+lenAxisX-10, y2Origin+2   , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"t" ,false,false);

    g_line.moveTo(xCarE   ,yCar10-10); g_line.lineTo(xCarE   ,yCar20+10);

    txt_rMax      = objMaker.make_txtField   ("txt_rMax" , xCarE-25   , yCar20+15               , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"s = 400",false,false);
    txt_tMax      = objMaker.make_txtField   ("txt_tMax" , xCarE-25   , yCar20+35               , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"t  = 0" ,false,false);
    txt_vMax      = objMaker.make_txtField   ("txt_vMax" , x1Origin-40, y1Origin-lenAxisY+22    , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"200"    ,false,false);

    txt_ss        = objMaker.make_txtField   ("txt_ss"   , xSTorigin+3, ySTorigin-lenAxisY-5    , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"s1 - s2",false,false);
    txt_st        = objMaker.make_txtField   ("txt_st"   , xSTorigin+lenAxisX-10, ySTorigin+2   , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"t"      ,false,false);

    car1          = new Point_S(this,mc_car1 ,1,xCar0,yCar0,0.5);   car1.gotoAndStop(1);
    car2          = new Point_S(this,mc_car2 ,2,xCar0,yCar0,0.5);   car2.gotoAndStop(2);

    car1T         = new Point_S(this,mc_graph1,3,x1Origin+110,y1Origin+20,0.5);   car1T.gotoAndStop(1);
    car2T         = new Point_S(this,mc_graph2,4,x2Origin+110,y2Origin+20,0.5);   car2T.gotoAndStop(2);

    car1S         = new Point_S(this,mc_st1   ,5,xSTorigin+100,ySTorigin+20,0.5);   car1S.gotoAndStop(1);
    car2S         = new Point_S(this,mc_st2   ,6,xSTorigin+150,ySTorigin+20,0.5);   car2S.gotoAndStop(2);

    txt_r1T       = objMaker.make_txtField   ("txt_r1T" , 10, 145    , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"v1 ="  ,false,false);
    txt_r1        = objMaker.make_txtField   ("txt_r1"  , 35, 145    ,180,18,true ,0xAAAAAA,true ,0xEEFFEE,formatInfo,""      ,false,false);
    txt_r2T       = objMaker.make_txtField   ("txt_r2T" , 10, 167    , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"v2 ="  ,false,false);
    txt_r2        = objMaker.make_txtField   ("txt_r2"  , 35, 167    ,180,18,true ,0xAAAAAA,true ,0xFFEEEE,formatInfo,""      ,false,false);

    txt_v13t      = objMaker.make_txtField   ("txt_v13t", 50, 125    , 30,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"t"     ,false,false);
    txt_v12t      = objMaker.make_txtField   ("txt_v12t", 95, 125    , 30,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"t"     ,false,false);
    txt_v11t      = objMaker.make_txtField   ("txt_v11t",135, 125    , 30,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"t"     ,false,false);
    txt_v10t      = objMaker.make_txtField   ("txt_v10t",180, 125    , 25,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"t"     ,false,false);

    txt_v23t      = objMaker.make_txtField   ("txt_v13t", 55, 120    , 30,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"3"     ,false,false);
    txt_v22t      = objMaker.make_txtField   ("txt_v12t",100, 120    , 30,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"2"     ,false,false);
    txt_v21t      = objMaker.make_txtField   ("txt_v11t",140, 120    , 30,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"1"     ,false,false);
    txt_v20t      = objMaker.make_txtField   ("txt_v10t",185, 120    , 25,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"0"     ,false,false);

    txt_v13       = objMaker.make_txtField   ("txt_v13" , 35, 145    , 45,18,true ,0xAAAAAA,false,0xEEEEEE,formatInfo,""      ,true ,true );   txt_v13.restrict = "0123456789/*-."
    txt_v12       = objMaker.make_txtField   ("txt_v12" , 80, 145    , 45,18,true ,0xAAAAAA,false,0xEEEEEE,formatInfo,""      ,true ,true );   txt_v12.restrict = "0123456789/*-."
    txt_v11       = objMaker.make_txtField   ("txt_v12" ,125, 145    , 45,18,true ,0xAAAAAA,false,0xEEEEEE,formatInfo,""      ,true ,true );   txt_v11.restrict = "0123456789/*-."
    txt_v10       = objMaker.make_txtField   ("txt_v12" ,170, 145    , 45,18,true ,0xAAAAAA,false,0xEEEEEE,formatInfo,"100"   ,true ,true );   txt_v10.restrict = "0123456789/*-."

    txt_v23       = objMaker.make_txtField   ("txt_v23" , 35, 167    , 45,18,true ,0xAAAAAA,false,0xEEEEEE,formatInfo,""      ,true ,true );   txt_v23.restrict = "0123456789/*-."
    txt_v22       = objMaker.make_txtField   ("txt_v22" , 80, 167    , 45,18,true ,0xAAAAAA,false,0xEEEEEE,formatInfo,""      ,true ,true );   txt_v22.restrict = "0123456789/*-."
    txt_v21       = objMaker.make_txtField   ("txt_v22" ,125, 167    , 45,18,true ,0xAAAAAA,false,0xEEEEEE,formatInfo,"50"    ,true ,true );   txt_v21.restrict = "0123456789/*-."
    txt_v20       = objMaker.make_txtField   ("txt_v22" ,170, 167    , 45,18,true ,0xAAAAAA,false,0xEEEEEE,formatInfo,""      ,true ,true );   txt_v20.restrict = "0123456789/*-."

  //txt_v1x       = objMaker.make_txtField   ("txt_v13" , 45, 145    ,170,18,true ,0xAAAAAA,true ,0xEEFFEE,formatInfo,"100"   ,true ,true ); 
  //txt_v2x       = objMaker.make_txtField   ("txt_v23" , 45, 167    ,170,18,true ,0xAAAAAA,true ,0xFFEEEE,formatInfo,"50t"   ,true ,true );

    txt_v1x       = objMaker.make_txtField   ("txt_v13" , 45, 145    ,170,18,true ,0xAAAAAA,true ,0xEEFFEE,formatInfo,"45 t + 10"   ,true ,true ); 
    txt_v2x       = objMaker.make_txtField   ("txt_v23" , 45, 167    ,170,18,true ,0xAAAAAA,true ,0xFFEEEE,formatInfo,"18.75 t^2",true ,true );

  //txt_v1x       = objMaker.make_txtField   ("txt_v13" , 45, 145    ,170,18,true ,0xAAAAAA,true ,0xEEFFEE,formatInfo,"75/4 t^2"   ,true ,true ); 
  //txt_v2x       = objMaker.make_txtField   ("txt_v23" , 45, 167    ,170,18,true ,0xAAAAAA,true ,0xFFEEEE,formatInfo,"-75/8 t^2 + 75 t"   ,true ,true );

    txt_vT        = objMaker.make_txtField   ("txt_vT"  , 10, 145    , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"v = "  ,false,false);
    txt_v         = objMaker.make_txtField   ("txt_v"   , 60, 145    ,150,18,true ,0xAAAAAA,true ,0xFFFFFF,formatInfo,"50t"   ,true ,true );

    txt_nT        = objMaker.make_txtField   ("txt_nT"  , 10, 167    , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"n = "  ,false,false);
    txt_n         = objMaker.make_txtField   ("txt_n"   , 60, 167    ,150,18,true ,0xAAAAAA,true ,0xFFFFFF,formatInfo,"1"     ,true ,true );

    txt_task      = objMaker.make_txtField  ("txt_info",5,-185,120,18,false,0xAAAAAA,false,0xFFFFFF,formatInfo,sTask3,false,false);
    txt_task        .autoSize = TextFieldAutoSize.LEFT;

    sb_V          = objMaker.make_scrollBar_U("sb_V" , 10,148,1,1,1,0,10000,1,1,1,1.0,false,0,1,mc_obj,this,"Antall tidsintervaller ");
    sb_V           .setScrollProperties(10,0,10000,10);           
    sb_V           .scrollPosition  = 10000;
    sb_V           .width           = 203;

    sb_task       = objMaker.make_scrollBar_U("sb_task" , 205,-177,1,1,1,0,10000,1,1,1,1.0,false,-20,-3,mc_task,this,"Different tasks ");
    sb_task        .setScrollProperties(10,0,10000,10);           
    sb_task        .scrollPosition  = 0;
    sb_task        .width           = 174;
    sb_task        .direction       = ScrollBarDirection.VERTICAL;

    pb_task1  = objMaker.make_button_U  ("pb_task1",  6,-21,52,18,"Task 1",0,1,mc_obj,this,"Show Task 1 ");
    pb_task2  = objMaker.make_button_U  ("pb_task2", 60,-21,52,18,"Task 2",0,1,mc_obj,this,"Show Task 2 ");
    pb_task3  = objMaker.make_button_U  ("pb_task3",114,-21,52,18,"Task 3",0,1,mc_obj,this,"Show Task 3 ");
    pb_task4  = objMaker.make_button_U  ("pb_task4",168,-21,52,18,"Task 4",0,1,mc_obj,this,"Show Task 4 ");
/*
    sb_task   = new ScrollBar()                        ;       // scrollBar adjusting parameter vlue
    sb_task    .name               = "sb_task" ;
    sb_task    .x                  =  205; //x0 + 202;
    sb_task    .y                  = -100; //y0 + 23;
    sb_task    .scaleY             = 3.44       ;
    sb_task    .lineScrollSize     = 1      ;
    sb_task    .pageScrollSize     = 10       ;
    sb_task    .scrollPosition     = 1         ;
    sb_task    .setScrollProperties(10,0,1000,0)   ;
    sb_task    .direction          = ScrollBarDirection.VERTICAL;
*/
    formula_01    = new Formula_001(this,mc_formula01, 32, 33,1.0,1.0,0,1,1);  formula_01.gotoAndStop(1);
    formula_02    = new Formula_002(this,mc_formula02,385,208,1.0,1.0,0,1,1);  formula_02.gotoAndStop(1);

    mc_obj         .addChild(cb_car1 );
    mc_obj         .addChild(cb_car2 );
    mc_obj         .addChild(cb_line1);
    mc_obj         .addChild(cb_lineM);
    mc_obj         .addChild(cb_vt)   ;
    mc_obj         .addChild(cb_vt1)  ;
    mc_obj         .addChild(cb_vt2)  ;

    mc_obj         .addChild(txt_r1T );
  //mc_obj         .addChild(txt_r1  );
    mc_obj         .addChild(txt_r2T );
  //mc_obj         .addChild(txt_r2  );


/*
    mc_obj         .addChild(txt_v10t);
    mc_obj         .addChild(txt_v11t);
    mc_obj         .addChild(txt_v12t);
    mc_obj         .addChild(txt_v13t);

    mc_obj         .addChild(txt_v20t);
    mc_obj         .addChild(txt_v21t);
    mc_obj         .addChild(txt_v22t);
    mc_obj         .addChild(txt_v23t);

    mc_obj         .addChild(txt_v13);
    mc_obj         .addChild(txt_v12);
    mc_obj         .addChild(txt_v11);
    mc_obj         .addChild(txt_v10);

    mc_obj         .addChild(txt_v23);
    mc_obj         .addChild(txt_v22);
    mc_obj         .addChild(txt_v21);
    mc_obj         .addChild(txt_v20);
*/

    mc_obj         .addChild(txt_v1x);
    mc_obj         .addChild(txt_v2x);

    mc_obj         .addChild(cb_formula01);
    mc_obj         .addChild(cb_formula02);
    mc_obj         .addChild(cb_grid);
    mc_obj         .addChild(cb_grid);

    mc_simCar      .addChild(txt_car1);
    mc_simCar      .addChild(txt_car2);

    mc_graph1      .addChild(txt_v1T );
    mc_graph1      .addChild(txt_t1T );
    mc_graph2      .addChild(txt_v2T );
    mc_graph2      .addChild(txt_t2T );
    mc_graph1      .addChild(txt_vMax);
    mc_line        .addChild(txt_rMax);
    mc_line        .addChild(txt_tMax);

    mc_st          .addChild(txt_st );
    mc_st          .addChild(txt_ss );

    mc_obj         .addChild(mc_task );
    mc_task        .addChild(txt_task);
  //mc_task        .addChild(sb_task );
    mc_task        .addChild(pb_task1);
    mc_task        .addChild(pb_task2);
    mc_task        .addChild(pb_task3);
    mc_task        .addChild(pb_task4);
    mc_task        .addChild(mc_lineT);

    mc_info        .addChild(txt_info);
    mc_obj         .addChild(txt_head);
    mc_obj         .addChild(cb_info ); 
    mc_simA        .addChild(mc_info );

  //fCrx    = new FunctionCompute        ();
  //fCDx    = new FunctionComputeDerivate();
  }
  /*------------------------------------------------------------------------------------------- init_listener ---*/

  override protected function init_listener() {
    super.init_listener();
    cb_car1      .addEventListener(MouseEvent .CLICK ,action_cbCar1     );
    cb_car2      .addEventListener(MouseEvent .CLICK ,action_cbCar2     );
    cb_line1     .addEventListener(MouseEvent .CLICK ,action_cbLine1    );
    cb_lineM     .addEventListener(MouseEvent .CLICK ,action_cbLineM    );
    cb_vt        .addEventListener(MouseEvent .CLICK ,action_cbVT       );
    cb_vt1       .addEventListener(MouseEvent .CLICK ,action_cbVT1      );
    cb_vt2       .addEventListener(MouseEvent .CLICK ,action_cbVT2      );
    cb_st        .addEventListener(MouseEvent .CLICK ,action_cbST       );
    cb_st1       .addEventListener(MouseEvent .CLICK ,action_cbST1      );
    cb_st2       .addEventListener(MouseEvent .CLICK ,action_cbST2      );
    cb_formula01 .addEventListener(MouseEvent .CLICK ,action_cbFormula01);
    cb_formula02 .addEventListener(MouseEvent .CLICK ,action_cbFormula02);
    cb_grid      .addEventListener(MouseEvent .CLICK ,action_cbGrid     );
    txt_n        .addEventListener(Event      .CHANGE,action_txtN       );
    txt_s        .addEventListener(Event      .CHANGE,action_txtS       );
    txt_r1       .addEventListener(Event      .CHANGE,actionTxtR1       );
    txt_r2       .addEventListener(Event      .CHANGE,actionTxtR2       );

    txt_v10      .addEventListener(Event      .CHANGE,actionTxt_v1      );
    txt_v11      .addEventListener(Event      .CHANGE,actionTxt_v1      );
    txt_v12      .addEventListener(Event      .CHANGE,actionTxt_v1      );
    txt_v13      .addEventListener(Event      .CHANGE,actionTxt_v1      );

    txt_v20      .addEventListener(Event      .CHANGE,actionTxt_v2      );
    txt_v21      .addEventListener(Event      .CHANGE,actionTxt_v2      );
    txt_v22      .addEventListener(Event      .CHANGE,actionTxt_v2      );
    txt_v23      .addEventListener(Event      .CHANGE,actionTxt_v2      );

    txt_v1x      .addEventListener(Event      .CHANGE,actionTxt_v1x     );
    txt_v2x      .addEventListener(Event      .CHANGE,actionTxt_v2x     );

    sb_task     .addEventListener(ScrollEvent .SCROLL,action_sbTask     );
    pb_task1    .addEventListener(MouseEvent  .CLICK ,action_pbTask1    );
    pb_task2    .addEventListener(MouseEvent  .CLICK ,action_pbTask2    );
    pb_task3    .addEventListener(MouseEvent  .CLICK ,action_pbTask3    );
    pb_task4    .addEventListener(MouseEvent  .CLICK ,action_pbTask4    );
  }
  /*-------------------------------------------------------------------------------------------------- action ---*/

  private function action_pbTask1(evt:Event) {
    if(nTask==1) {
      nTask = 0;
      txt_task.text = sTask0; }
    else {
      nTask = 1;
      txt_task.text = sTask1;
    }
    draw_lineT(nTask);  
  }
  private function action_pbTask2(evt:Event) {
     if(nTask==2) {
      nTask = 0;
      txt_task.text = sTask0; }
    else {
      nTask = 2;
      txt_task.text = sTask2;
    }
    draw_lineT(nTask);   
  }
  private function action_pbTask3(evt:Event) {
     if(nTask==3) {
      nTask = 0;
      txt_task.text = sTask0; }
    else {
      nTask = 3;
      txt_task.text = sTask3;
    }
    draw_lineT(nTask);   
  }
  private function action_pbTask4(evt:Event) {
     if(nTask==4) {
      nTask = 0;
      txt_task.text = sTask0; }
    else {
      nTask = 4;
      txt_task.text = sTask4;
    }
    draw_lineT(nTask);   
  }
  private function action_sbTask(evt:ScrollEvent) {
    var nPos = Math.round(sb_task.scrollPosition);
    if(nPos >=6667) {
      txt_task.text = sTask3; }
    else if(nPos >= 3333) {
      txt_task.text = sTask2; }
    else {
      txt_task.text = sTask1;
    }
  }
  private function actionTxt_v1x (evt:Event) {
    actTxt_v1x();
  }
  private function actionTxt_v2x (evt:Event) {
    actTxt_v2x();
  }
  private function actTxt_v1x() {   //if(txt_v1x.text = "" || txt_v1x.text = " ") {txt_v1x.
    change_tx(txt_v1x.text);
    fCv1x     .infixPostfix (sParam);  
    compute_s1x();
    draw_graphV();
    g_fill1.clear();
    g_fill2.clear();
    if(txt_v1x.text == "") {g_func1.clear();}
    if(txt_v2x.text == "") {g_func2.clear();}
  }
  private function actTxt_v2x() {
    change_tx(txt_v2x.text);
    fCv2x     .infixPostfix (sParam); 
    compute_s2x();
    draw_graphV();
    g_fill1.clear();
    g_fill2.clear();
    if(txt_v2x.text == "") {g_func2.clear();}
    if(txt_v1x.text == "") {g_func1.clear();}
  }
  private function actionTxt_v1(evt:Event) {
    actTxt_v1();
  }
  private function actionTxt_v2(evt:Event) {
    actTxt_v2();
  }
  private function actTxt_v1() {
    var s1 :String = "";
    var s10:String = txt_v10.text;
    var s11:String = txt_v11.text;
    var s12:String = txt_v12.text;
    var s13:String = txt_v13.text;

    if(s13 != "" && s13!="0") {
      s1 = s1+s13 + "*1/4t^4";
    }
    if(s12 != "" && s12!="0") {
      if(s1 != "") {
        s1 = s1+ "+" + s12 + "*1/3t^3"; }
      else {
         s1 = s12 + "*1/3t^3";
      }
    }
    if(s11 != "" && s11!="0") {
      if(s1 != "") {
        s1 = s1+ "+" + s11 + "*1/2t^2"; }
      else {
        s1 = s11 + "*1/2t^2";
      }
    }
    if(s10 != "" && s10!="0") {
      if(s1 != "") {
        s1 = s1+ "+" + s10 + "*t"; }
      else {
        s1 = s10 + "*t";
      }
    }
    rx1 = s1;
    compute_sv();
  }
   private function actTxt_v2() {
    var s2 :String = ""          ;
    var s20:String = txt_v20.text;
    var s21:String = txt_v21.text;
    var s22:String = txt_v22.text;
    var s23:String = txt_v23.text;

    if(s23 != "" && s23!="0") {
      s2 = s2+s23 + "*1/4t^4";
    }
    if(s22 != "" && s22!="0") {
      if(s2 != "") {
        s2 = s2+ "+" + s22 + "*1/3t^3";}
      else {
        s2 = s22 + "*1/3t^3";
      }
    }
    if(s21 != "" && s21!="0") {
      if(s2 != "") {
        s2 = s2+ "+" + s21 + "*1/2t^2";  }
      else {
        s2 = s21 + "*1/2t^2";
      }
    }
    if(s20 != "" && s20!="0") {
      if(s2 != "") {
        s2 = s2+ "+" + s20 + "*t"; }
      else {
        s2 = s20 + "*t";
      }
    }
    rx2 = s2;
    compute_sv();
  }

  private function actionTxt_v11(evt:Event) {
    var s:String = txt_v11.text;
    if(s == "") {
      s = "0";
    }
    sv1Tot = txt_v13.text + "t^3+" +txt_v12.text + "t^2+" + s + "t+" + txt_v10.text;
    compute_sv();
  }
  private function actionTxt_v12(evt:Event) {
    var s:String = txt_v12.text;
    if(s == "") {
      s = "0";
    }
    sv1Tot = txt_v13.text + "t^3+" +s + "t^2+" + txt_v11.text + "t+" + txt_v10.text;
    compute_sv();
  }
  private function actionTxt_v13(evt:Event) {
    var s:String = txt_v13.text;
    if(s == "") {
      s = "0";
    }
    sv1Tot = s + "t^3+" +txt_v12.text + "t^2+" + txt_v11.text + "t+" + txt_v10.text;
    compute_sv();
  }

  private function actionTxt_v20(evt:Event) {
    var s:String = txt_v20.text;
    if(s == "") {
      s = "0";
    }
    sv2Tot = txt_v23.text + "t^3+" +txt_v22.text + "t^2+" + txt_v21.text + "t+" + s;
    compute_sv();
  }
   private function actionTxt_v21(evt:Event) {
    var s:String = txt_v21.text;
    if(s == "") {
      s = "0";
    }
    sv2Tot = txt_v23.text + "t^3+" +txt_v22.text + "t^2+" + s + "t+" + txt_v20.text;
    compute_sv();
  }
  private function actionTxt_v22(evt:Event) {
    var s:String = txt_v22.text;
    if(s == "") {
      s = "0";
    }
    sv2Tot = txt_v23.text + "t^3+" +s + "t^2+" + txt_v21.text + "t+" + txt_v20.text;
    compute_sv();
  }
  private function actionTxt_v23(evt:Event) {
    var s:String = txt_v23.text;
    if(s == "") {
      s = "0";
    }
    sv2Tot = s + "t^3+" +txt_v22.text + "t^2+" + txt_v21.text + "t+" + txt_v20.text;
     compute_sv();
  }
  private function compute_sv() {
    change_tx(rx1);  rx1 = sParam;
    change_tx(rx2);  rx2 = sParam;
    if(rx1 != "") {
      fCDx1 .infixPostfix (rx1);
      tV1 = fCDx1.get_derivate_function_symbolic(); 
      fCvx1.infixPostfix(tV1);
      if(!isNaN(fCDx1.postfixValue(1))) {
        draw_graphV();
      }
    }

    if(rx2 != "") {
      fCDx2 .infixPostfix (rx2);
      tV2 = fCDx2.get_derivate_function_symbolic();
      fCvx2.infixPostfix(tV2);
      if(!isNaN(fCDx2.postfixValue(1))) {
        draw_graphV();
      }
    }
    g_fill1.clear();  g_fill2.clear();
  }
  private function actionTxtR1(evt:Event) { 
    act_TxtR1();
  }
  private function act_TxtR1() {
    var s :String = txt_r1.text;
    if(s != "") {
      change_tx(s);
      rx1 = sParam; }
    else {
      rx1 = "";
    }
    if(rx1 != "") {
      fCDx1 .infixPostfix (rx1);
      tV1 = fCDx1.get_derivate_function_symbolic();
      fCvx1.infixPostfix(tV1);
      if(!isNaN(fCDx1.postfixValue(1))) {
        draw_graphV();
      }
    }
    g_fill1.clear();  g_fill2.clear();
  }

  private function actionTxtR2(evt:Event) { 
    act_TxtR2();
  }
  private function act_TxtR2() {
    var s :String = txt_r2.text;
    if(s != "") {
      change_tx(s);
      rx2 = sParam; }
    else {
      rx2 = "";
    }
    if(rx2 != "") {
      fCDx2 .infixPostfix (rx2);
      tV2 = fCDx2.get_derivate_function_symbolic();
      fCvx2.infixPostfix(tV2);
      if(!isNaN(fCDx2.postfixValue(1))) {
        draw_graphV();
      }
    }
    g_fill1.clear();  g_fill2.clear();
  }
  private function draw_graphV() {
    computeMaxV ();
    draw_graphV1();
  }

  private function computeMaxV() {
    var t1:Number = 0;
    nVmax = 0;
    while(t1<=tMax) {
      nV1 = v1x[Math.round(nNumPrSec*t1)]; //fCv1x.postfixValue(t1);
      if(nV1 > nVmax) {nVmax = nV1;}
      nV2 = v2x[Math.round(nNumPrSec*t1)]; //trace(Math.round(nNumPrSec*t1)); //fCv2x.postfixValue(t1);
      if(nV2 > nVmax) {nVmax = nV2;}
      t1 = t1 + 0.01;  
    }
    txt_vMax.text = (Math.round(nVmax*100)/100).toString();   //trace(v2x);
  }
  private function draw_graphV1() {
    g_func1.clear();  g_func1.lineStyle(0.5,nColGraph,1);
    g_func2.clear();  g_func2.lineStyle(0.5,nColGraph,1);
    g_func1.moveTo(x1Origin,y1Origin); 
    g_func2.moveTo(x2Origin,y2Origin);
    var t1 :Number = 0;
    while(t1<=tMax) {
      nV1 = v1x[Math.round(nNumPrSec*t1)];  if(isNaN(nV1)) {nV1 = 0;} if(nV1<-Math.pow(10,6)) {nV1=-Math.pow(10,6);}  //fCvx1.postfixValue(t1);
      nV2 = v2x[Math.round(nNumPrSec*t1)];  if(isNaN(nV2)) {nV2 = 0;} if(nV2<-Math.pow(10,6)) {nV2=-Math.pow(10,6);} //fCvx2.postfixValue(t1);
      g_func1.lineTo(x1Origin+t1*nLenGraphX/tMax,y1Origin-nV1*nLenGraphY/nVmax);
      g_func2.lineTo(x2Origin+t1*nLenGraphX/tMax,y2Origin-nV2*nLenGraphY/nVmax);
      t1 = t1 + 0.02;
    }
  }

/*
  private function computeMaxV() {
    var t1:Number = 0;
    nVmax = 0;
    while(t1<=tMax) {
      nV1 = fCvx1.postfixValue(t1);
      if(nV1 > nVmax) {nVmax = nV1;}
      nV2 = fCvx2.postfixValue(t1);
      if(nV2 > nVmax) {nVmax = nV2;}
      t1 = t1 + 0.01;
    }
    txt_vMax.text = (Math.round(nVmax*100)/100).toString();
  }
*/
/*
  private function draw_graphV1() {
    g_func1.clear();  g_func1.lineStyle(0.5,nColGraph,1);
    g_func2.clear();  g_func2.lineStyle(0.5,nColGraph,1);
    g_func1.moveTo(x1Origin,y1Origin); 
    g_func2.moveTo(x2Origin,y2Origin);
    var t1 :Number = 0;
    while(t1<=tMax) {
      nV1 = fCvx1.postfixValue(t1);
      nV2 = fCvx2.postfixValue(t1);
      g_func1.lineTo(x1Origin+t1*nLenGraphX/tMax,y1Origin-nV1*nLenGraphY/nVmax);
      g_func2.lineTo(x2Origin+t1*nLenGraphX/tMax,y2Origin-nV2*nLenGraphY/nVmax);
      t1 = t1 + 0.02;
    }
  }
*/
  private function draw_vCurve() {
  }
  private function action_cbCar1(evt:MouseEvent)  {
    var b    :Boolean   = evt.target.selected;
    mc_car1  .visible   = b;
  }
  private function action_cbCar2(evt:MouseEvent)  {
    var b    :Boolean   = evt.target.selected;
    mc_car2  .visible   = b;
  }
  private function action_cbLine1(evt:MouseEvent) {
    var b    :Boolean  = evt.target.selected;
    mc_line1 .visible  = b;
  }
  private function action_cbLineM(evt:MouseEvent) {
    var b    :Boolean  = evt.target.selected;
    mc_lineM .visible  = b;
  }
  private function action_cbVT(evt:MouseEvent) {
    var b    :Boolean  =  evt.target.selected;
    mc_graphVT .visible  =  b;
    cb_vt1   .enabled  =  b;   cb_vt1.selected =  b;  mc_graph1 .visible =  b;   
    cb_vt2   .enabled  =  b;   cb_vt2.selected =  b;  mc_graph2 .visible =  b;   
    if(b) {
      cb_st1 .enabled  = !b;   cb_st1.selected = !b;  mc_st1    .visible = !b;
      cb_st2 .enabled  = !b;   cb_st2.selected = !b;  mc_st2    .visible = !b;
      cb_st  .selected = !b;   mc_st.visible   = !b;  mc_graphST.visible = !b;
    }
  }
  private function action_cbST(evt:MouseEvent) {
    var b    :Boolean  =  evt.target.selected;
    mc_graphST .visible = b;
    mc_st    .visible  =  b;
    cb_st1   .enabled  =  b;   cb_st1.selected =  b;  mc_st1.visible =  b; 
    cb_st2   .enabled  =  b;   cb_st2.selected =  b;  mc_st2.visible =  b;
    txt_ss   .text     = "s1 - s2";
    if(b) {
      cb_vt1 .enabled  = !b;   cb_vt1    .selected = !b;  mc_graph1.visible = !b;
      cb_vt2 .enabled  = !b;   cb_vt2    .selected = !b;  mc_graph2.visible = !b;
      cb_vt  .selected = !b;   mc_graphVT.visible  = !b;
    }
  }
  private function action_cbVT1(evt:MouseEvent)  {
    var b    :Boolean   = evt.target.selected;
    mc_graph1.visible   = b;
    mc_grid1  .visible  = b && cb_grid.selected;
  }
   private function action_cbVT2(evt:MouseEvent)  {
    var b    :Boolean   = evt.target.selected;
    mc_graph2.visible   = b;
    mc_grid2 .visible   = b && cb_grid.selected;
  }
  private function action_cbST1(evt:MouseEvent)  {
    var b    :Boolean   = evt.target.selected;
    mc_st1   .visible   = b;
    if(b) {
      if(cb_st2.selected) {
        txt_ss.text = "s1 - s2";}
      else {
        txt_ss.text = "s1";
      }}
    else {
      if(cb_st2.selected) {
        txt_ss.text = "s2";}
      else {
        txt_ss.text = "";
      }
    }
  }
  private function action_cbST2(evt:MouseEvent)  {
    var b    :Boolean   = evt.target.selected;
    mc_st2   .visible   = b;
    if(b) {
      if(cb_st1.selected) {
        txt_ss.text = "s1 - s2";}
      else {
        txt_ss.text = "s2";
      }}
    else {
      if(cb_st1.selected) {
        txt_ss.text = "s1";}
      else {
        txt_ss.text = "";
      }
    }
  }
  private function action_cbFormula01(evt:MouseEvent) {
    var b :Boolean       = evt.target.selected; 
    mc_formula01.visible =  b; formula_01.gotoAndStop(1);
    mc_simCar   .visible = !b;
    if(b) {
      mc_formula02.visible  = false;
      cb_formula02.selected = false;
    }
  }
  private function action_cbFormula02(evt:MouseEvent) {
    var b :Boolean       = evt.target.selected; 
    mc_formula02.visible =  b; formula_02.gotoAndStop(1);
    if(b) {
      mc_formula01.visible  = false;
      cb_formula01.selected = false;
      mc_simCar   .visible  = true ;
    }
  }
  private function action_cbGrid(evt:MouseEvent) {
    var b  :Boolean = evt.target.selected; 
    mc_grid1.visible =  b && cb_vt1.selected;
    mc_grid2.visible =  b && cb_vt2.selected;
  }
  private function action_txtN(evt:Event) {  
    act_txtN();
  }
  private function act_txtN() {
    var s:String = txt_n.text;
    var nRTmp :Number = 0;
    var nVTmp :Number = 0;
    if(s != "") {
      nT = Number(s);
      t1 = 4.0/nT;
      tA = new Array(nT+2);
      vA = new Array(nT+2);
      sA = new Array(nT+2);
      for(var i:int = 0; i<=nT; i++) {
        tA[i] = i*t1;
        nRTmp = fCDx1.postfixValue(i);
        nVTmp  = fCvx1.postfixValue(i);
        vA[i] = nVTmp*nLenGraphY/nVmax;
        sA[i] = nRTmp;
      }
      tA[nT+1] = tA[nT];
      vA[nT+1] = vA[nT];
      draw_lineGraph2();
    }
  }
  private function action_txtS(evt:Event) {  
    var s :String = txt_s.text;
    if(s != "") {
      change_tx(s);
      fC1.infixPostfix(sParam);
    }
  }
  /*----------------------------------------------------------------------------------------------- change_tx ---*/

  public function change_tx(s) {

    var sS   :String = s;
    var sLen :Number = sS.length;
    var sA   :Array  = new Array();
    for(var i=0;i<sLen;i++) {
      sA[i] = sS.charAt(i);
    }
    for(var i=0;i<sLen;i++) {
      if(sA[i] == "t") {
        sA[i] = "x";
      }
    }
    sParam ="";
    for(var i=0;i<sLen;i++) {
      sParam = sParam + sA[i];
    }
  }

  private function move_car2(t:Number) :Number {  
    return 0;
  }
  private function draw_lineGraph2() {
    var d:Number = 200/nT;
    g_gLine1.clear();
    g_gLine2.clear();
    g_gLine1.lineStyle(0.5,0xAAAAAA,1);
    g_gLine2.lineStyle(0.5,0xAAAAAA,1);
    for(var i:int=1;i<=nT;i++) {
      g_gLine2.moveTo(x2Origin+i    *d,y2Origin            ); g_gLine2.lineTo(x2Origin+i*d,y2Origin-0.5*i    *d);
      g_gLine2.moveTo(x2Origin+(i-1)*d,y2Origin-0.5*(i-1)*d); g_gLine2.lineTo(x2Origin+i*d,y2Origin-0.5*(i-1)*d);
    }
    g_gLine1.moveTo(x1Origin+nT    *d,y1Origin            ); g_gLine1.lineTo(x1Origin+nT*d,y1Origin-0.5*nT    *d);
  }
  private function draw_graph (t:Number) {
    if(txt_v1x.text != "" || txt_v2x.text != "") {
      draw_graph1(t);
      draw_graph2(t);
      draw_st    (t);
    }
  }
  private function draw_area(t:Number) {
    if(txt_v1x.text != "" || txt_v2x.text != "") {
      draw_area1(t);
      draw_area2(t);
    }
  }

  private function draw_area1(t:Number) {
    g_fill1.clear();  g_fill1.lineStyle(0.5,0xAAAAAA,1);
    g_fill1.moveTo(x1Origin,y1Origin);
    g_fill1.beginFill(0xBBBBBB,1.0);
    var tTmp :Number = 0;
    var nTmp :Number = 0;
    nTmp = fCv1x.postfixValue(t);      if(isNaN(nTmp)) {nTmp = 0;}
    while(tTmp<=t) {
      nTmp = fCv1x.postfixValue(tTmp);   if(isNaN(nTmp)) {nTmp = 0;}
      g_fill1.lineTo(x1Origin+50*tTmp,y1Origin); g_fill1.lineTo(x1Origin+50*tTmp,y1Origin-nTmp*nLenGraphY/nVmax);
      tTmp = tTmp + 0.01;
    }
    g_fill1.lineTo(x1Origin+50*t,y1Origin); g_fill1.lineTo(x1Origin,y1Origin);   
    g_fill1.endFill();
  }

  private function draw_area2(t:Number) {
    g_fill2.clear();  g_fill2.lineStyle(0.5,0xAAAAAA,1);
    g_fill2.moveTo(x2Origin,y2Origin);
    g_fill2.beginFill(0xBBBBBB,1.0);
    var tTmp :Number = 0;
    var nTmp :Number = 0;
    nTmp = fCv2x.postfixValue(t);      if(isNaN(nTmp)) {nTmp = 0;}
    while(tTmp<=t) {
      nTmp = fCv2x.postfixValue(tTmp);  if(isNaN(nTmp)) {nTmp = 0;}
      g_fill2.lineTo(x2Origin+50*tTmp,y2Origin); g_fill2.lineTo(x2Origin+50*tTmp,y2Origin-nTmp*nLenGraphY/nVmax);
      tTmp = tTmp + 0.01;
    }
    g_fill2.lineTo(x2Origin+50*t,y2Origin); g_fill2.lineTo(x2Origin,y2Origin); 
    g_fill2.endFill();
  }

/*
  private function draw_area1(t:Number) {
    g_fill1.clear();  g_fill1.lineStyle(0.5,0xAAAAAA,1);
    g_fill1.moveTo(x1Origin,y1Origin);
    g_fill1.beginFill(0xBBBBBB,1.0);
    var tTmp :Number = 0;
    var nTmp :Number = 0;
    nTmp = fCvx1.postfixValue(t);
    while(tTmp<=t) {
      nTmp = fCvx1.postfixValue(tTmp);
      g_fill1.lineTo(x1Origin+50*tTmp,y1Origin); g_fill1.lineTo(x1Origin+50*tTmp,y1Origin-nTmp*nLenGraphY/nVmax);
      tTmp = tTmp + 0.01;
    }
    g_fill1.lineTo(x1Origin+50*t,y1Origin); g_fill1.lineTo(x1Origin,y1Origin);   
    g_fill1.endFill();
  }

  private function draw_area2(t:Number) {
    g_fill2.clear();  g_fill2.lineStyle(0.5,0xAAAAAA,1);
    g_fill2.moveTo(x2Origin,y2Origin);
    g_fill2.beginFill(0xBBBBBB,1.0);
    var tTmp :Number = 0;
    var nTmp :Number = 0;
    nTmp = fCvx2.postfixValue(t);
    while(tTmp<=t) {
      nTmp = fCvx2.postfixValue(tTmp);
      g_fill2.lineTo(x2Origin+50*tTmp,y2Origin); g_fill2.lineTo(x2Origin+50*tTmp,y2Origin-nTmp*nLenGraphY/nVmax);
      tTmp = tTmp + 0.01;
    }
    g_fill2.lineTo(x2Origin+50*t,y2Origin); g_fill2.lineTo(x2Origin,y2Origin); 
    g_fill2.endFill();
  }
*/

  private function draw_graph1(t:Number) {
    var nTmp:Number = fCv1x.postfixValue(t);       if(isNaN(nTmp)) {nTmp = 0;}
    g_fill1.clear();  g_fill1.lineStyle(0.5,0xAAAAAA,1);
    g_fill1.moveTo(x1Origin+50*t,y1Origin); g_fill1.lineTo(x1Origin+50*t,y1Origin-nTmp*nLenGraphY/nVmax);
  }
   private function draw_graph2(t:Number) {
    var nTmp:Number = fCv2x.postfixValue(t);       if(isNaN(nTmp)) {nTmp = 0;}
    g_fill2.clear();  g_fill2.lineStyle(0.5,0xAAAAAA,1);
    g_fill2.moveTo(x2Origin+50*t,y2Origin); g_fill2.lineTo(x2Origin+50*t,y2Origin-nTmp*nLenGraphY/nVmax);
  }

/*
  private function draw_graph1(t:Number) {
    var nTmp:Number = fCvx1.postfixValue(t);
    g_fill1.clear();  g_fill1.lineStyle(0.5,0xAAAAAA,1);
    g_fill1.moveTo(x1Origin+50*t,y1Origin); g_fill1.lineTo(x1Origin+50*t,y1Origin-nTmp*nLenGraphY/nVmax);
  }
   private function draw_graph2(t:Number) {
    var nTmp:Number = fCvx2.postfixValue(t);
    g_fill2.clear();  g_fill2.lineStyle(0.5,0xAAAAAA,1);
    g_fill2.moveTo(x2Origin+50*t,y2Origin); g_fill2.lineTo(x2Origin+50*t,y2Origin-nTmp*nLenGraphY/nVmax);
  }
*/
  private function draw_st(t:Number) {
  //draw_st1(t);
  //draw_st2(t);
  }
  private function draw_st1(t:Number) {
    g_st1.clear();  g_st1.lineStyle(0.5,0xAAAAFF,1);
    g_st1.moveTo(xSTorigin,ySTorigin);
    var tTmp = 0;
    while(tTmp<=50*t) {
      g_st1.lineTo(xSTorigin+tTmp,ySTorigin-3/10*fCDx1.postfixValue(tTmp/50));
      tTmp = tTmp + 1;
    }
  }
  private function draw_st2(t:Number) {
    g_st2  .clear();  g_st2  .lineStyle(0.5,0xFFAAAA,1); g_st2.moveTo(xSTorigin,ySTorigin);
    var tTmp:Number = 0;
    var t2  :int    = 0;
    while(tTmp<=50*t) {
      g_st2.lineTo(xSTorigin+tTmp,ySTorigin-3/10*fCDx2.postfixValue(tTmp/50));
      tTmp = tTmp + 1;
    }
  }
  /*------------------------------------------------------------------------------------------------ move_car ---*/
/*
  public function move_car(t:Number,n:int) {
    if(n == 4) {bSet = false};
    tTime = t;
    if((n==0 || n==2 || n==3) && t <= 4 && car1.x < xCarE && car2.x < xCarE) {
      bArea = true;
      car1.x = xCarS + fCDx1.postfixValue(t);
      car2.x = xCarS + fCDx2.postfixValue(t);
      draw_graph(t);
      txt_tMax.text = "t  = " + t.toString(); }
    else if((n==1 || car1.x >= xCarE || car2.x >= xCarE) && bArea) {
      bArea = false;
      draw_area(t);}
    else if(n==4) {
      bArea = true;
      car1.x = xCarS + fCDx1.postfixValue(t);
      car2.x = xCarS + fCDx2.postfixValue(t);
      draw_graph(t);
      txt_tMax.text = "t  = 0";
    }
    if(car1.x >= xCarE || car2.x >= xCarE) {
      if(!bSet) {
        bSet = true;
        var h:String; 
        h = (t).toString();
        txt_tMax.text = "t  = " + h;
      }
    }
    init_line1(car2.x);
  }
*/

  public function move_car(t:Number,n:int) {
    if(n == 4) {bSet = false};
    tTime = t;
    if((n==0 || n==2 || n==3) && t <= 4 && car1.x < xCarE && car2.x < xCarE) {
      bArea = true;
      car1.x = xCarS + s1x[nNumPrSec*t]; //fCDx1.postfixValue(t);
      car2.x = xCarS + s2x[nNumPrSec*t]; //fCDx2.postfixValue(t);
      draw_graph(t);
      txt_tMax.text = "t  = " + t.toString(); }
    else if(t>=tMax) {
      bArea = false;
      draw_area(tMax);}
    else if((n==1 || car1.x >= xCarE || car2.x >= xCarE) && bArea) {
      bArea = false;
      draw_area(t);}
    else if(n==4) {
      bArea = true;
      car1.x = xCarS + s1x[nNumPrSec*t]; // fCDx1.postfixValue(t);
      car2.x = xCarS + s2x[nNumPrSec*t]; //fCDx2.postfixValue(t);
      draw_graph(t);
      txt_tMax.text = "t  = 0";
    }
    if(car1.x >= xCarE || car2.x >= xCarE) {
      if(!bSet) {
        bSet = true;
        var h:String; 
        h = (t).toString();
        txt_tMax.text = "t  = " + h;
      }
    }
    init_line1(car2.x);
  }
  /*-------------------------------------------------------------------------------------------------------------*/
}}
/*===============================================================================================================*/