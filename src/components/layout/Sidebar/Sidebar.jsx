import { Menu, ChevronLeft } from "lucide-react";
import { SidebarItem } from "./SidebarItems";
export function Sidebar({ isOpen, toggle }) {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
                {isOpen && <h1 className="font-bold">MyApp</h1>}
                <button onClick={toggle}>
                    {isOpen ? <ChevronLeft/> : <Menu />}
                </button>
            </div>
            {/* Menu */}
            <nav className="flex-1 p-2 space-y-2">
                <SidebarItem isOpen={isOpen} label="Dashboard"></SidebarItem>
                <SidebarItem isOpen={isOpen} label="User"></SidebarItem>
                <SidebarItem isOpen={isOpen} label="Setting"></SidebarItem>
            </nav>
        </div>
    )
}