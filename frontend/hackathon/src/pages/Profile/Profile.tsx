import {useState} from "react";

import Navbar from "../../components/Navbar/Navbar.tsx";

import {Card} from "primereact/card";
import {Image} from "primereact/image";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {Checkbox, CheckboxChangeEvent} from "primereact/checkbox";

import "./Profile.css"
import {Dropdown} from "primereact/dropdown";
import {toast, ToastContainer} from "react-toastify";

const Profile = () => {

    const account = JSON.parse(localStorage.getItem('account') || "");
    const passions = localStorage.getItem('passions');
    const defaultCity = localStorage.getItem('defaultCity') || 'Bucharest';
    const [visible, setVisible] = useState(false);
    const [preferences, setPreferences] = useState<string[]>([]);
    const [selectedItem, setSelectedItem] = useState(defaultCity);

    const onPreferencesChange = (e: CheckboxChangeEvent) => {
        const newPrefArray = [...preferences];

        if (newPrefArray.length < 3) {
            if (e.checked)
                newPrefArray.push(e.value);
            else
                newPrefArray.splice(newPrefArray.indexOf(e.value), 1);
        } else {
            if (!e.checked)
                newPrefArray.splice(newPrefArray.indexOf(e.value), 1);
        }

        setPreferences(newPrefArray);
    }

    const listOfPassions = ['Sport', 'Outdoors', 'Cultural', 'Concerts', 'History', 'Dance', 'Singing']


    const cities = [
        {label: 'Bucharest', value: 'Bucharest'},
        {label: 'London', value: 'London'},
        {label: 'Paris', value: 'Paris'},
        {label: 'Berlin', value: 'Berlin'},
        {label: 'Rome', value: 'Rome'},
        {label: 'Madrid', value: 'Madrid'}
    ]

    return <>
        <Navbar/>
        <div className="profile_container">
            <Card title={'Hello ' + account.username} className='profile_card'>
                <Image className='profile_image'
                       src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                       width='200'/>
                <p><b>Your email: </b>{account.email} </p>
                <div>
                    <Dropdown filter value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={cities}
                              virtualScrollerOptions={{itemSize: 38}}
                              placeholder="Select City" className="w-full md:w-14rem"/>
                    <Button style={{marginLeft: '1rem'}}
                            onClick={() => {
                                localStorage.setItem('defaultCity', selectedItem);
                                toast.success('The city has been changed with success!', {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                });
                            }}><i
                        className='pi pi-check'></i></Button>
                </div>
                <p style={{textAlign: 'center'}}><b>Your passions: </b></p>

                <div style={{
                    width: "100%",
                    display: 'flex',
                    marginBottom: '2rem',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
                        {passions?.split(',').map((passion) => <Button link key={passion}>{passion}</Button>)}

                    </div>

                    <div style={{width: '20%', display: "flex"}}>
                        <Button onClick={() => setVisible(true)}> <i className='pi pi-file-edit'></i> </Button>
                    </div>
                    <Dialog header="Change your passions" visible={visible} style={{width: '50vw'}}
                            onHide={() => setVisible(false)}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            {listOfPassions.map((elem, index) => {

                                    return <div style={{display: 'flex', marginBottom: '1rem'}} key={index}><Checkbox
                                        inputId={"preference" + index}
                                        value={elem}
                                        onChange={onPreferencesChange}

                                        checked={preferences.includes(elem)}
                                    />
                                        <label style={{marginLeft: '1rem'}} htmlFor={"preference" + index}
                                               className="ml-2">{elem}</label>
                                    </div>
                                }
                            )}
                            <div style={{width: '100%', display: "flex", justifyContent: 'center'}}>
                                <Button onClick={() => {
                                    setVisible(false);
                                    let newPref: string = "";
                                    for (const pref of preferences)
                                        newPref = newPref + "," + pref
                                    localStorage.setItem('passions', newPref.substring(1))
                                }}>Confirm change</Button>
                            </div>
                        </div>

                    </Dialog>
                </div>
                <Button>Update your Photo</Button>
            </Card>
            <ToastContainer/>
        </div>
    </>
}

export default Profile