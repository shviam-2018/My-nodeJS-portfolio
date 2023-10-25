const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter the total amount: ", function(TA) {
  console.log("User input - Total Amount: " + TA);

  rl.question("How many people would you like to split amongest? ", function(SA) {
    console.log("User input - Splite among: " + SA);

    const PH =  Number(TA) / Number(SA);

    console.log("total Amount:", TA);
    console.log("Per Head:", PH);

    rl.close();
  });
});
