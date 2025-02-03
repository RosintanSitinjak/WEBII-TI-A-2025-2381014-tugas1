function countInCamelCase(camelCase: string): number {
  let countPerWords: number = 1;

  for (let i = 0; i < camelCase.length; i++) {
    let asciiValue = camelCase.charCodeAt(i);
    if (asciiValue >= 65 && asciiValue <= 90) {
      countPerWords++;
    }
  }
  return countPerWords;
}

console.log(countInCamelCase("saveChangesInTheEditor"));
