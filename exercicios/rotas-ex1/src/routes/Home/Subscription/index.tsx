import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Subscription() {
    return (
        <main>
            <section>
                <div className="container">
                    <div className="mt30 mb30">
                        <Card title="Página de inscrição" />
                    </div>
                    <div className="dflex">
                        <Button text="Ver promoção" />
                    </div>
                </div>
            </section>
        </main>
    );
}