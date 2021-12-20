import { useState } from "react";
import { usersPool } from '../../usersPool';

export const Form = ({ onPrintMessage }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usersPool);
        let user = usersPool[Math.floor(Math.random() * usersPool.length)];
        onPrintMessage({ text: value, author: user });
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <input type="submit" />
        </form>
    )

};

