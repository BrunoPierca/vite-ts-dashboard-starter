import { useEffect, useState } from 'react';

export const useForm = <FormStateTypes>(initialForm: FormStateTypes) => {

    const [formState, setFormState] = useState(initialForm);

    useEffect(() => {
        setFormState(initialForm)
    }, [initialForm])

    const onInputChange = ({ target }: React.ChangeEvent<any> | { target: { name: string, value: any } }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}