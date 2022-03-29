import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import ListedCardPage from "./ListedCardPage";
import ListedCardPageNoSponsor from "./ListedCardPageNoSponsor";
import MintCustomCardPage from "./MintCustomCardPage";
import MarketplaceViewAllPage from "./MarketplaceViewAllPage";

import "./Dpc.scss";

function DpcPage() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
        <Route path="/marketplaceviewallpage" element={<MarketplaceViewAllPage />} />
          <Route path="/listedcardpage" element={<ListedCardPage />} />
          <Route path="/listedcardpagenosponsor" element={<ListedCardPageNoSponsor />} />
          <Route path="/mintcustomcardpage" element={<MintCustomCardPage />} />          
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default DpcPage;
