function calculateFormula(n) {

  if (n < 1 || n > 9 || n % 1 !== 0) {
    return "Ошибка: Введите однозначное натуральное число (от 1 до 9).";
  }

  
  const n_str = String(n);
  const nn_str = n_str + n_str;
  const nnn_str = n_str + n_str + n_str;


  const result = Number(n_str) + Number(nn_str) + Number(nnn_str);
  
  return result;
}


const n = 5;
const result_7 = calculateFormula(n);
console.log(`Результат для n=${n}: ${result_7}`);

const n_invalid = 10;
console.log(`Результат для n=${n_invalid}: ${calculateFormula(n_invalid)}`); 