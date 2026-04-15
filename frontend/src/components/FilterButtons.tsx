import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

type FilterButtonsProps = {
    fetchEarthquakesByMagnitude: (magnitude: number) => void;
    fetchEarthquakesByTime: (time: number) => void;
};

export default function FilterButtons({fetchEarthquakesByMagnitude, fetchEarthquakesByTime}:FilterButtonsProps)  {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
                <div>Filters:</div>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button
                    style={{ border: '1px solid black', color: 'black'}}
                    onClick={() => fetchEarthquakesByMagnitude(2)}
                >
                    Magnitude {'>'} 2
                </Button>
                <Button
                    style={{ border: '1px solid black', color: 'black'}}
                    onClick={() => fetchEarthquakesByTime(Date.now() - (30 * 60 * 1000))}
                >
                    Last 30 min
                </Button>
                <Button
                    style={{ border: '1px solid black', color: 'black'}}
                    onClick={() => fetchEarthquakesByTime(Date.now() - (5 * 60 * 1000))}
                >
                    Last 5 min
                </Button>
            </ButtonGroup>
            </div>
        </Box>

    );
}