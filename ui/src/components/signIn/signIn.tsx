import "./signIn.css"
import { toggleMain } from "."
import { SignInForm } from "../forms/signin"

export const SignIn = ({ setMain }: any) => {
    const setM = setMain as React.Dispatch<React.SetStateAction<boolean>>
    return <div className="signIn">
        <div className="signin--header">
            <button className="header--button" onClick={() => {
                toggleMain(setM)
            }}>Back</button>
            <div className="header--text">Loaner</div>
        </div>
        <div className="signin--body">
            <div className="signin--box">
                <div className="box--header">SignIn</div>
                <SignInForm />
            </div>
        </div>
    </div>
}