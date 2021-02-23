let diameter = 0
let circumference = 0
let area = 0
const pi = 3.14159
document.getElementById('press-one').addEventListener('click', myCircumference)
document.getElementById('press-two').addEventListener('click', myArea)
function myCircumference () {
  diameter = document.getElementById('enter-one').value
  diameter = parseInt(diameter)
  circumference = ((diameter / 2) * pi * 2)
  alert(circumference)
}
function myArea () {
  diameter = document.getElementById('enter-two').value
  diameter = parseInt(diameter)
  area = (pi * (diameter / 2) ** 2)
  alert(area)
}