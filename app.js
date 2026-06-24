/*-------------------------------- Pseudocode --------------------------------*/



/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// I need to create a list of words, to compare the
// current word the user trying to guess and the actual word
let wordList = ['apple', 'orange', 'banana', 'mango', 'watermelon', 'grape', 'cherry', 'Strawberry']
let guessedWord = [] //maybe I need to define it inside a specific function to avoid saving globally

// this console log is just utilizing the randomIndex function, which generate a random number, and here I am using it with an array so it is picking a random number from the array, it is like this wordList[index], where I called the function to give me a random index instead of typing a specific index
console.log(wordList[randomIndex(wordList)])


 


/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
// The randomWord function is simply picking one random number from the array list, it will be usefuel if I decided to use multiple types of lists, e.g. food list, cars, countries, etc. Where I only need to add the list name and the function will give me a random index for the item (random word index)
function randomIndex(listName){
    return Math.floor(Math.random() * listName.length)
}



console.log(wordList[3])
