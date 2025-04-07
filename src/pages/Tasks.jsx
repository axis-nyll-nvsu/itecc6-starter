import { useEffect, useState } from 'react';
import {LuChevronRight, LuPlus, LuX, LuSave} from 'react-icons/lu';
import TaskCard from '../components/TaskCard';
const mockTasks = [
    { id: 1, desc: "Play Video Game", done: false },
    { id: 2, desc: "Read Manga", done: true },
    { id: 3, desc: "Watch TikTok", done: true },
];

function AddTaskForm({submitAction, cancelAction}) {
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim() !== ""){
            submitAction({desc: description.trim()});
        }
        setDescription("");
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setDescription("");
        cancelAction();
    }

    return (
        <div className="border-1 border-blue-800 rounded p-2">
            <h1 className="text-blue-800 font-semibold">Add Task</h1>
            <form action="" className="flex justify-between">
                <input type="text" required placeholder="What do you want to do?" value={description} maxLength={30}
                       onChange={(e) => setDescription(e.target.value)} className="focus:outline-none w-full mr-2"/>
                <button onClick={handleSubmit} className="bg-blue-800 text-white p-2 rounded cursor-pointer mr-1"><LuPlus/>
                </button>
                <button onClick={handleCancel} className="bg-blue-800 text-white p-2 rounded cursor-pointer"><LuX/>
                </button>
            </form>
        </div>
    );
}

function EditTaskForm({task, submitAction, cancelAction}) {
    const [description, setDescription] = useState(task.desc);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim() !== ""){
            task.desc = description.trim();
            submitAction();
        }
        setDescription(task.desc);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setDescription("");
        cancelAction();
    }

    return (
        <div className="border-1 border-blue-800 rounded p-2">
            <h1 className="text-blue-800 font-semibold">Edit Task</h1>
            <form action="" className="flex justify-between">
                <input type="text" required placeholder="What do you want to do?" value={description} maxLength={30}
                       onChange={(e) => setDescription(e.target.value)} className="focus:outline-none w-full mr-2"/>
                <button onClick={handleSubmit} className="bg-blue-800 text-white p-2 rounded cursor-pointer mr-1"><LuSave />
                </button>
                <button onClick={handleCancel} className="bg-blue-800 text-white p-2 rounded cursor-pointer"><LuX />
                </button>
            </form>
        </div>
    );
}

export default function Tasks({searchKey}) {
    const [task, setTask] = useState({});
    const [tasks, setTasks] = useState([]);
    const [editing, setEditing] = useState(false);
    const [filterDone, setFilterDone] = useState(false);

    useEffect(() => {
        setTasks(mockTasks.filter((item) => item.desc.toLowerCase().includes(searchKey.toLowerCase())));
        if (filterDone) {
            setTasks(tasks.filter((item) => item.done === true));
        }
    }, [searchKey, filterDone]);

    const addTask = (t) => {
        t.id = tasks.reduce((max, task) => (task.id > max ? task.id : max), 0) + 1;
        t.done = false;
        setTasks([...tasks, t]);
        mockTasks.push(t);
        cancelTask();
    }
    const updateTask = () => {
        setTasks([...tasks]);
        cancelTask();
    }
    const editTask = (id) => {
        setTask(tasks.filter((item) => item.id === id)[0]);
        setEditing(true);
    }
    const cancelTask = () => {
        setTask({});
        setEditing(false);
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter((item) => item.id !== id));
        mockTasks.splice(mockTasks.indexOf(id), 1);
        cancelTask();
    }
    const toggleDone = (id) => {
        const t = tasks.filter((item) => item.id === id)[0];
        t.done = !t.done;
        setTasks([...tasks]);
        cancelTask();
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
            {!editing ? <AddTaskForm submitAction={addTask} cancelAction={cancelTask} /> : <EditTaskForm task={task} submitAction={updateTask} cancelAction={cancelTask} />}
            <div className="flex items-center gap-2 mt-2"><label htmlFor="filter" className="text-sm">Filter Done:</label><input type="checkbox" id="filter" value={filterDone} onChange={(e) => setFilterDone(e.target.checked)} className="h-4 w-4 text-green-800" /></div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
            {
                tasks.length !== 0 ?
                tasks.map(task => <TaskCard task={task} key={task.id} editAction={editTask} deleteAction={deleteTask} doneAction={toggleDone} />) :
                searchKey ?
                    <div className="text-sm">No tasks found for <span className="text-blue-800 font-semibold">{searchKey}</span>.</div> :
                    <div className="text-sm">No tasks.</div>
            }
            </div>
        </div>
    );
}