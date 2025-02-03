function birthdayCakeCandle(...candles: number[]) {
  let ammountCandle = 0;
  let heightCandle = -1;

  for (let i = 0; i < candles.length; i++) {
    if (heightCandle < candles[i]) {
      ammountCandle = 1;
      heightCandle = candles[i];
    } else if (heightCandle === candles[i]) {
      ammountCandle++;
    }
  }
  return ammountCandle;
}
console.log(birthdayCakeCandle(4, 4, 1, 3));
