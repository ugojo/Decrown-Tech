let myInput = document.querySelector(".myInput");

function seeTip(){
     document.querySelector(".col-fact").style.display = "block";
}
function colseFact() {
     document.querySelector(".col-fact").style.display = "none";
}
let startBtn = document.querySelector(".startBtn").addEventListener("click" , function() {
    
    if (myInput.value === "") {
   
       let  startBtn = document.querySelector(".startBtn").innerHTML = "Type your name.."
    }
    else {
        document.querySelector(".col-startQuiz").style.display = "none";
        document.querySelector(".col-meun").style.display = "block";
    }
})
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
        fact:"BE HELPFUL WHEN YOU SEE A PRESON WITHOUT A SMILE GIVE THEM YOURS"
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
    document.querySelector(".logo").style.display = "none";
    showQuestion()
}
/*---------------- highScore -------------------*/
function showScore(){
    document.querySelector(".col-recentScore").style.display = "block";
}
let closeScore = document.querySelector(".closeRecentScore").onclick = function() {
    
    document.querySelector(".col-recentScore").style.display = "none";
}

/* Question Part */
let questions = [
     {
        question: 'where is the world oldest University located ',
        opt1: 'Australia',
        opt2: 'Europe',
        opt3: 'Africa',
        opt4: 'Asia',
        answer: 3,
        hint: 'The University of AL-Qarawinyyin is the oldest existing,' +
         'continually operating na dfirst degree-awarding educational instition in the world'
     },{
       question: 'How much percent of Elephant do Africa own',
       opt1: '70 - 85%',
       opt2: '20  -30%',
       opt3: '5 - 20%',
       opt4: '100%',
       answer: 1 ,
       hint: 'Afican has over 85% of the world\'s elephants,which can weigh up to 7 tons and over 99% of the' +
        'remainig liones are on the African continent'
     },
     {
         question: 'The richest Africa man is from which of these county',
         opt1: 'South africa',
         opt2: 'Ghana',
         opt3: 'Nigeria',
         opt4: 'Algeria',
         answer: 3,
         hint: 'Aliko Dangote is the richest man in Africa and he is a Nigerian'
     }

    ]
/*------------- show Question--------------------*/
let score = 0;
let worngAws = 0;
let questionLen = questions.length ;
let currentIndex = 0 ;
let showLength ;
let showingQuestion = document.querySelector(".question");
    let optionsBtn = Array.from( document.querySelectorAll(".option"));
    let currentQuestion = [...questions].sort(function() {
        return 0.5 - Math.random();
    }) ;

let showingNow = 1 ;

 function showQuestion() {

    showingQuestion.innerHTML = currentQuestion[currentIndex].question ;
    optionsBtn.forEach(option => {
        
        let optdata = option.dataset['opt'];

       option.innerHTML =  currentQuestion[currentIndex]['opt' + optdata];

       showLength = document.querySelector(".questionNum").innerHTML = showingNow +" " + 'of' + " " + questionLen; 
    });

/*------- checking for correct Answer ------------*/
   
let correct = false ;
let accpectingAnws = true ;
  optionsBtn.forEach(option => {
      
    option.addEventListener("click", checkAnswer);
  });

  function checkAnswer(e) {
      
   let  currentTarget = e.target ;
   let pickedAnswer = currentTarget.dataset['opt'];

 while (accpectingAnws) {
      
    accpectingAnws = false ;

   if ( pickedAnswer == currentQuestion[currentIndex].answer ) {
       score++ ;
       correct = true;
      currentTarget.className += ' correct';
      
      document.querySelector(".score").innerHTML ='socre :' + score;
   }else{
       worngAws++;
       correct = false ;
       currentTarget.className += ' worng';
        
       document.querySelector(".worngAnw").innerHTML = 'worng :' + worngAws ;
   }
   if (!accpectingAnws) {

       document.querySelector(".col-fact-two p").innerHTML = currentQuestion[currentIndex].hint ;
       document.querySelector(".col-fact p").innerHTML = currentQuestion[currentIndex].hint ;
   }
  }
 }
}
/* ------ Nexting Question ----------*/
function nextQuestion() {
     currentIndex++ ; 
     showingNow++ ;
    
/*-------- If Length is Less or Equal To Zero --------*/
if (currentIndex >= questions.length - 1) {
    
    document.querySelector(".nextBtn").innerHTML = "submit";
}
if ( currentIndex == questions.length) {
    
    submitQuestion();
    storeScore()
    currentIndex -- ;
}

     showLength.innerHTML = showingNow + " " + 'of' + " " + questionLen;
     showQuestion(currentIndex);

     for (let i = 0; i < optionsBtn.length; i++) {
         
        optionsBtn[i].className = "";
        optionsBtn[i].className = " option";
     }
}
/*------ Submitting the Question ----------- */
function submitQuestion() {
    
    document.querySelector(".col-submit").style.display = "block";
    document.querySelector(".playerName").innerHTML = myInput.value ;
    document.querySelector(".playerScore").innerHTML = score ;
    document.querySelector(".worngAns").innerHTML = worngAws ;
}
/*--------  Store Submited  Score ------------*/

 function  storeScore() {
    
    let playerScores;
    let recentScore = {
                      name : myInput.value,
                      scores : score
                       }

    if ( localStorage.getItem("playerScores") === null) {
        
        playerScores = [];
    }else{
        playerScores = JSON.parse( localStorage.getItem("playerScores"))
    }
       playerScores.push(recentScore);

     localStorage.setItem("playerScores", JSON.stringify(playerScores) );
   
 }
 if ( JSON.parse( localStorage.getItem("playerScores") !== null)) {
        
    let recentScores = JSON.parse( localStorage.getItem("playerScores"));
    
      recentScores.forEach( score => {

      let  newList = document.createElement("li");
          newList.className = 'myScore' ;
           newList.innerHTML = score.name;
       
       let highScore = document.createElement("li")
           highScore.className = 'highscore' 
           highScore.innerHTML = score.scores;
             
      document.querySelector(".score-box p").appendChild(newList)
      document.querySelector(".score-box p").appendChild(highScore);
        

    });
   }
   function clearScore() {
       
    localStorage.removeItem("playerScores")
    return window.location.reload()
   }
