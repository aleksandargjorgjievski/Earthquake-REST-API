import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const EarthquakeTable = ({ earthquakes }) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: 2, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
            <Table sx={{ minWidth: 600 }} aria-label="earthquake table">
                <TableHead sx={{ backgroundColor: '#34495e' }}>
                    <TableRow>
                        <TableCell align="left" sx={{ color: '#fff', fontWeight: 'bold' }}>Title</TableCell>
                        <TableCell align="left" sx={{ color: '#fff', fontWeight: 'bold' }}>Place</TableCell>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>Mag</TableCell>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>Type</TableCell>
                        <TableCell align="right" sx={{ color: '#fff', fontWeight: 'bold' }}>Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {earthquakes.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} align="center" sx={{ py: 3 }}>
                                <Typography variant="body1" color="textSecondary">No earthquakes found.</Typography>
                            </TableCell>
                        </TableRow>
                    ) : (
                        earthquakes.map((earthquake) => (
                            <TableRow 
                                key={earthquake.id} 
                                sx={{ 
                                    '&:nth-of-type(odd)': { backgroundColor: '#fafafa' },
                                    '&:hover': { backgroundColor: '#f1f1f1' },
                                    borderBottom: '1px solid #eee'
                                }}
                            >
                                <TableCell align="left" sx={{ fontWeight: 'medium' }}>{earthquake.title}</TableCell>
                                <TableCell align="left">{earthquake.place}</TableCell>
                                <TableCell align="center">
                                    <span style={{ 
                                        padding: '4px 8px', 
                                        borderRadius: '4px', 
                                        backgroundColor: earthquake.magnitude > 5 ? '#e74c3c' : (earthquake.magnitude > 3 ? '#f39c12' : '#2ecc71'),
                                        color: '#fff',
                                        fontWeight: 'bold'
                                    }}>
                                        {earthquake.magnitude.toFixed(1)}
                                    </span>
                                </TableCell>
                                <TableCell align="center" sx={{ color: '#7f8c8d', fontSize: '0.85rem' }}>{earthquake.magType}</TableCell>
                                <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>{new Date(earthquake.time).toLocaleString()}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EarthquakeTable;