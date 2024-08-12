import useReservation from "../hooks/useReservation.tsx";
import {Button, Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";
import PostReservationDialog from "../components/reservation/PostReservationDialog.tsx";

export default function Reservation() {
    const {reservation, createReservation} = useReservation();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false);
    }

    const rows = reservation.map((p) =>({
        id: p.id,
        reservationDate: p.reservationDate,
        checkInDate: p.checkInDate,
        checkOutDate: p.checkOutDate,
        created: p.created,
        updated: p.updated,
    }))

    const columns = [
        {field: "reservationDate", headerName: "Reservation Date", flex: 1},
        {field: "checkInDate", headerName: "Check In Date", flex: 2},
        {field: "checkOutDate", headerName: "Check Out Date", flex: 3},
        {field: "created", headerName: "Created", flex: 4},
        {field: "updated", headerName: "Updated", flex: 5},
    ]

    return (
        <>
            <Paper>
                <Button onClick={handleOpenModal}>
                    Create Reservation
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>
            <PostReservationDialog
                open={open}
                handleClose={handleCloseModal}
                createReservation={createReservation}
            />
        </>
    );
}