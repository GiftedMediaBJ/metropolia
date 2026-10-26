import { NavLink } from 'react-router-dom';

import { Container } from './Container'
import { Button } from './Button'

import styles from '../styles/navigation.module.css'

export const NavBar = () => {

  return (
    <nav>
      <Container type="nav">
        <NavLink to="/">
          {({ isActive }) => (
            <Button active={isActive}>
              Home
            </Button>
          )}
        </NavLink>
        <NavLink to="/contacts" end>
          {({ isActive }) => (
            <Button active={isActive}>
              Contacts
            </Button>
          )}
        </NavLink>
        <NavLink to="/contacts/add" end>
          {({ isActive }) => (
            <Button active={isActive}>
              Add Contact
            </Button>
          )}
        </NavLink>
      </Container>
    </nav>
  )
}