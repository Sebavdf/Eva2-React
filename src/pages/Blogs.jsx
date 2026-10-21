
export function Blogs() {
    return (
        <> 
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="index">
                <img src="assets/logoNutriVida.jfif" alt="Logo NutriVida" width="40" height="40"/>
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
        <section className="blogs">
            <h1>Noticias importantes</h1>

            <article className="blog-card row align-items-center mb-4">
                <div className="col-md-6 blog-text">
                    <h2>5 mitos sobre las dietas que debes dejar de creer</h2>
                    <p>Descubre por qué las dietas milagro no funcionan a largo plazo y qué dice la evidencia científica
                        sobre la pérdida de peso saludable y sostenible.</p>
                    <a href="blog1" className="btn btn-nutrivida">Ver caso</a>
                </div>
                <div className="col-md-6">
                    <img src="assets/blog-mitos-dietas.jpg" alt="Ilustración sobre mitos de dietas y alimentación"
                        className="img-fluid rounded"/>
                </div>
            </article>

            <article className="blog-card row align-items-center mb-4">
                <div className="col-md-6 blog-text">
                    <h2>Cómo Juan bajó 12 kilos con un plan personalizado</h2>
                    <p>Conoce la historia de Juan, quien logró bajar 12 kilos en 6 meses gracias a un plan nutricional
                        personalizado y un seguimiento constante con nuestro equipo.</p>
                    <a href="blog2" className="btn btn-nutrivida">Ver caso</a>
                </div>
                <div className="col-md-6">
                    <img src="assets/blog-caso-juan.jpg" alt="Paciente sonriendo tras lograr su objetivo nutricional"
                        className="img-fluid rounded"/>
                </div>
            </article>
        </section>
    </main>

    <footer className="text-white py-4 mt-4">
        <div className="container d-flex flex-wrap justify-content-between">
            <div>
                <p className="mb-0">NutriVida — Clínica Nutricional</p>
                <p className="mb-0">Temuco, Región de La Araucanía</p>
            </div>
            <nav className="d-flex gap-3">
                <a href="servicios">Servicios</a>
                <a href="nosotros">Nosotros</a>
                <a href="contacto">Contacto</a>
            </nav>
        </div>
    </footer> 
        
        </>
    )
}