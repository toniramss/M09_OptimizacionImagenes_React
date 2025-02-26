import { useRef, useState } from "react";
 
const ImageEditor = () => {
    const [image, setImage] = useState<string | null>(null);
    const [brightness, setBrightness] = useState<number>(100); // Estado para el brillo
    const canvasRef = useRef<HTMLCanvasElement>(null);
 
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };
 
    const applyFilter = (filter: string) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx || !image) return;
        const img = new Image();
        img.src = image;
        img.onload = () => {
            canvas.width = img.width / 2;
            canvas.height = img.height / 2;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                if (filter === "grayscale") {
                    let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    data[i] = data[i + 1] = data[i + 2] = avg;
                } else if (filter === "invert") {
                    data[i] = 255 - data[i];
                    data[i + 1] = 255 - data[i + 1];
                    data[i + 2] = 255 - data[i + 2];
                }
            }
            ctx.putImageData(imageData, 0, 0);
        };
    };
 
    const handleBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrightness(parseInt(e.target.value, 10));
    };
 
    return (
        <div className="bg-gradient-to-r from-green-100 to-blue-200 w-full min-h-screen p-8">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Editor de Imágenes</h1>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    Sube una imagen y aplica diferentes filtros. Ajusta el brillo y más.
                </p>

                <input
                    type="file"
                    onChange={handleImageUpload}
                    className="mb-6 w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-md focus:outline-none hover:bg-blue-600 transition-colors"
                />

                <div className="flex justify-center space-x-4 mb-6">
                    <button
                        onClick={() => applyFilter("grayscale")}
                        className="bg-blue-600 hover:bg-blue-700 text-black px-6 py-2 rounded-lg shadow-md transition duration-300"
                    >
                        Escala de Grises
                    </button>
                    <button
                        onClick={() => applyFilter("invert")}
                        className="bg-red-600 hover:bg-red-700 text-black px-6 py-2 rounded-lg shadow-md transition duration-300"
                    >
                        Invertir Colores
                    </button>
                    <button
                        onClick={() => applyFilter("brightness")}
                        className="bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-2 rounded-lg shadow-md transition duration-300"
                    >
                        Ajustar Brillo
                    </button>
                </div>

                <div className="mb-6 flex justify-center items-center">
                    <label className="mr-4 text-lg text-gray-700">Brillo:</label>
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value={brightness}
                        onChange={handleBrightnessChange}
                        className="w-48"
                    />
                </div>

                <div className="flex justify-center">
                    <canvas
                        ref={canvasRef}
                        className="border shadow-md rounded"
                        style={{
                            filter: `brightness(${brightness}%)`, // Aplicar el brillo con la propiedad filter
                        }}
                    ></canvas>
                </div>
            </div>
        </div>
    );
};
 
export default ImageEditor;