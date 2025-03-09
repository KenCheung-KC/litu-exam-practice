"use client";
import { useEffect, useState } from "react";
import Exams from "./Exams/Exams"; // Ensure this path is correct
import shuffle from './utils/shuffle'
import NoQuestion from "./components/NoQuestion";
import QuestionContainer from "./components/QuestionContainer";
import QuestionNavigation from "./components/QuestionNavigation";

type SelectedAnswers = {
  answers: string[]
}

export default function Home() {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswers] = useState([])
  const [exams, setExams] = useState(Exams)
  const [shuffled, setShuffled] = useState(false)
  const [checkedAnswer, setCheckedAnswer] = useState(false)

  useEffect(() => {
    const shuffledExam = shuffle(Exams)
    setExams(shuffledExam)
    setcurrentQuestionIndex(0)
    setShuffled(true) 
  }, [])
  console.log('shuffled exams: ', exams)
  // Ensure the Exams array has content before accessing it
  if (!exams || exams.length === 0) {
    return (
      <NoQuestion />
    );
  }

  const handleNextQuestion = () => {
    setCheckedAnswer(false)
    if (currentQuestionIndex < exams.length - 1) {
      setcurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setcurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  const currentQuestion = exams[currentQuestionIndex];

  const getCorrectAnswers = (answers) => {
    return answers.reduce((acc, curr) => {
      const { correct, text } = curr
      if (correct) {
        return [...acc, text]
      }

      return acc
    }, [])
  }

/*
  TODO:
  1. Use state to store the questions state (question, selected answer, is checked)
  2. Make two separate function for handling radio and checkbox answer
  3. Handle check function, when user press check button, check the answer and save the state to the state that   created at step 1
*/

  const handleOnChange = (e) => {
    const { type, value, checked } = e.target
    console.log('type: ', type)
    console.log('value: ', value)
    console.log('checked: ', checked)
    const answer = e.target.value
    // setSelectedAnswers(answer)
    if (type == 'radio') {
      setSelectedAnswers((prev) => {
        return [...prev, [answer]]
      })
    } else if (type == 'checkbox') {
      const storedCurrentAnswer = selectedAnswer.length == currentQuestionIndex - 1
      console.log('selectedAnswer.length: ', selectedAnswer.length)
      console.log('currentQuestionIndex: ', currentQuestionIndex)
      console.log('storedCurrentAnswer: ', storedCurrentAnswer)
      console.log('selectedAnswer: ', selectedAnswer)
      if (storedCurrentAnswer) {
        setSelectedAnswers((prev) => {
          const checkboxAnswers = prev[prev.length - 1]
          console.log('checkboxAnswers: ', checkboxAnswers)
          return [...prev, [answer]]
        })
      } else {
        setSelectedAnswers((prev) => {
          return [...prev, [answer]]
        })
      }

    }
  }

  const handleCheckboxOnChange = (e) => {
    console.log('e: ', e)
    const answer = e.target.value
    // setSelectedAnswers(answer)
    setSelectedAnswers((prev) => {
      return [...prev, [answer]]
    })
  }

  const handleCheckAnswer = () => {
    console.log('currentQuestion: ', currentQuestion)
    const { answers } = currentQuestion
    const correctAnswer = getCorrectAnswers(answers)
    console.log('correctAnswer: ', correctAnswer)
    setCheckedAnswer(true)
  }
  console.log('index currentQuestion: ', currentQuestion)
  console.log('selectedAnswer: ', selectedAnswer)

  return (
    <main className="max-w-7xl min-h-[800px] mx-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-black">Exam 18</h1>
      <div className="flex flex-col gap-8 my-8 min-h-[350px]">
        {/* old question container here */}
        {
          shuffled && (
            <QuestionContainer
              currentQuestion={currentQuestion}
              currentQuestionIndex={currentQuestionIndex}
              handleOnChange={handleOnChange}
            />
        )}
      </div>
      <div>
        {/* old question navigation code here */}
        <QuestionNavigation 
          handleCheckAnswer={handleCheckAnswer}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
          checkedAnswer={checkedAnswer}
        />
      </div>
    </main>
  );
}
