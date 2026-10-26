import { createContext, useContext, useMemo, useState } from 'react'
import { initialContacts } from '../data/InitialContacts.js'

export const ContactsContext = createContext(null)

export const ContactsContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState(initialContacts)

  const addContact = (contact) => {
    setContacts(prev => [
      ...prev,
      { ...contact, id: crypto.randomUUID() }
    ])
  }

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id))
  }

  const getContact = (id) => {
    return contacts.find(contact => String(contact.id) === id)
  }

  const updateContact = (id, updatedContact) => {
    setContacts(prev =>
      prev.map(contact =>
        contact.id === id
          ? { ...contact, ...updatedContact, id }
          : contact
      )
    )
  }

  const contextValues = useMemo(
    () => ({
      contacts,
      getContact,
      addContact,
      deleteContact,
      updateContact,
    }),
    [contacts]
  )

  return (
    <ContactsContext.Provider value={contextValues}>
      {children}
    </ContactsContext.Provider>
  )
}

export const useContactsContext = () => useContext(ContactsContext)