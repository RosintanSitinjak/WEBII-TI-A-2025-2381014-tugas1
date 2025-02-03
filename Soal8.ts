function isPalindrome(inputString: string) {
  let j = inputString.length - 1;
  for (let i = 0; i < inputString.length / 2; i++) {
    console.log(inputString[i], inputString[j]);

    if (inputString[j] !== inputString[i]) return false;
    j--;
  }
  return true;
}
console.log(isPalindrome("10"));
