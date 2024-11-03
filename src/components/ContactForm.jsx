import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsOps";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact({ name, number }));
        setName("");
        setNumber("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone"
            />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;
