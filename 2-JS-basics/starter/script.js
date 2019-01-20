
//CODE CHALLENGE
// var firstName = "Jesse";
// var age = 16;
//
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')

//2 teams, 3 games
//Calculate avg score for each team
//Decide which team has highest average and print winner to console (include score) - beware of draw


//CODE CHALLENGE
// var johnTeamScores = (84 + 103 + 99) / 3;
// var markTeamScores = (98 + 110 + 100) / 3;
//
// console.log(markTeamScores, johnTeamScores);
//
// if (johnTeamScores > markTeamScores) {
//   console.log('John\'s team wins! ' +  `${johnTeamScores}`)
// } else if (johnTeamScores < markTeamScores) {
//   console.log('Mark\'s team wins! ' +  `${markTeamScores}`)
// } else {
//   console.log('It was a draw!')
// }

//Arrays

// var names = ['Jesse', 'Heather', 'Cat', 'Becca', 'Andy'];
// var years = new Array(1983, 1983, 1981, 1988, 1987);
// console.log(names[0]);


//CODE CHALLENGE ARRAYS
//John went to 3 restaurants  $124, $48, $268
// Tip is 20% when under $50, 15% when over $50-$200, 10% when over $200
// 2 arrays, one with the tip amounts, one with total bills

var bills = [124, 48, 268];

function tipCalculator(amount) {
  if (amount <= 50) {
    return amount * .20;
  } else if (amount > 50 && amount < 200) {
    return amount * .15;
  } else {
    return amount * .10;
  }
}

var tips = [
            tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])
          ];

var totalBills = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(tips, totalBills);
