import { Button, Paper } from "@mui/material";
import { THotel } from "../types/hotel.type.ts";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import PostHotelDialog from "../components/hotel/PostHotelDialog.tsx";
import PutHotelDialog from "../components/hotel/PutHotelDialog.tsx";
import useHotel from "../hooks/useHotel.tsx";

export default function Hotel() {
    const {hotel, createHotel, updateHotel, deleteHotel} = useHotel();
    const [openPost, setOpenPost] = useState(false);
    const [openPut, setOpenPut] = useState(false);

    const defaultHotel: THotel = {
        id: 0,
        name: "",
        address: "",
        city: "",
        zip: "",
        country: "",
        created: "",
        updated: "",
        numberOfRooms: 0
    }

    const [selectedHotel, setSelectedHotel] = useState<THotel>(defaultHotel)

    const handleOpenPost = () => {
        setOpenPost(true)
    }

    const handleOpenPut = (id: number) => {
        const selectedRowHotel = hotel.find(
            (hotel) => hotel.id === id
        );
        if (selectedRowHotel) {
            setSelectedHotel(selectedRowHotel);
            setOpenPut(true);
        }
    };

    const handleClose = () => {
        setOpenPost(false);
        setOpenPut(false);
    }

    const handleDelete = (id: number) => {
        deleteHotel(id);
    };

    const rows = hotel.map((p) =>({
        id: p.id,
        name: p.name,
        address: p.address,
        rooms: p.numberOfRooms
    }))

    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "name", headerName: "Name", flex: 2},
        {field: "address", headerName: "Address", flex: 3},
        {field: "rooms", headerName: "Rooms", flex: 4},
        {
            field: "update",
            headerName: "Update",
            flex: 5,
            renderCell: (params: GridCellParams) => (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleOpenPut(params.row.id as number)}
                >
                    Update
                </Button>
            )
        },

        {
            field: "delete",
            headerName: "Delete",
            flex: 6,
            renderCell: (params: GridCellParams) => (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDelete(params.row.id as number)}
                >
                    Delete
                </Button>
            )
        }
    ]

    return (
        <>
            <Paper>
                <Button onClick={handleOpenPost}>
                    Create new Hotel
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>

            <PostHotelDialog
                open={openPost}
                handleClose={handleClose}
                createHotel={createHotel}
            />

            <PutHotelDialog
                open={openPut}
                handleClose={handleClose}
                updateHotel={updateHotel}
                selectedHotel={selectedHotel}
            />
        </>
    );
}