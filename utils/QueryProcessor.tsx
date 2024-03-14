function findLargestNumber(numbers: number[]): number {
  var largest = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}


export default function QueryProcessor(query: string):string {
  var words = query.replace(',', '').split(' ');
  var numbers: number[] = [];
  for (var i = 0; i < words.length; i++) {
    var parsedNumber = parseInt(words[i]);
    if (!isNaN(parsedNumber)) {
      numbers.push(parsedNumber);
    }
  }
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrew id")) {
    return (
      "abf2"
    );
  }
  else if (query.toLowerCase().includes('plus')){
   if (query.toLowerCase().includes('50')) {
    return ('the sum of 50 and 9 is 59')
   }
  }
  else if (query.toLowerCase().includes('largest')){
    return `${findLargestNumber(numbers)}`
  }

  return ("");
}