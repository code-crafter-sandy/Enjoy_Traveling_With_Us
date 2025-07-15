import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">BUS BOOKING</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Bus" className="nav-link active">Bus</Link>
            </li>
            <li className="nav-item">
              <Link to="/Booking" className="nav-link active">Booking</Link>
            </li>
            <li className="nav-item">
              <Link to="/Users" className="nav-link active">Users</Link>
            </li>

            <li className="nav-item">
              <Link to="/rating" className="nav-link active">Rating</Link>
            </li>
    


          </ul>
          <button className="btn btn-warning ms-auto" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
