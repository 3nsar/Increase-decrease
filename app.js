let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let result = document.getElementById("result");
let number = 0;

btn1.addEventListener("click",function(){
    let newNumber = --number;
    result.innerText = newNumber;
})

btn2.addEventListener("click",function(){
    let newNumber = ++number;
    result.innerText = newNumber;
})
/*
btn3.addEventListener("click",function(){
    result.innerText = 0;
})*/