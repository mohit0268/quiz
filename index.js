const Readlinesync=require("readline-sync");
const chalk=require("chalk");


    var score=0;
    console.log("welcome to this quiz!");

    var username=Readlinesync.question("May I have your name please!");
    console.log
    console.log(chalk.yellowBright.bold("Welcome "+ username+"!\n" + "Do you know Mohit?Y/N"    ));



    function play(question,answer){
    var userAnswer=Readlinesync.question(question);
        if (userAnswer.toUpperCase()===answer.toUpperCase()){
        console.log(chalk.greenBright.bold("Yes you were right!"));
        score=score+1;
    }
        else{
        console.log(chalk.redBright.bold("oops! you were wrong!"));
        score=score-1;
    }
        console.log("Your score is : ",score);
        console.log("---------------")
    }
        var question=[
        {question:'In which city I am living In?',answer:'jaipur'},
        {question:'which sports do I like the most?',answer:'football'},
        {question:'what is my favourite food?',answer:'Burger'},
        {question:"what is my DOB(dd-mm-yyyy)?",answer:"26-01-2000"},
        {question:'Do I wear spectacles?',answer:'no'}
     
    
        ];
        for(var i=0;i<question.length;i++){
            play(question[i].question,question[i].answer);
        }
            if (score==5){
            console.log("perfect")
        }
            else if(score<=4){
            console.log("great!")
        }
            else{
            ("You lose!")
        }
            console.log(chalk.yellowBright.bold("Total score is :", score))

