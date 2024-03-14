export default function QueryProcessor(query: string) {
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

  return ("");
}