//calculadora con if y else 
// para esto tenemos que definir perimero las varibales que son numero1, numero2 y operador 
 let numero1 = 5;
 let numero2 = 8;
 let operador = "";
let resultado;
//luego utilizamoz el if, else para deternimara la operacion que se realizara 
if (operador === "+") {
resultado = numero1 + numero2;
console.log(`el resultado de ${numero1} + ${numero2} es: ${resultado}`);
} else if (operador === "-") {
resultado = numero1 - numero2;
console.log(`el resultado de ${numero1} - ${numero2} es: ${resultado}`);
} else if (operador === "*") {
resultado = numero1 * numero2;
console.log(`el resultado de ${numero1} * ${numero2} es: ${resultado}`);
} else if (operador === "/") {
if (numero2 === 0) {
console.log("error: No se puede dividir entre cero.");
} else {
resultado = numero1 / numero2;
console.log(`el resultado de ${numero1} / ${numero2} es: ${resultado}`);
}
} else {
console.log("error");
}