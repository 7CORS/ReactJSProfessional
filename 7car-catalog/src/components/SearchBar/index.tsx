import './styles.css';

export default function SearchBar() {
    return (
        <form className="car-search-bar">
            <input className="car-form-control" type="text" name="" id="" placeholder="Digite sua busca" />
            <button className='car-search-bar-submit' type="submit">buscar</button>
        </form>
    );
}