//objects for the different cards
const fries = {name: 'fries', img: 'images/fries.png'}
const cheeseburger = {name: 'cheeseburger', img: 'images/cheeseburger'}
const hotdog = {name: 'hotdog', img: 'images/hotdog'}
const icecream = {name: 'ice-cream', img: 'images/ice-cream'}
const milkshake = {name: 'milkshake', img: 'images/milkshake'}
const pizza = {name: 'pizza', img: 'images/pizza'}

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

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
    }
}

createBoard()