import './style/Footer.css';

function Footer() {
  return (
  <footer className="py-3 bg-dark text-light bottom-0">
    <ul className="nav justify-content-center border-bottom border-warning pb-3 mb-3 text-light">
      <li className="nav-item"><a to="#" className="nav-link px-2 text-decoration-none text-light">Home</a></li>
      <li className="nav-item"><a to="#" className="nav-link px-2 text-decoration-none text-light">Features</a></li>
      <li className="nav-item"><a to="#" className="nav-link px-2 text-decoration-none text-light">Pricing</a></li>
      <li className="nav-item"><a to="#" className="nav-link px-2 text-decoration-none text-light">FAQs</a></li>
      <li className="nav-item"><a to="#" className="nav-link px-2 text-decoration-none text-light">About</a></li>
    </ul>
    <p class="text-center">© 2024 Company, Inc</p>
  </footer>
  );
}

export default Footer;