/*
    FOR-IN ==> Objetos
    Propiedades => valor, esto tiene los objetos

    for(variable in objeto){  ==> por cada propiedad en este objeto ejecutame el codigo
        codigo a ejecutar
    }


*/

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja:2,
    uva:1
}

for (fruta in listaDeCompras){
    console.log(fruta)
}

for(fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

