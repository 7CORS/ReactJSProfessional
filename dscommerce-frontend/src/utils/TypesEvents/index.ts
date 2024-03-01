import { ChangeEvent, FormEvent, InputHTMLAttributes } from 'react';

export type FormEventT = FormEvent<HTMLFormElement>;
export type ChangeEventT = ChangeEvent<HTMLInputElement>;

// Extende as props de input padrão com possíveis customizações
export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {

    validation?: (value: string) => boolean;

    // ...adicione outras props customizadas conforme necessário aqui
}