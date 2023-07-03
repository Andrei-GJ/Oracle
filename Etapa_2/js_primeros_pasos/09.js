const ciudadesDisponibles = new Array("bogota", "lima","santiago","montevideo");
const precio = new Array(500,400,380,200);
const presupuesto = 390;

let i = 0;
while(precio[i] > presupuesto && i < ciudadesDisponibles.length){
    i++
    
}
if(i == ciudadesDisponibles.length){
    console.log("no tenemos ciudades disponibles")
}else console.log(`puedes comprar tiquetes para ` + ciudadesDisponibles[i]);