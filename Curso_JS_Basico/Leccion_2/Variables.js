var variable;
let variableLet_;

const constante="hola soy una constante";

var a = 1;
console.log(a);

a = 4;
console.log(a);

console.log(constante)
// constante="adios" //Nos da un error

let b = 3;
console.log(b);

b = 5;
console.log(b);
/*
Diferencia entre en var y let:

var afecta a todo el codigo
let solo afecta al  bloque donde este declarado
*/
var variable="Hola soy una variable VAR"
for(var i = 0; i < 3; i++){
    var variable= "Soy una segunda variable"
}
console.log(variable)

//Aun asi se llame fuera del for se ve que sigue siendo la segunda ya que se cambio por completo

let variableLet ="Hola soy una variable LET"
for(var i = 0; i < 3; i++){
    let variableLet= "Soy una segunda variable"
}
console.log(variableLet)

//Aun asi Let se saque del for sigue siendo el mismo del de afuera

//typeof: te dice el tipo de variable 
var num = 2;
console.log(typeof num)

num = "Hola soy num"
console.log(typeof num)

//No son buenas practicas cambiar los tipos de variables durante el codigo