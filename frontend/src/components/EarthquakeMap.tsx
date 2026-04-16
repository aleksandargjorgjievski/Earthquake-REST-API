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
        <div style={{ 
            height: '600px', 
            width: '100%', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            border: '1px solid #ddd'
        }}>
            <MapContainer center={center} zoom={2} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {earthquakes.map((earthquake) => (
                    <CircleMarker
                        key={earthquake.id}
                        center={[earthquake.latitude, earthquake.longitude]}
                        radius={Math.max(6, earthquake.magnitude * 2.5)}
                        pathOptions={{ 
                            color: magnitudeColor(earthquake.magnitude),
                            fillColor: magnitudeColor(earthquake.magnitude),
                            fillOpacity: 0.6,
                            weight: 1
                        }}
                    >
                        <Popup>
                            <div style={{ padding: '5px' }}>
                                <h4 style={{ margin: '0 0 8px 0', color: '#2c3e50', fontSize: '1.1rem' }}>{earthquake.title}</h4>
                                <hr style={{ margin: '8px 0' }} />
                                <p style={{ margin: '4px 0' }}><strong>Magnitude:</strong> {earthquake.magnitude}</p>
                                <p style={{ margin: '4px 0' }}><strong>Location:</strong> {earthquake.place}</p>
                                <p style={{ margin: '4px 0', color: '#7f8c8d', fontSize: '0.9rem' }}>
                                    {new Date(earthquake.time).toLocaleString()}
                                </p>
                            </div>
                        </Popup>
                    </CircleMarker>
                ))}
            </MapContainer>
        </div>
    )
}