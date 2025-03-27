import { useContext, useRef } from "react"
import { useForm } from "../hooks/useForm"
import { UserContext } from "../context/UserContext"

export function LoginForm() {
  const { email, password, handleChange } = useForm({ email: '', password: '' })
  const { _signInWithEmailAndPassword, message } = useContext(UserContext)
  const usernameRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.length) {
      usernameRef.current.focus()
      return
    }
    if (!password.length) {
      passwordRef.current.focus()
      return
    }
    _signInWithEmailAndPassword(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <fieldset className="flex flex-col w-[90vw] lg:w-full max-w-md gap-6 p-8 bg-gray-800 shadow-lg rounded-2xl">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-300" htmlFor="email">Usuario</label>
          <input ref={usernameRef} className="p-3 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" name="email" id="email" placeholder="correo@gmail.com" value={email} onChange={handleChange}/>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-300" htmlFor="password">Password</label>
          <input ref={passwordRef} className="p-3 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" name="password" id="password" placeholder="******" value={password} onChange={handleChange}/>
        </div>
        <button className="w-full py-2.5 mt-4 font-bold text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">Login</button>
        {message && <strong className="p-2 mt-4 text-center text-red-500 bg-red-100 border border-red-400 rounded">{message}</strong>}
      </fieldset>
      <div className="mt-8 text-center">
        <p className="text-xs font-bold text-gray-400">LOGIN<br/> - <br/> EXCLUSIVO PARA ADMINISTRACIÓN DE LA WEB</p>
      </div>
    </form>
  )
}
