import List from "./list";
import { render, screen, fireEvent } from "@testing-library/react";

describe("List", () => {
    beforeEach(() => {
        // const task = {
        //     _id: "6a825a4fcff2e703e874541f",
        //     text: "vidro",
        //     description: "",
        //     status: "pending",
        // };

        render(<List />);
    });
    it("renders the component", () => {

        expect(screen.getByRole("list")).toBeInTheDocument();
    })

    it("should delete item, if I click button 'Excluir'", () => {
        fireEvent.click(
            screen.getByRole("button", { name: "Excluir" })
        );

        expect(screen.getByTestId("template-item")).not.toBeInTheDocument()
    })
})