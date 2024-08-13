import { Button, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import PostHotelDialog from "../components/hotel/PostHotelDialog.tsx";
import useHotel from "../hooks/useHotel.tsx";

export default function Hotel() {
    const {hotel, createHotel} = useHotel();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false);
    }

    const rows = hotel.map((p) =>({
        id: p.id,
        name: p.name,
        street: p.street,
        city: p.city,
        zip: p.zip,
        country: p.country,
        created: p.created,
        updated: p.updated,
    }))

    const columns = [
        {field: "name", headerName: "Name", flex: 1},
        {field: "street", headerName: "Street", flex: 2},
        {field: "city", headerName: "City", flex: 3},
        {field: "zip", headerName: "Zip", flex: 4},
        {field: "country", headerName: "Country", flex: 5},
        {field: "created", headerName: "Created", flex: 6},
        {field: "updated", headerName: "Updated", flex: 7},
    ]

    return (
        <>
            <Paper>
                <Button onClick={handleOpenModal}>
                    Create Hotel
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>
            <PostHotelDialog
                open={open}
                handleClose={handleCloseModal}
                createHotel={createHotel}
            />
        </>
    );
}