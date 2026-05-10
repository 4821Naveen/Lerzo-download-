import React from 'react';
import { SubscriptionStatus } from "@/components/SubscriptionStatus";
import { TrialExpiredModal } from "@/components/TrialExpiredModal";
import { 
  Users, 
  GraduationCap, 
  Wallet, 
  Calendar, 
  LayoutDashboard,
  Settings,
  Bell,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter">LERZO</span>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          <NavItem icon={<LayoutDashboard />} label="Overview" active />
          <NavItem icon={<Users />} label="Students" />
          <NavItem icon={<Calendar />} label="Attendance" />
          <NavItem icon={<Wallet />} label="Fees & Billing" />
          <NavItem icon={<Settings />} label="Settings" />
        </nav>

        <div className="p-6">
          <SubscriptionStatus />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Dashboard</h1>
            <p className="text-gray-500 font-medium">Welcome back! Here's what's happening today.</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input className="pl-10 h-11 bg-white border-none shadow-sm rounded-xl" placeholder="Quick Search..." />
            </div>
            <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl bg-white border-none shadow-sm relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
            </Button>
            <div className="w-11 h-11 rounded-xl bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard title="Total Students" value="1,284" icon={<Users />} color="bg-blue-500" />
          <StatCard title="Monthly Revenue" value="₹48,200" icon={<Wallet />} color="bg-emerald-500" />
          <StatCard title="Active Courses" value="12" icon={<GraduationCap />} color="bg-amber-500" />
        </div>

        <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-50 min-h-[400px] flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-gray-300 mb-6">
            <LayoutDashboard className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Recent Activity</h3>
          <p className="text-gray-500 max-w-sm">Start by adding your first student or creating a new course to see analytics here.</p>
        </div>
      </main>

      <TrialExpiredModal />
    </div>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <button className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
    {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
    <span className="text-sm tracking-tight">{label}</span>
  </button>
);

const StatCard = ({ title, value, icon, color }: { title: string, value: string, icon: React.ReactNode, color: string }) => (
  <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 flex items-center gap-6 group hover:shadow-xl hover:shadow-gray-100 transition-all duration-500">
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-inherit/20 group-hover:scale-110 transition-transform`}>
      {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
    </div>
    <div>
      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{title}</p>
      <h4 className="text-3xl font-black text-gray-900">{value}</h4>
    </div>
  </div>
);

export default Dashboard;
