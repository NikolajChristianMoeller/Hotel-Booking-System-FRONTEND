import { CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home.tsx";
import FallBack from "./containers/FallBack.tsx";
import { SnackbarProvider } from "notistack";
import {Hotel, Room} from "@mui/icons-material";

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