'use client';
import axios from "axios";
import { useTaskStore } from "@/utils/zustand";
import useValidadorForm from "hooks/useValidador";

export default function NovaTarefa() {
    const addTask = useTaskStore((state) => state.addTask)
    const { handleChange, errors, validate, values } = useValidadorForm({
        title: "",
        description: ""
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const isValid = validate();

        if (isValid) {
            try {
                axios
                    .post(`${process.env.NEXT_PUBLIC_URL_API}/tasks`, {
                        text: values.title,
                        description: values.description,
                        status: "pending"
                    })
                    .then((response) => {
                        addTask(response.data)
                    })
                    .catch((error) => {
                        console.error("Erro ao adicionar tarefa:", error);
                    })
            } catch (error) {
                console.log("Erro ao postar tarefas:", error)
            }
        }

    };

    return (
        <>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <legend>Adicionar Tarefa</legend>
                    <div>

                        <input
                            type="text"
                            placeholder="Digite uma tarefa..."
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                        />
                        {errors.title && (
                            <span style={{ color: "red" }}>{errors.title}</span>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Digite a descrição da tarefa..."
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                        />
                        {errors.description && (
                            <span style={{ color: "red" }}>{errors.description}</span>
                        )}
                    </div>
                    <button type="submit">Adicionar</button>
                </form>
            </fieldset>
        </>
    );
}
