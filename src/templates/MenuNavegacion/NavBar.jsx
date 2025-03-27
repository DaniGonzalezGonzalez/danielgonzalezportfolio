import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { HomeIcon, LogoutIcon, SettingsIcon, SettingsIconOpenMenu } from "../../assets/Iconos";

export function NavBar() {  
  const {user, _signOut} = useContext(UserContext)
  const navigate = useNavigate()
  const handleSignOut = () => {
    _signOut()
    setMenuOpen(false)
    navigate('/')
  }
  
  const handleScrollToEdit = (idCategoria) => {
    const editContentElement = document.getElementById(idCategoria);
    if (editContentElement) {
      editContentElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  const [menuOpen, setMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsHidden(currentScrollY > 300)  // Oculta el Navbar si no estamos en la parte superior
      if (currentScrollY > 300) setMenuOpen(false)  // Cierra el menú si se hace scroll hacia abajo
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full bg-transparent transition-transform duration-500 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="flex items-center justify-between px-8 py-4 text-white">
        <h1 className="p-1 transition duration-500 rounded-xl hover:bg-slate-700" onClick={() => setMenuOpen(false)}><Link to="/"><HomeIcon/></Link></h1>
        <ul className="flex items-center gap-2 font-medium text-white font-montserrat">
          <div className="flex px-2 py-1 text-sm transition duration-500 hover:bg-slate-100 hover:text-black rounded-xl">
            <Link to onClick={() => handleScrollToEdit('indice')}>ÍNDICE</Link>
          </div>
          <li>
            { user.uid &&
            (<button className="flex items-center p-1 px-2 transition duration-500 rounded-xl hover:bg-slate-100 hover:text-black" onClick={toggleMenu}>
              <span className="hidden mr-2 text-sm montserrat-500 sm:inline">CONFIGURACIÓN</span>
              {!menuOpen ? <SettingsIcon/> : <SettingsIconOpenMenu/>}
            </button>)}

            {menuOpen && !isHidden && 
            (<ul className="absolute mt-2 text-white bg-gray-900 rounded-xl hover:rounded-xl">
                <li className="hover:bg-slate-600 hover:rounded-xl"><Link to="nuevo-contenido" className="block px-4 py-2 text-sm" onClick={() => setMenuOpen(false)}>Añadir Contenido</Link></li>
                <li className="hover:bg-slate-600 hover:rounded-xl"><Link to="contenido" className="block px-4 py-2 text-sm" onClick={() => setMenuOpen(false)}>Editar Contenido</Link></li>
              </ul>)}
          </li>
          <li className="p-1 rounded montserrat-500">
            {user.uid ? <button className='flex items-center justify-center px-2 py-1 text-white transition duration-500 rounded-xl hover:bg-red-600' onClick={handleSignOut}>
              <span className="hidden mr-2 text-sm sm:inline">CERRAR SESIÓN</span>
              <LogoutIcon/>
              </button> : <button className="px-2 py-1 transition duration-500 rounded-xl hover:bg-slate-100 hover:text-black">
                <Link to="login" className='text-sm'>LOGIN</Link>
              </button>}
          </li>
        </ul>
      </div>
    </nav>
  )
}
