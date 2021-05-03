function gcd(a,b){
  let temp;
  if(a<b){ //a가 b보다 작은 경우
    temp=a;
    a=b;
    b=temp;
  }
  while(b!=0){
    temp=a%b;
    a=b;
    b=temp;
  }
  return a;
}

function lcm(a,b){
  let Gcd=gcd(a,b);
  let Lcm=a*b/Gcd;
  return Lcm;
}

let a=prompt('첫번째 정수를 입력하세요');
let b=prompt(`두번째 정수를 입력하세요`);

console.log(`최대공약수는 ${gcd(a,b)}, 최소공배수는 ${lcm(a,b)}`);