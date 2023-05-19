let justNumber = prompt('Введите число')
if (age === null){
    alert('Вы нажали на отмену');
}else if (age === ""){
    alert('Вы ничего не ввели');
}else if (age === '0'){
    alert('Число равно нулю');
}else if (age % 2 === 0){
    alert('Чётное');
}else if (age % 2 === 1){
    alert('Нечётное');
}else{
    alert('Введите только числа');
}
