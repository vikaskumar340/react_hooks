import Timer from "../../components/quiz/Timer"
import ProgressBar from "../../components/quiz/ProgressBar"
import QuestionCard from "../../components/quiz/QuestionCard"
import { QuizContext } from '../../contexts/QuizContext';
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTimer from "../../hooks/useTimer";

function Quiz() {
    const {state, dispatch} = useContext(QuizContext);
    const {index, questions} = state;
    const navigate = useNavigate();
    const {time, reSet} = useTimer(5);
    
    if(!questions || questions.length === 0) {
        return <h3 className="text-center m-5">Loading questions...</h3>
    }

    if(index >= questions.length) {
        dispatch({type:"FINISH"});
        navigate("/quiz-result");
        return null;
    }

    const currentQue = questions[index];

    const handleSelectOption = (selected) => {
        let isCurrectAns = selected === currentQue.answer;
        dispatch({type:"ANSWER", payload:isCurrectAns});
        reSet();
    }

    useEffect(() => {
        if(time === 0 ){
            dispatch({type:"ANSWER", payload:false});
            reSet();// reset time to start from 15s to next question
        }
    },[time]);

    
    return (
        <div className="container mt-4">
            <span>{state.username}</span>
            <Timer time={time}/>
            <ProgressBar currentIndex={index} totalQue={questions.length} />
            <QuestionCard 
            question={currentQue.question}
            options={currentQue.options}
            onSelect={handleSelectOption}
            />
        </div>
    )
}

export default Quiz
