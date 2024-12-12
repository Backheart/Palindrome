const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultElement = document.getElementById("result");
// let word  = "";

// Add event listener to clear result when input changes

textInput.addEventListener('input', (e)=>{
    resultElement.innerText = "";
    
 
    }) 

// Function to clean input by removing non-alphanumeric characters and converting to lowercase
    
function regexCleaner(word){
    return word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

// Function to check if input is a palindrome

function isPalindrome (word){
    // convert word to lowercase
    word = regexCleaner(word);
    // Split the word into individual characters
    
    let characters = word.split('');
    
    // reverse the order of the characters
    
    let reverseCharacters = characters.reverse();
    
    // join the reverse word back into a string
    let reverseWord = reverseCharacters.join('')

    // Compare the original word with the reverse words
    return word === reverseWord;
    
    }

// Function to check palindrome and update result 

function checkPalindrome() {
   const inputValue = textInput.value.trim();
    if( inputValue ===''){
        alert("Please input a value");
    }else{
       const result = isPalindrome(inputValue)
      const resultMessage = result ? `${inputValue} is a palindrome.` : `${inputValue} is not a palindrome.`
        resultElement.innerText = resultMessage;
        textInput.value = "";
        resultElement.style.visibility = "visible"
           setTimeout(() => {
            textInput.value = "";
        }, 2000)
        
        // setTimeout(() => {
        //     textInput.value = "";
        // }, /*500*/)
 
    }
     
}

// Add event listeners

checkBtn.addEventListener('click' , checkPalindrome)

textInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
     checkPalindrome()
    }
  });


