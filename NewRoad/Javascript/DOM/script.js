//Selection of an element
var a = document.querySelector('h1')
//Changing HTML
a.innerHTML = 'Changed HTML'
//Changing CSS
a.style.color = 'red'
a.style.backgroundColor = 'black'
//Event Listener
a.addEventListener('click', function() {
    a.innerHTML = 'Badal gya hu mai bhi teri ex ki tarah'
    a.style.color= 'yellow'
    a.style.backgroundColor = 'black'
})

var bulb = document.querySelector('#bulb')
var btn = document.querySelector('button')
var flag=0
btn.addEventListener('click', function() {
    if(flag==0) {
    bulb.style.backgroundColor = 'yellow'
    flag=1
    }else{
       bulb.style.backgroundColor = 'transparent'
       flag=0 
    }
})
