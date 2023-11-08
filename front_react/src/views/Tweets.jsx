import {useEffect, useState} from "react";
import TweetCard from "./components/TweetCard.jsx";

export default function Tweets() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/post')
            .then((response) => response.json())
            .then((data) => setData(data.posts.reverse()))
            .catch((error) => console.error('Une erreur s\'est produite :', error));
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold my-4 text-center">Tweets</h1>
            <ul className="grid gap-4">
                {data.map((post) => (
                    <li className="mx-auto w-40%" key={post.id}>
                        <a href={'/tweet/' + post.id}>
                            <TweetCard tweet={post} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}