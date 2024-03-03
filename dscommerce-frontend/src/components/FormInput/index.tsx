import { FormInputProps } from "../../utils/TypesEvents";

export default function FormInput(props: FormInputProps) {

    // desestrutrar o que não fizer parte do input padrão. Exemplo: validation, etc...
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { validation, invalid, ...inputProps } = props;

    return <input {...inputProps} data-invalid={invalid} />;
}