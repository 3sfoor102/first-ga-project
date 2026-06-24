/*-------------------------------- Pseudocode --------------------------------*/



/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// I need to create a list of words, to compare the
// current word the user trying to guess and the actual word
let wordList = ['apple', 'orange', 'banana', 'mango', 'watermelon', 'grape', 'cherry', 'Strawberry']
let guessedWord = [] //maybe I need to define it inside a specific function to avoid saving globally

// for (let i = 0; let i<)

//console.log(wordList[randomIndex(wordList)])


 


/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
// The randomWord function is simply picking one random words from the array list,
// which will be usefuel if I decided to use multiple types of lists,
// e.g. food list, cars, countries, etc.
// Where I only need to add the list name 
// and the function will give me a random item from the list,
// which is a word
function randomWord(listName){
    let randomIndex = Math.floor(Math.random() * listName.length)
    return listName[randomIndex]
// the randomIndex variables saves a radnom index, which will be used to pick a random number for the word's list
// after generating the random number and saving it inside "randomIndex" variable we are just using it with the array to pick a random word
// it is like we are typing wordList[0] (for example the result is "Mango"), instead of a fixed number now the random function will change this to different numbers for example (wordList[2], which will give "banana")
}

console.log(randomWord(wordList))

console.log(wordList[3])
