import { LoanInfo } from "../../interfaces/loan"
import { LogoutDialogue } from "../dialogues/logout"
import { useState } from 'react'
import "./index.css"

export const MetaBox = ({ loans }: any) => {
    const l: LoanInfo[] = loans as LoanInfo[]
    const exists: boolean = (loans && l.length > 0);
    const [open, setOpen] = useState(false)
    return <div className="main--meta">
        <div className="meta--header">
            Meta
        </div>
        <div className="meta--body">
            <div className="meta--loans">
                <div className="meta-loans--header">Total Loans</div>
                <div className="meta-loans--value">{exists ? l.length : 0}</div>
            </div>

            <div className="meta--si">
                <div className="meta-loans--header">Monthly Rate</div>
                <div className="meta-loans--value">%{exists ? (l[0].rate / 12).toFixed(2) : 0}</div>
            </div>
            <div className="meta--np">
                <div className="meta-np--header">End Session</div>
                <div className="meta-np--value">
                    {/* <div className="np--amount">
                        <div className="np-amt--title">Amt</div>
                        <div className="np-amt--value">
                            <span id="np-g">GHC</span>
                            20
                        </div>
                    </div>
                    <div className="np--date">
                        <div className="np-date--title">Date</div>
                        <div className="np-date--value">
                            <span id="np-m">Mar </span>
                            20 2023
                        </div>
                    </div> */}
                    <button className="logout--button"
                        onClick={() => {
                            setOpen(true)
                        }}>Log out</button>
                    <LogoutDialogue open={open} setOpen={setOpen} />
                </div>
            </div>

        </div>

    </div>
}