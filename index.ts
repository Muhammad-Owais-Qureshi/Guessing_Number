import inquirer from "inquirer";
import chalk from "chalk"
import showBanner from "node-banner"

let score = 0;
let play = true;
(async () => {
    await showBanner('Guessing Game', 'This is a suitable tagline' ,"green" );
})();

async function GuessingNumber (){
   
  while (play){

  
   let random = Math.ceil((Math.random()*2 )+1)



  const answer = await inquirer.prompt([
    {
        name:"usernumber",
        type:"number",
        message:"gussing some number 1 to 5"
    }
 ])
 console.log("your number is",+answer.usernumber)

 if(answer.usernumber === random){
    console.log(chalk.green("you win"))
    score += 10;
    console.log(chalk.yellow`${score}`)
 }
 else{
    console.log( chalk.red("try agian"))
 play = false; }
}

}
setTimeout(()=>{
    GuessingNumber()
},1000)
