
function countWordOccurrences (sentence: string, word: string): number {
   
    const words = sentence.toUpperCase().split(" ");
    const targetWord = word.toUpperCase();
  
    
    return words.filter(w => w === targetWord).length;
  }


console.log(countWordOccurrences("I love Typescript ","typescript"));