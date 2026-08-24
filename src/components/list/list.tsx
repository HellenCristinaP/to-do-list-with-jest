'use client';
import TemplateItem from "@/components/templateItem/templateitem";
import { useTaskStore } from '@/utils/zustand'
import type { Data } from "@/utils/types";
import { useEffect } from "react";
import useContador from "hooks/useContadorDeTarefas";

type ListProps = {
    list: Data[];
};

export default function List({ list }: ListProps) {
    const tasks = useTaskStore((state) => state.tasks);
    const setTasks = useTaskStore((state) => state.setTasks);
    const { contador } = useContador(tasks)

    useEffect(() => {
        setTasks(list);
    }, [list, setTasks]);

    return (
        <>
            <h2>Lista de Tarefas</h2>
            <span>{contador}</span>
            <ul>
                {
                    tasks.map((task) => (
                        <TemplateItem
                            key={task._id}
                            Data={task}
                        />
                    ))
                }
            </ul>
        </>
    );
}