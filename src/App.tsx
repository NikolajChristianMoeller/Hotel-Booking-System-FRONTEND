import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import FallBack from "./containers/FallBack.tsx";
import NavBar from "./components/NavBar.tsx";
import Home from "./containers/Home.tsx";
import Hotel from "./containers/Hotel.tsx";
import Room from "./containers/Room.tsx";
import Guest from "./containers/Guest.tsx";
import Reservation from "./containers/Reservation.tsx";

function App() {
    return (
        <>
            <SnackbarProvider maxSnack={3}>
                <CssBaseline />
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/hotels"
                        element={<Hotel />}
                    />
                    <Route
                        path="/rooms"
                        element={<Room />}
                    />
                    <Route
                        path="/guests"
                        element={<Guest />}
                    />
                    <Route
                        path="/reservations"
                        element={<Reservation />}
                    />
                    <Route
                        path="/*"
                        element={<FallBack />}
                    />
                </Routes>
            </SnackbarProvider>
        </>
    );
}

export default App;