/*-------------------------------- Pseudocode --------------------------------*/



/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// I need to create a list of words, to compare the
// current word the user trying to guess and the actual word
let wordList = ['apple', 'orange', 'banana', 'mango', 'watermelon', 'grape', 'cherry', 'Strawberry']
let guessedWord = [] // maybe I need to define it inside a specific function to avoid saving globally
let secretWord = [randomWord(wordList)] //[randomWord(wordList)] // this variable saves the result of the randomWord() and it saves it specifically in an array, so it can be compared later on
let pressedKey = ['a']
let correctLetter = false
let lives = 6
let playing = false
let winner = false
let secretWordLettersArray = []



/*------------------------ Cached Element References ------------------------*/
const lettersBtns = document.querySelectorAll('.letters')
const ulDashesEl = document.querySelector('.output-dashes')
const ulLettersEl = document.querySelector('.output-letters')
const liEls = document.createElement('li')


console.log(secretWord)
// This brings the keyboard letters from the html page
// We use forEach to iterate in all the letters that are in "letters" class
// Then we add an event listner to see and save which letter the user have clicked


lettersBtns.forEach(function (button) {
    button.addEventListener('click', function (event) {
        // this for loop go over the selected word, the randoWord,
        // and it goes over each letter in it, to compare it with letters
        // entered by the user
        // for (let i = 0; i < secretWord.length; i++) {
        //     for (let j = 0; j < secretWord[i].length; j++) {
        //          console.log(secretWord[i][j])
        //     }
        //     // if (pressedKey[0] === secretWord[0][])
        //     // guessedWord.push(button.textContent)
        // }

    })
})




/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
// The randomWord function is simply picking one random words from the array list,
// which will be usefuel if I decided to use multiple types of lists,
// e.g. food list, cars, countries, etc.
// Where I only need to add the list name 
// and the function will give me a random item from the list,
// which is a word
        console.log(secretWordLettersArray)

function randomWord(listName) {
    let randomIndex = Math.floor(Math.random() * listName.length)
    return listName[randomIndex]
    // the randomIndex variables saves a radnom index, which will be used to pick a random number for the word's list
    // after generating the random number and saving it inside "randomIndex" variable we are just using it with the array to pick a random word
    // it is like we are typing wordList[0] (for example the result is "Mango"), instead of a fixed number now the random function will change this to different numbers for example (wordList[2], which will give "banana")
}
seprateSeceretLetters()
function createWordOutput() {
    for (let i = 0; i < secretWordLettersArray.length; i++) {
        ulDashesEl.append(liEls.textContent = '___ ')
    }
    lettersBtns.forEach(function (button) {
        button.addEventListener('click', function (event) {
            for (let i = 0; i < secretWordLettersArray.length; i++) {
                if (event.target.textContent === secretWordLettersArray[i]) {
                    ulLettersEl.append(liEls.textContent = event.target.textContent + ' ')
                    console.log('GOOD')
                }
            }

        })
    })

}
createWordOutput()



// seprateSeceretLetters is used to seperate the full random word
// and it saves each letter in it  
function seprateSeceretLetters() {
    for (let i = 0; i < secretWord.length; i++) {
        for (let j = 0; j < secretWord[i].length; j++) {
            secretWordLettersArray.push(secretWord[i][j])
        }
    }
}
console.log(secretWordLettersArray)
// console.log(secretWordLettersArray.length)



// this comparision is working, just replace userInput with the currenyUserLetter 
// for (let i = 0; i < secretWordLettersArray.length; i++) {
//         if (secretWordLettersArray[i] === userinput[i]) {
//         console.log('true')

//         }
//     }



// =============================== PSEUDOCODE START =====================================
// I should place seprateSeceretLetters() --> Invoke, then
// I should invoke createWordOutput(), because first I will know the letters, then I can compare them
// Each letter should be placed at the same location of its location in the original array
// If the letter is 'l', and the seceretWord is  apple, the letter should
// be placed at index 3, and it showed be shown at index 3 in the screen

// Add one image, and this image changes according to status, for example the first image with full body, the second image will replace the first image but with hand lost, etc.
// 


// =============================== PSEUDOCODE END =====================================






// =============================== DEAD CODE =====================================
// // WORKING 
// lettersBtns.forEach(function(button){
// button.addEventListener('click', function(event){
//         // console.log(bevent.target.textContent)
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

// ====================================================================