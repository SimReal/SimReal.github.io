/*============================================================================================== Prog2D_Field ===*/

function Prog2D_Field() {


  var layerSimL        = null;                                         //          simulation window object      
  var layerObjL        = null;                                         //          control    window object

  var layerSim         = null;                                         //          simulation window      
  var layerObj         = null;                                         //          control    window


  var mc_fig           ;

  var mc_graph         ;
  var mc_grid          ;
  var mc_axis          ; 
  var mc_F             ;
  var mc_FPoint        ;


  var x0Current              = 250;
  var y0Current              = 205;
  var xMin                   =  x0-225;
  var yMin                   =  y0-170; 

  var xMax                   = x0+220  ;
  var yMax                   = y0+180  ; 
  var zMax                   = z0 + 180;

  var txt_M            ;
  var txt_N            ;

  var cb_rot           ;
  var pb_reset         ;


  var xCb                   = 10;
  var yCb                   = 30;
  var dxCb                  = 60;
  var dyCb                  = 18;
                    

  var x0Graph                = 125        ;
  var y0Graph                = 250        ;
  var xScaleGraph            = 1/25       ;
  var yScaleGraph            = 1/25       ;
  var zScaleGraph            = 1/25       ;
  var x0_mc3D                = 125        ;
  var y0_mc3D                = 250        ;
  var x00                    = 0          ;
  var y00                    = 0          ;
  var z00                    = 0          ;
  var x0                     = 0          ;
  var y0                     = 0          ;
  var z0                     = 0          ;
  
  var xRotMax                = 490;

  var xMinGraph              = 15-x0Graph -50;
  var yMinGraph              = 31-y0Graph ;
  var xMaxGraph              = 340-x0Graph;
  var yMaxGraph              = 390-y0Graph;

  var alphaInit              = 110        ;
  var thetaInit              = 15         ;
  var nRotStep               = 10         ;

  var xMousePosDown    ;
  var yMousePosDown    ;
  var xMousePosMove    ;
  var yMousePosMove    ;
  var xMousePosUp      ;
  var yMousePosUp      ;
  var xMousePosPrev    ;
  var yMousePosPrev    ;

  var nAlpha           :Array   ; 
  var iso              :Isometric;
  var vectorAxis       :Vector   ;
  var vectorF          :Vector   ;
  var vectorFPoint     :Vector   ;

  var bDrag            :Boolean = false;
  var bRot             :Boolean = true;
  

  var grc              :Graphics;
  var grcGraph         :Graphics;

  var txt_xAxisA       :TextField  ;
  var txt_yAxisA       :TextField  ;
  var txt_zAxisA       :TextField  ;

  var nColor           :Array;

  var sb_fac           :ScrollBar;
  var nFac              = 1;

  var pb_resetNfac     :Button;
       
  var txt_FT           :TextField;
  var txt_MT           :TextField;
  var txt_NT           :TextField;
  var cb_grid          :CheckBox;
  var cb_gridSnap      :CheckBox;
  var cb_gridF         :CheckBox;
  var cb_FPoint        :CheckBox;
  var cb_FAuto         :CheckBox;
  var pb_clearF        :Button;
  var nM               ;
  var nN               ;
  var pointF           :Point_F;
  var fCM              :FunctionCompute2;
  var fCN              :FunctionCompute2;
  var bZeroError = false     ;

  var sHead;
  var sInfo;


  this.init                 = init             ;   //  public function
  this.derivative           = derivative       ;
  this.checkH               = checkH           ;
  this.qtrap                = qtrap            ;
  this.qSimp                = qSimp            ;
  this.newton               = newton           ;
  this.get_bZero            = get_bZero        ;
  this.rtbis                = rtbis            ;
  this.minMax               = minMax           ;
  this.goldenMin            = goldenMin        ;
  this.goldenMax            = goldenMax        ; 
  this.minMax               = minMax           ;
  this.lsm_exponential_A    = lsm_exponential_A;
  this.lsm_exponential_B    = lsm_exponential_B;

  simStart();

  /*------------------------------------------------------------------------------------------------- init ---*/

  function simStart() {
   super(owner,st_parent,mc_dlg,mc_sim);
    init();

    sHead       = "2D Field";

    sInfo       = "\n" +
                  " The study of 2D vector field: \n\n" +

                  " F = F(x,y) = [F1,F2] = [F1(x,y),F2(x,y)] \n\n" +
 

                  " Write in the data field F1 and F2. \n" +
                  " Move the gray sphere around in the plane. \n" +
                  " From the sphere you will always see the vector field at the position of the sphere. \n" +
                  " You can show/hide the sphere by using the checkbox 'FPoint'. \n" +
                  " When the checkbox 'FAuto' is marked, \n" +
                  " a copy of the vectorfield will be put into the position of the sphere \n" +
                  " every time you release the mouse. \n" +
                  " If the checkboxes 'Grid' and 'GridSnap' are marked, the sphere (and copy of the vector field) \n" +
                  " will be located in the nearest grid position. \n\n" +
      
                  " F1                         : Data field for the x-component of the vector field \n" + 
                  " F2                         : Data field for the y-component of the vector field \n" +
                  " Grid                      : Shows the grid \n" +
                  " GridSnap              : Sphere with a copy of the vector field will be located at the nearest grid position \n" +
                  " GridF                    : Automatic appearence of the vector field at every grid position \n" +
                  " FAuto                   : Locate a copy of the vector field when the mouse is released. \n" +
                  " FPoint                   : Show/hide the gray moveable sphere with the associated vector field \n" +
                  " Clear VectorField : Clear the vector field";

    txt_head.text = sHead ;
    txt_info.text = sInfo ;

    init();
  }
  /*-------------------------------------------------------------------------------------------------- init 2 ---*/

  function init() {
    
    init_layer          ();                       // init layer
    init_canvas         ();                       //      canvas (graphical area)
    init_axis           ();                       //      coordinat axis
    init_vector         ();                       //      vector
    init_obj            ();                       //      control objects
    init_listener       ();                       //      actions of control objects  
    init_functionCompute();                       //      FunctionCompute

    init_mc      ();
    init_obj     ();
    init_listener();
    draw_grid    ();
    show_sim     (false);
  }
  /*------------------------------------------------------------------------------------------- init_layer ---*/

  function init_layer() {     
    layerSimL  = new CLayer('sim','#ffffff',10);  layerSim = layerSimL.get_obj();   
    layerObjL  = new CLayer('obj','#ffffff',10);  layerObj = layerObjL.get_obj(); 
  }
  /*------------------------------------------------------------------------------------------ init_canvas ---*/

  function init_canvas()    {
    cS_axis    = new CCanvas (layerSim,1,'#000000');
  }
  /*-------------------------------------------------------------------------------------------- init_axis ---*/

  function init_axis()     { 
    cS_axis.vector(x0-xLen,y0     ,x0+xLen,y0     ,1,'#0000FF');
    cS_axis.vector(x0     ,y0+yLen,x0     ,y0-yLen,1,'#0000FF');
    cS_axis.lineFromTo(100,200,150,150,5,'#FF00FF');
  //cS_axis.moveTo(x0-xLen,y0     ); cS_axis.lineTo(x0+xLen,y0     );
  //cS_axis.moveTo(x0     ,y0-yLen); cS_axis.lineTo(x0     ,y0+yLen);
  }
  /*--------------------------------------------------------------------------------------------------- init_mc ---*/

  override protected function init_mc() {
    super.init_mc();

    mc_graph     = new Sprite();            mc_graph .x  = 250;     mc_graph .y = 205;
    mc_grid      = new Sprite();            mc_grid  .x  = 250;     mc_grid  .y = 205;   mc_grid.visible = false;
    mc_axis      = new Sprite();            mc_axis  .x  = 250;     mc_axis  .y = 205;
    mc_F         = new Sprite();            mc_F     .x  = 250;     mc_F     .y = 205;   mc_F   .alpha   = 0.2;
    mc_FPoint    = new Sprite();            mc_FPoint.x  = 250;     mc_FPoint.y = 205;
   
    mc_simA       .addChild(mc_grid);
    mc_simA       .addChild(mc_axis);
    mc_simA       .addChild(mc_F   );
    mc_simA       .addChild(mc_FPoint);
    mc_simA       .addChild(mc_graph);

    

    var g:Graphics  = mc_info.graphics;
    g.clear    ()              ;
    g.lineStyle(0.5,0x000000,1);
    g.beginFill(0xFFFFEE)      ;
    g.drawRect (4,24,492,367)  ;
    g.endFill  ()              ;

    grc = mc_axis.graphics;
  }

  /*------------------------------------------------------------------------------------------------- init_obj ---*/

  override protected function init_obj() {
    super   .init_obj();
    
    cb_rot      = objMaker.make_checkBox_U    ("cb_rot","Rotation",20,168,true,0,1,mc_obj,this,"Rotasjon " ); 

    txt_FT      = objMaker.make_txtField  ("txt_FT",25,35,190,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"F = F(x,y) = [F1,F2] = [F1(x,y),F2(x,y)]",false,false);
    txt_MT      = objMaker.make_txtField  ("txt_MT",10,60, 20,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"F1",false,false);
    txt_NT      = objMaker.make_txtField  ("txt_NT",10,80, 20,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"F2",false,false);
    txt_M       = objMaker.make_txtField  ("txt_M" ,35,60,180,18,true,0xAAAAAA,true,0xEEEEEE,formatInfo,"",true,true);
    txt_N       = objMaker.make_txtField  ("txt_N" ,35,80,180,18,true,0xAAAAAA,true,0xEEEEEE,formatInfo,"",true,true);

    cb_grid     = objMaker.make_checkBox_U("cb_grid"    ,"Grid"    , 30,105,false,0,1,mc_obj,this,"Grid " );
    cb_gridSnap = objMaker.make_checkBox_U("cb_gridSnap","GridSnap",110,105,false,0,1,mc_obj,this,"GridSnap " );
    cb_gridF    = objMaker.make_checkBox_U("cb_gridF"   ,"GridF"   , 30,125,false,-5,1,mc_obj,this,"Show vector field in the grid position " );
    cb_FPoint   = objMaker.make_checkBox_U("cb_FPoint"  ,"FPoint"  , 30,165,true ,0,1,mc_obj,this,"Show sphere (point) " );
    cb_FAuto    = objMaker.make_checkBox_U("cb_FAuto"   ,"FAuto"   , 30,145,false,-5,1,mc_obj,this,"Show vector field when mouse released " );

    sb_fac      = objMaker.make_scrollBar_U ("sb_fac",115,140,1,1,1,0,100,1,1,1,1.0,false,0,1,mc_obj,this,"Factor ");
    sb_fac       .setScrollProperties(10,0,200,5);           
    sb_fac       .scrollPosition  = 100;
    sb_fac       .width           =  90;

    pb_resetNfac= objMaker.make_button_U  ("pb_resetNfac" ,210,140,  7,18,"Reset",0,1,mc_obj,this,"Reset factor ");

    pb_clearF   = objMaker.make_button_U  ("pb_clearF" ,115,165,100,20,"Clear VectorField",0,1,mc_obj,this,"Clear vector field ");

    mc_info    .addChild(txt_info    );
    mc_obj     .addChild(txt_head);
    mc_obj     .addChild(cb_info );   

    mc_obj     .addChild(txt_FT);
    mc_obj     .addChild(txt_MT);
    mc_obj     .addChild(txt_NT);
    mc_obj     .addChild(txt_M);
    mc_obj     .addChild(txt_N);
    mc_obj     .addChild(cb_grid);
    mc_obj     .addChild(cb_gridSnap);
    mc_obj     .addChild(cb_gridF);
    mc_obj     .addChild(cb_FPoint);
    mc_obj     .addChild(cb_FAuto);
    mc_obj     .addChild(pb_clearF);
    mc_obj     .addChild(sb_fac);
    mc_obj     .addChild(pb_resetNfac);
    mc_simA    .addChild(mc_info );

    grcGraph      = mc_axis.graphics;

    vectorAxis    = new Vector(mc_axis);
    vectorAxis     .arrow(xMin,y0  ,xMax+15,y0  ,0xAAAAAA);
    vectorAxis     .arrow(x0  ,y0+150,x0  ,y0-150-10,0xAAAAAA);

    vectorF       = new Vector(mc_F);
    vectorFPoint  = new Vector(mc_FPoint);
    
    pointF        = new Point_F(this,mc_FPoint,1,x0,y0,1,1,0.1);
    fCM           = new FunctionCompute2();
    fCN           = new FunctionCompute2();

  }
  /*--------------------------------------------------------------------------------------------- init_listener ---*/

  override protected function init_listener() {
    super.init_listener();
    txt_M     .addEventListener(Event     .CHANGE,actionTxtMN   );
    txt_N     .addEventListener(Event     .CHANGE,actionTxtMN   ); 
    cb_FPoint .addEventListener(MouseEvent.CLICK ,actionCbFPoint);
    cb_grid   .addEventListener(MouseEvent.CLICK ,actionCbGrid  );
    cb_gridF  .addEventListener(MouseEvent.CLICK ,actionCbGridF );
    pb_clearF .addEventListener(MouseEvent.CLICK ,actionPbClearF); 
    pb_resetNfac .addEventListener(MouseEvent .CLICK ,actionPbResetNfac); 
    sb_fac       .addEventListener(ScrollEvent.SCROLL,action_sbFac     );
  }
  /*---------------------------------------------------------------------------------------------------- action ---*/

  private function actionPbResetNfac(evt:MouseEvent) {
    nFac = 1;
    sb_fac.scrollPosition = 100;
  //actTxtMN();
  }

  private function action_sbFac(evt:ScrollEvent) {
    var n :Number = evt.target.scrollPosition;
    nFac = 1+(n-100)/100;   //trace(nFac);
  //if(rx != "" && ry != "") {
    actTxtMN();
    //draw_vectorF(pointF.x,pointF.y);
    //move_point(n);
  //}
  }

  private function actionCbInfo(evt:MouseEvent) {
    mc_info.visible = evt.target.selected;
  }

  private function actionCbGrid(evt:MouseEvent) {
    mc_grid.visible = evt.target.selected;
  }
  private function actionCbGridF(evt:MouseEvent) {
    if(evt.target.selected) {
     draw_vectorFGridF(); }
    else {
      mc_F.graphics.clear();
    }
  }

  private function actionCbFPoint(evt:MouseEvent) {
    mc_FPoint.graphics.clear();
    mc_FPoint.visible = evt.target.selected;
  }

  private function actionPbClearF(evt:MouseEvent) {
    mc_F.graphics.clear();
    cb_gridF.selected = false;
  }

  private function actionTxtMN(evt:Event) { 
    actTxtMN();
  }
  private function actTxtMN() {  
    var sM :String = txt_M.text;
    var sN :String = txt_N.text;
    mc_F.graphics.clear();
  //cb_gridF.selected = false;
    if(sM != "" && sN != "") {
      fCM.infixPostfix(sM);
      fCN.infixPostfix(sN);
      nM = nFac*fCM.postfixValue(1,2);   //trace(nM);
      nN = nFac*fCN.postfixValue(1,2);   //trace(nN);
      mc_F.graphics.clear();
      if(cb_gridF.selected) {
        draw_vectorF(pointF.x,pointF.y);
        draw_vectorFP(pointF.x,pointF.y);
        draw_vectorFGridF();
      }
    }
  }

  public function draw_vectorFP(xPos:Number,yPos:Number) {
    if(txt_M.text != "" && txt_N.text != "") {
      var xNew :Number = xPos;
      var yNew :Number = yPos;
      nM = nFac*fCM.postfixValue(xNew*xScaleGraph,-yNew*yScaleGraph);
      nN = nFac*fCN.postfixValue(xNew*xScaleGraph,-yNew*yScaleGraph);
      mc_FPoint.graphics.clear();
      vectorFPoint.arrow(xNew,yNew,xNew+nM/xScaleGraph,yNew-nN/yScaleGraph,0x0000FF);
    }
  }

  public function draw_vectorF(xPos:Number,yPos:Number) {
    if(cb_FAuto.selected && txt_M.text != "" && txt_N.text != "") {
      var xNew :Number = xPos;
      var yNew :Number = yPos;
      if(cb_gridSnap.selected) {
        xNew = Math.round(xNew/25)*25;
        yNew = Math.round(yNew/25)*25;
        pointF.x = xNew;
        pointF.y = yNew;
      }
      nM = nFac*fCM.postfixValue(xNew*xScaleGraph,-yNew*yScaleGraph); 
      nN = nFac*fCN.postfixValue(xNew*xScaleGraph,-yNew*yScaleGraph);
      mc_FPoint.graphics.clear();
      vectorFPoint.arrow(xNew,yNew,xNew+nM/xScaleGraph,yNew-nN/yScaleGraph,0x0000FF);
      vectorF.arrow(xNew,yNew,xNew+nM/xScaleGraph,yNew-nN/yScaleGraph,0x0000FF);
    }
  }
  private function draw_grid() {
    var xMin:Number = x0-225;
    var xMax:Number = x0+225;
    var yMin:Number = y0-150;
    var yMax:Number = y0+150;
    var g:Graphics = mc_grid.graphics;
    g.clear();
    g.lineStyle(0.5,0xAAAAAA,0.2);
    for(var i:Number = yMin;i<=yMax;i=i+25) {
      g.moveTo(xMin,i); g.lineTo(xMax,i);
    }
    for(var i:Number = xMin;i<=xMax;i=i+25) {
      g.moveTo(i,yMin); g.lineTo(i,yMax);
    }
  }
  private function draw_vectorFGridF() {
    mc_F.graphics.clear();
    for(var i:Number=y0-150;i<=y0+150;i=i+25) {
      for(var j:Number=x0-150;j<=x0+150;j=j+25) {
        nM = nFac*fCM.postfixValue(i*xScaleGraph,-j*yScaleGraph);
        nN = nFac*fCN.postfixValue(i*xScaleGraph,-j*yScaleGraph);
        vectorF.arrow(i,j,i+nM/xScaleGraph,j-nN/yScaleGraph,0x0000FF); 
      }
    }  
  }
  /*---------------------------------------------------------------------------------------------------------------*/
}}
/*=================================================================================================================*/