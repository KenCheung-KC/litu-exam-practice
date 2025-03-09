import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from "next/dist/shared/lib/constants"

type Answer = {
    correct: boolean,
    text: string,
}

type Exam = {
    question: string,
    multipleAnswers: boolean,
    answers: Answer[]
}

type Exams = Exam[]

const Exams = [
    {
        question: 'When was England a republic and not ruled by a monarch?',
        multipleAnswers: false,
        answers: [
            {
                text: 'After Henry VII was executed',
                correct: false,
            },
            {
                text: 'After Elizabeth I was executed',
                correct: false,
            },
            {
                text: 'After Charles II was executed',
                correct: false,
            },
            {
                text: 'After Charles I was executed',
                correct: true,
            },
        ]
    },
    {
        question: 'After the War of the Roses, Henry Tudor married Elizabeth of York. True or false?',
        multipleAnswers: false,
        answers: [
            {
                text: 'True',
                correct: true,
            },
            {
                text: 'False',
                correct: false,
            },
        ]
    },
    {
        question: 'Who invaded Ireland with the help of a French army and was defeated at the Battle of Boyne in Ireland in 1690?',
        multipleAnswers: false,
        answers: [
            {
                text: 'James II',
                correct: true
            },
            {
                text: 'Charles II',
                correct: false
            },
            {
                text: 'William the Conqueror',
                correct: false,
            },
            {
                text: 'Henry VIII',
                correct: false
            }
        ]
    },
    {
        question: 'Regarding the Speaker, which one is TRUE?(Choose 3 from 4)',
        multipleAnswers: true,
        answers: [
            {
                text: 'The Speaker is neutral and does not represent a political party',
                correct: true,
            },
            {
                text: 'The Speaker do not have to hold UK passport',
                correct: false,
            },
            {
                text: 'The Speaker is chosen by other MPs in a secret ballot',
                correct: true,
            },
            { 
                text: 'The Speaker is an MP, represents a constituency',
                correct: true
            }
        ]
    }
]

export default Exams
