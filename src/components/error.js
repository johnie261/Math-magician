import { Link } from 'react-router-dom';

const Error = () => (
  <section className="section">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <Link to="/">back home</Link>
  </section>
);
export default Error;
