function sumOfDigitMatch (stringNum) {
  let sum = 0;

  for (let i = 0; i < stringNum.length - 1; i++) {
    if (stringNum.charAt(i) === stringNum.charAt(i + 1)) {
      sum += parseInt(stringNum.charAt(i));
    }
  }

  if (stringNum.charAt(0) === stringNum.charAt(stringNum.length - 1)) {
    sum += parseInt(stringNum.charAt(0));
  }

  return sum;
}