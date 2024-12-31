'use client'


import {Sidebar} from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <Sidebar />
            {/* Main content */}
            <main className="flex-1 p-4 overflow-y-auto mt-20">
                {children}
            </main>
        </div>
    )
}

