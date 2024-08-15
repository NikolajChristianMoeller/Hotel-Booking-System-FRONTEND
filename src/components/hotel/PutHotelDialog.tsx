import { useState, useEffect } from "react";
import {TCountry, THotelUpdate} from "../../types/hotel.type.ts";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, TextField} from "@mui/material";

type PutHotelDialogProps = {
    open: boolean;
    handleClose: () => void;
    countriesArray: TCountry[];
    selectedHotel: THotelUpdate;
    updateHotel: (updatedHotel: THotelUpdate, id: number) => void;

};

export default function PutHotelDialog({
                                  open,
                                  handleClose,
                                  updateHotel,
                                  countriesArray,
                                  selectedHotel
                                }: PutHotelDialogProps) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState<TCountry>("DENMARK");
    const [created, setCreated] = useState("");
    const [updated, setUpdated] = useState("");

    useEffect(() => {
        if (selectedHotel) {
            setName(selectedHotel.name);
            setAddress(selectedHotel.address);
            setCity(selectedHotel.city);
            setZip(selectedHotel.zip);
            setCountry(selectedHotel.country);
            setCreated(selectedHotel.created);
            setUpdated(selectedHotel.updated);
        }
    }, [selectedHotel]);

    const handleUpdate = () => {
        const newHotel: THotelUpdate = {
            name,
            address,
            city,
            zip,
            country,
            created,
            updated,
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
                                onChange={(e) => setCountry(e.target.value as TCountry)}
                            >
                                {countriesArray.map((country) => (
                                    <MenuItem value={country}>{country}</MenuItem>
                                ))}
                            </TextField>
                            //Hvorfor SKAL jeg udfylde Textfield sluttag heroppe?^
                            //Hvorfor SKAL jeg udfylde Textfield her?
                            //Hvorfor SKAL jeg udfylde Textfield her?
                            //Hvorfor SKAL jeg udfylde Textfield her?
                            //Hvorfor SKAL jeg udfylde Textfield her?
                            //Hvorfor SKAL jeg udfylde Textfield her?

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
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}