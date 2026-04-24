import { useState } from "react";

export default function useForm(initialValue = {}, callback ) {
    const [formValue, setValue] = useState(initialValue);

    const handleChange = (e) => {
        let {name, value} = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(callback) callback(formValue);
    }

    const resetForm = () => setValue(initialValue);

    return {formValue,handleChange,handleSubmit,resetForm};


}