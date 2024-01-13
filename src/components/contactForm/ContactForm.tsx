import { useState, FormEvent  } from "react";

const INIT_STATE = {
    fullName: '',
    email: '',
    message: ''
}

const ContactForm = () => {
    const [formData, setFormData] = useState(INIT_STATE);

    const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target as HTMLInputElement | HTMLTextAreaElement;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('form', formData);
        setFormData(INIT_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input name="fullName" type="text" placeholder="Imię i nazwisko" value={formData.fullName} onChange={handleChange} />
            </div>
            <div>
                <input name="email" type="text" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <textarea name="message" value={formData.message} placeholder="Wiadomość" onChange={handleChange} />
            </div>
            <button type="submit">Wyślij</button>
        </form>
    )
}

export default ContactForm;