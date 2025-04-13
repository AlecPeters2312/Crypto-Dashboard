import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function CoinDetail() {
    const {id} = useParams();
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem(`coin_${id}`);
        if (storedData) {
            setCoin(JSON.parse(storedData));
        } else {
            fetch("https://rest.coincap.io/v3/assets?apiKey=c9f8adc0bc598bfb769012d5ef8051d66ea24d52c45dce77062c85f232c6469c")
                .then((response) => response.json())
                .then((data) => {
                    const matchedCoin = data.data.find(c => c.id === id);
                    if (matchedCoin) {
                        setCoin(matchedCoin);
                        localStorage.setItem(`coin_${id}`, JSON.stringify(matchedCoin));
                    }
                });
        }
    }, [id]);

    if (!coin) return null;

    return (
        <div className="p-6 text-white">
            <h1 className="text-4xl font-bold">{coin.name} ({coin.symbol})</h1>
            <p className="text-xl">Rank: {coin.rank}</p>
            <p className="text-xl">Change (24h): {parseFloat(coin.changePercent24Hr || 0).toFixed(2)}%</p>
            <p className="text-xl">Supply: {parseFloat(coin.supply || 0).toFixed(2)}</p>
            <p className="text-xl">Max Supply: {coin.maxSupply ? parseFloat(coin.maxSupply).toFixed(2) : "N/A"}</p>
            <p className="text-xl">Market Cap USD: ${parseFloat(coin.marketCapUsd || 0).toFixed(2)}</p>
            <p className="text-xl">Volume USD (24h): ${parseFloat(coin.volumeUsd24Hr || 0).toFixed(2)}</p>
            <p className="text-xl">VWAP (24h): ${parseFloat(coin.vwap24Hr || 0).toFixed(2)}</p>
            <p className="text-xl">
                <a href={coin.explorer} target="_blank" rel="noopener noreferrer">More Info</a>
            </p>
        </div>
    );
}

export default CoinDetail;
