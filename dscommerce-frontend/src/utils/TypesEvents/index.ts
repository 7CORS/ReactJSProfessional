import { ChangeEvent, FormEvent, InputHTMLAttributes } from 'react';
import { Props as SelectProps } from 'react-select';

export type FormEventT = FormEvent<HTMLFormElement>;
export type ChangeEventT = ChangeEvent<HTMLInputElement>;

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    validation?: (value: string) => boolean;
    invalid?: string; // Considere usar boolean
    dirty?: string; // Considere usar boolean
    onTurnDirty?: (name: string) => void;
}

export interface FormSelectProps extends SelectProps { // Estende as props do react-select se necessário
    onTurnDirty?: (name: string) => void;
    // Aqui você pode adicionar qualquer outra propriedade customizada que seus selects possam precisar
}