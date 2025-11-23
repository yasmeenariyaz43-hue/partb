let nums=[10,3,7,20,13,2];
function isprime(num){
  if(num<=1)
  console.log("false");
  for (let i=2;i<=Math.sqrt(num);i++){
    if (num%i ===0)
    console.log("false");
  }
  console.log("true");
  
}
const primenumbers=nums.filter(isprime);
console.log(primenumbers);
const sum=nums.reduce((accumulator,currentvalue )=>accumulator+currentvalue,0);
console.log(sum);
const descending=nums.sort((a,b) => b-a);
console.log( descending);
