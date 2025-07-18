/* 
METODOS DE SELECCION
getElementById(): Selecciona por ID es mas rapido
querySelector()
querySelectorAll()
getElementByClassName()
getElementByTagName()
*/

function cambiarTexto(){
    //Seleccion por ID
    const parrafo = document.getElementById("parrafo1");

    //Modificacion del contenido
    parrafo.textContent = "!Texto modificado con JavaScript!";
    parrafo.style.color = "blue";
    parrafo.style.fontWeight = "bold";
    console.log(' Texto cambiado exitosamente');
}

function cambiarColor(){
    //Seleccion por querySelector
    const parrafo = document.querySelector("#parrafo1");
    //array de colores para alternar
    const colores = ["red", "green", "purple", "orange", "blue"];
    const colorAleatorio = colores[Math.floor(Math.random() *colores.length)];

    parrafo.style.color = colorAleatorio;
    parrafo.textContent = `Color cambiado a: ${colorAleatorio}`;
    console.log(`Color cambiado a:` , colorAleatorio)
}