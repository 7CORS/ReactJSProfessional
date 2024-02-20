import './styles.css';

import { useState, useEffect } from 'react';

import ButtonNextPage from '../../../components/ButtonNextPage';
import SearchBar from '../../../components/SearchBar';

import * as productService from '../../../services/product-service';
import ProductCatalogCard from '../../../components/ProductCatalogCard';
import { ProductDTO } from '../../../models/product';
import { isAuthenticated } from '../../../services/auth-service';

type QueryParams = {
    page: number;
    name: string;
}

export default function ProductCatalog() {
    const [isLastPage, setIsLastPage] = useState(false);
    const [products, setProducts] = useState<ProductDTO[]>([]);
    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    useEffect(() => {

        console.log("AUTENTICADO!", isAuthenticated());

        productService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
                const nextPage = response.data.content;
                setProducts(currentProducts => currentProducts.concat(nextPage));
                setIsLastPage(response.data.last);
            });

    }, [queryParams]);

    function handleSearch(searchText: string) {
        setProducts([]);
        setQueryParams({ ...queryParams, page: 0, name: searchText });
    }

    function handleNextPageClick() {
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
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

                {
                    !isLastPage &&
                    <div onClick={handleNextPageClick}>
                        <ButtonNextPage />
                    </div>
                }
            </section>
        </main>
    );
}