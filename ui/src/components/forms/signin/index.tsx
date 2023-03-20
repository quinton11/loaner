import { Bar } from "../bar"
import { useForm } from "react-hook-form";

import "./index.css"

export const SignInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    return <form className="box--main" onSubmit={handleSubmit(async (data) => {
        console.log(data)
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
        <button className="form--button">Submit</button>
    </form>
}