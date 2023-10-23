import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";

import { ProductDTO } from "../../../models/product";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import RequestErrorAlert from "../../../utils/RequestErrorAlert";
import * as productService from '../../../services/product-service';
import * as cartService from '../../../services/cart-service';

export default function ProductDetails() {
    const params = useParams();
    const navicate = useNavigate();
    const [product, setProduct] = useState<ProductDTO>();
    const [errorData, setErrorData] = useState(null); {/* Estado para os dados do erro */ }

    useEffect(() => {
        productService.findById(Number(params.productId))
            .then(response => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
                if (error.response && error.response.data) {
                    setErrorData(error.response.data);
                }
            });
    }, []);

    {/* Se houver um erro, renderize apenas o componente RequestErrorAlert */ }
    if (errorData) {
        return <RequestErrorAlert errorData={errorData} />;
    }

    function handleBuyClick() {
        if (product) {
            cartService.addProduct(product);
            navicate("/cart");
        }
    }

    return (
        <main>
            <section className="dsc-container dsc-mt20">
                {
                    product && (
                        <>
                            <ProductDetailsCard product={product} />
                            <div className="dsc-btn-page-container">
                                <div onClick={handleBuyClick}>
                                    <ButtonPrimary buttonPurchaseName="Comprar" />
                                </div>
                                <Link to="/">
                                    <ButtonInverse buttonHomeName="Início" />
                                </Link>
                            </div>
                        </>
                    )
                }
            </section>
        </main>
    );
}