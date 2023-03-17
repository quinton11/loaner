import { Bar } from "../bar"
import "./index.css"

export const SignUpForm = () => {
    return <form className="box--main">
        <div className="names">
            <Bar name={"First Name"} isname={true} />
            <Bar name={"Last Name"} isname={true} />
        </div>
        <Bar name={"Email"} />
        <Bar name={"Password"} />
        <Bar name={"Password Again"} />
        <Bar name={"idCard"} />
        <Bar name={"Is Employed"} />
        <Bar name={"Date of Birth"} />
        <button className="form--button">Submit</button>
    </form>
}