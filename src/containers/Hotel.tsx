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
        address: p.address,
        rooms: p.rooms,
    }))

    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "name", headerName: "Name", flex: 2},
        {field: "address", headerName: "Address", flex: 3},
        {field: "room", headerName: "Room", flex: 4},
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