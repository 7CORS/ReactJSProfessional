import { useEffect, useState } from 'react';

import './styles.css';

import iconEdit from '../../../assets/images/edit.svg';
import iconDelete from '../../../assets/images/delete.svg';

import * as productService from '../../../services/product-service';
import { ProductDTO } from '../../../models/product';

type QueryParams = {
    page: number;
    name: string;
}

export default function ProductListing() {

    const [isLastPage, setIsLastPage] = useState(false);
    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    useEffect(() => {
        productService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
                const nextPage = response.data.content;
                setProducts(currentProducts => currentProducts.concat(nextPage));
                setIsLastPage(response.data.last);
            });

    }, [queryParams]);

    return (
        <main>
            <section id="product-listing" className="dsc-container">

                <h2 className="dsc-section-title dsc-mb20">Cadastro de Produtos</h2>

                <div className="dsc-btn-page-container dsc-mb20">
                    <div className="dsc-btn dsc-btn-white">Novo</div>
                </div>

                <form className="dsc-search-bar">
                    <button type="submit">🔎︎</button>
                    <input type="text" placeholder="Nome do Produto" />
                    <button type="reset">🗙</button>
                </form>

                <table className="dsc-table dsc-mb20 dsc-mt20">
                    <thead>
                        <th className="dsc-tb576">ID</th>
                        <th></th>
                        <th className="dsc-tb768">Preço</th>
                        <th className="dsc-txt-left">Nome</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>

                        {
                            products.map(product => (
                                <tr>
                                    <td className="dsc-tb576">{product.id}</td>
                                    <td><img className="dsc-product-listing-image" src={product.imgUrl} alt={product.name} />
                                    </td>
                                    <td className="dsc-tb768">{product.price.toFixed(2)}</td>
                                    <td className="dsc-txt-left">{product.name}</td>
                                    <td><img className="dsc-product-listing-btn" src={iconEdit} alt="Editar" /></td>
                                    <td><img className="dsc-product-listing-btn" src={iconDelete} alt="Deletar" /></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

                <div className="dsc-btn-next-page">
                    Carregar mais...
                </div>

            </section>
        </main>
    );
}