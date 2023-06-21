let justNumber = prompt('Введите число')
if (justNumber === null){
    alert('Вы нажали на отмену');
}else if (justNumber === ""){
    alert('Вы ничего не ввели');
}else if (justNumber === '0'){
    alert('Число равно нулю');
}else if (justNumber % 2 === 0){
    alert('Чётное');
}else if (justNumber % 2 === 1){
    alert('Нечётное');
}else{
    alert('Введите только числа');
}
