// Объединение строк a и b, убираем повторяющиеся буквы на стыке
function task1(a, b) {
  let result;
  if (a.slice(-1) === b[0]) {
    // если последняя буква a совпадает с первой буквой b
    result = a + b.slice(1); // убираем дубликат
  } else {
    result = a + b;
  }
  console.log(`Задание 1: '${a}' + '${b}' → '${result}'`);
  return result;
}

task1("hello", "orange"); // → "helloorange"
task1("car", "road");
task1("saee", "eed");
