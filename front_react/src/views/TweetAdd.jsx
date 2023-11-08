import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function TweetAdd() {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const navigateTo = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3000/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                author: author,
                content: content,
                like: 5
            }),
        }).then(() => {
            navigateTo('/');
        }).catch((error) => {
            console.error('Erreur :', error);
        });
    }

    return (
        <form onSubmit={onSubmit} className="mx-auto w-40% mb-4">
            <div className="mb-2">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="Author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500"
                    rows="3"
                    placeholder="Tweet content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                ></textarea>
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-4 py-2"
                >Tweet</button>
            </div>
        </form>
    );
}