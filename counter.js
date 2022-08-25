function getCount(start) {
        let counter = start;
    return function (sw = 1) {
        switch (sw) {
            case '-':
                counter--
                break;        
            default:
                counter++
                break;
        }
        return counter;      
    }
    
} 

let count1 = getCount(1)
console.log(count1('+'));
console.log(count1('+'));

console.log(count1('+'));

console.log(count1('-'));
console.log(count1('-'));
// console.log(count1(0));
// console.log(count1(0));