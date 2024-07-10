import { Outlet } from "react-router-dom";
import { RedesSocialesIcon } from "../assets/Iconos";
import { NavBar } from "./MenuNavegacion/NavBar";

export function MainTemplate() {
  return (
    <div className="min-w-[335px]">
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 bg-white shadow-md navbar-container">
          <NavBar />
        </header>
        <main className="flex-grow">
          <section>
            <Outlet />
          </section>
        </main>
        <footer className="py-4 bg-gray-950">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 mx-auto text-center text-white">
            <p>&copy; 2024 Portfolio Daniel González González</p>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/daniel-gonz%C3%A1lez-gonz%C3%A1lez-3322668a/">
              <RedesSocialesIcon />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
