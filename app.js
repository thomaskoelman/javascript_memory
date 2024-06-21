//objects for the different cards
const fries = {name: 'fries', img: 'images/fries.png'}
const cheeseburger = {name: 'cheeseburger', img: 'images/cheeseburger.png'}
const hotdog = {name: 'hotdog', img: 'images/hotdog.png'}
const icecream = {name: 'ice-cream', img: 'images/ice-cream.png'}
const milkshake = {name: 'milkshake', img: 'images/milkshake.png'}
const pizza = {name: 'pizza', img: 'images/pizza.png'}

//array of cards - each must have a double
//all elements are deepcopies

const cardArray = [
    structuredClone(fries),
    structuredClone(fries),
    structuredClone(cheeseburger),
    structuredClone(cheeseburger),
    structuredClone(hotdog),
    structuredClone(hotdog),
    structuredClone(icecream),
    structuredClone(icecream),
    structuredClone(milkshake),
    structuredClone(milkshake),
    structuredClone(pizza),
    structuredClone(pizza)
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

let flippedCards = []
let flippedCardsIds = []
const remainingCards = []
let flippedCount = 0
let score = 0

function flipCard(cardId, name) {
    flippedCardsIds.push(cardId)
    flippedCards.push(name)
    flippedCount++
}

function unflipAll() {
    flippedCardsIds = []
    flippedCards = []
    flippedCount = 0
}

function isMatch() {
    return (flippedCards[0] == flippedCards[1])
}

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', clickOnCard)
        gridDisplay.appendChild(card)
    }
}


function clickOnCard() {
    const cardId = this.getAttribute('data-id')
    const name = cardArray[cardId].name
    const image = cardArray[cardId].img
    this.setAttribute('src', image)
    this.removeEventListener('click', clickOnCard)
    flipCard(cardId, name)
    if (flippedCount === 2) {
        const cards = document.querySelectorAll('#grid img')
        cards.forEach(card => card.removeEventListener('click', clickOnCard))
        setTimeout(checkMatch, 2000)
    }
}

function countFlipped() {
    let count = 0
    cardArray.forEach(card => {
        if (card.flipped) {
            count++
        }
    })
    return count
}


function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const result = document.querySelector('#result')
    
    if (isMatch()) {
        alert('You found a match!')
        flippedCardsIds.forEach(id => {
            cards[id].setAttribute('src', 'images/white.png')
        })
        unflipAll()
        score = score + 3
        result.innerHTML = score
    } else {
        alert('You found no match!')
        flippedCardsIds.forEach(id => {
            cards[id].addEventListener('click', clickOnCard)
            cards[id].setAttribute('src', 'images/blank.png')
        })
        unflipAll()
        score--
        result.innerHTML = score
    }
    cards.forEach(card => {
        const image = card.getAttribute('src')
        if (image != 'images/white.png') {
            card.addEventListener('click', clickOnCard)
        }
    })    
}

createBoard()