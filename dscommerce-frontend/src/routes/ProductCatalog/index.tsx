import './styles.css';

import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';
import ProductCatalogCard from '../../components/ProductCatalogCard';
import ButtonNextPage from '../../components/ButtonNextPage';

export default function ProductCatalog() {
    return (
        <>
            <HeaderClient />
            <main>
                <section className="dsc-container dsc-mt20">
                    <SearchBar />
                    <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                    </div>
                    <ButtonNextPage />
                </section>
            </main>
        </>
    );
}