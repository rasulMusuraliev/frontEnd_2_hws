var number = prompt('оцените нас')

if (number< 5){
    alert('Мы работаем над улучшением сервиса!')
}else if (number>= 5){
    alert(('Спасибо за высокую оценку!'))
}else{
    alert('вводи цифры а не буквы' )
}


var message = prompt("Выберите язык отображения недели")
var Rus = [" Пн, Вт, Ср, Чт, Пт, Сб, Вс"]
var Eng = ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday "]

if (message === "русский") {
    console.log(Rus)
} else if (message === "english") {
    console.log(Eng)
} else {
    console.log("Error")
}



