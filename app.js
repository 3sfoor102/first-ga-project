/*-------------------------------- Pseudocode --------------------------------*/


/*-------------------------------- Constants --------------------------------*/
const backgroundMusic = addAudio('assets/audio/hangman-background-music-audio.mp3')
const buttonClickSound = addAudio('assets/audio/button-click-audio.mp3')
const buttonClickdWrongSound = addAudio('assets/audio/button-clickd-wrong-audio.mp3')
const loseSound = addAudio('assets/audio/lose-sound.mp3')


/*-------------------------------- Variables --------------------------------*/
let wordList = [
  "apple",
  "banana",
  "orange",
  "grape",
  "strawberry",
  "watermelon",
  "lemon",
  "peach",
  "cherry",
  "pear",
  "pineapple",
  "mango",
  "blueberry",
  "kiwi",
  "plum",
  "cantaloupe",
  "grapefruit",
  "coconut",
  "raspberry",
  "blackberry",
  "lime",
  "apricot",
  "nectarine",
  "pomegranate",
  "avocado",
  "papaya",
  "guava",
  "honeydew",
  "fig",
  "date",
  "tangerine",
  "cranberry",
  "passionfruit",
  "lychee",
  "dragonfruit",
  "mandarin",
  "clementine",
  "melon",
  "kumquat",
  "mulberry",
  "gooseberry",
  "elderberry",
  "boysenberry",]

let secretWord = [randomWord(wordList)]
let gussedWord = []
let secretWordLettersArray = []
let correctLetter = false
let winner = false
let lives = 6


/*------------------------ Cached Element References ------------------------*/
const lettersBtns = document.querySelectorAll('.letters')
const ulLettersEl = document.querySelector('.output-letters')
const imgEls = document.querySelector('.images')
const currentHangmanImg = document.querySelector('#hangman-image') 
const divsContainerEl = document.querySelector('.divs-container')
const resetEl = document.querySelector('#reset-btn')
const attemptsText = document.querySelector('#attempts-title')
const popupEl = document.querySelector('.popup-container')
const popupTitle = document.querySelector('#popup-title')
const popupParagraph = document.querySelector('#popup-paragraph')
const restartbtn = document.querySelector('#restart')
let divsContainerEls

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
function randomWord(listName) {
    let randomIndex = Math.floor(Math.random() * listName.length)
    return listName[randomIndex]
}

function seprateSeceretLetters() {
    for (let i = 0; i < secretWord.length; i++) {
        for (let j = 0; j < secretWord[i].length; j++) {
            secretWordLettersArray.push(secretWord[i][j])
        }
    }
}

function createWordOutput() {
    seprateSeceretLetters()
    for (let i = 0; i < secretWordLettersArray.length; i++) {
        const divEl = document.createElement('div')
        divsContainerEl.appendChild(divEl)
        divEl.id = [i]
        divEl.classList = 'words-spaces'
    }

    divsContainerEls = document.querySelectorAll('.words-spaces')
    currentHangmanImg.src = 'assets/images/hangman-image-0'+lives+'.png'


    document.addEventListener('keydown', function(event){
        backgroundMusic.play()

        const pressedLetter = event.key.toLowerCase();
        
        lettersBtns.forEach(function (button) {
            
            if(button.textContent.toLowerCase() === pressedLetter && !button.disabled) {
                button.click()
                buttonClickSound.play()
            }
        })
    })


    lettersBtns.forEach(function (button) {
        button.addEventListener('click', function (event) {
                      backgroundMusic.play()
            

            let foundLetter = false

            for (let i = 0; i < secretWordLettersArray.length; i++) {
                if (event.target.textContent === secretWordLettersArray[i]) {
                    buttonClickSound.play()

                    const pEl = document.createElement('p')
                    pEl.textContent = event.target.textContent
                    divsContainerEls[i].appendChild(pEl)
                    gussedWord.push(event.target.textContent)

                    const DisableButton = event.target
                    DisableButton.disabled = true

                    foundLetter = true
                    winCheck()
                } 

            } if (foundLetter === false && lives>1) {
                currentHangmanImg.src = 'assets/images/hangman-image-0'+(lives-1)+'.png'
                    buttonClickdWrongSound.play()
                    lives--
                    attemptsText.textContent = `${lives} attempts left!`
                    const DisableButton = event.target
                    DisableButton.disabled = true
                    

                } else if (lives === 1) {        
                    backgroundMusic.pause()
                    attemptsText.textContent= '0 attempts Left!'
                    loseSound.play()
                    popupEl.classList = 'show-popup'
                    popupTitle.textContent = 'You Lose!'
                    for (let i = 0; i < lettersBtns.length; i++) {
                        lettersBtns[i].disabled = true
                        lettersBtns[i].style.backgroundColor = 'red'
                    }
                }
        })
    })

}
function winCheck() {

    if (gussedWord.length === secretWordLettersArray.length) {
        popupEl.classList = 'show-popup'
        popupTitle.textContent = 'You Win!'
    }
}

function reset() {
    window.location.reload();    
}

function addAudio(audioPath) {
    const audio = new Audio(audioPath)
    audio.volume = .05
    return audio
}


createWordOutput()
resetEl.addEventListener('click', reset)

restartbtn.addEventListener('click',reset) 



