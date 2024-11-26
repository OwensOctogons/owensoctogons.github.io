function submit(question){
    var input = document.getElementById("guess").value.toLowerCase();
    var correct = false;
    console.log(input)
    switch(parseInt(question)){
        case 1:
            if(input === "pikachu"){
                correct = true;
            }
            break;
        case 2:
            if(input === "whiscash"){
                correct = true;
            }
            break;
        case 3:
            if(input === "quagsire"){
                correct = true;
            }
            break;
        case 4:
            if(input === "drifloon"){
                correct = true;
            }
            break;
        case 5:
            if(input === "guzzlord"){
                correct = true;
            }
            break;
        case 6:
            if(input === "garganacl"){
                correct = true;
            }
            break;
        case 7:
            if(input === "ho-oh"){
                correct = true;
            }
            break;
        case 8:
            if(input === "spoink"){
                correct = true;
            }
            break;
        case 9:
            if(input === "gastly"){
                correct = true;
            }
            break;
        case 10:
            if(input === "mr. mime" || input === "mr mime"){
                correct = true;
            }
            break;
        default:
            break;
    }
    console.log(correct)
    if(correct){
        var nextQ = "number"+(parseInt(question)+1)+".html"
        if(parseInt(question) === 10){
            window.location.replace("pokeword.html")
        }else{
            window.location.replace(nextQ)
        }
    }

}
