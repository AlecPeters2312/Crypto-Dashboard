import { Link } from "react-router-dom";

function CoinCard({ coin, isFavorite, callbackFunctie }) {

    function handleClick() {
        callbackFunctie(coin.name, !isFavorite);
    }

    return (
        <div className="grid grid-cols-[2fr_1fr_1fr_2fr_1fr] items-center py-4 border-b border-gray-700 text-white px-4">
            <div className="flex gap-2 items-center">
                <Link to={`/coin/${coin.id}`} className="text-2xl font-bold text-white hover:underline">
                    {coin.name}
                </Link>
                <p className="text-2xl text-gray-400 font-light">{coin.symbol}</p>
            </div>
            <p className="text-2xl font-bold">${parseFloat(coin.priceUsd).toFixed(2)}</p>
            <p className={`text-base font-semibold ${parseFloat(coin.changePercent24Hr) > 0 ? "text-teal-300" : "text-rose-400"}`}>
                {parseFloat(coin.changePercent24Hr) >= 0
                    ? `+${parseFloat(coin.changePercent24Hr).toFixed(2)}%`
                    : `${parseFloat(coin.changePercent24Hr).toFixed(2)}%`}
            </p>
            <p className="text-lg font-semibold text-white">${parseFloat(coin.marketCapUsd).toFixed(2)}</p>
            <button
                onClick={handleClick}
                className={`py-2 px-4 rounded-full font-semibold transition-all border
                    ${isFavorite
                    ? "bg-rose-500 text-white border-rose-500 hover:bg-transparent hover:text-rose-500"
                    : "bg-white text-black border-white hover:bg-transparent hover:text-white"
                }`}>
                {isFavorite ? "Unfavorite" : "Favorite"}
            </button>
        </div>
    );
}

export default CoinCard;
