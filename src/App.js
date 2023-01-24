import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import About from "./Screens/About/About";
import Contact from "./Screens/Contact/Contact";
import Main from "./Screens/Main/main";
import NotFound from "./Screens/NotFound/NotFound";
import Services from "./Screens/Services/Services";

function App() {
  return (
    <div className="app">
      <Main />
      <Routes>
        <Route path="/" />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
