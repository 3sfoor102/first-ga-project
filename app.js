/*-------------------------------- Pseudocode --------------------------------*/
// Comparing Words Logic 
// Each letter should be placed at the same location of its original location in the secretWordLettersArray
// If the letter is 'l', and the seceretWord is  apple, the letter should
// be placed at index 3, and it showed be shown at index 3 in the screen

// lives (attempts) and Images     
// Add one image, and this image changes according to status, for example the first image with full body, the second image will replace the first image but with hand lost, etc.
// Each wrong letter pressed will take a life from the user, using lives--

// Win 
// if the user gussedWord === seceretWord && attempts 

// Reset 
// add the random word to it secretWord = [randomWord(wordList)] 
// Reset all keyboard letters
// Reset all the spaces
// Reset the image to the first image, or none image
// Reset music and all sounds if needed

/*-------------------------------- Constants --------------------------------*/

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
let playing = false
let winner = false
let lives = 6



/*------------------------ Cached Element References ------------------------*/
const lettersBtns = document.querySelectorAll('.letters')
// const ulDashesEl = document.querySelector('.output-dashes')
// const ulLettersEl = document.querySelector('.output-letters')
// const liEls = document.createElement('li')
const imgEls = document.querySelector('.images')
const currentHangmanImg = document.querySelector('#hangman-image') 
const divsContainerEl = document.querySelector('.divs-container')
const resetEl = document.querySelector('#reset-btn')
const attemptsText = document.querySelector('#attempts-title')
let divsContainerEls


console.log(lettersBtns)
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
        console.log('keyboard')
    })

    lettersBtns.forEach(function (button) {
        button.addEventListener('click', function (event) {

            let foundLetter = false

            for (let i = 0; i < secretWordLettersArray.length; i++) {
                if (event.target.textContent === secretWordLettersArray[i]) {

                    const pEl = document.createElement('p')
                    pEl.textContent = event.target.textContent
                    divsContainerEls[i].appendChild(pEl)
                    gussedWord.push(event.target.textContent)
                    console.log(`gussedWord ${gussedWord.length}`)
                    console.log(`secert length ${secretWordLettersArray.length}`)
                    const DisableButton = event.target
                    DisableButton.disabled = true

                    foundLetter = true
                    winCheck()
                } 

            } if (foundLetter === false && lives>1) {
                currentHangmanImg.src = 'assets/images/hangman-image-0'+lives+'.png'
                    lives--
                    attemptsText.textContent = `${lives} attempts left!`
                    console.log(lives)
                    DisableButton = event.target
                    DisableButton.disabled = true
                    

                } else if (lives === 1) {        
                    attemptsText.textContent = `You Lose!`
                    for (let i = 0; i < lettersBtns.length; i++) {
                        console.log(lettersBtns[i])
                        lettersBtns[i].disabled = true
                        // here add the 
                    }
                    //disable all buttons and make them red
                }
        })
    })

}
console.log(lettersBtns.length)
function winCheck() {

    if (gussedWord.length === secretWordLettersArray.length) {
        console.log('You Won!')
    } 
}

function reset() {
    window.location.reload();
}

// function addAudio(audioName, audioPath) {
//     const audioName = new Audio(audioPath)
//     audioName.volume = .05
//     audioName.play()
// }

// function audioUp(){
//     volume = volume +10
// }

// function audioDown(){
//     volume = volume -10
// }
// function mute(){
//     volume = 0
// }

// console.log(addAudio(backgroundMusic, 'assets/audio/hangman-background-music-audio.mp3'))
// backgroundMusic.loop = true



// =============================== CONSOLE LOGS AND CALLING FUNCTIONS =====================================
createWordOutput()
console.log('this is secretWordLettersArray ----- ' + secretWordLettersArray)
resetEl.addEventListener('click', reset)
console.log('This is secret word ----- ' + secretWord)



// =======================================================================================

// =============================== CODES I MIGHT USE =====================================
// this comparision is working, just replace userInput with the currenyUserLetter 
// for (let i = 0; i < secretWordLettersArray.length; i++) {
//         if (secretWordLettersArray[i] === userinput[i]) {
//         console.log('true')

//         }
//     }

// // Disabling a button
//     const testDisableButton = document.querySelector('#A')
//     console.log(testDisableButton)
//     testDisableButton.disabled = true

// Replacing a class     
// imgEls.classList.replace('images', 'removeImage')

// ==========================================================================================


// =============================== MAIN CODE EXPLAINED:  =====================================
// seprateSeceretLetters function 
    // seprateSeceretLetters function is used to seperate the full random word and it saves each letter in it

// randomWord function
    // The randomWord function is simply picking one random words from the array list,
    // which will be usefuel if I decided to use multiple types of lists,
    // e.g. food list, cars, countries, etc.
    // Where I only need to add the list name
    // and the function will give me a random item from the list,
    // which is a word
    // the randomIndex variables saves a radnom index, which will be used to pick a random number for the word's list
    // after generating the random number and saving it inside "randomIndex" variable we are just using it with the array to pick a random word
    // it is like we are typing wordList[0] (for example the result is "Mango"), instead of a fixed number now the random function will change this to different numbers for example (wordList[2], which will give "banana")

// winCheck function 
    // here, the logic already prevent the user from inserting a wrong letter, so any inserted letter is correct, all of the inserted letters are added to the gussedWord array, without any index arrangment, however, since all the inserted letters are 100% correct this means the length of the gussedWord will be = to the length of the seceret word, so if the length is equal I can know that the user have placed all the correct letters


// ==========================================================================================


// =============================== DEAD CODE =====================================
// // WORKING 
// lettersBtns.forEach(function(button){
// button.addEventListener('click', function(event){
//         // console.log(event.target.textContent)
//         guessedWord.push(button.textContent)
//         // if (pressedKey[0] === secretWord[0][0]) {
//         //     pressedKey.push(event.target.textContent)
//         //     console.log(guessedWord[0])
//         // }
//                 // console.log(guessedWord[4])
// console.log(guessedWord)

//     })
// })

// console.log(secretWord[0][0])

// working click and put letter to screen
// lettersBtns.forEach(function(button){
// button.addEventListener('click', function(event){
//     ulLettersEl.append(liEls.textContent = event.target.textContent)
//     })
// })

// lettersBtns.forEach(function (button) {
//     button.addEventListener('click', function (event) {
//         // this for loop go over the selected word, the randoWord,
//         // and it goes over each letter in it, to compare it with letters
//         // entered by the user
//         // for (let i = 0; i < secretWord.length; i++) {
//         //     for (let j = 0; j < secretWord[i].length; j++) {
//         //          console.log(secretWord[i][j])
//         //     }
//         //     // if (pressedKey[0] === secretWord[0][])
//         //     // guessedWord.push(button.textContent)
//         // }

//     })
// })

// ====================================================================