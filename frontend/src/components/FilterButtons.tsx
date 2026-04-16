import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useState} from "react";

type FilterButtonsProps = {
    fetchEarthquakesByMagnitude: (magnitude: number) => void;
    fetchEarthquakesByTime: (time: number) => void;
};
export default function FilterButtons({fetchEarthquakesByMagnitude, fetchEarthquakesByTime}:FilterButtonsProps)  {

    const [selected, setSelected] = useState<"btn-0" | "btn-1" | "btn-2" | "none">("none");

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 3,
                p: 2,
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: '#555' }}>
                    Quick Filters:
                </Typography>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button
                        onClick={() => {
                            setSelected('btn-0');
                            fetchEarthquakesByMagnitude(2)
                        }}
                        sx={{
                            backgroundColor: selected === "btn-0" ? '#3498db' : '#fff',
                            color: selected === "btn-0" ? '#fff' : '#333',
                            '&:hover': {
                                backgroundColor: selected === "btn-0" ? '#2980b9' : '#f5f5f5',
                            },
                            textTransform: 'none',
                            fontWeight: 'normal'
                        }}
                    >
                        Magnitude > 2
                    </Button>
                    <Button
                        onClick={() => {
                            setSelected('btn-1');
                            fetchEarthquakesByTime(Date.now() - (30 * 60 * 1000));
                        }}
                        sx={{
                            backgroundColor: selected === "btn-1" ? '#3498db' : '#fff',
                            color: selected === "btn-1" ? '#fff' : '#333',
                            '&:hover': {
                                backgroundColor: selected === "btn-1" ? '#2980b9' : '#f5f5f5',
                            },
                            textTransform: 'none',
                            fontWeight: 'normal'
                        }}
                    >
                        Last 30 min
                    </Button>
                    <Button
                        onClick={() => {
                            setSelected('btn-2');
                            fetchEarthquakesByTime(Date.now() - (5 * 60 * 1000));
                        }}
                        sx={{
                            backgroundColor: selected === "btn-2" ? '#3498db' : '#fff',
                            color: selected === "btn-2" ? '#fff' : '#333',
                            '&:hover': {
                                backgroundColor: selected === "btn-2" ? '#2980b9' : '#f5f5f5',
                            },
                            textTransform: 'none',
                            fontWeight: 'normal'
                        }}
                    >
                        Last 5 min
                    </Button>
                </ButtonGroup>
            </Box>
        </Box>
    );
}