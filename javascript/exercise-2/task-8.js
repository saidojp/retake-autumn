// Сумма чисел массива, кратных 5
function task8(arr) {
  let sum = arr
    .filter((num) => num % 5 === 0)
    .reduce((acc, cur) => acc + cur, 0);
  console.log("Задание 8: сумма чисел, кратных 5 =", sum);
  return sum;
}

let numbers = [10, -3, 25, 0, 7, 15, -8];
task8(numbers);
