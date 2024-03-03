// Objetivo: gerar um novo objeto de formulário onde o campo de nome "name" seja atualizado com o valor "newValue"
export function update(inputs: any, name: string, newValue: any) {
    return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

// Objetivo: gerar um objeto contendo apenas os valores dos campos do formulário
export function toValues(inputs: any) {
    const data: any = {};

    for (const name in inputs) {
        data[name] = inputs[name].value;
    }

    return data;
}

// Objetivo: gerar um novo objeto de formulário onde os campos sejam os valores contidos em "newValues"
export function updateAll(inputs: any, newValues: any) {

    const newInputs: any = {};

    for (const name in inputs) {
        newInputs[name] = { ...inputs[name], value: newValues[name] }
    }

    return newInputs;
}