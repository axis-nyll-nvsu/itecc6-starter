import { Link } from 'react-router-dom';
import { LuHouse, LuUsers, LuListTodo } from 'react-icons/lu';

const Sidebar = ({isOpen}) => {
    return (
        <nav className={`fixed flex flex-row justify-center gap-2 md:flex-col md:sticky bottom-0 md:top-0 bg-blue-800 text-white md:h-[100vh] ${ isOpen ? "md:block" : "md:hidden" } md:w-[300px] w-full p-2 md:p-0 z-20 md:z-0 shadow-stone-800 shadow`}>
            <div className="gap-2 py-2 px-4 items-center justify-center md:border-b-1 border-[rgba(0,0,0,0.1)] hidden md:flex md:py-4 mb-2">
                <span className="font-semibold pb-0.5">Application Development</span>
            </div>
            <Link to="/" className="flex items-center gap-2 md:mx-4 p-4 md:px-4 md:py-2 transition-colors hover:bg-blue-300 hover:text-blue-800 hover:shadow-xs rounded-full md:rounded-lg">
                <LuHouse /><span className="hidden md:block">Dashboard</span>
            </Link>
            <Link to="/customers" className="flex items-center gap-2 md:mx-4 p-4 md:px-4 md:py-2 transition-colors hover:bg-blue-300 hover:text-blue-800 hover:shadow-xs rounded-full md:rounded-lg">
                <LuUsers /><span className="hidden md:block">Customers</span>
            </Link>
            <Link to="/tasks" className="flex items-center gap-2 md:mx-4 p-4 md:px-4 md:py-2 transition-colors hover:bg-blue-300 hover:text-blue-800 hover:shadow-xs rounded-full md:rounded-lg">
                <LuListTodo /><span className="hidden md:block">Task Manager</span>
            </Link>
        </nav>
    );
};

export default Sidebar;