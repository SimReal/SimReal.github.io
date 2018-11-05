//================================================================================================ Particle_001 ===//

function Particle_001 () {


  var layerSim         = null;                             // layer         simulation window       
  var layerObj         = null;                             //               control    window

  var nColLayer        = null;                             // color         layer  default
  var nColCanvas       = '#000000';                        //               canvas default drawing (black)


  var mc_particle      = null;                             // canvas        particle
 
  var txt_speedT       = null;                             // text field    particle speed text
  var txt_speed        = null;                             //                              value
 
  var cb_show          = null;                             // checkbox      particle show/hide
  
  var pb_reset         = null;                             // pushbutton    particle reset speed

  var txt_head         = null;                             // text field    head
  var sHead            = "Particle";                       // text          head information

  var x0mc             = 308;                              // origin        x
  var y0mc             = 215;                              //               y

  var xParticle        =   0;                              // particle      position x
  var yParticle        =   0;                              //                        y
  var rParticle        =  10;                              //               radius

  var A                = 100;                              //               amplitude

  var speed0           =   2;                              // speed         initial
  var speed            =   speed0;                         //               current

  var nColFill         = '#AAAAFF';                        // color         particle fill
  var nColLine         = '#AAAAAA';                        //                        contour
 

  var tTime            = 0;                                // time          
  var nTime            = -1;                               // control button


  var sInfo            = "\r"+                             // information
                         " Particle: \r\r"+

                         " A simple program to show the movement of a particle. \r"+
                         " Click the start button 'Run' to start the particle movement. \r"+
                         " As default the particle movement is a simple harmonic motion (SHM) \r\r"+

                         " Change the value in the text field 'Speed' to change the speed of the particle. \r"+
                         " Mark/unmark the check box 'Show particle' to show/hide the particle. \r"+
                         " Click the pushbutton 'Reset Speed' to reset the particle speed.";
      

  this.get_info        = get_info;                         // public     function get_info
  this.movePos         = movePos ;                         //                     movePos

  init();                                                  // start      function
   
  //------------------------------------------------------------------------------------------------------ init ---//

  function init()             {
    init_layer      ();
    init_canvas     ();
    init_obj        ();
    init_listener   ();
    move_particle   (tTime,nTime);
  }
  //------------------------------------------------------------------------------------------------ init_layer ---//

  function init_layer()       {
    layerSim     = new CLayer('sim' ,1,nColLayer);         // create layer simulations   
    layerObj     = new CLayer('obj' ,2,nColLayer);         // create layer control objects
  }
  //--------------------------------------------------------------------------------------------------- init_mc ---//

  function init_canvas()      {
    mc_particle = new CCanvas (layerSim, 1,nColCanvas,x0mc,y0mc);
  }
  //--------------------------------------------------------------------------------------------------- objLoad ---//

  function objLoad()          {                            // complete load of external objects
  }
  //-------------------------------------------------------------------------------------------------- init_obj ---//

  function init_obj()         {                              
    
     txt_head    = new Txt  (layerObj, 80,  50,150,20,sHead  ,false,false,'#FFFFFF','#0000FF');  txt_head.set_size(14); txt_head.set_bold();

     txt_speedT  = new Txt (layerObj,  50, 170,100,20,"Speed"        ,false,false);
     txt_speed   = new Txt  (layerObj,110, 170, 50,20,speed          ,true ,true );

     cb_show     = new Cb   (layerObj, 50, 220, 15,15,"Show Particle",true ,100,15);
     pb_reset    = new Pb   (layerObj,  5, 420,212,20,"Reset Speed"               );
  }
  //--------------------------------------------------------------------------------------------- init_listener ---//

  function init_listener()    { 
 
    txt_speed  .get_obj() .oninput     = function() { act_TxtSpeed ();}
    cb_show    .get_obj() .onclick     = function() { act_CbShow   ();} 
    pb_reset   .get_obj() .onclick     = function() { act_PbReset  ();}                       
  }
  //------------------------------------------------------------------------------------------------------ act_ ---//
  
  function act_TxtSpeed()     {                            // change speed
    var s = txt_speed.value(); 
    if(s != "") {
      speed = s;
    }
  }

  function act_CbShow()       {                            // show/hide particle
    mc_particle.show(cb_show.selected());
  }
  
  function act_PbReset()      {                            // reset particle speed
    speed = speed0;
    txt_speed.set_value(speed);
  }
  //--------------------------------------------------------------------------------------------- draw_particle ---//

  function draw_particle()    {
    mc_particle .clear         ();
    mc_particle .lineStyle     (0.5,nColLine,1);
    mc_particle .set_fillStyle (nColFill);
    mc_particle .circle        (xParticle,yParticle,rParticle);
    mc_particle .fill          ();
  }
  //--------------------------------------------------------------------------------------------- move_particle ---//
  
  function move_particle(t,n) {
    yParticle = A*Math.sin(speed*t);
    xParticle = A*Math.cos(speed*t);
    draw_particle();
  }
  //-------------------------------------------------------------------------------------------------- get_info ---//

  function get_info()         {                              
    return sInfo;                                          
  }
  //--------------------------------------------------------------------------------------------------- movePos ---//

  function movePos(t,n)       {                        
    tTime = t;
    nTime = n;
    move_particle(t,n);
  }
  //---------------------------------------------------------------------------------------------------------------//
}
//=================================================================================================================//