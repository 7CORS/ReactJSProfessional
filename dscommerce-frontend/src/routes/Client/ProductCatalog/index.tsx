import './styles.css';

import { useState, useEffect } from 'react';

import ButtonNextPage from '../../../components/ButtonNextPage';
import SearchBar from '../../../components/SearchBar';

import * as productService from '../../../services/product-service';
import ProductCatalogCard from '../../../components/ProductCatalogCard';
import { ProductDTO } from '../../../models/product';

type QueryParams = {
    page: number;
    name: string;
}

export default function ProductCatalog() {

    const [products, setProducts] = useState<ProductDTO[]>([]);
    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    useEffect(() => {
        productService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
                setProducts(response.data.content);
            });

    }, [queryParams]);

    function handleSearch(searchText: string) {
        setQueryParams({ ...queryParams, name: searchText });
    }

    return (
        <main>
            <section className="dsc-container dsc-mt20">
                <SearchBar onSearch={handleSearch} />
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