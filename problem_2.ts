function removeDuplicates(numbersOfArray:number[]):number[]{
    return numbersOfArray.filter( (x , y)=>numbersOfArray.indexOf(x)===y)
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5,5])

console.log(result);