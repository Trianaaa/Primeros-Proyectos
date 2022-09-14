//factorial de 10 con ciclo for
const num = 10; // Número del que queremos calcular el factorial
let factorial = 1;
for(let i = num; i>0; i--){
    factorial *= i;
}
console.log(factorial);