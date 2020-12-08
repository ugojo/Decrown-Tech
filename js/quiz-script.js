let userName = document.querySelector(".userName");
function mainQuiz() {
     document.querySelector(".startCol").style.display = "none";
}
function quizMeun() {
     document.querySelector(".col-startQuiz").style.display = "none";
     document.querySelector(".col-meun").style.display = "block";
}
function colTip(){
     document.querySelector(".col-meun").style.display = "none";
     document.querySelector(".col-tip").style.display = "block";
     selfWriter()
}
let facts = [
     {
         fact:"EVERYONE IS BUILT TO BE GREAT ACTION DETERMINES THE REST"
     },
     {
        fact:"ONE OF THE MOST EXPENSIVE THINGS YOU CAN DO IS PAY ATTENTION TO THE WRONG PEOPLE"
    },
    {
        fact:"IF YOU WANT TO GET ANYTHING DONE YOU DO IT YOUR SELF"
    },
    {
        fact:"THOSE WHO ARE FOCUSED ON SELF IMPROVEMENT HAVE NO TIME FOR ENVY"
    },
    {
        fact:"LOVE IS NOT IN THE WORD BUT IN THE ACTION AND HEART"
    },
    {
        fact:"IF YOU DONT KNOW WHO YOU ARE YOU BECOME A WEAPON AGAINST YOURSELF"
    },
    {
        fact:"THE HUSBAND MAY BE THE HEAD OF HOME BUT THE WIFE IS THE HEART OF HOME"
    },
    {
        fact:"IGNORING YOUR PASSION IS SLOW SUICIDE"
    },
    {
        fact:"BE HELPFUL WHEN YOU SEE A PRESON WITHOUT A SMILE GIVE THE YOURS"
    },
    {
        fact:"ELEGANCE IS AND ATTITUDE"
    },
    {
        fact:"SUCCESS IS NOTHING MORE THAN A FEW SIMPLE DISCIPLINES, PRACTIED EVERYDAY"
    }
]   
    let x = 0 ;
    let  speed = 70 ;
    let currentFact = facts.sort(function() {
        return 0.5 - Math.random();
    })
    function selfWriter(){
    
    if ( 1 < currentFact[0].fact.length) {
        
        document.getElementById("demo").innerHTML += currentFact[0].fact.charAt(x);
        x++
        setTimeout(selfWriter ,speed);
    }
}
function startQuiz() {
    document.querySelector(".col-tip").style.display = "none";
    document.querySelector(".col-main").style.display = "block";
}
function showScore(){
    document.querySelector(".col-recentScore").style.display = "block";
}
let closeScore = document.querySelector(".closeRecentScore").onclick = function() {
    
    document.querySelector(".col-recentScore").style.display = "none";
}