import { LoanInfo } from "../../../interfaces/loan"
import { LoanCard } from "../loanCard"
import "./index.css"
export const LoanBox = ({ loans }: any) => {
    return <div className="main--loans">
        {loans ? <LoanArea loans={loans} /> : <div className="none">No Loans</div>}
    </div>
}


export const LoanArea = ({ loans }: any) => {
    const l: LoanInfo[] = loans as LoanInfo[]
    return <div className="loan--area">
        {l.map((loan, index) => {
            return <LoanCard loan={loan} key={index} />
        })}
    </div>
}


