import Header from "./components/Header";
import SideNavbar from "./components/SideNavbar";

export default function App() {
  return (
    <main className="flex">
      <aside className="sticky inset-0 w-[224px] bg-[#1e2640] h-screen text-[#ccc]">
        <SideNavbar />
      </aside>
      <section className='flex-1 overflow-auto'>
        <Header />
      </section>
    </main>

  )
}