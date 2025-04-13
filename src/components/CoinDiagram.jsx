import {useEffect, useState} from "react";
import {PieChart} from '@mui/x-charts/PieChart';

function CoinDiagram() {
    const [topCoins, setTopCoins] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('topCoins');
        if (storedData) {
            setTopCoins(JSON.parse(storedData).slice(0, 10));
        } else {
            fetch("https://rest.coincap.io/v3/assets?apiKey=c9f8adc0bc598bfb769012d5ef8051d66ea24d52c45dce77062c85f232c6469c")
                .then((response) => response.json())
                .then((data) => {
                    setTopCoins(data.data.slice(0, 10));
                    localStorage.setItem('topCoins', JSON.stringify(data.data));
                });
        }
    }, []);

    return (
        <div className="flex justify-center p-4 h-screen">
            <PieChart
                series={[{
                    data: topCoins.map((coin) => ({
                        id: coin.id,
                        value: parseFloat(coin.marketCapUsd),
                        label: coin.name,
                    }))
                }]}
                width={600}
                height={400}
            />
        </div>
    );
}

export default CoinDiagram;
