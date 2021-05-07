const generateButton = document.getElementById('generateButton')
const addButton = document.getElementById('addButton')

const textSpace = document.getElementById('randomText')
const newForm = document.getElementsByClassName('hidden')

const phase = document.querySelector('#newPhase').value
const language = document.querySelector('#language').value
//generateButton.addEventListener('click', this.callFunc)

const showForm = () => {
    for (let i = 0; i < newForm.length; i++) {
        if (addButton.click) {
            if (newForm[i].style.display === 'none') {
                newForm[i].style.display = 'block'
            } else {
                newForm[i].style.display = 'none'
            }
        }
    }
}

const phases = {
    _Phases: {},

    createPhase() {
        const newP = [`${phase}, ${language}`]
        return _Phases.push(newP)
    },

    generateRandomPhase() {
        const randomNum = Math.floor(Math.random()*3) 
    
        if (randomNum === 0) {
            return 'Add yours phases for they apear!!'
        } else if (randomNum === 1) {
            return 'Hi'
        } else if (randomNum === 2 ) {
            return 'Porra'
        }
    },
    
    callFunc () {
        textSpace.innerHTML = this.generateRandomPhase()
    }
}
const test = document.getElementById('test')
test.innerHTML = phase