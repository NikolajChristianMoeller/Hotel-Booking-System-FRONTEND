import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Tooltip,
    useTheme
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import HailIcon from '@mui/icons-material/Hail';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ApartmentIcon from '@mui/icons-material/Apartment';

/**
 * Navbar component.
 */
export default function Navbar() {
    const theme = useTheme();
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: "none",
                borderBottom: `1px solid ${theme.palette.divider}`
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        color: theme.palette.text.primary,
                        fontWeight: "bold",
                        cursor: "pointer",
                        "&:hover": {
                            color: theme.palette.primary.main
                        }
                    }}
                >
                    <Box
                        component="span"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        Q
                    </Box>
                    uick
                    <Box
                        component="span"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        B
                    </Box>
                    ook
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Tooltip title="Home">
                        <IconButton
                            component={Link}
                            to="/"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <HomeIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Hotels">
                        <IconButton
                            component={Link}
                            to="/hotels"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <ApartmentIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Rooms">
                        <IconButton
                            component={Link}
                            to="/rooms"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <HotelIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Guests">
                        <IconButton
                            component={Link}
                            to="/guests"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <HailIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Reservations">
                        <IconButton
                            component={Link}
                            to="/reservations"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <LibraryBooksIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
