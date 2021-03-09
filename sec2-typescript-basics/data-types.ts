function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //Otherway of handling types
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input ! ");
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
    //console.log(phrase + n1 + n2);
  } else {
    return n1 + n2;
  }
}

const number1 = 1;
const number2 = 2;
const printResult = true;
const resultPhrase = "Result is : ";

add(number1, number2, printResult, resultPhrase);

// const result = add(number1, number2, printResult);

// console.log(result);
