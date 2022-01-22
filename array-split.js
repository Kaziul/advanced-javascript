
const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,6);
console.log(part);

const removed = nums.splice(2,3, 77,45,67,87); // splice suru korbe index 2 theke 3 ta porer value ke delete kore 
// value add oo  kora jay 
console.log(removed);
console.log(nums);

const together = nums.join('ami')
console.log(together)