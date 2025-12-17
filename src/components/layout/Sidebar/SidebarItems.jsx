export function SidebarItem({ label, isOpen }) {
    return (
        <div className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 cursor-pointer">
            <span className="w-6 h-6 bg-slate-600 rounded"></span>
            {isOpen && <span>{label}</span>}
        </div>
    )
}