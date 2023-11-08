import {useEffect, useState} from "react";
import TweetCard from "./components/TweetCard.jsx";
import {useParams} from "react-router-dom";

export default function Tweet() {
    const [data, setData] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/post/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Une erreur s\'est produite :', error));
    }, []);

    return (
        <div>
            <TweetCard
                key={data.id}
                tweet={data}
            />
        </div>
    );
}