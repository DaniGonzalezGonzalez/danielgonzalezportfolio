import { useState } from "react"

export function useForm (initialvalue = {}) {
  const [values, setValues] = useState(initialvalue)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const reset = () => {
    setValues(initialvalue)
  }
  return {
    ...values,
    handleChange,
    reset
  }
}