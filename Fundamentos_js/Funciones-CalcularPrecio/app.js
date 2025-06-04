function calculateDiscountedPrice (price, discountPercentage){
    const discount = (price * discountPercentage) / 100 //Aqui estamos definiendo el valor del descento
    const priceWidthDiscount = price - discount;
    return priceWidthDiscount

}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscountedPrice(originalPrice,discountPercentage)

console.log('Original Price: $' + originalPrice);
console.log('Discount: ' + discountPercentage + "%");
console.log('Price with discount: $ ' + finalPrice)



