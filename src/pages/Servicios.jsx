
import { Link } from 'react-router-dom';

export function Servicios() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="assets/logoNutriVida.jfif" alt="Logo NutriVida" width="40" height="40" />
                        NutriVida
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/servicios">Servicios</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/login">Iniciar sesión</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/registro">Registrar usuario</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/misServicios">
                                    Mis productos (<span id="contador-carrito">0</span>)
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="container my-4">
                <h1>Servicios</h1>
                <div id="lista-servicios" className="row">
                    {/* Las tarjetas se generarán aquí con JavaScript */}
                </div>
            </main>

            <footer className="text-white py-4 mt-4">
                <div className="container d-flex flex-wrap justify-content-between">
                    <div>
                        <p className="mb-0">NutriVida — Clínica Nutricional</p>
                        <p className="mb-0">Temuco, Región de La Araucanía</p>
                    </div>
                    <nav className="d-flex gap-3">
                        <Link to="/servicios">Servicios</Link>
                        <Link to="/nosotros">Nosotros</Link>
                        <Link to="/contacto">Contacto</Link>
                    </nav>
                </div>
            </footer>
        </>
    );
}