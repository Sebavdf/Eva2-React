import { Link } from 'react-router-dom';

export function Blog1() {
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

            <main className="container my-4" style={{ maxWidth: '800px' }}>
                <article className="blog-detalle">
                    <img 
                        src="/img/vegan.jpg"
                        alt="Alimentos para una dieta equilibrada"
                        className="img-fluid rounded mb-3" 
                    />
                    <h1>5 mitos sobre las dietas que debes dejar de creer</h1>

                    <p>
                        Cada año surgen nuevas tendencias alimenticias que prometen resultados rápidos y espectaculares. Sin
                        embargo, gran parte de esta información circula sin ningún respaldo científico, y muchas veces termina
                        generando el efecto contrario al buscado: frustración, pérdida de masa muscular y un metabolismo más
                        lento. En nuestro equipo de NutriVida conversamos a diario con pacientes que llegan a consulta después
                        de haber probado varias de estas dietas sin éxito. Por eso, quisimos reunir los mitos más comunes que
                        escuchamos, y explicar qué dice realmente la evidencia.
                    </p>

                    <h2>Mito 1: Eliminar los carbohidratos es la única forma de bajar de peso</h2>
                    <p>
                        Los carbohidratos no son el enemigo. Son la principal fuente de energía del cuerpo, y eliminarlos por
                        completo puede generar fatiga, mal humor y dificultad para concentrarse. Lo importante no es
                        eliminarlos, sino elegir buenas fuentes (legumbres, avena, arroz integral) y ajustar las porciones según
                        el objetivo de cada persona.
                    </p>

                    <h2>Mito 2: Los jugos "detox" limpian el organismo</h2>
                    <p>
                        El cuerpo humano ya cuenta con órganos especializados en eliminar toxinas: el hígado y los riñones.
                        Ningún jugo, batido o té tiene la capacidad de "limpiar" el organismo de forma adicional. En muchos
                        casos, estos productos solo aportan azúcar en exceso y generan una falsa sensación de control.
                    </p>

                    <h2>Mito 3: Saltarse comidas acelera la pérdida de peso</h2>
                    <p>
                        Todo lo contrario: saltarse comidas suele llevar a comer en exceso más tarde, y a largo plazo puede
                        ralentizar el metabolismo. Mantener horarios regulares de alimentación ayuda a regular el apetito y
                        evita los atracones.
                    </p>

                    <h2>Mito 4: Todas las grasas son malas</h2>
                    <p>
                        Existen grasas saludables (como las del palto, los frutos secos o el aceite de oliva) que son esenciales
                        para el funcionamiento del organismo, incluida la producción de hormonas. El problema real está en el
                        exceso de grasas saturadas y trans, presentes en alimentos ultraprocesados.
                    </p>

                    <h2>Mito 5: Si no se ve el resultado en la balanza, la dieta no funciona</h2>
                    <p>
                        El peso en la balanza es solo un indicador entre muchos. La composición corporal, los niveles de energía,
                        la calidad del sueño y los exámenes de laboratorio suelen ser mejores reflejos de un proceso saludable
                        que el número que marca la balanza día a día.
                    </p>

                    <p>
                        Si tienes dudas sobre qué plan alimenticio se ajusta mejor a tu realidad, te invitamos a agendar una
                        evaluación con nuestro equipo de nutricionistas.
                    </p>

                    <Link to="/blogs" className="btn btn-nutrivida">Volver a blogs</Link>
                </article>
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

/*rama yohan*/