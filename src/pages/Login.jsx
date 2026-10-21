
import { Link } from 'react-router-dom';


export function Login() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="img/logoNutriVida.jfif" alt="Logo NutriVida" width="40" height="40"/>
                        NutriVida
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
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
                            <li className="nav-item"><Link className="nav-link" to="/mis-servicios">Mis productos (<span id="contador-carrito">0</span>)</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="container my-4">
                <section className="formulario-login d-flex justify-content-center">
                    <div className="login-box text-center" style={{ maxWidth: '400px', width: '100%' }}>
                        <img src="img/logoNutriVida.jfif" alt="logo NutriVida" width="100" height="100"/>
                        <h1>NutriVida</h1>

                        <form className="text-start">
                            <div className="campo-formulario mb-3">
                                <label htmlFor="correo" className="form-label">Correo</label>
                                <input type="email" className="form-control" id="correo" name="correo" required maxLength="100"/>
                            </div>

                            <div className="campo-formulario mb-3">
                                <label htmlFor="contrasena" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="contrasena" name="contrasena" required minLength="4" maxLength="10"/>
                            </div>

                            <button type="submit" className="btn btn-nutrivida w-100">Iniciar sesión</button>
                        </form>
                    </div>
                </section>
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
