import { useNavigate } from "react-router-dom"
import { LoanForm } from "../../components/forms/loan"
import "./loan.css"

export const LoanPage = () => {
    const navigate = useNavigate()
    return <div className="loan--main">
        <div className="loan--header">
            <button className="loan--button" onClick={() => {
                navigate(-1)
            }}>Back</button>
            <div className="loan--text">Loaner</div>
        </div>
        <div className="loan--body">
            <div className="loan--box">
                <div className="box--header">Create Loan</div>
                <LoanForm/>
            </div>
        </div>
    </div>
}