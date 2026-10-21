
import { Link } from 'react-router-dom';

export function Blog2() {
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

            <main className="container my-4" style={{ maxWidth: '800px' }}>
                <article className="blog-detalle">
                    <img 
                        src="assets/blog-caso-juan.jpg" 
                        alt="Paciente sonriendo tras lograr su objetivo nutricional"
                        className="img-fluid rounded mb-3" 
                    />
                    <h1>Cómo Juan bajó 12 kilos con un plan personalizado</h1>

                    <p>
                        Juan tiene 34 años, trabaja en oficina y, como muchas personas, había intentado bajar de peso varias
                        veces sin resultados duraderos. Después de probar dietas restrictivas que no logró sostener en el
                        tiempo, decidió buscar ayuda profesional y llegó a NutriVida en busca de un cambio real.
                    </p>

                    <h2>El primer diagnóstico</h2>
                    <p>
                        En su primera sesión, realizamos una evaluación nutricional completa: antropometría, hábitos
                        alimenticios, nivel de actividad física y objetivos personales. Detectamos que Juan comía de forma
                        irregular durante el día y compensaba con porciones muy grandes en la noche, además de un consumo bajo
                        de agua y fibra.
                    </p>

                    <h2>El plan de trabajo</h2>
                    <p>
                        Diseñamos un plan alimenticio adaptado a su rutina de oficina, con comidas simples de preparar y horarios
                        más regulares. No se trató de eliminar alimentos que le gustaban, sino de ajustar porciones y
                        frecuencia, incorporando más vegetales, proteínas magras y snacks saludables entre comidas.
                    </p>

                    <h2>El seguimiento</h2>
                    <p>
                        Durante 6 meses, Juan tuvo controles mensuales donde ajustamos el plan según sus resultados y su día a
                        día. Este seguimiento constante fue clave: permitió resolver dudas, mantener la motivación y hacer
                        pequeños ajustes antes de que se convirtieran en obstáculos grandes.
                    </p>

                    <h2>Los resultados</h2>
                    <p>
                        Al cabo de 6 meses, Juan logró bajar 12 kilos de forma sostenida, sin efecto rebote. Pero más allá del
                        número en la balanza, reportó sentir mucha más energía durante el día, mejor calidad de sueño, y sobre
                        todo, hábitos que hoy mantiene por convicción propia y no por obligación.
                    </p>

                    <p>
                        La historia de Juan es un ejemplo de que los cambios sostenibles se logran con acompañamiento
                        profesional, paciencia y un plan adaptado a la vida real de cada persona — no con dietas genéricas de
                        internet.
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