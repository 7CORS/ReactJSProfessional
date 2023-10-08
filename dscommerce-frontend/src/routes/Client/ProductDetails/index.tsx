import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";

import { ProductDTO } from "../../../models/product";
import * as productService from '../../../services/product-service-mock';
import ProductDetailsCard from "../../../components/ProductDetailsCard";

export default function ProductDetails() {

    const params = useParams();

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {

        

        const prod = productService.findById(Number(params.productId));
        setProduct(prod);
    }, []);

    return (
        <main>
            <section className="dsc-container dsc-mt20">
                {
                    // renderiza se for verdadeiro
                    product && <ProductDetailsCard product={product} />
                }

                <div className="dsc-btn-page-container">
                    <ButtonPrimary buttonPurchaseName="Comprar" />

                    <Link to="/">
                        <ButtonInverse buttonHomeName="Início" />
                    </Link>
                </div>

            </section>
        </main>
    );
}