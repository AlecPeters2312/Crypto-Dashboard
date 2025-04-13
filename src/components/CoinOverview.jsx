import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoinCard from "./CoinCard";
import SearchBar from "./SearchBar.jsx";
import useFavorites from "./useFavorites.jsx";

function CoinOverview() {
    const [coins, setCoins] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const { favorites, toggleFavorite } = useFavorites();

    useEffect(() => {
        const fetchCoins = () => {
            fetch("https://rest.coincap.io/v3/assets?limit=100&apiKey=c9f8adc0bc598bfb769012d5ef8051d66ea24d52c45dce77062c85f232c6469c")
                .then((response) => response.json())
                .then((data) => {
                    setCoins(data.data);
                    localStorage.setItem('topCoins', JSON.stringify(data.data));
                })
                .catch((error) => console.error("Fout bij het ophalen van coin data:", error));
        };

        fetchCoins();

        const interval = setInterval(() => {
            fetchCoins();
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6">
            <div className="text-center mb-6">
                <Link to="/diagram" className="text-white px-4 py-2 rounded-lg">
                    Bekijk Diagram
                </Link>
            </div>
            <div className="text-center mb-6">
                <Link to="/favorieten" className="text-white px-4 py-2 rounded-lg">
                    Bekijk mijn Favorieten
                </Link>
            </div>

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {coins
                .filter(
                    (coin) =>
                        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((asset) => (
                    <CoinCard
                        key={asset.id}
                        coin={asset}
                        isFavorite={favorites.includes(asset.name)}
                        callbackFunctie={toggleFavorite}
                    />
                ))}
        </div>
    );
}

export default CoinOverview;
