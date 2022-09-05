// Your code here:
function milksong(){
    var phrase="";
    for(let i=99;i>=0;i--){
        if(i===1){
            console.log(i+' bottle of milk on the wall, '+i+' bottle of milk.\n'+
                        'Take one down and pass it around, no more bottles of milk on the wall.')
        }else if(i===0){
            console.log('No more bottles of milk on the wall, no more bottles of milk.\n'+ 
                        'Go to the store and buy some more, 99 bottles of milk on the wall.')
        }else{
            console.log(i+' bottles of milk on the wall, '+i+' bottles of milk.\n'+
            'Take one down and pass it around, '+(i-1)+' bottles of milk on the wall.')
        }
    }
}
milksong();
function addAllFamilyLuckyNumbers(anArray){
    var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  
    //To-Do: loop and add; consider nested loops
    //Hint: use the anArray variable to get all of the lucky numbers
    
    return sumOfAllLuckyNumbers;
  }
  
  //Enter all your code here:
  
  
  //Do not make changes below:
  console.log(addAllFamilyLuckyNumbers(family.members)); 

  Jimmy Doe, 13, male, lucky numbers: 1, 2, 3, 4; significant other: null

 for(let key in person){
    // Code goes here
    console.log(key,":",person[key]);
}