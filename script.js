let randomNumber = Math.floor(Math.random() * 11)
function myFunction(){
    let x = document.getElementById("numb").value;
    let text;


    if(x < randomNumber){
        text = 'try bigger number'
    } else if(x > randomNumber){
        text = 'try smaller number'
        
    }else if(x === randomNumber ){
        text = 'you win'
    }else{
        text = 'enter a number'
    }

    document.getElementById("msg").innerHTML = text;

   

};

