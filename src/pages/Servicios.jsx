
import { Link } from 'react-router-dom';

export function Servicios() {
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
                <h1>Servicios</h1>
                <div id="lista-servicios" className="row">
                    <div className="col-md-4 mb-4">
                        <article className="servicio-card">
                            <img src="/img/perdidaPeso.jfif" alt="Atención nutricional para el control de peso" />
                            <h2>Plan de pérdida de peso</h2>
                            <p>Plan de control de peso $25.000</p>
                            <Link to="/contacto" className="btn btn-nutrivida">Agendar hora</Link>
                        </article>
                    </div>
                    <div className="col-md-4 mb-4">
                        <article className="servicio-card">
                            <img src="/img/EnfermedadesMetabolicas.jfif" alt="Alimentos saludables para el control metabólico" />
                            <h2>Control metabólico</h2>
                            <p>Seguimiento de diabetes, hipertensión y otras enfermedades metabólicas $30.000</p>
                            <Link to="/contacto" className="btn btn-nutrivida">Agendar hora</Link>
                        </article>
                    </div>
                    <div className="col-md-4 mb-4">
                        <article className="servicio-card">
                            <img src="/img/nutricionDeportiva.jfif" alt="Nutrición para mejorar el rendimiento deportivo" />
                            <h2>Nutrición deportiva</h2>
                            <p>Plan para rendimiento físico $37.000</p>
                            <Link to="/contacto" className="btn btn-nutrivida">Agendar hora</Link>
                        </article>
                    </div>
                    <div className="col-md-4 mb-4">
                        <article className="servicio-card">
                            <img src="/img/vegan.jpg" alt="Alimentación vegetariana basada en vegetales" />
                            <h2>Vegetariana / vegana</h2>
                            <p>Plan alimenticio sin productos animales $25.000</p>
                            <Link to="/contacto" className="btn btn-nutrivida">Agendar hora</Link>
                        </article>
                    </div>
                    <div className="col-md-4 mb-4">
                        <article className="servicio-card">
                            <img src="/img/nutricionInfantil.jpg" alt="Alimentación saludable para niños" />
                            <h2>Nutrición infantil</h2>
                            <p>Plan alimenticio para niños $25.000</p>
                            <Link to="/contacto" className="btn btn-nutrivida">Agendar hora</Link>
                        </article>
                    </div>
                    <div className="col-md-4 mb-4">
                        <article className="servicio-card">
                            <img src="/img/embarazo.jfif" alt="Nutrición durante el embarazo y la lactancia" />
                            <h2>Embarazo y lactancia</h2>
                            <p>Seguimiento nutricional para el embarazo $28.000</p>
                            <Link to="/contacto" className="btn btn-nutrivida">Agendar hora</Link>
                        </article>
                    </div>
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