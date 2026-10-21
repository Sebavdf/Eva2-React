
export function Inicio() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
                <img src="img/logoNutriVida.jfif" alt="Logo NutriVida" width="40" height="40"/>
                NutriVida
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item"><a className="nav-link" href="index">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="servicios">Servicios</a></li>
                    <li className="nav-item"><a className="nav-link" href="nosotros">Nosotros</a></li>
                    <li className="nav-item"><a className="nav-link" href="blogs">Blogs</a></li>
                    <li className="nav-item"><a className="nav-link" href="contacto">Contacto</a></li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="login">Iniciar sesión</a></li>
                    <li className="nav-item"><a className="nav-link" href="registro">Registrar usuario</a></li>
                    <li className="nav-item"><a className="nav-link" href="misServicios">Mis productos (<span
                                id="contador-carrito">0</span>)</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main className="container my-4">
        <section className="hero row align-items-center mb-5">
            <div className="col-md-6 hero-text">
                <h1>Nutrición personalizada para cada objetivo</h1>
                <p>En NutriVida te acompañamos en pérdida de peso, control de enfermedades metabólicas, nutrición
                    deportiva y alimentación vegetariana o vegana, con seguimiento profesional en cada etapa.</p>
                <a href="servicios.html" className="btn btn-nutrivida">Ver servicios</a>
            </div>
            <div className="col-md-6">
                <img src="img/Nutricionista-atendiendo-consulta.jfif"
                    alt="Nutricionista atendiendo a un paciente en consulta" className="img-fluid rounded"/>
            </div>
        </section>

        <section className="servicios">
            <h2>Nuestros servicios</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <article className="servicio-card">
                        <img src="img/perdidaPeso.jfif" alt="Servicio de pérdida de peso" className="img-fluid mb-2"/>
                        <h3>Plan de pérdida de peso</h3>
                        <p>Plan de control de peso $25.000</p>
                        <a href="servicios.html" className="btn btn-nutrivida">Agendar hora</a>
                    </article>
                </div>
                <div className="col-md-4 mb-4">
                    <article className="servicio-card">
                        <img src="img/EnfermedadesMetabolicas.jfif"
                            alt="Servicio de control de enfermedades metabólicas" className="img-fluid mb-2"/>
                        <h3>Control metabólico</h3>
                        <p>Seguimiento de diabetes, hipertensión y otras enfermedades metabólicas $30.000</p>
                        <a href="servicios.html" className="btn btn-nutrivida">Agendar hora</a>
                    </article>
                </div>
                <div className="col-md-4 mb-4">
                    <article className="servicio-card">
                        <img src="img/nutricionDeportiva.jfif" alt="Servicio de nutrición deportiva"
                            className="img-fluid mb-2" />
                        <h3>Nutrición deportiva</h3>
                        <p>Plan para rendimiento físico $37.000</p>
                        <a href="servicios.html" className="btn btn-nutrivida">Agendar hora</a>
                    </article>
                </div>
                <div className="col-md-4 mb-4">
                    <article className="servicio-card">
                        <img src="img/vegan.jpg" alt="Servicio de alimentación vegetariana y vegana"
                            className="img-fluid mb-2" />
                        <h3>Vegetariana / vegana</h3>
                        <p>Plan alimenticio sin productos animales $25.000</p>
                        <a href="servicios.html" className="btn btn-nutrivida">Agendar hora</a>
                    </article>
                </div>
                <div className="col-md-4 mb-4">
                    <article className="servicio-card">
                        <img src="img/nutricionInfantil.jpg" alt="Servicio de nutrición infantil"
                            className="img-fluid mb-2" />
                        <h3>Nutrición infantil</h3>
                        <p>Plan alimenticio para niños $25.000</p>
                        <a href="servicios.html" className="btn btn-nutrivida">Agendar hora</a>
                    </article>
                </div>
                <div className="col-md-4 mb-4">
                    <article className="servicio-card">
                        <img src="img/embarazo.jfif" alt="Servicio de nutrición en embarazo y lactancia"
                            className="img-fluid mb-2" />
                        <h3>Embarazo y lactancia</h3>
                        <p>Seguimiento nutricional para el embarazo $28.000</p>
                        <a href="servicios.html" className="btn btn-nutrivida">Agendar hora</a>
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
                <a href="servicios.html">Servicios</a>
                <a href="nosotros.html">Nosotros</a>
                <a href="contacto.html">Contacto</a>
            </nav>
        </div>
    </footer>
        </>
    )
}