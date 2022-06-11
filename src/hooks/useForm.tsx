import React from 'react'

const useForm = <T,>(initialState: T, onSubmit: (data: T) => void) => {
  const [formData, setFormData] = React.useState(initialState)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ formData })
    onSubmit?.(formData)
  }

  return { formData , setFormData, handleInputChange, handleSubmit }
}

export default useForm
