// Количество положительных чисел в массиве
function task9(arr) {
  let count = arr.filter((num) => num > 0).length;
  console.log("Задание 9: количество положительных чисел =", count);
  return count;
}

let numbers = [10, -3, 25, 0, 7, 15, -8];
task9(numbers);
