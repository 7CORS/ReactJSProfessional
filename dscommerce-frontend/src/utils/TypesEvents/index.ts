import { ChangeEvent, FormEvent, InputHTMLAttributes } from 'react';

export type FormEventT = FormEvent<HTMLFormElement>;
export type ChangeEventT = ChangeEvent<HTMLInputElement>;

// Extende as props de input padrão com possíveis customizações
export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    validation?: (value: string) => boolean;
    invalid?: string; // Se espera usar como string, mas talvez boolean seria mais adequado?
    dirty?: string; // Mesmo comentário acima, parece que deveria ser boolean
    onTurnDirty?: (name: string) => void; // Garanta que este método é passado onde esses componentes são usados
    // ...adicione outras props customizadas conforme necessário aqui
}