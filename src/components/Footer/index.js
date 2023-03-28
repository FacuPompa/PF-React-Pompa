import "./styles.scss";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = ()=> {

    return(
        <div>
            <footer className="text-white py-4 bg-dark">
                <div className="container">
                    <nav className="row">
                        <Link to='/' className="col-9 col-md-4 d-flex aling-items-center justify-content-center">
                            <img src="./tunel_icon.png" className="mx-2" height={80}/>
                        </Link>
                        <ul className="col-9 col-md-4 list-unlysted">
                            <li className="font-weight-bold mb-2 list-unstyled text-center">El túnel del Cómic</li>
                            <li className="text-center list-unstyled">Esta es la tienda oficial del Túnel del Cómic</li>
                        </ul>
                        <ul className="col-9 col-md-4 list-unlysted">
                            <li className = "font-weight-bold mb-2 list-unstyled text-center">Síguenos en</li>
                            <li className = "d-flex justify-content-betwen">
                                <Link style={{color:"white"}} to="https://www.facebook.com/eltuneldelcomic/?locale=es_LA"><i className ="bi bi-facebook px-3"/> </Link>
                                <Link style={{color:"white"}} to="https://www.instagram.com/el_tunel_del_comic/?hl=es"><i className ="bi bi-instagram px-3"/> </Link>
                            </li>
                        </ul>
                        <div className="container">
                            <p className="text-center mb-0 mt-2"> &copy;  Todos los derechos reservados</p>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
