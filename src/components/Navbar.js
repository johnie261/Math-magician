import { Link } from 'react-router-dom';

const Navbar = () => (
  <section className="header">
    <h1 className="heading">Math magician</h1>
    <nav className="Navbar">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="calculator">Calculator</Link>
      <Link className="link" to="quote">Quotes</Link>
    </nav>
  </section>

);

export default Navbar;
