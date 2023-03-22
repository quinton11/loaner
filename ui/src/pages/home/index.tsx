import "./index.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUser } from "./util"
import { LoanBox } from "../../components/loans/loanBox"
import { SessionDialogue } from "../../components/dialogues/session/session"
/* import { LoanDialogue } from "../../components/dialogues/loan/loanDialogue" */

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
                console.log(res)
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
                    console.log("Loan screen")
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
            <div className="middle--box">
                <div className="middle--text">Dashboard</div>
                <div className="middle--info">
                    <div className="info">Loan Principal Balance</div>
                    <div className="info">%Amount of loan redeemed</div>
                    <div className="info">pie chart of amount redeemed as percentage</div>

                </div>
            </div>
            <div className="main--box">
                <div className="main--details">
                    <div className="main--private">
                        <div className="private--header">
                            Private
                        </div>
                        <div className="private--body">
                            <div className="info">
                                {user ? `${user["firstName"]} ${user["lastName"]}` : ""}
                            </div>
                            <div className="info">
                                {user ? user["email"] : ""}
                            </div>
                            <div className="info">
                                {user ? user["idCard"] : ""}
                            </div>

                        </div>
                    </div>
                    <div className="main--meta">
                        <div className="meta--header">
                            Meta
                        </div>
                        <div className="meta--body">
                            <div className="info">Total loans</div>
                            <div className="info">Pie chart of %loans redeemed</div>
                            <div className="info">Total interest increase over time</div>
                        </div>

                    </div>
                </div>
                <LoanBox loans={user ? user["loans"] : null} />
            </div>
            <SessionDialogue open={sessionEnd} />
            {/* <LoanDialogue open={newloan} set={setNewLoan} /> */}
        </div>
    </div>
}