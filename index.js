
const humans = {
  'Jamie Bolding': './images/one.jpg',
  'Jamie Bolding1': './images/one.jpg',
  'Jamie Bolding2': './images/one.jpg',
  'Jamie Bolding3': './images/one.jpg',
  'Jamie Bolding4': './images/one.jpg',
  'Jamie Bolding5': './images/one.jpg'
}

const names = Object.keys(humans)
const numberOfNames = names.length

const generateRandomIndex = () => {
  return Math.floor(Math.random() * numberOfNames)
}
const gameNames = names.map(name => {
  return {
    realName: name,
    image: humans[name],
    names: [
      names[generateRandomIndex()],
      names[generateRandomIndex()],
      names[generateRandomIndex()],
      names[generateRandomIndex()]
    ]
  }
})

const startGame = (numberOfRounds) => {
  let roundNumber = 0
  const correct = []
  const incorrect = []
  while (numberOfRounds < roundNumber) {
    const target = document.getElementById('box')
    // - show gameNames[index].image
    // - gameNames[index].names buttons
    // - add event listener to name buttons and if value is gameNames[index].realName add gameNames[index] to correct or incorrect
    // - increase roundNumber by 1
    // if roundNumber is === numberOfRounds show the output of correct and incorrect
  }
}
