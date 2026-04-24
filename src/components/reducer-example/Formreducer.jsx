import {useReducer} from 'react'

export default function Formreducer() {

    function Formreducer(state, action) {
            return {
                ...state,
                [action.name]: action.value
            };
    }
    const [formData, formDispatch] = useReducer(Formreducer, {username:"", email : ""});

    const handleChange = (e) => {
        const {name,value} = e.target;
        formDispatch({
            name,value
        });
    }

    return (
        <div className='container mt-4'>
            <form >
                <input type="text" name="username" value={formData.username} className='form-input' placeholder='Enter username' onChange={handleChange} />
                <br />

               <input type="email" name="email" value={formData.email} className='form-input' placeholder='Enter email' onChange={handleChange} />
            </form>

            <p>{formData.username} / {formData.email}</p>

        </div>
    )
}
