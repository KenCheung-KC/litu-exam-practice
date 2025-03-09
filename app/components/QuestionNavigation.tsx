import { useState } from 'react'

const QuestionNavigation = ({ checkedAnswer, handleCheckAnswer, handlePreviousQuestion, handleNextQuestion}) => {
    return (
        <div className="flex flex-row gap-4">
          <button
            className="rounded-lg px-4 py-1 bg-green-500"
            onClick={handlePreviousQuestion}
          >
            Previous
          </button>
          {
            checkedAnswer ? (
              <button
                className="rounded-lg px-4 py-1 bg-green-500"
                onClick={handleNextQuestion}
              >
                Next
              </button>
            ) : (
              <button
                className="rounded-lg px-4 py-1 bg-green-500"
                onClick={handleCheckAnswer}
              >
                Check
              </button>
            )
          }
        </div>
    )
}

export default QuestionNavigation
