const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render=Matter.Render;

var engine,world;
var bg;
var gameState = 0;
var score =0;
var cancerL,capricornusL,geminiL,sagittariusL,taurusL;
var clue0 = 0;
var clue1 = 0;
var clue2 = 0;
var clue3 = 0;
var clue4 = 0;
var constellation = null;
var border,border2,border3,border4,border5;
var wrong = 0;
var right = 0;

function preload(){
    bg = loadImage("bg.jfif");
    cancerL = loadImage("Images/cancer complete.png");
    capricornusL = loadImage("Images/capricornus complete.png");
    geminiL = loadImage("Images/gemini complete.png");
    sagittariusL = loadImage("Images/sagittarius complete.png");
    taurusL = loadImage("Images/taurus complete.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    quiz = new Quiz1();
    question = new Question();
}

function draw(){
    background(bg);
    Engine.update(engine);
    question.display();
    stroke("white");
    strokeWeight(3);
    border = line(700,0,700,1000);
    border2 = line(750,50,750,500);
    border3 = line(750,50,1200,50);
    border4 = line(1200,50,1200,500);
    border5 = line(750,500,1200,500);
    textSize(20);
    strokeWeight(1.2);
    fill("white");
    text("Score:"+score,550,150);
    text("Clue 1:",770,130);
    text("Clue 2:",770,330);
    text("Clue 3:",770,430);
    textSize(30);
    text("HINTS",930,80);
    gameStates();
    submit();
    drawSprites();
}

function gameStates(){
    if(gameState === 0){
        question.question.html("Question:- What is commonly regarded as patron of sailors?");
        question.clueButton.mousePressed(()=>{
            if(clue0 === 0){
                constellation = createSprite(950,200,1,1);
                constellation.addImage("gemini",geminiL);
                constellation.scale = 0.4;
                question.clue0.html("The answer constellation can be seen in the night sky in question form.");
                clue0 = 1;
            }
            else if(clue0 === 1){
                question.clue1.html("G _ M _ _ I");
                clue0 = 2;
            }
            else if(clue0 === 2){
                question.clue2.html("Answer: GEMINI");
            }
        })
    }
    if(gameState === 1){
        question.question.html("Question:- In Greek mythology, question creature was sent to divert <br> Hercules’ attention during his battle with the monstrous Hydra. ");
        question.clueButton.mousePressed(()=>{
            var answer = question.input.value();
            var actualAnswer = "CANCER";
            if(actualAnswer === answer.toUpperCase() && clue1 != 2){
                score += 1;
                gameState = 2;
            }
            else if(clue1 === 0){
                constellation = createSprite(950,200,1,1);
                constellation.addImage("cancer",cancerL);
                constellation.scale = 0.9;
                question.clue0.html("The answer constellation can be seen in the night sky in question form.");
                clue1 = 1;
            }
            else if(clue1 === 1){
                question.clue1.html("_ A N C _ _");
                clue1 = 2;
            }
            else if(clue1 === 2){
                question.clue2.html("Answer: CANCER");
            }
        })
    }
    if(gameState === 2){
        question.question.html("Question:- This group of stars is located nearby other water-related <br> constellations and is the namesake of a southern tropic. ");
        question.clueButton.mousePressed(()=>{
            var answer = question.input.value();
            var actualAnswer = "CAPRICORNUS";
            if(actualAnswer === answer.toUpperCase() && clue2 != 2){
                score += 1;
                gameState = 3;
            }
            else if(clue2 === 0){
                constellation = createSprite(950,200,1,1);
                constellation.addImage("capricornus",capricornusL);
                constellation.scale = 0.3;
                question.clue0.html("The answer constellation can be seen in the night sky in question form.");
                clue2 = 1;
            }
            else if(clue2 === 1){
                question.clue1.html("C _ _ _ I C _ _ _ U S");
                clue2 = 2;
            }
            else if(clue2 === 2){
                question.clue2.html("Answer: CAPRICORNUS");
            }
        })
    }
    if(gameState === 3){
        question.question.html("Question:- This constellation contains two of the largest star clusters <br> visible from Earth: the Hyades and the Pleiades. It is a symbol of <br> strength and fertility.");
        question.clueButton.mousePressed(()=>{
            var answer = question.input.value();
            var actualAnswer = "TAURUS";
            if(actualAnswer === answer.toUpperCase() && clue3 != 2){
                score += 1;
                gameState = 4;
            }
            else if(clue3 === 0){
                constellation = createSprite(950,200,1,1);
                constellation.addImage("taurus",taurusL);
                constellation.scale = 0.9;
                question.clue0.html("The answer constellation can be seen in the night sky in question form.");
                clue3 = 1;
            }
            else if(clue3 === 1){
                question.clue1.html("T _ _ R _ S");
                clue3 = 2;
            }
            else if(clue3 === 2){
                question.clue2.html("Answer: TAURUS");
            }
        })
    }
    if(gameState === 4){
        question.question.html("Question:- Throughout history, different cultures have seen <br> various figures contained within question distinctive group of stars, <br> including a winged archer, a centaur, and a tea pot.");
        question.clueButton.mousePressed(()=>{
            var answer = question.input.value();
            var actualAnswer = "SAGITTARIUS";
            if(actualAnswer === answer.toUpperCase() && clue4 != 2){
                score += 1;
                gameState = 5;
            }
            else if(clue4 === 0){
                constellation = createSprite(950,200,1,1);
                constellation.addImage("sagittarius",sagittariusL);
                constellation.scale = 0.9;
                question.clue0.html("The answer constellation can be seen in the night sky in question form.");
                clue4 = 1;
            }
            else if(clue4 === 1){
                question.clue1.html("S _ G _ _ T _ _ _ U S");
                clue4 = 2;
            }
            else if(clue4 === 2){
                question.clue2.html("Answer: SAGITTARIUS");
            }
        })
    }
}

function submit(){
        if(gameState === 0){
            var answer = question.input.value();
            var actualAnswer = "GEMINI";
            question.button.mousePressed(() => {
                if(actualAnswer !== answer.toUpperCase()){
                    wrong = 1;
                }
                if(actualAnswer === answer.toUpperCase() && clue0 !== 2){
                    score += 1;
                    gameState = 1;
                    if(constellation !== null){
                        constellation.destroy();
                    }
                    question.clue0.html("");
                    question.clue1.html("");
                    question.clue2.html("");
                    //right = 1;
                    question.right.html("Yipee!! Your Answer is right. Now attempt the next question.");
                }
                if(actualAnswer === answer.toUpperCase() && clue0 === 2){
                    gameState = 1;
                    score = score;
                    constellation.destroy();
                    question.clue0.html("");
                    question.clue1.html("");
                    question.clue2.html("");
                    wrong = 0;
                    right = 1;
                }
            })
            if(wrong === 1){
                question.wrong.html("Sorry, wrong answer. You can try again or use a hint!!");
            }
            if(wrong === 0){
                question.wrong.html("");
            }
            if(right === 1){
                question.right.html("Yipee!! Your Answer is right. Now attempt the next question.");
            }
        }

        if(gameState === 1){
            var answer = question.input.value();
            var actualAnswer = "CANCER";
            question.button.mousePressed(() => {
                if(actualAnswer != answer.toUpperCase()){
                    wrong = 1;
                }
                if(actualAnswer === answer.toUpperCase() && clue1 != 2){
                    score += 1;
                    gameState = 2;
                    constellation.destroy();
                    question.clue0.html("");
                    question.clue1.html("");
                    question.clue2.html("");
                    wrong = 0;
                }
                if(actualAnswer === answer.toUpperCase() && clue1 === 2){
                    gameState = 2;
                    score = score;
                    constellation.destroy();
                    question.clue0.html("");
                    question.clue1.html("");
                    question.clue2.html("");
                    wrong = 0;
                }
            })
            if(wrong === 1){
                question.wrong.html("Sorry, wrong answer. You can try again or use a hint!!");
            }
            if(wrong === 0){
                question.wrong.html("");
            }
        }

        if(gameState === 2){
            var answer = question.input.value();
            var actualAnswer = "CAPRICORNUS";
            question.button.mousePressed(() => {
                if(actualAnswer != answer.toUpperCase()){
                    wrong = 1;
                }
                if(actualAnswer === answer.toUpperCase() && clue2 != 2){
                    score += 1;
                    gameState = 3;
                    constellation.destroy();
                    question.clue0.html("");
                    question.clue1.html("");
                    question.clue2.html("");
                    wrong = 0;
                }
                if(actualAnswer === answer.toUpperCase() && clue2 === 2){
                    gameState = 3;
                    score = score;
                    constellation.destroy();
                    question.clue0.html("");
                    question.clue1.html("");
                    question.clue2.html("");
                    wrong = 0;
                }
            })
            if(wrong === 1){
                question.wrong.html("Sorry, wrong answer. You can try again or use a hint!!");
            }
            if(wrong === 0){
                question.wrong.html("");
            }
        }

        if(gameState === 3){
            var answer = question.input.value();
            var actualAnswer = "TAURUS";
            question.button.mousePressed(() => {
                if(actualAnswer != answer.toUpperCase()){
                    wrong = 1;
                }
                if(actualAnswer === answer.toUpperCase() && clue3 != 2){
                    score += 1;
                    gameState = 4;
                    constellation.destroy();
                    question.clue0.html("");
                    question.clue1.html("");
                    question.clue2.html("");
                    wrong = 0;
                }
                if(actualAnswer === answer.toUpperCase() && clue3 === 2){
                    gameState = 4;
                    score = score;
                    constellation.destroy();
                    question.clue0.html("");
                    question.clue1.html("");
                    question.clue2.html("");
                    wrong = 0;
                }
            })
            if(wrong === 1){
                question.wrong.html("Sorry, wrong answer. You can try again or use a hint!!");
            }
            if(wrong === 0){
                question.wrong.html("");
            }
        }

        if(gameState === 4){
            var answer = question.input.value();
            var actualAnswer = "SAGITTARIUS";
            question.button.mousePressed(() => {
                if(actualAnswer != answer.toUpperCase()){
                    wrong = 1;
                }
                if(actualAnswer === answer.toUpperCase() && clue4 != 2){
                    score += 1;
                    gameState = 5;
                    constellation.destroy();
                    question.clue0.html("");
                    question.clue1.html("");
                    question.clue2.html("");
                    wrong = 0;
                }
                if(actualAnswer === answer.toUpperCase() && clue4 === 2){
                    gameState = 4;
                    score = score;
                    constellation.destroy();
                    question.clue0.html("");
                    question.clue1.html("");
                    question.clue2.html("");
                    wrong = 0;
                }
            })
            if(wrong === 1){
                question.wrong.html("Sorry, wrong answer. You can try again or use a hint!!");
            }
            if(wrong === 0){
                question.wrong.html("");
            }
        }
}