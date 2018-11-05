/*===================================================================================================== Calculator ===*/

function Calculator() {


      /* Computing an arithmetic expression.                                                            */
      /* The arithmetic expression is allowed to contain a variable x                                   */
      /* and nine parameters A,B,C,D,R,S,T,U,V.                                                         */
      /* First transforming an arithmetic expression represented as a string from infix to postfix form */
      /* by calling the method infixPostfix(infix),then evaluate the expression                         */
      /* by calling the method postfixValue(x:Number,a:Number,b:Number,...,v:Number).                   */
      /* The parameters A,B,C,D,R,S,T,U,V are optional.                                                 */
      /*                                                                                                */
      /* Spaces are removed from the arithmetical expression.                                           */
      /* The arithmetical expresssion can be with or without multiplication.                            */
      /* Example:  2*x*e^(-0.5*x)  or  2xe^(-0.5x)                                                      */
      /*                                                                                                */
      /* The arithmetical expresssion can be with or without y=                                         */
      /* Example:  y=2xe^(-0.5x)   or  2xe^(-0.5x)                                                      */
 
  var owner        = null;                        // owner
 
  var infix        = ""  ;                        // infix
  var infixArray   = null;                        // infix    array
  var ndx          = 0   ;                        // index    number in infix string
  var ndxIn        = 0   ;                        // index    number in infixArray
  var ndxPost      = 0   ;                        //                    postfixArray
  var postfixArray = null;                        // postfix  array
  var oprStack     = null;                        // operator stack
  var valStack     = null;                        // value    stack
  var lParentes    = ""  ;                        // left  parenthesis (
  var rParentes    = ""  ;                        // right parenthesis )
  var lBracket     = ""  ;                        // left  bracket     [
  var rBracket     = ""  ;                        // rigth bracket     ]
  var comma        = ""  ;                        // comma
  var mathFunc     = null;                        // math func   sin cos tan ln exp
  var mathFunc2    = null;                        // math func   with 2 parameters
  var mathFunc3    = null;                        // math func   with 3 parameters
  var mathFunc4    = null;                        // math func   with 4 parameters
  var mathFunc5    = null;                        // math func   with 5 parameters
  var operator     = null;                        // operator    + - * / ^
  var uoperator    = null;                        //             + - * / ^ ( sin cos tan ln exp
  var operatorEx   = null;                        //             + - * / ^ ( sin cos tan ln exp )
  var si           = ""  ;                        // read search infix   element
  var so           = ""  ;                        // pop  search stack   element
  var sp           = ""  ;                        // read        postfix element
  var endSymbol    = ""  ;                        // end symbol  
  var x            = 0   ;                        // variable  x
  var y            = 0   ;                        // variable  y
  var a            = 0   ;                        // parameter 1
  var b            = 0   ;                        //           2
  var c            = 0   ;                        //           3
  var d            = 0   ;                        //           4
  var r            = 0   ;                        //           5
  var s            = 0   ;                        //           6
  var t            = 0   ;                        //           7
  var u            = 0   ;                        //           8
  var v            = 0   ;                        //           9
  var radDeg       = 1;                           // rad: 1    -    Deg: Math.PI/180;

  var bMultAuto    = true;                        // true: Automatic input of multiplication *

  var fA           = null;  

  var out          = "  ";
  var outputE      = ""  ;
  var prefixArray  = null;
  var infixEArray  = null;
  var infixS       = ""  ;
  var ndxPre       = 0   ;
  var exprTree     = null;
  var stackS       = null;
  var ndxE         = 0   ;

  var infixGLB     = ""  ;
  var bParentesOk  = true;
  var bCommaOk     = true;


  this.init                 = init       ;                           //  function

//this.set_owner            = set_owner  ;
//this.set_multAuto         = set_multAuto;
  this.set_radDeg           = set_radDeg ;
  this.get_postfixArray     = get_postfixArray;
//this.isEqualNumParentesis = isEqualNumParentesis;
//this.isInfixOk            = isInfixOk;
//this.existLP              = existLP;
  this.infixPostfix         = infixPostfix;
  this.postfixValue         = postfixValue;
  this.compute_expr         = compute_expr;
  this.compute_value        = compute_value;
  this.get_sExprX           = get_sExprX;
//this.remove_returnKey     = remove_returnKey;
  this.differentiateStack   = differentiateStack;
  this.get_derivate_function_symbolic = get_derivate_function_symbolic;

  init();

  /*----------------------------------------------------------------------------------- init ---*/

  function init() {  //alert("init");

    infixArray   = new Array();                                      // infix array
    postfixArray = new Array();                                      // postfix array
    prefixArray  = new Array();
    infixEArray  = new Array();
    oprStack     = new Stack();                                      // operator stack
    valStack     = new Stack();                                      // value    stack
    lParentes    = "("        ;                                      // left  parenthesis
    rParentes    = ")"        ;                                      // right parenthesis
    comma        = ","        ;                                      // comma
    endSymbol    = "#"        ;                                      // end   symbol

    mathFunc     = new Array("abs","acos","asin","atan",                            // math func
                             "exp","sin" , "cos", "tan", "cot", "sinh", "cosh", "tanh", "coth", 
                             "sec",
                             "ln","lg","sqrt",
                             "faculty",
                             "geo_e","geometric_e","geo_v","geometric_v",
                             "po_e","poisson_e"  ,"po_v","poisson_v",
                             "n_01"); 

    mathFunc2    = new Array("nsqrt",
                             "gcd",
                             "log",
                             "orderback","ordernoback","noorderback","noordernoback",
                             "nor","npr","nbr","ncr","nkprod","nk","binom"    ,
                             "binomic_exp","binomic_var",
                             "geo","geometric","geo_c","geometric_c","geo_cum","geometric_cum",
                             "bin_e","binomic_e","bin_v","binomic_v", 
                             "po","poisson"  ,"po_c","poisson_c" ,"po_cum","poisson_cum",
                             "n_12", 
                             "ep","mod"); //, "geometric_exp","geometric_var"); 
    mathFunc3    = new Array("bin","binomic" ,"bin_c","binomic_c","bin_cum","binomic_cum",
                             "geo_c_12","geometric_c_12","geo_cum_12","geometric_cum_12",
                             "hyp_e","hypergeometric_e","hyp_v","hypergeometric_v",
                             "po_c_12","poisson_c_12","po_cum_12","poisson_cum_12",
                             "ep_12",
                             "normal","npd");   
    mathFunc4    = new Array("bin_c_12","binomic_c_12","bin_cum_12","binomic_cum_12",
                             "hyp","hypergeometric","hyp_c","hypergeometric_c","hyp_cum","hypergeometric_cum",
                             "normal_12","npd_12");  
    mathFunc5    = new Array("hyp_c_12","hypergeometric_c_12","hyp_cum_12","hypergeometric_cum_12");    
                                
    operator     = new Array("|", "+","-", "*", "/", "^", "!", "%")        ;        // operator
    uoperator    = new Array("|", "+","-", "*", "/", "^", "!", "%", "(", "[",       // uoperator
                             "abs","acos","asin","atan",
                             "exp","sin" , "cos", "tan", "cot", "sinh", "cosh", "tanh", "coth",
                             "sec",
                             "ln","lg","log","sqrt",
                             "nsqrt",
                             "gcd",
                             "nor","npr","nbr","ncr","nkprod","nk","faculty",
                             "orderback","ordernoback","noorderback","noordernoback" ,
                             "uniform","uniform_e","uniform_v","uniform_c","uniform_cum","uniform_c_12","uniform_cum_12",
                             "indicator","indicator_e","indicator_v","indicator_c","indicator_cum","indicator_c_12","indicator_cum_12",
                             "binom"    ,
                             "geo","geometric"  ,"geo_e","geometric_e","geo_v","geometric_v",
                             "geo_c","geometric_c","geo_cum","geometric_cum","geo_c_12","geometric_c_12","geometric_cum_12",
                             "bin","binomic"   ,"bin_e","binomic_e" ,"bin_v","binomic_v",
                             "bin_c","binomic_c","bin_cum","binomic_cum","bin_c_12","binomic_c_12","bin_cum_12","binomic_cum_12",
                             "hyp","hypergeometric","hyp_e","hypergeometric_e","hyp_v","hypergeometric_v",
                             "hyp_c","hypergeometric_c","hyp_cum","hypergeometric_cum","hyp_c_12","hypergeometric_c_12","hyp_cum_12","hypergeometric_cum_12",
                             "po","poisson" ,"po_e","poisson_e" , "po_v","poisson_v", 
                             "po_c","poisson_c","po_cum","poisson_cum","po_c_12","poisson_c_12","po_cum_12","poisson_cum_12",
                             "ep","ep_12",
                             "n_01","n_12","normal","normal_12","npd","npd_12",
                             "mod",         
                             "pi","PI","e");
    operatorEx   = new Array("|", "+","-", "*", "/", "^", "%", "!", "(", ")","[","]", ",", "#");   // operator ex
  }
  /*----------------------------------------------------------------------------- set_owner ---*/

  function set_owner(ownerT) {
    owner = ownerT;
  }

  /*----------------------------------------------------------------------------------- set_multAuto ---*/

  function set_multAuto(bMultAutoT) {
    bMultAuto = bMultAutoT;
  }

  /*------------------------------------------------------------------------------------- set_radDeg ---*/

  function set_radDeg(bRad) {
    if(bRad) {                                                       // set to radians
      radDeg = 1; } 
    else {                                                           // set to degrees
      radDeg = Math.PI/180;
    }
  }
  /*------------------------------------------------------------------------------- get_postfixArray ---*/

  function get_postfixArray()  {
    return postfixArray;
  }
  /*--------------------------------------------------------------------------- isEqualNumParentesis ---*/
  
  function isEqualNumParentesis()  {
    var bEqual = false;
    var nL     = 0    ;
    var nR     = 0    ;
    var n      = infixGLB.length;
    var i      = 0;
    while(i<n) {
      if(infixGLB.charAt(i) == "(") { 
        nL++; }
      else if(infixGLB.charAt(i) == ")") {
        nR++;
      }
      i++;
    }
    bEqual = (nL == nR);
    return bEqual;
    //return true;
  }
  /*-------------------------------------------------------------------------------------- isInfixOk ---*/

  function isInfixOk() {
    //return isEqualNumParentesis(infixGLB);
    return (bParentesOk && bCommaOk);
  }
  /*---------------------------------------------------------------------------------------- existLP ---*/

  function existLP() {
    return isEqualNumParentesis();
    //return (infixGLB.indexOf("(") != -1); 
  }
  /*----------------------------------------------------------------------------------- compute_expr ---*/

  function compute_expr(infixT) {
    infixPostfix(infixT);
  }
  /*---------------------------------------------------------------------------------- compute_value ---*/

  function compute_value(xPT,yPT,aPT,bPT,cPT,dPT,rPT,sPT,tPT,uPT,vPT ) {
    return postfixValue (xPT,yPT,aPT,bPT,cPT,dPT,rPT,sPT,tPT,uPT,vPT );
  }
  /*----------------------------------------------------------------------------------- infixPostfix ---*/

  function infixPostfix (infixT) {

                  /* Transforming an infix expression into a postfix expression */

    infixGLB    = infixT;
    bParentesOk = true;
    bCommaOk    = true;    //alert("infixArray");  alert(infixT);

    try {

    infix      = infixT + endSymbol;  //alert("infixArray");  alert(infixT);
    remove_returnKey()             ;  //alert("heiii");            
    infix_removeSpace()            ;                                 // remove spaces
    infix_unaryMinusToBinaryMinus();                                 // change unary minus to binary minus
    if(bMultAuto) {
      infix_setMultiplication();                                     // set necessary multiplication
    }
    infixToArray()                 ;                                 // infix string to array
    findVariables()                ;                                 // find variables and constants
    oprStack.push(endSymbol)       ;                                 // push endSymbol to opratorstack

    ndxIn      = 0                 ;                                 // index in infix   expression
    ndxPost    = 0                 ;                                 // index in postfix expression
    
    do {                                                             // start infix --> postfix expression

      si = infixArray[ndxIn];                                        // read next infix expression

      if(in_uoperator(si)) {                                         // uoperator
        so = oprStack.pop();
        while(stackPriority(so) >= infixPriority(si)) {
          postfixArray[ndxPost] = so;
          ndxPost++;
          so = oprStack.pop();
        }
        oprStack.push(so);
        oprStack.push(si); }
      else if(si == rParentes || si == rBracket) {                   // right parenthesis
        if(existLP()) {
          so = oprStack.pop();
          while(so != lParentes && so != lBracket) {
            postfixArray[ndxPost] = so;
            ndxPost++;
            so = oprStack.pop();
          }}
        else {
          bParentesOk = false;
        }}
      else if(si == endSymbol) {                                     // end symbol
        so = oprStack.pop();
        while(!oprStack.isEmpty()) {
          postfixArray[ndxPost] = so;
          ndxPost++;
          so = oprStack.pop();
        }}
      else {
          postfixArray[ndxPost] = si;                               // operand
          ndxPost++; 
      }

      ndxIn++;

    } while (si != endSymbol);
   
    postfixArray[ndxPost] = si;

    }
    catch(error) {
    }

    ndxPre = 0;

  //alert("postfixArray"); alert(postfixArray); 
   
    infixEArray = new Array();  
    prefixArray = new Array();

    stackS      = new StackS();

    out     = "";
    outputE = "";
    infixS  = "";
    ndxPre  = 0 ;
    postfixArray_to_prefixArray();
    ndxPre = 0;
    ndxE = 0;
    outputE = differentiateStack(exprTree);  //alert("exp");  alert("outputE");   alert(outputE); //trace("outputE  " + outputE);
    scan_outputE(); //trace("outputE");trace(outputE);

  }

  
  function change_tx(s,t) {

    var sParam = "";
    var sS     = s;
    var sLen   = sS.length;
    var sA     = new Array();
    for(var i=0;i<sLen;i++) {
      sA[i] = sS.charAt(i);
    }
    for(var i=0;i<sLen;i++) {
      if(sA[i] == t) {
        sA[i] = "x";
      }
    }
    sParam ="";
    for(var i=0;i<sLen;i++) {
      sParam = sParam + sA[i];
    }
    return sParam;
  }

  function get_sExprX(s,t) {
    return change_tx(s,t);
  }
  
  function get_derivate_function_symbolic() {
    return outputE;
  }
  function get_derivate_function_symbolic() {  
    return outputE;
  }

  function scan_outputE() {
    ////outputE = MathematicsRemove.scan_expression(outputE);
  }

  function set_elementPre(s) {
    prefixArray[ndxPre++] = s;
  }
/*
  function set_elementIn(s) {
    infixEArray[ndxPre++] = s         ;     
    if(!in_operator(s) &&!in_mathFunc(s)) {
      infixS = infixS + "(" + s + ")"; }
    else {
      infixS = infixS + s;
    }  
  }
*/
  function set_elementIn(s) {
    infixEArray[ndxPre++] = s         ;     
    if(!in_operator(s) &&!in_mathFunc(s)) {
      infixS = infixS + "(" + s + "))"; }
    else {
      infixS = infixS + s + "(";
    }  
  }

  function postfixArray_to_prefixArray() {
  
    //var stackS :StackS = new StackS();
    var i      = 0;
    //trace("postfixtoprefix");
    while(i<postfixArray.length-1 && postfixArray[i] != "#") {
      var s  = postfixArray[i]; //alert(s); //trace(s);
      if(in_operator(s)) { //trace("operator");
        var res = new BinaryTreeE(set_elementPre,set_elementIn,this,s,null,null);
        res.attach_right (stackS.pop());
        res.attach_left  (stackS.pop());
        stackS.push(res); }
      else if(in_mathFunc(s)) {
        var res = new BinaryTreeE(set_elementPre,set_elementIn,this,s,null,null);
        res.attach_right (stackS.pop());
        stackS.push(res); }
      else { //trace("nonoperator");
        stackS.push(new BinaryTreeE(set_elementPre,set_elementIn,this,s,null,null));
      } //alert(s);
        //alert("stackArray"); alert(stackS.get_stack());
      i++;
    }
    exprTree = stackS.pop(); 
/*
    alert("123");
    alert("1  " + exprTree.get_root());                                                // *
    alert("2  " + exprTree.get_left().get_root());                                     // *
    alert("3  " + exprTree.get_left().get_left() .get_root());                         // 3
    alert("4  " + exprTree.get_left().get_right().get_root());                         // sin
    alert("5  " + exprTree.get_left().get_right().get_right().get_root());             // *
    alert("6  " + exprTree.get_left().get_right().get_right().get_left() .get_root()); // 2
    alert("7  " + exprTree.get_left().get_right().get_right().get_right().get_root()); // x
    alert("8  " + exprTree.get_right().get_root());                                    // sin
    alert("9  " + exprTree.get_right().get_right().get_root());                        // x
*/
  //trace(exprTree.get_right().get_right().get_left().get_root());        // x
  //trace(exprTree.get_right().get_right().get_right().get_root());       // 2
  //trace("stop");
    /*
    trace("123");
    trace(exprTree.get_root());                                           // *
    trace(exprTree.get_left().get_root());                                // x
    trace(exprTree.get_right().get_root());                               // sin
    trace(exprTree.get_right().get_right().get_root());                   // +
    trace(exprTree.get_right().get_right().get_left().get_root());        // x
    trace(exprTree.get_right().get_right().get_right().get_root());       // 2
    trace("stop");
    */
  }

  function differentiateStack(binTreeT)  { //alert("diffStack"); //alert(binTreeT); //trace(binTree);
    var binTree              = (typeof binTreeT !== 'undefined') ? binTreeT : null;
    if(binTree!=null) {
      //trace("diffStck");
    var op  = binTree.get_root();         //alert(op); //trace("opF  " + op);
    if(in_operator(op) || in_mathFunc(op)) {     //alert("operator"); alert(op);//trace("op   " + op);
      var u    = get_operand        (binTree.get_left ()); //alert(u); //trace("u    " + u );  //binTree .get_left().get_root(); trace("u");trace(u);
      var du   = differentiateStack (binTree.get_left ()); //alert(du);//trace("du   " + du);
      var v    = get_operand        (binTree.get_right()); //alert(v);//trace("v    " + v );  //binTree .get_right().get_root(); trace("v");trace(v);
      var dv   = differentiateStack (binTree.get_right()); //alert(dv);//trace("dv   " + dv);
      switch(op) {
        case "+"    : out = get_op_sum     (u,du,v,dv);  break;
        case "-"    : out = get_op_diff    (u,du,v,dv);  break; 
        case "*"    : out = get_op_prod    (u,du,v,dv);  break; 
        case "/"    : out = get_op_div     (u,du,v,dv);  break; 
        case "^"    : out = get_op_pot     (u,du,v,dv);  break; 
        case "abs"  : out = get_op_abs     (u,du,v,dv);  break;
        case "sin"  : out = get_op_sin     (u,du,v,dv);  break; 
        case "cos"  : out = get_op_cos     (u,du,v,dv);  break;
        case "tan"  : out = get_op_tan     (u,du,v,dv);  break; 
        case "sinh" : out = get_op_sinh    (u,du,v,dv);  break;
        case "cosh" : out = get_op_cosh    (u,du,v,dv);  break;
        case "sec"  : out = get_op_sec     (u,du,v,dv);  break;
        case "asin" : out = get_op_asin    (u,du,v,dv);  break;
        case "acos" : out = get_op_acos    (u,du,v,dv);  break;
        case "asinh": out = get_op_asinh   (u,du,v,dv);  break;
        case "acosh": out = get_op_acosh   (u,du,v,dv);  break;
        case "e"    : out = get_op_e       (u,du,v,dv);  break;
        case "ln"   : out = get_op_ln      (u,du,v,dv);  break;
        case "sqrt" : out = get_op_sqrt    (u,du,v,dv);  break;
      } }
    else {
      out = get_differentiation(op); //trace("out");trace(out);
    }  if(out=="") {out="0"};
    return out;
    }
    else {
     return "";
    }
  }

/*
  public function get_operand(binTree:BinaryTreeE)  {
    if(binTree != null) {
      var s = binTree.get_root();  trace("s1 = " + s);
      if(!in_operator(s) && !in_mathFunc(s)) {
        return s; }
      else {
        infixS = "";
        get_operandB(binTree);
      }
    }
    trace("infixArray  =  " + infixArray);
    return "(" + infixS + ")";
  }

  public function get_operandB(binTree)  {  //alert("get");//trace("binTree");trace(binTree);
    if(binTree != null) {
      infixS = infixS + "(";
      get_operand(binTree.get_left());
      var s = binTree.get_root();
      infixArray[ndxPre++] = s;    trace("s = " + s);
      infixS = infixS + s;
      get_operand(binTree.get_right());
      infixS = infixS + ")";
    }
    return "(" + infixS + ")";
  }
*/

  function get_operand(binTree)  {  //alert("binTree");//trace("binTree");trace(binTree);
    if(binTree != null) {
    var s = binTree.get_root();    //alert("s = "); alert(s); //trace("s = " + s);
    if(!in_operator(s) && !in_mathFunc(s)) { //alert("both");
      return s; }
    else {
      infixS = "";
      if(in_operator(s)) { //alert("operator");
        binTree.traverse_inOrder(); }
      else if(in_mathFunc(s)) { //alert("math");
        infixS = infixS + binTree.get_root() + "(";
        (binTree.get_right()).traverse_inOrder(); 
        infixS = infixS + ")";
      } //alert("infixS"); alert(infixS);
      return "(" + infixS + ")";
    }
    }
    else {return "";};   
  }

  function get_op_sum(u,du,v,dv)  {
    var s;
    if(du == "0") {
      if(dv == "0") {
        s = ""; }
      else {
        s = "(" + dv + ")";
      } }
    else {
      if(dv == "0") {
        s = "(" + du + ")"; }
      else {
        s = "(" + du + "+" + dv + ")";
      }
    }
    return s;   
  }

  function get_op_diff(u,du,v,dv)  {
    var s ;
    if(du == "0") {
      if(dv == "0") {
        s = ""; }
      else {
        s = "(" + "-" + dv + ")";
      } }
    else {
      if(dv == "0") {
        s = "(" + du + ")"; }
      else {
        s = "(" + du + "-" + dv + ")";
      }
    }
    return s;   
  }
/*
  function get_op_prod(u,du,v,dv)  {
     var s  = "(" + du + "*" + v + " + " + u + "*" + dv + ")";    trace(u + "  " + du + "  " + v + "  " + dv + "  " + s);  
     return s;
  }
*/


  function get_op_prod(u,du,v,dv)  {
    var s ;
    if(u == "0") {
      if(du == "0") {
        if(v == "0") {
          s = "";
        } }
      else {
        if(v == "0") {
          s = ""; }
        else {
          s = "(" + du + "*" + v + ")";
        }
      } }
    else {
      if(du == "0") {
        if(v == "0") {
          s = ""; }
        else {
          if(dv == "0") {
            s = ""; }
          else {
            s = "(" + u + "*" + dv + ")";
          }
        }}
      else {
        if(v == "0") {
          if(dv == "0") {
            s = ""; }
          else {
            s = "(" + u + "*" + dv + ")";
          } }
        else {
          if(dv == "0") {
            s = "(" + du + "*" + v + ")"; }
          else {
            s = "(" + du + "*" + v + " + " + u + "*" + dv + ")"; //trace("s");trace(v);trace(""); 
          }
        }
      }
    }
    //trace("s");trace(s);trace(""); 
  //trace("prod  " + "u = " + u + "  du =  " + du + "  v =   " + v + "  dv =   " + dv + "  s =   " + s);   
    return s;
  }

  function get_op_div(u,du,v,dv)  {
    var s  = "(" + du + "*" + v + "-" + u + "*" + dv + ")/(" + v + "^" + "2" + ")";
    return s;
  }

  function get_op_pot(u,du,v,dv)  {
    if(u == "e") {
      return get_op_e(u,du,v,dv); }
    else if(!isNaN(Number(v))) {
      return get_op_un(u,du,v,dv); }
    else if(!isNaN(Number(u))) {
      return get_op_cv(u,du,v,dv); }
    else {
    var s ;
    if(u == "0") {                                                   // u=0
      s= ""; }
    else {
      if(v == "0") {                                                 // v=0
        s = ""; }
      else {
        if(du == "0") {                                              // du=0
          if(dv == "0") {                                            // du=0 dv=0
            s = ""; }
          else {                                                     // du=0
            s = "(" + u + "^" + v + "*" + "ln(u)" + "*" + dv + ")";   
          } }
        else {
          var vm  = "(" + v + "-1" + ")"; //trace("test");trace(v);trace(vm);
          if(!isNaN(Number(v))) {
            vm = (Number(v)-1).toString();
            if(Number(vm) < 0) {
              vm = "(" + vm + ")";
            }
          }
          if(dv == "0") {
            s = "(" + v + "*" + u + "^" + vm + "*" + du + ")";  }
            //s = "(" + v + "*" + u + "^" + "(" + v + "-1" + ")" + "*" + du + ")"; }
          else {
            s = "(" +v + "*" + u + "^" + vm + "*" + du + "+" + u + "^" + v + "*" + "ln(" + u + ")" + "*" + dv + ")";  
            //s = "(" +v + "*" + u + "^" + "(" + v + "-1" + ")" + "*" + du + "+" + u + "^" + v + "*" + "ln(" + u + ")" + "*" + dv + ")"; 
          }
        }
      }
    }
    return s;
    }
  }

  function get_op_abs(u,du,v,dv) {
    var s   = "(" + v + "/" + "abs(" + v + ")" + "*" + dv + ")";
    return s;
  }
  function get_op_sin(u,du,v,dv) {
    var s   = "(" + "cos(" + v + ")" + "*" + dv + ")";          //trace("sin  " + "u = " + u + "  du =  " + du + "  v =   " + v + "  dv =   " + dv + "  s =   " + s);
    return s;
  }
  function get_op_cos(u,du,v,dv) {
    var s   = "(" + "(-1)*sin(" + v + ")" + "*" + dv + ")";   //trace(s);
    return s;
  }
  function get_op_tan(u,du,v,dv) {
    var s   = "(" + "1/((cos(" + v + "))" + "^2)" + "*" + dv + ")";
    return s;
  }
  function get_op_sinh(u,du,v,dv) {
    var s   = "(" + "cosh(" + v + ")" + "*" + dv + ")";
    return s;
  }
  function get_op_cosh(u,du,v,dv) {
    var s   = "(" + "(-1)*sinh(" + v + ")" + "*" + dv + ")";
    return s;
  }
  function get_op_sec(u,du,v,dv) {
    var s   = "(" + "sec(" + v + ")" + "*" + "tan(" + v + ")" + "*" + dv + ")";
    return s;
  }
  function get_op_asin(u,du,v,dv) {
    var s   = "(" + "1/sqrt(1-" + v + "^2)" + "*" + dv + ")";
    return s;
  }
  function get_op_acos(u,du,v,dv) {
    var s   = "(" + "-1/sqrt(1-" + v + "^2)" + "*" + dv + ")";
    return s;
  }
  function get_op_asinh(u,du,v,dv) {
    var s   = "(" + "1/sqrt(" + v + "^2" + "1)" + "*" + dv + ")";
    return s;
  }
  function get_op_acosh(u,du,v,dv) {
    var s   = "(" + "1/sqrt(" + v + "^2" + "-1)" + "*" + dv + ")";
    return s;
  }
  function get_op_e(u,du,v,dv) {
    var s   = "(" + "e^(" + v + ")" + "*" + dv + ")";
    return s;
  }
  function get_op_un(u,du,v,dv) {
    var s  ;
    var sV ;
    var sUV;
    var nV  = 0;
    var nUV = 0;
    if(!isNaN(Number(v))) {
      nV = Number(v)-1;
      sV = nV.toString(); }
      //s = "(" + v + "*" + u + "^(" + sV + ")" + "*" + du + ")"; }
    else {
      sV = v + "-1";
    }
    if(!isNaN(Number(u)) && !isNaN(Number(v))) {
      nUV = Number(u)*Number(v);
      sUV = nUV.toString(); }
      //s = "(" + v + "*" + u + "^(" + sV + ")" + "*" + du + ")"; }
    else {
      sUV = v + "*" + u;
    }
    //s = "(" + v + "*" + u + "^(" + v + "-1" + ")" + "*" + du + ")";
    s = "(" + sUV + "^(" + sV + ")" + "*" + du + ")";
    return s;
  }
  function get_op_cv(u,du,v,dv) {
    var s   = "(" + u + "^(" + v + ")" + "*" + "ln(" + u + ")" + "*" + dv + ")";
    return s;
  }
  function get_op_ln(u,du,v,dv) {
    var s   = "(" + "1/(" + v + ")" + "*" + dv + ")";
    return s;
  }
  function get_op_sqrt(u,du,v,dv) {
    var s   = "(" + "1/(2*sqrt(" + v + "))" + "*" + dv + ")";
    return s;
  }

  function get_differentiation(s)  {
    out = s;
    try {
    if(s == "x") {
       out = "1" ; }
    else if(s == "-x") {
       out = "-1"; }
    else if(!isNaN(Number(s))) {
      out = "0"; }
    else {
      out = s;
    }
    throw new Error("Function Error");
    }
    catch(errorObject) {
    }
    return out;
  }
  /*----------------------------------------------------------------------------------- postfixValue ---*/

  function postfixValue(xPT,yPT,
                        aPT,bPT,cPT,
                        dPT,rPT,sPT,
                        tPT,uPT,vPT )  { 
   
                   /* Evaluate the value of the postfix expression postFixArray */

    var xP     = (typeof xPT !== 'undefined') ? xPT : 0;
    var yP     = (typeof yPT !== 'undefined') ? yPT : 0;

    var aP     = (typeof aPT !== 'undefined') ? aPT : 0;
    var bP     = (typeof bPT !== 'undefined') ? bPT : 0;
    var cP     = (typeof cPT !== 'undefined') ? cPT : 0;
    var dP     = (typeof dPT !== 'undefined') ? dPT : 0;
    var rP     = (typeof rPT !== 'undefined') ? rPT : 0;
    var sP     = (typeof sPT !== 'undefined') ? sPT : 0;
    var tP     = (typeof tPT !== 'undefined') ? tPT : 0;
    var uP     = (typeof uPT !== 'undefined') ? uPT : 0;
    var vP     = (typeof vPT !== 'undefined') ? vPT : 0;

    var sValue ;
    var nValue = 0;
    var sV     ;
    var sV1    ;
    var sV2    ;
    var sV3    ;
    var sV4    ;
    var sV5    ;
    var nV1    = 0;
    var nV2    = 0;
    var nV3    = 0;
    var nV4    = 0;
    var nV5    = 0;
    var ndx    = 0;

    x = xP;
    y = yP;
    a = aP;
    b = bP;
    c = cP;
    d = dP;
    r = rP;
    s = sP;
    t = tP;
    u = uP;
    v = vP;
/*
    if(x != undefined) {                                             // variable  x
      this.x = x; }       
    else {
      this.x = 0;
    }
    if(a != undefined) {                                             // parameter A
      this.a = a; }
    else {
      this.a = 0;
    }
    if(b != undefined) {                                             // parameter B
      this.b = b; }
    else {
      this.b = 0;
    }
    if(c != undefined) {                                             // parameter C
      this.c = c; }
    else {
      this.c = 0;
    }
    if(d != undefined) {                                             // parameter D
      this.d = d; }
    else {
      this.d = 0;
    }
    if(r != undefined) {                                             // parameter R
      this.r = r; }
    else {
      this.r = 0;
    }
    if(s != undefined) {                                             // parameter S
      this.s = s; }
    else {
      this.s = 0;
    }
    if(t != undefined) {                                             // parameter T
      this.t = t; }
    else {
      this.t = 0;
    }
    if(u != undefined) {                                             // parameter U
      this.u = u; }
    else {
      this.u = 0;
    }
    if(v != undefined) {                                             // parameter V
      this.v = v; }
    else {
      this.v = 0;
    }
*/
    try {

    valStack.push(endSymbol);
    valStack.push(endSymbol);

    sp = postfixArray[ndx];
    while(sp != endSymbol)                {
      if(in_operator(sp))                 {                          // binary operation
        if(sp == "!") {
          sV1 = valStack.pop() ;                                     // unary
          sV  = evalFac(sV1,sp); }
        else {
          sV2 = valStack.pop();                                      // binary
          sV1 = valStack.pop();
          sV  = evalP(sV1,sV2,sp);        
        }}
      else if(in_mathFunc(sp))            {                          // function sp(v1)
        sV1 = valStack.pop();
        sV  = evalF(sV1,sp);              }
      else if(in_mathFunc2(sp))           {                          //          sp(v1,v2)                       
        sV2 = valStack.pop();
        sV1 = valStack.pop();
        sV  = evalF2(sV1,sV2,sp);         }
      else if(in_mathFunc3(sp))           {                          //          sp(v1,v2,v3)
        sV3 = valStack.pop();
        sV2 = valStack.pop();
        sV1 = valStack.pop();
        sV  = evalF3(sV1,sV2,sV3,sp);     }
      else if(in_mathFunc4(sp))           {                          //          sp(v1,v2,v3,v4)
        sV4 = valStack.pop();
        sV3 = valStack.pop();
        sV2 = valStack.pop();
        sV1 = valStack.pop();
        sV  = evalF4(sV1,sV2,sV3,sV4,sp); }
      else if(in_mathFunc5(sp))           {                          //          sp(v1,v2,v3,v4,v5)
        sV5 = valStack.pop();
        sV4 = valStack.pop();
        sV3 = valStack.pop();
        sV2 = valStack.pop();
        sV1 = valStack.pop();
        sV  = evalF5(sV1,sV2,sV3,sV4,sV5,sp); }
      else {
        sV  = evalC(sp);                                             // variable
      }
     
      valStack.push(sV);                                             // push value to valueStack
      ndx++;
      sp = postfixArray[ndx];
    }
    nValue = Number(valStack.pop()); 

    }
    catch(error) {
    }

    return nValue;

  }

  function remove_returnKey() { 
    var len  = infix.length  ;
    var s    = ""            ;
    var sOld = infix         ;
    var sNew = ""            ;
    var k    = 13            ;
   
    for(var i=0;i<len;i++) {
      s = sOld.charAt(i);
      if(s.charCodeAt(0)  != 13) {
        sNew = sNew + s;
      }
    }

    infix = sNew;    
  }

  /*------------------------------------------------------------------------------ infix_removeSpace ---*/

  function infix_removeSpace() {

                               /* Remove space in infix expression.  */
                               /* y= is removed from the expression. */

    var i    = infix.length-1    ;
    var s                          ;
    var sNew                       ;
    var e    = infix.indexOf("=");
    if(e != -1) {                                                    // = occure in the expression
      sNew = infix.substring(e+1); }                                 // remove all until =
    else  {
      sNew = infix;
    }
    for(var i=sNew.length-1; i>=0; i--) {                            // remove spaces
      s = sNew.charAt(i);
      if((s == " ") && (i<sNew.length-1)) {
        sNew = sNew.substring(0,i) + sNew.substring(i+1);
      }
    }
    infix = sNew;
  }

  /*------------------------------------------------------------------ infix_unaryMinusToBinaryMinus ---*/

  function infix_unaryMinusToBinaryMinus() {

                               /* Transform unary minus to binary minus */

    var s  = "";
    if(infix.substring(0,1) == "-") {                                // first is -
      infix = "0"+infix;                                             // -x   --> 0-x
    }
    for(var i=0; i<infix.length; i++) {
      s = s + infix.charAt(i);
      if(infix.charAt(i) == "(" && infix.charAt(i+1) == "-") {       // sequence (-
        s = s + "0";                                                 // (-x) --> (0-x)
      }
    }
    infix = s;
  }

  /*----------------------------------------------------------------------------------- infixToArray ---*/

  function infixToArray() {

                               /* Transform infix expression to an array */
    var s    = "";
    var i    = 0 ;
    ndx             = 0 ;
    while(i < infix.length) {
      s = s + infix.charAt(i);
      if(in_operatorEx(infix.charAt(i))) {
        if(s.length > 1) {
          infixArray[ndx] = s.substr(0,s.length-1);
          ndx++;
        }
        if(infix.charAt(i) != ",") {
          infixArray[ndx] = s.charAt(s.length-1);
          ndx++;
        }
        s   = "";
      }
      i++;
    }
  }
  
  /*------------------------------------------------------------------------ infix_setMultiplication ---*/

  function infix_setMultiplication() {

                  /* Set multiplication into expression if necessary. */
                  /* Example:  2x  -->  2*x                           */

    var str   = infix.charAt(0);
    var s                      ;
    var t                      ;
    var i     = 1              ;
    while(i < infix.length) {
      s = infix.charAt(i-1);
      t = infix.charAt(i)  ;
      if(s == "(" || s == "," || t == ",") {
        str = str + t; }
      else {
        if(!in_operatorEx(t) && isNaN(Number(t)) && !isNaN(Number(s)) && s != "." && t != "." ||  // s Number and t letter
          in2(s,t) ||                                       // s and t both parameters
          in1(s,t) ||                                       // s xor t parameter, the other ordinary letter
          in3(s,t) ||                                       // s = ")" and t not extended operator
          in4(s,t) ||                                       // s = ")" and t = "("
          in5(s,t) ||                                       // s = number and t = "("
          in6(s,t))  {                                      // s = x and t = "("   or s = ")" and t = x
          str = str + "*" + t; }                            // insert multiplication 
        else {
          str = str + t;
        }
      }
      i++;
    }
    infix = str;
  }

  /*---------------------------------------------------------------------------------- findVariables ---*/

  function findVariables() {

    try {

    var end      = false;
    var s                 ;
    //trace("infixarray = ");trace(infixArray);
    while(!end) {
      end = true;
      for(var i=0; i<ndx-1; i++) {
         s = infixArray[i]; //trace("s1");trace(s);
         if(!isParameter(s) && !in_uoperator(s) && isNaN(Number(s)) && s != ")") {
           end           = false                ;
           s             = owner.get_variable(s); //trace("s ="); trace(s);
           infixArray[i] = s                    ; //trace("inf"); trace(infixArray);
         }
      }
      if(!end) {
        //trace("end for");
        infix = "";
        for(var i=0; i<ndx; i++) {
          infix = infix + infixArray[i];
        }
        //trace("infix"); trace(infix);
        infixToArray();
      }
    }

    }
    catch(error) {
    }
    //trace("infixarray end"); trace(infixArray);
  }

  /*------------------------------------------------------------------------------------ isParameter ---*/

  function isParameter(s) {
    if(s == "x" || s == "y" || s == "A" || s == "B" || s == "C" ||s == "D" ||
       s == "R" || s == "S" || s == "T" || s == "U" || s == "V") {
      return true; }
    else {
      return false;
    }
  } 

  /*-------------------------------------------------------------------------------------------- in1 ---*/

  function in1(s,t)  {

          /* Return true if one of s or t is a parameter x,A,B,C,D,R,S,T,U,V */ 
          /* and the other an ordinary letter.                               */

    if((isParameter(s) && isNaN(Number(t)) && !in_operatorEx(t)) || 
       (isParameter(t) && isNaN(Number(s)) && !in_operatorEx(s))) {
      return true; }
    else {
      return false;
    }
  }

  /*-------------------------------------------------------------------------------------------- in2 ---*/

  function in2(s,t)  {

          /* Return true if both s and t are parameters x,A,B,C,D,R,S,T,U,V */

    if(isParameter(s) && isParameter(t))    {
      return true; }
    else {
      return false;
    }
  }

  /*-------------------------------------------------------------------------------------------- in3 ---*/

  function in3 (s,t)  {

          /* Return true if s = ")" and t is not an extended operator */

    if((s == ")") && (!in_operatorEx(t))) {
      return true; }
    else {
      return false;
    }
  }

  /*-------------------------------------------------------------------------------------------- in4 ---*/

  function in4 (s,t)  {
       
                       /* Return true if s = ")" and t = "(" */

    if((s == ")") && (t == "(")) {
      return true; }
    else {
      return false;
    }
  }

  /*-------------------------------------------------------------------------------------------- in5 ---*/

  function in5 (s,t)  {
       
                       /* Return true if s = number and t = "(" */

    if((!isNaN(Number(s))) && (t == "(")) {
      return true; }
    else {
      return false;
    }
  }

  /*-------------------------------------------------------------------------------------------- in6 ---*/

  function in6 (s,t)  {
       
                       /* Return true if s = x and t = "("  */
                       /* or s = ")" and t = x              */

    if(((s=="x") && (t == "(")) || ((s==")") && (t == "x"))){
      return true; }
    else {
      return false;
    }
  }

  /*------------------------------------------------------------------------------------------ evalN ---*/

  function evalN (sV2,sp)  {

                         /* Unary + or - */

    var sV     ;
    var nV  = 0;
    var nV2 = Number(sV2);
    switch(sp) {
      case "+" : nV =  nV2; break;
      case "-" : nV = -nV2; break;
    }
    sV = nV.toString();
    return sV;
  }

  /*------------------------------------------------------------------------------------------ evalP ---*/

  function evalP (sV1,sV2,sp)  {

                         /* Evaluate the binary operation v1 sp v2 */

    var sV                ;
    var nV  = 0             ;
    var nV1 = Number(sV1);
    var nV2 = Number(sV2);
    switch (sp) {
      case "+" : nV = nV1 + nV2                 ;  break;
      case "-" : nV = nV1 - nV2                 ;  break;
      case "*" : nV = nV1 * nV2                 ;  break;
      case "/" : nV = nV1 / nV2                 ;  break;
      case "^" : nV = Math.pow(nV1,nV2)         ;  break;
      case "|" : nV = Mathematics.binom(nV1,nV2);  break;
      case "%" : nV = nV1 % nV2                 ;  break;
    }
    sV = nV.toString();
    return sV;
  }

  function evalFac(sV1,sp)  {
    var nV1 = Number(sV1);
    var nV  = Mathematics.faculty(nV1); 
    var sV  = nV.toString(); 
    return sV;
  }

  /*------------------------------------------------------------------------------------------ evalF ---*/

  function evalF (sV1,sp) {

                         /* Evaluate the function sp(v1) */ 

    var sV                ;
    var nV  = 0              ;
    var nV1 = Number(sV1);

    switch (sp) {
      case "abs"             : nV = Math         .abs         (nV1       )                             ;  break;
      case "acos"            : nV = Math         .acos        (nV1       )/radDeg                      ;  break;
      case "asin"            : nV = Math         .asin        (nV1       )/radDeg                      ;  break;
      case "atan"            : nV = Math         .atan        (nV1       )/radDeg                      ;  break;
      case "exp"             : nV = Math         .exp         (nV1       )                             ;  break;
      case "sin"             : nV = Math         .sin         (nV1*radDeg)                             ;  break;
      case "cos"             : nV = Math         .cos         (nV1*radDeg)                             ;  break;
      case "tan"             : nV = Math         .tan         (nV1*radDeg)                             ;  break;
      case "cot"             : nV = 1/Math.tan(nV1*radDeg)                                             ;  break;
      case "sec"             : nV = 1/Math.cos(nV1*radDeg)                                             ;  break;
      case "ln"              : nV = Math         .log         (nV1       )                             ;  break;
      case "lg"              : nV = Math         .log         (nV1       )/Math.log(10)                ;  break;
      case "rnd"             : 
      case "RND"             : nV = Math         .random      (          )                             ;  break;
      case "sqrt"            : nV = Math         .sqrt        (nV1       )                             ;  break;
      case "faculty"         : nV = Mathematics  .faculty     (nV1       )                             ;  break;
      case "geo_e"           :
      case "geometric_e"     : nV = Mathematics  .geometric_e (nV1)                                    ;  break;
      case "geo_v"           :
      case "geometric_v"     : nV = Mathematics  .geometric_v (nV1)                                    ;  break;
      case "po_e"            :
      case "poisson_e"       : nV = nV1                                                                ;  break;
      case "po_v"            :
      case "poisson_v"       : nV = nV1                                                                ;  break;
      case "sinh"            : nV = (Math.exp(nV1)-Math.exp   (-nV1))/2                                ;  break;
      case "cosh"            : nV = (Math.exp(nV1)+Math.exp   (-nV1))/2                                ;  break;
      case "tanh"            : nV = (Math.exp(nV1)-Math.exp   (-nV1))/(Math.exp(nV1)+Math.exp(-nV1))   ;  break;
      case "coth"            : nV = (Math.exp(nV1)+Math.exp   (-nV1))/(Math.exp(nV1)-Math.exp(-nV1))   ;  break;
      case "n_01"            : var sExpression  = "1/sqrt(2*PI)*e^(-x^2/2)";
                               var nMinValue   = -5;
                               var nMaxValue   = nV1;
                               fA = new Function_Analysis ();
                               nV = fA.qtrap(sExpression,nMinValue,nMaxValue); 
                               ///////delete fA;
                               break; 
    }
    sV = nV.toString();
    return sV;
  }

  /*----------------------------------------------------------------------------------------- evalF2 ---*/

  function evalF2 (sV1,sV2,sp) {

                         /* Evaluate the function sp(v1,v2) */ 

    var sV                ;
    var nV  = 0              ;
    var nV1 = Number(sV1);
    var nV2 = Number(sV2);
  
    switch (sp) {
      case "log"             : nV = Math        .log           (nV1)/Math.log(nV2)  ;  break;
      case "gcd"             : nV = Mathematics .gcd           (nV1      ,nV2)      ;  break;
      case "nor"             :
      case "orderback"       : nV = Mathematics .nkProd        (nV1      ,nV2)      ;  break;
      case "npr"             :
      case "ordernoback"     : nV = Mathematics .nk            (nV1      ,nV2)      ;  break;
      case "nbr"             :
      case "noorderback"     : nV = Mathematics .binom         (nV1+nV2-1,nV2)      ;  break;
      case "ncr"             :
      case "noordernoback"   : nV = Mathematics .binom         (nV1      ,nV2)      ;  break;
      case "nkprod"          : nV = Mathematics .nkProd        (nV1      ,nV2)      ;  break;
      case "nk"              : nV = Mathematics .nk            (nV1      ,nV2)      ;  break;
      case "binom"           : nV = Mathematics .binom         (nV1      ,nV2)      ;  break;
      case "bin_e"           :
      case "binomic_e"       : nV = Mathematics .binomic_e     (nV1      ,nV2)      ;  break;
      case "bin_v"           :
      case "binomic_v"       : nV = Mathematics .binomic_v     (nV1      ,nV2)      ;  break;
      case "geo"             :
      case "geometric"       : nV = Mathematics .geometric     (nV1      ,nV2)      ;  break;
      case "geo_c"           :
      case "geometric_c"     : 
      case "geo_cum"         :
      case "geometric_cum"   : nV = Mathematics .geometric_cum (nV1      ,nV2)      ;  break;
      case "po"              :
      case "poisson"         : nV = Mathematics .poisson       (nV1      ,nV2)      ;  break;
      case "po_c"            :
      case "poisson_c"       : 
      case "po_cum"          :
      case "poisson_cum"     : nV = Mathematics .poisson_cum   (nV1      ,nV2)      ;  break;
      case "ep"              : var sExpression  = sV2 + "*e^(-" + sV2 + "*x)";
                               var nMinValue   = 0;
                               var nMaxValue   = nV1;
                               fA = new Function_Analysis ();
                               nV = fA.qtrap(sExpression,nMinValue,nMaxValue); 
                               //////delete fA;
                                                                                       break; 
      case "n_12"            : var sExpression  = "1/sqrt(2*PI)*e^(-x^2/2)"; //trace("n_12");
                               var nMinValue   = nV1;
                               var nMaxValue   = nV2;
                               fA = new Function_Analysis ();
                               nV = fA.qtrap(sExpression,nMinValue,nMaxValue); 
                               /////delete fA;
                                                                                       break; 
      case "mod"             : nV = nV1 % nV2                                       ;  break;
    }
    sV = nV.toString();
    return sV;
  }

  /*----------------------------------------------------------------------------------------- evalF3 ---*/

  function evalF3 (sV1,sV2,sV3,sp) {

                         /* Evaluate the function sp(v1,v2,v3) */ 

    var sV     ;
    var nV  = 0;
    var nV1 = Number(sV1);
    var nV2 = Number(sV2);   
    var nV3 = Number(sV3);

    switch (sp) {
      case "bin"               :
      case "binomic"           : nV = Mathematics.binom(nV2,nV1)*Math.pow(nV3,nV1)*Math.pow(1-nV3,nV2-nV1) ; break;
      case "bin_c"             :
      case "binomic_c"         :
      case "bin_cum"           :
      case "binomic_cum"       : nV = Mathematics.binomic_cum(nV1,nV2,nV3);                               ; break;
      //case "binomial_e"   : nV = nV2*nV3                                                             ; break;
      //case "binomial_v"   : nV = nV2*nV3*(1-nV3)                                                     ; break;
      case "geo_c_12"          :
      case "geometric_c_12"    :
      case "geo_cum_12"        :
      case "geometric_cum_12"  : nV = Mathematics.geometric_cum_12 (nV1,nV2,nV3);                     ; break;
      case "hyp_e"             :
      case "hypergeometric_e"  : nV = Mathematics.hypergeometric_e (nV1,nV2,nV3);                     ; break;
      case "hyp_v"             :
      case "hypergeometric_v"  : nV = Mathematics.hypergeometric_v (nV1,nV2,nV3);                     ; break;
      case "po_c_12"           :
      case "poisson_c_12"      :
      case "po_cum_12"         :
      case "poisson_cum_12"    : nV = Mathematics.poisson_cum_12   (nV1,nV2,nV3);                     ; break; 
      case "ep_12"             : var sExpression  = sV3 + "*e^(-" + sV3 + "*x)";
                               var nMinValue   = nV1;
                               var nMaxValue   = nV2;
                               fA = new Function_Analysis ();
                               nV = fA.qtrap(sExpression,nMinValue,nMaxValue); 
                               /////delete fA;
                               break;           
      case "normal"            :
      case "npd"               : var sExpression  = "1/sqrt(2*PI)*e^(-x^2/2)";
                                 var nMinValue   = -5;
                                 var nMaxValue   = (nV1-nV2)/nV3;
                                 fA = new Function_Analysis ();
                                 nV = fA.qtrap(sExpression,nMinValue,nMaxValue); 
                                 /////delete fA;
                                 break; 
    }
    sV = nV.toString();
    return sV;
  }

  /*----------------------------------------------------------------------------------------- evalF4 ---*/

  function evalF4 (sV1,sV2,sV3,sV4,sp) {

                         /* Evaluate the function sp(v1,v2,v3,v4) */ 

    var sV                ;
    var nV  = 0              ;
    var nV1 = Number(sV1);
    var nV2 = Number(sV2);   
    var nV3 = Number(sV3);
    var nV4 = Number(sV4);
    
    switch (sp) {
      case "bin_c_12"            :
      case "binomic_c_12"        :
      case "bin_cum_12"          :
      case "binomic_cum_12"      : nV = Mathematics.binomic_cum_12     (nV1,nV2,nV3,nV4);  break;
      case "hyp"                 :
      case "hypergeometric"      : nV = Mathematics.hypergeometric     (nV1,nV2,nV3,nV4);  break; 
      case "hyp_c"               :
      case "hypergeometric_c"    : 
      case "hyp_cum"             :
      case "hypergeometric_cum"  : nV = Mathematics.hypergeometric_cum (nV1,nV2,nV3,nV4);  break;
      case "normal_12"           :
      case "npd_12"              : var sExpression  = "1/sqrt(2*PI)*e^(-x^2/2)";
                                   var nMinValue   = (nV1-nV3)/nV4;
                                   var nMaxValue   = (nV2-nV3)/nV4;
                                   fA = new Function_Analysis ();
                                   nV = fA.qtrap(sExpression,nMinValue,nMaxValue); 
                                   /////delete fA;
                                   break; 

    }
    sV = nV.toString();
    return sV;
  }

  /*----------------------------------------------------------------------------------------- evalF5 ---*/

  function evalF5 (sV1,sV2,sV3,sV4,sV5,sp) {

                         /* Evaluate the function sp(v1,v2,v3,v4,v5) */ 

    var sV     ;
    var nV  = 0;
    var nV1 = Number(sV1);
    var nV2 = Number(sV2);   
    var nV3 = Number(sV3);
    var nV4 = Number(sV4);
    var nV5 = Number(sV5);

    switch (sp) {
      case "hyp_c_12"               :
      case "hypergeometric_c_12"    :
      case "hyp_cum_12"             : 
      case "hypergeometric_cum_12"  :  nV = Mathematics.hypergeometric_cum_12 (nV1,nV2,nV3,nV4,nV5);  break;
    }
    sV = nV.toString();
    return sV;
  }

  /*------------------------------------------------------------------------------------------ evalC ---*/

  function evalC (sp)  {
        
                         /* Evaluate operand */     
         
    switch (sp) {
      case "x"  : sp = x.toString()        ;  break;
      case "y"  : sp = y.toString()        ;  break;
      case "A"  : sp = a.toString()        ;  break;
      case "B"  : sp = b.toString()        ;  break;
      case "C"  : sp = c.toString()        ;  break;
      case "D"  : sp = d.toString()        ;  break;
      case "R"  : sp = r.toString()        ;  break;
      case "S"  : sp = s.toString()        ;  break;
      case "T"  : sp = t.toString()        ;  break;
      case "U"  : sp = u.toString()        ;  break;
      case "V"  : sp = v.toString()        ;  break;
      case "PI" : sp = (Math.PI).toString();  break;
      case "e"  : sp = (Math.E) .toString();  break;
    }      
    return sp;
  }

  /*------------------------------------------------------------------------------------ in_mathFunc ---*/

  function in_mathFunc (c)  {

                               /* Test for c as a mathematical function */

    var i      = 0    ;
    var bFound = false;
    while (i<mathFunc.length && !bFound) {
      if(c == mathFunc[i]) {
        bFound = true; }
      else {
        i++;
      }
    }
    return bFound;
  }

  /*------------------------------------------------------------------------------------ in_mathFunc ---*/

  function in_mathFunc2 (c)  {

                               /* Test for c as a mathematical function 2 */

    var i      = 0    ;
    var bFound = false;
    while (i<mathFunc2.length && !bFound) {
      if(c == mathFunc2[i]) {
        bFound = true; }
      else {
        i++;
      }
    }
    return bFound;
  }

  /*----------------------------------------------------------------------------------- in_mathFunc3 ---*/

  function in_mathFunc3 (c)  {

                               /* Test for c as a mathematical function 3 */

    var i      = 0    ;
    var bFound = false;
    while (i<mathFunc3.length && !bFound) {
      if(c == mathFunc3[i]) {
        bFound = true; }
      else {
        i++;
      }
    }
    return bFound;
  }

  /*----------------------------------------------------------------------------------- in_mathFunc4 ---*/

  function in_mathFunc4 (c)  {

                               /* Test for c as a mathematical function 4 */

    var i      = 0    ;
    var bFound = false;
    while (i<mathFunc4.length && !bFound) {
      if(c == mathFunc4[i]) {
        bFound = true; }
      else {
        i++;
      }
    }
    return bFound;
  }

  /*----------------------------------------------------------------------------------- in_mathFunc4 ---*/

  function in_mathFunc5 (c)  {

                               /* Test for c as a mathematical function 5 */

    var i      = 0    ;
    var bFound = false;
    while (i<mathFunc5.length && !bFound) {
      if(c == mathFunc5[i]) {
        bFound = true; }
      else {
        i++;
      }
    }
    return bFound;
  }

  /*------------------------------------------------------------------------------------ in_operator ---*/

  function in_operator (c)  {

                                /* Test for c as a binary operator */

    var i      = 0    ;
    var bFound = false;
    while (i<operator.length && !bFound) {
      if(c == operator[i]) {
        bFound = true; }
      else {
        i++;
      }
    }
    return bFound;
  }
    
  /*----------------------------------------------------------------------------------- in_uoperator ---*/

  function in_uoperator(c)  {

                                /* Test for c as a wider binary operation */

    var i      = 0    ;
    var bFound = false;
    while (i<uoperator.length && !bFound) {
      if(c == uoperator[i]) {
        bFound = true; }
      else {
        i++;
      }
    }
    return bFound;
  }

  /*---------------------------------------------------------------------------------- in_operatorEx ---*/

  function in_operatorEx(c)  {

                                 /* Test for c as an extra operator */

    var i      = 0    ;
    var bFound = false;
    while (i<operatorEx.length && !bFound) {
      if(c == operatorEx[i]) {
        bFound = true; }
      else {
        i++;
      }
    }
    return bFound;
  }

  /*---------------------------------------------------------------------------------- infixPriority ---*/

  function infixPriority (op)  {

                                 /* Infix operator priority */

    var prio = 0;
    switch (op) {
      case "|"                      : prio = 1;  break;
      case "+"                      : 
      case "-"                      : prio = 2;  break;
      case "*"                      : 
      case "/"                      : prio = 3;  break;
      case "^"                      : 
      case "%"                      : prio = 4;  break;
      case "!"                      : prio = 5;  break;
      case "("                      : prio = 7;  break;
      case ")"                      : prio = 0;  break;
      case "["                      : prio = 7;  break;
      case "]"                      : prio = 0;  break;
      case "abs"                    : 
      case "asin"                   : 
      case "acos"                   :
      case "atan"                   :
      case "exp"                    :
      case "sin"                    : 
      case "cos"                    : 
      case "tan"                    : 
      case "cot"                    :
      case "sinh"                   :
      case "cosh"                   :
      case "tanh"                   :
      case "coth"                   :
      case "ln"                     :
      case "sec"                    :
      case "lg"                     :
      case "log"                    :

      case "gcd"                    :

      case "nkprod"                 :
      case "nk"                     :
      case "faculty"                :
      case "nor"                    :
      case "npr"                    :
      case "nbr"                    :
      case "ncr"                    :
      case "orderback"              :
      case "ordernoback"            :
      case "noorderback"            :
      case "noordernoback"          :
      case "binom"                  :
      case "uniform"                :
      case "uniform_e"              :
      case "uniform_v"              :
      case "uniform_cum"            :
      case "uniform_c_12"           :
      case "uniform_cum_12"         :
      case "indicator"              :
      case "indicator_e"            :
      case "indicator_v"            :
      case "indicator_cum"          :
      case "indicator_c_12"         :
      case "indicator_cum_12"       :

      case "bin"                    :
      case "bin_e"                  :
      case "bin_v"                  :
      case "bin_c"                  :
      case "bin_cum"                :
      case "bin_c_12"               :
      case "bin_cum_12"             :

      case "geo"                    :
      case "geo_e"                  :
      case "geo_v"                  :
      case "geo_c"                  :
      case "geo_cum"                :
      case "geo_c_12"               :
      case "geo_cum_12"             :
      case "geo"                    :

      case "hyp"                    :
      case "hyp_e"                  :
      case "hyp_v"                  :
      case "hyp_c"                  :
      case "hyp_cum"                :
      case "hyp_c_12"               :
      case "hyp_cum_12"             :

      case "po"                     :
      case "po_e"                   :
      case "po_v"                   :
      case "po_c"                   :
      case "po_cum"                 :
      case "po_c_12"                :
      case "po_cum_12"              :

      case "geometric"              :
      case "geometric_e"            :
      case "geometric_v"            :
      case "geometric_c"            :
      case "geometric_cum"          :
      case "geometric_c_12"         :
      case "geometric_cum_12"       :
      case "binomic"                :
      case "binomic_e"              :
      case "binomic_v"              :
      case "binomic_c"              :
      case "binomic_cum"            :
      case "binomic_c_12"           :
      case "binomic_cum_12"         :
      case "hypergeometric"         :
      case "hypergeometric_e"       :
      case "hypergeometric_v"       :
      case "hypergeometric_c"       :
      case "hypergeometric_cum"     :
      case "hypergeometric_c_12"    :
      case "hypergeometric_cum_12"  :
      case "poisson"                :
      case "poisson_e"              :
      case "poisson_v"              :
      case "poisson_c"              :
      case "poisson_cum"            :
      case "poisson_c_12"           :
      case "poisson_cum_12"         :
      case "ep"                     :
      case "ep_12"                  :
      case "n_01"                   :
      case "n_12"                :
      case "normal"                 :
      case "normal_12"              :
      case "npd"                    :
      case "npd_12"                 :
      case "pi"                     :
      case "PI"                     :
      case "e"                      :
      case "sqrt"                   : 
      case "mod"                    : prio = 6;  break;
      case "#"                      : prio = 0;  break;
    }
    return prio;
	}
 
  /*---------------------------------------------------------------------------------- stackPriority ---*/

  function stackPriority (op)  {

                                 /* Stack operator priority */

    var prio = 0;
    switch (op) {
      case "|"                      : prio = 1; break;
      case "+"                      : 
      case "-"                      : prio = 2; break;
      case "*"                      : 
      case "/"                      : prio = 3; break;
      case "^"                      : 
      case "%"                      : prio = 4; break;
      case "!"                      : prio = 5; break;
      case "("                      : prio = 0; break;
      case "["                      : prio = 0; break;
      case "abs"                    : 
      case "asin"                   : 
      case "acos"                   :
      case "atan"                   :
      case "exp"                    :
      case "sin"                    : 
      case "cos"                    : 
      case "tan"                    : 
      case "cot"                    :
      case "sinh"                   :
      case "cosh"                   :
      case "tanh"                   :
      case "coth"                   :
      case "sec"                    :
      case "ln"                     :
      case "lg"                     :
      case "log"                    :

      case "gcd"                    :

      case "nkprod"                 :
      case "nk"                     :
      case "faculty"                :
      case "nor"                    :
      case "npr"                    :
      case "nbr"                    :
      case "ncr"                    :
      case "orderback"              :
      case "ordernoback"            :
      case "noorderback"            :
      case "noordernoback"          :
      case "binom"                  :
      case "uniform"                :
      case "uniform_e"              :
      case "uniform_v"              :
      case "uniform_cum"            :
      case "uniform_c_12"           :
      case "uniform_cum_12"         :
      case "indicator"              :
      case "indicator_e"            :
      case "indicator_v"            :
      case "indicator_cum"          :
      case "indicator_c_12"         :
      case "indicator_cum_12"       :

      case "bin"                    :
      case "bin_e"                  :
      case "bin_v"                  :
      case "bin_c"                  :
      case "bin_cum"                :
      case "bin_c_12"               :
      case "bin_cum_12"             :

      case "geo"                    :
      case "geo_e"                  :
      case "geo_v"                  :
      case "geo_c"                  :
      case "geo_cum"                :
      case "geo_c_12"               :
      case "geo_cum_12"             :
      case "geo"                    :
     
      case "hyp"                    :
      case "hyp_e"                  :
      case "hyp_v"                  :
      case "hyp_c"                  :
      case "hyp_cum"                :
      case "hyp_c_12"               :
      case "hyp_cum_12"             :

      case "po"                     :
      case "po_e"                   :
      case "po_v"                   :
      case "po_c"                   :
      case "po_cum"                 :
      case "po_c_12"                :
      case "po_cum_12"              :

      case "geometric"              :
      case "geometric_e"            :
      case "geometric_v"            :
      case "geometric_c"            :
      case "geometric_cum"          :
      case "geometric_c_12"         :
      case "geometric_cum_12"       :
      case "binomic"                :
      case "binomic_e"              :
      case "binomic_v"              :
      case "binomic_c"              :
      case "binomic_cum"            :
      case "binomic_c_12"           :
      case "binomic_cum_12"         :
      case "hypergeometric"         :
      case "hypergeometric_e"       :
      case "hypergeometric_v"       :
      case "hypergeometric_c"       :
      case "hypergeometric_cum"     :
      case "hypergeometric_c_12"    :
      case "hypergeometric_cum_12"  :
      case "poisson"                :
      case "poisson_e"              :
      case "poisson_v"              :
      case "poisson_c"              :
      case "poisson_cum"            :
      case "poisson_c_12"           :
      case "poisson_cum_12"         :
      case "ep"                     :
      case "ep_12"                  :
      case "n_01"                   :
      case "n_12"                   :
      case "normal"                 :
      case "normal_12"              :
      case "npd"                    :
      case "npd_12"                 :
      case "pi"                     :
      case "PI"                     :
      case "e"                      :
      case "sqrt"                   : 
      case "mod"                    : prio = 6; break;
      case "#"                      : prio = 0; break;
    }
    return prio;
  }
  /*----------------------------------------------------------------------------------------------------*/
}
/*======================================================================================================*/