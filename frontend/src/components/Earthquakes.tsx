import {useState, useEffect} from 'react';
import EarthquakeService from '../services/EarthquakeService.tsx'
import HttpClient from '../serviceClients/HttpClient.tsx';
import EarthquakeTable from "./EarthquakeTable.tsx";
import FilterButtons from "./FilterButtons.tsx";


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

    const fetchEarthquakesByMagnitude = async (magnitude) => {
        const earthquakeService = new EarthquakeService(HttpClient);
        try{
            const earthquakes = await earthquakeService.getEarthquakeByMagnitude(magnitude);
            setEarthquakes(earthquakes);
        }
        catch (error) {
            console.log(error);
        }
    };

    const fetchEarthquakesByTime = async (time) => {
        const earthquakeService = new EarthquakeService(HttpClient);
        try{
            const earthquakes = await earthquakeService.getEarthquakeByTime(time);
            setEarthquakes(earthquakes);
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
        <FilterButtons
            fetchEarthquakesByMagnitude={fetchEarthquakesByMagnitude}
            fetchEarthquakesByTime={fetchEarthquakesByTime}
        />
        <EarthquakeTable earthquakes={earthquakes}></EarthquakeTable>
        </div>
    );
};

export default Earthquakes;