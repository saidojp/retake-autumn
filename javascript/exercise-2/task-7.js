// Вывести массив в обратном порядке

function task7(arr) {
  let reversed = arr.slice().reverse(); // используем метод массива
  console.log("Задание 7:", reversed);
  return reversed;
}

let numbers = [10, -3, 25, 0, 7, 15, -8];
task7(numbers);
