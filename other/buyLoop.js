var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var n = prompt('How many more times? ');                

var bank = 1000;
console.log('you have 1,000 dollars');

var inventory = ['high rule sword', 'potion', 'shield', 'bow'];


//prompt the user if they want to buy an item
var answer = prompt('Would you like to buy a' + inventory[0]);

for(var x=0; x<inventory.length; x++){
    var answer = prompt('Would you like to buy a' + inventory[x]);
}

var counter = 1;
while(counter < 11){
    console.log(counter);
    counter++;
}

var promptSync = require('prompt-sync')();

var money = 1000;
var items = [];

while(money>99){
  console.log("You have $"+ money +" left. Sword = $500, Food = $100");
  var answer = promptSync("Which item do you want to buy? ");
  if(answer == "Sword"){
    money = money - 500;
    items.push("Sword");
    console.log("You brought a Sword!");
  }else if(answer == "Food"){
    money = money - 100;
    items.push("Food");
    console.log("You brought Food!");
  }else{
    console.log("I didn't understand your answer. Try again.");
  }
}



