import { Button, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import PostRoomDialog from "../components/room/PostRoomDialog.tsx";
import useRoom from "../hooks/useRoom.tsx";

export default function Room() {
    const {room, createRoom} = useRoom();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false);
    }

    const rows = room.map((p) =>({
        id: p.id,
        roomNumber: p.roomNumber,
        numberOfBeds: p.numberOfBeds,
        roomPrice: p.roomPrice,
        created: p.created,
        updated: p.updated,
    }))

    const columns = [
        {field: "roomNumber", headerName: "Room Number", flex: 1},
        {field: "numberOfBeds", headerName: "Number of Beds", flex: 2},
        {field: "roomPrice", headerName: "Room Price", flex: 3},
        {field: "created", headerName: "Created", flex: 4},
        {field: "updated", headerName: "Updated", flex: 5},
    ]

    return (
        <>
            <Paper>
                <Button onClick={handleOpenModal}>
                    Create Room
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>
            <PostRoomDialog
                open={open}
                handleClose={handleCloseModal}
                createRoom={createRoom}
            />
        </>
    );
}