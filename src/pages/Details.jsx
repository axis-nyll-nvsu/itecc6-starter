import { Link, useParams } from 'react-router-dom';
import { LuArrowLeft, LuChevronRight } from 'react-icons/lu';

const mockDetails = {
    1: {
        name: "Alex Johnson",
        email: "alex@example.com",
        phone: "555-0123",
        address: "123 Main St"
    },
    2: {
        name: "Sam Wilson",
        email: "sam@example.com",
        phone: "555-4567",
        address: "456 Oak Ave"
    }
};

export default function Details() {
    const { id } = useParams();
    const customer = mockDetails[id];

    return (
        <div className="mt-2 p-2 md:p-4">
            <div className="flex flex-col md:flex-row gap-2 mb-4 md:justify-between">
                <h1 className="text-3xl text-blue-800 font-semibold">Customer</h1>
                <div className="flex items-center gap-1 p-2 bg-blue-50 md:bg-transparent text-blue-800 text-xs">
                    <span>Admin</span>
                    <LuChevronRight className="translate-0.25"/>
                    <Link to="..\..\customers"><span>Customers</span></Link>
                    <LuChevronRight className="translate-0.25"/>
                    <span>{customer ? customer.name : "Unknown"}</span>
                </div>
            </div>
            {
                customer ?
                <div className="flex flex-col gap-1">
                <h1 className="text-2xl text-blue-800 mb-3">{customer.name}</h1>
                <p><strong>Email:</strong> {customer.email}</p>
                <p><strong>Phone:</strong> {customer.phone}</p>
                <p><strong>Address:</strong> {customer.address}</p>
                </div> : <div>No customer found with ID: "{id}".</div>
            }
            <Link to="/customers" className="flex gap-2 items-center justify-between px-4 py-2 border-1 border-blue-800/10 text-blue-800 w-[190px] mt-4 rounded-full">
                <LuArrowLeft /> Back to Customers
            </Link>
        </div>
    );
}