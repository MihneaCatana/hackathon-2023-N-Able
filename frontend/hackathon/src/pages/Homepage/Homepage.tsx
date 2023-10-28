import Navbar from "../../components/Navbar/Navbar.tsx";
import HomepageCard from "../../components/HomepageCard/HomepageCard.tsx";

import "./Homepage.css"


const Homepage = () => {

    const testData = [{
        title: '2024 4th Power System and Green Energy Conference',
        description: 'As the development of economy, environment has been polluted and damaged seriously. To prevent global climate disasters, large scale development and utilization of green energy, have become an important part of the energy strategy of all countries in the world. Currently, green energy, such as wind power and solar power, has been developed rapidly and has played an important role in energy supply. However, the power system operation is facing a big challenge for a large amount of green energy integration due to its randomness and fluctuation.\n' +
            '\n' +
            '\n' +
            '\n' +
            'This conference focuses on the latest research on "power system and green energy", and it is dedicated to promoting the exchange and discussion among scientists, scholars, researchers and engineers of power industry on the above topic. Thus, it will promote the development of power system and green energy.',
        location: 'Shanghai',
        photo_url: 'https://media.istockphoto.com/id/589582454/photo/night-view-of-shanghai-city.jpg?s=612x612&w=0&k=20&c=LgH8gy8XtjCJ0ioQlscBMfABdCT1aFl0t8jcL6XUL1o=',
        date: '12/04/2024',
        ticket_price: 10
    }, {
        title: '2024 4th Power System and Green Energy Conference',
        description: 'As the development of economy, environment has been polluted and damaged seriously. To prevent global climate disasters, large scale development and utilization of green energy, have become an important part of the energy strategy of all countries in the world. Currently, green energy, such as wind power and solar power, has been developed rapidly and has played an important role in energy supply. However, the power system operation is facing a big challenge for a large amount of green energy integration due to its randomness and fluctuation.\n' +
            '\n' +
            '\n' +
            '\n' +
            'This conference focuses on the latest research on "power system and green energy", and it is dedicated to promoting the exchange and discussion among scientists, scholars, researchers and engineers of power industry on the above topic. Thus, it will promote the development of power system and green energy.',
        location: 'Shanghai',
        photo_url: 'https://media.istockphoto.com/id/589582454/photo/night-view-of-shanghai-city.jpg?s=612x612&w=0&k=20&c=LgH8gy8XtjCJ0ioQlscBMfABdCT1aFl0t8jcL6XUL1o=',
        date: '12/04/2024',
        ticket_price: 10
    }
    ]

    return <>
        <div className='homepage_container'>
            <Navbar/>
            <h1 style={{textAlign: 'center'}}>Sponsored Content</h1>
            <div className='homepage_cards_section'>
                {testData.map((elem) => <HomepageCard {...elem} key={elem.title}/>)}
            </div>
        </div>
    </>
}

export default Homepage