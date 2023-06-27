import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./deliveryMan.css";

function DeliveryMan() {
    const navReferenceClient = useRef();

	const showNavbar = () => {
		navReferenceClient.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navReferenceClient}>
				<a href="/#">My Clients</a>
				<a href="/#">In Way</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default DeliveryMan;