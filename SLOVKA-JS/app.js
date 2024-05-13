//Data
let maxWordLength = 5
let word = ''

let tries = 1
let maxTries = 6

let lettersInRow = {
    correct: [],
    present: [],
    wrong: [] 
}

let solution = allWords[allWords.length * Math.random() | 0].toLowerCase()
let noAccentSolution = noAccents(solution)
let noAccentWords = allWords.map(x => noAccents(x))

var keys = document.querySelectorAll('.keyboard .tile')

keys.forEach(function(key) {
    key.addEventListener('click', function() {
        let char = key.innerText
        addLetter(char) 
    })
})

//Buttons
function handleButton(event) {
    if (event.target.id === "submit") {
        submitWord()
    } else if (event.target.id === "backspace") {
        removeLetter()
    }
}

var submitTouch = document.getElementById("submit")
var removeLetterTouch = document.getElementById("backspace")

submitTouch.addEventListener('click', handleButton)
removeLetterTouch.addEventListener('click', handleButton)


//Keyboard
document.addEventListener('keydown', (event) => {
   
    if ( event.key === 'Enter' ) {
        submitWord()
    }
    else if ( event.key === 'Backspace') {
        removeLetter()
    }
    else {
        addLetter( event.key )
    }
})

//Submit
const submitWord = () => {
    if(word.length !== maxWordLength) return
    // is real word
    if ( !noAccentWords.includes(noAccents(word))) {
        animateRowShake(currentRow())
        return
  }

    findLettersInRow()
    highlightLetters(currentRow())
    animateTileReveal(currentRow())

    setTimeout(() => { 
       judgeResult()
    },1500);
   
}

//Add Letter
const addLetter = (character) => {

    if ( word.length >= maxWordLength) return

    if ( /^\p{L}$/u.test(character) ) {
        word = word + character
        word = word.toLowerCase()
        
        let tile = currentTile()
        tile.innerHTML = character 
      
        animateTileBounce(tile)
    }

}



const removeLetter = () => {
    if ( word.length <= 0 ) return

    let tile = currentTile()
    tile.innerHTML = ''
    tile.className = 'tile'

    word = word.slice(0, -1)
}

const currentTile = () => {
    return currentRow().querySelector(':nth-child(' + word.length + ')')
}

const currentRow = () => {
    return document.querySelector('.row:nth-child(' + tries + ')')
}

const judgeResult = () => {
    if ( noAccents(word) === noAccentSolution ) {
        animateTileDance(currentRow())

        setTimeout(() => {
            
            document.addEventListener('click', clickHandler)
            document.addEventListener('keydown', keyDownHandler)  
        }, 2000);

        const clickHandler = () => {
            this.location.reload()
        }
        const keyDownHandler = () => {
            this.location.reload()
        }
        }
        
    else if ( tries >= maxTries ) {
        youVeryMuchLose()

        setTimeout(() => {
            let resultContainer = document.getElementById('results')
            let resultElement = document.createElement('h1')

            resultElement.textContent = '✅' + solution.toUpperCase() + '✅'
            resultElement.classList.add("result")
            
            resultContainer.appendChild(resultElement)

            document.addEventListener('click', clickHandler)
            document.addEventListener('keydown', keyDownHandler)  
        
            
        }, 2000 );
        const clickHandler = () => {
            this.location.reload()
        }
        const keyDownHandler = () => {
            this.location.reload()
        }
    }

    else {
        word = '' 
        tries ++
    }
}

const findLettersInRow = () => {
    let present = [];
    let correct = [];
    let wrong = [];

    [...word].forEach((letter, index) => {
        letter = noAccents(letter)

        if (noAccentSolution.charAt(index) === letter) {
            correct.push(letter)
        }

        else if (noAccentSolution.includes(letter)) {
            present.push(letter)
        }

        else {
            wrong.push(letter)
        }
    })

    lettersInRow = {
        present,
        correct,
        wrong
    }
    
}

function noAccents (str){
    return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}