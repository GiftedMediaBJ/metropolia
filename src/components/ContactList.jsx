import { NavLink } from 'react-router-dom';

import { Container } from './Container'
import { Button } from './Button'

import { useContactsContext } from '../contexts/ContactsContext';

import styles from '../styles/contactlist.module.css'

export const ContactList = () => {
  const { contacts, deleteContact } = useContactsContext()

  const handleDelete = (contact) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${contact.name}?`
    )

    if (confirmed) {
      deleteContact(contact.id)
    }
  }


  return (
    <Container>
      <h1>Contact List</h1>
      <div className={styles.header}>
        <NavLink to="/contacts/add">
          <Button>Add contact + </Button>
        </NavLink>
      </div>
      {contacts.map((contact, index) => (
        <div
          key={contact.id}
          className={`${styles.contact} ${index % 2 === 0 ? styles.even : ''}`}
        >
          <NavLink to={`/contacts/${contact.id}`} className={styles.name}>
            {contact.name}
          </NavLink>
          <div>{contact.phone}</div>
          <NavLink to={`/contacts/${contact.id}`} className={styles.endItem}>
            <Button>Contact details</Button>
          </NavLink>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(contact)}
          >
            Delete
          </Button>
        </div>
      ))}
    </Container>
  )
}