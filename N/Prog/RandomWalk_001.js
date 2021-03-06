   /*=================================================================================== RandomWalk_001 ===*/

function RandomWalk_001() {

 
//var thisObj          = null;
//var owner            = null;

  var layerSimL        = null;                                         //          simulation window object      
  var layerObjL        = null;                                         //          control    window object

  var layerSim         = null;                                         //          simulation window      
  var layerObj         = null;                                         //          control    window

  var point            = null;                                         // external array object of points
  var pointDrag        = null;                                         // external dragable object
 
  var txt_headLine     = null;                                         // control  objects - text header 

  var txt_input        = null;                                         // txtField input
  var txt_output       = null;                                         //          output

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
  var fD               = null;                                         // FunctionComputeDerivative   (differentiation)
                               
  this.movePos         = movePos;                                      // public function
  this.test            = test;

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
    layerSimL  = new CLayer('sim',10,'#ffffff');  layerSim = layerSimL.get_obj();   
    layerObjL  = new CLayer('obj',10,'#ffffff');  layerObj = layerObjL.get_obj(); 
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
    fC = new FunctionCompute();
    fD = new FunctionComputeDerivate();
  //fC.infixPostfix("2+cos(x)*4");
  //var a = fC.get_postfixArray(); //alert(a);
  //var b = fC.postfixValue();    alert(b);
    fD .infixPostfix("3sin(2x)sin(x)");
  //var aD = fD.get_postfixArray(); alert("aD"); alert(aD);     // ok here
  //var bD = fD.get_derivate_function_symbolic();  alert"bD"); alert(bD);
  //fD .infixPostfix (fC.get_derivate_function_symbolic()); 
  //var c = fC.get_derivate_function_symbolic();  alert("derivative"); alert(c);
  //var d = fD.get_postfixArray();  alert("derivative postfixArray");alert(d);
  //fC.differentiateStack();
  //var c = fC.get_derivate_function_symbolic(); alert(c);
  }
  /*--------------------------------------------------------------------------------------------- init_obj ---*/

  function init_obj()      { 
    txt_headLine  = makeTxtLb(layerObj,  1,  1,220, 20,"                PI - Square / Circle",true);
    txt_input     = makeTxt  (layerObj,  1,100,200, 20,"",true);
    txt_output    = makeTxtLb(layerObj,  1,130,200, 20,"",true);
    point         = new Array(nPoint+1);
    for(var i=1;i<=nPoint;i++) {
      point[i]    = new ObjExt(layerSim,"N/image/Box2.jpg",x0,y0);
    }

    pointDrag     = new ObjExtDrag(layerSim,"N/image/Box2.jpg",x0+200,y0+100,test,test,test);

    cb_path       = new Array(nPoint+1);
    for(var i=1;i<=nPoint;i++) {
      cb_path[i]  = makeCb   (layerObj, 40,200 + 20*(i-1), 15,15,"Path " + i,true ,60,15);
    } 
    sb_scroll     = Sb   (layerObj, 10,410,200, 0,1000,1,0);
  }
  function test() {
    //alert("test");
  }
  /*---------------------------------------------------------------------------------------- init_listener ---*/

  function init_listener() {
    for(var i=1;i<=nPoint;i++) {
      cb_path[i].onclick = function() { act_cbPath();}
    }
  //txt_input .addEventListener("change",act_txtInput);
  //txt_input .onchange    = function() { act_txtInput      ();}
    txt_input .onkeyup     = function() { act_txtInput      ();}
  //sb_scroll .addEventListener("mousemove",  act_sbEMove); 
    sb_scroll .onmousedown = function() { act_sbEDown       ();}  
    sb_scroll .onmousemove = function() { act_sbEMove       ();}  
  //sb_scroll .onchange    = function() { act_sbEMove       ();}
    sb_scroll .onmouseout  = function() { act_sbEOut        ();}

  //pointDrag .onmouseDown = function() { act_objMouseDown  ();}
  //pointDrag .ondragstart = function() { act_objDragStart  ();}
  //pointDrag .ondrag      = function() { act_objDrag       ();}
  //pointDrag .onmousemove = function() { act_objDrag       ();}

    /*
	sb_scroll.change(function(){act_sbEMove();});
    */ 
  } 
  /*----------------------------------------------------------------------------------------------- action ---*/
 
  function act_txtInput() {
    fC.infixPostfix(txt_input.value);
    var a = fC.get_postfixArray();
    var b = fC.postfixValue();
    txt_output.value = b;
  }
  function act_objMouseDown() {
  //ev.preventDefault();
    alert("mouseDown");
  }
  function act_objDragStart() {
  //ev.preventDefault();
    alert("dragStart");
  }
  function act_objDrag(ev) {
  //ev.preventDefault();
    alert("drag");
  }
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