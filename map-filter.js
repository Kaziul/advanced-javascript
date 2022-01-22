const numbers = [3,4,5,6,7,8];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output)

// numbers.map(function(element, index, array){ // map er modde jodi function likha hoy tokon function er 
//     // parameter hisebee element , index and array pass kora jay 
//     console.log(element, index, array)
// })

// const square = element => element*element;
// const square1 = x =>x*x;
// console.log(square,square)

const mapping = numbers.map(function(element){ 
    return element * element;
})
console.log(mapping);

const map = numbers.map(x=>x*x);
console.log(map);

const bigger = numbers.filter(x => x > 5);
console.log(bigger);
