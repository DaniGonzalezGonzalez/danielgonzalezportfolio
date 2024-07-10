import { useContext, useState } from "react";
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
  
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="relative bg-gray-950">
      <div className="flex items-center justify-between px-8 py-4 text-white">
        <h1 className="p-1 transition duration-500 rounded hover:bg-slate-700" onClick={() => setMenuOpen(false)}><Link to="/"><HomeIcon/></Link></h1>
        <ul className="flex items-center gap-2 font-medium text-white font-montserrat">
          {/* <li className="p-1 transition duration-500 rounded hover:bg-slate-600"><Link to="/"><HomeIcon/></Link></li> */}
          <li>
            { user.uid &&
            (<button className="flex items-center p-1 ml-2 space-x-2 text-white transition duration-500 rounded hover:bg-slate-600" onClick={toggleMenu}>
              <span className="hidden text-sm montserrat-500 sm:inline">CONFIGURACIÓN</span>
              {!menuOpen ? <SettingsIcon/> : <SettingsIconOpenMenu/>}
            </button>)}

            {menuOpen && 
            (<ul className="absolute mt-2 text-white bg-gray-900 rounded">
                <li className="hover:bg-slate-600 hover:rounded"><Link to="nuevo-contenido" className="block px-4 py-2 text-sm" onClick={() => setMenuOpen(false)}>Añadir Contenido</Link></li>
                <li className="hover:bg-slate-600 hover:rounded"><Link to="contenido" className="block px-4 py-2 text-sm" onClick={() => setMenuOpen(false)}>Editar Contenido</Link></li>
              </ul>)}
          </li>
          <li className="p-1 rounded montserrat-500">
            {user.uid ? <button className='flex items-center justify-center px-2 py-1 text-white transition duration-500 rounded hover:bg-red-600' onClick={handleSignOut}>
              <span className="hidden mr-2 text-sm sm:inline">CERRAR SESIÓN</span>
              <LogoutIcon/>
              </button> : <button className="px-2 py-1 transition duration-500 rounded hover:bg-slate-500">
                <Link to="login" className='text-sm text-white'>LOGIN</Link>
              </button>}
          </li>
        </ul>
      </div>
    </nav>
  )
}
