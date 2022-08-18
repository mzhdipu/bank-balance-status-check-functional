
let depositInput = document.getElementById("deposit-input");
let btnDeposit = document.getElementById("btn-deposit");

depositInput.addEventListener("keyup", function(){

        if(depositInput.value.length > 0 && !isNaN(depositInput.value)){
            btnDeposit.removeAttribute("disabled", true);
        }
        else{
            btnDeposit.setAttribute("disabled", true)
        }
})



// Deposit Option 
document.getElementById("btn-deposit").addEventListener("click", function(){
   
    // get new deposit value form input box
    let newDeposit = getInputValue("deposit-input")
    // get previous deposit value
    let previousDeposit = getInnterTextValueById("deposit-amount")
    // Total Deposit value;
    let totalDepositAmount = newDeposit + previousDeposit;
    // Set Deposit Total
    updateInnterText("deposit-amount", totalDepositAmount.toFixed(2))

    // get previous balance
    let previousBalance = getInnterTextValueById("current-balance")
    // get current balance 
    let currentBalance = previousBalance + newDeposit;
    // set Balance Total
    updateInnterText("current-balance", currentBalance.toFixed(2));
})




let withdrawInput = document.getElementById("withdraw-input");
let btnWithdraw = document.getElementById("btn-withdraw");

withdrawInput.addEventListener("keyup", function(){

        if(withdrawInput.value.length > 0 && !isNaN(withdrawInput.value)){
            btnWithdraw.removeAttribute("disabled", true);
        }
        else{
            btnWithdraw.setAttribute("disabled", true)
        }
})


// Withdraw option 
document.getElementById("btn-withdraw").addEventListener("click", function(){

    // get input value
    let newWithdraw = getInputValue("withdraw-input")
    // get previous withdraw
    let previousWithdraw = getInnterTextValueById("withdraw-amount");

    // get current balance 
    let currentBalance = getInnterTextValueById("current-balance");

    if(newWithdraw > currentBalance){
       alert("You do not sufficient balance")
       return;       
    }

     // get withdraw total
     let totalWithdraw = previousWithdraw + newWithdraw;
     // set withdraw total 
     updateInnterText("withdraw-amount", totalWithdraw.toFixed(2));


    // total current balance after withdraw
    let totalCurrentBalance = currentBalance - newWithdraw;
    // set uodate total balance
    updateInnterText("current-balance", totalCurrentBalance.toFixed(2));

    
})

