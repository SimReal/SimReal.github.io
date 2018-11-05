/*==================================================================================================== LMSTable ===*/

function LMSTable()   {

/*------------------------------------------------------------------------------------------------------ import ---*/

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
import fl    .controls .CheckBox           ;
import fl    .controls .Button             ;
import fl    .controls .Label              ;
import fl    .controls .RadioButton        ;
import fl    .controls .RadioButtonGroup   ;
import fl    .controls .NumericStepper     ;

/*============================================================================================== class LMSTable ===*/

public class LMSTable extends Sprite {

  private var owner          :Object              ;                  // owner   (LMS_Obj)
  private var mc             :Sprite              ;


  private var mc_background  :Sprite              ;
  private var mc_obj         :Sprite              ;
  private var mc_objPb       :Sprite              ;


  private var tblBackground  :LMSTable_Background ;

  private var format         :TextFormat          ;

  private var x1             :Number    = 330     ;                  // window position
  private var y1             :Number    = 20      ;
  private var x2             :Number    = 498     ;
  private var y2             :Number    = 395     ;


  private var sb_scroll     :ScrollBar_U          ;                  // scroll in xy-table
  private var txt_xOpT      :TextField            ;                  // table operation  x  txt     
  private var txt_yOpT      :TextField            ;                  //                  y  txt
  private var cmb_opX       :ComboBox_U           ;                  // table operation  x
  private var cmb_opY       :ComboBox_U           ;                  //                  y

  private var cb_multiGraph :CheckBox_U           ;                  // multiple graph
  private var cb_pair       :CheckBox_U           ;                  // only show 1-1, 2-2, 3-3, ...
  private var bMultiGraph   :Boolean    = false   ;
  private var bPair         :Boolean    = false   ;

  private var txt_x         :Array                ;                  // table            x                
  private var txt_y         :Array                ;                  //                  y
  private var nMax          :Number     = 100     ;                  // number of table  elements

  private var sX            :Array                ;
  private var sY            :Array                ;
  private var nX            :Array                ;
  private var nY            :Array                ;

  private var txt_xMem      :Array                ;
  private var txt_yMem      :Array                ;
  private var txt_xMemStand :Array                ;
  private var txt_yMemStand :Array                ;
  private var nMaxMem       :Number     = 10      ;
  private var nMemCurrentX  :Number     =  1      ;
  private var nMemCurrentY  :Number     =  1      ;
  private var nMemCurrentProd:Number    =  1      ;

  private var xMax          :Number     =  5      ;
  private var yMax          :Number     =  5      ;

 
  private var txt_nMemA     :TextField            ;
  private var txt_nMemB     :TextField            ;

  private var ns_nMemX      :NumericStepper_U     ;            // ns_nMem   numeric stepper (num of memories)   x
  private var ns_nMemY      :NumericStepper_U     ;            //                                               y

  private var pb_openMem    :Button               ;
  private var pb_saveMem    :Button               ;

  private var pb_sortX      :Button_U             ;
  private var pb_sortY      :Button_U             ;
  private var pb_clearX     :Button_U             ;
  private var pb_clearY     :Button_U             ;
  private var pb_copyNextX  :Button_U             ;
  private var pb_copyNextY  :Button_U             ;

  private var cb_xLog       :CheckBox             ;
  private var cb_yLog       :CheckBox             ;
  private var xOld          :Array                ;
  private var yOld          :Array                ;

  private var bTransferDataLMS :Boolean = false   ;
  private var bAutoScale       :Boolean = false   ;


  private var h0            :Number     = 200     ; 
  private var dx0           :Number     = 40      ;  
  private var dy0           :Number     = 16      ; 

  private var color_txt     :Number     = 0xD3D3FF;

  private var fC            :FunctionCompute      ;

  /*-------------------------------------------------------------------------------------------------- LMSTable ---*/

  public function LMSTable(owner:Object,mc:Sprite) {
    this.owner = owner;
    this.mc    = mc   ;
    init()            ;
  }
  /*------------------------------------------------------------------------------------------------------ init ---*/

  private function init() {
    init_mc         ();
    init_background ();
    init_obj        ();
    init_listener   ();
    fC = new FunctionCompute();
/*
    try {
      fC.infixPostfix(txt_x.text);
      nxValue = fC.postfixValue(0);
      throw new Error("Function Error");
    }
    catch(errorObject:Error) {
    }
*/
  }
  /*--------------------------------------------------------------------------------------------------- init_mc ---*/

  private function init_mc() {
    mc_background  = new Sprite()           ;
    mc_obj         = new Sprite()           ;
    mc_objPb       = new Sprite()           ;    mc_objPb.scaleX = 0.5;   mc_objPb.scaleY = 0.5;
   
    mc              .addChild(mc_background);
    mc              .addChild(mc_obj       );
    mc_obj          .addChild(mc_objPb     );
   
    mc              .visible = false        ;
   
  }
  /*------------------------------------------------------------------------------------------- init_background ---*/

  private function init_background() {
    tblBackground = new LMSTable_Background(this,mc_background,x1,y1,x2,y2);
  }
  /*-------------------------------------------------------------------------------------------------- init_obj ---*/

  private function init_obj() {

    var x0 :Number = x1-12;
    var dx :Number = 45   ;
    var dy :Number = 20   ;
    var d  :Number = 0    ;

    txt_x = new Array(nMax+1);    sX = new Array(nMax+1);     nX = new Array(nMax+1);
    txt_y = new Array(nMax+1);    sY = new Array(nMax+1);     nY = new Array(nMax+1);

    txt_xMem = new Array(nMaxMem+1);    txt_xMemStand = new Array(nMaxMem+1)   // memory tables
    txt_yMem = new Array(nMaxMem+1);    txt_yMemStand = new Array(nMaxMem+1)   
    for(var i:int=1;i<=nMaxMem;i++) {
      txt_xMem[i] = new Array(nMax+1);  txt_xMemStand[i] = new Array(nMax+1);
      txt_yMem[i] = new Array(nMax+1);  txt_yMemStand[i] = new Array(nMax+1);
    }
    for(var i:int=1;i<=nMaxMem;i++) {
      for(var j:int=1;j<=nMax;j++) {
        txt_xMem[i][j] = "";   txt_xMemStand[i][j] = "";
        txt_yMem[i][j] = "";   txt_yMemStand[i][j] = "";
      }
    }
    for(var i:int=1;i<=nMax;i++) {
      sX[i] = "";  sY[i] = "";
      nX[i] = "";  nY[i] = "";
    }

    xOld  = new Array(nMax+1);
    yOld  = new Array(nMax+1);

    format          = new TextFormat()                       ;       // format
    format           .font              = "Arial"            ;
    format           .size              = 10                 ;
    format           .indent            = 4                  ;

    txt_x[0]        = new TextField();
    txt_x[0]         .name              = "txt_x"+0          ; 
    txt_x[0]         .x                 = x0 + dx - 20       ;
    txt_x[0]         .y                 = y1 + dy + 0*dy0-17 ;
    txt_x[0]         .width             = 40                 ;
    txt_x[0]         .height            = dy0                ;
    txt_x[0]         .defaultTextFormat = format             ; 
    txt_x[0]         .text              = "x    "            ;

    txt_y[0]        = new TextField();
    txt_y[0]         .name              = "txt_y"+0          ; 
    txt_y[0]         .x                 = x0 + 2*dx + dx0-30 ;
    txt_y[0]         .y                 = y1 + dy + 0*dy0-17 ;
    txt_y[0]         .width             = 40                 ;
    txt_y[0]         .height            = dy0                ;
    txt_y[0]         .defaultTextFormat = format             ; 
    txt_y[0]         .text              = "y    "            ;
   
    for(var i:int=1;i<=nMax;i++) {
      txt_x[i]      = new TextField()                        ;
      txt_x[i]       .name              = "txt_x"+i          ;  
      txt_x[i]       .x                 = x0 + dx-20         ;
      txt_x[i]       .y                 = y1 + dy + i*dy0-15 ;
      txt_x[i]       .width             = 65;                ;
      txt_x[i]       .height            = dy0                ;
      txt_x[i]       .border            = true               ;
      txt_x[i]       .background        = true               ;
      txt_x[i]       .backgroundColor   = color_txt          ;
      //txt_x[i]       .restrict          = "-0123456789."     ;
      txt_x[i]       .type              = TextFieldType.INPUT;
      txt_x[i]       .defaultTextFormat = format             ; 
      txt_x[i]       .text              = ""                 ;
      txt_x[i]       .visible           = (txt_x[i].y <= h0) ;
    }
    for(var i:int=1;i<=nMax;i++) {
      txt_y[i]      = new TextField()                        ;
      txt_y[i]       .name              = "txt_y"+i          ;  
      txt_y[i]       .x                 = x0 + 2*dx+dx0 - 30 ;
      txt_y[i]       .y                 = y1 + dy + i*dy0-15 ;
      txt_y[i]       .width             = 65                 ; 
      txt_y[i]       .height            = dy0                ;
      txt_y[i]       .border            = true               ;
      txt_y[i]       .background        = true               ;
      txt_y[i]       .backgroundColor   = color_txt          ;
      //txt_y[i]       .restrict          = "-0123456789."     ;
      txt_y[i]       .type              = TextFieldType.INPUT;
      txt_y[i]       .defaultTextFormat = format             ; 
      txt_y[i]       .text              = ""                 ;
      txt_y[i]       .visible           = (txt_y[i].y <= h0) ;
    }

    sb_scroll       = new ScrollBar_U(this)                  ;      
    sb_scroll        .name              = "sb_scroll"        ;
    sb_scroll        .x                 = x0 + dx - 20       ;
    sb_scroll        .y                 = y1+dy+12*dy0-15-10 ;
    sb_scroll        .height            = 140                ;
    sb_scroll        .setScrollProperties(10,0,90,0)         ;
    sb_scroll        .scrollPosition    = 0                  ;
    sb_scroll        .direction         = ScrollBarDirection.HORIZONTAL;
    sb_scroll        .set_toolTip(0,1,mc_obj,"Parallell-skrolling i x- og y-tabell");

    cmb_opX        = new ComboBox_U(this)                    ;
    cmb_opX         .move(x0+dx-20,y1+dy+12*dy0+15)          ; 
    cmb_opX         .setSize(65,20)                          ;
    cmb_opX         .addItem( { label: "Stand", data:1 } )   ;
    cmb_opX         .addItem( { label: "^2"   , data:2 } )   ;
    cmb_opX         .addItem( { label: "^3"   , data:3 } )   ;
    cmb_opX         .addItem( { label: "Sqrt" , data:4 } )   ;
    cmb_opX         .addItem( { label: "exp"  , data:5 } )   ;
    cmb_opX         .addItem( { label: "ln"   , data:6 } )   ;
    cmb_opX         .addItem( { label: "log"  , data:7 } )   ;
    cmb_opX         .set_toolTip(0,1,mc_obj,"Ulike operasjoner på gjeldende x-tabell");

    cmb_opY        = new ComboBox_U(this);
    cmb_opY         .move(x0+dx-20+75,y1+dy+12*dy0+15)       ;
    cmb_opY         .setSize(65,20);
    cmb_opY         .addItem( { label: "Stand", data:1 } )   ;
    cmb_opY         .addItem( { label: "^2"   , data:2 } )   ;
    cmb_opY         .addItem( { label: "^3"   , data:3 } )   ;
    cmb_opY         .addItem( { label: "Sqrt" , data:4 } )   ;
    cmb_opY         .addItem( { label: "exp"  , data:5 } )   ;
    cmb_opY         .addItem( { label: "ln"   , data:6 } )   ;
    cmb_opY         .addItem( { label: "log"  , data:7 } )   ;
    cmb_opY         .set_toolTip(0,1,mc_obj,"Ulike operasjoner på gjeldende y-tabell");

    cb_multiGraph   = new CheckBox_U(this)                         ;       
    cb_multiGraph          .name              = "cb_multiGraph"    ;
    cb_multiGraph          .label             = "Multigraph"      ;
    cb_multiGraph          .x                 = x0+dx-20+37+20       ;
    cb_multiGraph          .y                 = y1+dy+12*dy0+15+30 -10       ;
    cb_multiGraph          .selected          = false              ;
    cb_multiGraph          .enabled           = true              ;
    cb_multiGraph          .set_toolTip(-4,1,mc_obj,"Flere regresjonsgrafer vises samtidig");

    cb_pair         = new CheckBox_U(this)                         ;       
    cb_pair          .name              = "cb_pair"    ;
    cb_pair          .label             = "xyPair"      ;
    cb_pair          .x                 = x0+dx-20+37+20       ;
    cb_pair          .y                 = y1+dy+12*dy0+15+30+10        ;
    cb_pair          .selected          = false              ;
    cb_pair          .enabled           = true              ;
    cb_pair          .set_toolTip(-4,1,mc_obj,"Kun visning av tabeller 1-1, 2-2, 3-3, ...");


    txt_xOpT       = new TextField()                         ;
    txt_xOpT        .name              = "txt_xOpT"          ; 
    txt_xOpT        .x                 = x0+1*dx - 25        ;
    txt_xOpT        .y                 = y1+dy+12*dy0        ;
    txt_xOpT        .width             = 65                  ;
    txt_xOpT        .height            = dy0                 ;
    txt_xOpT        .defaultTextFormat = format              ; 
    txt_xOpT        .selectable        = false               ;
    txt_xOpT        .text              = "x Operation"       ;

    txt_yOpT       = new TextField()                         ;
    txt_yOpT        .name              = "txt_yOpT"          ; 
    txt_yOpT        .x                 = x0+1*dx + 50        ;
    txt_yOpT        .y                 = y1+dy+12*dy0        ;
    txt_yOpT        .width             = 65                  ;
    txt_yOpT        .height            = dy0                 ;
    txt_yOpT        .defaultTextFormat = format              ; 
    txt_yOpT        .selectable        = false               ;
    txt_yOpT        .text              = "y Operation"       ;

    txt_nMemA      = new TextField()                         ;
    txt_nMemA       .name              = "txt_nMemA"         ; 
    txt_nMemA       .x                 = x0+1*dx - 25        ;
    txt_nMemA       .y                 = y1+dy+20*dy0-31     ;
    txt_nMemA       .width             = 65                  ;
    txt_nMemA       .height            = dy0                 ;
    txt_nMemA       .defaultTextFormat = format              ; 
    txt_nMemA       .selectable        = false               ;
    txt_nMemA       .text              = "x Table num"       ;

    txt_nMemB      = new TextField()                         ;
    txt_nMemB       .name              = "txt_nMemB"         ; 
    txt_nMemB       .x                 = x0+1*dx + 50        ;
    txt_nMemB       .y                 = y1+dy+20*dy0-31     ;
    txt_nMemB       .width             = 65                  ;
    txt_nMemB       .height            = dy0                 ;
    txt_nMemB       .defaultTextFormat = format              ; 
    txt_nMemB       .selectable        = false               ;
    txt_nMemB       .text              = "y Table num"       ;

    ns_nMemX       = new NumericStepper_U(this)              ;
    ns_nMemX        .name              = "ns_nMemX"          ;
    ns_nMemX        .x                 = x0+1*dx - 20        ; 
    ns_nMemX        .y                 = y1+dy+20*dy0-16     ;
    ns_nMemX        .width             = 65                  ;
    ns_nMemX        .minimum           = 1                   ;
    ns_nMemX        .maximum           = nMaxMem             ;
    ns_nMemX        .value             = 1                   ;
    ns_nMemX        .set_toolTip(0,1,mc_obj,"x-tabell nummer (0-10)");

    ns_nMemY       = new NumericStepper_U(this)              ;
    ns_nMemY        .name              = "ns_nMemY"          ;
    ns_nMemY        .x                 = x0+1*dx + 55        ;
    ns_nMemY        .y                 = y1+dy+20*dy0-16     ; 
    ns_nMemY        .width             = 65                  ;
    ns_nMemY        .minimum           = 1                   ;
    ns_nMemY        .maximum           = nMaxMem             ;
    ns_nMemY        .value             = 1                   ;
    ns_nMemY        .set_toolTip(0,1,mc_obj,"y-tabell nummer (0-10)");

    pb_sortX       = new Button_U(this)                      ;
    pb_sortX        .name              = "pb_sortX"          ;
    pb_sortX        .label             = "Sort x"            ;
    pb_sortX        .x                 = 750; //x0+1*dx +30         ;
    pb_sortX        .y                 = 60; //y1+dy-17            ;
    pb_sortX        .height            = 18                  ;
    pb_sortX        .width             = 65                  ;
    pb_sortX        .set_toolTip(-75,0,mc_obj,"Sorter x-tabell"); 

    pb_sortY       = new Button_U(this)                      ;
    pb_sortY        .name              = "pb_sortY"          ;
    pb_sortY        .label             = "Sort y"            ;
    pb_sortY        .x                 = 900; //x0+1*dx +180        ;
    pb_sortY        .y                 = 60; //y1+dy-17            ;
    pb_sortY        .height            = 18                  ;
    pb_sortY        .width             = 65                  ;
    pb_sortY        .set_toolTip(-90,0,mc_obj,"Sorter y-tabell"); 

    pb_clearX      = new Button_U(this)                      ;
    pb_clearX       .name              = "pb_clearX"         ;
    pb_clearX       .label             = "Clear x"           ;
    pb_clearX       .x                 = x0+1*dx - 20        ;
    pb_clearX       .y                 = y1+dy+20*dy0+9 +5     ;
    pb_clearX       .height            = 18                  ;
    pb_clearX       .width             = 65                  ;
    pb_clearX       .set_toolTip(0,1,mc_obj,"Blank gjeldende x-tabell"); 

    pb_clearY      = new Button_U(this)                      ;
    pb_clearY       .name              = "pb_clearY"         ;
    pb_clearY       .label             = "Clear y"           ;
    pb_clearY       .x                 = x0+1*dx + 55        ;
    pb_clearY       .y                 = y1+dy+20*dy0+9+5      ;
    pb_clearY       .height            = 18                  ;
    pb_clearY       .width             = 65                  ;
    pb_clearY       .set_toolTip(0,1,mc_obj,"Blank gjeldende y-tabell");

    pb_copyNextX   = new Button_U(this)                      ;
    pb_copyNextX    .name              = "pb_copyNextX"      ;
    pb_copyNextX    .label             = "Copy x"            ;
    pb_copyNextX    .x                 = x0+1*dx - 20        ;
    pb_copyNextX    .y                 = y1+dy+20*dy0+9 - 60 ;
    pb_copyNextX    .height            = 18                  ;
    pb_copyNextX    .width             = 65                  ;
    pb_copyNextX    .set_toolTip(0,1,mc_obj,"Kopierer gjeldende x-tabell til neste x-tabell");

    pb_copyNextY   = new Button_U(this)                      ;
    pb_copyNextY    .name              = "pb_copyNextY"      ;
    pb_copyNextY    .label             = "Copy y"            ;
    pb_copyNextY    .x                 = x0+1*dx + 55        ;
    pb_copyNextY    .y                 = y1+dy+20*dy0+9 - 60 ;
    pb_copyNextY    .height            = 18                  ;
    pb_copyNextY    .width             = 65                  ;
    pb_copyNextY    .set_toolTip(0,1,mc_obj,"Kopierer gjeldende y-tabell til neste y-tabell");



    mc_obj.addChild(txt_x[0]  );
    mc_obj.addChild(txt_y[0]  );
    for(var i:int=1;i<=nMax;i++)  {
      mc_obj.addChild(txt_x[i]);
      mc_obj.addChild(txt_y[i]);
    }
    mc_obj   .addChild(sb_scroll    );
    mc_obj   .addChild(cmb_opX      );
    mc_obj   .addChild(cmb_opY      );
    mc_obj   .addChild(cb_multiGraph);
    mc_obj   .addChild(cb_pair      );
    mc_obj   .addChild(txt_xOpT     );
    mc_obj   .addChild(txt_yOpT     );
    mc_obj   .addChild(txt_nMemA    );
    mc_obj   .addChild(txt_nMemB    );
    mc_obj   .addChild(ns_nMemX     );
    mc_obj   .addChild(ns_nMemY     );
    mc_objPb .addChild(pb_sortX     );
    mc_objPb .addChild(pb_sortY     );
    mc_obj   .addChild(pb_clearX    );
    mc_obj   .addChild(pb_clearY    );
    mc_obj   .addChild(pb_copyNextY );
    mc_obj   .addChild(pb_copyNextX );
  }
  /*--------------------------------------------------------------------------------------------- init_listener ---*/

  private function init_listener() {

    cmb_opX      .addEventListener(Event       .CHANGE, action_cmbOpX      );
    cmb_opY      .addEventListener(Event       .CHANGE, action_cmbOpY      );
    cb_multiGraph.addEventListener(MouseEvent  .CLICK , action_cbMultiGraph);
    cb_pair      .addEventListener(MouseEvent  .CLICK , action_cbPair      );
    ns_nMemX     .addEventListener(Event       .CHANGE, action_nsMemX      );
    ns_nMemY     .addEventListener(Event       .CHANGE, action_nsMemY      );
    pb_sortX     .addEventListener(MouseEvent  .CLICK , action_pbSortX     );
    pb_sortY     .addEventListener(MouseEvent  .CLICK , action_pbSortY     );
    pb_clearX    .addEventListener(MouseEvent  .CLICK , action_click       )  
    pb_clearY    .addEventListener(MouseEvent  .CLICK , action_click       ); 
    pb_copyNextX .addEventListener(MouseEvent  .CLICK , action_click       );
    pb_copyNextY .addEventListener(MouseEvent  .CLICK , action_click       );
    sb_scroll    .addEventListener(ScrollEvent .SCROLL, action_sbScroll    );
    for(var i:int=1;i<=nMax;i++) {
      txt_x[i]   .addEventListener(Event.CHANGE       , action_changeTabX  );
      txt_y[i]   .addEventListener(Event.CHANGE       , action_changeTabY  );
    }

  }
  /*---------------------------------------------------------------------------------------------------- action ---*/

  private function action_cbMultiGraph(evt:MouseEvent) {
    bMultiGraph = evt.target.selected;
    if(bMultiGraph) {
      owner.show_allCurrentGraph(); }
    else {
      owner.clear_nonCurrentGraph();
    }
  }
  private function action_cbPair(evt:MouseEvent) {
    bPair = evt.target.selected;
    owner.set_pair(bPair);
  }
  public function action_changeTabX(evt:Event) {
    var nCounter :Number = 0;
    owner.clearPoint_fromTable();
    owner.clearFunction_fromTable();
    xMax = 0;
    //xMax = Math.abs(Number(txt_x[1].text));
    for(var i:int=1;i<=nMax;i++) {
      sX[i] = txt_x[i].text;    nX[i] = xyCompute(sX[i]);   txt_xMem[nMemCurrentX][i] = sX[i];
      if(sX[i] != "" && sY[i] != "" && !isNaN(nX[i]) && !isNaN(nY[i])) {
        owner.drawPoint_fromTable(nX[i],nY[i]);
        nCounter++;
      }
      if(sX[i] != "" && !isNaN(nX[i]) && Math.abs(nX[i])>xMax) {
        xMax = Math.abs(nX[i]);
      }
    }
    if(nCounter>=2) {
      owner.drawFunction_fromTable();
    }
    test_rescaleX(xMax);
    //owner.set_pointTabXY(sX,sY,nMax); 
  }
/*
  public function action_changeTabX(evt:Event) {
    var nCounter :Number = 0;
    owner.clearPoint_fromTable();
    owner.clearFunction_fromTable();
    xMax = 0;
    //xMax = Math.abs(Number(txt_x[1].text));
    for(var i:int=1;i<=nMax;i++) {
      sX[i] = txt_x[i].text;    nX[i] = Number(sX[i]);   txt_xMem[nMemCurrentX][i] = sX[i];
      if(sX[i] != "" && sY[i] != "" && !isNaN(nX[i]) && !isNaN(nY[i])) {
        owner.drawPoint_fromTable(nX[i],nY[i]);
        nCounter++;
      }
      if(sX[i] != "" && !isNaN(nX[i]) && Math.abs(nX[i])>xMax) {
        xMax = Math.abs(nX[i]);
      }
    }
    if(nCounter>=2) {
      owner.drawFunction_fromTable();
    }
    test_rescaleX(xMax);
    //owner.set_pointTabXY(sX,sY,nMax); 
  }
*/
  private function act_changeTabX() {
    var nCounter :Number = 0;
    owner.clearPoint_fromTable();
    owner.clearFunction_fromTable();
    xMax = 0;
    //xMax = Math.abs(Number(txt_x[1].text));
    for(var i:int=1;i<=nMax;i++) {
      sX[i] = txt_x[i].text;    nX[i] = xyCompute(sX[i]);   txt_xMem[nMemCurrentX][i] = sX[i];
      if(sX[i] != "" && sY[i] != "" && !isNaN(nX[i]) && !isNaN(nY[i])) {
        owner.drawPoint_fromTable(nX[i],nY[i]);
        nCounter++;
      }
      if(sX[i] != "" && !isNaN(nX[i]) && Math.abs(nX[i])>xMax) {
        xMax = Math.abs(nX[i]);
      }
    }
    if(nCounter>=2) {
      owner.drawFunction_fromTable();
    }
  }
  public function action_changeTabY(evt:Event) {
    var nCounter :Number = 0;
    owner.clearPoint_fromTable();
    owner.clearFunction_fromTable();
    yMax = 0;
    //yMax = Math.abs(Number(txt_y[1].text));
    for(var i:int=1;i<=nMax;i++) {
      sY[i] = txt_y[i].text;    nY[i] = xyCompute(sY[i]);   txt_yMem[nMemCurrentY][i] = sY[i];
      if(sX[i] != "" && sY[i] != "" && !isNaN(nX[i]) && !isNaN(nY[i])) {
        owner.drawPoint_fromTable(nX[i],nY[i]);
        nCounter++;
      }
      if(sY[i] != "" && !isNaN(nY[i]) && Math.abs(nY[i])>yMax) {
        yMax = Math.abs(nY[i]);
      }
    }
    if(nCounter>=2) {
      owner.drawFunction_fromTable();
    }
    if(sY[i] != "" && !isNaN(nY[i]) && Math.abs(nY[i])>yMax) {
       yMax = Math.abs(nY[i]);
    }
    test_rescaleY(yMax);
    //trace(sY);trace("");
    //trace(nCounter);
    //trace(sY); 
    //owner.set_pointTabXY(sX,sY,nMax); 
  }
  private function act_changeTabY() {
    var nCounter :Number = 0;
    owner.clearPoint_fromTable();
    owner.clearFunction_fromTable();
    yMax = 0;
    //yMax = Math.abs(Number(txt_y[1].text));
    for(var i:int=1;i<=nMax;i++) {
      sY[i] = txt_y[i].text;    nY[i] = xyCompute(sY[i]);   txt_yMem[nMemCurrentY][i] = sY[i];
      if(sX[i] != "" && sY[i] != "" && !isNaN(nX[i]) && !isNaN(nY[i])) {
        owner.drawPoint_fromTable(nX[i],nY[i]);
        nCounter++;
      }
      if(sY[i] != "" && !isNaN(nY[i]) && Math.abs(nY[i])>yMax) {
        yMax = Math.abs(nY[i]);
      }
    }
    if(nCounter>=2) {
      owner.drawFunction_fromTable();
    }
    if(sY[i] != "" && !isNaN(nY[i]) && Math.abs(nY[i])>yMax) {
       yMax = Math.abs(nY[i]);
    }
  }

  private function draw_afterChange() {
    var nCounter :Number = 0;
    owner.clearPoint_fromTable();
    for(var i:int=1;i<=nMax;i++) {
      sY[i] = txt_y[i].text;    nY[i] = Number(sY[i]);   txt_yMem[nMemCurrentY][i] = sY[i];
      if(sX[i] != "" && sY[i] != "" && !isNaN(nX[i]) && !isNaN(nY[i])) {
        owner.drawPoint_fromTable(nX[i],nY[i]);
        nCounter++;
      }
    }
    if(nCounter>=2) {
      owner.drawFunction_fromTable();
    }
  }

  private function action_cmbOpX         (evt:Event        )  {
    var sMType :String = cmb_opX.selectedItem.label;
    if(sMType != "Stand") {
      for(var i:int=1;i<=nMax;i++) {
        txt_xMemStand[nMemCurrentX][i] = sX[i];
      }
    }
    switch (sMType) {
      case "Stand"   : opStandX (); break;             // number of click             
      case "^2"      : opPow2X  (); break;
      case "^3"      : opPow3X  (); break;
      case "Sqrt"    : opSqrtX  (); break;
      case "exp"     : opExpX   (); break;
      case "ln"      : opLnX    (); break;
      case "log"     : opLogX   (); break;
    }
    draw_afterChange();
  }
  private function action_cmbOpY         (evt:Event        )  {
    var sMType :String = cmb_opY.selectedItem.label;
    if(sMType != "Stand") {
      for(var i:int=1;i<=nMax;i++) {
        txt_yMemStand[nMemCurrentY][i] = sY[i];
      }
    }
    switch (sMType) {
      case "Stand"   : opStandY (); break;             // number of click             
      case "^2"      : opPow2Y  (); break;
      case "^3"      : opPow3Y  (); break;
      case "Sqrt"    : opSqrtY  (); break;
      case "exp"     : opExpY   (); break;
      case "ln"      : opLnY    (); break;
      case "log"     : opLogY   (); break;
    }
    draw_afterChange();
  }

  private function opStandX() {
    for(var i:Number=1; i<=nMax; i++) {
      if(txt_xMemStand[nMemCurrentX][i] != "") {
        sX[i] = txt_xMemStand[nMemCurrentX][i];  nX[i] = sX[i].toString();  txt_x[i].text = sX[i];
      }
    }
  }
  private function opPow2X () {
     for(var i:Number=1; i<=nMax; i++) {
      if(sX[i] != "") {
        nX[i] = Math.pow(nX[i],2);  sX[i] = nX[i].toString();  txt_x[i].text = sX[i];
      }
    }
  }
  private function opPow3X () {
    for(var i:Number=1; i<=nMax; i++) {
      if(sX[i] != "") {
        nX[i] = Math.pow(nX[i],3);  sX[i] = nX[i].toString();  txt_x[i].text = sX[i];
      }
    }
  }
  private function opSqrtX () {
    for(var i:Number=1; i<=nMax; i++) {
      if(sX[i] != "") {
        nX[i] = Math.sqrt(nX[i]);  sX[i] = nX[i].toString();  txt_x[i].text = sX[i];
      }
    }
  }
  private function opExpX  () {
    for(var i:Number=1; i<=nMax; i++) {
      if(sX[i] != "") {
        nX[i] = Math.exp(nX[i]);  sX[i] = nX[i].toString();  txt_x[i].text = sX[i];
      }
    }
  }
  private function opLnX   () {
    for(var i:Number=1; i<=nMax; i++) {
      if(sX[i] != "") {
        nX[i] = Math.log(nX[i]);  sX[i] = nX[i].toString();  txt_x[i].text = sX[i];
      }
    }
  }
  private function opLogX  () {
    for(var i:Number=1; i<=nMax; i++) {
      if(sX[i] != "") {
        nX[i] = Math.log(nX[i])/Math.log(10);  sX[i] = nX[i].toString();  txt_x[i].text = sX[i];
      }
    }
  }
  private function opStandY() {
    for(var i:Number=1; i<=nMax; i++) {
      if(txt_yMemStand[nMemCurrentY][i] != "") {
        sY[i] = txt_yMemStand[nMemCurrentY][i];  nY[i] = sY[i].toString();  txt_y[i].text = sY[i];
      }
    }
  }
  private function opPow2Y () {
    for(var i:Number=1; i<=nMax; i++) {
      if(sY[i] != "") {
        nY[i] = Math.pow(nY[i],2);  sY[i] = nY[i].toString();  txt_y[i].text = sY[i];
      }
    }
  }
  private function opPow3Y () {
     for(var i:Number=1; i<=nMax; i++) {
      if(sY[i] != "") {
        nY[i] = Math.pow(nY[i],3);  sY[i] = nY[i].toString();  txt_y[i].text = sY[i];
      }
    }
  }
  private function opSqrtY () {
    for(var i:Number=1; i<=nMax; i++) {
      if(sY[i] != "") {
        nY[i] = Math.sqrt(nY[i]);  sY[i] = nY[i].toString();  txt_y[i].text = sY[i];
      }
    }
  }
  private function opExpY  () {
    for(var i:Number=1; i<=nMax; i++) {
      if(sY[i] != "") {
        nY[i] = Math.exp(nY[i]);  sY[i] = nY[i].toString();  txt_y[i].text = sY[i];
      }
    }
  }
  private function opLnY   () {
    for(var i:Number=1; i<=nMax; i++) {
      if(sY[i] != "") {
        nY[i] = Math.log(nY[i]);  sY[i] = nY[i].toString();  txt_y[i].text = sY[i];
      }
    }
  }
  private function opLogY  () {
    for(var i:Number=1; i<=nMax; i++) {
      if(sY[i] != "") {
        nY[i] = Math.log(nY[i])/Math.log(10);  sY[i] = nY[i].toString();  txt_y[i].text = sY[i];
      }
    }
  }

  private function action_nsMemX         (evt:Event        )  {         // nsMem
    nMemCurrentX = ns_nMemX.value;
    nMemCurrentProd = nMemCurrentX * nMemCurrentY;
    owner.set_currentGraph(nMemCurrentX,nMemCurrentY);
    var nCounter :Number = 0;
    clearTableSNX();
    for(var i:int=1;i<=nMax;i++) {
      txt_x[i].text = txt_xMem[nMemCurrentX][i];
      sX[i]         = txt_x[i].text;
      nX[i]         = Number(sX[i]);
      if(sX[i] != "" && sY[i] != "" && !isNaN(nX[i]) && !isNaN(nY[i])) {
        owner.drawPoint_fromTable(nX[i],nY[i]);
        nCounter++;
      }
    }
    //trace("nX   " + nX);
    //trace("nY   " + nY);  trace("");
    if(nCounter>=2) {
      owner.drawFunction_fromTable();
    }
    if(bMultiGraph) {
      owner.show_allCurrentGraph(); }
    else {
      owner.clear_nonCurrentGraph();
    }
    act_changeTabX();
    //owner.clearPoint_fromTable();
    //owner.clearGraph();
    //owner.drawFunction_fromTable();
  }
  private function action_nsMemY         (evt:Event        )  {         // nsMem
    nMemCurrentY = ns_nMemY.value;
    nMemCurrentProd = nMemCurrentX * nMemCurrentY;
    owner.set_currentGraph(nMemCurrentX,nMemCurrentY);
    var nCounter :Number = 0;
    clearTableSNY();
    owner.clearPoint_fromTable();
    owner.clearGraph();       
    for(var i:int=1;i<=nMax;i++) {
      txt_y[i].text = txt_yMem[nMemCurrentY][i];
      sY[i]         = txt_y[i].text;
      nY[i]         = Number(sY[i]);
      if(sX[i] != "" && sY[i] != "" && !isNaN(nX[i]) && !isNaN(nY[i])) {
        owner.drawPoint_fromTable(nX[i],nY[i]);
        nCounter++;
      }
    }
    //trace("nX   " + nX);
    //trace("nY   " + nY);  trace("");
    if(nCounter>=2) {
      owner.drawFunction_fromTable();
    }
    if(bMultiGraph) {
      owner.show_allCurrentGraph(); }
    else {
      owner.clear_nonCurrentGraph();
    }
    act_changeTabY();
  }
  private function clearTableSNX() {
    for(var i:int=1;i<=nMax;i++) {
      sX[i] = "";
      nX[i] = "";
    }
  }
  private function clearTableSNY() {
    for(var i:int=1;i<=nMax;i++) {
     sY[i] = "";
     nY[i] = "";
    }
  }
  public function insertTable(xPos:Number,yPos:Number) {
    var i :int = 1;
    while(i<=nMax && sX[i] != "")  {
      i++;
    }
    if(i<=nMax) {
      nX[i] = xPos;   sX[i] = xPos.toString();   txt_xMem[nMemCurrentX][i] = sX[i];   txt_x[i].text = sX[i];
      nY[i] = yPos;   sY[i] = yPos.toString();   txt_yMem[nMemCurrentY][i] = sY[i];   txt_y[i].text = sY[i];
    }
    sortTable();
    if(i>=2) {
      owner.drawFunction_fromTable();
    }
  }

  private function action_pbSortX(evt:MouseEvent) { //trace("sort");
    sortTable();
  }
  private function action_pbSortY(evt:MouseEvent) { //trace("sort");
    sortTableY();
  }
  private function sortTable() {
    remove_empty();
    var nXTmp :Array = new Array(nMax+1);
    var nYTmp :Array = new Array(nMax+1);
    var nCount:int   = 0;
    for(var i:int=1;i<=nMax;i++) {
      if(nX[i] != "") {
        nCount++;
        nXTmp[nCount] = nX[i];
        nYTmp[nCount] = nY[i];
      }
    }
    var xTmp :Number        ;
    var yTmp :Number        ;
    var j    :int     = 1   ;
    var bytt :Boolean = true;
    while(bytt) {
      bytt = false;
      for(var k=1;k<=nCount-j;k++) {
        if(nXTmp[k]>nXTmp[k+1]) {
          bytt       = true      ;
          xTmp       = nXTmp[k]  ;   yTmp       = nYTmp[k]  ;
          nXTmp[k]   = nXTmp[k+1];   nYTmp[k]   = nYTmp[k+1];
          nXTmp[k+1] = xTmp      ;   nYTmp[k+1] = yTmp      ;
        }
      }
      j++;
    }
    for(var m:int=1;m<=nCount;m++) {
      nX[m]                     = nXTmp[m]           ;  nY[m]                     = nYTmp[m]           ;
      sX[m]                     = nXTmp[m].toString();  sY[m]                     = nYTmp[m].toString();
      txt_x[m].text             = sX[m]              ;  txt_y[m].text             = sY[m]              ;
      txt_xMem[nMemCurrentX][m] = sX[m]              ;  txt_yMem[nMemCurrentY][m] = sY[m]              ;
    }
  }

  private function sortTableY() {
    remove_empty();
    var nXTmp :Array = new Array(nMax+1);
    var nYTmp :Array = new Array(nMax+1);
    var nCount:int   = 0;
    for(var i:int=1;i<=nMax;i++) {
      if(nY[i] != "") {
        nCount++;
        nXTmp[nCount] = nX[i];
        nYTmp[nCount] = nY[i];
      }
    }
    var xTmp :Number        ;
    var yTmp :Number        ;
    var j    :int     = 1   ;
    var bytt :Boolean = true;
    while(bytt) {
      bytt = false;
      for(var k=1;k<=nCount-j;k++) {
        if(nYTmp[k]>nYTmp[k+1]) {
          bytt       = true      ;
          xTmp       = nXTmp[k]  ;   yTmp       = nYTmp[k]  ;
          nXTmp[k]   = nXTmp[k+1];   nYTmp[k]   = nYTmp[k+1];
          nXTmp[k+1] = xTmp      ;   nYTmp[k+1] = yTmp      ;
        }
      }
      j++;
    }
    for(var m:int=1;m<=nCount;m++) {
      nX[m]                     = nXTmp[m]           ;  nY[m]                     = nYTmp[m]           ;
      sX[m]                     = nXTmp[m].toString();  sY[m]                     = nYTmp[m].toString();
      txt_x[m].text             = sX[m]              ;  txt_y[m].text             = sY[m]              ;
      txt_xMem[nMemCurrentX][m] = sX[m]              ;  txt_yMem[nMemCurrentY][m] = sY[m]              ;
    }
  }
  private function remove_empty() {
    var sXTmp :Array = new Array(nMax+1);
    var sYTmp :Array = new Array(nMax+1);
    for(var i:int=1;i<=nMax;i++) {
       sXTmp[i] = "";   sYTmp[i] = "";
    }
    var j     :int   = 1;
    for(var i:int=1;i<=nMax;i++) {
      if(sX[i] != "" && sY[i] != "") {
         sXTmp[j] = sX[i];    sYTmp[j] = sY[i];
         j++;
      }
    }
    //trace(sXTmp);
    for(var i:int=1;i<=nMax;i++) {
      sX[i]                     = sXTmp[i];   sY[i]                    = sYTmp[i];
      txt_x[i].text             = sX[i]   ;   txt_y[i].text             = sY[i]   ;
      txt_xMem[nMemCurrentX][i] = sX[i]   ;   txt_yMem[nMemCurrentY][i] = sY[i]   ;
      //if(sX[i] != "" && sY[i] != "") {
      //  nX[i] = Number(sX[i]);   nY[i] = Number(sY[i]);
      //}
      if(sX[i] != "") {
        nX[i] = Number(sX[i]);  }
      else {
        nX[i] = ""; 
      }
      if(sY[i] != "") {
        nY[i] = Number(sY[i]);  }
      else {
        nY[i] = ""; 
      }
    }
    //trace(sX);
  }
  /*-------------------------------------------------------------------------------------------- action_pbClick ---*/
  
  public function action_click(evt:MouseEvent) {  
    switch (evt.target.name) {
      case "cb_xLog"      : set_xLog                 (cb_xLog.selected)    ;  break;
      case "cb_yLog"      : set_yLog                 (cb_yLog.selected)    ;  break;
      case "pb_openMem"   : open_mem                 ()                    ;  break;
      case "pb_saveMem"   : save_mem                 ()                    ;  break;
      case "pb_clearX"    : clear_tabX               ()                    ;  break;
      case "pb_clearY"    : clear_tabY               ()                    ;  break;
      case "pb_copyNextX" : copy_nextX               ()                    ;  break;
      case "pb_copyNextY" : copy_nextY               ()                    ;  break;
    }
  }
  /*------------------------------------------------------------------------------------------- action_sbScroll ---*/

  private function action_sbScroll(evt:ScrollEvent) {
    sbScroll(sb_scroll.scrollPosition);
  }
  private function sbScroll(nScroll:Number) {
    var dy       :Number = 20 ;
    var n        :Number = dy0;
    for(var i:int=1;i<=nMax;i++) {
      txt_x[i] .y        = y1 + dy + i*dy0 - n*Math.round(nScroll) - 15                ;
      txt_x[i] .visible  = (txt_x[i].y >= y1+dy+dy0-15 && txt_x[i].y <= y1+dy+10*dy0-15);
      txt_y[i] .y        = y1 + dy + i*dy0 - n*Math.round(nScroll) - 15                ;
      txt_y[i] .visible  = (txt_y[i].y >= y1+dy+dy0-15 && txt_y[i].y <= y1+dy+10*dy0-15);
    }
  }
  /*---------------------------------------------------------------------------------------- action_changeXYTab ---*/

  public function action_changeXYTab(evt:Event) {  
    switch (evt.target.name) {
      case "txt_xStart" : 
      case "txt_xEnd"   : 
    }
  }
  private function open_mem() {
    for(var i:int=1;i<=nMax;i++) {
      txt_x[i].text = txt_xMem[nMemCurrentX][i];
      txt_y[i].text = txt_yMem[nMemCurrentY][i];
    }
    for(var i:int=1;i<=nMax;i++) {
      sX[i] = txt_x[i].text;    nX[i] = Number(sX[i]);
      sY[i] = txt_y[i].text;    nY[i] = Number(sY[i]);
    }
    owner.set_pointTabXY(sX,sY,nMax); 
  }
  private function save_mem() {
    for(var i:int=1;i<=nMax;i++) {
      txt_xMem[nMemCurrentX][i] = txt_x[i].text;
      txt_yMem[nMemCurrentY][i] = txt_y[i].text;
    }
  }
  /*------------------------------------------------------------------------------------------------- set_xyTab ---*/

  public function transferDataCopyToTable(xArray:Array,yArray:Array) {
    for(var i:int=1;i<=100;i++) {
      txt_x[i].text = "";
      txt_y[i].text = "";
    }
    for(var i:int=0;i<xArray.length;i++) {
      txt_x[i+1].text = xArray[i];
    }
    for(var i:int=0;i<yArray.length;i++) {
      txt_y[i+1].text = yArray[i];
    }

    bTransferDataLMS = true;
  }
  /*--------------------------------------------------------------------------------------------------------- f ---*/

  public function f(x:Number) :Number {   
    return owner.get_tabValueY(x);
  }
  /*----------------------------------------------------------------------------------------------------- set_xLog */

  public function set_xLog(bLog:Boolean) {
    if(bLog) {
      for(var i:Number=1; i<=10; i++) {
        xOld[i] = Number(txt_x[i].text);
        if(Number(txt_x[i].text) > 0) {
          txt_x[i].text = (Math.log(Number(txt_x[i].text))).toString(); }
        else {
          txt_x[i].text = "";
        } 
      } }
    else {
      for(var i:Number=1; i<=10; i++) {
        txt_x[i].text = (xOld[i]).toString();
      }
    }
  }
  /*----------------------------------------------------------------------------------------------------- set_yLog */

  public function set_yLog(bLog:Boolean) {
     if(bLog) {
      for(var i:Number=1; i<=10; i++) {
        yOld[i] = Number(txt_y[i].text);
        if(Number(txt_y[i].text) > 0) {
          txt_y[i].text = (Math.log(Number(txt_y[i].text))).toString(); }
        else {
          txt_y[i].text = "";
        } 
      } }
    else {
      for(var i:Number=1; i<=10; i++) {
        txt_y[i].text = (yOld[i]).toString();
      }
    }
  }
  /*------------------------------------------------------------------------------------------------ clear_tabX ---*/

  public function clear_tabX() {
    for(var i=1;i<=100;i++) {
      txt_x[i].text             = "";   sX[i]                     = "";  nX[i] = "";
    //txt_y[i].text             = "";   sY[i]                     = "";  nY[i] = "";
      txt_xMem[nMemCurrentX][i] = ""; //txt_yMem[nMemCurrentY][i] = "";
    }
    owner.clearPoint_fromTable();
    owner.clearGraph();
    sb_scroll.scrollPosition = 0;
  }

  public function clear_tabY() {
    for(var i=1;i<=100;i++) {
      txt_y[i].text             = "";   sY[i] = "";  nY[i] = "";
      txt_yMem[nMemCurrentY][i] = "";
    }
    owner.clearPoint_fromTable();
    owner.clearGraph();
    sb_scroll.scrollPosition = 0;
  }

   public function copy_nextX() {
    if(nMemCurrentX<10) {
      for(var i=1;i<=100;i++) {
        txt_xMem[nMemCurrentY+1][i] = sX[i]; 
      }
    }
  }
  public function copy_nextY() {
    if(nMemCurrentY<10) {
      for(var i=1;i<=100;i++) {
        txt_yMem[nMemCurrentY+1][i] = sY[i]; 
      }
    }
  }

  public function set_autoScale(bAutoScale:Boolean) {
    this.bAutoScale = bAutoScale;
    if(!bAutoScale) {
      owner.test_rescaleX(5);
      owner.test_rescaleY(5);
    }
  }
  public function test_rescale() {
    test_rescaleX(xMax);
    test_rescaleY(yMax);
  }
  private function test_rescaleX(xMax:Number) {
    if(bAutoScale && xMax>0) {
      owner.test_rescaleX(xMax);
    }
  }
  private function test_rescaleY(yMax:Number) {
    if(bAutoScale && yMax>0) {
      owner.test_rescaleY(yMax);
    }
  }
  /*-------------------------------------------------------------------------------------------- keyDownHandler ---*/

  public function keyDownHandler(evt:KeyboardEvent) {
    var key  :Number = evt.keyCode             ;  
    var sp   :Number = sb_scroll.scrollPosition;
    switch(key) {
      case 19  :
      case 33  :  if(sp>10) {
                    sb_scroll.scrollPosition = sb_scroll.scrollPosition - 10; }
                  else {
                    sb_scroll.scrollPosition = 0;
                  }  
                  sbScroll(sb_scroll.scrollPosition);break;
      case 3   :
      case 34  :  if(sp<80) {
                    sb_scroll.scrollPosition = sb_scroll.scrollPosition + 10; }
                  else {
                    sb_scroll.scrollPosition = 90; 
                  }  
                  sbScroll(sb_scroll.scrollPosition);  break;
      case 38  :  if(sp>0) {
                    sb_scroll.scrollPosition--;
                    sbScroll(sb_scroll.scrollPosition);  
                  }  break;
      case 40  :  if(sp<90) {
                    sb_scroll.scrollPosition++;
                    sbScroll(sb_scroll.scrollPosition);  
                  }  break;
    }
  }

  public function get_xTab() :Array {
    return sX;
  }
  public function get_yTab() :Array {
    return sY;
  }

  private function xyCompute(s:String) :Number {
    var nValue :Number = 0;
    try {
      fC.infixPostfix(s);
      nValue = fC.postfixValue(0);
      throw new Error("Error Function");
    }
    catch(errorObject:Error) {
    }
    return nValue;
  }
  /*------------------------------------------------------------------------------------------------ show_table ---*/

  public function show_table(bShow:Boolean) {
    mc.visible = bShow;
    //if(bShow && !bTransferDataLMS) {
    //  set_xyTab();
    //}
    bTransferDataLMS = false;
  }
  /*------------------------------------------------------------------------------------------------ is_toolTip ---*/

  public function is_toolTip() :Boolean {
    return owner.is_toolTip(); 
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}
/*=================================================================================================================*/