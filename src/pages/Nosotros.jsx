
import { Link } from 'react-router-dom';

export function Nosotros() {
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
                <section className="quienes-somos mb-5">
                    <h1>Sobre NutriVida</h1>
                    <p>
                        NutriVida es una clínica nutricional ubicada en Temuco, dedicada a entregar atención personalizada en
                        alimentación y bienestar. Nuestro equipo de nutricionistas acompaña a cada paciente en el logro de sus
                        objetivos de salud, ya sea control de peso, manejo de enfermedades metabólicas, rendimiento deportivo o
                        alimentación consciente.
                    </p>
                    <p>
                        Creemos en un enfoque cercano y profesional, donde cada plan se adapta a la realidad y necesidades de
                        quien consulta.
                    </p>
                </section>

                <section className="equipo">
                    <h2>Nuestro equipo</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <article className="miembro-card text-center">
                                <img 
                                    src="/img/Nutricionista1.jfif"
                                    alt="Foto de Elena Martínez" 
                                    className="img-fluid rounded mb-3" 
                                />
                                <h3>Elena Martínez</h3>
                                <p>
                                    <strong>Especialista en control de peso y metabolismo</strong><br />
                                    Nutricionista con más de 8 años de experiencia en manejo de sobrepeso, obesidad y
                                    enfermedades metabólicas como diabetes e hipertensión. Su enfoque combina educación
                                    alimentaria con seguimiento personalizado para lograr resultados sostenibles en el tiempo.
                                </p>
                            </article>
                        </div>

                        <div className="col-md-4 mb-4">
                            <article className="miembro-card text-center">
                                <img 
                                    src="/img/Nutricionista2.jfif"
                                    alt="Foto de Alejandro Martínez" 
                                    className="img-fluid rounded mb-3" 
                                />
                                <h3>Alejandro Martínez</h3>
                                <p>
                                    <strong>Especialista en nutrición deportiva</strong><br />
                                    Nutricionista especializado en rendimiento físico y alimentación para deportistas de todo
                                    nivel, desde aficionados hasta competitivos. Diseña planes que potencian la energía,
                                    recuperación y composición corporal según los objetivos de cada paciente.
                                </p>
                            </article>
                        </div>

                        <div className="col-md-4 mb-4">
                            <article className="miembro-card text-center">
                                <img 
                                    src="/img/Nutricionista3.jfif"
                                    alt="Foto de Luciana Gómez" 
                                    className="img-fluid rounded mb-3" 
                                />
                                <h3>Luciana Gómez</h3>
                                <p>
                                    <strong>Especialista en nutrición materno-infantil</strong><br />
                                    Nutricionista con experiencia en nutrición de mujeres embarazadas y lactantes, así como en
                                    el desarrollo nutricional de niños pequeños. Su enfoque se centra en promover una
                                    alimentación saludable y equilibrada durante los períodos críticos de crecimiento y
                                    desarrollo.
                                </p>
                            </article>
                        </div>
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