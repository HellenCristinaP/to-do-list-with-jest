import Form from "./novaTarefa";
import { render, screen } from "@testing-library/react";

describe("Form", () => {
    it("renders the component", () => {
        render(<Form />);
        expect(screen.getByPlaceholderText("Digite uma tarefa...")).toBeInTheDocument();
    })
})