import {useContext, useState, useEffect} from 'react'
 
import {Link, useNavigate}  from 'react-router-dom';
import { QuizContext } from '../../contexts/QuizContext';

function Result() {
     
    const navigate = useNavigate();
    const {state, dispatch} = useContext(QuizContext);
     
    const viewLeaderBoard = () => {
        alert("view Leader board");
        // navigate("/quiz");
    }

    useEffect(() => {
        const { score, questions} = state;
        
        const percentage = questions?.length ?  Math.round((score  / questions.length) * 100 ) : 0 ;
         
        const entry = {
            name:   state.username,
            score,
            percentage,
            date    : new Date().toLocaleString(),
            questionsCnt: questions.length

        };
        const store = JSON.parse(localStorage.getItem("leaderBoardData")) || [];
        const updated = [...store,entry];
        updated.sort((a,b) => b.score - a.score );
        console.log(updated);
        localStorage.setItem("leaderBoardData",JSON.stringify(updated));
         
    },[]);
    return (
        <>
            <div className='container mt-4 text-center'>
                <div className='mx-5 shadow'>
                    <h3 className='fw-bold mb-4'>React Quiz Completed!</h3>
                    <p className='fw-bold mb-4'>{state.username}, your score is </p>
                    <h1 className='fw-bold text-success m-0'>{state.score}</h1>
                    <Link to="/leaderboard" className='btn btn-lg btn-success btn-sm m-2' >view Leaderboard</Link>
                    <Link to="/react-quiz" onClick={() => dispatch({type:"RESET"})} className='btn btn-lg btn-warning btn-sm'>New Quiz</Link>
                </div>
            </div>
             
        </>
    )
}

export default Result
