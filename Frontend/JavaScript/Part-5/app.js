// Dice Roll

function dice(){
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

dice();





// let guess= parseInt(prompt("Guess a number Between 1-10 : "));

// while(true){
//     if(guess == random){
//         console.log("You WON !! , The Number was "+ random)
//         break;
//     }
//     else{
//         console.log("Wrong Guess PLease Try Agian !! :)")
//         guess= parseInt(prompt("Guess a number Between 1-10 : "));
//     }
// }
// console.log("Thanks For Playing");