import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/Home"));
const Ejercicio1 = lazy(() => import("./components/Ejercicio1"));
const Ejercicio2 = lazy(() => import("./components/Ejercicio2"));
const Ejercicio3 = lazy(() => import("./components/Ejercicio3"));
const Ejercicio4 = lazy(() => import("./components/Ejercicio4"));
const Ejercicio5 = lazy(() => import("./components/Ejercicio5"));

const TestEjercicio1 = lazy(() => import("./components/TestEjercicio1"));
const TestEjercicio2 = lazy(() => import("./components/TestEjercicio2"));
const TestEjercicio3 = lazy(() => import("./components/TestEjercicio3"));
const TestEjercicio4 = lazy(() => import("./components/TestEjercicio4"));

const TestInteractivo = lazy(() => import("./components/tutorial/Test"));

//import Ejercicio5 from "./components/Ejercicio5";
import Footer from "./components/Footer";

function App() {
  return (

    <Router>

      <div className="top-0 fixed w-full">
        <Navbar></Navbar>
      </div>


      <div className=" p-4 flex items-center justify-center mt-34 mb-15">
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ejercicio1" element={<Ejercicio1 />} />
            <Route path="/ejercicio2" element={<Ejercicio2 />} />
            <Route path="/ejercicio3" element={<Ejercicio3 />} />
            <Route path="/ejercicio4" element={<Ejercicio4 />} />
            <Route path="/ejercicio5" element={<Ejercicio5 />} />

            <Route path="/testEjercicio1" element={<TestEjercicio1 />} />
            <Route path="/testEjercicio2" element={<TestEjercicio2 />} />
            <Route path="/testEjercicio3" element={<TestEjercicio3 />} />
            <Route path="/testEjercicio4" element={<TestEjercicio4 />} />

            <Route path="/testInteractivo" element={<TestInteractivo />} />
          </Routes>

        </Suspense>

      </div>

      <div className="bottom-0 fixed w-full">
        <Footer />
      </div>


    </Router>

  );
}
export default App;