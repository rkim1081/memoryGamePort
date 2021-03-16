document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'wartortle',
            img: 'images/wartortle.png'
        },
        {
            name: 'wartortle',
            img: 'images/wartortle.png'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.png'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.png'
        },
        {
            name: 'psyduck',
            img: 'images/psyduck.png'
        },
        {
            name: 'psyduck',
            img: 'images/psyduck.png'
        },
        {
            name: 'pikachu',
            img: 'images/pikachu.png'
        },
        {
            name: 'pikachu',
            img: 'images/pikachu.png'
        },
        {
            name: 'mewtwo',
            img: 'images/mewtwo.png'
        },
        {
            name: 'mewtwo',
            img: 'images/mewtwo.png'
        },
        {
            name: 'Charizard',
            img: 'images/Charizard.png'
        },
        {
            name: 'Charizard',
            img: 'images/Charizard.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []


//creating the board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)           
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('you found a match')
            cards[optionOneId].setAttribute('src', images/white.png)
            cards[optionTwoId].setAttribute('src', images/white.png)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', images/blank.png)
            cards[optionTwoId].setAttribute('src', images/blank.png)
            alert('Sorry, try again')   
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip the card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})