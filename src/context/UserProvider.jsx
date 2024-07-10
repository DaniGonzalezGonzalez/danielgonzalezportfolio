import { useUser } from "../hooks/useUser"
import { UserContext } from "./UserContext"
import PropTypes from 'prop-types'


export function UserProvider({ children }) {
  const data = useUser()

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.any
}