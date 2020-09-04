//PROGRAM1:
let a="letsupgrade";
console.log(a);
let index=a.indexOf("s");
console.log(index);
console.log(a);
console.log(a.indexOf("s"));
//PROGRAM 2:
let min=30;
console.log(min);
 seconds=min*60;
 console.log("30"+" "+"min"+" "+"into sec is given as "+seconds+" "+"sec");
 //PROGRAM 3
 var array=[-10,-20,-30,-40,-50];
 var found=array.find(function(element){
     return element>0;
 } );
console.log(found);
//PROGRAM 4
let arr=['Apps','Apple','Animals','Fruits','Cat','Dog','Banana'];
 arr.forEach(function call(value){
     if(value.toLowerCase().includes("a")){
     console.log(value)
}
 });
//PROGRAM 5
var array=["Animals","Fruits","Vegetables"];
console.log(array);
revarr=["Animals","Fruits","Vegetables"].reverse();
console.log(revarr);