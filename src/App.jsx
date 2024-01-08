import Header from "./components/Header";
import Overview from "./components/Overview/Overview";
import SideNavbar from "./components/SideNavbar";

export default function App() {
  return (
    <main className="flex">
      <aside className="sticky inset-0 w-[224px] bg-[#1e2640] h-screen text-[#ccc]">
        <SideNavbar />
      </aside>
      <div className='flex-1 overflow-auto'>
        <Header />
        <Overview />
      </div>
    </main>

  )
}