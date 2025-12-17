import { useState } from "react"

export function SidebarLayout({sidebar,children}){
    const[isOpen,setIsOpen] = useState(true);
    return(
        <div className="flex min-h-screen">
            <aside className={`bg-slate-900 text-white transition-all duration-300 ${isOpen?"w-64":"w-16"}`}>
                {sidebar({isOpen,toggle:()=>setIsOpen(!isOpen)})}
            </aside>
            <main className="flex-1 bg-gray-100 p-6">{children}</main>
        </div>
    )
}