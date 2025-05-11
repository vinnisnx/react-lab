import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";


function App() {
    const [loggedIn, setLoggedIn] = useState(null);

    function login(username) {
        if (username) {
            setLoggedIn(username)
        }
    }
    function logout() {
        setLoggedIn(null);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedIn
                    ? <LogoutForm username={loggedIn} onLogout={logout}/>
                    : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;
