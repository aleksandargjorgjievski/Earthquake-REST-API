import {useState, useEffect} from 'react';
import EarthquakeService from '../services/EarthquakeService.tsx'
import HttpClient from '../serviceClients/HttpClient.tsx';
import EarthquakeTable from "./EarthquakeTable.tsx";
import FilterButtons from "./FilterButtons.tsx";
import EarthquakeMap from "./EarthquakeMap.tsx";


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
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "stretch", minHeight: "90vh" }}>
                <div style={{ flex: 1 }}>
                    <FilterButtons
                        fetchEarthquakesByMagnitude={fetchEarthquakesByMagnitude}
                        fetchEarthquakesByTime={fetchEarthquakesByTime}
                    />
                    <EarthquakeTable earthquakes={earthquakes} />
                </div>

                <div style={{ flex: 1, minWidth: 400, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <EarthquakeMap earthquakes={earthquakes} />
                </div>
            </div>
        </div>
    );
};

export default Earthquakes;