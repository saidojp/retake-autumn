// Student ID: 210781 Saidkhuja
// Tasks: [7, 8, 9, 0, 1]

// Task 7
function task7(n) {
  // арифметические + оператор конкатенации строк
  let nn = Number("" + n + n); // превращаем в "nn"
  let nnn = Number("" + n + n + n); // превращаем в "nnn"
  let result = n + nn + nnn;
  console.log(`Задание 7: ${n} + ${nn} + ${nnn} = ${result}`);
  return result;
}

task7(3);
