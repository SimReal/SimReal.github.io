
  /*==================================================================== ObjectHandler ===*/

  /*---------------------------------------------------------------------- makeTxtArea ---*/

  function makeTxtArea(layParent,xPos,yPos,w,h,txt) {
    var obj  = document.createElement("textArea")    ;
    layParent .appendChild(obj)                   ;
    obj       .style.type     = 'label'           ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  w    + 'px'      ;
    obj       .style.height   =  h    + 'px'      ;
    obj       .style.wrap     = 'hard'            ;
  //obj       .style.fontFamily = 'Verdana'         ;
  //obj       .style.fontSize   = '12px'          ;
    obj       .readOnly       = 'true'            ;
    obj       .innerHTML      =  txt              ;
    return     obj                                ;
  }    
  /*--------------------------------------------------------------------------- makeLb ---*/

  function makeLb(layParent,xPos,yPos,w,h,txt)    {  
    var obj  = document.createElement("label")    ;
    layParent .appendChild(obj)                   ;
    obj       .style.type     = 'label'           ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  w    + 'px'      ;
    obj       .style.height   =  h    + 'px'      ;
    obj       .innerHTML      =  txt              ;
    return     obj                                ;
  }

  function makeTxt2(xPos,yPos,w,h,txt)            {  
    var obj  = document.createElement("input")    ;
    document  .body.appendChild(obj)              ;
    obj       .style.type     = 'text'            ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  w    + 'px'      ;
    obj       .style.height   =  h    + 'px'      ;
    obj       .value          =  txt              ;
    return     obj                                ;
  }
  /*-------------------------------------------------------------------------- makeTxt ---*/

   function makeTxt(layParent,xPos,yPos,w,h,txt,bBorderT,bWriteT,bcgColorT,txtColorT,infoT)   {
    var bBorder     = (typeof bBorderT  !== 'undefined') ? bBorderT  : true     ;
    var bWrite      = (typeof bWriteT   !== 'undefined') ? bWriteT   : true     ;
    var bcgColor    = (typeof bcgColorT !== 'undefined') ? bcgColorT : '#FFFFFF';
    var txtColor    = (typeof txtColorT !== 'undefined') ? txtColorT : '#000000';
    var info        = (typeof infoT     !== 'undefined') ? infoT     : ''       ;
  
    var obj  = document.createElement("input")    ;
    layParent .appendChild(obj)                   ;
    obj       .style.type       = 'text'          ;
    obj       .style.position   = 'absolute'      ;
    obj       .style.left       =  xPos + 'px'    ;
    obj       .style.top        =  yPos + 'px'    ;
    obj       .style.width      =  w    + 'px'    ;
    obj       .style.height     =  h    + 'px'    ;
    obj       .style.color      = txtColor        ;
    obj       .style.background = bcgColor        ;
    obj       .style.fontFamily = 'Verdana'       ;
    obj       .style.fontSize   = '11px'          ;
    obj       .style.padding    = '5px'           ;
    obj       .value            =  txt            ;
    if(bBorder == false) {
      obj.style.border = 'none';
    }
    if(bWrite == false) {
      obj.disabled = 'disabled';
    }
    return     obj                                ;
  }

/*
  function makeTxt(layParent,xPos,yPos,w,h,txt,bShow)   {  
    var obj  = document.createElement("input")    ;
    layParent .appendChild(obj)                   ;
    obj       .style.type     = 'text'            ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  w    + 'px'      ;
    obj       .style.height   =  h    + 'px'      ;
  //obj       .style.color = '#AAAAAA';
  //obj       .style.background = '#FFEEEE';
    obj       .value          =  txt              ;
    if(bShow==false) {
      obj.style.border = 'none';
    }
    return     obj                                ;
  }
*/
  function makeTxtLb(layParent,xPos,yPos,w,h,txt,bShow) {  
    var obj  = document.createElement("input")    ;
    layParent .appendChild(obj)                   ;
    obj       .style.type     = 'text'            ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  w    + 'px'      ;
    obj       .style.height   =  h    + 'px'      ;
    obj       .value          =  txt              ;
  //obj       .disabled       = 'disabled'        ;
    obj       .readOnly       =  true             ;
    obj       .style.backgroundColor= '#ffffff'   ;
    if(bShow == false) {
      obj.style.border = '0px'; }
    else {
      obj.style.border = '1px solid #aaaaaa';
    }
    return     obj                                ;
  }
  function makeTxtLb2(xPos,yPos,w,h,txt,bShow)    {  
    var obj  = document.createElement("input")    ;
    document  .body.appendChild(obj)              ;
    obj       .style.type     = 'text'            ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  w    + 'px'      ;
    obj       .style.height   =  h    + 'px'      ;
    obj       .value          =  txt              ;
    obj       .disabled       = 'disabled'        ;
    obj       .style.backgroundColor= '#eeeeee'   ;
    obj.style.border = '0px'                      ;
    obj.style.border = '1px solid #aaaaaa';
    return     obj                                ;
  }
  /*--------------------------------------------------------------------------- makePb ---*/

  function makePb(layParent,xPos,yPos,w,h,txt,infoT)    {
    var info = (typeof infoT     !== 'undefined') ? infoT     : ''       ;
    var obj  = document.createElement("button")   ;
    layParent .appendChild(obj)                   ;
    obj       .type           = 'button'          ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  w    + 'px'      ;
    obj       .style.height   =  h    + 'px'      ;
  //obj       .style.color    = 'blue'            ;
  //obj       .style.background = '#ff0000'       ;
    obj       .innerHTML      =  txt              ;
    return     obj                              
  }
  function makePb2(xPos,yPos,w,h,txt)             {
    var obj  = document.createElement("button")   ;
    document  .body.appendChild(obj)              ;
    obj       .type           = 'button'          ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  w    + 'px'      ;
    obj       .style.height   =  h    + 'px'      ;
    obj       .innerHTML      =  txt              ;
    return     obj                                ;
  }
  /*--------------------------------------------------------------------------- makeCb ---*/

  function makeCb(layParent,xPos,yPos,w,h,txt,b,wl,wh,infoT)       {
    var info = (typeof infoT     !== 'undefined') ? infoT     : ''       ; 
    var obj  = document.createElement("input")    ;
    layParent .appendChild(obj)                   ;
    obj       .type           = 'checkbox'        ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  w    + 'px'      ;
    obj       .style.height   =  h    + 'px'      ;
    obj       .checked        =  b                ;
    var lbl  = makeTxt(layParent,xPos+25,yPos+3,wl,wh,txt,false,false);
  //var lbl  = makeTxtLb(layParent,xPos+25,yPos+3,wl,wh,txt,false);
    return     obj                                ; 
  }
 /*---------------------------------------------------------------------------- makeRb ---*/

  function makeRb(layParent,xPos,yPos,w,h,txt,b,wl,wh,group) { 
    var obj  = document.createElement("input")    ;
    layParent .appendChild(obj)                   ;
    obj       .type           = 'radio'           ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  w    + 'px'      ;
    obj       .style.height   =  h    + 'px'      ;
    obj       .checked        =  b                ;
    obj       .name           =  group            ;
    var lbl  = makeTxtLb(layParent,xPos+25,yPos+3,wl,wh,txt,false);
    return     obj                                ; 
  }    
  /*--------------------------------------------------------------------------- makeSb ---*/

  function makeSb(layParent,xPos,yPos,len,minV,maxV,stepV,valueV)   {
    var obj  = document.createElement("input")    ;
    layParent .appendChild(obj)                   ;
    obj       .type           = 'range'           ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  len  + 'px'      ;
    obj       .min            =  minV             ;
    obj       .max            =  maxV             ;
    obj       .step           =  stepV            ;
    obj       .value          =  valueV           ;
    return     obj                                ;
  }

  function Sb(layParent,xPos,yPos,len,minV,maxV,stepV,valueV)       {
    var obj  = document.createElement("input")    ;
  //var slider = $(obj).slider();
  //$(layParent).append(slider);
  //layParent .appendChild(slider)                ;
    layParent .appendChild(obj)                   ;
    obj       .type           = 'range'           ;
    obj       .style.position = 'absolute'        ;
    obj       .style.left     =  xPos + 'px'      ;
    obj       .style.top      =  yPos + 'px'      ;
    obj       .style.width    =  len  + 'px'      ;
    obj       .min            =  minV             ;
    obj       .max            =  maxV             ;
    obj       .step           =  stepV            ;
    obj       .value          =  valueV           ; 
    return     obj                                ;
/*
    
  //}).draggable();  
    alert("h");
    return    slider;

  //var slider = $( "#dv_sliderrange" ).slider({
        range: true,
        orientation: 'horizontal',
        min: 0,
        max: 10000,
        step: 10,    alert(step);
        values: [ 0, 10000 ],
        // Update my own form fields with the Slider values
        slide: function( event, ui ) {
            $( "#fd_amount0" ).val( "$ " + ui.values[ 0 ]);
            $( "#fd_amount1" ).val( "$ " + ui.values[ 1 ]);
        }
    }).draggable();

    return slider;
*/
  }

  /*----------------------------------------------------------------------- makeObjExt ---*/

  function makeObjExt(layParent,name,xPos,yPos)   {
    var obj  = document.createElement("img")      ;
    layParent.appendChild(obj);
    obj.src = name;
    obj  .style.position = 'absolute';
    obj  .style.left     =  (xPos-obj.width/2 ) + 'px';        
    obj  .style.top      =  (yPos-obj.height/2) + 'px';
    return obj;

  }
  /*------------------------------------------------------------------------- makeCanv ---*/

  
  function makeCanvas(layParent,zNdx)              {
    var obj  = document.createElement("canvas")    ;
    var idT  = makeId()                            ;
    layParent .appendChild(obj)                    ; 
    obj       .id              = idT               ; 
    obj       .type            = 'canvas'          ;
    obj       .style.position  = 'absolute'        ;
    obj       .style.left      = '0px'             ;
    obj       .style.top       = '0px'             ;
    obj       .width           = 600; //774               ;
    obj       .height          = 445;//585               ;
    obj       .style.border    = "1px solid"       ;
    var cSimT = document.getElementById(idT);
    return     cSimT;
  }

  function makeCanv2(obj,xPos,yPos,w,h)            {
    obj      = document.createElement("canvas")    ;
    document  .body.appendChild(obj)               ;
    obj       .type            = 'canvas'          ;
    obj       .style.position  = 'absolute'        ;
    obj       .style.left      =  xPos + 'px'      ;
    obj       .style.top       =  yPos + 'px'      ;
    obj       .style.width     =  w    + 'px'      ;
    obj       .style.height    =  h    + 'px'      ;
    obj       .style.border    =  '1px solid #000000';
    return     obj;
  }

  function makeCanvas3(idName,layParent,zNdx)      {
    var obj  = document.createElement("canvas")    ;
    layParent .appendChild(obj)                    ;
    obj       .id              = idName            ;
    obj       .type            = 'canvas'          ;
    obj       .style.position  = 'absolute'        ;
    obj       .style.left      = '0px'             ;
    obj       .style.top       = '0px'             ;
    obj       .width           = 774               ;
    obj       .height          = 585               ;
    obj       .style.border    = "1px solid"       ;
    var cSimT = document.getElementById(idName);
    return     cSimT;
  }
  function showCanvas(obj,b) {
    if(b==true) {
      obj.style.visibility = 'visible'; }
    else {
      obj.style.visibility = 'hidden';
    }
  }
  /*--------------------------------------------------------------------------- makeId ---*/

  function makeId() {
    var txt = "";
    var pElement = "abcdefgh0123456789";
    for(var i=0;i<5;i++) {
      txt += pElement.charAt(Math.floor(Math.random() * pElement.length));
    }
    return txt;
  }
  /*-------------------------------------------------------------------------- ClearCS ---*/

  function clearCS(obj) {
    //obj.clearRect(0,0,obj.width,obj.height);
  }
  function get_x(obj) {
    var xTmpS = (obj.style.left).toString();
    xTmpS     = xTmpS.substr(0, xTmpS.indexOf('p'));
    return Number(xTmpS)+obj.width/2;
  }
  function get_y(obj) {
    var yTmpS = (obj.style.top).toString();
    yTmpS     = yTmpS.substr(0, yTmpS.indexOf('p'));
    return Number(yTmpS)+obj.height/2;
  }
 /*--------------------------------------------------------------------------- moveObj ---*/

  function moveObj(obj,xPos,yPos) { 
    obj.style.left = (xPos-obj.width/2 ) + 'px';
    obj.style.top  = (yPos-obj.height/2) + 'px';
  }  
  /*--------------------------------------------------------------------------------------*/

  /*======================================================================================*/

