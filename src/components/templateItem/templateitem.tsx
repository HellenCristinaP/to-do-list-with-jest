'use client';
import { useState } from "react";

type Data = {
    id?: number;
    text: string;
    description?: string;
    status: string;
}

export default function TemplateItem({ id, text, description, status }: Data) {
    const [itemStatus, setItemStatus] = useState(status);

    function handleCheckBoxChange() {
        const checkbox = document.querySelector('input[type="checkbox"]') as HTMLInputElement;

        if (checkbox.checked) {
            setItemStatus("completed");
        } else {
            setItemStatus("pending");
        }
    }

    return (
        <>
            <li>
                <input
                    type="checkbox"
                    value={itemStatus}
                    onChange={handleCheckBoxChange}
                />
                <p>{text}</p>
                {description && <p>{description}</p>}
                <button>Editar</button>
                <button>Excluir</button>
            </li>
        </>
    );
}