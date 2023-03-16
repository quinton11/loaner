import { AuthMain } from "../../components/authMain/authMain";
import { AuthMode } from "../../components/authMode/authMode";
import "./index.css"
import { useState } from "react"
export const AuthPage = () => {
    const [authMode, setAuthMode] = useState(false)
    const [main, setMain] = useState(true)
    return <div className="main">
        {main ? <AuthMain setAuthMode={setAuthMode} setMain={setMain} /> :
            <AuthMode authMode={authMode} setMain={setMain} />}
    </div>
};
