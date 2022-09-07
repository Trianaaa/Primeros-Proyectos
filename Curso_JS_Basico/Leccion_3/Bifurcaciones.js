//Bifurcaciones if...else
let saldo = 100
let efectivo = 90

if(efectivo < saldo){
    console.log("Puedes sacar dinero")
} else{
    console.log("Saldo insuficiente")
}

// if else + if else
let nota = 3
if(nota === 5){
    console.log("Has obtenido un Sobresaliente")
} else if (nota === 4){
    console.log ("Buen trabajo pero lo puedes hacer mejor")
} else if (nota === 3){
    console.log ("Has obtenido un suficiente")
} else if (nota === 2){
    console.log ("No has aprobado por poco")
} else if (nota === 1){
    console.log ("No estudiaste nada, esfuerzate mas a la proxima")
} else {
    console.log ("Error, introduce una nota entre el 1 y el 5")
}    

//Sentencias Switch
let nota2 = 5
switch (nota2){
    case 5:
        console.log("Has obtenido un Sobresaliente")
        break;
    case 4:
        console.log ("Buen trabajo pero lo puedes hacer mejor")
        break;
    case 3:
        console.log ("Has obtenido un suficiente")
        break;
    case 2:
        console.log ("No has aprobado por poco")
        break;
    case 1:
        console.log ("No estudiaste nada, esfuerzate mas a la proxima")
        break;
    default:
        console.log ("Error, introduce una nota entre el 1 y el 5")
        break;
}