import {useEffect, useState} from "react";
import TweetCard from "./components/TweetCard.jsx";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/post')
            .then((response) => response.json())
            .then((data) => setData(data.posts))
            .catch((error) => console.error('Une erreur s\'est produite :', error));
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold my-4 text-center">Tweets</h1>
            <ul className="grid gap-4">
                {data.map((post) => (
                    <TweetCard
                        key={post.id}
                        tweet={post}
                    />
                ))}
            </ul>
        </div>
    );
}