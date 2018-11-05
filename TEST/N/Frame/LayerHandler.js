  /*========================================================================================== LayerHandler ===*/

  /*
  makeLayer(ID,left,top,width,height,color,visible,zIndex);

  <form>
  <input type=button value="Create layer"
  onclick="makeLayer('LYR1',400,250,100,100,'red',1,1)">
  <input type=button value="Delete layer"
  onclick="deleteLayer('LYR1')">
  </form>
  */

  /*--------------------------------------------------------------------------------------------- makeLayer ---*/


function makeLayer(id,layerParent,L,T,W,H,bgColor,visible,zIndex) { 
  var newNode = document.createElement('div');
  var ST= 'position:absolute'
  +'; left:'+L
  +'; top:'+T
  +'; width:'+W
  +'; height:'+H
  +'; clip:rect(0,'+W+','+H+',0)'
  +'; visibility:'+(null==visible || 1==visible ? 'visible':'hidden')
  +(null==zIndex  ? '' : '; z-index:'+zIndex)
  +(null==bgColor ? '' : '; background-color:'+bgColor)
 
  var LR= '<DIV id='+id+' style="'+ST+'"></DIV>';

  
  newNode.setAttribute('id',id);
  newNode.setAttribute('style',ST); //alert(layerParent.id);
  if(layerParent.id == 'layerSimRealN') {
    //alert("0"); 
  //document.body.appendChild(newNode); }
    layerParent.appendChild(newNode); }
  else {
    //alert("1");
    layerParent.appendChild(newNode);
  }
  return newNode;
}


/*
  function makeLayer(id,L,T,W,H,bgColor,visible,zIndex) {  
    if (document.getElementById) {
      if (document.getElementById(id)) {
        alert ('Layer with this ID already exists!');
      return;
    }
    var ST = 'position:absolute'
    +'; left:'+L
    +'; top:'+T
    +'; width:'+W
    +'; height:'+H
    +'; clip:rect(0,'+W+','+H+',0)'
    +'; visibility:'
    +(null==visible || 1==visible ? 'visible':'hidden')
    +(null==zIndex  ? '' : '; z-index:'+zIndex)
    +(null==bgColor ? '' : '; background-color:'+bgColor);

    var LR = '<DIV id='+id+' style="'+ST+'"></DIV>';

    if (document.body) {
      if (document.body.insertAdjacentHTML) {
        document.body.insertAdjacentHTML("BeforeEnd",LR); }
      else if (document.createElement &&  document.body.appendChild) {
        var newNode = document.createElement('div');
        newNode.setAttribute('id',id);
        newNode.setAttribute('style',ST);
        document.body.appendChild(newNode);
      }
    }
   }
  }
*/
  /*------------------------------------------------------------------------------------------- deleteLayer ---*/

  function deleteLayer(id) {
    if (document.getElementById &&  document.getElementById(id)) {
      var theNode = document.getElementById(id);
      theNode.parentNode.removeChild(theNode);       }
    else if (document.all && document.all[id])       {
      document.all[id].innerHTML='';
      document.all[id].outerHTML='';                 }
    // OBSOLETE CODE FOR NETSCAPE 4 
    else if (document.layers && document.layers[id]) {
      document.layers[id].visibility='hide';
      delete document.layers[id];
    }
  }
  /*------------------------------------------------------------------------------------------- setPosition ---*/

  function setPosition (id,leftX,topY) {
    var layerRef = document.getElementById(id);

    if (layerRef==null) return;

    if (null!=layerRef.style.left) {
      layerRef.style.left = leftX+'px';
      layerRef.style.top  = topY+'px';
    }
    if (null!=layerRef.style.posLeft) {
      layerRef.style.posLeft = leftX;
      layerRef.style.posTop  = topY;
    }
  }
  /*-----------------------------------------------------------------------------------------------------------*/

  /*===========================================================================================================*/
