import { create } from "zustand";
import type { Data } from "@/utils/types"

interface TaskStore {
    tasks: Data[];
    setTasks: (tasks: Data[]) => void;
    addTask: (task: Data) => void;
    deleteTask: (id: string) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],

    setTasks: (tasks) =>
        set({ tasks }),

    addTask: (task) =>
        set((state) => ({
            tasks: [...state.tasks, task],
        })),

    deleteTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter(
                (task) => task._id !== id
            ),
        })),
}));