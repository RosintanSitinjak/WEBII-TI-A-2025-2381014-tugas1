function twoSum(num: number[], target: number) {
  let numberIndex = new Map<number, number>();

  for (let i = 0; i < num.length; i++) {
    if (numberIndex.has(Math.abs(num[i] - target))) {
      let preIndex = numberIndex.get(Math.abs(num[i] - target))!;

      return [preIndex, i];
    } else {
      numberIndex.set(num[i], i);
    }
  }
  return [];
}
console.log(twoSum([3, 2, 4], 6));
