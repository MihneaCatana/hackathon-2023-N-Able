import Navbar from "../../components/Navbar/Navbar.tsx";

import "./Homepage.css"
import {useEffect, useState} from "react";
import Axios from "axios";
import HomepageCard from "../../components/HomepageCard/HomepageCard.tsx";

type EventType = {
    user: {
        id: number
    },
    event: {
        id: number,
        title: string,
        description: string,
        location: string,
        photoUrl: string,
        date: string,
        ticketPrice: number
    }
}

const Homepage = () => {

    const [eventsList, setEventsList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8080/events').then((res) => {
            console.log(res.data)
            setEventsList(res.data)
        })
    }, [])


    return <>
        <div className='homepage_container'>
            <Navbar/>
            <h1 style={{textAlign: 'center'}}>Sponsored Content</h1>
            <div className='homepage_cards_section'>
                {eventsList.map((elem: EventType) => <HomepageCard description={elem.event.description}
                                                                   photo_url={elem.event.photoUrl}
                                                                   title={elem.event.title}
                                                                   location={elem.event.location}
                                                                   date={elem.event.date}
                                                                   ticket_price={elem.event.ticketPrice}
                                                                   key={elem.event.id}/>)}
            </div>
        </div>
    </>
}

export default Homepage