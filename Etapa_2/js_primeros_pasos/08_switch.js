const ciudadesDestino ="bogota";
const ciudadesDisponibles = {
    bogota : "500.000",
    lima:"1.000.000",
    quito:"1.000.000",
    caracas:"4.000",
    'buenos aires':"500.000"
}
const edadPasajero = (18);
const Acompañante = (18);
const VedadPasajero = (18 - edadPasajero)
const Vacompañante =(18 - Acompañante)
let filtro1 = 0

const disponible = ciudadesDisponibles[ciudadesDestino]
    console.log(`si tenemos disponibilidad para ${ciudadesDestino} a  ${disponible} el precio del tiquete`)
    filtro1 = filtro1 + 1 
if (VedadPasajero <= 0){
    console.log ("la edad esta permitida")
    filtro1 = filtro1 + 1 
    }if(VedadPasajero >= 1){
    console.log("edad no permitida")
}else if(Vacompañante <= 0) {
    console.log ("la edad del acompañante esta permitida")
    filtro1 = filtro1 + 1 
}if(Vacompañante >=1){
    console.log("la edad no esta permitida")
}

if (filtro1 == 3) {
    console.log(`felicidades tu compra puede ser realizada`)
}else{
    console.log(`lo siento tu compra no puede ser realizada por favor comprueba tus datos o llama a un acesor`)
}

var prueb1a = prompt("sasasa?");
