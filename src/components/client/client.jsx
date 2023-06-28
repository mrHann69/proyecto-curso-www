import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./client.css";

function Client() {
  const navReferenceClient = useRef();

  const showNavbar = () => {
    navReferenceClient.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <h3>Client</h3>
        <nav ref={navReferenceClient}>
          <a href="/#">Delivery Mans</a>
          <a href="/#">My Products</a>
          <a href="/#">In Way</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <section>

        <div className="container-info">
          <h3>Perfil_1</h3>
          <h2>Id. complete name</h2>
          <h2>Direccion</h2>
          <h2>Email</h2>
          <h2>Telephonex</h2>
        </div>
      </section>
    </div>
  );
}

export default Client;
