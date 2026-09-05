import TemplateItem from "./templateitem";
import { render, screen, fireEvent } from "@testing-library/react";

describe("TemplateItem", () => {
    beforeEach(() => {
        const task = {
            _id: "6a825a4fcff2e703e874541f",
            text: "vidro",
            description: "",
            status: "pending",
        };

        render(<TemplateItem Data={task} />);
    });

    it("renders the component with the provided props", () => {
        expect(screen.getByText("vidro")).toBeInTheDocument();
        expect(screen.getByTestId("template-item")).toBeInTheDocument()
    })

    it("should change status to completed when checkbox is checked", () => {
        fireEvent.click(screen.getByRole("checkbox"));

        expect(screen.getByRole("checkbox")).toBeChecked()
    })

    it("should change status to pending when check box is unchecked", () => {
        fireEvent.click(screen.getByRole("checkbox"));
        fireEvent.click(screen.getByRole("checkbox"));

        expect(screen.getByRole("checkbox")).not.toBeChecked()
    })

    it("should delete item, if I click button 'Excluir'", () => {
        fireEvent.click(
            screen.getByRole("button", { name: "Excluir" })
        );

        expect(screen.getByText("vidro")).toBeInTheDocument()
    })
})