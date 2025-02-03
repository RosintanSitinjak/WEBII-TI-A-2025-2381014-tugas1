function climbingStairs(total: number): number {
  if (total == 1) return 1;
  if (total == 2) return 2;

  let stepsBefore1: number = 1;
  let stepsBefore2: number = 2;
  let currSteps: number = 0;

  for (let i = 3; i <= total; i++) {
    currSteps = stepsBefore2 + stepsBefore1;
    stepsBefore1 = stepsBefore2;
    stepsBefore2 = currSteps;
  }
  return stepsBefore2;
}
console.log(climbingStairs(8));
