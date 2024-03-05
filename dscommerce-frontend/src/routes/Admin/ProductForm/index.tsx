import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import './styles.css';

import { ChangeEventT, FormEventT } from '../../../utils/TypesEvents';

import * as productService from '../../../services/product-service';
import * as forms from '../../../utils/Forms/forms';
import * as categoryService from '../../../services/category-service';

import FormInput from '../../../components/FormInput';
import FormSelect from '../../../components/FormSelect';
import FormTextArea from '../../../components/FormTextArea';
import { selectStyles } from '../../../utils/Select';

import { CategoryDTO } from '../../../models/category';

export default function ProductForm() {

    const params = useParams();
    const isEditing = params.productId !== 'create';
    const [categories, setCategories] = useState<CategoryDTO[]>([]);
    const navigate = useNavigate();

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
        },
        categories: {
            value: [],
            id: "categories",
            name: "categories",
            placeholder: "Categorias",
            validation: function (AValues: CategoryDTO[]) {
                return AValues.length > 0;
            },
            message: "Escolha ao menos uma categoria"
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

    function handleSubmit(event: FormEventT) {
        event.preventDefault();

        const formDataValidated = forms.dirtyAndValidateAll(formData);

        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }

        const requestBody = forms.toValues(formData);

        if (isEditing) {
            requestBody.id = params.productId;
        }

        const request = isEditing
            ? productService.updateRequest(requestBody)
            : productService.insertRequest(requestBody);
        request
            .then(() => {
                navigate("/admin/products");
            })

    }

    return (
        <main>
            <section id="dsc-product-form-section" className="dsc-container">

                <div className="dsc-product-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>

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
                                <FormSelect
                                    {...formData.categories}
                                    className="dsc-form-control dsc-form-select-container"
                                    styles={selectStyles}
                                    options={categories}
                                    onChange={(obj) => {
                                        const newFormData = forms.updateAndValidate(formData, "categories", obj);
                                        setFormData(newFormData);
                                    }}
                                    isMulti
                                    onTurnDirty={handleTurnDurty}
                                    getOptionLabel={(obj) => obj.name}
                                    getOptionValue={(obj) => String(obj.id)}
                                />
                                <div className="dsc-form-error">{formData.categories.message}</div>
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