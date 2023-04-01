import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement/* , Legend */ } from "chart.js";

import { Pie, Line } from 'react-chartjs-2'
import "./index.css"
import { LoanInfo } from "../../../interfaces/loan";
import { getYear, getMonth, getPieData, calcAmortPlan, options, optionsPie } from './util';

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement/* , Legend */);

export const LoanAmortizationBox = ({ loan, open, set }: any) => {
    const l = loan as LoanInfo


    return <Dialog open={open} onClose={() => { }} maxWidth={false} >
        <DialogTitle id="loan-dialogue-title">Loan - #{l.id}</DialogTitle>
        <DialogContent>
            <DialogContentText id="loan-dialogue-text">
                Amortization Plan for Loan
            </DialogContentText>
            <div className="amort-content">
                <div className="amort--details">
                    <div className="details">
                        <div className="amort-amount">amt:
                            <div className="rate--value">
                                <span className='ghc'>GHC </span>
                                {l.principal}</div>
                        </div>

                        <div className="amort-rate">at:
                            <div className="rate--value">
                                %{(l.rate / 12).toFixed(2)}
                                <span className='rate-period'> / month</span>
                            </div>
                        </div>
                        <div className="amort-due">due:
                            <div className="rate--value" id="due--date">
                                <span className='rate-period' id="date" >{getMonth(l.payDate)} </span>
                                {getYear(l.payDate)}
                            </div>
                        </div>
                    </div>
                    <div className="details--chart">
                        <Pie data={getPieData(loan)} id="pie--chart" options={optionsPie} />
                    </div>
                </div>
                <div className="amort--visual">
                    <Line data={calcAmortPlan(loan)} options={options}></Line>
                </div>
            </div>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => {
                set(false)
            }} id="loan--button">Close</Button>
        </DialogActions>
    </Dialog>
}

