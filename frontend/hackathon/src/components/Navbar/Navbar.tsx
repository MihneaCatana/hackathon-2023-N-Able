import {useNavigate} from "react-router-dom";

import {Toolbar} from "primereact/toolbar";
import {Button} from "primereact/button";

const Navbar = () => {

    const navigate = useNavigate();

    const links = [{
        name: 'Homepage',
        link: '/homepage'
    }, {
        name: 'Events',
        link: '/events'
    }, {
        name: 'Profile',
        link: '/profile'
    }
        , {
            name: 'Logout',
            link: '/auth'
        }]

    return <Toolbar pt={{
        root: {
            style: {
                background: 'rgba(255, 255, 255, 0.55)',
                borderRadius: '1px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }
        }
    }} start={<p> Applicatie </p>}
                    end={links.map((element) => <Button
                        onClick={() => {
                            navigate(element.link);
                            if (element.name === 'Logout') localStorage.removeItem('account')
                        }} link key={element.name}>{element.name}</Button>)}/>

}

export default Navbar