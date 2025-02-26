import { useState } from "react";

const questions = [
    {
        question: "¿Qué API de JavaScript permite manipular imágenes en un canvas?",
        options: ["WebGL", "Canvas API", "Intersection Observer"],
        answer: "Canvas API",
    },
    {
        question: "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?",
        options: ["getContext()", "getImageData()", "setTimeout()"],
        answer: "getImageData()",
    },
    {
        question: "¿Qué propiedad se usa en Canvas para aplicar un filtro de imagen?",
        options: ["filter", "opacity", "transform"],
        answer: "filter",
    },
];

const TestEjercicio3 = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(""));

    const handleSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };

    const checkAnswers = () => {
        const correct = selectedAnswers.filter((ans, i) => ans === questions[i].answer).length;
        alert(`Has respondido correctamente ${correct} de ${questions.length}`);
    };

    return (
        <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Test de Manipulación de Imágenes</h2>

            {questions.map((q, i) => (
                <div key={i} className="mb-6">
                    <p className="font-semibold text-gray-800 mb-2">{q.question}</p>
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
                    className="bg-green-500 text-black px-6 py-2 rounded-md hover:bg-green-600"
                >
                    Verificar respuestas
                </button>
            </div>
        </div>
    );
};

export default TestEjercicio3;
