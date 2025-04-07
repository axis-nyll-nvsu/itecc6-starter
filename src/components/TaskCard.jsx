import { LuPencilLine, LuSquareCheckBig, LuTrash } from 'react-icons/lu';

export default function TaskCard({ task, editAction, deleteAction }) {
    return (
        <article className="flex items-center p-4 rounded border-[rgba(0,0,0,0.1)] border-1 shadow-xs">
            <p>{task.desc}</p>
            <div className="ml-auto flex gap-0.5 bg-stone-50 text-stone-500 inset-shadow-2xs p-1 text-center rounded">
                <button className={`p-1 transition-colors hover:bg-green-600 ${task.done && "bg-green-600 text-white"} hover:text-white rounded cursor-pointer`}><LuSquareCheckBig /></button>
                <button className="p-1 transition-colors hover:bg-amber-600 hover:text-white rounded cursor-pointer" onClick={() => editAction(task.id)}><LuPencilLine /></button>
                <button className="p-1 transition-colors hover:bg-red-600 hover:text-white rounded cursor-pointer" onClick={() => deleteAction(task.id)}><LuTrash /></button>
            </div>
        </article>
    );
}