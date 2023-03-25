import { Bar } from "../bar"
import { useForm } from "react-hook-form";
import { useState } from "react"
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';

import "./index.css"
import { convert, createLoan } from "./util";

export const LoanForm = ({ setOpen, setSuccess }: any) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [submit, setSubmit] = useState(false)

    //const navigate = useNavigate()
    return <form className="box--main" onSubmit={handleSubmit(async (data) => {
        console.log(data)
        setSubmit(true)

        const done = await createLoan("loan/create", convert(data))
        //on success, navigate to dashboard page
        setOpen(true)
        if (done) {
            //navigate to dashboard

            setSuccess(true)
            console.log("Navigating back to dashboard")
            //navigate(-1)
        } else {
            setSuccess(false)
        }
    })}>
        <Bar name={"principal"} register={register} errors={errors}
            validParams={{ required: { value: true, message: "Required" } }} />
        <Bar name={"duration"} register={register} errors={errors} validParams={{
            required: { value: true, message: "Required" },
            validate: (val: number) => {
                if (val > 5) {
                    return "Maximum number of years is 5"
                }
            }
        }} />
        {!submit ? <button className="form--button">Submit</button> :
            <Button id="butt-col" startDecorator={<CircularProgress variant="solid" thickness={2} />}>
                Submitting…
            </Button>}
    </form>
}