import {useEffect, useState} from 'react'

function LeaderBoard() {
    const [quizData, setLeaderBoard] = useState([]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("leaderBoardData")) || [];
        console.log(data);
        setLeaderBoard(data);
         
        console.log(quizData);
    },[]);

    const clearLeaderboard = () => {
        localStorage.removeItem("leaderBoardData");
        setLeaderBoard([]);
    }

    return (
        <div className='container text-center py-4'>
            <h3 className='fw-bold mb-3'>Leaderboard</h3>
            <table className='table table-stripped shadow'>
                <thead className='table-dark'>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Percentage</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                        {quizData.length > 0  ? ( 
                            quizData.map(({name, score, percentage, date}, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{name}</td>
                                        <td>{score}</td>
                                        <td>{percentage}%</td>
                                        <td>{date}</td>
                                    </tr>
                                )
                            })
                         ): (
                            <tr><td colSpan="5"> No data found</td></tr>
                         )
                        }
                </tbody>
            </table>

            <button className='btn btn-sm btn-danger' onClick={clearLeaderboard}>Clear LeaderBoard</button>

        </div>
    )
}

export default LeaderBoard
