import { useState } from 'react';
import './styles.css';
import { ChangeEventT, FormEventT } from '../../utils/TypesEvents';

type Props = {
    onSearch?: (searchText: string) => void;
}

export default function SearchBar({ onSearch }: Props) {

    const [text, setText] = useState("");

    function handleChange(event: ChangeEventT) {
        setText(event.target.value);
    }

    function handleSubmit(event: FormEventT) {
        event.preventDefault();
        if (onSearch) {
            onSearch(text);
        }
    }

    function handleResetClick() {
        setText("");
        if (onSearch) {
            onSearch("");
        }
    }

    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit}>
            <button type="submit">🔎︎</button>
            <input
                value={text}
                type="text"
                placeholder="Nome do Produto"
                onChange={handleChange}
            />
            <button onClick={handleResetClick}>🗙</button>
        </form>
    );
}