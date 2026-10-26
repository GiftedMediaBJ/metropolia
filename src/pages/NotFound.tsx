import { Link } from 'react-router-dom'
export const NotFound = () => (
  <>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <Link to="/">Back to Home</Link>
  </>
)