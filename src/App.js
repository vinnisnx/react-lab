import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('typehere@example.com');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message = '';
    if (email.length < 10) {
        message = 'Email jest którki';
    } else if (email.length < 20) {
        message = 'Jest OK';
    } else {
        message = 'Email za długi'
    }

    return (
        <div className="App">
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój mail to {email}</h2>
            <div>{message}</div>
            <input type="text" onChange={handleChange}/>
            <button type="button" onClick={() => alert(email)}>
                LogIn
            </button>
        </div>
    );
}

export default App;
