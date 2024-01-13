import { useState, FormEvent  } from "react";

const INIT_STATE = {
    id: '',
    title: '',
    body: '',
};

const AddPost = () => {
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
        console.log('add post', formData);
        setFormData(INIT_STATE);
    }

    return (
        <div>
            <h1>Dodaj nowego posta</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="id" type="text" placeholder="Id" value={formData.id} onChange={handleChange} />
                </div>
                <div>
                    <input name="title" type="text" placeholder="Tytuł postu" value={formData.title} onChange={handleChange}/>
                </div>
                <div>
                    <input name="body" type="text" placeholder="Treść postu" value={formData.body} onChange={handleChange}/>
                </div>
                <button type="submit">Dodaj posta</button>
            </form>
        </div>
    )
}

export default AddPost;