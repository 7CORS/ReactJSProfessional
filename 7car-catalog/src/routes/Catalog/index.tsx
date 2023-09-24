import './styles.css';
import Header from "../../components/Header";
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

export default function Catalog() {
    return (
        <>
            <Header />
            <main className="car-catalog-main">
                <section id="car-catalog-section" className="car-container">

                    <div className="car-search-bar-container">
                        <SearchBar />
                    </div>

                    <div className="car-catalog-cards-container">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </section>

            </main>
        </>
    );
}