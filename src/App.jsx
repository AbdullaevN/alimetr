import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Header from "./components/Header/Header";
import FormsList from "./pages/FormsList";
import FormPage from "./pages/Form";
import Preparation from "./components/Info/Preparation";
import Ready from "./components/Info/Ready";
import NeedLawyer from "./components/Info/NeedLawyer";
import Test from "./components/Info/Test";
 
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/forms" element={<FormsList />} />
        <Route path="/form/:id" element={<FormPage />} />


        <Route path="/preparation" element={<Preparation />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/need-lawyer" element={<NeedLawyer />} />
        <Route path="/test" element={<Test />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
