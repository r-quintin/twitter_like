export default function Header() {
    return (
        <header className="bg-blue-400 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-white"></div>
                <h1 className="text-white text-xl font-bold">Twitter</h1>
            </div>
            <div className="flex space-x-4">
                <input
                    type="text"
                    placeholder="Search Twitter"
                    className="bg-white text-sm rounded-full p-2 pl-4 pr-10 focus:outline-none focus:ring focus:border-blue-500"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-4 py-2">Tweet</button>
            </div>
        </header>
    );
}