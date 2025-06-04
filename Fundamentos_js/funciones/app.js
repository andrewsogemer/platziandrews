/* 
    Funciones estructura:

    function => palabra clave + suma => nombre (a,b)=>parametros{
        return a+b => cuerpo 
    } => llaves


    suma(3,5) => llamado a la funcion
    3,5 => son los argumentos

*/

function calculateDiscountedPrice (price,discountPercentage){
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;
    return priceWithDiscount

}

const originalPrice =100;
const discountPercentage = 20;
const finalPrice = calculateDiscountedPrice(originalPrice,discountPercentage)

console.log(`Oreiginal Price ${originalPrice}`)

