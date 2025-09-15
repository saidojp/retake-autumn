// ЗАДАНИЕ 9
// Сумма цифр трёхзначного числа
function task9(num) {
  if (num < 100 || num > 999) {
    console.log("Введите трёхзначное число!");
    return;
  }
  let hundreds = Math.floor(num / 100); // сотни
  let tens = Math.floor((num % 100) / 10); // десятки
  let ones = num % 10; // единицы
  let sum = hundreds + tens + ones;
  console.log(`Задание 9: Сумма цифр числа ${num} = ${sum}`);
  return sum;
}

task9(123);
