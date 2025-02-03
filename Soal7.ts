function plusMinus(...numbers: number[]) {
  let frequency = new Map<number, number>();
  let ratio: string[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (frequency.has(numbers[i])) {
      let update = frequency.get(numbers[i])!;
      update++;
      frequency.set(numbers[i], update);
    } else {
      frequency.set(numbers[i], 1);
    }
  }
  for (let frequencys of frequency.values()) {
    ratio.push((frequencys / numbers.length).toPrecision(7));
  }
  return ratio;
}
console.log(plusMinus(1, 1, 0, -1, -1));
