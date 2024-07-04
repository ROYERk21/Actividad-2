//calificacion de alunmos pero con el switch
//este hace lo mismo que el otro pero con el switch
let calificacion = 70;

switch (true) {
    case (calificacion >= 9.0 && calificacion <= 10):
        console.log("A: demaciado bien ");
        break;
    case (calificacion >= 8.0 && calificacion <= 8.9):
        console.log("B: muy bien");
        break;
    case (calificacion >= 7.0 && calificacion <= 7.9):
        console.log("C: puedes mejora");
        break;
    case (calificacion >= 6.0 && calificacion <= 6.9):
        console.log("D: intentalo mas");
        break;
    case (calificacion >= 0 && calificacion <= 5.9):
        console.log("F: estudia mas, no te  agüites");
        break;
        default:
      console.log("error ");
      break;
}