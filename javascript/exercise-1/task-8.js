// ЗАДАНИЕ 8
// Сумма цифр двузначного числа
function task8(num) {
  if (num < 10 || num > 99) {
    console.log("Введите двузначное число!");
    return;
  }
  let tens = Math.floor(num / 10); // десятки
  let ones = num % 10; // единицы
  let sum = tens + ones;
  console.log(`Задание 8: Сумма цифр числа ${num} = ${sum}`);
  return sum;
}

task8(47);
