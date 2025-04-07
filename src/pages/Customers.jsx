import { Link } from 'react-router-dom';
import { LuChevronRight } from 'react-icons/lu';
import CustomerCard from '../components/CustomerCard';

const mockCustomers = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com" },
    { id: 2, name: "Sam Wilson", email: "sam@example.com" },
];

export default function Customers({searchKey}) {
    const customers = mockCustomers.filter((item) => item.name.toLowerCase().includes(searchKey.toLowerCase()));

    return (
        <div className="mt-2 p-2 md:p-4">
            <div className="flex flex-col md:flex-row gap-2 mb-4 md:justify-between">
                <h1 className="text-3xl text-blue-800 font-semibold">Customers</h1>
                <div className="flex items-center gap-1 p-2 bg-blue-50 md:bg-transparent text-blue-800 text-xs">
                    <span>Admin</span>
                    <LuChevronRight className="translate-0.25"/>
                    <span>Customers</span>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                customers.length !== 0 ?
                customers.map(customer =>
                    <Link to={`/customers/${customer.id}`} key={customer.id}>
                        <CustomerCard customer={customer} />
                    </Link>
                ) : <div className="text-sm">No customers found for <span className="italic">"{searchKey}"</span>.</div>
            }
            </div>
        </div>
    );
}