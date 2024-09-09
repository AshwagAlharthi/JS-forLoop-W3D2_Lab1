/* 

• باستعمال `for loop` قم بطباعة الاعداد الزوجيه الموجودة في نطاق من 25- الى 0.

• باستعمال `for loop`  احسب تربيع الاعداد من 1 - 10.

• باستعمال `loop` قم بطباعة الاعداد الفردية من 1 - 20 .
*/ 

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