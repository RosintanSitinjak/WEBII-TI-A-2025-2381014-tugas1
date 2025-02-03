function teacher(a: number, arrive: number[]) {
  let students = 0;
  for (let i = 0; i < arrive.length; i++) {
    if (arrive[i] <= 0) {
      students++;
    }
  }
  if (students >= a) return "YES";

  return "NO";
}

console.log(teacher(3, [-2, -1, 0, 1, 2]));
