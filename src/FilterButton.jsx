function FilterButton({ label, active, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={active}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition focus:ring-sky-300 ${active ? 'bg-sky-600 text-white shadow-sm' : 'bg-white text-slate-600 shadow-sm hover:bg-slate-100'}`}>
            {label}
        </button>
    )
}

export default FilterButton
