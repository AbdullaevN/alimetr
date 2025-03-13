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
import Test from "./components/Info/HowToBehave";
import Footer from "./components/Footer/Footer";
import HowToBehave from "./components/Info/HowToBehave";
import Procedure from "./components/Info/Procedure";
import ProcedureCourt from "./components/Info/ProcedureCourt";
import AfterDecision from "./components/Info/AfterDecision";
import AlimonyIsNotPaid from "./components/Info/AlimonyIsNotPaid";
import ChangeOfAlimony from "./components/Info/ChangeOfAlimony";
import PastPeriods from "./components/Info/PastPeriods";
import Info from "./components/Info/Info";
 
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Info />} />
        <Route path="/forms" element={<FormsList />} />
        <Route path="/form/:id" element={<FormPage />} />


        <Route path="/preparation" element={<Preparation />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/need-lawyer" element={<NeedLawyer />} />
        <Route path="/how-to-behave" element={<HowToBehave />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/procedure-court" element={<ProcedureCourt />} />
        <Route path="/after-decision" element={<AfterDecision />} />
        <Route path="/alimony-notpaid" element={<AlimonyIsNotPaid />} />
        <Route path="/change-alimony" element={<ChangeOfAlimony />} />
        <Route path="/past-periods" element={<PastPeriods />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
