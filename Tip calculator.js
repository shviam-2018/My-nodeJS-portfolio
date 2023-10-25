const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter the total bill amount: ", function(TotalBill) {
  console.log("User input - Total Bill: " + TotalBill);

  rl.question("How much would you like to tip? ", function(HMP) {
    console.log("User input - Tip Percentage: " + HMP);

    const tipAmount =  Number(TotalBill) + ( Number(TotalBill) * Number(HMP) / 100 );

    console.log("Tip Amount:", HMP);
    console.log("Total Bill with Tip:", tipAmount);

    rl.close();
  });
});