import { Link } from 'react-router-dom';
import { LuPanelLeftOpen, LuPanelLeftClose, LuLogOut, LuUserRound, LuSearch } from 'react-icons/lu';

const Header = ({sidebarOpen, toggleSidebar, searchKey, toggleSearch}) => {
    return (
        <div className="sticky top-0 bg-[rgba(255,255,255,0.2)] backdrop-blur-3xl border-[rgba(0,0,0,0.1)] border-b-1 mt-[-8px] p-2 flex justify-between items-center z-50">
            <div className="flex gap-2 items-center">
                <button className="border-blue-800/10 text-blue-800 border-1 p-3 rounded-xl hidden md:block cursor-pointer" onClick={toggleSidebar}>
                    {sidebarOpen ? <LuPanelLeftClose /> : <LuPanelLeftOpen />}
                </button>
                <LuSearch className="text-blue-800"/>
                <input type="text" placeholder="Search" className="py-2 outline-none" value={searchKey} onChange={(e) => toggleSearch(e.target.value)} />
            </div>
            <div className="flex gap-2">
                <button title="Profile" className="border-blue-800/10 text-blue-800 border-1 p-3 rounded-xl cursor-pointer">
                    <LuUserRound />
                </button>
                <Link to={"/login"}>
                    <button title="Log Out" className="border-blue-800/10 text-blue-800 border-1 p-3 rounded-xl cursor-pointer">
                        <LuLogOut />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Header;