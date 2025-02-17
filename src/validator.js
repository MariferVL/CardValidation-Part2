// Test Data: 4137894711755904

let cardDigits;

// Validate card number using Luhn's algorithm
function isValid(creditCardNumber) {
  let valid = false;

  // Validate if card number is integer
  if (Number.isInteger(Number(creditCardNumber))) {
    // Split input
    cardDigits = creditCardNumber.split('');

    const reversedCardDigits = cardDigits.reverse();

    // console.log("Paso2 -Numero invertido: ", reversedCardDigits);
    const stringToNum = reversedCardDigits.map(function (str) {
      // using map() to convert array of strings to numbers
      return parseInt(str);
    });

    // Double value of every 2nd digit
    for (let index = 1; index < stringToNum.length; index += 2) {
      const doubleNum = Number(stringToNum[index]) * 2;
      stringToNum[index] = doubleNum;

      // Check each doubleNum if is greater than 9
      if (doubleNum > 9) {

        // Add the digits in doubleNum
        const digitsSum = sumDigits(doubleNum);
        stringToNum[index] = digitsSum;


      }
    }

    // Calculate the sum using forEach
    let sumCardDigits = 0;
    stringToNum.forEach(x => { sumCardDigits += x; });

    // Check if the sum of all digits is 0
    if (sumCardDigits % 10 === 0) {
      valid = true;
    }
  return valid
}

// Fuction to sum digits in a number
function sumDigits(n) {
  return (--n % 9) + 1;
}

// Function to get card financial institutuion (Visa, Mastercard or American Express)
function getCardBrand(creditCardNumber) {
  const firstNumber = creditCardNumber.charAt(0);

  let brand;
  switch (firstNumber) {
  case "3":
    brand = "American Express";
    break;
  case "4":
    brand = "Visa";
    break;
  case "5":
    brand = "Mastercard";
    break;

  default:
    brand = "";
    break;
  }
  return brand;
}

//replace all digits with # except the last 4.
function maskify(creditCardNumber) {
  const listNumbers = creditCardNumber.split("");
  listNumbers.forEach((element, i) => { if ( i < listNumbers.length - 4) listNumbers[i] = "#"; });

  const maskedNum = listNumbers.join("");

  //return string
  return maskedNum;
}

const components = {
  isValid, sumDigits, getCardBrand, maskify,
};


export default components;