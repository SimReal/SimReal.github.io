/*===================================================================================================== LMS_Obj ===*/

function LMS_Obj()  {

/*------------------------------------------------------------------------------------------------------ import ---*/

import flash .display  .Stage              ;
import flash .display  .MovieClip          ;
import flash .display  .Sprite             ;
import flash .text     .TextField          ;
import flash .text     .TextFormat         ;
import flash .text     .TextFieldType      ;

import flash .events   .Event              ;
import flash .events   .MouseEvent         ;
import flash .events   .KeyboardEvent      ;

import fl    .events   .ScrollEvent        ;

import fl    .controls .ScrollBar          ;
import fl    .controls .ScrollBarDirection ;
import fl    .controls .CheckBox           ;
import fl    .controls .Button             ;
import fl    .controls .Label              ;
import fl    .controls .RadioButton        ;
import fl    .controls .RadioButtonGroup   ;

/*=============================================================================================== class LMS_Obj ===*/

public class LMS_Obj {

  private var sim            :Object        ;                        // sim
  private var st             :Stage         ;

  private var owner          :Object        ;                        // owner  (LMS)
  private var mc             :Sprite        ;

  private var mc_background  :Sprite        ;
  private var mc_obj         :Sprite        ;
  private var mc_LMS         :Sprite        ;
  private var mc_LMS_point   :Sprite        ;
  private var mc_LMS_graph   :Sprite        ;
  private var mc_LMS_pointArray:Array       ;
  private var mc_LMS_graphArray:Array       ;
  private var mc_LMS_manual  :Sprite        ;
  private var mc_LMS_table   :Sprite        ;

  private var lmsBackground  :LMS_Background;

  private var lmsTable       :LMSTable      ;

  private var pointTab       :PointTab      ;

  //private var pointTabX      :Array         ;
  //private var pointTabY      :Array         ;
  //private var nPointTab      :Number  = 0   ;

  private var format         :TextFormat    ;

  private var txt_funcT      :TextField     ;
  private var txt_errorT     :TextField     ;
  private var txt_func       :TextField_U   ;
  private var txt_error      :TextField_U   ;

  private var txt_degree     :TextField_U   ;
  private var txt_bSin       :TextField_U   ;
  private var sb_degree      :ScrollBar_U   ;
  private var cb_ax          :CheckBox_U    ;                        //  y = ax

  private var cb_importPrev  :CheckBox_U    ;
  private var pb_transfer    :Button        ;                        // transfer data from simulation
  private var pb_funcIn      :Button_U      ;                        // transfer data from current function or table
  private var pb_funcOut     :Button_U      ;                        // transfer function out to f5 in graph2DFunction
  private var pb_clearPoint  :Button_U      ;
  private var pb_clearGraph  :Button_U      ;
  private var pb_compute     :Button_U      ;
  private var cb_table       :CheckBox_U    ;
  private var cb_autoScale   :CheckBox_U    ;
  private var cb_xyAxis      :CheckBox_U    ;
  private var cb_quad1       :CheckBox_U    ;
  private var cb_quad14      :CheckBox_U    ;
  
  private var bAutoScale     :Boolean       = false;

  private var rbMAtxt        :Array         = ["","Poly",
                                                  "Pow           y=ax^b",
                                                  "Exp 1         y=ab^x",
                                                  "Exp 2         y=ae^(bx)",
                                                  "Ln              y=ln(ax)",
                                                  "sin             y=a*sin(bx)"];
  private var sFuncType      :Array         = ["","Polynomfunksjon (Grad: Bruk scrollbar) \n" +
                                                  "Grad 0: Gjennomsnitt av y-verdier \n" +
                                                  "Grad 1: Rett linje",
                                                  "Potensfunksjon","Generell eksponentialfunksjon","Eksponentialfunksjon","Logaritmefunksjon"];
  private var rbGroupMA      :RadioButtonGroup ;
  private var rb_manual      :RadioButton_U ;
  private var rb_auto        :RadioButton_U ;
  private var txt_dec        :TextField_U;

  private var rbGroupFT      :RadioButtonGroup;
  private var rb_funcType    :Array         ;

  //private var rb_poly        :RadioButton   ;
  //private var rb_pow         :RadioButton   ;
  //private var rb_exp         :RadioButton   ;
  //private var rb_ln          :RadioButton   ;

  private var nFuncType      :Number    = 1;
  private var nDegreePoly    :Number    = 0;

  private var nRB            :Number    = 6       ;

  private var x0Graph        :Number   = 165;
  private var y0Graph        :Number   = 156;

  private var xMinGraph      :Number   = 15 ;
  private var yMinGraph      :Number   = 31 ;
  private var xMaxGraph      :Number   = 315;
  private var yMaxGraph      :Number   = 281;

  private var x1             :Number   = 500;
  private var y1             :Number   = 20 ;
  private var x2             :Number   = 725;
  private var y2             :Number   = 395;

  private var x0             :Number   = 165;
  private var y0             :Number   = 156;

  private var x00            :Number = 165;
  private var y00            :Number = 156;
  private var x0quad1        :Number = 40 ;
  private var y0quad1        :Number = 256;
  private var x0quad14       :Number    = 40      ;                  // origo  quad14
  private var y0quad14       :Number    = 156     ;   
  
  private var xScale         :Number  = 1/25;
  private var yScale         :Number  = 1/25;

  private var color_txt         :Number    = 0xD3D3FF;

  private var bLMS           :Boolean = false;
  private var nMemCurrentX   :Number  = 1;
  private var nMemCurrentY   :Number  = 1;
  private var nMemCurrentProd:Number  = 1    ;     // current graphArray

  /*--------------------------------------------------------------------------------------------------- LMS_Obj ---*/

  public function LMS_Obj(sim:Object,owner:Object,mc:Sprite) {
    this.sim   = sim  ;    //trace(sim.get_pointTabX());trace(sim.get_pointTabY());trace("");
    this.owner = owner;
    this.mc    = mc   ;
    this.st    = sim.get_stage();
    //pointTabX  = new Array();
    //pointTabY  = new Array();
    //nPointTab  = 0    ;
    init()            ;
  }
  /*------------------------------------------------------------------------------------------------------ init ---*/

  private function init() {
    init_mc         ();
    init_background ();
    init_pointTab   ();
    init_obj        ();
    init_listener   ();
    init_lmsTable   ();
    var xA :Array   = [1, 1.7, 2, 3  , 4  , 4.2, 5  ]              ;                        // modelling array  pointTabX
    var yA :Array   = [1, 1.5, 2, 2.5, 2.9, 3.8, 4.7]           ; 
    sim.set_pointTabXY(xA,yA,7);
  }
  /*--------------------------------------------------------------------------------------------------- init_mc ---*/

  private function init_mc() {

    mc_background = new Sprite();
    mc_obj        = new Sprite();
    mc_LMS        = new Sprite();
    mc_LMS_point  = new Sprite();
    mc_LMS_graph  = new Sprite();
    mc_LMS_pointArray = new Array(10);
    mc_LMS_graphArray = new Array(10);
    for(var i=1;i<=10;i++) {
      mc_LMS_pointArray[i] = new Array(10);
      mc_LMS_graphArray[i] = new Array(10);
      for(var j=1;j<=10;j++) {
        mc_LMS_pointArray[i][j] = new Sprite();   mc_LMS_pointArray[i][j].visible = false;
        mc_LMS_graphArray[i][j] = new Sprite();   mc_LMS_graphArray[i][j].visible = false;
        mc_LMS_point.addChild(mc_LMS_pointArray[i][j]);
        mc_LMS_graph.addChild(mc_LMS_graphArray[i][j]);
      }
    }
    mc_LMS_pointArray[1][1].visible = true;
    mc_LMS_graphArray[1][1].visible = true;
    /*for(var i=1;i<=100;i++) {
      mc_LMS_pointArray[i] = new Sprite();
      mc_LMS_graphArray[i] = new Sprite();
      mc_LMS_point.addChild(mc_LMS_pointArray[i]);
      mc_LMS_graph.addChild(mc_LMS_graphArray[i]);
    }
    */
    mc_LMS_manual = new Sprite();
    mc_LMS_table  = new Sprite();

    //mc             .addChild(mc_LMS_table );
    mc             .addChild(mc_background);
    mc             .addChild(mc_obj       );
    mc             .addChild(mc_LMS       );
    mc             .addChild(mc_LMS_point );
    mc             .addChild(mc_LMS_graph );
    mc             .addChild(mc_LMS_manual);
    mc             .addChild(mc_LMS_table );
    mc             .visible = false;
  }
  /*--------------------------------------------------------------------------------------------- init_pointTab ---*/

  private function init_pointTab() {
    pointTab = new PointTab(sim,this,mc_LMS,mc_LMS_point,mc_LMS_pointArray,mc_LMS_graph,mc_LMS_graphArray,
                            xMinGraph,yMinGraph,xMaxGraph,yMaxGraph,
                            x0Graph,y0Graph,xScale,yScale);

//     pointTab = new PointTab(sim_000,this,sim.get_movieParent(),mc_point,mc_pointGraph,
//                            xMinGraph,yMinGraph,xMaxGraph,yMaxGraph,
//                            x0,y0,xScale,yScale);
  }
  /*------------------------------------------------------------------------------------------- init_background ---*/

  private function init_background() {
    lmsBackground = new LMS_Background(this,mc_background,x1,y1,x2,y2);
  }  
  /*--------------------------------------------------------------------------------------------- init_lmsTable ---*/

  private function init_lmsTable() {
    lmsTable = new LMSTable(this,mc_LMS_table);
  }
  /*-------------------------------------------------------------------------------------------------- init_obj ---*/

  private function init_obj() {
    
    var x0Rb     :int  = 505;
    var y0Rb     :int  = 280;
    var dyRb     :int  = 20 ;

    var x0TxtDegree :int  = 585;
    var y0TxtDegree :int  = 283;

    var x0SbDegree  :int  = 620;
    var y0SbDegree  :int  = 284;

    var x0Pb     :int  = 513;
    var y0Pb     :int  = 370;
    var dxPb     :int  = 106;

    format         = new TextFormat()                       ;       // format
    format          .font              = "Arial"            ;
    format          .size              = 11                 ;
    format          .indent            = 4                  ;

    txt_funcT        = new TextField()                   ;
    txt_funcT         .name              = "txt_func"          ; 
    txt_funcT         .x                 = 510; //x0TxtDegree          ;
    txt_funcT         .y                 = 25; //150; //y0TxtDegree           ;
    txt_funcT         .width             = 50                 ;
    txt_funcT         .height            = 20; //140                 ;
    txt_funcT         .defaultTextFormat = format             ; 
    txt_funcT         .text              = "Function"         ;
    txt_funcT         .selectable        = false               ;

    txt_func        = new TextField_U(this)                   ;
    txt_func         .name              = "txt_func"          ; 
    txt_func         .x                 = 510; //x0TxtDegree          ;
    txt_func         .y                 = 40; //30; //y0TxtDegree           ;
    txt_func         .width             = 205                 ;
    txt_func         .height            = 108; //118; //140                 ;
    txt_func         .border            = true               ;
    txt_func         .background        = true               ;
    txt_func         .backgroundColor   = color_txt          ;
    txt_func         .multiline         = true               ;
    txt_func         .wordWrap          = true               ;
    //txt_func         .restrict          = "01234"            ;
    //txt_num         .type              = TextFieldType.INPUT;
    txt_func         .defaultTextFormat = format             ; 
    txt_func         .text              = ""                 ;
    txt_func         .selectable        = true               ;
    txt_func         .set_toolTip(0,-2,mc_obj,"Funksjonsuttrykk (regfunksjon)");

    txt_error        = new TextField_U(this)                   ;
    txt_error         .name              = "txt_error"         ; 
    txt_error         .x                 = 510; //580; //510; //x0TxtDegree          ;
    txt_error         .y                 = 150; //y0TxtDegree    ;
    txt_error         .width             = 205; //135; //205                 ;
    txt_error         .height            = 20                 ;
    txt_error         .border            = true               ;
    txt_error         .background        = true               ;
    txt_error         .backgroundColor   = color_txt          ;
    txt_error         .multiline         = true               ;
    txt_error         .wordWrap          = true               ;
    //txt_func         .restrict          = "01234"            ;
    //txt_num         .type              = TextFieldType.INPUT;
    txt_error         .defaultTextFormat = format             ; 
    txt_error         .text              = "RMS Error"        ;
    txt_error         .selectable        = false              ;
    txt_error         .set_toolTip(0,1,mc_obj,"Kvadratroten av summen \n" +
                                               "av kvadratene av avvikene");

   
    cb_importPrev   = new CheckBox_U(this)                         ;       
    cb_importPrev          .name              = "cb_importPrev"    ;
    cb_importPrev          .label             = "Import Prev"      ;
    cb_importPrev          .x                 = x0SbDegree-5       ;
    cb_importPrev          .y                 = y0Rb-5*dyRb        ;
    cb_importPrev          .selected          = false              ;
    cb_importPrev          .enabled           = false              ;
    cb_importPrev          .set_toolTip(-4,1,mc_obj,"Import av manuelle tabelldata");


    cb_ax           = new CheckBox_U(this)                         ;       
    cb_ax            .name              = "cb_ax"    ;
    cb_ax            .label             = "y = ax"      ;
    cb_ax            .x                 = x0SbDegree-5       ;
    cb_ax            .y                 = y0SbDegree -3*dyRb        ;
    cb_ax            .selected          = false              ;
    //cb_ax            .enabled           = false              ;
    cb_ax            .set_toolTip(-21,0.5,mc_obj,"y = ax \n" +
                                               "Rett linje gjennom origo \n" +
                                               "forutsatt polynomgrad lik 1");

    rbGroupMA      = new RadioButtonGroup("MA");

    rb_manual   = new RadioButton_U(this)      ; 
    rb_manual    .name  = "rb_manal"  ;  
    rb_manual    .label = "Manual"   ;
    rb_manual    .group = rbGroupMA ;
    rb_manual    .x     = x0Rb + 75          ;
    rb_manual    .y     = y0Rb-4*dyRb;
    rb_manual    .set_toolTip(0,2,mc_obj,"Manuell innklikking av punkter i grafvindu \n" +
                                         "med automatisk overføring til tabeller");

    txt_dec        = new TextField_U(this)                     ;
    txt_dec         .name              = "txt_dec"          ; 
    txt_dec         .x                 = x0Rb + 175         ;
    txt_dec         .y                 = y0Rb-4*dyRb+2      ;
    txt_dec         .width             = 30                 ;
    txt_dec         .height            = 16                 ;
    txt_dec         .border            = true               ;
    txt_dec         .background        = true               ;
    txt_dec         .backgroundColor   = color_txt          ;
    txt_dec         .restrict          = "0123456789"       ;
    txt_dec         .type              = TextFieldType.INPUT;
    txt_dec         .defaultTextFormat = format             ; 
    txt_dec         .text              = "4"                ;
    txt_dec         .selectable        = true               ;
    txt_dec         .set_toolTip(-15,1.5,mc_obj,"Antall desimaler ");

    rb_auto   = new RadioButton_U(this)      ; 
    rb_auto    .name  = "rb_auto"  ;  
    rb_auto    .label = "Auto"   ;
    rb_auto    .group = rbGroupMA ;
    rb_auto    .x     = x0Rb           ;
    rb_auto    .y     = y0Rb-4*dyRb;
    rb_auto    .set_toolTip(0,1,mc_obj,"Data-innskriving i tabeller");

    rb_auto.selected = true;

    pb_transfer     = new Button()                    ;
    pb_transfer      .name              = "pb_transfer";
    pb_transfer      .label             = "Transfer"   ;
    pb_transfer      .x                 = x0Pb+64; //dxPb   ;
    pb_transfer      .y                 = y0Rb-3*dyRb        ;
    pb_transfer      .height            = 18          ;
    pb_transfer      .width             = 70          ;

    pb_funcIn     = new Button_U(this)                    ;
    pb_funcIn      .name              = "pb_funcIn";
    pb_funcIn      .label             = "Import Data"   ;
    pb_funcIn      .x                 = x0SbDegree+15; //x0Pb+136; //dxPb   ;
    pb_funcIn      .y                 = y0Rb-4*dyRb        ;
    pb_funcIn      .height            = 18          ;
    pb_funcIn      .width             = 90          ;
    pb_funcIn      .set_toolTip(-4,1,mc_obj,"Importer tabell/sim-data");

    pb_funcOut     = new Button_U(this)                   ;
    pb_funcOut      .name              = "pb_funcOut";
    pb_funcOut      .label             = "Export Function for Analysis";
    pb_funcOut      .x                 = x0Rb+5; //x0SbDegree; //x0Pb+136; //dxPb   ;
    pb_funcOut      .y                 = y0Rb-5*dyRb; //y0Rb-3*dyRb        ;
    pb_funcOut      .height            = 18          ;
    pb_funcOut      .width             = 205; //90          ;
    pb_funcOut      .set_toolTip(0,1,mc_obj,"Eksporter funksjon til analyse");

    rbGroupFT      = new RadioButtonGroup("FT");                 // radioButton degree
    rb_funcType    = new Array(nRB+1)    ;

    for(var i:int=1;i<=nRB;i++) {
     //dx           = int(i/(3+0.1)) + 1    ;
     //dy           = (i-1)%3        + 1    ;
     rb_funcType[i]   = new RadioButton_U(this)      ; 
     rb_funcType[i]    .name  = "rb_funcType"+i  ;  
     rb_funcType[i]    .label = rbMAtxt[i]   ;
     rb_funcType[i]    .group = rbGroupFT ;
     rb_funcType[i]    .x     = x0Rb           ;
     rb_funcType[i]    .y     = y0Rb+(i-2)*dyRb - 1*dyRb;// y0Pb - 20*(4-i); //y0Rb+(i-1)*dyRb;
     if(i==1) {
       rb_funcType[i]    .set_toolTip(1,1,mc_obj,sFuncType[i]); }
     else {
       rb_funcType[i]    .set_toolTip(1,0.3,mc_obj,sFuncType[i]);
     }
     if(i>1) {
       rb_funcType[i].width = 150;
     }
    }   
    rb_funcType[1].selected = true;

    txt_degree        = new TextField_U(this)                     ;
    txt_degree         .name              = "txt_degree"          ; 
    txt_degree         .x                 = x0TxtDegree          ;
    txt_degree         .y                 = y0TxtDegree - 2*dyRb           ;
    txt_degree         .width             = 30                 ;
    txt_degree         .height            = 16                 ;
    txt_degree         .border            = true               ;
    txt_degree         .background        = true               ;
    txt_degree         .backgroundColor   = color_txt          ;
    txt_degree         .restrict          = "01234"            ;
    //txt_num         .type              = TextFieldType.INPUT;
    txt_degree         .defaultTextFormat = format             ; 
    txt_degree         .text              = "0"                ;
    txt_degree         .selectable        = false              ;
    txt_degree         .set_toolTip(-15,1.5,mc_obj,"Polynomgrad (0-5) (bruk scrollbar) \n" +
                                                  "0 : Gjennomsnitt \n" +
                                                  "1 : Rett linje");

    sb_degree         = new ScrollBar_U(this)                   ;      
    sb_degree          .name              = "sb_degree"        ;
    sb_degree          .x                 = x0SbDegree            ;
    sb_degree          .y                 = y0SbDegree - 2*dyRb          ;
    sb_degree          .height            = 90                 ;
    sb_degree          .setScrollProperties(1,0,5,1)           ;
    sb_degree          .scrollPosition    = 0                  ;
    sb_degree          .direction         = ScrollBarDirection.HORIZONTAL;
    sb_degree          .set_toolTip(0,1.5,mc_obj,"Polynomgrad (0-5) \n" +
                                                 "0 : Gjennomsnitt \n" +
                                                 "1 : Rett linje");

    pb_clearPoint       = new Button_U(this)                    ;
    pb_clearPoint        .name              = "pb_clearPoint"  ;
    pb_clearPoint        .label             = "ClearPoint"     ;
    pb_clearPoint        .x                 = x0Pb; //x0Pb+dxPb        ;
    pb_clearPoint        .y                 = y0Pb+5; //-40        ;
    pb_clearPoint        .height            = 18          ;
    pb_clearPoint        .width             = 62          ;
    pb_clearPoint        .set_toolTip(1,1,mc_obj,"Skjul punkter");

    pb_clearGraph       = new Button_U(this)                  ;
    pb_clearGraph        .name              = "pb_clearGraph"  ;
    pb_clearGraph        .label             = "ClearGraph"     ;
    pb_clearGraph        .x                 = x0Pb +64; //dxPb       ;
    pb_clearGraph        .y                 = y0Pb+5; //-20        ;
    pb_clearGraph        .height            = 18          ;
    pb_clearGraph        .width             = 70          ;
    pb_clearGraph        .set_toolTip(1,1,mc_obj,"Skjul graf");

    pb_compute     = new Button_U(this)                    ;
    pb_compute      .name              = "pb_compute";
    pb_compute      .label             = "Exit" //"RegFunc"   ;
    pb_compute      .x                 = x0Pb+136; //dxPb   ;
    pb_compute      .y                 = y0Pb+5        ;
    pb_compute      .height            = 18          ;
    pb_compute      .width             = 62          ;
    pb_compute      .set_toolTip(-12,1,mc_obj,"Beregn/Tegn regfunksjon");

    cb_table           = new CheckBox_U(this)                         ;       
    cb_table            .name              = "cb_table"     ;
    cb_table            .label             = "Table"        ;
    cb_table            .x                 = x0Pb+136-5     ;
    cb_table            .y                 = y0Pb-20        ;
    cb_table            .selected          = false              ;
    cb_table            .enabled           = true              ;
    cb_table            .set_toolTip(-12,0.5,mc_obj,"Vis/skjul tabell");

    cb_xyAxis           = new CheckBox_U(this)                         ;       
    cb_xyAxis            .name              = "cb_xyAxis"     ;
    cb_xyAxis            .label             = "xyAxis"        ;
    cb_xyAxis            .x                 = x0Pb+136-5     ;
    cb_xyAxis            .y                 = y0Pb-20 - 20    ;
    cb_xyAxis            .selected          = false              ;
    cb_xyAxis            .enabled           = true              ;
    cb_xyAxis            .set_toolTip(-12,0.5,mc_obj,"Manuell akseskalering");

    cb_quad1           = new CheckBox_U(this)                         ;       
    cb_quad1            .name              = "cb_quad1"     ;
    cb_quad1            .label             = "quad1"        ;
    cb_quad1            .x                 = x0Pb+136-5     ;
    cb_quad1            .y                 = y0Pb-20 - 40 -20   ;
    cb_quad1            .selected          = false              ;
    cb_quad1            .enabled           = true              ;
    cb_quad1            .set_toolTip(-12,0.5,mc_obj,"Vis 1.kvadrant");

    cb_quad14          = new CheckBox_U(this)                         ;       
    cb_quad14           .name              = "cb_quad14"     ;
    cb_quad14           .label             = "quad14"        ;
    cb_quad14           .x                 = x0Pb+136-5     ;
    cb_quad14           .y                 = y0Pb-20 - 40    ;
    cb_quad14           .selected          = false              ;
    cb_quad14           .enabled           = true              ;
    cb_quad14           .set_toolTip(-12,0.5,mc_obj,"Vis 1. og 4. kvadrant");

    cb_autoScale       = new CheckBox_U(this)                         ;       
    cb_autoScale        .name              = "cb_autoScale"     ;
    cb_autoScale        .label             = "autoScale"        ;
    cb_autoScale        .x                 = x0Pb+136-5     ;
    cb_autoScale        .y                 = y0Pb-20 - 60 -20   ;
    cb_autoScale        .selected          = false              ;
    cb_autoScale        .enabled           = true              ;
    cb_autoScale        .set_toolTip(-12,0.5,mc_obj,"Auto skalering");

    txt_bSin         = new TextField_U(this)                     ;
    txt_bSin         .name              = "txt_bSin"           ; 
    txt_bSin         .x                 = x0TxtDegree +30         ;
    txt_bSin         .y                 = y0TxtDegree - 2*dyRb + 115;
    txt_bSin         .width             = 30                 ;
    txt_bSin         .height            = 16                 ;
    txt_bSin         .border            = true               ;
    txt_bSin         .background        = true               ;
    txt_bSin         .backgroundColor   = color_txt          ;
    txt_bSin         .restrict          = "0123456789."      ;
    txt_bSin         .type              = TextFieldType.INPUT;
    txt_bSin         .defaultTextFormat = format             ; 
    txt_bSin         .text              = "1"                ;
    txt_bSin         .selectable        = true               ;
    txt_bSin         .set_toolTip(-15,1.5,mc_obj,"Start b-verdi");


    mc_obj.addChild(txt_func);
    mc_obj.addChild(txt_funcT);
    mc_obj.addChild(txt_error);
    //mc_obj.addChild(cb_importPrev);
    mc_obj.addChild(cb_ax);
    mc_obj.addChild(rb_manual);
    mc_obj.addChild(rb_auto  );
    mc_obj.addChild(txt_dec  );
    //mc_obj.addChild(pb_transfer);
    //mc_obj.addChild(pb_funcIn);
    mc_obj.addChild(pb_funcOut);
    for(var i:int=1;i<=nRB;i++) {
      mc_obj.addChild(rb_funcType[i]);
    }
    mc_obj.addChild(txt_degree   );
    mc_obj.addChild(sb_degree    );
    mc_obj.addChild(pb_clearPoint);
    mc_obj.addChild(pb_clearGraph);
    mc_obj.addChild(pb_compute   );
    mc_obj.addChild(cb_table     );
    mc_obj.addChild(cb_xyAxis    );
    mc_obj.addChild(cb_quad1     );
    mc_obj.addChild(cb_quad14    );
    mc_obj.addChild(cb_autoScale );
    mc_obj.addChild(txt_bSin     );
  }
  /*--------------------------------------------------------------------------------------------- init_listener ---*/

  private function init_listener() {

     //mc_LMS_manual   .addEventListener(MouseEvent  .MOUSE_MOVE, action_mouseXY        );
     st   .addEventListener(MouseEvent  .MOUSE_UP, action_mouseUp        );
    for(var i:int=1;i<=6;i++) {
      rb_funcType[i] .addEventListener(MouseEvent  .CLICK , action_rbClick    );
    }
   // pb_clearPoint  .addEventListener(MouseEvent  .CLICK , action_pbClear    );
    rb_manual      .addEventListener(MouseEvent.CLICK, action_rbManual);
    rb_auto        .addEventListener(MouseEvent.CLICK, action_rbAuto);
    sb_degree      .addEventListener(ScrollEvent .SCROLL, action_sbDegree   );
    cb_ax          .addEventListener(MouseEvent.CLICK, action_cbAx          );   
    cb_table       .addEventListener(MouseEvent.CLICK, action_cbTable       );   
    cb_xyAxis      .addEventListener(MouseEvent.CLICK, action_cbXYAxis      ); 
    cb_quad1       .addEventListener(MouseEvent.CLICK, action_cbQuad1       );  
    cb_quad14      .addEventListener(MouseEvent.CLICK, action_cbQuad14      ); 
    cb_autoScale   .addEventListener(MouseEvent.CLICK, action_cbAutoScale   ); 
    pb_transfer    .addEventListener(MouseEvent.CLICK, action_pbTransfer    );
    pb_funcIn      .addEventListener(MouseEvent.CLICK, action_pbFuncIn      );
    pb_funcOut     .addEventListener(MouseEvent.CLICK, action_pbFuncOut     );
    pb_clearPoint  .addEventListener(MouseEvent.CLICK, action_pbClearPoint  );
    pb_clearGraph  .addEventListener(MouseEvent.CLICK, action_pbClearGraph  );
    pb_compute     .addEventListener(MouseEvent  .CLICK , action_pbCompute  );
    txt_bSin       .addEventListener(Event     .CHANGE , action_txtBSin     );
    txt_dec        .addEventListener(Event     .CHANGE , action_txtDec      );
    //sb_num         .addEventListener(ScrollEvent .SCROLL, action_sbNum      );
  } 

  private function action_txtDec(evt:Event) {
    if(txt_dec.text != "") {
      pointTab.set_nRoundTo(Number(txt_dec.text));
      pointTab.clearPointGraph();
      pointTab.lsm(x0,y0,xScale,yScale);
    }
  }
  private function action_txtBSin(evt:Event) {
    pointTab.set_bStart(txt_bSin.text);
  }
  private function action_pbFuncIn(evt:MouseEvent) {
    transferData_fromPointXYTab();
    if(cb_importPrev.selected) {
      owner.transferDataCopyToTable(pointTab.get_tabXCopy(),pointTab.get_tabYCopy());   //trace("tabv");trace(pointTab.get_tabXCopy()); trace(pointTab.get_tabYCopy());
    }
  }
  private function action_pbFuncOut(evt:MouseEvent) {
    if(txt_func.text != "") {
      pointTab .set_tabXYCopy   ()              ;
      owner    .set_f5FromLMS   (txt_func.text );
      pointTab .clearPoint      ()              ;
      pointTab .clearPointGraph ()              ;
      cb_importPrev.enabled = true              ;
    }
  }
  private function clickInGraph() :Boolean {
    var xP:Number = mc_LMS_manual.mouseX;
    var yP:Number = mc_LMS_manual.mouseY;
    return (xP>=xMinGraph && xP<xMaxGraph && yP>yMinGraph && yP<yMaxGraph);
  }

  private function action_mouseUp(evt:MouseEvent) {
    if(bLMS && rb_manual.selected && clickInGraph()) {
      //var xP:Number = (mc_LMS_manual.mouseX-x0)*xScale;
      //var yP:Number = (y0-mc_LMS_manual.mouseY)*yScale;
      //pointTabX[nPointTab] = xP;
      //pointTabY[nPointTab] = yP;
      //nPointTab++; 
      pointTab.drawPoint(mc_LMS_manual.mouseX,mc_LMS_manual.mouseY);
      lmsTable.insertTable((mc_LMS_manual.mouseX-x0)*xScale,(y0-mc_LMS_manual.mouseY)*yScale);
    }
    //var x:Number = mc_LMS_manual.mouseX);
  }

  public function drawPoint_fromTable(nX:Number,nY:Number) {  
    var nXG :Number = x0 + nX/xScale;  
    var nYG :Number = y0 - nY/yScale;  
    pointTab.drawPoint_fromTable(nXG,nYG);
  }
  public function drawFunction_fromTable() {
    pointTab.lsm(x0,y0,xScale,yScale);
  }
  public function clearPoint_fromTable() {
    pointTab.clearPoint();
  }
  public function clearFunction_fromTable() {
    pointTab.clearPointGraph();
  }
  private function action_cbTable(evt:MouseEvent) {
    lmsTable.show_table(evt.target.selected);
  }
  private function action_cbXYAxis(evt:MouseEvent) {
    owner.show_graph2DAxis_fromLMS(evt.target.selected);
  }
  private function action_cbQuad1(evt:MouseEvent) {
    owner.set_quad1_fromLMS(evt.target.selected);
    if(bAutoScale) {
      lmsTable.test_rescale();
    }
    if(evt.target.selected) {
      cb_quad14.selected = false;
    }
  }
  private function action_cbQuad14(evt:MouseEvent) {
    owner.set_quad14_fromLMS(evt.target.selected);
    if(bAutoScale) {
      lmsTable.test_rescale();
    }
    if(evt.target.selected) {
      cb_quad1.selected = false;
    }
  }
   private function action_cbAutoScale(evt:MouseEvent) {
    bAutoScale = evt.target.selected;
    lmsTable.set_autoScale(bAutoScale);
    if(bAutoScale) {
      lmsTable.test_rescale();
    }
  }
  public function set_cbXYAxis(bSet:Boolean) {
    cb_xyAxis.selected = bSet;
  }
  public function set_cbQuad1(bSet:Boolean) {
    cb_quad1.selected = bSet;
  }
  public function set_cbQuad14(bSet:Boolean) {
    cb_quad14.selected = bSet;
  }
  public function transferData_fromPointXYTab() {   //trace(lmsTable.get_yTab());
    draw_fromTabCopy(lmsTable.get_xTab(),lmsTable.get_yTab());
    /*
    var xA :Array;
    var yA :Array;
    if(!cb_importPrev.selected) {
      xA = sim.get_pointTabX();      //trace("xA");trace(xA);   
      yA = sim.get_pointTabY();      //trace(yA); 
      draw_fromSim(xA,yA);}
    else {
      xA = pointTab.get_tabXCopy();   
      yA = pointTab.get_tabYCopy();  //trace("nyTab");trace(xA);trace(yA);
      draw_fromTabCopy(xA,yA);
    }
    */ 
/*   
    //trace("xA");trace(xA);trace("yA"); trace(yA); trace("length");trace(xA.length);trace(yA.length);
    for(var i:int=0;i<=100;i++) {   //if(i<=4) {trace("test"); trace(i);trace(xA[i] != ""); trace(yA[i] != "");trace(yA[i]);trace(!isNaN(Number(xA[i]))); trace(!isNaN(Number(yA[i])));} //if(i<=4) {trace("xy"); trace(xA[i]); trace(yA[i]);}
      //if(xA[i] != "" && yA[i] != "" && !isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
      //if(xA[i] != "" && !isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
      //if(xA[i] == "") {
      //  var a:int=1; trace("blank");trace(i);}
      //else {
      if(xA[i] != "" && !isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
        //if(!isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
        pointTab.drawPointAuto(Number(xA[i]),Number(yA[i])); //trace("i");trace(i);
      }
    }
*/
  }

  private function draw_fromSim(xA:Array,yA:Array) {
    for(var i:int=0;i<=100;i++) {   //if(i<=4) {trace("test"); trace(i);trace(xA[i] != ""); trace(yA[i] != "");trace(yA[i]);trace(!isNaN(Number(xA[i]))); trace(!isNaN(Number(yA[i])));} //if(i<=4) {trace("xy"); trace(xA[i]); trace(yA[i]);}
      //if(xA[i] != "" && yA[i] != "" && !isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
      //if(xA[i] != "" && !isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
      //if(xA[i] == "") {
      //  var a:int=1; trace("blank");trace(i);}
      //else {
      if(xA[i] != "" && !isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
        //if(!isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
        pointTab.drawPointAuto(Number(xA[i]),Number(yA[i])); //trace("i");trace(i);
      }
    }
  }
  private function draw_fromTabCopy(xA:Array,yA:Array) {
    for(var i:int=0;i<=100;i++) {   //if(i<=4) {trace("test"); trace(i);trace(xA[i] != ""); trace(yA[i] != "");trace(yA[i]);trace(!isNaN(Number(xA[i]))); trace(!isNaN(Number(yA[i])));} //if(i<=4) {trace("xy"); trace(xA[i]); trace(yA[i]);}
      //if(xA[i] != "" && yA[i] != "" && !isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
      //if(xA[i] != "" && !isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
      //if(xA[i] == "") {
      //  var a:int=1; trace("blank");trace(i);}
      //else {
      if(xA[i] != "" && yA[i] != "" && !isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
        //if(!isNaN(Number(xA[i])) && !isNaN(Number(yA[i])) ){
        pointTab.drawPointAuto(Number(xA[i]),Number(yA[i])); //trace("i");trace(i);
      }
    }
  }
    
  private function action_rbClick   (evt:MouseEvent) {
    var n = Number((evt.target.name).substring(11));               // extract number from rb_funcType...
    nFuncType = n;
    switch(n) {
      case 1  : pointTab .set_polynomial    ();  break;
      case 2  : pointTab .set_power         ();  break;
      case 3  : pointTab .set_exponential_1 ();  break;
      case 4  : pointTab .set_exponential_2 ();  break;
      case 5  : pointTab .set_ln            ();  break;
      case 6  : pointTab .set_sin           ();  break;
    }
    pointTab.clearPointGraph();
    pointTab.lsm(x0,y0,xScale,yScale);
  }
  private function action_rbManual(evt:MouseEvent) {
    pointTab.set_auto(false);
  }
  private function action_rbAuto(evt:MouseEvent) {
    pointTab.set_auto(true);
    transferData_fromPointXYTab();
  }
  private function action_pbClearPoint(evt:MouseEvent) {
   pointTab.clearPoint();
  }
  private function action_pbClearGraph(evt:MouseEvent) {
   pointTab.clearPointGraph();
  }
  public function clearGraph() {
    pointTab.clearPointGraph();
    txt_func  .text = "";
    txt_error .text = "RMS Error";
  }
  private function action_pbTransfer(evt:MouseEvent) {
   pointTab.transfer_data();
  }
  private function action_pbCompute(evt:MouseEvent) {
    //if(rb_manual.selected) {
      //sim.set_pointTabXY(pointTabX,pointTabY,nPointTab);
    //}
    //pointTab.lsm(x0,y0,xScale,yScale);
    owner.exitLMS();
  }
  private function action_sbDegree(evt:ScrollEvent) {
    var n:Number = Math.floor(sb_degree.scrollPosition);
    nDegreePoly = n;
    txt_degree.text = n.toString();
    pointTab.set_nPolynomDegree(n);
    if(nFuncType == 1) {
      if(nDegreePoly == 1) {
        //cb_ax.enabled = true;
        pointTab.set_linAx(cb_ax.selected); }
      else {
        cb_ax.selected = false;
      }
      pointTab.lsm(x0,y0,xScale,yScale);
    }
  }
  private function action_cbAx(evt:MouseEvent) {
    if(nDegreePoly==1) {
      pointTab.set_linAx(evt.target.selected);
      pointTab.lsm(x0,y0,xScale,yScale); }
    else {
      cb_ax.selected = false;
    }
  }

  //public function set_scale(x0:Number,y0:Number,xScale:Number,yScale:Number) {
  public function set_scale(xScale:Number,yScale:Number) {
    this.xScale = xScale;
    this.yScale = yScale;
    pointTab.set_scale(xScale,yScale);
    if(bLMS) {
      pointTab.clearPoint();
      pointTab.clearPointGraph();
      transferData_fromPointXYTab();
      pointTab.lsm(x0,y0,xScale,yScale);   //trace("setscaleee");
    }
  }
  public function set_quad1(bSet:Boolean) {
    if(bSet) {
      x0 = x0quad1;  y0 = y0quad1; }
    else {
      x0 = x00    ;  y0 = y00    ;
    }
    pointTab.set_quad1(bSet);
    if(bLMS) {
      pointTab.clearPoint();
      pointTab.clearPointGraph();
      pointTab.set_scale(xScale,yScale);
      transferData_fromPointXYTab();
      pointTab.lsm(x0,y0,xScale,yScale);
    }
  }
  public function set_quad14(bSet:Boolean) {
    if(bSet) {
      x0 = x0quad14;  y0 = y0quad14; }
    else {
      x0 = x00    ;  y0 = y00    ;
    }
    pointTab.set_quad14(bSet);
    if(bLMS) {
      pointTab.clearPoint();
      pointTab.clearPointGraph();
      pointTab.set_scale(xScale,yScale);
      transferData_fromPointXYTab();
      pointTab.lsm(x0,y0,xScale,yScale);
    }
  }

  public function test_rescaleX(xMax:Number) {
    owner.test_rescaleX(xMax);
  }
  public function test_rescaleY(yMax:Number) {
    owner.test_rescaleY(yMax);
  }

  public function set_error(nSumError:Number) {
    var eFac :Number = Math.pow(10,7);
    txt_error.text   = "RMS Error  =  " + (Math.round(eFac*nSumError)/eFac).toString();
  }

  public function set_currentGraph(nMemCurrentX:Number,nMemCurrentY:Number) {
    this.nMemCurrentX = nMemCurrentX;
    this.nMemCurrentY = nMemCurrentY;
    pointTab.set_currentGraph(nMemCurrentX,nMemCurrentY);
  }
  public function show_allCurrentGraph() {
    pointTab.show_allCurrentGraph();
  }
  public function clear_nonCurrentGraph() {
    pointTab.clear_nonCurrentGraph();
  }
  public function set_pair(bPair:Boolean) {
    pointTab.set_pair(bPair);
  }
  /*---------------------------------------------------------------------------------------------- set_function ---*/

  public function set_function(sy:String) {
    txt_func.text = sy;
  }
  /*--------------------------------------------------------------------------------------------------- set_lms ---*/

  public function set_lms(bSet:Boolean) {
    bLMS       = bSet;
    mc.visible = bSet;
    lmsTable.show_table(bSet);
    cb_table.selected = bSet;
  }
  /*------------------------------------------------------------------------------------------------ is_toolTip ---*/

  public function is_toolTip() :Boolean {
    return owner.is_toolTip(); 
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/