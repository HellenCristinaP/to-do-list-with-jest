import TemplateItem from "./templateitem";
import { render, screen, fireEvent } from "@testing-library/react";

describe("TemplateItem", () => {
    beforeEach(() => {
        render(<TemplateItem text="Test Task" description="Test Description" status="pending" />);
    });

    it("renders the component with the provided props", () => {
        // render(<TemplateItem text="Test Task" description="Test Description" status="pending" />);
        expect(screen.getByText("Test Task")).toBeInTheDocument();
    })
    it("should change status to completed when checkbox is checked", () => {
        // render(<TemplateItem text="Test Task" description="Test Description" status="pending" />);
        
        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).not.toBeChecked();
        expect(screen.getByRole("checkbox").value).toBe("pending");
    })
    it("should change status to pending when check box is unchecked", () => {
        fireEvent.click(screen.getByRole("checkbox"));

        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).toBeChecked();
        expect(screen.getByRole("checkbox").value).toBe("completed");
    })
})