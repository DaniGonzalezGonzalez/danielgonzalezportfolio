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
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <fieldset className="flex flex-col w-1/2 gap-2 p-3 bg-gray-600 rounded">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-white font-monsterrat" htmlFor="email">Usuario</label>
          <input ref={usernameRef} className="p-2 text-xs border rounded" htmlFor="email" type="email" name="email" id="email" placeholder="correo@gmail.com" value={email} onChange={handleChange}/>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-white font-monsterrat" htmlFor="password">Password</label>
          <input className='p-2 text-xs text-gray-800 border roundedfont-medium font-monsterrat' ref={passwordRef} htmlFor="password" type="password" name="password" id="password" placeholder="******" value={password} onChange={handleChange}/>
        </div>
        <button className="text-white bg-gray-900 hover:text-white border hover:bg-gray-600 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-montserrat mt-3">Login</button>
        {message && <strong className="p-2 bg-red-400 rounded">{message}</strong>}
      </fieldset>
      <div>
        <p className="m-4 mt-8 text-xs font-bold text-center text-white font-montserrat">LOGIN <br/> - <br/> EXCLUSIVO PARA ADMINISTRACIÓN DE LA WEB</p>
      </div>
    </form>
  )
}
