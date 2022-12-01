let str = "asdfgfdsa";
let flag = 0;
for(let i=0, j=str.length-1; i<j; i++, j--){
  if(str[i]!=str[j]){
    flag+++;
    break;
  }
}
if(flag == 0){
  console.log("Yes")
}else{
  console.log("No");
}