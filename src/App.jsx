import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FooterSection from "./components/FooterSection";
import ButtonGradient from "./assets/svg/ButtonGradient";
import HomePage from "./pages/HomePage"; // Page principale
import LoginPage from "./pages/LoginPage"; // Autre page exemple

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> 
        {/* Header toujours affiché */}
        <Header />

        {/* Contenu de la page qui change */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>

        {/* Footer toujours affiché */}
        <FooterSection />
      </div>

      <ButtonGradient />
    </Router>
  );
};

export default App;
