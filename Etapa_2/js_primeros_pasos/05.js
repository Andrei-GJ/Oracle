const paises=["Argentina","Colombia", "Costa Rica", "Cuba", "Chile","Ecuador","El Salvador","México"];

console.log(paises);

paises.push("brasil");
console.log(paises);

paises.unshift("montevideo")
console.log(paises);

console.log(paises[1])

paises.splice(1,2,'venezuela','peru')
console.log(paises)

paises.shift();
console.log(paises);

paises.pop();
console.log(paises)

const paisesFiltro1 = paises.filter((e) => e == 'chile');
console.log(paisesFiltro1)
const paisesFiltro2 = paises.filter(word => word.length > 4);
console.log(paisesFiltro2)

console.log(paises.sort())

console.log("cuba esta el la posicon" +" " + paises.indexOf("Cuba") );