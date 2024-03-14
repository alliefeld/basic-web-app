function findLargestNumber(numbers: number[]): number {
  var largest = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

function sumNumbers(numbers: number[]): number {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;

}

function multiplyNumbers(numbers: number[]): number {
  var product = 1;
  for (var i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
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
   return `${sumNumbers(numbers)}`
  }
  else if (query.toLowerCase().includes('largest')){
    return `${findLargestNumber(numbers)}`
  }
  else if (query.toLowerCase().includes('multiplied')) {
    return `${multiplyNumbers(numbers)}`
  }

  return ("");
}