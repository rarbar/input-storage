import s from './App.module.css';
import LastPageForm from "./components/LastPageForm/LastPageForm";
import FirstPageForm from "./components/FirstPageForm/FirstPageForm";
import {useState} from "react";


const InitialState = {
    name: '',
    lastName: '',
    email: '',
    tel: '',
    city: '',
    checked: false
}

function App() {
    const [changePage, setChangePage] = useState(true)
    const [formData, setFormData] = useState(InitialState)

    const handel = (event, seTer) => {

        const {name, value} = event.target

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: name === 'checked' ? event.target.checked : value
        }))

        if (name === 'checked') {
            seTer(event.target.checked)
        } else {
            seTer(event.target.value)
        }
    }

    const sendData = (event) => {
        event.preventDefault()
        alert(JSON.stringify(formData))
    }
    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <form onSubmit={sendData}>
                    {changePage
                        ? <FirstPageForm handel={handel}/>
                        : <>
                            <LastPageForm handel={handel}/>
                            <input className={s.sendBtn}
                                   type="submit"
                                   value="Submit"></input>
                        </>
                    }
                </form>
                <button onClick={() => setChangePage(!changePage)}>
                    {changePage ? 'Вперед' : 'Назад'}
                </button>
            </div>
        </div>
    );
}

export default App;
