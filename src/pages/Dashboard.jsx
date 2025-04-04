import { LuChevronRight } from 'react-icons/lu';

const Dashboard = () => {
    return (
        <div className="mt-2 p-2 md:p-4">
            <div className="flex flex-col md:flex-row gap-2 mb-4 md:justify-between">
                <h1 className="text-3xl text-blue-800 font-semibold">Dashboard</h1>
                <div className="flex items-center gap-1 p-2 bg-blue-50 md:bg-transparent text-blue-800 text-xs">
                    <span>Admin</span><LuChevronRight className="translate-0.25"/>
                    <span>Dashboard</span>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="bg-white p-4 rounded border-[rgba(0,0,0,0.1)] border-1 shadow">
                    <h3 className="text-sm">Total Customers</h3>
                    <p className="text-xl text-blue-800">24</p>
                </div>
                <div className="bg-white p-4 rounded border-[rgba(0,0,0,0.1)] border-1 shadow">
                    <h3 className="text-sm">Active Projects</h3>
                    <p className="text-xl text-blue-800">5</p>
                </div>
                <div className="bg-white p-4 rounded border-[rgba(0,0,0,0.1)] border-1 shadow">
                    <h3 className="text-sm">Active Projects</h3>
                    <p className="text-xl text-blue-800">5</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;