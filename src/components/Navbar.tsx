import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-300 p-4 text-white flex justify-between items-center">

            <h1 className="text-sm font-bold text-center">Optimización de Imágenes</h1>

            <div className="flex flex-row flex-wrap justify-center items-center">
                <Link className="mr-4 text-white" to="/">Inicio</Link>
                <Link className="mr-4 text-white" to="/ejercicio1">Ejercicio 1</Link>
                <Link className="mr-4" to="/ejercicio2">Ejercicio 2</Link>
                <Link className="mr-4" to="/ejercicio3">Ejercicio 3</Link>
                <Link className="mr-4" to="/ejercicio4">Ejercicio 4</Link>
{/*                 <Link className="mr-4" to="/ejercicio5">Ejercicio 5</Link>
 */}
                <Link className="mr-4" to="/testEjercicio1">TestEjercicio 1</Link>
                <Link className="mr-4" to="/testEjercicio2">TestEjercicio 2</Link>
                <Link className="mr-4" to="/testEjercicio3">TestEjercicio 3</Link>
                <Link className="mr-4" to="/testEjercicio4">TestEjercicio 4</Link>

                <Link className="mr-4" to="/testInteractivo">Tutorial interactivo</Link>
            </div>
        </nav>
    );
};

export default Navbar;