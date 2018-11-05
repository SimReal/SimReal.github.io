  /*======================================================================================== CanvasHandler ===*/

  
  /*----------------------------------------------------------------------------------------- createCanvas ---*/

  function createCanvas(idName,zNdx) {
    var obj = document.createElement('canvas');
    obj.id             = idName     ;
    obj.style.zIndex   = zNdx       ;
    obj.width          = 774        ;
    obj.height         = 585        ;
    obj.style.left     = '10px'     ;
    obj.style.top      = '125px'    ;
    obj.style.position = 'absolute' ;
    obj.style.border   = "1px solid";
    document.body.appendChild(obj);
    var cSimT          = document.getElementById(idName);
    return cSimT;
  }
  /*----------------------------------------------------------------------------------------------------------*/

  /*==========================================================================================================*/
