'use client';
import TemplateItem from "@/components/templateItem/templateitem";
import { useTaskStore } from '@/utils/zustand'
import type { Data } from "@/utils/types";
import { useEffect } from "react";
import useContador from "hooks/useContadorDeTarefas";
import styles from "./list.module.css";

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
        <div className={styles.div}>
            <h2 className={styles.h2}>Lista de Tarefas</h2>
            <span className={styles.span}>quantidade de tarefas: {contador}</span>
            <ul className={styles.ul}>
                {
                    tasks.map((task) => (
                        <TemplateItem
                            key={task._id}
                            Data={task}
                        />
                    ))
                }
            </ul>
        </div>
    );
}