/*
Lembrar que terá um input de raio também
*/
import { useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup,
    useMapEvents,
    Circle,
} from 'react-leaflet'

function MapPage({}) {
    function LocationMarker() {
        console.log('Chamou location marker')
        const [position, setPosition] = useState(null)
        console.log('-->', position)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }

    const handleProcessCEP = (cep) => {
        console.log('CLicou botão cep ', cep)
        LocationMarker()
    }

    const cepHandler = (event) => {
        console.log('onChange ', event.target.value)
        setCep((prevState) => {
            console.log(prevState)
            return event.target.value
        })
    }

    const [cep, setCep] = useState('')
    const centerObj = {
        lat: -22.87,
        lng: -43.09,
    }
    const center = [51.505, -0.09]
    const fillBlueOptions = { fillColor: 'blue' }
    const radius = 400

    let showCep = false

    return (
        <>
            <div className="leafletContainer">
                <MapContainer center={center} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />
                    <Marker position={[centerObj.lat, centerObj.lng]}>
                        <Popup>Tem um Pet aqui</Popup>
                    </Marker>
                    <Circle
                        center={center}
                        pathOptions={fillBlueOptions}
                        radius={radius}
                    />
                    {/* <Marker position={[-22.3, -43.1]}>
                        <Popup>Tem um Pet aqui 2</Popup>
                    </Marker> */}
                </MapContainer>
            </div>

            {showCep ? (
                <>
                    <div className="m-2 flex flex-col md:flex-row md:justify-center">
                        <label htmlFor="name">CEP</label>
                        <input
                            className="mx-2 border-2 rounded-sm border-blue"
                            type="text"
                            name="cep"
                            id="cep"
                            placeholder="Digite o CEP"
                            value={cep}
                            onChange={cepHandler}
                            required
                        />
                    </div>
                    <Button
                        onButtonClick={handleProcessCEP}
                        label="Enviar CEP"
                    />
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default MapPage
