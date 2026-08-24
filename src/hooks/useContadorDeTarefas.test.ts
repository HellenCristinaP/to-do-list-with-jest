import useContadorDeTarefas from "./useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  it("renders the component", () => {
    const tasks = [
      {
        _id: "6a8bad7725e48803e88cd47d",
        text: "lavar a louça",
        description: "",
        status: "pending",
      },
      {
        _id: "6a8bad7f25e48803e88cd47e",
        text: "passar pano no chão",
        description: "",
        status: "pending",
      },
    ];
    const { contador } = useContadorDeTarefas(tasks);
    
    expect(contador).toBe(2);
  });
});
