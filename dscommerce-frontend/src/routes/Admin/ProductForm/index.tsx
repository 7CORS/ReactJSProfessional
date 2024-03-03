import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Select from 'react-select'

import './styles.css';

import FormInput from '../../../components/FormInput';
import { ChangeEventT } from '../../../utils/TypesEvents';

import * as productService from '../../../services/product-service';
import * as forms from '../../../utils/Forms/forms';
import FormTextArea from '../../../components/FormTextArea';
import { CategoryDTO } from '../../../models/category';
import * as categoryService from '../../../services/category-service';

export default function ProductForm() {

    const params = useParams();
    const isEditing = params.productId !== 'create';
    const [categories, setCategories] = useState<CategoryDTO[]>([]);

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function (AValue: any) {
                //return AValue.length >= 3 && AValue.length <= 80; // ou // REGEX
                return /^.{3,80}$/.test(AValue);
            },
            message: "Informar um nome entre 3 e 80 caracteres"
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
        },
        description: {
            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Descrição",
            validation: function (AValue: any) {
                return /^.{10,}$/.test(AValue);
            },
            message: "A descrição deve ter pelo menos 10 caracteres"
        }
    });

    useEffect(() => {
        categoryService.findAllCategories()
            .then(response => {
                setCategories(response.data);
            })
    }, []);

    useEffect(() => {
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
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleTurnDurty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
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
                            <div>
                                <Select
                                    options={categories}
                                    isMulti
                                    getOptionLabel={(obj) => obj.name}
                                    getOptionValue={(obj) => String(obj.id)}
                                />
                            </div>
                            <div>
                                <FormTextArea
                                    {...formData.description}
                                    className="dsc-form-control dsc-textarea"
                                    onTurnDirty={handleTurnDurty}
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error">{formData.description.message}</div>
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