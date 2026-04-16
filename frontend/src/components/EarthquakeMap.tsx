import {MapContainer, TileLayer, CircleMarker, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const magnitudeColor = (magnitude: number):string => {
    if (magnitude < 2.5) return '#00b50f';
    if (magnitude < 4) return '#efca00';
    if (magnitude < 6) return '#ff0900';
    if (magnitude < 7) return '#b10000';
    return 'red';
}

export default function EarthquakeMap({ earthquakes }) {
    const center: [number, number] =
        earthquakes.length > 0
        ? [earthquakes[0].latitude, earthquakes[0].longitude]
        : [20, 0];

    return (
        <MapContainer center={center} zoom={2} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {earthquakes.map((earthquake) => (
                <CircleMarker
                    key={earthquake.id}
                    center={[earthquake.latitude, earthquake.longitude]}
                    radius={Math.max(4, earthquake.magnitude * 2)}
                    pathOptions={{ color: magnitudeColor(earthquake.magnitude) }}
                >
                    <Popup>
                        <div>
                            <h3>{earthquake.title}</h3>
                            <p>Magnitude: {earthquake.magnitude}</p>
                            <p>Time: {new Date(earthquake.time).toLocaleString()}</p>
                        </div>
                    </Popup>
                </CircleMarker>
            ))}
        </MapContainer>
    )
}