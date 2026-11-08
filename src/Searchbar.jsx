function SearchBar({ value, onChange }) {
    return (
        <div className="relative" role="search">
            <label htmlFor="project-search" className="sr-only">
                Search projects
            </label>

            

            <input
                id="project-search"
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Search your project here ..."
                className="w-full rounded-full border border-slate-300 bg-white py-2 pl-9 pr-10 text-sm focus:border-sky-500 focus:outline-none focus:ring-sky-200"
            />

            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition hover:bg-slate-100"
                >
                    
                </button>
            )}
        </div>
    )
}

export default SearchBar
