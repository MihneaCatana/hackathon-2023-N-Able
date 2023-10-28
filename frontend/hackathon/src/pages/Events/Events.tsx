import Navbar from "../../components/Navbar/Navbar.tsx";
import {CircleMarker, MapContainer, Popup, TileLayer} from "react-leaflet";
import {useEffect, useState} from "react";
import Axios from "axios";

const Events = () => {

    const [eventsList, setEventsList] = useState([])

    useEffect(() => {
        Axios.get(`http://localhost:8080/events`).then((res) => {
            console.log(res.data)
            setEventsList(res.data)
        }).catch(() => {
            setEventsList([])
        })
    }, [])

    const city = localStorage.getItem('defaultCity');

    const cities = [{
        city: 'Rome',
        latitude: 41.902782,
        longitude: 12.496366,
        pointsOfAttraction: [{
            location: [41.904755, 12.454628],
            label: 'Vatican City'
        }, {
            location: [41.912449266223575, 12.475234737421543],
            label: 'Piazzale Flaminio'
        },
        ]
    }, {
        city: 'Bucharest',
        latitude: 44.439663,
        longitude: 26.096306,
        pointsOfAttraction: [{
            location: [44.43162741255573, 26.099569700441716],
            label: 'Centru Vechi'
        }, {
            location: [44.44192833206751, 26.097311238857845],
            label: 'Ateneu'
        }, {
            location: [44.467918524068466, 26.07811946559796],
            label: 'Arc de Triumf'
        }]
    }
    ]

    const selectedCity = cities.filter((cityObj) => cityObj.city === city)[0]

    return <>
        <Navbar/>
        <h2>Your current city: {city} </h2>
        <MapContainer center={[selectedCity.latitude, selectedCity.longitude]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {selectedCity.pointsOfAttraction.map((point) => <CircleMarker
                center={{lat: point.location[0], lng: point.location[1]}}
                pathOptions={{color: 'red'}} radius={30} key={point.label}>
                <Popup>{point.label}</Popup>
            </CircleMarker>)}
            {eventsList.map((event) => <CircleMarker
                center={{lat: event.event.coords.split(',')[0], lng: event.event.coords.split(',')[1]}}
                pathOptions={{color: 'blue'}} radius={30} key={event.event.title}>
                <Popup>{event.event.title}</Popup>
            </CircleMarker>)}
        </MapContainer>
    </>
}

export default Events