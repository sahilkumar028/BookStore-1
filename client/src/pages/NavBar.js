import "./style/NavBar.css";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NavBar() {
  return (
    <>
    <div className="NavBar sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Pustak Bhandar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/collection">Collection</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/AddBooks">Add Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/ListBook">List Books</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <Outlet />
    <Footer />
    <ToastContainer />
    </>
    
  );
}
