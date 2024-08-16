import { useState, useEffect } from "react";
import {THotelCreateAndUpdate} from "../../types/hotel.type.ts";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";

type PutHotelDialogProps = {
    open: boolean;
    handleClose: () => void;
    selectedHotel: THotelCreateAndUpdate;
    updateHotel: (updatedHotel: THotelCreateAndUpdate, id: number) => void;

};

export default function PutHotelDialog({
                                  open,
                                  handleClose,
                                  updateHotel,
                                  selectedHotel
                                }: PutHotelDialogProps) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        if (selectedHotel) {
            setName(selectedHotel.name);
            setAddress(selectedHotel.address);
            setCity(selectedHotel.city);
            setZip(selectedHotel.zip);
            setCountry(selectedHotel.country);
        }
    }, [selectedHotel]);

    const handleUpdate = () => {
        const newHotel: THotelCreateAndUpdate = {
            name,
            address,
            city,
            zip,
            country,
        };
        updateHotel(newHotel, selectedHotel.id as number);
        handleClose();
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Update Hotel</DialogTitle>
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
                                label="Address"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setAddress(e.target.value)}
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
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}