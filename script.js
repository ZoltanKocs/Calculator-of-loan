function calculLoan(){
    //console.log("hello ")
    const loanAmountDisplay = document.getElementById("loanAmountDisplay").value;
    const interestRateDisplay = document.getElementById("interestRateDisplay").value;
    const monthToPayDisplay = document.getElementById("monthToPayDisplay").value;

    const interest =(loanAmountDisplay * (interestRateDisplay * 0.01)) / monthToPayDisplay;

    const monthlyPayment = (loanAmountDisplay / monthToPayDisplay + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: € ${monthlyPayment}`;
}
