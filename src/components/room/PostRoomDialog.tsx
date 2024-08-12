import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import {TRoom} from "../../types/room.type.ts";
import {useState} from "react";

type TCreateRoomDialogProps = {
    open: boolean,
    handleClose: () => void
    createRoom: (room: TRoom ) => void
}

export default function PostRoomDialog({open, handleClose, createRoom}: TCreateRoomDialogProps) {

    const [roomNumber, setRoomNumber] = useState<string>("");
    const [numberOfBeds, setNumberOfBeds] = useState<number>(0);
    const [roomPrice, setRoomPrice] = useState<number>(0);
    const [created, setCreated] = useState<string>("");
    const [updated, setUpdated] = useState<string>("");

    const handleCreate = () => {

        const newRoom: TRoom = {
            id: 0,
            roomNumber: roomNumber,
            numberOfBeds: numberOfBeds,
            roomPrice: roomPrice,
            created: created,
            updated: updated
        }
        createRoom(newRoom);
        handleClose();
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Create new Room</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="Room Number"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setRoomNumber(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Number of Beds"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setNumberOfBeds(Number(e.target.value))}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Room Price"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setRoomPrice(Number(e.target.value))}
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