import ImageOptimizer from "./ImageOptimizer";

const Ejercicio1 = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Ejercicio 1: Optimización de Imágenes</h1>
            <p className="text-lg text-gray-700 text-center mb-6">
                Suba una imagen y conviértala a diferentes formatos. Luego, compare los tamaños de archivo.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <ImageOptimizer />
            </div>

            <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                    Asegúrese de seleccionar una imagen de buena calidad para realizar una comparación precisa de los tamaños de archivo.
                </p>
            </div>
        </div>
    );
};

export default Ejercicio1;
