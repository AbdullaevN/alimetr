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
import Assistant from "./components/Assistent/Assistant";
import Inofficial from "./components/Info/Inofficial";
import { HelmetProvider } from "react-helmet-async";

import "./i18n";

 
function App() {
  return (
    <HelmetProvider>

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/templates" element={<Assistant />} />
         <Route path="/templates/:id" element={<FormPage />} />

        <Route path="/docs-preparation" element={<Preparation />} />
        <Route path="/next-steps" element={<Ready />} />
        <Route path="/need-lawyer" element={<NeedLawyer />} />
        <Route path="/court-behavior" element={<HowToBehave />} />
        <Route path="/file-lawsuit" element={<Procedure />} />
        <Route path="/court-order" element={<ProcedureCourt />} />
        <Route path="/after-court-decision" element={<AfterDecision />} />
        <Route path="/no-payments" element={<AlimonyIsNotPaid />} />
        <Route path="/change-alimony" element={<ChangeOfAlimony />} />
        <Route path="/unofficial-income" element={<Inofficial />} />
        <Route path="/past-payments" element={<PastPeriods />} />

        <Route path="*" element={<NotFound />} />


        {/* <Route path="/ru/*" element={<RussianVersion />} />
        <Route path="/ky/*" element={<KyrgyzVersion />} /> */}
      </Routes>
      <Footer/>
    </Router>
    </HelmetProvider>

  );
}

export default App;
