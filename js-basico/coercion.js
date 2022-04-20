/* coerción implicita*/

4 + "7" = 47 /* string + concatena*/ 

4 * "7" = 22 /* number * realiza la operación*/

/* coerción explicita se obliga a cambiar el tipo de valor */

var a = 20;
var b = a + "";

console.log(b);
20 

typeof b; 
"string"

var c = String(a);
typeof c; 
"string"

var d = Number(c);
typeof d;
"number"