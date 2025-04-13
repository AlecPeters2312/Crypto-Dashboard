function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="mb-4 flex justify-center">
            <input
                type="text"
                placeholder="Zoeken op coin naam"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 w-full max-w-md rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
        </div>
    );
}

export default SearchBar;
