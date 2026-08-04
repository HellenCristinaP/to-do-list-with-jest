import List from "./list";
import { render, screen } from "@testing-library/react";

describe("List", () => {
    it("renders the component", () => {
        render(<List />);
        expect(screen.getByRole("list")).toBeInTheDocument();
    })
})