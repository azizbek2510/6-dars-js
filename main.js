let myArray = ["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4"];

console.log("Длина массива:", myArray.length);
alert("Длина массива: " + myArray.length);

if (confirm("Удалить один элемент из массива?")) {
  myArray.pop();
  alert("Один элемент удален. Длина массива: " + myArray.length);
} else {
  alert("Элементы массива остались на месте. Длина массива: " + myArray.length);
}

console.log("Текущий массив:", myArray);
