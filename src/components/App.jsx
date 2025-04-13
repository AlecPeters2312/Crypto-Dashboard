import '../App.css';
import CoinOverview from "./CoinOverview.jsx";
import { Route, Routes } from "react-router-dom";
import CoinDetail from "./CoinDetail.jsx";
import CoinDiagram from "./CoinDiagram.jsx";
import CoinFavorite from "./CoinFavorite.jsx";

function App() {
    return (
        <>
            <h1 className="p-4 text-4xl font-semibold text-white text-center">Cryptocurrency Overview</h1>
            <Routes>
                <Route path={"/"} element={<CoinOverview />} />
                <Route path={"/coin/:id"} element={<CoinDetail />} />
                <Route path={"/diagram"} element={<CoinDiagram />} />
                <Route path={"/favorieten"} element={<CoinFavorite />} />
            </Routes>
        </>
    );
}

export default App;
