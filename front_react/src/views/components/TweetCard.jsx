export default function TweetCard({ tweet }) {
    return (
        <li>
            <div className="mx-auto w-40% p-4 border border-gray-300 rounded-lg shadow-md mb-4">
                <div className="flex items-center">
                    <div>
                        <p className="text-lg font-bold">{tweet.author}</p>
                    </div>
                </div>
                <p className="text-gray-800 mt-2">{tweet.content}</p>
                <div className="mt-4 flex justify-between">
                    <p className="text-gray-600">Likes: {tweet.like}</p>
                </div>
            </div>
        </li>
    )
}