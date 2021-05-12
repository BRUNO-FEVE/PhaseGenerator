const textSpace = document.getElementById('randomText')

const names = ['Bruno', 'Carlos', 'Luiza', 'Fatima', 'Aline', 'Gabriela', 'João', 'Giovana']
const professions = ['Web Developer', 'Doctor', 'Engineer', 'Teacher', 'Hairstylist', 'Youtuber']
const hobbies = ['go to the gym', 'play games', 'build web sites', 'study', 'stream', 'clean the house']

randomNum = (array) => {
    const randomNum = Math.floor(Math.random()*array.length)
    return randomNum
}

generateRandomPhase = () => {
    const namesNum = randomNum(names)
    const professionsNum = randomNum(professions)
    const hobbiesNum = randomNum(hobbies)

    const name = names[namesNum] 
    const profession = professions[professionsNum]
    const hobby = hobbies[hobbiesNum]

    return `${name} it's a ${profession} and in free time like to ${hobby}`
}

callFunc = () => {
    textSpace.innerHTML = generateRandomPhase()
}