import { useState, createContext, useReducer } from "react";
import questions from "../data/questions.json";
export const QuizContext = createContext();

export default function QuizProvider({children}) {
    const initialState = {
        username:"",
        questions,
        index:0,
        score:0,
        completed:false
    }

    function quizReducer(state,action) {
        switch(action.type) {
            case "SET_NAME" :
                return {...state, username:action.payload}
            case "ANSWER" :
                return {
                    ...state,
                    index:state.index + 1,
                    score: action.payload ? state.score + 1 : state.score
                }
            case "FINISH" :
                return {...state, completed: true}
            case "RESET" : 
                return {
                    ...initialState,
                    questions:state.questions
                }
            default :
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={{state, dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}