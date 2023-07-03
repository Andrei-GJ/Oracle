let i = 0;
let ciudadeseleccionada = "";
const presupuesto = 190;
const datos = [
    {
        'ciudad':'bogota',
        'precio':500
    },
    {
        'ciudad':'lima',
        'precio':400
    },{
        'ciudad':'santiago',
        'precio':380
    },{
        'ciudad':'montevio',
        'precio':200
    }
]

do{
    if(datos[i].precio < presupuesto){
        ciudadeseleccionada = datos[i].ciudad;
        break
    }
    i++;
}while(i < datos.length && ciudadeseleccionada == "")
if (i == datos.length)
    console.log("no tenemos ciudad disponible");
else    
    console.log("puedes comprar para la ciudad de " + datos[1].ciudad)