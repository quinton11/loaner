import { Bar } from "../bar"
import { useForm } from "react-hook-form";
import { convert, signUp } from "./util";

import "./index.css"

export const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    return <form className="box--main" onSubmit={handleSubmit(async (data) => {
        console.log(data)
        await signUp("signup", convert(data))
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
        <button className="form--button">Submit</button>
    </form>
}