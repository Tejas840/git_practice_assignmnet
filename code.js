//check prime no.

var num = 13;

var prime = true;

for(var i=2; i<13; i++){
  if(num%i == 0){
    prime = false;
  }
}

if(prime){
  console.log("prime no.")
} else{
  console.log("Not prime no.")
}

// palidrome or // NOT

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
