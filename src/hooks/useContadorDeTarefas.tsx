import type { Data } from "@/utils/types";

export default function useContadorDeTarefas(initialValues: Data[]) {
    const contador = initialValues.length

    return {
        contador,
    }
}