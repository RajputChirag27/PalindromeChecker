const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
let newString = "";
let cleanedString = "";

checkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (textInput.value === '') {
        alert("Please input a value");
        return;
    }

    if (textInput.value.length == 1) {
        console.log(textInput.value);
        result.innerHTML = `${textInput.value} is a palindrome`
    }
    else {
        newString = textInput.value;
        cleanedString = newString.replace(/[\W_]/g, "").toLowerCase(); //Removes non alphanumeric characters and converts to lowercase
        console.log(cleanedString);
        result.innerHTML = '';
        isPalindrome(cleanedString) ? result.innerHTML = `${newString} is a palindrome` : result.innerHTML = `${newString} is not a palindrome`;
    }

})

const isPalindrome = (cleanedString) => {
    return cleanedString.split('').reverse().join('') == cleanedString;
}


