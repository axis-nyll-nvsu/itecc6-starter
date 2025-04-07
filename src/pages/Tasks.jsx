import { useEffect, useState } from 'react';
import {LuChevronRight, LuPlus, LuX} from 'react-icons/lu';
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
        submitAction({desc: description});
        setDescription("");
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setDescription("");
        cancelAction();
    }

    return (
        <div className="border-1 border-blue-800 rounded p-2 mb-4 ">
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
    const [description, setDescription] = useState(task.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        task.description = description;
        submitAction(task);
        setDescription("");
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setDescription("");
        cancelAction();
    }

    return (
        <div className="border-1 border-blue-800 rounded p-2 mb-4 ">
            <h1 className="text-blue-800 font-semibold">Edit Task</h1>
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

export default function Tasks({searchKey}) {
    const [task, setTask] = useState({});
    const [tasks, setTasks] = useState([]);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        setTasks(mockTasks.filter((item) => item.desc.toLowerCase().includes(searchKey.toLowerCase())));
    }, [searchKey]);

    const addTask = (t) => {
        t.id = tasks.reduce((max, task) => (task.id > max ? task.id : max), 0) + 1;
        t.done = false;
        setTasks([...tasks, t]);
    }
    const updateTask = (t) => {
        setTasks([tasks.filter((item) => item.id !== t.id), t]);
        setEditing(false);
        setTask({});
    }
    const editTask = (id) => {
        // TODO: Create an edit function.
        setEditing(true);
    }
    const cancelTask = () => {
        setTask({});
        setEditing(false);
    }
    const deleteTask = (id) => setTasks(tasks.filter((item) => item.id !== id));

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
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                tasks.length !== 0 ?
                tasks.map(task => <TaskCard task={task} key={task.id} editAction={editTask} deleteAction={deleteTask} />) :
                searchKey ?
                    <div className="text-sm">No tasks found for "{searchKey}".</div> :
                    <div className="text-sm">No tasks yet.</div>
            }
            </div>
        </div>
    );
}