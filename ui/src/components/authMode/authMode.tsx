import { SignIn } from "../signIn/signIn";
import { SignUp } from "../signUp/signUp";
import "./authMode.css"

export const AuthMode = ({ authMode, setMain }: any) => {
    const authM = authMode as boolean;
    return <div className="authMode">
        {authM ? <SignUp setMain={setMain} /> : <SignIn setMain={setMain} />}
    </div>
}