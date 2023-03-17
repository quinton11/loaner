import { Bar } from "../bar"
import "./index.css"

export const SignInForm = () => {
    return <form className="box--main">
        <Bar name={"idCard"} />
        <Bar name={"Email"} />
        <Bar name={"Password"} />
        <button className="form--button">Submit</button>
    </form>
}