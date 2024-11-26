var qNum = 1
var questions = ["What was the first D&D Class that Owen ever played",
"Owen has a scar on his arm. What letter of the alphabet does he think it’s shaped like",
"What is Owen’s (current) favourite movie",
"(Thanks for the question Mango) What was Owen’s favorite D&D Character he’s played",
"What was the first “Username” Owen thought up for himself",
"What is Owen’s favourite song",
"What is Owen’s degree in",
"What is Owen’s favourite TV Series",
"What is Owen’s favourite Anime character"]
var answers = [0,-1,1,3,3,3,3,4,7] //Qnum-Answer
var choices = [["Bard","Fighter","Barbarian","Ranger"],
["C","O","W","S"],
["Shrek","Everything Everywhere All At Once","The Sorcerer's Apprentice","Parasite"],
["Constance - Firbolg Druid","Milstone - Tiefling Bard", "Penumbra - Changeling Cleric", "Shen - Kalashtar Monk"],
["RadMcDad","TheCanadianPotato","TognaBologna","OwenTheTinCan"],
["Pollo Asado - Ween","She's My Collar - Gorillaz","Death of a Bachelor - Panic! at the Disco","Sandcastle Kingdoms - NateWantsToBattle"],
["Nursing","Chemistry","Software Engineering","Computer Science"],
["The Backyardigans", "The Sopranos", "Riverdale", "Star Trek: The Next Generation"],
["Gojo Satoru - Jujitsu Kaisen","Koro-Sensei - Assassanation classroom","Kyojuro Rengoku - Demon Slayer","Rock Lee - Naruto"]]
var tooltips = [["Of course it is.","Basic ass answer","Was close to picking but I like spellcasters more","Basic ass answer 2 electric boogaloo"],
["If you look at it at the right angle i guess…","Notice how the options spell cows?","Wanna see it?","Eh, not really."],
["I know what you think of me","God tier movie. No questions asked.","My first favourite movie!","Also a god tier movie but close second."],
["This was a character that died too soon. Penumbra is a close second but Constance has a special place in my heart.","Not quite. This was the first character I ever played though.","Very very close second.","Shen was fun, and out of all my characters has the most well thought out backstory. Thanks Jay :) "],
["This just came to me one day, like a vision from God.","Fun fact: I spent 4 hours on a bus ride to Montana thinking up this really creative name.","Ok but if Bologna can be spelled that way why can’t Tony. or why isn’t it spelled Bolony I hate english. Makes fun usernames though","Just a fun play on my first and last names, but not the first."],
["<a href=\"https://www.youtube.com/watch?v=Q7mgLe4h_e4\">Go listen to it - you will not regret it.</a>","Great song - close second.","First song I sang in front of a crowd. Holds a special place in my heart. (also one of the only songs of Brendon Urie’s That my vocal range can follow) ","Was my favourite in High School"],
["I was very close to doing this in grade 12 then I had to take Bio and i went nah.","Why would anyone do this? Meth. that’s why","They’re losers","I like computers, I like science, uh computer science."],
["At one point. yes","I was forced to watch this by my old roommate","I have watched too much of this show.","Revolutionary TV show just so everyone knows."],
["Sexy","This character / show made me cry. I will not spoil anything, but damn.","Did not make me cry. But is a close second","Wish he was rock me."]]

var selection = -1

function setupQuestion(){
    document.getElementById("Question_Counter").innerHTML = "Question " + String(qNum)
    document.getElementById("Question").innerHTML = questions[qNum-1]
    document.getElementById("1").innerHTML = choices[qNum-1][0]
    document.getElementById("2").innerHTML = choices[qNum-1][1]
    document.getElementById("3").innerHTML = choices[qNum-1][2]
    document.getElementById("4").innerHTML = choices[qNum-1][3]
    document.getElementById("Tooltip").innerHTML = ""
    document.getElementById("Sub").innerHTML = "Submit"
    document.getElementById("Sub").onclick = checkAnswer
}
function redirect(){document.location.href="last_question.html"}
function wrongAnswer(){ 
    document.getElementById("Question_Counter").innerHTML = "Incorrect!"
    document.getElementById("Question_Counter").style.color = "red"
    document.getElementById("Sub").innerHTML = "Reset"
    document.getElementById("Sub").onclick = setupQuestion
    document.getElementById("Tooltip").innerHTML = tooltips[qNum-1][selection-1]
    qNum = 1
}

function correctAnswer(){

    if(qNum < 9){
        document.getElementById("Question_Counter").innerHTML = "Correct!"
        document.getElementById("Question_Counter").style.color = "green"
        document.getElementById("Sub").innerHTML = "Next Question"
        document.getElementById("Sub").onclick = setupQuestion
        document.getElementById("Tooltip").innerHTML = tooltips[qNum-1][selection-1]
        qNum++
    }else{
        document.getElementById("Question_Counter").innerHTML = "Correct!"
        document.getElementById("Question_Counter").style.color = "green"
        document.getElementById("Sub").innerHTML = "Last Question"
        document.getElementById("Sub").onclick = redirect
    }
}

function atLeastOneRadio() {
    return (document.querySelector('input[type=radio]:checked') != null);
}

function checkAnswer(){
    console.log("got here")
    if(atLeastOneRadio()){
        selection = parseInt(document.querySelector('input[name="choices"]:checked').value)
        var answer = qNum-selection
        
        console.log(selection)
        console.log(answers[qNum-1])
        if(answer === answers[qNum-1]){
            correctAnswer();
        }else{
            wrongAnswer();
        }
    }
}

function finalQuestion(){
    var answer = 42
    var input = document.getElementById("answertolifetheuniverseandeverything").value
    if(input==answer){
        document.getElementById("Question_Counter").innerHTML = "CORRECT!"
        document.getElementById("Question_Counter").style.color = "green"
        document.getElementById("Keyword").innerHTML = "Keyword: Spectacular! Bonus question: What is the factored form of the equation used to find x"
        document.getElementById("Keyword").style.color = "green"
    }else{
        document.getElementById("Question_Counter").innerHTML = "INCORRECT"
        document.getElementById("Question_Counter").style.color = "red"
    }
}
