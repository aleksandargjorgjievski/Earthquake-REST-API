class EarthquakeService {

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getEarthquakes() {
        try{
            const response = await this.httpClient.get('http://localhost:8080/api/earthquakes');
            return response.json()
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getEarthquakeByMagnitude(magnitude) {
        try{
            const response = await this.httpClient.get(`http://localhost:8080/api/earthquakes/filter?magnitude=${magnitude}`);
            return response.json()
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getEarthquakeByTime(time) {
        try {
            const response = await this.httpClient.get(`http://localhost:8080/api/earthquakes/filter/time?time=${time}`);
            return response.json();
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default EarthquakeService;