import useContadorDeTarefas from "./useContadorDeTarefas";
import type { Data } from "@/utils/types";
import { renderHook } from "@testing-library/react";

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

    const { result } = renderHook(() => useContadorDeTarefas(tasks));

    expect(result.current.contador).toBe(2);
  });

  it("return 0", () => {
    const tasks = <Data[]>[];

    const { contador } = useContadorDeTarefas(tasks);

    expect(contador).toBe(0);

    const { result } = renderHook(() => useContadorDeTarefas(tasks));

    expect(result.current.contador).toBe(0);
  });
});
