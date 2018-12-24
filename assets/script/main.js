 //    global var
 var $timerElem = $("#timer");
 var score = 0;
 var alyssa = {
   fruit: ["banana", "mango", "grape", "peach"],
   item: ["TV-remote", "Daddy's Wallet", "blanket", "iPad"],
   song: [
     "Patito Juan",
     "The birthday song",
     "Baby shark",
     "Master of puppet"
   ]
 };

 var stopTime;

 var favFruit =
   'Bananas are the favorite fruit of Alyssa! FUN FACT: she calls them "caca"';
 var favItem = "Alyssa loves Dady" + "'" + "s wallet!!!, a few cards were missing last time she play with it... oh wel...!";
 var favSong =
   "Baby shark doo doo doo is a hit among babies including Alyssa!!! Good Job!!!";

 // start game
 // generate1();
 hideAll();

 // global functions
 function hideAll() {
   $("#fruitMessage").hide();
   $("#itemMessage").hide();
   $("#songMessage").hide();
   $("#wrongMessage").hide();
 }

 function playAgain() {
     score = 0;
     startQuestion1();
 }

 function startQuestion1() {
   generate1();
   startUserTimer("#fruitMessage");
 }
 function startQuestion2() {
   generate2();
   startUserTimer("#itemMessage");
 }
 function startQuestion3() {
   generate3();
   startUserTimer("#songMessage");
 }

 function stopTimer() {
   clearTimeout(stopTime);
   $timerElem.html(15);
 }
// timer function
 function startUserTimer(correctAnswerElem) {
    var counter = 15;
    stopTime = setInterval(function() {
      $timerElem.html(counter);
      --counter;
      if (counter === 0) {
        stopTimer();
        $(correctAnswerElem).show();
        $("#scoreHere").html("Score:" + " " + score);
      }
    }, 1000);
  }

// generate questions 
 function generate1() {
   $("#newGame").hide();
   $("#fruitMessage").hide();
   $("#itemMessage").hide();
   $("#songMessage").hide();
   $("#mainQuestion").text("What is Alyssa's favorite fruit?");
   $("#firstOption").text(alyssa.fruit[0]);
   $("#secondOption").text(alyssa.fruit[1]);
   $("#thirdOption").text(alyssa.fruit[2]);
   $("#fourthOption").text(alyssa.fruit[3]);
 }

 

 function generate2() {
   $("#fruitMessage").hide();
   $("#itemMessage").hide();
   $("#songMessage").hide();
   $(
     "#mainQuestion firstOption secondOption thirdOption fourthOption"
   ).empty();
   $("#mainQuestion").text("What is Alyssa's favorite item?");
   $("#firstOption").text(alyssa.item[0]);
   $("#secondOption").text(alyssa.item[1]);
   $("#thirdOption").text(alyssa.item[2]);
   $("#fourthOption").text(alyssa.item[3]);
 }

 function generate3() {
   $("#fruitMessage").hide();
   $("#itemMessage").hide();
   $("#songMessage").hide();
   $(
     "#mainQuestion firstOption secondOption thirdOption fourthOption"
   ).empty();
   $("#mainQuestion").text("What is Alyssa's favorite song?");
   $("#firstOption").text(alyssa.song[0]);
   $("#secondOption").text(alyssa.song[1]);
   $("#thirdOption").text(alyssa.song[2]);
   $("#fourthOption").text(alyssa.song[3]);
 }

//  getting the values from user input
 $(".option1").on("click", function(event) {
   var buttonValue = this.innerHTML;
   if (buttonValue === alyssa.fruit[0]) {
     score++;
     stopTimer();
     $("#fruitMessage").show();
   }
   else if (buttonValue === alyssa.item[1]) {
     score++;
     stopTimer();
     $("#itemMessage").show();
   }
   else if (buttonValue === alyssa.song[2]) {
     score++;
     $("#songMessage").show();
     stopTimer();
     $("#scoreHere").html("Score:" + " " + score);
   } 
   else {
     $("#wrongMessage").show();
     setTimeout(function() {
       $("#wrongMessage").hide();
     }, 2000);
   }
 });