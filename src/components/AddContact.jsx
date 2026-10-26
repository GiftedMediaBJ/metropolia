import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from './Container'
import { Button } from './Button'
import { useContactsContext } from '../contexts/ContactsContext'

import style from '../styles/addcontact.module.css'

export const AddContact = () => {
  const { addContact } = useContactsContext()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    document.title = 'Add Contact | Metropolis Address Book'
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const validate = () => {
    const newErrors = {}

    // Regex tests on space between characters to test for first and last name.
    if (!/^\S+\s+\S+/.test(formData.name.trim())) {
      newErrors.name = 'Please enter your first and last name.'
    }

    // Regex tests for at least 10 digits in the phone number and only digits
    if (!/^[\d\s]+$/.test(formData.phone) ||
      formData.phone.replace(/\s/g, '').length < 10) {
      newErrors.phone = 'Phone number must contain at least 10 digits.'
    }

    // Regex tests for basic email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    // regext tests if there is a number in de name (\d)
    if (formData.address.trim().length < 5 ||
      !/\d/.test(formData.address)) {
      newErrors.address = 'Please enter a valid address with a house number.'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    addContact({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      address: formData.address.trim(),
    })

    navigate('/contacts')
  }

  return (
    <Container>
      <h1>Add a contact</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div className={style.formField}>
          <label className={style.label} htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            required
          />
          {errors.name && (
            <div className={style.error}>
              <span className={style.label}/>
              <span className={style.alert} role="alert">{errors.name}</span>
            </div>
          )}
        </div>

        <div className={style.formField}>
          <label className={style.label} htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            required
          />
          {errors.phone && (
            <div className={style.error}>
              <span className={style.label}/>
              <span className={style.alert} role="alert">{errors.phone}</span>
            </div>
          )}
        </div>

        <div className={style.formField}>
          <label className={style.label} htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            required
          />
          {errors.email && (
            <div className={style.error}>
              <span className={style.label}/>
              <span className={style.alert} role="alert">{errors.email}</span>
            </div>
          )}
        </div>

        <div className={style.formField}>
          <label className={style.label} htmlFor="address">Address:</label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            aria-invalid={!!errors.address}
            required
          />
          {errors.address && (
            <div className={style.error}>
              <span className={style.label}/>
              <span className={style.alert} role="alert">{errors.address}</span>
            </div>
          )}
        </div>

        <div className={style.formField}>
          <div className={style.label}></div>
          <Button type="submit" variant="contained">
            Add Contact
          </Button>
        </div>
      </form>
    </Container>
  )
}