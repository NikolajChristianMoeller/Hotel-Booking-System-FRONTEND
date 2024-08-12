import useHotel from "../hooks/useHotel.tsx";
import {Button, Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";
import PostHotelDialog from "../components/hotel/PostHotelDialog.tsx";

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
    }))

    const columns = [
        {field: "name", headerName: "name", flex: 1},
        {field: "street", headerName: "street", flex: 2},
        {field: "city", headerName: "city", flex: 3},
        {field: "zip", headerName: "zip", flex: 4},
        {field: "country", headerName: "country", flex: 5},
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