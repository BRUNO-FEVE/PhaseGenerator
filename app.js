const textSpace = document.getElementById('randomText')

generateRandomPhase = () => {
    const randomNum = Math.floor(Math.random()*3) 

    if (randomNum === 0) {
        return 'Add yours phases for they apear!!'
    } else if (randomNum === 1) {
        return 'Hi'
    } else if (randomNum === 2 ) {
        return 'Porra'
    }
}

callFunc = () => {
    textSpace.innerHTML = generateRandomPhase()
}