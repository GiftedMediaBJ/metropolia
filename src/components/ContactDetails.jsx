import { useParams, useNavigate } from 'react-router-dom';

import { Container } from './Container';
import { Button } from './Button';

import { useContactsContext } from '../contexts/ContactsContext';

import styles from '../styles/contactdetails.module.css'

export const ContactDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { getContact } = useContactsContext()

  const contact = getContact(id)

  if (!contact) {
    return (
      <Container>
        <h1>Contact not found</h1>
        <Button variant="outlined" onClick={() => navigate('/contacts')}>
          Back to contacts
        </Button>
      </Container>
    )
  }

  return (
    <Container>
      <h1>{contact.name}</h1>

      <div className={styles.detail}>
        <div className={styles.label}>Phone:</div>
        <span>{contact.phone}</span>
      </div>
      <div className={styles.detail}>
        <div className={styles.label}>Email:</div>
        <span>{contact.email}</span>
      </div>
      <div className={styles.detail}>
        <div className={styles.label}>Address:</div>
        <span>{contact.address}</span>
      </div>

      <Button className={styles.button} variant="outlined" onClick={() => navigate('/contacts')}>
        Back to contacts
      </Button>
    </Container>
  )
}