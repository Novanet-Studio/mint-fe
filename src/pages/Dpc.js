import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import ListedCardPage from "./ListedCardPage";
import MintCustomCardPage from "./MintCustomCardPage";
import "./Dpc.scss";

function DpcPage() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/listedcardpage" element={<ListedCardPage />} />
          <Route path="/mintcustomcardpage" element={<MintCustomCardPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default DpcPage;
