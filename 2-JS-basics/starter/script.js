
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

// var bills = [124, 48, 268];
//
// function tipCalculator(amount) {
//   if (amount <= 50) {
//     return amount * .20;
//   } else if (amount > 50 && amount < 200) {
//     return amount * .15;
//   } else {
//     return amount * .10;
//   }
// }
//
// var tips = [
//             tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])
//           ];
//
// var totalBills = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
// console.log(tips, totalBills);


//CODE CHALLENGE OBJECTS

//1. Create objects for Mark and John containing fullName, mass, height
//2. Create method for calculating BMI = mass / height^2
//3. Log to console whoever has largest BMI, fullName,

// var john = {
//   fullName: "John Smith",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//      this.bmi = this.mass / (this.height * this.height);
//      return this.bmi;
//   }
// }
// var mark = {
//   fullName: "Mark Jones",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// }
//
// if (john.calcBMI() > mark.calcBMI()) {
//   console.log( john.fullName + '\'s BMI ' + 'is greater than ' + mark.fullName + '\'s ' + john.bmi );
// } else if (john.bmi < mark.bmi) {
//   console.log( mark.fullName + '\'s BMI ' + 'is greater than ' + john.fullName + '\'s ' + mark.bmi );
// } else {
//   console.log("The BMI's are equal.");
// }


//LOOPS

// for (i = 0; i <= 20; i+=2) {
//   console.log(i);
// }

// var john = ['John', 'Smith', 1998, 'teacher', false, 'blue'];

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }
// var i = 0;
// while(i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// var john = ['John', 'Smith', 1998, 'teacher', false, 'blue'];
// for (i = 0; i<john.length; i++) {
//   if (typeof john[i] !== 'string' ) continue;
//   console.log(john[i]);
// }
//
// for (i = 0; i<john.length; i++) {
//   if (typeof john[i] !== 'string' ) break;
//   console.log(john[i]);
// }

// for (i = john.length-1; i >= 0; i--) {
//   console.log(john[i]);
// }


//CODE CHALLENGE LOOPS

//.2 tip for under $50
//.15 tip for 50-under $200
//.10 tip for $200+

//1. Create object with an array for bill values
//2. Add method to calculate tip
//3. This method should include a loop to iterate over all the bills and do the tip calculations
//4. For output: create new array containing all tips & array containing total bills

// var mark = {
//   bills: [124, 48, 268, 180, 42],
//   calcTip: function() {
//     this.tips = [];
//     this.totalBills = [];
//
//     for (var i = 0; i < this.bills.length; i++) {
//       var percentage;
//       var bill = this.bills[i];
//
//       if (bill < 50) {
//         percentage = .2;
//       } else if (bill >= 50 && bill <= 200 ){
//         percentage = .15;
//       } else {
//         percentage = .10;
//       }
//
//       this.tips[i] = bill * percentage;
//       this.totalBills[i] = this.tips[i] + bill;
//     }
//   }
// }
//
// mark.calcTip();
//
// console.log(mark);
