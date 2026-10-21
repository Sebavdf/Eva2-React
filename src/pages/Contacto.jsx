export function Contacto() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index">
                        <img 
                            src="assets/logoNutriVida.jfif" 
                            alt="Logo NutriVida" 
                            style={{ width: '40px', height: '40px' }} 
                        />
                        NutriVida
                    </a>
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
                            <li className="nav-item"><a className="nav-link" href="index">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="servicios">Servicios</a></li>
                            <li className="nav-item"><a className="nav-link" href="nosotros">Nosotros</a></li>
                            <li className="nav-item"><a className="nav-link" href="blogs">Blogs</a></li>
                            <li className="nav-item"><a className="nav-link" href="contacto">Contacto</a></li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="login">Iniciar sesión</a></li>
                            <li className="nav-item"><a className="nav-link" href="registro">Registrar usuario</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="misServicios">
                                    Mis productos (<span id="contador-carrito">0</span>)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="container my-4">
                <section className="formulario-contacto d-flex justify-content-center">
                    <div className="login-box text-center" style={{ maxWidth: '500px', width: '100%' }}>
                        <img 
                            src="assets/logoNutriVida.jfif" 
                            alt="logo NutriVida" 
                            style={{ width: '100px', height: '100px' }} 
                        />
                        <h1>NutriVida</h1>
                        <p>Contáctanos</p>

                        <form className="text-start">
                            <div className="campo-formulario mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="nombre" 
                                    name="nombre" 
                                    maxLength={100} 
                                    required 
                                />
                            </div>

                            <div className="campo-formulario mb-3">
                                <label htmlFor="correo" className="form-label">Correo</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="correo" 
                                    name="correo" 
                                    maxLength={100} 
                                />
                            </div>

                            <div className="campo-formulario mb-3">
                                <label htmlFor="comentario" className="form-label">Comentario</label>
                                <textarea 
                                    className="form-control" 
                                    id="comentario" 
                                    name="comentario" 
                                    maxLength={500} 
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-nutrivida w-100">
                                Enviar mensaje
                            </button>
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
                        <a href="servicios">Servicios</a>
                        <a href="nosotros">Nosotros</a>
                        <a href="contacto">Contacto</a>
                    </nav>
                </div>
            </footer>
        </>
    );
}