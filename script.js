let svetlo = document.querySelector('.svetlo')

let svestka = document.querySelector('.svestka') 
svestka.addEventListener('click',function(){
    svetlo.style.backgroundColor = 'plum'
})

let zelena = document.querySelector('.zelena') 
zelena.addEventListener('click', function(){
    svetlo.style.backgroundColor = 'lime'
})

let rajcatova = document.querySelector('.rajcatova') 
rajcatova.addEventListener('click', function() {
    svetlo.style.backgroundColor = 'tomato'
})

//setTimeout(function() {
//   svetlo.style.backgroundColor = 'tomato'
//}, 1000)

//setTimeout(function() {
//    svetlo.style.backgroundColor = 'lime'
//}, 2000)

//setInterval (function (){
  //  svetlo.style.backgroundColor = 'tomato'
//}, 1800)

//setInterval (function (){
 //   svetlo.style.backgroundColor = 'lime'
//}, 2300)

let barvy = ['#ff0000', '#00ff00', '#0000f0', '#0000f0']
let pocetTiku = 0 

let casovac = setInterval (function (){
    svetlo.style.backgroundColor = barvy[pocetTiku] 

    if (pocetTiku > 2){
        pocetTiku = 0
    }
    else {
        pocetTiku += 1
    }
    pocetTiku +=1 
    // pocetTiku++ 
}, 1000)

let stop = document.querySelector('.stop')
stop.addEventListener('click', function(){
    //Zastavit party
    clearInterval(casovac)
})

let start = document.querySelector('.start')
start.addEventListener('click', function(){
    //Spustit party
    casovac = setInterval(function(){
        svetlo.style.backgroundColor = barvy[pocetTiku]
        if (pocetTiku >2) {
            pocetTiku = 0
        }
        else{
            pocetTiku +=1 
        }
    }, 1000)
})

