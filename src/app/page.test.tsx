import { render, screen, waitFor } from "@testing-library/react";
import Page from "./page";
import axios from "axios";

jest.mock('axios')

describe("Page", () => {
  it("App Router: Works with Server Components", async () => {
    const ResolvedPage = await Page();
    render(ResolvedPage);
    expect(screen.getByText("Seja bem-vindo ao To-Do List com Jest")).toBeInTheDocument()
  });

  it("If the requires get works", async () => {
    const mockTask = {
      _id: 1,
      text: "Lavar louça",
      description: "lavar meio dia",
      status: "pending"
    };
    const mockAPI = jest.mocked(axios);
    
    mockAPI.get.mockResolvedValueOnce({
      data: [mockTask]
    });

    const ResolvedPage = await Page();
    render(ResolvedPage);
    
    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_URL_API}/tasks`
      )
    );

    expect(screen.getByText("Lavar louça")).toBeInTheDocument()
  })
})

