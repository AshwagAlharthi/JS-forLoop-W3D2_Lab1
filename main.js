// Question No1
for(let i=0 ; i< 25 ; i++){
    if (i % 2 == 0){
        console.log(i);
    }else{
        continue;
    }
}


// Question No2
for(let i=0 ; i<=10 ; i++){
    console.log(i * i);
}


// Question No3
for(let i=0 ; i<20 ; i++){
    if(i % 2 == 0){
        continue;
    }else{
        console.log(i);
    }
}


// Question No4
let firstNumber = 0, secondNumber = 1, nextNumber;
for(let i=0 ; i<10 ; i++){
    console.log(firstNumber);
    nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
}

