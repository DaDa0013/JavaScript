function is_prime(n){
  for(let i=2; i<n;i++){
    if(n%i ==0)
      return false;
  }
  return true;
}

let number=prompt(`숫자를 입력하세요`);
if(is_prime(number)){
  console.log(`${number}는 소수입니다.\n`);
}
else{
  console.log(`${number}는 소수가 아닙니다.\n`);
}