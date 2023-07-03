let ciudadeseleccionada = '';
const presupuesto = 400;
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

for (let i = 0; i < datos.length && ciudadeseleccionada ==""; i++) {
    if(datos[i].precio <= presupuesto){
        ciudadeseleccionada  = datos[i].ciudad;
    }
}if(ciudadeseleccionada == "")
    console.log("no tenemos la ciudad disponible")
else    
    console.log("puedes comprar para la ciudad de " + ciudadeseleccionada)