import {Image} from "primereact/image";

const HomepageCards = ({title, description, ticket_price, date, photo_url}) => {

    return <div className={'sponsor_card'}>
        <div className={'sponsor_card_image'}>
            <Image src={photo_url} alt={title} preview/>
        </div>
        <div className={'sponsor_card_content'}>
            <div className={'sponsor_card_container0_header'}>
                <h2>{title}</h2>

            </div>
            <p>{description}</p>
        </div>
    </div>
}

export default HomepageCards