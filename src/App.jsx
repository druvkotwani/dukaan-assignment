import SideNavbar from "./components/SideNavbar";

export default function App() {
  return (
    <div className="flex">
      <main className="sticky inset-0 w-[224px] bg-[#1e2640] h-screen text-[#ccc]">
        <SideNavbar />
      </main>
    </div>

  )
}