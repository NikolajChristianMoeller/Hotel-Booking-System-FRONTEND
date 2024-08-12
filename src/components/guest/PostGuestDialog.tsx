import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import {TGuest} from "../../types/guest.type.ts";
import {useState} from "react";

type TPostGuestDialogProps = {
    open: boolean,
    handleClose: () => void
    createGuest: (guest: TGuest ) => void
}

export default function PostGuestDialog({open, handleClose, createGuest}: TPostGuestDialogProps) {

    const [userName, setUserName] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [created, setCreated] = useState<string>("");
    const [updated, setUpdated] = useState<string>("");

    const handleCreate = () => {

        const newGuest: TGuest = {
            id: 0,
            userName: userName,
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber,
            created: created,
            updated: updated
        }
        createGuest(newGuest);
        handleClose();
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Create new Guest</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="User Name"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Created"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setCreated(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Updated"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setUpdated(e.target.value)}
                            />
                        </Grid>

                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}