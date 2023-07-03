const ciudadesDestino ="bogota";
const ciudadesDisponibles = new Array ("bogota","lima","quito","caracas","buenos aires");
const edadPasajero = (18);
const Acompañante = (18);

// if (ciudadesDisponibles.indexOf(ciudadesDestino) >= 0 && (edadPasajero >= 18) && (Acompañante >=18)){
//     console.log("ciudadesDisponible")}
if(ciudadesDisponibles.indexOf(ciudadesDestino) >= 1){
    console.log("la ciudad no esta disponible")
}if(edadPasajero <= 17 || Acompañante <= 17 ){
    console.log("las edades no estan disponibles")
}else{
    console.log("esperamos su pronta reserva")
}
