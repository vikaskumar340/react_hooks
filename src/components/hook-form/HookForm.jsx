
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools';
import { useEffect, useState } from "react";
function HookForm() {
    const [formFields, setFormFields]  = useState(null);
    const {register, handleSubmit, control, formState, getValues, watch, setValue, reset, trigger } = useForm({
        defaultValues:{
            name    :"",
            email   :"",
            age     :"",
            social  :{
                facebook:"",
                twitter:""
            },
            phoneNumber:["",""],
            dob: new Date(),
            gender:""
        },
        // mode:"onChange"
    });
    
   /* re render component on each change 
   const watchFormData = watch();
    useEffect(() => {
        console.log("formData...");
        console.log(watchFormData);
    },[watchFormData]);
    */

    /* 
    const {register, handleSubmit, control, formState} = useForm({
        defaultValues: async () => {
            const apires = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const resData = await apires.json();
            return (
                {
                    name: resData.name,
                    email: resData.email,
                    age:21
                }
            )
        }
    });
    */

    const {errors, dirtyFields, touchedFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount} = formState;
    // console.log({dirtyFields, touchedFields, isDirty});
    console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount});

    const onSubmit =  (formValues) => {
        setFormFields(JSON.stringify(formValues));
        console.log(formValues);
    }

    // not re render 
    const getFormValues = () => {
        // const formValues = getValues(); // get fields 
        // const formValues = getValues(['name','gender']); // get fields 
        const formValues = getValues("name"); // get only name 
        console.log(formValues);
    }

    // can set value rund time on any event 
    const setFormValue = () => {
        setValue("email", "chirag@gmail.com" , {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate:true
        })
    }


    // hadnle error on  submit 
    const onError = (err) => {
        console.log(err);
    }

    // reset on successfullySubmitted
    useEffect(() => {
        if(isSubmitSuccessful) {
            reset(); // for reseted successfully...
        }
    }, [isSubmitSuccessful]);

    return (
        <div className="container mt-4 shadow mw-50">
            <DevTool control={control} placement="top-left" />

            <h2>Form hook example</h2>

            {/* <p>{watchFormData.join(" | ")}</p> */}
            {/* <p>{JSON.stringify(watchFormData)}</p> */}

            {formFields &&  <p> {formFields}</p> }
            <div className="mx-5">
                <form  onSubmit={handleSubmit(onSubmit, onError)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter name"
                    {...register("name", {
                        required:"Name is required",
                    })}
                    
                    />
                    <p className="text-danger">{errors?.name?.message}</p>
                    <br />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" 
                    {...register("email", {
                        disabled:watch("name") === "",
                        required:"Mail is required",
                        validate:{
                            notadminemail: (value) => {
                                return (
                                    value !== 'admin@gmail.com' || 'Please use different email'
                                )
                            },
                            notBlaclListedEmail:(value) => {
                                return (
                                    !value.endsWith('@blacklisted.com') || "This domain is not allwoed"
                                )
                            },
                            availableEmail: async (value) => {
                                const emaildata = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
                                const emailExists = await emaildata.json();
                                return  emailExists.length === 0 || 'Email already exist'
                            }
                        }
                        // validate:(value) => {
                        //     return (
                        //         value !== 'admin@gmail.com' || 'Please use different email'
                        //     )
                        // }
                    })}
                    />
                    <p className="text-danger">{errors?.email?.message}</p>
                    <br />

                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" className="form-control" placeholder="Enter age" 
                    {...register("age", {
                        required:"Age is required",
                        valueAsNumber:true,
                        min:{
                            value:18,
                            message:"Age must be 18 or greater"
                        },
                        max:{
                            value:99,
                            message:"Max age can be 25"
                        }
                    })}
                    />
                    <p className="text-danger">{errors?.age?.message}</p>
                    <br />

                    <label htmlFor="ountry">Country</label>
                    <select name="country" id="country" {...register("country")} className="form-select">
                        <option value="">Country</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="China">China</option>
                    </select>
                    <br />

                    <label htmlFor="gender">Gender</label> <br />
                    <label htmlFor="gender">
                        <input type="radio" name="gender"  value="Male" {...register("gender", {required:true})} /> Male
                    </label>
                    <label htmlFor="gender">
                        <input type="radio" name="gender"  value="Female" {...register("gender")} /> Female
                    </label>
                    <p className="text-danger">{errors?.gender?.message}</p>
                    <br />

                    <label htmlFor="skills">Skills</label> <br />
                    <label htmlFor="skills">
                        <input type="checkbox"   value="Node Js" {...register("skills")} /> Node JS
                    </label>
                    <label htmlFor="skills">
                        <input type="checkbox"  value="React JS" {...register("skills")} /> React JS
                    </label>

                     <label htmlFor="skills">
                        <input type="checkbox"  value="mongoodb" {...register("skills")} /> MongoDB
                    </label>

                    <br />

                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" name="dob" className="form-control" 
                    {...register("dob"), {
                        required:true,
                        valueAsDate:true
                    }}
                    />

                    <br />

                    <label htmlFor="age">Facebook</label>
                    <input type="text" name="facebook" className="form-control" placeholder="Enter facebook profle" 
                    {...register("social.facebook")}
                    />
                     
                    <br />

                    <label htmlFor="age">Twitter</label>
                    <input type="text" name="twitter" className="form-control" placeholder="Enter facebook twitter" 
                    {...register("social.twitter")}
                    />
                     
                    <br />

                    <label htmlFor="age">Primary Number</label>
                    <input type="text" name="primary_number" id="primary_number" className="form-control"  
                    {...register("phoneNumber.0", {
                        required:"Primary number is required",
                        // pattern: {
                        //     value: /^[6-9]\d{9}$/,
                        //     message: "Enter a valid 10-digit mobile number"
                        // }
                    })}
                    />
                    <p className="text-danger">{errors?.phoneNumber?.[0]?.message}</p>
                    <br /> 

                    <label htmlFor="alternate_number">Alternate Number</label>
                    <input type="text" name="alternate_number" id="alternate_number" className="form-control"  
                    {...register("phoneNumber.1",
                        {
                            // pattern: {
                            //     value: /^[6-9]\d{9}$/,
                            //     message: "Enter a valid 10-digit mobile number"
                            // },
                            validate:{
                                sameAsPrimary: (value) => {
                                    Number(value) !== Number(getValues("phoneNumber.0"))
                                    || "Alternate number cannot be same as primary number"
                                } 
                            }
                        }
                    )}
                    />
                    <p className="text-danger">{errors?.phoneNumber?.[1]?.message}</p>
                    <br />



                    {/* <button disabled={!isValid}>Submit</button> */}
                    <button >Submit</button>
                    <button type="button" onClick={() => trigger()}>Validate</button>
                    {/* can trigget validate for a field trigger("name") */}
                    <button onClick={() => reset({
                        name:"VIKAS KUMAR",
                        email:"default@gmail.com"
                    })}>Reset</button>
                    <button type="button" onClick={getFormValues}>Get values</button>
                    <button type="button" onClick={setFormValue}>Set value</button>

                    

                </form>
            </div>

        </div>
    )
}

export default HookForm
