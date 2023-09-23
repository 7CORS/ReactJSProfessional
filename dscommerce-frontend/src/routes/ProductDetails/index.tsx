import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";

export default function ProductDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section className="dsc-container dsc-mt20">
                    <ProductDetailsCard />

                    <div className="dsc-btn-page-container">
                        <ButtonPrimary />
                        <ButtonInverse />
                    </div>

                </section>
            </main>
        </>
    );
}