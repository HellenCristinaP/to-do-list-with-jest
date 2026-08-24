'use client';
import { useState } from "react";
import type { Data } from "@/utils/types";
import { deleteTaskServ } from "@/utils/services"
import { useTaskStore } from "@/utils/zustand";

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
            <li className="flex flex-col gap-2 border border-gray-300 rounded-md p-4" data-testid="item">
                <input
                    type="checkbox"
                    value={itemStatus}
                    onChange={handleCheckBoxChange}
                />
                <p>{Data.text}</p>
                {Data.description && <p>{Data.description}</p>}
                <button >Editar</button>
                <button onClick={handleDeleteItem}>Excluir</button>
            </li>
        </div>
    );
}
