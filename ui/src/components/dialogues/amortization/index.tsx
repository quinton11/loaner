import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useRef,MutableRefObject} from "react"

import "./index.css"
import { LoanInfo, LoanPieItem } from "../../../interfaces/loan";
import { getYear, getMonth,getPieItems } from './util';

import { IgrItemLegendModule, IgrPieChartModule } from 'igniteui-react-charts';
import { IgrItemLegend, IgrPieChart } from 'igniteui-react-charts';
import { ResponsivePie } from '@nivo/pie'

const mods: any[] = [
    IgrItemLegendModule,
    IgrPieChartModule
];
mods.forEach((m) => m.register());

export const LoanAmortizationBox = ({ loan, open, set }: any) => {
    const l = loan as LoanInfo
    const pieLegend = useRef() as MutableRefObject<IgrItemLegend>
    const pieChart = useRef() as MutableRefObject<IgrPieChart>
    const pieitems:LoanPieItem[] = getPieItems(l)
    return <Dialog open={open} onClose={() => { }} >
        <DialogTitle id="loan-dialogue-title">Loan - #{l.id}</DialogTitle>
        <DialogContent>
            <DialogContentText id="loan-dialogue-text">
                Amortization Plan for Loan
            </DialogContentText>
            <div className="amort-content">
                <div className="amort--details">
                    <div className="details">
                        <div className="amort-amount">due:
                            <div className="rate--value">
                                <span className='ghc'>GHC </span>
                                {l.amount}</div>
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
                        <IgrPieChart
                            dataSource={pieitems}
                            valueMemberPath="value"
                            labelMemberPath="category"
                            labelsPosition="BestFit"
                            radiusFactor="0.7"
                            legend={pieLegend}
                            ref={pieChart}>
                        </IgrPieChart>

                    </div>
                </div>
                <div className="amort--visual">
                    Graph of payment and next payment
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


export const RespPie = (l:LoanInfo)=>{
    return <ResponsivePie
        data={getPieItems(l)}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
}