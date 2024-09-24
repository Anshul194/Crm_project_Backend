import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-20 bg-slate-600 text-white px-3 py-4 text-xl">
          <Header />
        </header>

        <main className="flex-grow h-[70vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <footer className="bg-slate-300">
          <div className="py-10 mx-20 flex justify-between gap-4 text-gray-dark font-light">
            <Footer />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
