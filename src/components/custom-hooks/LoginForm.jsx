import useForm from "../../hooks/useForm"

function LoginForm() {
    const initialVal = {email:"", password:""};

    const onSubmit = (values) => {
        console.log("form values", values);
    }

    const {formValue,handleChange,handleSubmit,resetForm} = useForm(initialVal, onSubmit);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={formValue.email} placeholder="email" onChange={handleChange} className="form-control" />
                <br />
                <input type="password" name="password" value={formValue.password} placeholder="password" onChange={handleChange} className="form-control"  />
                
                <button className="btn btn-success mt-2 ml-2 ">Submit</button>
                <button type="reset" onClick={resetForm} className="btn btn-info mt-2 pl-2">Reset</button>
            </form>
        </div>
    )
}

export default LoginForm
