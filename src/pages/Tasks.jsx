import { useEffect, useState } from 'react';
import { LuChevronRight, LuPlus } from 'react-icons/lu';
import TaskCard from '../components/TaskCard';

const mockTasks = [
    { id: 1, desc: "Play Video Game", done: false },
    { id: 2, desc: "Read Manga", done: true },
    { id: 3, desc: "Watch TikTok", done: true },
];

export default function Tasks({searchKey}) {
    const [tasks, setTasks] = useState(mockTasks);
    const [description, setDescription] = useState("");

    useEffect(() => {
        setTasks(mockTasks.filter((item) => item.desc.toLowerCase().includes(searchKey.toLowerCase())));
    }, [searchKey]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim() !== "") {
            setTasks([...tasks, {
                id: tasks.reduce((max, task) => (task.id > max ? task.id : max), 1),
                desc: description.trim(),
                done: false
            }])
        }
        setDescription("");
    }

    return (
        <div className="mt-2 p-2 md:p-4">
            <div className="flex flex-col md:flex-row gap-2 mb-4 md:justify-between">
                <h1 className="text-3xl text-blue-800 font-semibold">Tasks</h1>
                <div className="flex items-center gap-1 p-2 bg-blue-50 md:bg-transparent text-blue-800 text-xs">
                    <span>Admin</span>
                    <LuChevronRight className="translate-0.25"/>
                    <span>Tasks</span>
                </div>
            </div>
            <div className="border-1 border-blue-800 rounded p-2 mb-4 ">
                <form action="" className="flex justify-between">
                    <input type="text" placeholder="What do you want to do?" value={description} maxLength={30} onChange={(e) => setDescription(e.target.value)} className="focus:outline-none w-full mr-2" />
                    <button onClick={handleSubmit} className="bg-blue-800 text-white p-2 rounded cursor-pointer"><LuPlus /></button>
                </form>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                tasks.length !== 0 ?
                tasks.map(task => <TaskCard task={task} key={task.id} />) :
                <div className="text-sm">No tasks found for "{searchKey}".</div>
            }
            </div>
        </div>
    );
}