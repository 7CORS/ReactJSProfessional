import { useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";

import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service-mock';

export default function ProductDetails() {

    const params = useParams();
    const product = productService.findById(Number(params.productId));

    return (
        <main>
            <section className="dsc-container dsc-mt20">
                {
                    // renderiza se for verdadeiro
                    product && <ProductDetailsCard product={product} />
                }

                <div className="dsc-btn-page-container">
                    <ButtonPrimary buttonPurchaseName="Comprar" />
                    <ButtonInverse buttonHomeName="Início" />
                </div>

            </section>
        </main>
    );
}