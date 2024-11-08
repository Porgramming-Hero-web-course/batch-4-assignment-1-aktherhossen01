function sumArray(num:number[]):number{
    let total = 0
    for(let n of num){
        total +=  n
    }
    return total
}
const res = sumArray([1,2,3,4,5])
console.log(res);




