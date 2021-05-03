function count(n){
  let c=1;
  while(n >= 10){
    n/=10;
    c++;
  }
  return c;
}
let number=prompt(`숫자를 입력하시오`);
console.log(count(number));