 var balance = 0;
 const login = document.getElementById("login").addEventListener("click",function () {
    document.getElementById("contain").style.display ="none";
    document.getElementById("transection").style.display ="block";
    document.getElementById("main").style.background ="#fff";
    console.log("i am clicked");
     

});


const deposit = document.getElementById("diposit-btn").addEventListener("click",function(){
    // console.log("i am clicked");
    const deposit_amount = parseFloat(document.getElementById("diposit-amount").value);
    const dipositValue = parseFloat(document.getElementById("dipositValue").innerText);
    var total_deposit  = dipositValue + deposit_amount;
    balance = balance + total_deposit;
    document.getElementById("dipositValue").innerText = total_deposit ;
    document.getElementById("totalValue").innerText = balance;
    document.getElementById("diposit-amount").value = "";
    
})
const withdraw = document.getElementById("withdraw-btn").addEventListener("click",function(){
   
    const withdraw_amount = parseFloat(document.getElementById("withdraw-amount").value);
    const withdrawValue = parseFloat(document.getElementById("withdrawValue").innerText);
    const newbalance = balance - withdraw_amount;
    var total_withdraw = 0;
    if(newbalance< 0){
        document.getElementById("message").style.display = "block";
    }
    else{
        total_withdraw  = withdrawValue + withdraw_amount;
        balance = balance - withdraw_amount;  
        console.log(withdraw_amount,withdrawValue,balance);
    
    }
   
    document.getElementById("totalValue").innerText = balance;
    document.getElementById("withdrawValue").innerText = total_withdraw ;
    document.getElementById("withdraw-amount").value = "";
})
