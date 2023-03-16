import "./authMain.css"
import { toggleAuthMode } from "."

export const AuthMain = ({ setAuthMode, setMain }: any) => {
    const setAuth = setAuthMode as React.Dispatch<React.SetStateAction<boolean>>
    const setM = setMain as React.Dispatch<React.SetStateAction<boolean>>
    return <div className="authMain">
        <div className="mainBox">
            <div className="main--header">Loaner</div>
            <div className="main--buttons">
                <button className="main--button" id="signUp" onClick={() => {
                    toggleAuthMode(setAuth, setM, true);
                }}>Sign Up</button>
                <button className="main--button" id="signIn" onClick={() => {
                    toggleAuthMode(setAuth, setM, false);
                }}>Sign In</button>
            </div>
        </div>
    </div>
}

