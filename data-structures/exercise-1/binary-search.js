function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // нашли элемент
    }
    if (arr[mid] < target) {
      left = mid + 1; // ищем справа
    } else {
      right = mid - 1; // ищем слева
    }
  }

  return -1; // если не найдено
}

// Пример:
let numbers = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(numbers, 7)); // 👉 3 (индекс)
console.log(binarySearch(numbers, 4)); // 👉 -1 (нет в массиве)
