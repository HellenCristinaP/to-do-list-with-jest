import NovaTarefa from "./novaTarefa";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import { useTaskStore } from "@/utils/zustand";

jest.mock('axios')

describe("NovaTarefa", () => {
    beforeEach(() => {
        render(<NovaTarefa />)
    })

    it("renders the component", () => {
        expect(screen.getByText('Adicionar Tarefa')).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Digite uma tarefa...")).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /adicionar/i }))
    })

    it('Error if text is undefined', async () => {
        const inputText = screen.getByPlaceholderText('Digite uma tarefa...');
        const inputDescription = screen.getByPlaceholderText('Digite a descrição da tarefa...');
        const submitBtn = screen.getByRole('button', { name: /adicionar/i });

        fireEvent.change(inputText, { target: { value: "" } })
        fireEvent.change(inputDescription, { target: { value: "" } })
        fireEvent.click(submitBtn)

        expect(screen.getByText("O título é obrigatório.")).toBeInTheDocument()

        await waitFor(() => expect(axios.post).not.toHaveBeenCalledTimes(1))

        await waitFor(() => {
            const tasks = useTaskStore.getState().tasks;

            expect(tasks).toHaveLength(0);
        });
    })

    it("useValidadorForm how suppose works", async () => {
        const mockTask = {
            id: 1,
            text: "Lavar louça",
            description: "lavar meio dia",
            status: "pending"
        };
        const inputText = screen.getByPlaceholderText('Digite uma tarefa...');
        const inputDescription = screen.getByPlaceholderText('Digite a descrição da tarefa...');
        const submitBtn = screen.getByRole('button', { name: /adicionar/i });

        const mockAPI = jest.mocked(axios);

        mockAPI.post.mockResolvedValueOnce({
            data: mockTask
        });

        fireEvent.change(inputText, { target: { value: "Lavar louça" } })
        fireEvent.change(inputDescription, { target: { value: "lavar meio dia" } })
        fireEvent.click(submitBtn)

        expect(screen.getByText("O título é obrigatório.")).not.toBeInTheDocument()

        await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1))

        await waitFor(() =>
            expect(axios.post).toHaveBeenCalledWith(
                `${process.env.NEXT_PUBLIC_URL_API}/tasks`,
                {
                    text: 'Lavar louça',
                    description: 'lavar meio dia',
                    status: 'pending',
                }
            )
        );
        await waitFor(() => {
            const tasks = useTaskStore.getState().tasks;

            expect(tasks).toContainEqual(mockTask);
        });
    })
})