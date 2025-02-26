const Home = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-100 to-indigo-300 w-full min-h-screen flex flex-col items-center justify-center text-center p-8">
            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
                    Práctica: Optimización y Manipulación de Imágenes
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    En esta práctica aprenderás a optimizar imágenes, implementar carga diferida (Lazy Loading),
                    y manipular imágenes con Canvas en React 19. 
                </p>
                <p className="text-lg text-gray-600 mt-6">
                    Selecciona un ejercicio en el menú superior para comenzar.
                </p>
            </div>
        </div>
    );
};

export default Home;
