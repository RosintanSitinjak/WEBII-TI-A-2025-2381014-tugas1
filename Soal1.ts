function countNumOfValley(steps: number, path: string) {
  let valleyCount = 0;
  let track: string = "";

  for (let i = 0; i < steps; i++) {
    if (path[i] == "D") {
      track += "D";
    } else {
      track = "";
    }
    if (track == "DD") {
      valleyCount++;
      track = "";
    }
  }
  return valleyCount;
}
let totalValley = countNumOfValley(8, "UDDDUDUU");

console.log(totalValley);
