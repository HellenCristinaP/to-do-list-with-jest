import axios from "axios";

export const deleteTaskServ = async (id: string) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_URL_API}/tasks/${id}`);
    console.log(`Tarefa com ID ${id} excluída com sucesso.`);;
  } catch (error) {
    console.error(`Erro ao excluir tarefa com ID ${id}:`, error);
  }
};

export const updateTaskStatus = async (id: string, status: string) => {
    try {
        await axios.put(`${process.env.NEXT_PUBLIC_URL_API}/tasks/${id}`, { status });
        console.log(`Status da tarefa com ID ${id} atualizado para ${status}.`);
    } catch (error) {
        console.error(`Erro ao atualizar status da tarefa com ID ${id}:`, error);
    }
};
