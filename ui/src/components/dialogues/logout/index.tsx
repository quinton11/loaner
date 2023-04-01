import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { useState } from "react"

import "./index.css"
import { logOut } from './utils';



export const LogoutDialogue = ({ open, setOpen }: any) => {
    const navigate = useNavigate()
    const failedText = "Couldn't log Out"
    const normText = "End Session ?"
    const [content, setContent] = useState(normText)

    return <Dialog
        open={open}
        onClose={() => { }}
        id="logout--box"
    >
        <DialogTitle id="alert-logout-title">
            {"Loaner End Session"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-logout-description">
                {content}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <button id="logout--button" onClick={() => {
                setContent(normText)
                setOpen(false)
            }}>Back</button>
            <button id="logout--button" onClick={async () => {
                const done = await logOut("logout")
                if (done) {
                    navigate("/")
                } else { console.log("Not done") }
                setContent(failedText)
            }}>
                Yes
            </button>
        </DialogActions>
    </Dialog>

}