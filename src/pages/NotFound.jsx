import { Link } from 'react-router-dom';
import { LuArrowLeft } from 'react-icons/lu';

function NotFound() {
    return (
        <div className="flex flex-col text-blue-800 w-full justify-center items-center">
            <h1 className="text-[100px] text-center">404 Page Not Found</h1>
            <Link to="/" className="flex gap-2 items-center justify-between px-4 py-2 border border-blue-800/10 text-blue-800 rounded-full">
                <LuArrowLeft /> Back to Dashboard
            </Link>
        </div>
    );
}

export default NotFound;