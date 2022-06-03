import React from 'react';
import {useLocalStorage} from "../hook/useLocalStorage";
import s from "../../App.module.css";

const LastPageForm = ({handel}) => {
    const [tel, setTel] = useLocalStorage("tel", "");
    const [city, setCity] = useLocalStorage("city", "");
    const [checked, setChecked] = useLocalStorage("checked", false);



    return (
        <div className={s.forms}>
                <input
                    type="number"
                    value={tel}
                    onChange={(e) => handel(e,setTel)}
                    placeholder="tel"
                    name="tel"
                />
                <input
                    type="text"
                    value={city}
                    onChange={(e) => handel(e,setCity)}
                    placeholder="city"
                    name="city"
                />
                <label>
                    <input
                        className={s.chekBox}
                        type="checkbox"
                        checked={checked}
                        name="checked"
                        onChange={(e) => handel(e,setChecked)}
                    />Friendly
                </label>

        </div>
    );
};

export default LastPageForm;