let num=13;
let count=0;
for(let i=0;i<=num;i++){
if(num%i==0){
count++;
}
}if(count==2){
console.log("yes it is prime")
}else{
console.log("it is not a prime no")
}