'use strict';

// Ask user name and return a welcome msg w/ name
var userName = prompt('Welcome to the site.  What is your name?');
alert('Welcome ' + userName + ' to the site.');

// declare var to count total correct answers
var totalCorrectAnswers = 0;

// Start a 7 question yes/no quiz about me
var confirm = confirm('Would you like to take a quiz about me that has 7 questions?');
if(confirm) {
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();
} else {
  alert("No quiz?!  Well I hope you enjoy the website");
}

// Question 1
function question1() {
  var native = prompt('Am I a native of Seattle');
  native = native.toLowerCase();
  console.log('User answer to native question ' + native);
  if (native === 'yes' || native === 'y') {
    alert('Correct, I am a native of Seattle');
    totalCorrectAnswers++
  } else if (native !== 'yes' || native !== 'y') {
    alert('That is not correct, I am a native of Seattle');
  }
}

// Question 2
function question2() {
  var historyQuestion = prompt('Do you think I like history?');
  historyQuestion = historyQuestion.toLowerCase();
  console.log('User response to history question = ' + historyQuestion);
  if (historyQuestion === 'yes' || historyQuestion === 'y') {
    alert('Yes, I do like history');
    totalCorrectAnswers++
  } else if (historyQuestion !== 'yes' || historyQuestion === 'y') {
    alert('Actually I do like history');
  }
}

// Question 3
function question3() {
  var childrenQuestion = prompt('Do I have any children?');
  childrenQuestion = childrenQuestion.toLocaleLowerCase();
  console.log('User response to children = ' + childrenQuestion);
  if (childrenQuestion === 'yes' || childrenQuestion === 'y') {
    alert('Yes I do have children');
    totalCorrectAnswers++
  } else if (childrenQuestion !== 'yes' || childrenQuestion !== 'y') {
    alert('Actually I do have children.');
  }
}

// Question 4
function question4() {
  var physicalQuestion = prompt('Do I like to work out?');
  physicalQuestion = physicalQuestion.toLocaleLowerCase();
  console.log('User response to physical excercise = ' + physicalQuestion);
  if (physicalQuestion === 'yes' || physicalQuestion === 'y') {
    alert('Yes I love to work out!');
    totalCorrectAnswers++
  } else if (physicalQuestion !== 'yes' || physicalQuestion === 'y') {
    alert('Actually I like to work out.');
  }
}

// Question 5
function question5() {
  var chefQuestion = prompt('Am I a chef?');
  chefQuestion = chefQuestion.toLocaleLowerCase();
  console.log('User response to chef question  = ' + chefQuestion);
  if (chefQuestion === 'no' || chefQuestion === 'n') {
    alert('Correct, I am not a chef but wish I was.');
    totalCorrectAnswers++
  } else if (chefQuestion !== 'no' || childrenQuestion !== 'n') {
    alert('Incorrect, I wish I was a chef.');
  }
}

// Question 6: Guess a number
function question6() {
// Generate a random number between 1 - 10
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  var answer = getRandomInt(1, 11);
  console.log('answer = ' + answer);

  // set number of guesses and initial user prompt
  var numTries = 3
  alert('How many children do I have? Guess a number between 1 -10.  You get ' + numTries + ' tries.');

  // Set up for loop to evaluate guessInput, respond if correct, high, or low
  for (var guessNumber = 1; guessNumber <= numTries; guessNumber++) {
    var guessInput = prompt('guess a number');
    var guessAnswer = Number(guessInput);
    console.log('guess answer ' + guessAnswer);
      if (guessAnswer === answer) {
        alert('Outstanding, yes, I have ' + guessAnswer + ' children is correct!!!');
        totalCorrectAnswers++
        break;
      } else if (guessAnswer > answer) {
        alert('too high');
      } else if (guessAnswer < answer) {
        alert('too low');
      }
      if (guessNumber === numTries) {
        alert('you are out of guesses, the correct answer is ' + answer);
    }
    // Response if user guesses exceed number of tries
  }
}

// Question 7 create a loop to check an answer to multiple possibilities and loop to restrict number of guesses
function question7() {
  var guessNumber = 1;
  var maxNumGuess = 6
  var cityNames = ['athens', 'rome', 'barcelona'];
  var nameIsCorrect = false;
  alert('Question 7: Guess one of my top 3 favorite travel cities.  You get ' + maxNumGuess + ' guesses.');
  while (guessNumber <= maxNumGuess && !nameIsCorrect) {
    var nameAnswer = prompt('Guess a city.');
    for (var i = 0; i < cityNames.length; i++) {
      if (nameAnswer.toLowerCase() === cityNames[i]) {
        alert('Wow, that is an excellent guess, yes ' + nameAnswer + ' is one of my favorite cities.');
        nameIsCorrect = true;
        i = cityNames.length;
        totalCorrectAnswers++
        console.log('Correct answer; ' + nameAnswer + 'Guess # ' + guessNumber);
      }
    }
    if (!nameIsCorrect) {
      console.log('guess number ' + guessNumber + ' of ' + maxNumGuess);
      if (guessNumber === maxNumGuess) {
        var city = '';
        for (var i = 0; i < cityNames.length; i++) {
          city += cityNames[i] + ', ';
          console.log('city ' + city);
        }
        alert('You are out of guesses.  The 3 cities were ' + city);
      }
      else {
        alert('Not this time, keep trying');
      }
      console.log('Answer; ' + nameAnswer + '.  Guess # ' + guessNumber);
      guessNumber++;
    }
  }
}
if(confirm) {
  console.log('total correct answers ' + totalCorrectAnswers);
  alert('Thank you ' + userName + ' for taking the quiz.  You got ' + totalCorrectAnswers + ' answers correct out of a possible 7.');
}


