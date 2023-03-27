import { LoanInfo } from "../../../interfaces/loan"
import { getDay, getMonth, getYear } from "../../dialogues/amortization/util";
/* import { LoanAmortizationBox } from "../../dialogues/amortization";
import { useState } from "react" */

import "./index.css"

export const LoanCard = ({ loan, onClick }: any) => {
    const l = loan as LoanInfo
    /* const [open, setOpen] = useState(false) */
    console.log(l);
    return <div className="loan--card" onClick={onClick}>
        <div className="card--balance">
            <div className="card--header">Amt:</div>
            <div className="card--amount">
                <span id="card-ghc">GHC</span>
                {l.amount}
            </div>
        </div>
        <div className="card--col">
            <div className="card--sub">
                <div className="card--sub-header">Principal:</div>
                <div className="card--sub-amount">
                    <span id="card--sub-ghc">GHC</span>
                    {l.principal}
                </div>
            </div>
            <div className="card--sub">
                <div className="card--sub-header">Interest:</div>
                <div className="card--sub-amount" id="interest">
                    <span id="card--sub-ghc">GHC</span>
                    {l.interest}
                </div>
            </div>
        </div>

        <div className="card--balance">
            <div className="card--header">%Paid:</div>
            <div className="card--amount" id="ir">
                {(l.redeemed / l.amount).toFixed(2)}%
            </div>
        </div>
        <div className="card--col">
            <div className="card--sub">
                <div className="card--sub-header">Taken:</div>
                <div className="card--sub-amount">
                    <span id="card--sub-ghc">{getMonth(l.issueDate)}</span>
                    {getDay(l.issueDate)} {getYear(l.issueDate)}
                </div>
            </div>
            <div className="card--sub">
                <div className="card--sub-header">Due:</div>
                <div className="card--sub-amount" id="interest">
                    <span id="card--sub-ghc">{getMonth(l.payDate)}</span>
                    {getDay(l.payDate)} {getYear(l.payDate)}
                </div>
            </div>
        </div>
        {/*  <LoanAmortizationBox open={open} loan={loan} set={setOpen} /> */}

    </div>
}