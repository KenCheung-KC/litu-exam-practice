import Question from "./Question"

const QuestionContainer = ({ children, currentQuestion, currentQuestionIndex, handleOnChange }) => {
    return (
        <div>
            Question Container
            {children}
            <div className="text-black text-3xl font-bold bg-slate-400 p-2">
                {currentQuestionIndex + 1}. {currentQuestion?.question}
            </div>
            <div>
                <ul>
                    {currentQuestion.answers.map((answer, i) => {
                        const { text, correct } = answer
                        if (currentQuestion.multipleAnswers == true) {
                            return (
                                <li key={`${text} + i`}>
                                    <label className="flex flex-row gap-4 text-3xl">
                                        <input
                                            type="checkbox"
                                            name={`Q${currentQuestionIndex}Answer`}
                                            id={`Q${currentQuestionIndex}A${i}`}
                                            value={text}
                                            onChange={handleOnChange}
                                        />
                                        {text}
                                    </label>
                                </li>
                            )
                        }
                        return (
                            <li key={`${text} + i`}>
                                <label className="flex flex-row gap-4 text-3xl">
                                    <input
                                        type="radio"
                                        name={`Q${currentQuestionIndex}Answer`}
                                        id={`Q${currentQuestionIndex}A${i}`}
                                        value={text}
                                        onChange={handleOnChange}
                                    />
                                    {text}
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default QuestionContainer
