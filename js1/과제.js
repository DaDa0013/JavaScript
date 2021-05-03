//1번
let number=prompt();
if (number>=50){
  console.log("50이상");
}
else{
  console.log("50이하")
}

//2번
// let number=prompt();
// if(number%3==0){
//   console.log("3의 배수");
// }
// else{
//   console.log("3의 배수 아님")
// }

// //3번
// let grade=prompt("학년을 입력하시오");
// let score=prompt("점수를 입력하시오");
// if(grade<4){ 
//   if(score<0||score>100){
//     console.log("제대로 입력하시오")
//   }
//   else if(score>=60){
//     console.log("합격입니다.");
//   }
//   else{
//     console.log("불합격입니다.")
//   }
// }
// else{
//   if(score<0||score>100){
//     console.log("제대로 입력하시오")
//   }
//   else if(score>=70){
//     console.log("합격입니다.");
//   }
//   else{
//     console.log("불합격입니다.")
//   }
// }
// //4번
// let numbers=new Array();
// for(let i=0;i<3;i++){
//   numbers[i]=prompt("수를 입력하시오");
// }

// let max=numbers[0];
// let min=numbers[0];
// let sum=0;
// let av=0;

// for(let i of numbers){
//   if(max<i){
//     max=i;
//   }
// }
// for(let i of numbers){
//   if(min>i){
//     min=i;
//   }
// }

// for(let i of numbers){
//   sum+=Number(i);
// }

// av=sum/3;
// console.log(`최댓값: ${max}, 최솟값: ${min}, 합계: ${sum}, 평균: ${av}`)

