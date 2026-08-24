import { useState } from "react";

interface FormValues {
    title: string;
    description: string;
}

export default function useValidadorForm(initialValues: FormValues) {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<Partial<FormValues>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = (): boolean => {
        const newErrors: Partial<FormValues> = {};

        if (!values.title.trim()) {
            newErrors.title = "O título é obrigatório.";
            console.log(values.title.length)
        } else if (values.title.length < 3 || values.title.length > 50) {
            newErrors.title = "O título deve ter entre 3 e 50 caracteres.";
        }

        if (values.description.trim().length > 0) {

            if (values.description.length < 5 || values.description.length > 150) {
                newErrors.description = "A descrição deve ter entre 5 e 150 caracteres.";
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    return {
        values,
        setValues,
        errors,
        validate,
        handleChange
    };
}