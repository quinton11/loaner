import { Bar } from "../bar"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';

import "./index.css"
import { convert, signIn } from "./util";

export const SignInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [submit, setSubmit] = useState(false)

    const navigate = useNavigate()
    return <form className="box--main" onSubmit={handleSubmit(async (data) => {
        console.log(data)
        setSubmit(true)

        const done = await signIn("signin", convert(data))
        //on success, navigate to dashboard page
        setSubmit(false)
        if (done) {
            //navigate to dashboard
            console.log("Navigating ro dashboard")
            navigate("/dashboard")
        }
    })}>
        <Bar name={"idCard"} register={register} errors={errors}
            validParams={{ required: { value: true, message: "Required" } }} />
        <Bar name={"Email"} register={register} errors={errors}
            validParams={{
                required: { value: true, message: "Provide an email" },
                pattern: {
                    value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Not a valid email"
                }
            }} />
        <Bar name={"Password"} register={register} errors={errors} />
        {!submit ? <button className="form--button">Submit</button> :
            <Button id="butt-col" startDecorator={<CircularProgress variant="solid" thickness={2} />}>
                Submitting…
            </Button>}
    </form>
}