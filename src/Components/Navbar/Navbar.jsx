import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();

  const goToPage = () => {
    navigate("/rota")
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Goliath</h2>
        <button onClick={goToPage}>teste</button>
        <p>oioi</p>
      </div>
    </nav>
  );
}

export default Navbar;
