import {Image} from "primereact/image";
import {Button} from "primereact/button";

import "./HomepageCard.css"

const HomepageCard = ({title, description, location, photo_url, date, ticket_price, ticketUrl}: {
    title: string,
    description: string,
    location: string,
    photo_url: string,
    date: string,
    ticket_price: number,
    ticketUrl: string
}) => {
    return <div className={'sponsor_card'}>
        <div className={'sponsor_card_image'}>
            <Image src={photo_url} alt={title} width='100%' height='100%' preview/>
        </div>
        <div className={'sponsor_card_content'}>
            <div className={'sponsor_card_container_header'}>
                <h2>{title}</h2>
                <i className='pi pi-map-marker' style={{fontSize: '1.2rem', color: '#8a452b'}}
                   onClick={() => window.open("https://www.google.com/maps/place/" + location, '_blank', 'noopener,noreferrer')}>
                    <span style={{fontFamily: 'Poppins, sans-serif', marginLeft: '0.3rem'}}>Location</span></i>
            </div>
            <div className={'sponsor_card_bottom'}>
                <p>{description}</p>
            </div>
            <div className={'sponsor_card_details'}>
                <div>
                    <i className='pi pi-calendar-times'
                       style={{fontSize: '1.2rem', color: '#6366F1'}}>
                        <span style={{fontFamily: 'Poppins, sans-serif', marginLeft: '0.3rem'}}>{date}</span>
                    </i><br/>
                    <i className='pi pi-money-bill' style={{
                        fontSize: '1.2rem',
                        color: '#249a1e',
                        marginTop: 10
                    }}><span style={{
                        fontFamily: 'Poppins, sans-serif',
                        marginLeft: '0.3rem'
                    }}> {ticket_price ? ticket_price + '$' : 'Free'}</span> </i>
                </div>
                <Button
                    onClick={() => window.open(ticketUrl, '_blank', 'noopener,noreferrer')}>Reserve
                    a seat</Button>
            </div>
        </div>
    </div>
}

export default HomepageCard