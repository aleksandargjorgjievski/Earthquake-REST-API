import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const EarthquakeTable = ({ earthquakes }) => {
    return (
        <TableContainer  sx={{ marginTop: 2, display: 'flex', justifyContent: 'center'}}>
            <Table sx={{ maxWidth: 750 }} aria-label="simple table">
                <TableHead sx={{ background: 'rgb(0 131 40 / 0.47)'}}>
                    <TableRow>
                        <TableCell align="center" sx={{ border: '1px solid black' }}>Title</TableCell>
                        <TableCell align="center" sx={{ border: '1px solid black' }}>Place</TableCell>
                        <TableCell align="center" sx={{ border: '1px solid black' }}>Magnitude</TableCell>
                        <TableCell align="center" sx={{ border: '1px solid black' }}>MagType</TableCell>
                        <TableCell align="center" sx={{ border: '1px solid black' }}>Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {earthquakes.map((earthquake, index) => (
                        <TableRow key={earthquake.id} sx={{ border: '1px solid black', backgroundColor: index % 2 === 0 ? '#bfffbf' : 'white'}}>
                            <TableCell sx={{ border: '1px solid black' }} component="th" scope="row"  align="center">
                                {earthquake.title}
                            </TableCell >
                            <TableCell align="center" sx={{ border: '1px solid black' }}>{earthquake.place}</TableCell>
                            <TableCell align="center" sx={{ border: '1px solid black' }}>{earthquake.magnitude}</TableCell>
                            <TableCell align="center" sx={{ border: '1px solid black' }}>{earthquake.magType}</TableCell>
                            <TableCell align="center" sx={{ border: '1px solid black' }}>{new Date(earthquake.time).toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EarthquakeTable;