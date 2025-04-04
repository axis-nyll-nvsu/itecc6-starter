export default function CustomerCard({ customer }) {
    return (
        <article className="relative bg-white p-4 rounded border-[rgba(0,0,0,0.1)] border-1 shadow-xs">
            <h3 className="text-xl text-blue-800">{customer.name}</h3>
            <p className="text-sm">{customer.email}</p>
            <div className="inline-block bg-green-200 text-green-600 text-xs py-1 px-2 absolute top-2 right-2 text-center rounded">Active</div>
        </article>
    );
}