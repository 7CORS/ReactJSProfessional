import { FormInputProps } from "../../utils/TypesEvents";

export default function FormInput(props: FormInputProps) {

    // desestrutrar o que não fizer parte do input padrão. Exemplo: validation, etc...
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
        validation,
        invalid = "false",
        dirty = "false",
        onTurnDirty,
        ...inputProps
    } = props;

    function handleBlur() {
        if (onTurnDirty && props.name) {
            onTurnDirty(props.name);
        }
    }

    return (
        <input
            {...inputProps}
            onBlur={handleBlur}
            data-invalid={invalid}
            data-dirty={dirty}
        />
    )
}