const ciudadesDestino ="bogota";
const ciudadesDisponibles = new Array ("bogota","lima","quito","caracas","buenos aires");

if (ciudadesDisponibles.indexOf(ciudadesDestino) >= 0) {
    console.log("funciona");
}else{
    console.log("no funciona")
}

const animalBusqueda=("rana");
const animalesDisponibles = new Array ("perro","gato","cocodrilo","vaca","venado","conejo")

if (animalesDisponibles.indexOf(animalBusqueda) >= 0){
    console.log ("adoptalo :D")
}else{
    console.log("no lo tenemos");
    animalesDisponibles.push(animalBusqueda)
    const requerimiento = animalBusqueda.concat("," + animalesDisponibles);
    console.log(requerimiento)
}
console.log(requerimiento);