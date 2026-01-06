import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/landingPage/Header";
import FooterSection from "./components/landingPage/FooterSection";
import ButtonGradient from "./assets/svg/ButtonGradient";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./layouts/layout";

const AppContent = () => {
  const location = useLocation();
  const isAppRoute = location.pathname.startsWith("/app");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header toujours affiché */}
      {!isAppRoute && <Header />}

      {/* Contenu de la page qui change */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/app" element={<Layout />} />
        </Routes>
      </main>

      {/* Footer toujours affiché */}
      {!isAppRoute && <FooterSection />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
      <ButtonGradient />
    </Router>
  );
};

export default App;
