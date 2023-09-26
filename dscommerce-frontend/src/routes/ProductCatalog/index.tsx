import './styles.css';

import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';
import ProductCatalogCard from '../../components/ProductCatalogCard';
import ButtonNextPage from '../../components/ButtonNextPage';
import { ProductDTO } from '../../models/product';

const product: ProductDTO = {
    id: 1,
    name: 'Computador Gamer XT',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imgUrl: 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg',
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: 'Eletrônicos'
        },
        {
            id: 3,
            name: 'Computadores'
        },
        {
            id: 4,
            name: 'TVs'
        }
    ]
}

export default function ProductCatalog() {
    return (
        <>
            <HeaderClient />
            <main>
                <section className="dsc-container dsc-mt20">
                    <SearchBar />
                    <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">
                        <ProductCatalogCard product={product} />
                        <ProductCatalogCard product={product} />
                        <ProductCatalogCard product={product} />
                        <ProductCatalogCard product={product} />
                        <ProductCatalogCard product={product} />
                        <ProductCatalogCard product={product} />
                        <ProductCatalogCard product={product} />
                        <ProductCatalogCard product={product} />
                        <ProductCatalogCard product={product} />
                        <ProductCatalogCard product={product} />
                        <ProductCatalogCard product={product} />
                    </div>
                    <ButtonNextPage />
                </section>
            </main>
        </>
    );
}