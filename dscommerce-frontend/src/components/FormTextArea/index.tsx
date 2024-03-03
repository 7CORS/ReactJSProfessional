import { FormInputProps } from "../../utils/TypesEvents";

export default function FormTextArea(props: FormInputProps) {

    // desestrutrar o que não fizer parte do input padrão. Exemplo: validation, etc...
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
        validation,
        invalid = "false",
        dirty = "false",
        onTurnDirty,
        ...textAreaProps
    } = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }

    return (
        <textarea
            {...textAreaProps}
            onBlur={handleBlur}
            data-invalid={invalid}
            data-dirty={dirty}
        />
    )
}