//import/require libraries
var readLineSync = require('readline-sync');
const chalk = require('chalk');

//initialise variable score
var score = 0;

//initial welcome to the User
console.log(chalk.bold.underline.blue("WELCOME TO F.R.I.E.N.D.S Quiz !"));
userName = readLineSync.question("Your Name: ");

//instructions to the user for the game
console.log(chalk.bold.underline.blue("WELCOME " + userName.toUpperCase() + "!"));
console.log(chalk.inverse.blueBright("+1 for each Correct ans, -0.5 for each Wrong ans"));
console.log("----------------------------------------------");

//score comment function
function checkScoreandComment(scr){
  console.log("----------------------------------------------");
  console.log("----------------------------------------------");
  console.log(userName.toUpperCase(),"'s Final Score:", scr);
  if(scr>=3){
    console.log(chalk.italic.green("Great time with you", userName.toUpperCase(), ". You are a fan of F.R.I.E.N.D.S !"));
  }
  else if(scr>=1){
    console.log(chalk.italic.yellow("Good try, watch the series again",userName.toUpperCase()," 😂"));
  }
  else{
    console.log(chalk.italic.red("So you haven't watched F.R.I.E.N.D.S? Go watch it ",userName.toUpperCase()," ! It's worth it 👌"))
  }
}

//main game function
function playGame(ques, options, ans) {
  console.log(ques);
  var userAnswer = readLineSync.keyInSelect(options, "Your Choice");
  // console.log(userAnswer);
  // console.log(ans);
  if(userAnswer+1 === 0){
    console.log(chalk.yellow("Question skipped, smart choice, or was it?"));
  }else if(userAnswer+1 === ans) {
    console.log(chalk.green("Yes, that's the right answer!"));
    score++;

  } else {
    score -= 0.5
    console.log(chalk.red("Naa, that's the wrong answer!"));
  }
  
  console.log("Your Score: ", score)
  console.log("----------------------------------------------");
  // console.log(ans);
}

//vars and array of questions
var ques1 = {
  ques: "How many times does Ross get divorced?",
  options: ["1", "2", "3"],
  ans: 2
};
var ques2 = {
  ques: "How many sisters does Joey have?",
  options: ["6", "7", "8"],
  ans: 2
};
var ques3 = {
  ques: "What is the name of the woman Ross goes home with in 'The One Where Ross and Rachel Take a Break'?",
  options: ["Chloe", "Sophie", "Mandy"],
  ans: 1
};
var ques4 = {
  ques: "In Phoebe's music video for 'Smelly Cat', what colour is the cat?",
  options: ["Grey", "Blonde", "Black"],
  ans: 1
};
var ques5 = {
  ques: "According to Chandler, back in college when Ross fell in love with Carol, he bought her a ridiculously expensive crystal what?",
  options: ["Frog", "Swan", "Duck"],
  ans: 3
}
arrques = [ques1, ques2, ques3, ques4, ques5]

// initiate the game, driver function
for (var i = 0; i < arrques.length; i++) {
  playGame(arrques[i].ques, arrques[i].options, arrques[i].ans)
}

//check the final score scored by user and comment
checkScoreandComment(score);