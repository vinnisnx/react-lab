import {useState} from "react";


export default function LogoutForm(props) {

    return (
        <div>
            <h2> Witaj {props.username} </h2>
            <button type="button" onClick={() => props.onLogout()}>Wychodzę</button>
        </div>
    );
}
