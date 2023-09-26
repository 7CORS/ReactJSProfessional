import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
    id: 1,
    name: 'Computador Gamer XT',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus accusantium unde officiis! Incidunt laudantium molestiae vitae odio id, possimus ad ducimus rem consequatur odit porro aliquid ullam nam accusamus.',
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

export default function ProductDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section className="dsc-container dsc-mt20">
                    <ProductDetailsCard product={product} />

                    <div className="dsc-btn-page-container">
                        <ButtonPrimary buttonPurchaseName="Comprar" />
                        <ButtonInverse buttonHomeName="Início" />
                    </div>

                </section>
            </main>
        </>
    );
}