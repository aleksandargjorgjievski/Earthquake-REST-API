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
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px 40px 20px' }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <FilterButtons
                        fetchEarthquakesByMagnitude={fetchEarthquakesByMagnitude}
                        fetchEarthquakesByTime={fetchEarthquakesByTime}
                    />
                </div>
                
                <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", 
                    gap: "2rem",
                    alignItems: "start"
                }}>
                    <div style={{ width: '100%' }}>
                        <EarthquakeTable earthquakes={earthquakes} />
                    </div>

                    <div style={{ width: '100%' }}>
                        <EarthquakeMap earthquakes={earthquakes} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Earthquakes;