let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let result = document.getElementById("result");
let number = 0;

btn1.addEventListener("click",function(){
    let newNumber = --number;
    result.innerText = newNumber;
    if(newNumber > 0){
        result.style.color= "green";
    } else if(newNumber == 0){
        result.style.color= "white";
    }else{
        result.style.color= "red";
    }
})

btn2.addEventListener("click",function(){
    let newNumber = ++number;
    result.innerText = newNumber;
    if(newNumber > 0){
        result.style.color= "green";
    } else if(newNumber == 0){
        result.style.color= "white";
    }else{
        result.style.color= "red";
    }
})

btn3.addEventListener("click",function(){
    number = 0;
    result.innerText = number;
    if(number == 0){
        result.style.color= "white";
    } else if(number > 0){
        result.style.color= "green";
    }else{
        result.style.color= "red";
    }

})