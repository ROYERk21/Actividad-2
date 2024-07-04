// tringulos if-else

let lado1= 5;
let lado2= 4;
let lado3= 8;

// en esta parte definiremos el tipo de triagulo, documetamos los paso para que no se nos olvide como va el jale  
if (lado1===lado2&& lado2===lado3){
    console.log("este triangulo es equilatero");
} else if (lado1===lado2|| lado1===lado3 || lado1===lado3){
    console.log("este triangulo es isosceles");
} else {
        console.log("este triangulo es escaleno");
}