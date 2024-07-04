//tringulos pero ahora con el switch
let lado1 = 9;
let lado2 = 8;
let lado3 = 5;
let tipodeTriangulo;
//primero lo primro, definimos el tipo de triángulo usando lo mismo del otro ejecicio. 
//ahora almacenamos el resultado en la variable tipodeTriangulo.
//tamien agregamos la funcion isNaN que cirve para verificar si un numero es valido o no 
if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
  console.log("eror ingrese un numero positivo");
} else if (lado1 === lado2 && lado2 === lado3) {
  tipodeTriangulo = "equilátero";
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  tipodeTriangulo = "isósceles";
} else {
  tipodeTriangulo = "escaleno";
}
//luego aqui ya utilizamos la estructura switch para evaluar el valor del tipodetrinagulo
// y ya por ultimo si agregamos un numero negativo se mostrara el mensaje de error 
switch (tipodeTriangulo) {
  case "equilátero":
    console.log("El triángulo es equilátero.");
    break;
  case "isósceles":
    console.log("El triángulo es isósceles.");
    break;
  case "escaleno":
    console.log("El triángulo es escaleno.");
    break;
    default:
      console.log("error nose pudo definir el tipo de triangulo ");
      break;
}