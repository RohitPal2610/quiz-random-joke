import React, { useState } from 'react'
import Question from './component/Question'
const questions = [
  {
    question: "1. What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "2. Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "3. Who wrote 'Romeo and Juliet'?",
    options: ["William Wordsworth", "William Shakespeare", "Charles Dickens", "Jane Austen"],
    answer: "William Shakespeare",
  },
  {
    question: "4. What is the boiling point of water?",
    options: ["50°C", "100°C", "150°C", "200°C"],
    answer: "100°C",
  },
  {
    question: "5. Which is the largest mammal?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Rhino"],
    answer: "Blue Whale",
  },
  {
    question: "6. What is the chemical symbol for Gold?",
    options: ["Ag", "Au", "Gd", "Go"],
    answer: "Au",
  },
  {
    question: "7. Which organ purifies blood in the human body?",
    options: ["Heart", "Lungs", "Liver", "Kidneys"],
    answer: "Kidneys",
  },
  {
    question: "8. How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
];

const App = () => {
  const [index,setIndex] = useState(0)
  const [score, setScore] = useState(0);
  const nextQuestion = (selectedOption)=>{
    if(selectedOption === questions[index].answer)
    {
      setScore(score+1)
    }
    if(index<questions.length-1)
    {
      setIndex(index+1)
    }
    else {
      alert(`Quiz Completed! Your score: ${score + 1}/${questions.length}`);
    }
  }
  const restart=()=>
  {
    if(index === questions.length-1)
    {
    setIndex(0)
    setScore(0)
    }
    else {
      alert("complete quiz first")
    }
  }
  return (
    <>
    <div class="p-5 flex justify-center text-center bg-gradient-to-t from-red-500 to-green-300 scale-[0.8] sm:scale-95 lg:scale-150  mb-16">
       <h1 class="font-bold">Quiz</h1>
    </div>
    <Question data={questions[index]} onselect={nextQuestion}/>
    <div class="w-full flex justify-center scale-150 mt-12">
      <button onClick={restart} class="bg-slate-500 p-2 hover:bg-lime-500">Restart</button>
    </div>
    </>
  )
}

export default App