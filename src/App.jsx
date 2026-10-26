import { BrowserRouter } from 'react-router-dom'
import { PageRoutes } from './routes/PageRoutes.jsx'
import {ContactsContextProvider} from './contexts/ContactsContext'

const App = () => (
  <ContactsContextProvider>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  </ContactsContextProvider>
)

export default App