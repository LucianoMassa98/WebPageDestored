import { useState, useRef } from 'react'

const useForms = (initialData, onValidate) => {
  const [form, setForm] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [errors, setErros] = useState({})
  const inputRefs = useRef({});

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const err = onValidate(form)
    setErros(err)

    if (Object.keys(err).length === 0) {
      setLoading(true)
      fetch("https://formsubmit.co/ajax/oxxoale@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if(data.success === "true") {
          setForm(initialData)
          alert("Form Submitted successfully")
          }
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
          setLoading(false)
        });
    }else{
      const firstErrorKey = Object.keys(err)[0];
      if (inputRefs.current[firstErrorKey]) {
        inputRefs.current[firstErrorKey].focus();
      }
    }
  }

  return { form, errors, loading, handleChange, handleSubmit, inputRefs }
}

export default useForms;