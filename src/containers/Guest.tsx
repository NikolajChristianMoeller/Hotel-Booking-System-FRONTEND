import useGuest from "../hooks/useGuest.tsx";
import {Button, Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";
import PostGuestDialog from "../components/guest/PostGuestDialog.tsx";

export default function Guest() {
    const {guest, createGuest} = useGuest();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false);
    }

    const rows = guest.map((p) =>({
        id: p.id,
        userName: p.userName,
        fullName: p.fullName,
        email: p.email,
        phoneNumber: p.phoneNumber,
    }))

    const columns = [
        {field: "userName", headerName: "User Name", flex: 1},
        {field: "fullName", headerName: "Full Name", flex: 2},
        {field: "email", headerName: "Email", flex: 3},
        {field: "phoneNumber", headerName: "Phone Number", flex: 4},
    ]

    return (
        <>
            <Paper>
                <Button onClick={handleOpenModal}>
                    Create Guest
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>
            <PostGuestDialog
                open={open}
                handleClose={handleCloseModal}
                createGuest={createGuest}
            />
        </>
    );
}