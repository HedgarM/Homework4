function vowelCount(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {

    if (['a', 'e', 'i', 'o', 'u', 'y'].includes(word[i].toLowerCase())) {
      count++;
    }

  }

  return count;

}

function checkPalindrome(input) {

  let word = input.toLowerCase();
  let oIndex = word.length - 1;
  for (let i = 0; i < Math.floor(word.length / 2); i++) {

    if (word[i] === word[oIndex]) {

      oIndex -= 1;

    }
    else {

      return false;

    }

  }

  return true;

}

let word = prompt("Enter a word");

let vowels = vowelCount(word);
if(checkPalindrome(word))
{

  console.log(`${word} contains ${vowels} vowels and is a palindrome`);

} 
else 
{
  console.log(`${word} contains ${vowels} vowels and isn't a palindrome`);

}