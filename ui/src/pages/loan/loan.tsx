import { useNavigate } from "react-router-dom"
import { LoanForm } from "../../components/forms/loan"
import { useState } from "react"
import "./loan.css"
import { LoanDialogue } from "../../components/dialogues/loan/loanDialogue"

export const LoanPage = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(false)
    return <div className="loan--main">
        <div className="loan--header">
            <button className="loan--button" onClick={() => {
                //setOpen(true)
                navigate(-1)
            }}>Back</button>
            <div className="loan--text">Loaner</div>
        </div>
        <div className="loan--body">
            <div className="loan--box">
                <div className="box--header">Create Loan</div>
                <LoanForm setOpen={setOpen} setSuccess={setSuccess} />
                <LoanDialogue open={open} success={success} set={setOpen} />
            </div>
        </div>
    </div>
}