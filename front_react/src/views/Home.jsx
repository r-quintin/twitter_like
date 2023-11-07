import {useEffect, useState} from "react";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => setData(data.products)) // Utilisez data.products ici
            .catch((error) => console.error('Une erreur s\'est produite :', error));
    };

    return (
        <div>
            <h1>Produits</h1>
            <ul>
                {data.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
}