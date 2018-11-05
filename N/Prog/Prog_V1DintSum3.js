/*=========================================================================================== Prog_V1DintSum3 ===*/

function Prog_V1DintSum3()  {

  
  var layerSim         = null;                               // layer      simulation window       
  var layerObj         = null;                               //            control    window
  var layerInfo        = null;                               //            info

  var nColLayer        = '#FFFFFF';                          // color      layer  default
  var nColCanvas       = '#000000';                          // color      canvas default drawing

  var cS_car           = null;                               // canvas     car


  var mc_simCar    = null;

  var mc_line      = null;
  var mc_line1     = null;
  var mc_lineM     = null;
  var mc_lineT     = null;     // task line

  var mc_car1      = null;
  var mc_car2      = null;

  var mc_graphVT   = null;
  var mc_graphST   = null;

  var mc_grid1     = null;
  var mc_grid2     = null;

  var mc_graph1    = null;
  var mc_axis1     = null;
  var mc_func1     = null;
  var mc_gLine1    = null;
  var mc_fill1     = null;

  var mc_graph2    = null;
  var mc_axis2     = null;
  var mc_func2     = null;
  var mc_gLine2    = null;
  var mc_fill2     = null;

  var mc_graphST1  = null;
  var mc_graphST2  = null;

  var mc_vt        = null;
  var mc_vt1       = null;
  var mc_vt2       = null;
  var mc_st        = null;
  var mc_st1       = null;
  var mc_st2       = null;

  var mc_formula01 = null;
  var mc_formula02 = null;
  
  var mc_task      = null;
  
  var cb_car1      = null;
  var cb_car2      = null;
  var cb_line1     = null;
  var cb_lineM     = null;

  var cb_vt        = null;
  var cb_vt1       = null;
  var cb_vt2       = null;
  var cb_st        = null;
  var cb_st1       = null;
  var cb_st2       = null;
  var cb_formula01 = null;
  var cb_formula02 = null;
  var cb_grid      = null;

  var vT           = "50t";
  var txt_vT       = null;
  var txt_v        = null;

  var rx1          = "100t";
  var rT1          = "100t";
  var rx2          = "100t";
  var txt_r1T      = null;
  var txt_r1       = null;
  var txt_r2T      = null;
  var txt_r2       = null;

  var sv1Tot       = "100";
  var sv2Tot       = "100";

  var txt_v10t     = null;
  var txt_v11t     = null;
  var txt_v12t     = null;
  var txt_v13t     = null;

  var txt_v20t     = null;
  var txt_v21t     = null;
  var txt_v22t     = null;
  var txt_v23t     = null;

  var txt_v10      = null;
  var txt_v11      = null;
  var txt_v12      = null;
  var txt_v13      = null;

  var txt_v20      = null;
  var txt_v21      = null;
  var txt_v22      = null;
  var txt_v23      = null;

  var txt_v1x      = null;
  var txt_v1y      = null;
  var txt_v2x      = null;
  var txt_v2y      = null;

  var v1x          = null;
  var v2x          = null;

  var s1x          = null;
  var s2x          = null;

  var nNumPrSec    = 1000;

  

  var nT           = 1  ;
  var txt_nT       = null;
  var txt_n        = null;
  var sb_V         = null;

  var txt_car1     = null;
  var txt_car2     = null;

  var txt_v1T      = null;
  var txt_v2T      = null;
  var txt_t1T      = null;
  var txt_t2T      = null;

  var txt_st       = null;
  var txt_ss       = null;

  var txt_sT       = null;
  var txt_s        = null;

  var t1           = 0   ;
  var tA           = null;
  var vA           = null;
  var sA           = null;

  var x1Origin     =  40;
  var y1Origin     = 360;
  var x2Origin     = 270;
  var y2Origin     = 360;
  var lenAxisX     = 210;
  var lenAxisY     = 130;
  var nColAxis     = 0x555555;

  var xSTorigin    = 150;
  var ySTorigin    = 360;

  var xCar0        =   0;
  var yCar0        =  80;

  var xS           =  50;
  var xE           = 450;

  var xCarS        =  50;
  var yCarS        = 100;
  var dCarS        =  70;

  var xCarE        = 450;
  var xCarM        = 250;

  var xCar10       = xCarS;
  var xCar20       = xCarS;

  var yCar10       = yCar0;
  var yCar20       = yCar0 + 1*dCarS;

  var xCar1        = xCarS;
  var xCar2        = xCarS;

  var yCar1        = yCar10;
  var yCar2        = yCar20;

  var dLine        = 14;           // move start, mid and end line

  var fac          = 50;

  var car1         = null;         //Point_S;
  var car2         = null;         //Point_S;
  var car1T        = null;         //Point_S;
  var car2T        = null;         //Point_S;
  var car1S        = null;         //Point_S;
  var car2S        = null;         //Point_S;

  var car2PosA     = null;

  var vector1      = null  ;
  var vector2      = null  ;
  var vectorST     = null  ;

  var nColVector   = 0xAAAAAA;
  var nColGraph    = '#CCCCFF'; 0xCCCCFF; //0xAAAAFF;
  var nLenGraphX   = 200;
  var nLenGraphY   = 100;

  var formula_01   = null;
  var formula_02   = null;

  var txt_rMax     = null;
  var txt_vMax     = null;
  var txt_tMax     = null;

  var tTime        = 0  ;
  var tMax         = 4.0;
  var  nVmax       = 0  ;
  var tR1          = "0";
  var tV1          = "0";
  var tR2          = "0";
  var tV2          = "0";
  var nR           = 0  ;
  var nV1          = 0  ;
  var nV2          = 0  ;
  var sParam       = "" ;
  var velocity     = 0 ;

  var sb_task      = null;
  var pb_task1     = null; 
  var pb_task2     = null;
  var pb_task3     = null;
  var pb_task4     = null;
  var nTask        = 0;

  var fC1          = null;                // FunctionCompute
  var fCrx1        = null;                // FunctionCompute
  var fCvx1        = null;                // FunctionCompute
  var fCDx1        = null;                // FunctionComputeDerivate

  var fCv1x        = null;                // FunctionCompute
  var fCv2x        = null;                // FunctionCompute

  var fC2          = null;                // FunctionCompute
  var fCrx2        = null;                // FunctionCompute
  var fCvx2        = null;                // FunctionCompute
  var fCDx2        = null;                // FunctionComputeDerivate

  var bArea        = false;

  var bSet         = false;

  var sTask0       = "";

  var sInfo        = " \r" +
                     " Two cars are running a distancen of 400 m.\r" +
                     " Both cars start at time t = 0. \r" + 
                     " The velocities of the two cars are by default: \r" +
                     " v1 = 45t + 10 \r" +
                     " v2 = 18.75t^2 \r" +
                     " With these velocities the cars will go the distance of 400 m in 4.0 sec.\r" +
                     " Independent of the velocities of the cars \r" +
                     " the cars will stop after 4.0 sec \r" +
                     " or when one of the cars reaches the endline.\r\r" +

                     " In this application you are going to program \r" +
                     " the velocities v1 (green field) and v2 (red field) of the two cars \r" +
                     " so they satisfy the conditions in 'Task1', 'Task2', 'Task3' or 'Task4'.\r\r" +

                     " Below the two cars running you see the graph window \r" +
                     " with the velocities as a function of time. \r" +
                     " When the cars stop, the graph windows show grayed areas \r" +
                     " representing the distances travelled.\r" +
                     " In the upper left corner of the graph \r" +
                     " the currentmaximum velocity of the two is shown. \r\r" +

                     " Car1 : Show Car1 \r" +
                     " Car2 : Show Car2 \r" +
                     " Line : Show a front line follwing Car2 \r" +
                     " MLine: Show the mid line between start and stop position \r" +
                     " v-t  : Show the graphs of the two cars \r" +
                     " v1-t : Show the graph of Car1 \r" +
                     " v2-t : Show the graph of Car2 \r" +
                     " Frm1 : Show formula 1 \r" +
                     " Frm2 : Show formula 2 \r" +
                     " Grid : Show grid";


  var txt_info     = null;
/*
  var sTask1       = "Task 1:\r\r" +
                     "Press run button \r" +
                     "in the program \r" + 
                     "and explain what happens.";
                     
  var sTask2       = "Task 2:\r\r" +
                     "Determine other mathamtical\r" +
                     "expressions for v1 and v2, so that the cars \r" +
                     "run with \r" +
                     "different velocities, and arrive \r" +
                     "at the finish line \r" +
                     "at the same time.";

  var sTask3       = "Task 3:\r\r" +
                     "What can you do \r" +
                     "to make the green car \r" +
                     "be only halfway \r" +
                     "when the red car reaches the finish line?";
;
  var sTask4       = "Task 4: \r\r" +
                     "Find velocities \r" +
                     "(v1 and v2)\r" +
                     "for the green car \r" +
                     "and the red car\r" +
                     "so that the green car \r" +
                     "has half the volocity \r" +
                     "when they reach \r" +
                     "the finish line\r" +
                     "simultaneously at 4.0 sec.";
*/
 var sTask1       = "Task 1:\r\r" +
                     "Press run button in the program and explain what happens.";
                     
  var sTask2       = "Task 2:\r\r" +
                     "Determine other mathamtical expressions for v1 and v2, so that the cars" +
                     "run with different velocities, and arrive at the finish line at the same time.";

  var sTask3       = "Task 3:\r\r" +
                     "What can you do to make the green car be only halfway when the red car reaches the finish line?";
;
  var sTask4       = "Task 4: \r\r" +
                     "Find velocities (v1 and v2) for the green car and the red car so that the green car" +
                     "has half the volocity when they reach the finish line simultaneously at 4.0 sec.";

  var txt_task     = null;

  var txt_tmp      = null;
  var txt_tmp2     = null;
  
  this.get_info    = get_info;
  this.show_info   = show_info;                               
  this.movePos     = movePos;                                // public     function(s)
  
  init();                                                    // start      function
   
  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {     
    init_layer         () ;                                  // init   layer
    init_canvas        () ;                                  //        canvas (graphical area)
    init_calculator    () ;                                  //        calculator

    init_obj           () ;                                  //        control objects

    init_listener      () ;                                  //        actions of objects 

    init_line    ();
    init_line1   ();
    init_grid    ();
    init_car     ();

  //init_function();
  //init_vector  ();
  //init_graph   ();

  //init_task    ();

  //act_txtN     ();
    actTxt_v1x   ();
    actTxt_v2x   ();

    movePos(0,4);

  }
  /*------------------------------------------------------------------------------------------- init_layer ---*/

  function init_layer()       {
    layerSim  = (new CLayer('sim' ,1,nColLayer)).get_obj();   // create layer simulations   
    layerObj  = (new CLayer('obj' ,2,nColLayer)).get_obj();   // create layer control objects
  //layerInfo = (new CLayer('tot' ,3,nColLayer)).get_obj();   // create layer info
  //show_info(false);
  }
  /*------------------------------------------------------------------------------------------ init_canvas ---*/

  function init_canvas()      {
  //cS_car     = new CCanvas (layerSim,1,nColCanvas);         // create the area for the car

    mc_simCar    = new CCanvas (layerSim, 1,nColCanvas);      //.addChild(mc_simCar);
    mc_formula02 = new CCanvas (layerSim, 2,nColCanvas);      //.addChild(mc_formula02);
    mc_formula01 = new CCanvas (layerSim, 3,nColCanvas);      //.addChild(mc_formula01);

    mc_line1     = new CCanvas (layerSim, 4,nColCanvas);      mc_line1.show(false);  //.addChild(mc_line1);
    mc_line      = new CCanvas (layerSim, 5,nColCanvas);      //.addChild(mc_line );
    mc_lineM     = new CCanvas (layerSim, 6,nColCanvas);      mc_lineM.show(false);  //.addChild(mc_lineM);       

    mc_car1      = new CCanvas (layerSim, 7,nColCanvas);      //.addChild(mc_car1 );
    mc_car2      = new CCanvas (layerSim, 8,nColCanvas);      //.addChild(mc_car2 );

    mc_graphVT   = new CCanvas (layerSim, 9,nColCanvas);      //.addChild(mc_graphVT);
    mc_graphST   = new CCanvas (layerSim,10,nColCanvas);      //.addChild(mc_graphST);
    mc_grid1     = new CCanvas (layerSim,11,nColCanvas);      //.addChild(mc_grid1  );
    mc_grid2     = new CCanvas (layerSim,12,nColCanvas);      //.addChild(mc_grid2  );
    mc_graph1    = new CCanvas (layerSim,13,nColCanvas);      //.addChild(mc_graph1);
    mc_graph2    = new CCanvas (layerSim,14,nColCanvas);      //.addChild(mc_graph2);


    mc_fill1     = new CCanvas (layerSim,15,nColCanvas);      //.addChild(mc_fill1 );
    mc_gLine1    = new CCanvas (layerSim,16,nColCanvas);      //.addChild(mc_gLine1);
    mc_func1     = new CCanvas (layerSim,17,nColCanvas);      //.addChild(mc_func1 );
    mc_axis1     = new CCanvas (layerSim,18,nColCanvas);      //.addChild(mc_axis1 );

    mc_fill2     = new CCanvas (layerSim,19,nColCanvas);      //.addChild(mc_fill2 );
    mc_gLine2    = new CCanvas (layerSim,20,nColCanvas);      //.addChild(mc_gLine2);
    mc_func2     = new CCanvas (layerSim,21,nColCanvas);      //.addChild(mc_func2 );
    mc_axis2     = new CCanvas (layerSim,22,nColCanvas);      //.addChild(mc_axis2 );

    mc_st        = new CCanvas (layerSim,23,nColCanvas);      //.addChild(mc_st );
    mc_st1       = new CCanvas (layerSim,24,nColCanvas);      //.addChild(mc_st1);
    mc_st2       = new CCanvas (layerSim,25,nColCanvas);      //.addChild(mc_st2);
  }
  /*-------------------------------------------------------------------------------------- init_calculator ---*/

  function init_calculator () {
    fC1          = new FunctionCompute ();                 // FunctionCompute
    fCrx1        = new FunctionCompute ();                 // FunctionCompute
    fCvx1        = new FunctionCompute ();                 // FunctionCompute
    fCDx1        = new FunctionCompute ();                 // FunctionComputeDerivate

    fCv1x        = new FunctionCompute ();                 // FunctionCompute
    fCv2x        = new FunctionCompute ();                 // FunctionCompute

    fC2          = new FunctionCompute ();                 // FunctionCompute
    fCrx2        = new FunctionCompute ();                 // FunctionCompute
    fCvx2        = new FunctionCompute ();                 // FunctionCompute
    fCDx2        = new FunctionCompute ();                 // FunctionComputeDerivate

    fCDx1     .infixPostfix ("25x^2");  fCvx1 .infixPostfix ("50x");
    fCDx2     .infixPostfix ("25x^2");  fCvx2 .infixPostfix ("50x");
    tV1      = fCDx1.get_derivate_function_symbolic();


    fCv1x     .infixPostfix ("45x+10"); 
    fCv2x     .infixPostfix ("18.75x^2");

    v1x = new Array(5000);
    v2x = new Array(5000);
 
    s1x = new Array(5000);
    s2x = new Array(5000);

    //compute_sx();
  }
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()         { 

  //car          = new ObjExt(layerSim,sCarName,x0,y0,0.5);      // create the car
  //txt_position = makeTxt  (layerObj,  1,100,200, 20,"",true);
  //cb_show      = makeCb   (layerObj, 20,300, 15,15,"Show/Hide ",true ,65,15);

    cb_car1       = makeCb  (layerObj, 10,200, 15,15,"Car1" ,true , 50,15); 
    cb_car2       = makeCb  (layerObj, 10,220, 15,15,"Car2" ,true , 50,15); 

    cb_line1      = makeCb  (layerObj, 85,220, 15,15,"Line" ,false, 50,15); 
    cb_lineM      = makeCb  (layerObj,160,220, 15,15,"MLine",false, 50,15); 

    cb_vt         = makeCb  (layerObj, 10,250, 15,15,"v-t"  ,true, 50,15); 
    cb_vt1        = makeCb  (layerObj, 85,250, 15,15,"v1-t ",true, 50,15); 
    cb_vt2        = makeCb  (layerObj,160,250, 15,15,"v2-t" ,true, 50,15); 

    cb_formula01  = makeCb  (layerObj, 10,270, 15,15,"Frm 1" ,false, 50,15); 
    cb_formula02  = makeCb  (layerObj, 85,270, 15,15,"Frm 2" ,false, 50,15); 
    cb_grid       = makeCb  (layerObj,160,270, 15,15,"Grid"  ,true , 50,15); 


    txt_car1      = makeTxt (layerSim, 10,yCar1-10,20              , 20,"1",false ); 
    txt_car2      = makeTxt (layerSim, 10,yCar2-10,20              , 20,"2",false ); 

    txt_v1T       = makeTxt (layerObj, 10,350                   ,20                  , 20,"v1",false);
    txt_v2T       = makeTxt (layerObj, 10,370                   ,20                  , 20,"v2",false);

    txt_t1T       = makeTxt (layerSim,  x1Origin+lenAxisX-10, y1Origin+2                   ,200                 , 20,"t",false);
    txt_t2T       = makeTxt (layerSim,  x2Origin+lenAxisX-10, y2Origin+2                   ,200                 , 20,"t",false);

  //txt_info      = makeTxtArea  (layerInfo,  4,3,611,439,sInfo,true);   //txt_info.show(false);

    txt_task      = makeTxtArea  (layerObj,  3,3,216,145,sTask0,true);


  //g_line.moveTo(xCarE   ,yCar10-10); g_line.lineTo(xCarE   ,yCar20+10);

    txt_rMax      = makeTxt  (layerSim,  xCarE-25             ,yCar20+15           ,50, 20,"s = 400",false);   //alert(txt_rMax.value);
    txt_tMax      = makeTxt  (layerSim,  xCarE-25             ,yCar20+35           ,50, 20,"t = 0",false); 

    txt_vMax      = makeTxt  (layerSim,  x1Origin- 30            ,y1Origin-lenAxisY+22 ,25, 20,"300",false); 
/*
    txt_ss        = makeTxt  (layerObj,  1,xSTorigin+2          ,ySTorigin-lenAxisY-5, 20,"",true); 
    txt_st        = makeTxt  (layerObj,  1,xSTorigin+lenAxisX-10,ySTorigin+2         , 20,"",true); 
*/
    car1          = new ObjExt(layerSim,'N/image/Car1.jpg',100,100,0.4);  //car1 = new ObjExt(layerSim,"N/image/Car1.jpg",100,100,0.4);
    //car1.set_width();
  //car1          = new ObjExt(layerSim,"N/image/Car1.jpg",xCar0,yCar0,0.8);
    car2          = new ObjExt(layerSim,'N/image/Car2.jpg',100,120,0.4);
  //car1          = new Point_S(this,mc_car1 ,1,xCar0,yCar0,0.5);   car1.gotoAndStop(1);
  //car2          = new Point_S(this,mc_car2 ,2,xCar0,yCar0,0.5);   car2.gotoAndStop(2);

    car1T         = new ObjExt(layerSim,"N/image/Car1.jpg",x1Origin+110,y1Origin+20,0.4);   //new Point_S(this,mc_graph1,3,x1Origin+110,y1Origin+20,0.5);   car1T.gotoAndStop(1);
    car2T         = new ObjExt(layerSim,"N/image/Car2.jpg",x2Origin+110,y2Origin+20,0.4);  //new Point_S(this,mc_graph2,4,x2Origin+110,y2Origin+20,0.5);   car2T.gotoAndStop(2);
/*
    car1S         = new Point_S(this,mc_st1   ,5,xSTorigin+100,ySTorigin+20,0.5);   car1S.gotoAndStop(1);
    car2S         = new Point_S(this,mc_st2   ,6,xSTorigin+150,ySTorigin+20,0.5);   car2S.gotoAndStop(2);
/*
    txt_r1T       = makeTxt  (layerObj,  1,100,200, 20,"",false);  
    txt_r1        = makeTxt  (layerObj,  1,100,200, 20,"",true );  
    txt_r2T       = makeTxt  (layerObj,  1,100,200, 20,"",false); 
    txt_r2        = makeTxt  (layerObj,  1,100,200, 20,"",true ); 
*/

    txt_v1x       = makeTxt  (layerObj, 30,350,190, 20,"45 t + 10",true,true,'#EEFFEE'); //objMaker.make_txtField   ("txt_v13" , 45, 145    ,170,18,true ,0xAAAAAA,true ,0xEEFFEE,formatInfo,"45 t + 10"   ,true ,true ); 
    txt_v2x       = makeTxt  (layerObj, 30,370,190, 20,"18.75 t^2",true,true,'#FFEEEE'); //objMaker.make_txtField   ("txt_v23" , 45, 167    ,170,18,true ,0xAAAAAA,true ,0xFFEEEE,formatInfo,"18.75 t^2",true ,true );
  //txt_tmp       = makeTxt  (layerObj, 30,390,190, 20,"18.75 t^2",true); //objMaker.make_txtField   ("txt_v23" , 45, 167    ,170,18,true ,0xAAAAAA,true ,0xFFEEEE,formatInfo,"18.75 t^2",true ,true );
  //txt_tmp2      = makeTxt  (layerObj, 30,410,190, 20,"18.75 t^2",true);
/*

    txt_vT        = makeTxt  (layerObj,  1,100,200, 20,"",true);  objMaker.make_txtField   ("txt_vT"  , 10, 145    , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"v = "  ,false,false);
    txt_v         = makeTxt  (layerObj,  1,100,200, 20,"",true);  objMaker.make_txtField   ("txt_v"   , 60, 145    ,150,18,true ,0xAAAAAA,true ,0xFFFFFF,formatInfo,"50t"   ,true ,true );

    txt_nT        = makeTxt  (layerObj,  1,100,200, 20,"",true);  objMaker.make_txtField   ("txt_nT"  , 10, 167    , 50,18,false,0xAAAAAA,false,0xEEEEEE,formatInfo,"n = "  ,false,false);
    txt_n         = makeTxt  (layerObj,  1,100,200, 20,"",true);  objMaker.make_txtField   ("txt_n"   , 60, 167    ,150,18,true ,0xAAAAAA,true ,0xFFFFFF,formatInfo,"1"     ,true ,true );

    txt_task      = makeTxt  (layerObj,  1,100,200, 20,"",true);  objMaker.make_txtField  ("txt_info",5,-185,120,18,false,0xAAAAAA,false,0xFFFFFF,formatInfo,sTask3,false,false);
  //txt_task        .autoSize = TextFieldAutoSize.LEFT;

*/
    pb_task1  = makePb(layerObj,  3,150,52,18,"Task1"); //objMaker.make_button_U  ("pb_task1",  6,-21,52,18,"Task 1",0,1,mc_obj,this,"Show Task 1 ");
    pb_task2  = makePb(layerObj, 58,150,52,18,"Task2"); //objMaker.make_button_U  ("pb_task2", 60,-21,52,18,"Task 2",0,1,mc_obj,this,"Show Task 2 ");
    pb_task3  = makePb(layerObj,113,150,52,18,"Task3"); //objMaker.make_button_U  ("pb_task3",114,-21,52,18,"Task 3",0,1,mc_obj,this,"Show Task 3 ");
    pb_task4  = makePb(layerObj,168,150,52,18,"Task4"); //objMaker.make_button_U  ("pb_task4",168,-21,52,18,"Task 4",0,1,mc_obj,this,"Show Task 4 ");

    //formula_01    = new Formula_001(this,mc_formula01, 32, 33,1.0,1.0,0,1,1);  formula_01.gotoAndStop(1);
    //formula_02    = new Formula_002(this,mc_formula02,385,208,1.0,1.0,0,1,1);  formula_02.gotoAndStop(1);

  }
  /*---------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener()    {
   
    cb_car1      .onclick = function() { action_cbCar1      ();};
    cb_car2      .onclick = function() { action_cbCar2      ();};
    cb_line1     .onclick = function() { action_cbLine1     ();};
    cb_lineM     .onclick = function() { action_cbLineM     ();};
    cb_vt        .onclick = function() { action_cbVT        ();};
    cb_vt1       .onclick = function() { action_cbVT1       ();};
    cb_vt2       .onclick = function() { action_cbVT2       ();};
  //cb_st        .onclick = function() { action_cbST        ();};
  //cb_st1       .onclick = function() { action_cbST1       ();};
  //cb_st2       .onclick = function() { action_cbST2       ();};
    cb_formula01 .onclick = function() { action_cbFormula01 ();};
    cb_formula02 .onclick = function() { action_cbFormula02 ();};
    cb_grid      .onclick = function() { action_cbGrid      ();};

  //txt_n        .onkeyup = function() { action_txtN        ();};
  //txt_s        .onkeyup = function() { action_txtS        ();};
  //txt_r1       .onkeyup = function() { actionTxtR1        ();};
  //txt_r2       .onkeyup = function() { actionTxtR2        ();};

  //txt_v10      .onkeyup = function() { actionTxt_v1       ();};
  //txt_v11      .onkeyup = function() { actionTxt_v1       ();};
  //txt_v12      .onkeyup = function() { actionTxt_v1       ();};
  //txt_v13      .onkeyup = function() { actionTxt_v1       ();};

  //txt_v20      .onkeyup = function() { actionTxt_v2       ();};
  //txt_v21      .onkeyup = function() { actionTxt_v2       ();};
  //txt_v22      .onkeyup = function() { actionTxt_v2       ();};
  //txt_v23      .onkeyup = function() { actionTxt_v2       ();};

    txt_v1x      .onkeyup = function() { actionTxt_v1x      ();};
    txt_v2x      .onkeyup = function() { actionTxt_v2x      ();};

  //sb_task     .addEventListener(ScrollEvent .SCROLL,action_sbTask     );

  //sb_task      .onmousedown = function() { act_sbEDown    ();}  
  //sb_task      .onmousemove = function() { act_sbEMove    ();}  
  //sb_tast      .onchange    = function() { act_sbEMove    ();}
  //sb_task      .onmouseout  = function() { act_sbEOut     ();}

    pb_task1     .onclick = function() { action_pbTask1     ();}
    pb_task2     .onclick = function() { action_pbTask2     ();}
    pb_task3     .onclick = function() { action_pbTask3     ();}
    pb_task4     .onclick = function() { action_pbTask4     ();}

  } 

  /*---------------------------------------------------------------------------------------------------- init ---*/
/*
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
*/
  /*------------------------------------------------------------------------------------------------- init_mc ---*/

  /*----------------------------------------------------------------------------------------------- init_line ---*/
 
   function init_line() {
    mc_line .clear();  mc_line .set_color('#555555');//mc_line .lineStyle(0.5,0x000000,1);  
    mc_lineM.clear();  mc_lineM.set_color('#AAAAAA'); //mc_lineM.lineStyle(0.5,0xAAAAAA,1);
    mc_line .moveTo(xCarS+dLine,yCar10-10); mc_line .lineTo(xCarS+dLine   ,yCar20+10);   // start  line
    mc_line .moveTo(xCarE+dLine,yCar10-10); mc_line .lineTo(xCarE+dLine   ,yCar20+10);   // finish line
    mc_lineM.moveTo(xCarM+dLine,yCar10-10); mc_lineM.lineTo(xCarM+dLine   ,yCar20+10);   // mid    line
    mc_line .moveTo(xCarS-40,210      ); mc_line .lineTo(xCarE+40,210      );   // divide cars and graph
  }

   function init_line1(xPos) {                              // line following the red car
    mc_line1.clear();  mc_line1.set_color('#CCCCCC');//g_line1.lineStyle(0.5,0xCCCCCC,1);
    mc_line1.moveTo(xPos+dLine,yCar10-10); mc_line1.lineTo(xPos+dLine,yCar20+10);
  }
/*
   function draw_lineT(nTaskT:Number) {                              // task line
    var nTask = (typeof nTaskT !== 'undefined') ? nTaskT : 0;
    mc_lineT.clear();  //mc_lineT.lineStyle(0.5,0x0000FF,1);
    if(nTask == 1) {
      mc_lineT.moveTo(8,-25); mc_lineT.lineTo(8+47,-25); }
    else if(nTask == 2) {
      mc_lineT.moveTo(62,-25); mc_lineT.lineTo(62+47,-25); }
    else if(nTask == 3) {
      mc_lineT.moveTo(116,-25); mc_lineT.lineTo(116+47,-25); }
    else if(nTask == 4) {
      mc_lineT.moveTo(170,-25); mc_lineT.lineTo(170+47,-25);
    }
  //g_lineT.moveTo(8+(nTask-1)*70,-25); g_lineT.lineTo(10+(nTask-1)*70+70,-25);
  }
*/
   function init_grid() {
    mc_grid1.clear();  mc_grid1.set_color('#DDDDDD');//mc_grid1.lineStyle(0.5,0xDDDDDD,1);
    mc_grid2.clear();  mc_grid2.set_color('#DDDDDD'); //mc_grid2.lineStyle(0.5,0xDDDDDD,1);
    for(var i=0;i<=10;i++) {
      mc_grid1.moveTo(x1Origin,y1Origin-i*10);  mc_grid1.lineTo(x1Origin+nLenGraphX,y1Origin-i*10);
      mc_grid2.moveTo(x2Origin,y2Origin-i*10);  mc_grid2.lineTo(x2Origin+nLenGraphX,y2Origin-i*10);
    }
    for(var i=0;i<=20;i++) {
      mc_grid1.moveTo(x1Origin+i*10,y1Origin);  mc_grid1.lineTo(x1Origin+i*10,y1Origin-nLenGraphY);
      mc_grid2.moveTo(x2Origin+i*10,y2Origin);  mc_grid2.lineTo(x2Origin+i*10,y2Origin-nLenGraphY);
    }
  }
/*
   function init_task() {
    mc_task.clear             ();
    mc_task.lineStyle(0.5,0x555555,1);
    mc_task.beginFill(0xFFFFFF)      ;
    mc_task.drawRect (3,-180,219,178);
    mc_task.endFill  ()              ;
  }
*/
  /*------------------------------------------------------------------------------------------------ init_car ---*/
 
   function init_car() {
    car1.moveTo(xCar10-14,yCar10);
    car2.moveTo(xCar20-14,yCar20);
  //car1.x = xCar10;   car1.y = yCar10; 
  //car2.x = xCar20;   car2.y = yCar20;
    car2PosA = new Array(401);
    for(var i=0;i<=400;i++) {
      car2PosA[i] = 0;
    }
  }


  function compute_sx()  {
    compute_s1x();  
    compute_s2x();
    draw_graphV();   //alert(s2x[3950]);
  }
   function compute_s1x() {
    var v = 0;
    var s = 0;  
    for(var i=0;i<=tMax*nNumPrSec;i++) {
      v = fCv1x.postfixValue(i/nNumPrSec);  // if(isNaN(v)) {v = 0;}
      s = s + v/nNumPrSec;   //fCv1x.postfixValue(i/nNumPrSec)*1/nNumPrSec;
      v1x[i] = v;
      s1x[i] = s;
    }
  }
   function compute_s2x() {
    var v = 0;
    var s = 0;  
    for(var i=0;i<=tMax*nNumPrSec;i++) {
      v = fCv2x.postfixValue(i/nNumPrSec);  // if(isNaN(v)) {v = 0;}
      s = s + v/nNumPrSec;   //fCv2x.postfixValue(i/nNumPrSec)*1/nNumPrSec;
      v2x[i] = v;
      s2x[i] = s;
    }
    //trace(v2x);
  }

  /*--------------------------------------------------------------------------------------------- init_vector ---*/
/*
   function init_vector() {
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
*/
  /*-------------------------------------------------------------------------------------------- init_graph ---*/

   function init_graph() {
    mc_func1.clear();  mc_func1.set_color(nColGraph); //g_func1.lineStyle(0.5,nColGraph,1);
    mc_func1.moveTo(x1Origin,y1Origin); mc_func1.lineTo(x1Origin+nLenGraphX,y1Origin-nLenGraphY);
    mc_func2.clear();  mc_func2.set_color(nColGraph); //mc_func2.lineStyle(0.5,nColGraph,1);
    mc_func2.moveTo(x2Origin,y2Origin); mc_func2.lineTo(x2Origin+nLenGraphX,y2Origin-nLenGraphY);
  }

  /*-------------------------------------------------------------------------------------------------- action ---*/

   function action_pbTask1() {
    if(nTask==1) {
      nTask = 0;
      txt_task.value = sTask0; }
    else {
      nTask = 1;
      txt_task.value = sTask1;
    }
  //draw_lineT(nTask);  
  }
   function action_pbTask2() {
     if(nTask==2) {
      nTask = 0;
      txt_task.value = sTask0; }
    else {
      nTask = 2;
      txt_task.value = sTask2;
    }
  //draw_lineT(nTask);   
  }
   function action_pbTask3() {
     if(nTask==3) {
      nTask = 0;
      txt_task.value = sTask0; }
    else {
      nTask = 3;
      txt_task.value = sTask3;
    }
  //draw_lineT(nTask);   
  }
   function action_pbTask4() {
     if(nTask==4) {
      nTask = 0;
      txt_task.value = sTask0; }
    else {
      nTask = 4;
      txt_task.value = sTask4;
    }
    //draw_lineT(nTask);   
  }

  function actionTxt_v1x () {
    actTxt_v1x();
  }
   function actionTxt_v2x () {
    actTxt_v2x();
  }
   function actTxt_v1x() {   //if(txt_v1x.text = "" || txt_v1x.text = " ") {txt_v1x.
    change_tx(txt_v1x.value);
    fCv1x     .infixPostfix (sParam); 
    compute_s1x();
    draw_graphV();
    mc_fill1.clear();
    mc_fill2.clear();
    if(txt_v1x.value == "") {mg_func1.clear();}
    if(txt_v2x.value == "") {mg_func2.clear();}
  }
   function actTxt_v2x() {
    change_tx(txt_v2x.value);
    fCv2x     .infixPostfix (sParam); 
    compute_s2x();
    draw_graphV();
    mc_fill1.clear();
    mc_fill2.clear();
    if(txt_v2x.text == "") {mc_func2.clear();}
    if(txt_v1x.text == "") {mc_func1.clear();}
  }
/*
   function actionTxt_v1() {
    actTxt_v1();
  }
   function actionTxt_v2() {
    actTxt_v2();
  }
   function actTxt_v1() {
    var s1  = "";
    var s10 = txt_v10.value;
    var s11 = txt_v11.value;
    var s12 = txt_v12.value;
    var s13 = txt_v13.value;

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
    function actTxt_v2() {
    var s2  = ""          ;
    var s20 = txt_v20.value;
    var s21 = txt_v21.value;
    var s22 = txt_v22.value;
    var s23 = txt_v23.value;

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

   function actionTxt_v11() {
    var s = txt_v11.value;
    if(s == "") {
      s = "0";
    }
    sv1Tot = txt_v13.value + "t^3+" +txt_v12.value + "t^2+" + s + "t+" + txt_v10.value;
    compute_sv();
  }
   function actionTxt_v12() {
    var s = txt_v12.value;
    if(s == "") {
      s = "0";
    }
    sv1Tot = txt_v13.value + "t^3+" +s + "t^2+" + txt_v11.value + "t+" + txt_v10.value;
    compute_sv();
  }
   function actionTxt_v13() {
    var s = txt_v13.value;
    if(s == "") {
      s = "0";
    }
    sv1Tot = s + "t^3+" +txt_v12.value + "t^2+" + txt_v11.value + "t+" + txt_v10.value;
    compute_sv();
  }

   function actionTxt_v20() {
    var s = txt_v20.value;
    if(s == "") {
      s = "0";
    }
    sv2Tot = txt_v23.value + "t^3+" +txt_v22.value + "t^2+" + txt_v21.value + "t+" + s;
    compute_sv();
  }
    function actionTxt_v21() {
    var s = txt_v21.value;
    if(s == "") {
      s = "0";
    }
    sv2Tot = txt_v23.value + "t^3+" +txt_v22.value + "t^2+" + s + "t+" + txt_v20.value;
    compute_sv();
  }
   function actionTxt_v22() {
    var s = txt_v22.value;
    if(s == "") {
      s = "0";
    }
    sv2Tot = txt_v23.value + "t^3+" +s + "t^2+" + txt_v21.value + "t+" + txt_v20.value;
    compute_sv();
  }
   function actionTxt_v23() {
    var s = txt_v23.value;
    if(s == "") {
      s = "0";
    }
    sv2Tot = s + "t^3+" +txt_v22.value + "t^2+" + txt_v21.value + "t+" + txt_v20.value;
     compute_sv();
  }
   function compute_sv() {
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
    mc_fill1.clear();  mc_fill2.clear();
  }
   function actionTxtR1(evt:Event) { 
    act_TxtR1();
  }
   function act_TxtR1() {
    var s  = txt_r1.value;
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
    mc_fill1.clear();  mc_fill2.clear();
  }

   function actionTxtR2() { 
    act_TxtR2();
  }
   function act_TxtR2() {
    var s  = txt_r2.value;
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
    mc_fill1.clear();  mc_fill2.clear();
  }
*/
   function draw_graphV() {
    computeMaxV ();
    draw_graphV1();
  }

   function computeMaxV() {
    var t1 = 0;
    nVmax = 0;
    while(t1<=tMax) {
      nV1 = v1x[Math.round(nNumPrSec*t1)]; //fCv1x.postfixValue(t1);
      if(nV1 > nVmax) {nVmax = nV1;}
      nV2 = v2x[Math.round(nNumPrSec*t1)]; //trace(Math.round(nNumPrSec*t1)); //fCv2x.postfixValue(t1);
      if(nV2 > nVmax) {nVmax = nV2;}
      t1 = t1 + 0.01;  
    }//alert(Math.round(nVmax*100)/100);
    txt_vMax.value = (Math.round(nVmax*100)/100).toString();   //trace(v2x);
  }
   function draw_graphV1() {
    mc_func1.clear();  mc_func1.set_color(nColGraph);  //mc_func1.lineStyle(0.5,nColGraph,1);
    mc_func2.clear();  mc_func2.set_color(nColGraph);  //mc_func2.lineStyle(0.5,nColGraph,1);
    mc_func1.moveTo(x1Origin,y1Origin); 
    mc_func2.moveTo(x2Origin,y2Origin);
    var t1 = 0;
    while(t1<=tMax) {
      nV1 = v1x[Math.round(nNumPrSec*t1)];  if(isNaN(nV1)) {nV1 = 0;} if(nV1<-Math.pow(10,6)) {nV1=-Math.pow(10,6);}  //fCvx1.postfixValue(t1);
      nV2 = v2x[Math.round(nNumPrSec*t1)];  if(isNaN(nV2)) {nV2 = 0;} if(nV2<-Math.pow(10,6)) {nV2=-Math.pow(10,6);} //fCvx2.postfixValue(t1);
      mc_func1.lineTo(x1Origin+t1*nLenGraphX/tMax,y1Origin-nV1*nLenGraphY/nVmax);
      mc_func2.lineTo(x2Origin+t1*nLenGraphX/tMax,y2Origin-nV2*nLenGraphY/nVmax);
      t1 = t1 + 0.02;
    }
  }
/*

   function draw_vCurve() {
  }
   function action_cbCar1()  {
    var b    = cb_car1.checked;
    mc_car1  .show(b);
  }
   function action_cbCar2()  {
    var b    = cb_car2.checked
    mc_car2  .show(b);
  }
*/
   function action_cbLine1() {
    var b    = cb_line1.checked;
    mc_line1 .show(b);
  }
   function action_cbLineM() {
    var b    = cb_lineM.checked;
    mc_lineM .show(b);
  }
/*
   function action_cbVT() {
    var b    =  cb_vt.checked;
    mc_graphVT .show(b);
    cb_vt1   .disabled  =  !b;   cb_vt1.checked =  b;  mc_graph1 .visible =  b;   
    cb_vt2   .disabled  =  !b;   cb_vt2.selected =  b;  mc_graph2 .visible =  b;   
    if(b) {
      cb_st1 .disabled  = b;   cb_st1.checked = !b;  mc_st1    .show(!b);
      cb_st2 .disabled  = b;   cb_st2.checked = !b;  mc_st2    .show(!b);
      cb_st  .checked  = !b;   mc_st .show(!b)    ;  mc_graphST.show(!b);
    }
  }
   function action_cbST() {
    var b    = cb_st.checked;
    mc_graphST .show(b);
    mc_st    .show(b);
    cb_st1   .disabled  =  !b;   cb_st1.checked =  b;  mc_st1.show(b); 
    cb_st2   .disabled  =  !b;   cb_st2.checked =  b;  mc_st2.show(b);
    txt_ss   .value     = "s1 - s2";
    if(b) {
      cb_vt1 .disabled  = b;   cb_vt1    .checked = !b;  mc_graph1.show(!b);
      cb_vt2 .disabled  = b;   cb_vt2    .checked = !b;  mc_graph2.show(!b);
      cb_vt  .checked   = !b;   mc_graphVT.show(!b);
    }
  }
   function action_cbVT1()  {
    var b    = cb_vt1.checked;
    mc_graph1.show(b);
    mc_grid1 .show(b && cb_grid.checked);
  }
    function action_cbVT2()  {
    var b    cb_vt2.checked;
    mc_graph2.show(b);
    mc_grid2 .show(b && cb_grid.selected);
  }
   function action_cbST1()  {
    var b    = cb_st1.checked;
    mc_st1   .show(b);
    if(b) {
      if(cb_st2.checked) {
        txt_ss.value = "s1 - s2";}
      else {
        txt_ss.value = "s1";
      }}
    else {
      if(cb_st2.checked) {
        txt_ss.value = "s2";}
      else {
        txt_ss.value = "";
      }
    }
  }
   function action_cbST2()  {
    var b    = cb_st2.checked
    mc_st2   .show(b);
    if(b) {
      if(cb_st1.checked) {
        txt_ss.value = "s1 - s2";}
      else {
        txt_ss.value = "s2";
      }}
    else {
      if(cb_st1.checked) {
        txt_ss.value = "s1";}
      else {
        txt_ss.value = "";
      }
    }
  }
   function action_cbFormula01() {
    var b  = cb_formula01.checked; 
    mc_formula01.show(b); //formula_01.gotoAndStop(1);
    mc_simCar   .show(!b);
    if(b) {
      mc_formula02.show(false);
      cb_formula02.checked = false;
    }
  }
   function action_cbFormula02() {
    var b = cb_formula02.checked; 
    mc_formula02.show(b); //formula_02.gotoAndStop(1);
    if(b) {
      mc_formula01.show(false);
      cb_formula01.checked = false;
      mc_simCar   .show(true) ;
    }
  }
   function action_cbGrid() {
    var b  = cb_grid.checked; 
    mc_grid1.show(b && cb_vt1.checked);
    mc_grid2.show(b && cb_vt2.checked);
  }
   function action_txtN() {  
    act_txtN();
  }
   function act_txtN() {
    var s = txt_n.value;
    var nRTmp  = 0;
    var nVTmp  = 0;
    if(s != "") {
      nT = Number(s);
      t1 = 4.0/nT;
      tA = new Array(nT+2);
      vA = new Array(nT+2);
      sA = new Array(nT+2);
      for(var i= 0; i<=nT; i++) {
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
   function action_txtS() {  
    var s  = txt_s.value;
    if(s != "") {
      change_tx(s);
      fC1.infixPostfix(sParam);
    }
  }
*/
  /*----------------------------------------------------------------------------------------------- change_tx ---*/

  function change_tx(s) {

    var sS    = s; //alert(sS);
    var sLen  = sS.length;
    var sA    = new Array(500);
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
/*
   function move_car2(t)  {  
    return 0;
  }
   function draw_lineGraph2() {
    var d = 200/nT;
    mc_gLine1.clear();
    mc_gLine2.clear();
    //mc_gLine1.lineStyle(0.5,0xAAAAAA,1);
    //mc_gLine2.lineStyle(0.5,0xAAAAAA,1);
    for(var i=1;i<=nT;i++) {
      mc_gLine2.moveTo(x2Origin+i    *d,y2Origin            ); mc_gLine2.lineTo(x2Origin+i*d,y2Origin-0.5*i    *d);
      mc_gLine2.moveTo(x2Origin+(i-1)*d,y2Origin-0.5*(i-1)*d); mc_gLine2.lineTo(x2Origin+i*d,y2Origin-0.5*(i-1)*d);
    }
    mc_gLine1.moveTo(x1Origin+nT    *d,y1Origin            ); mc_gLine1.lineTo(x1Origin+nT*d,y1Origin-0.5*nT    *d);
  }
*/
  function draw_graph (t) {
    if(txt_v1x.value != "" || txt_v2x.value != "") {
      draw_graph1(t);
      draw_graph2(t);
      draw_st    (t);
    }
  }

   function draw_area(t) {
    if(txt_v1x.value != "" || txt_v2x.value != "") {
      draw_area1(t);
      draw_area2(t);
    }
  }

   function draw_area1(t) {  
    mc_fill1.clear();  mc_fill1.set_color('#CCCCCC'); //mc_fill1.lineStyle(0.5,0xAAAAAA,1);
    mc_fill1.beginPath(); 
    mc_fill1.moveTo(x1Origin,y1Origin);
    //mc_fill1.beginFill(0xBBBBBB,1.0);
    var tTmp = 0;
    var nTmp = 0;
    nTmp = fCv1x.postfixValue(t);      if(isNaN(nTmp)) {nTmp = 0;}
    while(tTmp<=t) {
      nTmp = fCv1x.postfixValue(tTmp);   if(isNaN(nTmp)) {nTmp = 0;}
      mc_fill1.lineTo(x1Origin+50*tTmp,y1Origin); mc_fill1.lineTo(x1Origin+50*tTmp,y1Origin-nTmp*nLenGraphY/nVmax);
      tTmp = tTmp + 0.01;
    }
    mc_fill1.lineTo(x1Origin+50*t,y1Origin); mc_fill1.lineTo(x1Origin,y1Origin); 
    mc_fill1.fill();
  //mc_fill1.endFill();
  }

  function draw_area2(t) {
    mc_fill2.clear();  mc_fill2.set_color('#CCCCCC');  //mc_fill2.lineStyle(0.5,0xAAAAAA,1);
    mc_fill2.beginPath();
    mc_fill2.moveTo(x2Origin,y2Origin);
  //mc_fill2.beginFill(0xBBBBBB,1.0);
    var tTmp = 0;
    var nTmp = 0;
    nTmp = fCv2x.postfixValue(t);      if(isNaN(nTmp)) {nTmp = 0;}
    while(tTmp<=t) {
      nTmp = fCv2x.postfixValue(tTmp);  if(isNaN(nTmp)) {nTmp = 0;}
      mc_fill2.lineTo(x2Origin+50*tTmp,y2Origin); mc_fill2.lineTo(x2Origin+50*tTmp,y2Origin-nTmp*nLenGraphY/nVmax);
      tTmp = tTmp + 0.01;
    }
    mc_fill2.lineTo(x2Origin+50*t,y2Origin); mc_fill2.lineTo(x2Origin,y2Origin); 
    mc_fill1.fill();
  //mc_fill2.endFill();
  }



  function draw_graph1(t) {
    var nTmp = fCv1x.postfixValue(t);       if(isNaN(nTmp)) {nTmp = 0;}
    mc_fill1.clear();  mc_fill1.set_color('#CCCCCC'); //g_fill1.lineStyle(0.5,0xAAAAAA,1);
    mc_fill1.moveTo(x1Origin+50*t,y1Origin); mc_fill1.lineTo(x1Origin+50*t,y1Origin-nTmp*nLenGraphY/nVmax);
  }
    function draw_graph2(t) {
    var nTmp = fCv2x.postfixValue(t);       if(isNaN(nTmp)) {nTmp = 0;}
    mc_fill2.clear();  mc_fill2.set_color('#CCCCCC'); //mc_fill2.lineStyle(0.5,0xAAAAAA,1);
    mc_fill2.moveTo(x2Origin+50*t,y2Origin); mc_fill2.lineTo(x2Origin+50*t,y2Origin-nTmp*nLenGraphY/nVmax);
  }


   function draw_st(t) {
  //draw_st1(t);
  //draw_st2(t);
  }
   function draw_st1(t) {
    mc_st1.clear();  mc_st1.set_color('#CCCCCC'); //mc_st1.lineStyle(0.5,0xAAAAFF,1);
    mc_st1.moveTo(xSTorigin,ySTorigin);
    var tTmp = 0;
    while(tTmp<=50*t) {
      mc_st1.lineTo(xSTorigin+tTmp,ySTorigin-3/10*fCDx1.postfixValue(tTmp/50));
      tTmp = tTmp + 1;
    }
  }
   function draw_st2(t) {
/*
    mc_st2  .clear();  mc_st1.set_color('#CCCCCC'); //mc_st2  .lineStyle(0.5,0xFFAAAA,1); 
    mc_st2.moveTo(xSTorigin,ySTorigin);
    var tTmp = 0;
    var t2   = 0;
    while(tTmp<=50*t) {
      mc_st2.lineTo(xSTorigin+tTmp,ySTorigin-3/10*fCDx2.postfixValue(tTmp/50));
      tTmp = tTmp + 1;
    }
*/
  }
  /*----------------------------------------------------------------------------------------------- show_info ---*/

  function get_info() { //alert(sInfo);
    return sInfo;
  }
  function show_info(b) {
    layerInfo.show(b);
  }
  /*------------------------------------------------------------------------------------------------ move_car ---*/

  function movePos(t,n) {      

    if(n == 4) {bSet = false};
    tTime = t;
    if((n==0 || n==2 || n==3) && t <= 4 && car1.get_x() < xCarE && car2.get_x() < xCarE) {    //txt_tmp.value = car1.get_x(); 
      bArea = true;
      car1.moveTo(xCarS + s1x[Math.round(nNumPrSec*t)],yCar10);
      car2.moveTo(xCarS + s2x[Math.round(nNumPrSec*t)],yCar20);
      draw_graph(t);
      txt_tMax.value = "t  = " + t.toString();  }
    else if(t>=tMax) {  
      bArea = false;
      draw_area(tMax);
    }
    else if((n==1 || car1.get_x() >= xCarE || car2.get_x() >= xCarE) && bArea) {
      bArea = false;
      draw_area(t);
    }
    else if(n==4) {  
      bArea = true;
      car1.moveTo(xCarS + s1x[Math.round(nNumPrSec*t)],yCar10);
      car2.moveTo(xCarS + s2x[Math.round(nNumPrSec*t)],yCar20);
      draw_graph(t);
      txt_tMax.value = "t  = 0";
    }
    if(car1.get_x() >= xCarE || car2.get_x() >= xCarE) {  
      if(!bSet) {
        bSet = true;
        var h; 
        h = (t).toString();
        txt_tMax.value = "t  = " + h;
      }
    }    
    init_line1(car2.get_x());   
  }
  /*-------------------------------------------------------------------------------------------------------------*/
}
/*===============================================================================================================*/