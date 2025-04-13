import CoinCard from "./CoinCard";
import useFavorites from "./useFavorites";

function CoinFavorite() {
    const {favorites, toggleFavorite} = useFavorites();

    const coins = JSON.parse(localStorage.getItem('topCoins')) || [];

    const favoriteCoins = coins.filter(coin => favorites.includes(coin.name));

    return (
        <div className="p-6">
            <h1 className="text-white text-3xl">Mijn Favorieten</h1>
            <div className="text-white mt-4">
                {favoriteCoins.map((coin) => (
                    <CoinCard
                        key={coin.id}
                        coin={coin}
                        isFavorite={true}
                        callbackFunctie={() => toggleFavorite(coin.name, false)}
                    />
                ))
                }
            </div>
        </div>
    );
}

export default CoinFavorite;
