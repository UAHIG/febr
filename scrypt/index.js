let wifeNameCheck = confirm ('Это Дашуля?');
if  (wifeNameCheck == true) {
  alert ('Тогда пройдем тест!!')
}
else {
  alert ('Ты не из нашей песочницы!!')
}

let quesOne = confirm ('Ваш любимый муж в восторге от праздника 14 февраля?')
if (quesOne == true) {
  alert ('Вы не Дашуля - закройте ноут')
}
else {
  alert ('Перфекто !! идем дальше. Всего один вопрос')
}

let quesTwo = prompt ('Сколько лет же Любимому мужу?', '')
if (quesTwo == 25) {
  alert ('Ну прям супер!!! Лови сердечки ')
  document.location.href = "https://www.youtube.com/watch?v=yYT2zLjjBrA";
}
else if (quesTwo < 25) { 
  alert ('То малий зовсим !!! Трохи вгору!')
}
else {
  alert ('Та ну нахрен!! Много ж !!')
}
