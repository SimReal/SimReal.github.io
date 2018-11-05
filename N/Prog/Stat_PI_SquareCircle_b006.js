   /*=================================================================================== Stat_PI_SquareCircle ===*/

function Stat_PI_SquareCircle() {

  var layerSimL        = null;                                         //          simulation window object      
  var layerObjL        = null;                                         //          control    window object

  var layerSim         = null;                                         //          simulation window      
  var layerObj         = null;                                         //          control    window

  var point            = null;                                         // external array object of points
 
  var txt_headLine     = null;                                         // control  objects - text header                      
  var cb_path          = null;                                         //                    check boxes

  var sb_scroll        = null;                                         //          scrollbar
  var bSbDown          = null;                                         //          scrolling

  var cS_axis          = null;                                         // canvas   axis
  var cS_path          = null;                                         //          path
  var cS_square        = null;                                         //          square
  var cS_circle        = null;                                         //          circle
  var cS_vector        = null;                                         //          vector

  var nLen_square      = 300;                                          // len of square 
  var nRadius          = 150;                                          // radius of circle

  var x0               = 300;                                          // origin
  var y0               = 220;

  var xLen             = 200;                                          // axis length        
  var yLen             = 175;

  var xPos             = 400;                                          // point position - x
  var yPos             = 300;                                          //                  y
  var dist             =   2;                                          // point move
  var nTime            =   0;                                          // time internal

  var nPoint           =  10;                                          // number of points

  var fC               = null;                                         // FunctionCompute
                               
  this.movePos         = movePos;                                      // public function

  simStart();                                                          // start function

  /*--------------------------------------------------------------------------------------------- simStart ---*/

  function simStart() {   //window.alert(9);
   init();
  }
  /*------------------------------------------------------------------------------------------------- init ---*/
  
  function init()  {      
    init_layer          ();                       // init layer
    init_canvas         ();                       //      canvas (graphical area)
    init_axis           ();                       //      coordinat axis
    init_square         ();                       //      square
    init_circle         ();                       //      circle
    init_vector         ();                       //      vector
    init_obj            ();                       //      control objects
    init_listener       ();                       //      actions of control objects  
    init_functionCompute();                       //      FunctionCompute

  }
  /*------------------------------------------------------------------------------------------- init_layer ---*/

  function init_layer() {     
    layerSimL  = new CLayer('sim','#ffffff',10);  layerSim = layerSimL.get_obj();   
    layerObjL  = new CLayer('obj','#ffffff',10);  layerObj = layerObjL.get_obj(); 
  }
  /*------------------------------------------------------------------------------------------ init_canvas ---*/

  function init_canvas()    {
    cS_axis    = new CCanvas (layerSim,1,'#000000');
    cS_path    = new Array(nPoint+1);
    for(var i=1;i<=nPoint;i++) {
      cS_path[i] = new CCanvas (layerSim,i+1,'#' + Math.floor(16777215*Math.random()).toString(16));
    }
    cS_square = new CCanvas(layerSim,2,'#000000');
    cS_circle = new CCanvas(layerSim,3,'#000000');
    cS_vector = new CCanvas(layerSim,4,'#FF00FF');
  }
  /*-------------------------------------------------------------------------------------------- init_axis ---*/

  function init_axis()     { 
    cS_axis.vector(x0-xLen,y0     ,x0+xLen,y0     ,1,'#0000FF');
    cS_axis.vector(x0     ,y0+yLen,x0     ,y0-yLen,1,'#0000FF');
    cS_axis.lineFromTo(100,200,150,150,5,'#FF00FF');
  //cS_axis.moveTo(x0-xLen,y0     ); cS_axis.lineTo(x0+xLen,y0     );
  //cS_axis.moveTo(x0     ,y0-yLen); cS_axis.lineTo(x0     ,y0+yLen);
  }
  /*--------------------------------------------------------------------------------------- init_rectangle ---*/

  function init_square()     {  
    cS_square.rec(x0-nLen_square/2,y0-nLen_square/2,nLen_square,nLen_square,1,'#FF0000');
  //cS_square.rec(x0-nLen_square/2,y0-nLen_square/2,nLen_square,nLen_square);
  }
  /*------------------------------------------------------------------------------------------ init_circle ---*/

  function init_circle()     {  
  //cS_circle.circle(x0,y0,nLen_square/2);
    cS_circle.circle(x0,y0,nLen_square/2,1,'#000000');
  }
  /*------------------------------------------------------------------------------------------ init_vector ---*/
  function init_vector()     {  
    cS_circle.vector(x0,y0,x0+nRadius,y0,1,'#FF00FF');
  }
  /*-------------------------------------------------------------------------------------- functionCompute ---*/
  function init_functionCompute() {
  //fC = new FunctionCompute();
  //fC.infixPostfix("2+cos(x)*4");
  //var a = fC.get_postfixArray(); //alert(a);
  //var b = fC.postfixValue(3);    //alert(b);
  }
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()      { 
    txt_headLine  = makeTxtLb(layerObj,  1,  1,220,20,"                PI - Square / Circle",true);
    point         = new Array(nPoint+1);
    for(var i=1;i<=nPoint;i++) {
      point[i]    = new ObjExt(layerSim,"N/image/Box2.jpg",x0,y0);
    }
    cb_path       = new Array(nPoint+1);
    for(var i=1;i<=nPoint;i++) {
      cb_path[i]  = makeCb   (layerObj, 40,200 + 20*(i-1), 15,15,"Path " + i,true ,60,15);
    } 
    sb_scroll     = Sb   (layerObj, 10,410,200, 0,1000,1,0);
  }
  /*---------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener() {
    for(var i=1;i<=nPoint;i++) {
      cb_path[i].onclick = function() { act_cbPath();}
    }
    sb_scroll .onmousedown = function() { act_sbEDown       ();}  
    sb_scroll .onmousemove = function() { act_sbEMove       ();}  
  //sb_scroll .onchange    = function() { act_sbEMove       ();}
    sb_scroll .onmouseout  = function() { act_sbEOut        ();}

    /*
	sb_scroll.change(function(){act_sbEMove();});
    */ 
  } 
  /*----------------------------------------------------------------------------------------------- action ---*/
 
  function act_cbPath() {
    for(var i=1;i<=nPoint;i++) {
      cS_path[i].show(cb_path[i].checked);
    }
  }

  function act_sbEDown() {
    bSbDown = true;
  } 

  function act_sbEMove() {
    if(bSbDown) {
      var nScrollPos  = sb_scroll.value/100;  //alert(nScrollPos);
	//var nScrollPos  = sb_scroll.val()/100;  //alert(nScrollPos);
    //cS_vector.vector(x0,y0,x0+50,y0+50,1,'#FF00FF');
    //var nScrollPos  = sb_scoll.value/100;  alert(nScrollPos);
      cS_vector.clear();
      cS_vector.vector(x0,y0,x0+nRadius*Math.cos(nScrollPos),y0-nRadius*Math.sin(nScrollPos),1,'#FF00FF');
  //  var nTimeTmp    = sb_ellipseStep.value/100           ;
  //  txt_angle.value = " Angle  =   " + nTimeTmp.toString(); 
  //  movePos(nTimeTmp);
    }
  }

  function act_sbEOut()  {
    bSbDown = false;
  } 

  /*-------------------------------------------------------------------------------------------- draw_path ---*/

  function draw_path(t) {
    for(var i=1;i<=nPoint;i++) {
      if(t<=0.01) {
        cS_path[i].clear();
        cS_path[i].moveTo(point[i].get_x(),point[i].get_y());
      }
      cS_path[i].lineTo(point[i].get_x(),point[i].get_y());
    }
  }
  /*------------------------------------------------------------------------------------------ randomColor ---*/

//function randomColor() {

//}
  /*---------------------------------------------------------------------------------------------- movePos ---*/

  function movePos(t) {
    nTime = t;
    if(t==0) {
      for(var i=1;i<=nPoint;i++) {
        point[i].moveTo(x0,y0); }}
    else {
      var choice;
      var x01;
      var y01;
      for(var i=1;i<=nPoint;i++) {
        choice = Math.floor(8*Math.random()); 
        x01    = point[i].get_x();
        y01    = point[i].get_y();
        switch(choice) {
          case 0: x01 = x01 + dist;                   break;
          case 1: x01 = x01 - dist;                   break;
          case 2: y01 = y01 + dist;                   break;
          case 3: y01 = y01 - dist;                   break;
          case 4: x01 = x01 + dist; y01 = y01 - dist; break;
          case 5: x01 = x01 + dist; y01 = y01 + dist; break;
          case 6: x01 = x01 - dist; y01 = y01 - dist; break;
          case 7: x01 = x01 - dist; y01 = y01 + dist; break;
        }
        point[i].moveTo(x01,y01)
      }
    }
    draw_path(t);
  }
  /*----------------------------------------------------------------------------------------------------------*/
}
/*============================================================================================================*/