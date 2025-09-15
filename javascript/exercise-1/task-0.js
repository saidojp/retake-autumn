// ЗАДАНИЕ 0
// Наибольшее из 3 чисел
function task0(a, b, c) {
  // используем условный оператор + тернарный
  let max = a > b && a > c ? a : b > c ? b : c;
  console.log(`Задание 0: max(${a}, ${b}, ${c}) = ${max}`);
  return max;
}

task0(10, 25, 17);
