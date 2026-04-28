import {useContext, useState} from 'react'
 
import {useNavigate, Link}  from 'react-router-dom';
import { QuizContext } from '../../contexts/QuizContext';

function Home() {
    const [name, setName] = useState();
    const navigate = useNavigate();
    const {state, dispatch} = useContext(QuizContext);
     
    const startQuiz = () => {
        if(!name) return alert("Pleas enter your name");
        dispatch({type:'SET_NAME', payload:name});
        navigate("/quiz");
    }
    return (
        <>
            <div className='container mt-4 text-center'>
                <div className='mx-5'>
                    <h3 className='fw-bold mb-4'>React Quiz Challenge</h3>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='form-control w-50 mx-auto mb-3' placeholder='Enter your name' name="name" />
                    <button className='btn btn-lg btn-success btn-sm m-2' onClick={startQuiz}>Start Quiz</button>
                    {state.name}

                    <Link className='btn btn-lg btn-warning btn-sm' to="/leaderboard"> Leaderboard </Link>

                </div>
            </div>
             
        </>
    )
}

export default Home
