// import React, { useEffect, useState } from 'react';
// import quiz from '../../Data/quesAns'
// import './Paper.css'
// import RightSidebar from '../../Components/RightSidebar/RightSidebar';
// import PaperHeader from '../../Components/PaperHeader/PaperHeader'


// // Defining Timer code 
// const formatTime = (time) => {
//     let minutes = Math.floor(time / 60);
//     let seconds = Math.floor(time - minutes * 60);

//     if (minutes < 10) minutes = '0' + minutes;
//     if (seconds < 10) seconds = '0' + seconds;
//     return minutes + ':' + seconds;
// }; // End of Defining Timer code 



// const Paper = ({ seconds, answeredQuestions }) => {

//     const [activeQuestion, setActiveQuestion] = useState(0);
//     const handleQuestionSelect = (questionNumber) => {
//         setActiveQuestion(questionNumber - 1);
//     }

//     // const [questionStatus, setQuestionStatus] = useState(Array(30).fill('notAnswered'))
//     // const [activeQuestion, setActiveQuestion] = useState(0)
//     // const [selectedAnswer, setSelectedAnswer] = useState('') 

//     const [selectedAnswers, setSelectedAnswers] = useState(new Array(quiz.questions.length).fill(''));
//     const [showResult, setShowResult] = useState(false)
//     const [result, setResult] = useState({
//         score: 0,
//         correctAnswers: 0,
//         wrongAnswers: 0,
//     })



//     const { questions } = quiz
//     const { question, choices, correctAnswer } = questions[activeQuestion]
//     const onClickNext = () => {
//         setResult((prev) =>
//             selectedAnswers[activeQuestion] === correctAnswer
//                 ? {
//                     ...prev,
//                     score: prev.score + 5,
//                     correctAnswers: prev.correctAnswers + 1,
//                 }
//                 : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
//         );
//         if (activeQuestion !== questions.length - 1) {
//             setActiveQuestion((prev) => prev + 1);
//         } else {
//             // setActiveQuestion(0);
//             setShowResult(true);
//             calculateResult();//new added code
//         }
//     };


//     const onAnswerSelected = (OptionLetter) => {
//         // Update the selected answer for the current question
//         const updatedSelectedAnswers = [...selectedAnswers];
//         updatedSelectedAnswers[activeQuestion] = OptionLetter;
//         setSelectedAnswers(updatedSelectedAnswers);
//         // setSelectedAnswers(updatedSelectedAnswers, OptionLetter);

//     };



//     const clearResponse = () => {
//         // Clear the response for the current question
//         const updatedSelectedAnswers = [...selectedAnswers];
//         updatedSelectedAnswers[activeQuestion] = '';
//         setSelectedAnswers(updatedSelectedAnswers);
//     };

//     const goToPreviousQuestion = () => {
//         // Move to the previous question
//         if (activeQuestion > 0) {
//             setActiveQuestion((prev) => prev - 1);
//         }
//     };



//     const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
//     const [countdown, setCountDown] = useState(seconds);
//     useEffect(() => {
//         const timerId = setInterval(() => {
//             setCountDown((prevCountDown) =>
//                 prevCountDown - 1
//             );
//         }, 1000)
//         return () => {
//             clearInterval(timerId);
//         };
//     }, [])

//     useEffect(() => {
//         if (countdown <= 0) {
//             setShowResult(true);
//             // clearInterval(timerId.current);
//             // alert("End");
//         }
//     }, [countdown]);


//    // NEW ADDED CODE

//     // const [showResult, setShowResult] = useState(false);
//     const [accuracy, setAccuracy] = useState(0);
//     const [averageScore, setAverageScore] = useState(0);
//     const [topScore, setTopScore] = useState(0);
//     const [liveRank, setLiveRank] = useState(0);

//     const calculateResult = () => {
//         // Calculate accuracy
//         const totalAttempted = answeredQuestions.length;
//         const totalCorrect = result.correctAnswers;
//         const calculatedAccuracy = (totalCorrect / totalAttempted) * 100;
//         setAccuracy(calculatedAccuracy.toFixed(2));

//         // Calculate average score
//         const calculatedAverageScore = result.score / totalAttempted;
//         setAverageScore(calculatedAverageScore.toFixed(2));

//         // Placeholder for live ranking data - Replace this with actual data
//         const calculatedTopScore = 100;
//         const calculatedLiveRank = 1;

//         setTopScore(calculatedTopScore);
//         setLiveRank(calculatedLiveRank);
//     };

//     // const onClickSubmit = () => {
//     //     calculateResult();
//     //     setShowResult(true);
//     // };









//     return (

//         <div className='main'>
//             <div className='sub-main'>
//                 <div><PaperHeader /></div>
//                 <div className="quiz-container">
//                     {!showResult ? (
//                         <div>
//                             <div className='subjects'>
//                                 <button className='subject-btn'>Mathematics</button>
//                                 <button className='subject-btn'>Physics</button>
//                                 <button className='subject-btn'>Chemistry</button>
//                             </div>
//                             <div className='second-header'>
//                                 <div className='single-select-question'>
//                                     Single Select Question
//                                 </div>
//                                 <div className='right-header'>
//                                     <div className='marks'>
//                                         Marks: <div className='plus-mark'>+1</div>
//                                         <div className='minus-mark'>-1</div>
//                                     </div>
//                                     <div className='timer'>
//                                         <h3>Time Left: {formatTime(countdown)}</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='question-no'>
//                                 <span className="active-question-no">Question No. {addLeadingZero(activeQuestion + 1)}</span>
//                                 <span className="total-question"> of {addLeadingZero(questions.length)}</span>
//                             </div>

//                             <h2 className='question'><img src={question} alt="question" /></h2>

//                             <ul className='options-container'>
//                                 {choices.map((answer, index) => (
//                                     <li key={answer}>
//                                         <input type="radio"
//                                             // id={answer}
//                                             id={`option-${index}`}
//                                             name='answer'
//                                             value={answer}
//                                             checked={selectedAnswers[activeQuestion] === answer}
//                                             onChange={() => onAnswerSelected(answer)} />


//                                         <label className='alpha-index' htmlFor={`option-${index}`}>
//                                             {/* htmlFor={answer} */}
//                                             {String.fromCharCode(65 + index)}.
//                                             <img src={answer} alt="answer" />
//                                         </label>
//                                     </li>
//                                 ))}
//                             </ul>

//                             <div className="flex-right">
//                                 <button className='clear-btn'>Mark for Review & Next</button>
//                                 <button className='clear-btn' onClick={clearResponse}>Clear Response</button>
//                                 <button className='previous-btn' onClick={goToPreviousQuestion} disabled={activeQuestion === 0}>
//                                     <i class="fa-solid fa-angles-left"></i>
//                                     Previous
//                                 </button>
//                                 <button className='save-btn' onClick={onClickNext} disabled={!selectedAnswers[activeQuestion]}>
//                                     {activeQuestion === questions.length - 1 ? 'Submit' : 'Save & Next'}<i class="fa-solid fa-angles-right"></i>
//                                 </button>

//                             </div>
//                         </div>
//                     ) : (
//                         <div className="result">
//                             <h3>Result</h3>
//                             <p>
//                                 Total Questions: <span>{questions.length}</span>
//                             </p>
//                             <p>
//                                 Total Score:<span> {result.score}</span>
//                             </p>
//                             <p>
//                                 Correct Answers:<span> {result.correctAnswers}</span>
//                             </p>
//                             <p>
//                                 Wrong Answers:<span> {result.wrongAnswers}</span>
//                             </p>
//                             <p>
//                                 Accuracy:<span> {accuracy}%</span>
//                             </p>
//                             <p>
//                                 Average Score:<span> {averageScore}</span>
//                             </p>
//                             <p>
//                                 Top Score:<span> {topScore}</span>
//                             </p>
//                             <p>
//                                 Live Rank:<span> {liveRank}</span>
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <div className='rightsidebar'><RightSidebar onQuestionSelect={handleQuestionSelect} answeredQuestions={answeredQuestions} /></div>
//         </div>


//     )
// }

// export default Paper



import React, { useEffect, useState } from 'react';
import quiz from './Data/quesAns'
import './Paper.css'
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import PaperHeader from '../../components/PaperHeader/PaperHeader';


// Defining Timer code 
const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return minutes + ':' + seconds;
}; // End of Defining Timer code 



const Quiz_interface = ({ seconds, answeredQuestions }) => {

    const [activeQuestion, setActiveQuestion] = useState(0);
    const handleQuestionSelect = (questionNumber) => {
        setActiveQuestion(questionNumber - 1);
    }

    // const [questionStatus, setQuestionStatus] = useState(Array(30).fill('notAnswered'))
    // const [activeQuestion, setActiveQuestion] = useState(0)
    // const [selectedAnswer, setSelectedAnswer] = useState('') 

    const [selectedAnswers, setSelectedAnswers] = useState(new Array(quiz.questions.length).fill(''));
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })



    const { questions } = quiz
    const { question, choices, correctAnswer } = questions[activeQuestion]
    const onClickNext = () => {
        setResult((prev) =>
            selectedAnswers[activeQuestion] === correctAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        );
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        } else {
            // setActiveQuestion(0);
            setShowResult(true);
            calculateResult();//new added code
        }
    };


    const onAnswerSelected = (OptionLetter) => {
        // Update the selected answer for the current question
        const updatedSelectedAnswers = [...selectedAnswers];
        updatedSelectedAnswers[activeQuestion] = OptionLetter;
        setSelectedAnswers(updatedSelectedAnswers);
        // setSelectedAnswers(updatedSelectedAnswers, OptionLetter);

    };



    const clearResponse = () => {
        // Clear the response for the current question
        const updatedSelectedAnswers = [...selectedAnswers];
        updatedSelectedAnswers[activeQuestion] = '';
        setSelectedAnswers(updatedSelectedAnswers);
    };

    const goToPreviousQuestion = () => {
        // Move to the previous question
        if (activeQuestion > 0) {
            setActiveQuestion((prev) => prev - 1);
        }
    };



    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
    const [countdown, setCountDown] = useState(seconds);
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown((prevCountDown) =>
                prevCountDown - 1
            );
        }, 1000)
        return () => {
            clearInterval(timerId);
        };
    }, [])

    useEffect(() => {
        if (countdown <= 0) {
            setShowResult(true);
            // clearInterval(timerId.current);
            // alert("End");
        }
    }, [countdown]);


    // NEW ADDED CODE

    // const [showResult, setShowResult] = useState(false);
    const [accuracy, setAccuracy] = useState(0);
    const [averageScore, setAverageScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [liveRank, setLiveRank] = useState(0);

    const calculateResult = () => {
        // Calculate accuracy
        const totalAttempted = answeredQuestions.length;
        const totalCorrect = result.correctAnswers;
        const calculatedAccuracy = (totalCorrect / totalAttempted) * 100;
        setAccuracy(calculatedAccuracy.toFixed(2));

        // Calculate average score
        const calculatedAverageScore = result.score / totalAttempted;
        setAverageScore(calculatedAverageScore.toFixed(2));

        // Placeholder for live ranking data - Replace this with actual data
        const calculatedTopScore = 100;
        const calculatedLiveRank = 1;

        setTopScore(calculatedTopScore);
        setLiveRank(calculatedLiveRank);
    };

    // const onClickSubmit = () => {
    //     calculateResult();
    //     setShowResult(true);
    // };









    return (

        <div className='main'>
            <div className='sub-main'>
                <div><PaperHeader /></div>
                <div className="quiz-container">
                    {!showResult ? (
                        <div>
                            <div className='subjects'>
                                <button className='subject-btn'>Mathematics</button>
                                <button className='subject-btn'>Physics</button>
                                <button className='subject-btn'>Chemistry</button>
                            </div>
                            <div className='second-header'>
                                <div className='single-select-question'>
                                    Single Select Question
                                </div>
                                <div className='right-header'>
                                    <div className='marks'>
                                        Marks: <div className='plus-mark'>+1</div>
                                        <div className='minus-mark'>-1</div>
                                    </div>
                                    <div className='timer'>
                                        <h3>Time Left: {formatTime(countdown)}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='question-no'>
                                <span className="active-question-no">Question No. {addLeadingZero(activeQuestion + 1)}</span>
                                <span className="total-question"> of {addLeadingZero(questions.length)}</span>
                            </div>

                            <h2 className='question'><img src={question} alt="question" /></h2>

                            <ul className='options-container'>
                                {choices.map((answer, index) => (
                                    <li key={answer}>
                                        <input type="radio"
                                            // id={answer}
                                            id={`option-${index}`}
                                            name='answer'
                                            value={answer}
                                            checked={selectedAnswers[activeQuestion] === answer}
                                            onChange={() => onAnswerSelected(answer)} />


                                        <label className='alpha-index' htmlFor={`option-${index}`}>
                                            {/* htmlFor={answer} */}
                                            {String.fromCharCode(65 + index)}.
                                            <img src={answer} alt="answer" />
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex-right">
                                <button className='clear-btn'>Mark for Review & Next</button>
                                <button className='clear-btn' onClick={clearResponse}>Clear Response</button>
                                <button className='previous-btn' onClick={goToPreviousQuestion} disabled={activeQuestion === 0}>
                                    <i class="fa-solid fa-angles-left"></i>
                                    Previous
                                </button>
                                <button className='save-btn' onClick={onClickNext} disabled={!selectedAnswers[activeQuestion]}>
                                    {activeQuestion === questions.length - 1 ? 'Submit' : 'Save & Next'}<i class="fa-solid fa-angles-right"></i>
                                </button>

                            </div>
                        </div>
                    ) : (
                        <div className="result">
                            <h3>Result</h3>
                            <p>
                                Total Questions: <span>{questions.length}</span>
                            </p>
                            <p>
                                Total Score:<span> {result.score}</span>
                            </p>
                            <p>
                                Correct Answers:<span> {result.correctAnswers}</span>
                            </p>
                            <p>
                                Wrong Answers:<span> {result.wrongAnswers}</span>
                            </p>
                            <p>
                                Accuracy:<span> {accuracy}%</span>
                            </p>
                            <p>
                                Average Score:<span> {averageScore}</span>
                            </p>
                            <p>
                                Top Score:<span> {topScore}</span>
                            </p>
                            <p>
                                Live Rank:<span> {liveRank}</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className='rightsidebar'><RightSidebar onQuestionSelect={handleQuestionSelect} answeredQuestions={answeredQuestions} /></div>
        </div>


    )
}

export default Quiz_interface;

