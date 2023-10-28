import Navbar from "../../components/Navbar/Navbar.tsx";

const Events = () => {

    const city = localStorage.getItem('defaultCity');

    return <>
        <Navbar/>
        <h2>Your current city: {city}</h2>
    </>
}

export default Events