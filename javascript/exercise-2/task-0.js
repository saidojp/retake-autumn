// Из строк a и b делаем abba
function task0(a, b) {
  let result = a + b + b + a;
  console.log(`Задание 0: '${a}' + '${b}' → '${result}'`);
  return result;
}

task0("ab", "cd");
