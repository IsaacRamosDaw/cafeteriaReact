import './Welcome.scss';
import { Link } from 'react-router-dom';
import React from "react";

function Welcome() {

    const [values, setValues] = React.useState({
        user: "",
        password: "",
    });

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(values);
    }

    function handleChange(evt) {
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
            ...values,
            [name]: value,
        };

        setValues(newValues);
    }

    return (
        <div className="welcome-wrapper">
            <div className="welcome-container">
                <img src="/images/icons/userLogin.svg" alt="User Login" />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="user">User</label>
                    <input
                        id="user"
                        name="user"
                        type="text"
                        value={values.user}
                        onChange={handleChange}
                        placeholder="Your name"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Your password"
                    />
                    <div className='button-container'>
                        <button type="submit">Sign in</button>
                        <Link to="/form">Eres alumno? Regístrate</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Welcome