import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('typehere@example.com');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div className="App">
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój mail to {email}</h2>
            <input type="text" onChange={handleChange}/>
        </div>
    );
}

export default App;
