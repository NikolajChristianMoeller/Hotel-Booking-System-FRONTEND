import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import {THotel} from "../../types/hotel.type.ts";
import {useState} from "react";

type TPostHotelDialogProps = {
    open: boolean,
    handleClose: () => void
    createHotel: (hotel: THotel ) => void
}

export default function PostHotelDialog({open, handleClose, createHotel}: TPostHotelDialogProps) {

    const [name, setName] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [zip, setZip] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    const handleCreate = () => {

        const newHotel: THotel = {
            id: 0,
            name: name,
            street: street,
            city: city,
            zip: zip,
            country: country
        }
        createHotel(newHotel);
        handleClose();
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Create new Hotel</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Street"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setStreet(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="City"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Zip"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setZip(e.target.value)}
                            />

                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Country"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setCountry(e.target.value)}
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