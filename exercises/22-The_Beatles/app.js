function sing(){
    var songes="";
    for(let i=0;i<=11;i++){
        if(i===4){
            songes+="whisper words of wisdom, "
        }else if(i===10){
            songes+="there will be an answer, "
        }
        else if(i===11){
            songes+="let it be";
        }
        else{
         songes+="let it be, ";
        }
        }
     return console.log(songes);
}
sing();
//Your code above ^^^
//console.log(sing()); 