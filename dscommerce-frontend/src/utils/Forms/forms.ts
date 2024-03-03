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

// Gerar um novo objeto de formulário contendo o campo "invalid" (que pode valer "true" ou "false")
// para o campo de formulário cujo nome é "name"
export function validate(inputs: any, name: string) {

    if (!inputs[name].validation) {
        return inputs;
    }

    const isInvalid = !inputs[name].validation(inputs[name].value);

    return { ...inputs, [name]: { ...inputs[name], invalid: isInvalid.toString() } }
}