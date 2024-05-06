
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
// let inputName = document.getElementById("name").value;
// let inputAmount = document.getElementById('amount').value;



// let player = {
//     name: inputName,
//     chips: inputAmount
// }




function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function name_Amount_field() {
  
    let inputName = document.getElementById("name").value;
    let inputAmount = document.getElementById('amount').value;

    document.getElementById('inputFields').style.display = 'none';

    let playerInfo =  `Congratulations ${inputName}, you won $ ${inputAmount * 12}`
  
    let playerEl = document.getElementById('player-el');
    playerEl.textContent = playerInfo;

}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    

}

function renderGame() {
    document.getElementById('inputFields').style.display = 'none';
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        name_Amount_field();
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
