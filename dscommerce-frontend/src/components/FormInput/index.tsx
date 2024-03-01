import { FormInputProps } from "../../utils/TypesEvents";

export default function FormInput(props: FormInputProps) {

    // desestrutrar o que não fizer parte do input padrão. Exemplo: validation, etc...
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { validation, ...inputProps } = props;

    return <input {...inputProps} />;
}