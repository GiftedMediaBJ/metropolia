import { Container } from '../components/Container'
import { Button } from '../components/Button'

import { Link } from 'react-router-dom'

export const Home = () => (
  <>
    <Container variant="light">
      <h1>Metropolia Address Book</h1>
      <p>Welcome to the Metropolia Address Book, a single-page application built with React and Vite.</p>
      <p>The application uses React Router for navigation, a shared Context API for contact management, and reusable components for a consistent interface. The Home page provides an overview of the available features.</p>
    </Container>
    <Container>
      <h1>Add a Contact</h1>
      <h5>How it works</h5>
      <p>Built with React's `useState` for form handling and validation, `useEffect` for updating the page title, and Context API for storing new contacts. After submission, React Router redirects to the Contact List.</p>
      <br/>
      <Link to="/contacts/add">
        <Button>Add Contact + </Button>
        </Link>
    </Container>

    <Container variant="light">
      <h1>View Contact List</h1>
      <h5>How it works</h5>
      <p>Contacts are retrieved from the shared React Context and displayed dynamically using map(). React Router's NavLink provides navigation to individual contact details. Contacts can also be deleted after confirmation.</p>
      <br/>
      <Link to="/contacts">
        <Button>View Contacts</Button>
      </Link>
    </Container>

    <Container>
      <h1>Contact Details</h1>
      <h5>How it works</h5>
      <p>Uses React Router's dynamic /contacts/:id route and useParams() to retrieve the contact ID. The contact is retrieved from the shared Context using getContact(). Unknown contact IDs are handled with an error message.</p>
      <br/>
      <Link to="/contacts">
        <Button>Select a Contact</Button>
      </Link>
    </Container>
  </>
)