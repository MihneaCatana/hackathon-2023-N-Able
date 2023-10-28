import {useState} from "react";
import "./Authentification.css"
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Authentification = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [registerMode, setRegisterMode] = useState(false)

    const submit = () => {

        let nrError = "";
        
        if (registerMode) {

            if (username.length < 5) {
                toast.error('Username must have at least 5 characters!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
                nrError += 'username_err ';
            }

        }

        if (email.length < 1 || !/^[a-zA-Z0-9_.+-]+@gmail\.com$/.test(email)) {
            toast.error('Invalid email!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
            nrError += ' email_err ';
        }

        if (password.length < 6) {
            toast.error('Password must have at least 6 characters!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
            nrError += ' password_err ';
        }

        if (!nrError.length)
            console.log('Success')
    }

    return <>
        <div className={'auth_container'}>

            <div className={'auth_card'}>
                {registerMode ?
                    <>
                        <div className={'auth_title'}>Register</div>
                        <InputText className={'auth_inputs'} placeholder={'Username'} value={username}
                                   onChange={(e) => setUsername(e.target.value)}/>

                    </>
                    : <div className={'auth_title'}>Login</div>

                }
                <InputText className={'auth_inputs'} placeholder={'Email'} value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                <Password className={'auth_inputs auth_password'} placeholder={'Password'} feedback={false}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          toggleMask/>
                <Button className={'auth_submit'} onClick={submit} label={registerMode ? 'Register' : 'Login'}/>
                <Button className={'auth_changeMode'} label={registerMode ? "Already have an account?" : "Register now"}
                        onClick={() => {
                            registerMode ? setRegisterMode(false) : setRegisterMode(true)
                        }} link/>
            </div>
        </div>
        <ToastContainer/>
    </>
}

export default Authentification