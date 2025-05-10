import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('typehere@example.com');
    const [text_box, setBox] = useState(<input type="text" onChange={handleChange}/>);
    const [button, setButton] = useState(<button type="button" onClick={login}>LogIn</button>);
    const [instruction, setInstruction] = useState(<div>Wpisz swoj email żeby zalogować</div>);
    const [refreshPage, setRefresher] = useState(<button hidden type="button" onClick={logout}>LogOut</button>);
    const [flag, setFlag] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function login() {
        setFlag(true)
        setInstruction(<div hidden>Wpisz swoj email żeby zalogować</div>)
        setBox(<input hidden type="text" onChange={handleChange}/>)
        setButton(<button hidden type="button" onClick={login}>LogIn</button>)
        setRefresher(<button type="button" onClick={logout}>LogOut</button>)
    }

    function logout() {
        setFlag(false)
        setInstruction(<div>Wpisz swoj email żeby zalogować</div>)
        setBox(<input type="text" onChange={handleChange}/>)
        setButton(<button type="button" onClick={login}>LogIn</button>)
        setRefresher(<button hidden type="button" onClick={logout}>LogOut</button>)
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
            <h2>Twoj email {email}</h2>
            {instruction}
            <div>{message}</div>
            {flag && (
                <div>Welcome {email}</div>
            )}
            {text_box}
            {button}
            {refreshPage}

        </div>
    );
}

export default App;
