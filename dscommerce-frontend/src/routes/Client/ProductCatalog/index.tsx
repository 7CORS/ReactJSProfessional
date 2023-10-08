import './styles.css';

import { useState, useEffect } from 'react';

import ButtonNextPage from '../../../components/ButtonNextPage';
import SearchBar from '../../../components/SearchBar';

import * as productService from '../../../services/product-service';
import ProductCatalogCard from '../../../components/ProductCatalogCard';
import { ProductDTO } from '../../../models/product';

export default function ProductCatalog() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        productService.findAll()
            .then(response => {
                setProducts(response.data.content);
            });

    }, []);

    return (
        <main>
            <section className="dsc-container dsc-mt20">
                <SearchBar />
                <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">

                    {
                        products.map(
                            product => <ProductCatalogCard key={product.id} product={product} />)
                    }
                </div>
                <ButtonNextPage />
            </section>
        </main>
    );
}