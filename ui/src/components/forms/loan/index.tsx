import { Bar } from "../bar"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./index.css"
import { convert, createLoan } from "./util";

export const LoanForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    return <form className="box--main" onSubmit={handleSubmit(async (data) => {
        console.log(data)
        const done = await createLoan("loan/create", convert(data))
        //on success, navigate to dashboard page
        if (done) {
            //navigate to dashboard
            console.log("Navigating back to dashboard")
            navigate(-1)
        }
    })}>
        <Bar name={"principal"} register={register} errors={errors}
            validParams={{ required: { value: true, message: "Required" } }} />
        <Bar name={"Due Date"} register={register} errors={errors} />
        <button className="form--button">Submit</button>
    </form>
}