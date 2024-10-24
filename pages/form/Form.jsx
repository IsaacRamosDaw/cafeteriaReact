import './Form.css';
import React from "react";

function Form() {
    const [values, setValues] = React.useState({
        center: "",
        name: "",
        email: "",
        age: "",
        course: "",
        password: "",
    });

    function handleSubmit(evt) {
        evt.preventDefault();
        // Aquí puedes usar values para enviar la información
        console.log(values); // Por ejemplo, puedes enviar esto a una API
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
        <form onSubmit={handleSubmit}>
            <label htmlFor="center">Select Center</label>
            <select
                id="center"
                name="center"
                value={values.center}
                onChange={handleChange}
            >
                <option value="">Select an option</option>
                <option value="center1">Center 1</option>
                <option value="center2">Center 2</option>
                <option value="center3">Center 3</option>
            </select>

            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
            />

            <label htmlFor="age">Age</label>
            <input
                id="age"
                name="age"
                type="number"
                value={values.age}
                onChange={handleChange}
            />

            <label htmlFor="course">Course</label>
            <input
                id="course"
                name="course"
                type="text"
                value={values.course}
                onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
            />

            <button type="submit">Log in</button>
        </form>
    );
}

export default Form;

