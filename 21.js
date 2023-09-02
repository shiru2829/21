var card = document.getElementById("cards")
var total = document.getElementById("total")
var msg = document.getElementById("msg")
var ctotal = document.getElementById("ctotal")

var win = false
var pcard = []
var sum1 = 0
var sum = 0
var game = true
var sgame = false
var player = prompt("Enter Player Name : ")
var amount = prompt("Enter the Amount : ")

function getrandom(){
    var random = Math.floor(Math.random()*13 + 1)

    if(random>10){
        return 10
    }
    else if(random == 1){
        return 11
    }
    else{
        return random
    }
}

function start(){
    sgame = true
    var num1 = getrandom()
    var num2 = getrandom() 
    var num3 = getrandom()
    var num4 = getrandom()
        sum1 = num3 + num4
        sum = num1 + num2
        pcard = [num1, num2]
        render()
}
function render(){
    card.innerHTML = "Cards : "
    
    for(var i = 0; i<pcard.length; i++){
        card.innerHTML += `${pcard[ i ]}`
    }
    total.innerHTML =`Total : ${sum}`
    ctotal.innerHTML =`Computer Total : ${sum1}`
    
    if(sum<21){
        msg.innerHTML = "Do you want New card ??? "
    }
    else if(sum == 21 && sum1 < 21){
        amount = amount*2
        msg.innerHTML = `Congrats !!! ${player}, You Won Rs. ${amount}  `
        win = true
    }
    else {
        msg.innerHTML = `Sorry ${player}, your Rs. ${amount} is Gayaa`
        game = false
    }
}
function newcard(){
    if (win == false && game == true && sgame == true){
        var num = getrandom()
        pcard.push(num)
        sum = sum + num
        while(sum1<17){
            var cnum = getrandom()
            sum1 = sum1 + cnum
        }
        render()
        if(sum>21){
            winner()
        }
        
    }
   
}

function winner(){
    if(sgame == true){
    while(sum1<17 && sum1<sum){
        var cnum = getrandom()
        sum1 = sum1 + cnum
    }
    ctotal.innerHTML = `Computer Total : ${sum1}`
    if(sum > 21 || (sum1 <= 21 && sum1>sum) ){
        msg.innerHTML = `Sorry ${player}, your Rs. ${amount} is Gayaa`
    }
    else if(sum == sum1){
        msg.innerHTML = "It Is Tie !! "
    }
    else{
        msg.innerHTML = `Congrats !!! ${player}, You Won Rs. ${amount} `
    }
game=false
    }
}