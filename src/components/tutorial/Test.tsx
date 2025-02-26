import { useState } from "react";

const questions = [
    {
        question: "¿Cuál es el formato más eficiente para imágenes en la web?",
        options: ["JPEG", "PNG", "WebP", "AVIF"],
        answer: "AVIF",
    },
    {
        question: "¿Qué herramienta permite diseñar interfaces web?",
        options: ["Photoshop", "Figma", "GIMP"],
        answer: "Figma",
    },
    {
        question: "¿Cuál es el propósito principal de la optimización de imágenes en la web?",
        options: ["Mejorar la estética", "Reducir el tamaño del archivo y mejorar la velocidad de carga", "Aumentar la resolución de las imágenes"],
        answer: "Reducir el tamaño del archivo y mejorar la velocidad de carga",
    },
    {
        question: "¿Qué extensión de archivo es mejor para imágenes que contienen transparencia?",
        options: ["JPEG", "PNG", "GIF", "SVG"],
        answer: "PNG",
    },
    {
        question: "¿Qué técnica se utiliza para mejorar la carga de imágenes en páginas web móviles?",
        options: ["Carga diferida (Lazy loading)", "Compresión de imágenes", "Redimensionamiento de imágenes"],
        answer: "Carga diferida (Lazy loading)",
    },
    {
        question: "¿Qué herramienta es útil para crear diseños interactivos en Figma?",
        options: ["Prototyping", "Inspect", "Vector Networks"],
        answer: "Prototyping",
    },
    {
        question: "¿Cuál de estos formatos es un tipo de compresión con pérdida?",
        options: ["JPEG", "PNG", "SVG", "WebP"],
        answer: "JPEG",
    },
    {
        question: "¿Cuál es la principal diferencia entre WebP y AVIF?",
        options: ["WebP tiene mejor calidad de imagen", "AVIF tiene una compresión de mayor calidad y menor tamaño", "WebP no soporta transparencia"],
        answer: "AVIF tiene una compresión de mayor calidad y menor tamaño",
    },
    {
        question: "¿Qué propiedad CSS se utiliza para controlar la visibilidad de una imagen?",
        options: ["visibility", "display", "opacity", "position"],
        answer: "opacity",
    },
    {
        question: "¿Qué herramienta de diseño permite exportar elementos a código React?",
        options: ["Figma", "Sketch", "Adobe XD", "InVision"],
        answer: "Figma",
    },
    {
        question: "¿Qué significa la sigla SVG en diseño gráfico?",
        options: ["Scalable Vector Graphics", "Simple Vector Graphics", "Standard Vector Grid", "Scalable Visual Graphics"],
        answer: "Scalable Vector Graphics",
    },
    {
        question: "¿Qué tipo de imagen es más adecuada para gráficos simples con pocos colores?",
        options: ["PNG", "JPEG", "GIF", "SVG"],
        answer: "SVG",
    },
];

const Test = () => {
    const [selectedAnswers, setSelectedAnswers] =
        useState<string[]>(Array(questions.length).fill(""));

    const handleSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };

    const checkAnswers = () => {
        const correct = selectedAnswers.filter((ans, i) => ans ===
            questions[i].answer).length;
        alert(`Has respondido correctamente ${correct} de ${questions.length}`);
    };

    return (
        <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Test Final</h2>

            {questions.map((q, i) => (
                <div key={i} className="mb-4">
                    <p className="font-medium text-gray-700 mb-2">{q.question}</p>
                    <div className="space-y-2">
                        {q.options.map((opt) => (
                            <button
                                key={opt}
                                className={`w-full py-2 px-4 rounded-md border border-gray-300 text-left text-gray-800 ${selectedAnswers[i] === opt ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                                onClick={() => handleSelect(i, opt)}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            <div className="text-center mt-6">
                <button
                    onClick={checkAnswers}
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                >
                    Verificar respuestas
                </button>
            </div>
        </div>
    );
};

export default Test;
