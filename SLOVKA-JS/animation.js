const animateTileBounce = (tile) => {
    tile.classList.add('is-filled', 'animate__animated', 'animate__bounceIn')
}

const animateRowShake = (row) => {
    row.classList.remove('animate__shakeX')

    setTimeout( () => {
        row.classList.add( 'animate__animated', 'animate__shakeX')
    },0 )
}

const animateTileReveal = (row) => {
    row.querySelectorAll('.tile').forEach((tile, index) => {
        tile.classList.remove('animate__bounceIn', 'animate__flipInY')

        setTimeout(() => {
            tile.style.visibility = 'visible'
            tile.classList.add('animate__flipInY', `animate__delay-${index}s`)
        },0 )


    })
}

const animateTileDance = (row) => {
    row.querySelectorAll('.tile').forEach((tile, index) => {
        tile.innerHTML = solution.charAt(index)

        tile.classList.remove('animate__bounceIn', 'animate__flipInY', 'animate__bounce')

        setTimeout(() => {
            tile.classList.add('animate__bounce', `animate__delay-${index}s`, 'animate__zoomInUp')
        },0 )


    })
}

const gameOver = (row) => {
    row.querySelectorAll('.tile').forEach(tile => {
        tile.classList.add('succes')
    }

)}



const youVeryMuchLose = () => {
    let board = document.querySelector('.board')
    board.classList.add('animate__animated', 'animate__hinge')
}

const highlightLetters = (row) => {
    let presentLetters = []

    row.querySelectorAll('.tile').forEach((tile, index) => {
        tile.style.visibility = 'hidden'

        let tileLetter = noAccents (word.charAt(index))
        let colorClass = 'wrong'
    
            
        if ( noAccentSolution.includes(tileLetter)) {
            if (!lettersInRow.correct.includes(tileLetter) && ! presentLetters.includes(tileLetter)) {
                colorClass = 'present'
                presentLetters.push(tileLetter)
            }        
        }

        if ( noAccentSolution.charAt(index) === tileLetter) {
                colorClass = 'correct'
        }
    
            tile.classList.add(colorClass)
    })

   document.querySelectorAll('.keyboard .tile').forEach(tile => {
        let colorClass = ''
    
        if (lettersInRow.wrong.includes(tile.id)) colorClass = 'wrong'
        if (lettersInRow.present.includes(tile.id)) colorClass = 'present'
        if (lettersInRow.correct.includes(tile.id)) colorClass = 'correct'

        if (colorClass) tile.classList.add(colorClass)
    })
     
}
