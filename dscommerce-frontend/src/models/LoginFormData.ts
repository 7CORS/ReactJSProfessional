export interface LoginFormData {
    username: {
        value: string;
        id: string;
        name: string;
        type: string;
        placeholder: string;
        validation?: (value: string) => boolean;
        message?: string;
    };
    password: {
        value: string;
        id: string;
        name: string;
        type: string;
        placeholder: string;
    };
}