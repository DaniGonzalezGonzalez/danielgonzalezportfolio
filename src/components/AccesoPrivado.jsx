/* eslint-disable react/prop-types */
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import PropTypes from 'prop-types'
// import { Navigate } from "react-router-dom"

// function AccesoNoPermitido() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-800">
//       <h1 className="px-5 py-2 text-xl font-bold text-center text-white font-montserrat">
//         ZONA PRIVADA - ACCESO NO PERMITIDO
//       </h1>
//     </div>
//   )
// }

export function AccesoPrivado({ children }) {
  const { uid } = useContext(UserContext)
  if(!uid) return 

  // Alternativa
  // if(!uid) return <Navigate to='/'/>
  return (
    <>
      {children}
      {/* Alternativa */}
      {/* {uid ? children : <Navigate to='/'/>} */}
    </>
  )
}
AccesoPrivado.propTypes = {
  children : PropTypes.any.isRequired
}
