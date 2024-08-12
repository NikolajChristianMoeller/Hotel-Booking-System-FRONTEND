import { Paper } from "@mui/material";

/**
 * Home component.
 */
function Home() {

    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    padding: 2,
                    margin: 2,
                    borderRadius: 2
                }}
            >
                <div>
                    Home
                </div>
            </Paper>
        </>
    );
}

export default Home;
