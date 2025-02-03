function pileOfSharp(a: number): void {
  for (let b = 0; b < a; b++) {
    let sharps: string = " ";

    for (let c = a - 1; c >= 0; c--) {
      if (b >= c) {
        sharps += "#";
      } else {
        sharps += " ";
      }
    }
    console.log(sharps);
  }
}
pileOfSharp(4);
