// C, Java와 거의 비슷한 조건 분기, 반복문을 활용

// 연습문제 1: 
// for 문과 while문을 이용, 구구단 출력
for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(i, "x", j ," = " , i*j);
    }
}
console.log("for loop end");
let i = 2;
while(i<10){
    let j = 1;
    while(j<10){
        console.log(i, "x", j ," = " , i*j);
        j++;
    }
    i++;
}

// 연습문제 2:
// 역직각삼각형 for, while문 버전
for(let i = 1; i<6; i++){
    for(let j=1; j<=6-i; j++){
        process.stdout.write("*");
    }
    console.log();
}

console.log("for loop end");

let ii = 1;
while(ii < 6){
    let jj = 1;
    while(jj <= 6-ii){
        process.stdout.write("*");
        jj++;
    }
    console.log();
    ii++;
}