
let result=document.getElementById("output")
{
document.getElementById("convert-btn").addEventListener("click",function(){
    let num =parseInt(document.getElementById("number").value);
    result.style.display = 'block'
    if(isNaN(num) || num === " "){
      result.innerHTML= "Please enter a valid number";
  }
  else if(num < 1){
      result.innerHTML= "Please enter a number greater than or equal to 1";
  }
  else if(num > 3999){
      result.innerHTML= "Please enter a number less than or equal to 3999";
  }
  else{
   romanize(num);
  }
  });
}
function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    result.innerHTML= roman;

  }

  