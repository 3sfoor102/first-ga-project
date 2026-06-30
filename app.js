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


/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let wordList = ['apple', 'orange', 'banana', 'mango', 'watermelon', 'grape', 'cherry', 'Strawberry']
let guessedWord = [] 
let secretWord = [randomWord(wordList)] 
let secretWordLettersArray = []
let pressedKey = ['a']
let correctLetter = false
let lives = 6
let playing = false
let winner = false



/*------------------------ Cached Element References ------------------------*/
const lettersBtns = document.querySelectorAll('.letters')
const ulDashesEl = document.querySelector('.output-dashes')
const ulLettersEl = document.querySelector('.output-letters')
const liEls = document.createElement('li')
const imgEls = document.querySelector('.images')
const divsContainerEl = document.querySelector('.divs-container')
let divsContainerEls

const pEl = document.createElement('p')


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

function createWordOutput () {
    seprateSeceretLetters()
    for (let i = 0; i < secretWordLettersArray.length; i++) {
        const divEl = document.createElement('div')
        divsContainerEl.appendChild(divEl)
        divEl.id = [i]
        divEl.classList = 'words-spaces'
    }
    divsContainerEls = document.querySelectorAll('.words-spaces')
    lettersBtns.forEach(function (button) {
        button.addEventListener('click', function (event) {
            for (let i = 0; i < secretWordLettersArray.length; i++) {
                if (event.target.textContent === secretWordLettersArray[i] && event.target.textContent !== guessedWord[i] ) { // if the letter is correct and not in the "gussed word list at that specific index it will add it their"
                    // ulLettersEl.append(divEl[i] = event.target.textContent + ' ')
                    // where div element id is the same as the pushed letter (for example div id [1] === seceretWord [1] ... it should at the seceret word at 1 at the same place )
                    divsContainerEls[i].append(pEl.textContent = event.target.textContent)
                    guessedWord.push(event.target.textContent)
                    console.log(`Gussed Word Content: ${guessedWord}`) 
                }
            }
        }) 
    })

}


// =============================== CONSOLE LOGS AND CALLING FUNCTIONS =====================================
createWordOutput()
// console.log(divsContainerEls)
console.log(secretWordLettersArray)



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