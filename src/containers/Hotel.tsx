import { Button, Paper } from "@mui/material";
import { TCountry, THotel } from "../types/hotel.type.ts";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import PostHotelDialog from "../components/hotel/PostHotelDialog.tsx";
import PutHotelDialog from "../components/hotel/PutHotelDialog.tsx";
import useHotel from "../hooks/useHotel.tsx";

const countriesArray: TCountry[] = [
    "AFGHANISTAN",
    "ALBANIA",
    "ALGERIA",
    "ANDORRA",
    "ANGOLA",
    "ANTIGUA AND BARBUDA",
    "ARGENTINA",
    "ARMENIA",
    "AUSTRALIA",
    "AUSTRIA",
    "AZERBAIJAN",
    "BAHAMAS",
    "BAHRAIN",
    "BANGLADESH",
    "BARBADOS",
    "BELARUS",
    "BELGIUM",
    "BELIZE",
    "BENIN",
    "BHUTAN",
    "BOLIVIA",
    "BOSNIA AND HERZEGOVINA",
    "BOTSWANA",
    "BRAZIL",
    "BRUNEI",
    "BULGARIA",
    "BURKINA FASO",
    "BURUNDI",
    "CABO VERDE",
    "CAMBODIA",
    "CAMEROON",
    "CANADA",
    "CENTRAL AFRICAN REPUBLIC",
    "CHAD",
    "CHILE",
    "CHINA",
    "COLOMBIA",
    "COMOROS",
    "CONGO DEMOCRATIC REPUBLIC",
    "CONGO REPUBLIC",
    "COSTA RICA",
    "COTE DIVOIRE",
    "CROATIA",
    "CUBA",
    "CYPRUS",
    "CZECH REPUBLIC",
    "DENMARK",
    "DJIBOUTI",
    "DOMINICA",
    "DOMINICAN REPUBLIC",
    "ECUADOR",
    "EGYPT",
    "EL SALVADOR",
    "EQUATORIAL GUINEA",
    "ERITREA",
    "ESTONIA",
    "ESWATINI",
    "ETHIOPIA",
    "FIJI",
    "FINLAND",
    "FRANCE",
    "GABON",
    "GAMBIA",
    "GEORGIA",
    "GERMANY",
    "GHANA",
    "GREECE",
    "GRENADA",
    "GUATEMALA",
    "GUINEA",
    "GUINEA BISSAU",
    "GUYANA",
    "HAITI",
    "HONDURAS",
    "HUNGARY",
    "ICELAND",
    "INDIA",
    "INDONESIA",
    "IRAN",
    "IRAQ",
    "IRELAND",
    "ISRAEL",
    "ITALY",
    "JAMAICA",
    "JAPAN",
    "JORDAN",
    "KAZAKHSTAN",
    "KENYA",
    "KIRIBATI",
    "KOREA NORTH",
    "KOREA SOUTH",
    "KOSOVO",
    "KUWAIT",
    "KYRGYZSTAN",
    "LAOS",
    "LATVIA",
    "LEBANON",
    "LESOTHO",
    "LIBERIA",
    "LIBYA",
    "LIECHTENSTEIN",
    "LITHUANIA",
    "LUXEMBOURG",
    "MADAGASCAR",
    "MALAWI",
    "MALAYSIA",
    "MALDIVES",
    "MALI",
    "MALTA",
    "MARSHALL ISLANDS",
    "MAURITANIA",
    "MAURITIUS",
    "MEXICO",
    "MICRONESIA",
    "MOLDOVA",
    "MONACO",
    "MONGOLIA",
    "MONTENEGRO",
    "MOROCCO",
    "MOZAMBIQUE",
    "MYANMAR",
    "NAMIBIA",
    "NAURU",
    "NEPAL",
    "NETHERLANDS",
    "NEW ZEALAND",
    "NICARAGUA",
    "NIGER",
    "NIGERIA",
    "NORTH MACEDONIA",
    "NORWAY",
    "OMAN",
    "PAKISTAN",
    "PALAU",
    "PALESTINE",
    "PANAMA",
    "PAPUA NEW GUINEA",
    "PARAGUAY",
    "PERU",
    "PHILIPPINES",
    "POLAND",
    "PORTUGAL",
    "QATAR",
    "ROMANIA",
    "RUSSIA",
    "RWANDA",
    "SAINT KITTS AND NEVIS",
    "SAINT LUCIA",
    "SAINT VINCENT AND THE GRENADINES",
    "SAMOA",
    "SAN MARINO",
    "SAO TOME AND PRINCIPE",
    "SAUDI ARABIA",
    "SENEGAL",
    "SERBIA",
    "SEYCHELLES",
    "SIERRA LEONE",
    "SINGAPORE",
    "SLOVAKIA",
    "SLOVENIA",
    "SOLOMON ISLANDS",
    "SOMALIA",
    "SOUTH AFRICA",
    "SOUTH SUDAN",
    "SPAIN",
    "SRI LANKA",
    "SUDAN",
    "SURINAME",
    "SWEDEN",
    "SWITZERLAND",
    "SYRIA",
    "TAIWAN",
    "TAJIKISTAN",
    "TANZANIA",
    "THAILAND",
    "TIMOR LESTE",
    "TOGO",
    "TONGA",
    "TRINIDAD AND TOBAGO",
    "TUNISIA",
    "TURKEY",
    "TURKMENISTAN",
    "TUVALU",
    "UGANDA",
    "UKRAINE",
    "UNITED ARAB EMIRATES",
    "UNITED KINGDOM",
    "UNITED STATES",
    "URUGUAY",
    "UZBEKISTAN",
    "VANUATU",
    "VATICAN CITY",
    "VENEZUELA",
    "VIETNAM",
    "YEMEN",
    "ZAMBIA",
    "ZIMBABWE"
];

export default function Hotel() {
    const {hotel, createHotel, updateHotel, deleteHotel} = useHotel();
    const [openPost, setOpenPost] = useState(false);
    const [openPut, setOpenPut] = useState(false);

    const defaultParticipant: THotel = {
        id: 0,
        name: "",
        address: "",
        city: "",
        zip: "",
        country: "DENMARK",
        created: "",
        updated: "",
        rooms: []
    }

    const [selectedHotel, setSelectedHotel] = useState<THotel>(defaultParticipant)

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
        rooms: p.rooms
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
                countriesArray={countriesArray}
            />

            <PutHotelDialog
                open={openPut}
                handleClose={handleClose}
                updateHotel={updateHotel}
                countriesArray={countriesArray}
                selectedHotel={selectedHotel}
            />
        </>
    );
}