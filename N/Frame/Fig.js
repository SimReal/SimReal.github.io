
  /*============================================================================== Fig ===*/

  /*-------------------------------------------------------------------- makeRectangle ---*/

  function makeRectangle(layParent,xPos,yPos,w,h,col)    {  
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
  /*--------------------------------------------------------------------------------------*/

  /*======================================================================================*/

