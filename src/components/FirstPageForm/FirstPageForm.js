import React from 'react';
import {useLocalStorage} from "../hook/useLocalStorage";
import s from "../../App.module.css";

const FirstPageForm = ({handel}) => {

    const [name, setName] = useLocalStorage("name", "");
    const [lastName, setLastName] = useLocalStorage("lastName", "");
    const [age, setAge] = useLocalStorage("age", "");
    const [email, setEmail] = useLocalStorage("email", "");




    return (

        <div className={s.forms}>
                <input
                    type="text"
                    value={name}
                    name='name'
                    onChange={(e) => handel(e,setName)}
                    placeholder="Full name"
                />
                <input
                    type="text"
                    value={lastName}
                    name='lastName'
                    onChange={(e) => handel(e,setLastName)}
                    placeholder="LastName"

                />
            <input
                    type="number"
                    value={age}
                    name='age'
                    onChange={(e) => handel(e,setAge)}
                    placeholder="age"
                />
                <input
                    type="text"
                    value={email}
                    name='email'
                    onChange={(e) => handel(e,setEmail)}
                    placeholder="email"
                />
        </div>
    );
};

export default FirstPageForm;