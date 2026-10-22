
import { Link } from 'react-router-dom';

export function Registro() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/img/logoNutriVida.jfif" alt="Logo NutriVida" width="40" height="40" />
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
                <section className="formulario-registro">
                    <h1>Registro de usuario</h1>

                    <form className="row g-3" noValidate>
                        <div className="col-md-6 campo-formulario">
                            <label htmlFor="run" className="form-label">RUN (sin puntos ni guión)</label>
                            <input type="text" className="form-control" id="run" name="run" required />
                        </div>

                        <div className="col-md-6 campo-formulario">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" name="nombre" required />
                        </div>

                        <div className="col-md-6 campo-formulario">
                            <label htmlFor="primer-apellido" className="form-label">Primer apellido</label>
                            <input type="text" className="form-control" id="primer-apellido" name="primer-apellido" required />
                        </div>

                        <div className="col-md-6 campo-formulario">
                            <label htmlFor="segundo-apellido" className="form-label">Segundo apellido</label>
                            <input type="text" className="form-control" id="segundo-apellido" name="segundo-apellido" />
                        </div>

                        <div className="col-md-6 campo-formulario">
                            <label htmlFor="correo" className="form-label">Correo</label>
                            <input type="email" className="form-control" id="correo" name="correo" required />
                        </div>

                        <div className="col-md-6 campo-formulario">
                            <label htmlFor="contrasena" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="contrasena" name="contrasena" required />
                        </div>

                        <div className="col-md-6 campo-formulario">
                            <label htmlFor="confirmar-contrasena" className="form-label">Confirmar contraseña</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="confirmar-contrasena" 
                                name="confirmar-contrasena" 
                                required 
                            />
                        </div>

                        <div className="col-md-6 campo-formulario">
                            <label htmlFor="fecha-nacimiento" className="form-label">Fecha de nacimiento</label>
                            <input type="date" className="form-control" id="fecha-nacimiento" name="fecha-nacimiento" />
                        </div>

                        <div className="col-md-6 campo-formulario">
                            <label htmlFor="region" className="form-label">Región</label>
                            <select id="region" name="region" className="form-select"></select>
                        </div>

                        <div className="col-md-6 campo-formulario">
                            <label htmlFor="comuna" className="form-label">Comuna</label>
                            <select id="comuna" name="comuna" className="form-select"></select>
                        </div>

                        <div className="col-md-12 campo-formulario">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input type="text" className="form-control" id="direccion" name="direccion" required />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-nutrivida">Registrar</button>
                        </div>
                    </form>
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