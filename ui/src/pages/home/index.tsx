import "./index.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUser } from "./util"
import { LoanBox } from "../../components/loans/loanBox"
import { SessionDialogue } from "../../components/dialogues/session/session"
import { MetaBox } from "../../components/meta"
import { MiddleBox } from "../../components/middleBox"

export const HomePage = () => {
    //make request for user information
    //to populate fields
    const [user, setUser] = useState(null)
    const [sessionEnd, setSessionEnd] = useState(false)
    /* const [newloan, setNewLoan] = useState(false) */
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            fetchUser("user").then((res) => {
                if (res) {
                    setUser(res.data)
                } else {
                    setSessionEnd(true)
                }
            })
        }
    })
    return <div className="dashboard">
        <div className="dash--header">Loaner</div>
        <div className="dash--body">
            <div className="top--box">
                <button className="loan--button" onClick={() => {
                    navigate("/user/loan/request")
                    /* setNewLoan(true) */
                }}>New Loan</button>
                <div className="welcome">
                    <div className="welcome--text">Welcome,</div>
                    <div className="welcome--name">
                        {user ? (user["firstName"] as string).toLowerCase() : ""}
                    </div>
                </div>
            </div>
            <MiddleBox loans={user ? user["loans"] : null} />
            <div className="main--box">
                <div className="main--details">
                    <div className="main--private">
                        <div className="private--header">
                            Private
                        </div>
                        <div className="private--body">
                            <div className="info">
                                <span className="field">Name </span>
                                - {user ? `${user["firstName"]} ${user["lastName"]}` : ""}
                            </div>
                            <div className="info">
                                <span className="field">Email </span>
                                - {user ? user["email"] : ""}
                            </div>
                            <div className="info">
                                <span className="field">IdCard </span>
                                - {user ? user["idCard"] : ""}
                            </div>

                        </div>
                    </div>
                    <MetaBox loans={user ? user["loans"] : null} />
                </div>
                <LoanBox loans={user ? user["loans"] : null} />
            </div>
            <SessionDialogue open={sessionEnd} />
            {/* <LoanDialogue open={newloan} set={setNewLoan} /> */}
        </div>
    </div>
}