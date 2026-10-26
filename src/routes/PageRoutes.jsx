import { Routes, Route } from 'react-router-dom'

import { Layout } from '../components/Layout'

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

import { AddContact } from '../components/AddContact'
import { ContactList } from '../components/ContactList'
import { ContactDetails } from '../components/ContactDetails'

export const PageRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/contacts/add" element={<AddContact/>} />
      <Route path="/contacts" element={<ContactList/>} />
      <Route path="/contacts/:id" element={<ContactDetails/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)