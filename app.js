
// //Q1
// // AGE CALCULATOR
// let YourBirthday = prompt("Enter a date (YYYY-MM-DD format):");

// let YourDate = new Date(YourBirthday);

// let today = new Date();

// let diff =  today.getTime() - YourDate.getTime()

// let age = diff / (1000 * 3600 * 24 * 30 * 12);

// console.log(age);

// //Q2
//  //TOSS GAME
//  let player1 = prompt("Enter Your Name");
//  let player2 = prompt("Enter Your Name");
//  let player1dv = prompt("Enter 0 or 1");
//  let player2dv = prompt("Enter 0 or 1");
 
//  let toss = Math.random() * 2;
//  let roundoff = Math.floor(toss)
 
//  if( user1ch = roundoff){
//      console.log(` ${player1} You Are The Winner ${roundoff}`);
//  } else {
//      console.log(`${player2} You Are The Winner ${roundoff}`);
//  }
 



//Q2
 //RAMDOM PASSWORD GENERATER

// let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let lowercase = 'abcdefghijklmnopqrstuvwxyz';
// let special = '!@#$%^&*';
// let numbers = '0123456789';

// let  password = '';

// for (let i = 0; i < 4; i++) {
//     let randomIndex = Math.floor(Math.random() * uppercase.length);
//     password += uppercase[randomIndex];
// }

// for (let i = 0; i < 4; i++) {
//     let randomIndex = Math.floor(Math.random() * lowercase.length);
//     password += lowercase[randomIndex];
// }


// for (let i = 0; i < 4; i++) {
//     let randomIndex = Math.floor(Math.random() * special.length);
//     password += special[randomIndex];
// }

// for (let i = 0; i < 4; i++) {
//     let randomIndex = Math.floor(Math.random() *numbers.length);
//     password += numbers[randomIndex];
// }



// console.log(password);