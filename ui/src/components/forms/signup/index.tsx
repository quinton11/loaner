import { Bar } from "../bar"
import { useForm } from "react-hook-form";
import { convert, signUp } from "./util";
import { useState } from "react"
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
//import { useNavigate } from "react-router-dom";

import "./index.css"
import { SignUpDialogue } from "../../dialogues/signup";

export const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const [submit, setSubmit] = useState(false)
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(false)
    //const navigate = useNavigate()

    return <form className="box--main" onSubmit={handleSubmit(async (data) => {
        console.log(data)
        setSubmit(true)

        const done = await signUp("signup", convert(data))
        setOpen(true)
        if (done) {
            //dialogue box
            setSuccess(true)
            //navigate("/")
        } else {
            setSuccess(false)

        }
        setSubmit(false)

        //make request to server
    })}>
        <div className="names">
            <Bar name={"First Name"} isname={true} register={register} errors={errors} validParams={{
                required: { value: true, message: "Required" },
                pattern: { value: /^[a-zA-Z_ ]*$/i, message: "No numbers allowed" },
            }} />
            <Bar name={"Last Name"} isname={true} register={register} errors={errors} validParams={{
                required: { value: true, message: "Required" },
                pattern: { value: /^[a-zA-Z_ ]*$/i, message: "No numbers allowed" },
            }} />
        </div>
        <Bar name={"Email"} register={register} errors={errors}
            validParams={{
                required: { value: true, message: "Required" },
                pattern: {
                    value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Not a valid email"
                }
            }} />
        <Bar name={"Password"} register={register} errors={errors} validParams={{
            minLength: { value: 5, message: "Should be minimum 5 characters" },
            required: { value: true, message: "Required" }
        }} />
        <Bar name={"Password Again"} register={register} errors={errors} validParams={{
            required: { value: true, message: "Required" },
            validate: (val: string) => {
                if (watch('Password') !== val) {
                    return "passwords do not match"
                }
            }
        }} />
        <Bar name={"idCard"} register={register} errors={errors}
            validParams={{ required: { value: true, message: "Required" } }} />
        <Bar name={"telephone"} register={register} errors={errors}
            validParams={{
                required: { value: true, message: "Required" },
                maxLength: {
                    value: 10,
                    message: "Phone number should be 10 digits",
                },
                minLength: {
                    value: 10,
                    message: "Phone number should be 10 digits",
                },
            }} />
        <Bar name={"isEmployed"} register={register} errors={errors}
            validParams={{ required: { value: true, message: "Required" } }} />
        <Bar name={"Date of Birth"} register={register} errors={errors}
            validParams={{ required: { value: true, message: "Required" } }} />
        {!submit ? <button className="form--button">Submit</button> :
            <Button id="butt-col" startDecorator={<CircularProgress id="signUp--circ" variant="solid" thickness={2} />}>
                Submitting…
            </Button>}
        <SignUpDialogue open={open} setOpen={setOpen} success={success} />
    </form>
}