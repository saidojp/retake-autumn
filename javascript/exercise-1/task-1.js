function task1(month) {
  let result = "";
  switch (
    month // условный оператор switch
  ) {
    case 12:
    case 1:
    case 2:
      result = "Зима";
      break;
    case 3:
    case 4:
    case 5:
      result = "Весна";
      break;
    case 6:
    case 7:
    case 8:
      result = "Лето";
      break;
    case 9:
    case 10:
    case 11:
      result = "Осень";
      break;
    default:
      console.log("Некорректный номер месяца");
      return;
  }

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  console.log(`Задание 1: ${months[month - 1]} → ${result}`);
  return result;
}

task1(9);
