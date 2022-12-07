//check prime no.

var num = 13;

var factor = 0;

for(var i=1; i<=num; i++){
  if(num%i == 0){
    factor++;
  }
}

if(factor==2){
  console.log("prime no.")
} else{
  console.log("Not prime no.")
}

//palidrome or // NOT

var str = "naman";

var rev = "";
for(var i=str.length-1; i>=0; i--){
  rev = rev + str[i];
}

if(rev == str){
  console.log("palidrome");
} else {
  console.log("not a palidrome");
}
