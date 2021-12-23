import './Form.css';
import { useState } from "react";
import { usersPool } from './usersPool';
import { Button, TextField } from '@mui/material'


export const Form = ({ onPrintMessage }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = usersPool[Math.floor(Math.random() * usersPool.length)];
        onPrintMessage({ text: value, author: user, id: `msg-${Date.now()}` });
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <TextField autoFocus={true} id="outlined-basic" label="Outlined" variant="outlined" value={value} onChange={handleChange} />
            <Button variant="text" type="submit">Отправить</Button>
        </form>
    )

};

