import {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import EarthquakeService from '../services/EarthquakeService.tsx'
import HttpClient from '../serviceClients/HttpClient.tsx';
import EarthquakeTable from "./EarthquakeTable.tsx";


const Earthquakes = () => {
    const [earthquakes, setEarthquakes] = useState([]);
    useEffect(() => {
        const earthquakeService = new EarthquakeService(HttpClient)
        const fetchEarthquakes = async () => {
            try{
                const earthquakes = await earthquakeService.getEarthquakes();
                setEarthquakes(earthquakes);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchEarthquakes();
    }, []);
    return (
        <EarthquakeTable earthquakes={earthquakes}></EarthquakeTable>
    )
}

export default Earthquakes;