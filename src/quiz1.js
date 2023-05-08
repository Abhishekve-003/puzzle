import React from "react";
import { useState } from "react";
import "./index.css";
import "./quiz.css";
import { useEffect } from "react";

function Quiz1() {

  useEffect(() => {
    // Prompt confirmation when reload page is triggered
    window.onbeforeunload = () => { return "" };
        
    // Unmount the window.onbeforeunload event
    return () => { window.onbeforeunload = null };
  }, []);

  var Questionbank = [
    {
      Question: "People call me Super hero but i am a cancer patient tell me what is my name?",
      Answers: [
        { Answer: "Iron Man", isCorrect: false},
        { Answer: "Batman", isCorrect: false },
        { Answer: "Deadpool", isCorrect: true },
        { Answer: "Captian America", isCorrect: false },
      ],
    },
    {
      Question: <div className="wholeqr1">
<img  src="img/qrcode.jpeg " className="qrcode"/> 
    Find the difference  in this picture
 </div>    ,
      Answers: [
        { Answer: "Stone", isCorrect: false },
        { Answer: "Sky", isCorrect: true },
        { Answer: "Grass", isCorrect: false },
        { Answer: "Egg", isCorrect: true },
      ],
    },
    {
      Question: <div className="wholeqr1">
<img  src="img/cross.png " className="qrcode"/> 
    Find the word
 </div>    ,
      Answers: [
        { Answer: "LOKI", isCorrect: false },
        { Answer: "VISION", isCorrect: false },
        { Answer: "VENOM", isCorrect: true },
        { Answer: "HULK", isCorrect: false },
      ],
    },
    {
      Question: "Friend + enemy = ? ",
      Answers: [
        { Answer: "Frenemy", isCorrect: true },
        { Answer: "Enefri", isCorrect: false },
        { Answer: "Fienemy", isCorrect: false },
        { Answer: "Enfriend", isCorrect: false },
      ],
    },
    {
      Question: <div>
                 The Baháʼí writings also state that the devil is a metaphor for the ? 
               <p> HINT : View page source code</p>  
      </div>
                ,
      Answers: [
        { Answer: "Maybe i am only true or maybe false 😎", isCorrect: false },
        { Answer: "deadPool", isCorrect: false },
        { Answer: "lucifer", isCorrect: false },
        { Answer: "lower self", isCorrect: true },
        { Answer: "evil to", isCorrect: false },
      ],
    },
  ];

  // Use state Hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false); //matlab starting me score show nhi hoga

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if(!isCorrect){
      setScore(score-1);
    }
    if(score < currentQuestion - 1)
    {
      setShowScore(true);
      <p>You are out</p>

    } 

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // console.log(Questionbank);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You Have scored {score} out of {Questionbank.length}
          <>
            <button type="submit" onClick={resetQuiz}>
              Restart
            </button>
          </>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>{currentQuestion + 1}</span>/{Questionbank.length}
            </div>
            <div className="question-text">
              {Questionbank[currentQuestion].Question}
            </div>
            <div className="answer-section">
              {Questionbank[currentQuestion].Answers.map((answer) => (
                <button onClick={() => handleAnswerResponse(answer.isCorrect)}>
                  {answer.Answer}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
// Use state Hook
// const [currentQuestion, setCurrentQuestion] = useState(0);
// const [score, setScore] = useState(0);
// const [showScore, setShowScore] = useState(false); //matlab starting me score show nhi hoga

export default Quiz1;
