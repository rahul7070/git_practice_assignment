let n = 7;
let flag = 0;
for(let i=2; i<=n/2; i++){
  if(n%i==0){
    flag++;
    break;
  }
}
if(flag==0){
  console.log("Yes");
}else{
  console.log("No");
}