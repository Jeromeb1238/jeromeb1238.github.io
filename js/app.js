'use strict'

var totalCounter = 0
var name = prompt('Hello!  My name is Jerome.  Tell me what is your name?');
console.log('Hello ' + name);
alert (name + ', pleasure to meet.');
var playQuiz = prompt ('To start, I have a short guessing game, 7 questions. Would you like to play?');
console.log ('User\'s response to play guessing game: ' + playQuiz);


// This is the start of the entire quiz
if (playQuiz.toUpperCase() == 'YES' || playQuiz.toUpperCase()== 'Y') {
  alert ('Great, let\'s start the quiz.');


  // Question 1 of Quiz
  var native = prompt('Question 1: Am I a native of Washington?');
  if (native.toUpperCase() == 'Y' || native.toUpperCase() == 'YES') {
    alert('Yes, I am a native of Washington');
    totalCounter++;
    console.log ('Question 1 answer ' + native);
  }
  else if (native.toUpperCase() == 'N' || native.toUpperCase()== 'NO') {
    alert('Incorrect, I am a native of WA');
  }
  else {
    alert('No answer');
  }


  // Question 2 of Quiz
  var married = prompt('Question 2: Am I a married?');
  if (married.toUpperCase() == 'Y' || married.toUpperCase() == 'YES') {
    alert('Yes, I am married');
    totalCounter++;
    console.log ('Question 2 answer ' + married);
  }
  else if (married.toUpperCase() == 'N' || married.toUpperCase()== 'NO') {
    alert('Incorrect, I am married');
  }
  else { 
    alert('No answer');
  }

  // Question 3 of Quiz
  var pets = prompt('Question 3: Do I have pets?');
  if (pets.toUpperCase() == 'Y' || pets.toUpperCase() == 'YES') {
    alert('Yes, I pets');
    totalCounter++;
    console.log ('Question 3 answer ' + pets);
  }
  else if (pets.toUpperCase() == 'N' || pets.toUpperCase()== 'NO') {
    alert('Incorrect, I do have pets');
  }
  else { 
    alert('No answer');
  }


  // Question 4 of Quiz
  var shoreline = prompt('Question 4: Do I live in Shoreline?');
  if (shoreline.toUpperCase() == 'Y' || shoreline.toUpperCase() == 'YES') {
    alert('Yes, I live in Shoreline');
    totalCounter++;
    console.log ('Question 4 answer ' + shoreline);
  }
  else if (shoreline.toUpperCase() == 'N' || shoreline.toUpperCase()== 'NO') {
    alert('Incorrect, I live in Shoreline');
  }
  else { 
    alert('No answer');
  }


  // Question 5 of Quiz
  var chef = prompt('Question 5: was I a chef?');
  if (chef.toUpperCase() == 'Y' || chef.toUpperCase() == 'YES') {
    alert('Incorrect, I was not a chef');
    console.log ('Question 5 answer ' + chef);
  }
  else if (chef.toUpperCase() == 'N' || chef.toUpperCase()== 'NO') {
    alert('Correct, I was not a chef');
    totalCounter++
  }
  else { 
    alert('No answer');
  }


  //Question 6 of quiz is a loop to guess # of children
  alert('Question 6; This question gives 4 tries to guess how many children I have.');
  var numberGuesses = 0;
  var numChildren = 6;
  var isCorrect = false;

  while (numberGuesses < 4 && !isCorrect) {
    var answer = parseInt(prompt('How many children do I have?.'));
    if (answer === numChildren) {
      alert('Yes, that is correct, I have ' + numChildren + ' children.');
      isCorrect = true;
      totalCounter++;
    }
    else if (answer < numChildren) {
      alert('Too low');
      numberGuesses++;
    }
    else if (answer > numChildren) {
      alert('Too high');
      numberGuesses++;
    }else {
      alert ('Invalid entry.  Must be a number.');
      numberGuesses++;
    }
  console.log ('Question 6 total guesses = ' + numberGuesses + '; answered ' + answer + '.');
  }
  if (numberGuesses >= 4) {
    alert('That was 4 guesses, I have 6 children.');
  }


  // Question 7; Guess one of my children's names in 6 attempts
  var guessNumber = 0;
  var maxNumGuess = 6
  var childrenNames = ['sarah', 'katie', 'natasha','sam', 'josh', 'matt'];
  var nameIsCorrect = false;
  alert ('Question 7: Guess one name of my 3 boys or 3 girls.');

  while (guessNumber < maxNumGuess && !nameIsCorrect) {
    var nameAnswer = prompt ('Guess a name.');
    for (var i = 0; i < childrenNames.length; i++) {
      if (nameAnswer.toLowerCase() === childrenNames[i]) {
          alert ('Wow, that is an excellent guess, yes that is one of my children\'s name.');
          nameIsCorrect = true;
          i = childrenNames.length;
          totalCounter++;
          console.log ('Correct answer; ' + nameAnswer + 'Guess # ' + guessNumber);
      }
    }
    if (!nameIsCorrect) {
      if (guessNumber === maxNumGuess) {
        var children = '';
        for (var i = 0; i < childrenNames.length; i++) {
          children += childrenNames [i] + ', ';
        }
        alert ('You our out of guesses.  The 6 names were ' + [0] + ', ' + [1]);
      }
      else {
        alert ('Not this time, keep trying');
      }
      guessNumber++;
      console.log ('Answer; ' + nameAnswer + '.  Guess # ' + guessNumber);

    }
  }
  alert ('Your total score is ' +  totalCounter + ' out of 7 questions.');
}
else {
  alert ('No guessing game!  Well I hope you enjoy my web page.');
}
