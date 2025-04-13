import { useState, useEffect } from "react";

const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    const toggleFavorite = (coin, isAdding) => {
        let updatedFavorites;

        if (isAdding) {
            if (!favorites.includes(coin)) {
                updatedFavorites = [...favorites, coin];
            } else {
                return;
            }
        } else {
            updatedFavorites = favorites.filter(c => c !== coin);
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return { favorites, toggleFavorite };
};

export default useFavorites;
