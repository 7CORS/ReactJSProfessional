import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './styles.css';

import FormInput from '../../../components/FormInput';
import { ChangeEventT } from '../../../utils/TypesEvents';

import * as productService from '../../../services/product-service';
import * as forms from '../../../utils/Forms/forms';

export default function ProductForm() {

    const params = useParams();
    const isEditing = params.productId !== 'create';

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome"
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
            validation: function (AValue: any) {
                return Number(AValue) > 0;
            },
            message: "Por favor, informar um valor positivo para este campo"
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem"
        }
    });

    useEffect(() => {

        const resultado = forms.toDirty(formData, "price");
        console.log(resultado);

        if (isEditing) {
            productService.findById(Number(params.productId))
                .then(response => {
                    const newFormData = forms.updateAll(formData, response.data);
                    setFormData(newFormData);
                })
                .catch(error => {
                    console.error("Erro ao buscar produto:", error);
                });
        }
    }, []);

    function handleInputChange(event: ChangeEventT) {
        const dataUpdated = forms.update(formData, event.target.name, event.target.value);
        const dataValidated = forms.validate(dataUpdated, event.target.name);

        // Atualiza o valor digitado
        setFormData(dataValidated);
    }

    function handleTurnDurty(name: string) {
        const newFormData = forms.toDirty(formData, name);
        setFormData(newFormData);
    }

    return (
        <main>
            <section id="dsc-product-form-section" className="dsc-container">

                <div className="dsc-product-form-container">
                    <form className="dsc-card dsc-form">

                        <h2>Dados do Produto</h2>

                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput
                                    {...formData.name}
                                    className="dsc-form-control"
                                    onTurnDirty={handleTurnDurty}
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error">{formData.name.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.price}
                                    className="dsc-form-control"
                                    onTurnDirty={handleTurnDurty}
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error">{formData.price.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.imgUrl}
                                    className="dsc-form-control"
                                    onTurnDirty={handleTurnDurty}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="dsc-product-form-buttons">
                            <Link to="/admin/products">
                                <button type="reset" className="dsc-btn dsc-btn-white">Cancelar</button>
                            </Link>
                            <button type="submit" className="dsc-btn dsc-btn-blue">Salvar</button>
                        </div>

                    </form>
                </div>

            </section>
        </main>
    );
}