import {useEffect, useState} from "react";

import HomepageCard from "../../components/HomepageCard/HomepageCard.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";

import {TabPanel, TabView} from "primereact/tabview";

import Axios from "axios";

import "./Homepage.css"


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
        ticketUrl: string,
        ticketPrice: number
    }
}

const Homepage = () => {

    const [eventsList, setEventsList] = useState([])
    const [tabValue, setTabValue] = useState<number>(0);
    const arrayCategories = ['', 'Cultural', 'Outdoors', 'Sport', 'Concert']

    useEffect(() => {
        Axios.get(`http://localhost:8080/events${tabValue != 0 ? '?tag=' + arrayCategories[tabValue] : ''}`).then((res) => {
            console.log(res.data)
            setEventsList(res.data)
        }).catch(() => {
            setEventsList([])
        })
    }, [tabValue])


    return <>
        <div className='homepage_container'>
            <Navbar/>
            <TabView activeIndex={tabValue} onTabChange={(event) => setTabValue(event.index)}
                     style={{marginTop: '0rem'}}>
                <TabPanel header="Sponsored Content">
                    <h1 style={{textAlign: 'center'}}>Sponsored Content</h1>
                    <div className='homepage_cards_section'>
                        {eventsList.length ? eventsList.map((elem: EventType) => <HomepageCard
                            description={elem.event.description}
                            ticketUrl={elem.event.ticketUrl}
                            photo_url={elem.event.photoUrl}
                            title={elem.event.title}
                            location={elem.event.location}
                            date={elem.event.date}
                            ticket_price={elem.event.ticketPrice}
                            key={elem.event.id}/>) : <p> There are no events. Please come back later!</p>}
                    </div>
                </TabPanel>
                <TabPanel header="Cultural">
                    <h1 style={{textAlign: 'center'}}>Cultural</h1>
                    <div className='homepage_cards_section'>
                        {eventsList.length ? eventsList.map((elem: EventType) => <HomepageCard
                            description={elem.event.description}
                            ticketUrl={elem.event.ticketUrl}
                            photo_url={elem.event.photoUrl}
                            title={elem.event.title}
                            location={elem.event.location}
                            date={elem.event.date}
                            ticket_price={elem.event.ticketPrice}
                            key={elem.event.id}/>) : <p> There are no events. Please come back later!</p>}
                    </div>
                </TabPanel>
                <TabPanel header="Outdoors">
                    <h1 style={{textAlign: 'center'}}>Outdoors</h1>
                    <div className='homepage_cards_section'>
                        {eventsList.length ? eventsList.map((elem: EventType) => <HomepageCard
                            description={elem.event.description}
                            ticketUrl={elem.event.ticketUrl}
                            photo_url={elem.event.photoUrl}
                            title={elem.event.title}
                            location={elem.event.location}
                            date={elem.event.date}
                            ticket_price={elem.event.ticketPrice}
                            key={elem.event.id}/>) : <p> There are no events. Please come back later!</p>}
                    </div>
                </TabPanel>
                <TabPanel header="Sport">
                    <h1 style={{textAlign: 'center'}}>Sport</h1>
                    <div className='homepage_cards_section'>
                        {eventsList.length ? eventsList.map((elem: EventType) => <HomepageCard
                            description={elem.event.description}
                            ticketUrl={elem.event.ticketUrl}
                            photo_url={elem.event.photoUrl}
                            title={elem.event.title}
                            location={elem.event.location}
                            date={elem.event.date}
                            ticket_price={elem.event.ticketPrice}
                            key={elem.event.id}/>) : <p> There are no events. Please come back later!</p>}
                    </div>
                </TabPanel>
                <TabPanel header="Concert">
                    <h1 style={{textAlign: 'center'}}>Concert</h1>
                    <div className='homepage_cards_section'>
                        {eventsList.length ? eventsList.map((elem: EventType) => <HomepageCard
                            ticketUrl={elem.event.ticketUrl}
                            description={elem.event.description}
                            photo_url={elem.event.photoUrl}
                            title={elem.event.title}
                            location={elem.event.location}
                            date={elem.event.date}
                            ticket_price={elem.event.ticketPrice}
                            key={elem.event.id}/>) : <p> There are no events. Please come back later!</p>}
                    </div>
                </TabPanel>
            </TabView>

        </div>
    </>
}

export default Homepage