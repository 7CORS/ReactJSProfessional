import './styles.css';

import SearchBar from '../../../components/SearchBar';
import ProductCatalogCard from '../../../components/ProductCatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import * as productService from '../../../services/product-service-mock';

export default function ProductCatalog() {
    return (
        <main>
            <section className="dsc-container dsc-mt20">
                <SearchBar />
                <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">

                    {
                        productService.findAll().map(
                            product => <ProductCatalogCard key={product.id} product={product} />)
                    }
                </div>
                <ButtonNextPage />
            </section>
        </main>
    );
}