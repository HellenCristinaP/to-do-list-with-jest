import List from "./list";
import { render, screen } from "@testing-library/react";

describe("List", () => {
    beforeEach(() => {
        const mockTask = [{
            _id: "338103f65af03",
            text: "Lavar louça",
            description: "lavar meio dia",
            status: "pending"
        }];
        render(<List list={mockTask} />)

    })
    it("renders the component", () => {
        expect(screen.getByText("Lista de Tarefas")).toBeInTheDocument();
    })

    it("should delete item, if I click button 'Excluir'", () => {
        expect(screen.getByText("Lavar louça"))
        expect(screen.getByRole('checkbox', { checked: false }))
    })
})