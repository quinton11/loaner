import { LoanInfo } from "../../../interfaces/loan"
import { LoanAmortizationBox } from "../../dialogues/amortization";
import { LoanCard } from "../loanCard"
import { useState } from "react"
import "./index.css"
export const LoanBox = ({ loans }: any) => {
    const exists: boolean = (loans && loans.length >= 1);
    return <div className="main--loans" id={!exists ? "main--exist" : ""}>
        {exists ? <LoanArea loans={loans} /> : <div className="none--loans">No Loans</div>}
    </div>
}


export const LoanArea = ({ loans }: any) => {
    const l: LoanInfo[] = loans as LoanInfo[]
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)
    return <div className="loan--area">
        {l.map((loan, ind) => {
            return <LoanCard loan={loan} key={ind} onClick={() => {
                setOpen(true)
                setIndex(ind)
            }} />
        })}
        <LoanAmortizationBox open={open} set={setOpen} loan={l[index]} />
    </div>
}


