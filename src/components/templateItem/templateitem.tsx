'use client';
import { useState } from "react";
import type { Data } from "@/utils/types";
import { deleteTaskServ } from "@/utils/services"
import { useTaskStore } from "@/utils/zustand";
import styles from "./templateitem.module.css";

export default function TemplateItem({ Data }: { Data: Data; }) {
    const [itemStatus, setItemStatus] = useState("pending");
    const index = Data._id
    const deleteTask = useTaskStore((state) => state.deleteTask)


    function handleCheckBoxChange() {
        const checkbox = document.querySelector('input[type="checkbox"]') as HTMLInputElement;

        if (checkbox.checked) {
            setItemStatus("completed");
        } else {
            setItemStatus("pending");
        }
    }

    function handleDeleteItem() {
        deleteTaskServ(index)
        deleteTask(index)
    }

    return (
        <div data-testid="template-item">
            <li className={styles.li} data-testid="item">
                <input
                    type="checkbox"
                    value={itemStatus}
                    onChange={handleCheckBoxChange}
                    className={styles.checkbox}
                />
                <div className={styles.content}>
                    <p>{Data.text}</p>
                    {Data.description && <p className={styles.description}>{Data.description}</p>}
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button}>Editar</button>
                    <button className={`${styles.button} ${styles.excluir}`} id="excluir" onClick={handleDeleteItem}>
                        Excluir
                    </button>
                </div>
            </li>
        </div>
    );
}
