import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">PlantEducation</div>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/edukasi"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Edukasi
          </NavLink>

          <NavLink
            to="/katalog"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Katalog
          </NavLink>

          <NavLink
            to="/log"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Log
          </NavLink>
        </div>
      </nav>

      {/* STYLE LANGSUNG DI SINI */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 40px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo {
          font-size: 20px;
          font-weight: bold;
          color: #2ecc71;
        }

        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-item {
          position: relative;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: 0.3s;
        }

        .nav-item:hover {
          color: #2ecc71;
        }

        /* ANIMASI GARIS */
        .nav-item::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0%;
          height: 2px;
          background: #2ecc71;
          transition: 0.3s;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        /* ACTIVE */
        .nav-item.active {
          color: #2ecc71;
        }

        .nav-item.active::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default Navbar;