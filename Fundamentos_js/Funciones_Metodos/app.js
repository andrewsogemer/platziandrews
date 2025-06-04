//Capacidades que tienen las fuciones al igual que otros metodos
// 1. Pasar funciones como argumentos callback

function a (){}
function b (a){}

b(a);

//Retornar Funciones

function a (){
    function b (){}
    return b;
}


// asignar funcionas a variables -> expresion de funcion

const a = function(){}

// Tener propiedades y metodos

function a (){}
const obj = {}

a.call(obj);

// almacenar funciones en objetos

const obje = {
    a: function(){}
}

obje.a();

// Funciones como clases
