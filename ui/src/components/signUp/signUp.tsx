import { toggleMain } from "."
import { SignUpForm } from "../forms/signup"
import "./signUp.css"

export const SignUp = ({ setMain }: any) => {
    const setM = setMain as React.Dispatch<React.SetStateAction<boolean>>
    return <div className="signUp">
        <div className="signup--header">
            <button className="header--button" onClick={() => {
                toggleMain(setM)
            }}>Back</button>
            <div className="header--text">Loaner</div>
        </div>
        <div className="signup--body">
            <div className="signup--box">
                <div className="box--header">SignUp</div>
                <SignUpForm />
            </div>
        </div>
    </div>
}