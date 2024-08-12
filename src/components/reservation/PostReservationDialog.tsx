import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import {TReservation} from "../../types/reservation.type.ts";
import {useState} from "react";

type TPostReservationDialogProps = {
    open: boolean,
    handleClose: () => void
    createReservation: (reservation: TReservation ) => void
}

export default function PostReservationDialog({open, handleClose, createReservation}: TPostReservationDialogProps) {

    const [reservationDate, setReservationDate] = useState<string>("");
    const [checkInDate, setCheckInDate] = useState<string>("");
    const [checkOutDate, setCheckOutDate] = useState<string>("");
    const [created, setCreated] = useState<string>("");
    const [updated, setUpdated] = useState<string>("");

    const handleCreate = () => {

        const newReservation: TReservation = {
            id: 0,
            reservationDate: reservationDate,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            created: created,
            updated: updated
        }
        createReservation(newReservation);
        handleClose();
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Create new Reservation</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="Reservation Date"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setReservationDate(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Check In Date"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setCheckInDate(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Check Out Date"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setCheckOutDate(e.target.value)}
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