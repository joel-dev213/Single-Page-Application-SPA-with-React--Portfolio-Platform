import { useMemo, useState } from 'react'
import FilterButton from './FilterButton.jsx'
import Projectcard from './Projectcard.jsx'
import Searchbar from './Searchbar.jsx'


function Projects({ projects }) {
    const [filter, setFilter] = useState("All")
    const [query, setQuery] = useState("")

    const categories = useMemo(
        () => ["All", ...new Set(projects.map((project) => project.title))],
        [projects]
    )

    const filteredProjects = useMemo(() => {
        const search = query.trim().toLowerCase()

        return projects.filter((project) => {
            const matchesCategory = filter === "All" || project.title === filter
            const matchesSearch = !search
                || project.title.toLowerCase().includes(search)
                || (project.tech ?? "").toLowerCase().includes(search)
                || (project.description ?? "").toLowerCase().includes(search)

            return matchesCategory && matchesSearch
        })
    }, [projects, filter, query])

    return (
        <section aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="text-center text-2xl font-bold text-slate-800">
                My Projects
            </h2>

            <div className="mx-auto mt-4 max-w-xl">
                <Searchbar value={query} onChange={setQuery} />
            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                    <FilterButton
                        key={category}
                        label={category}
                        active={filter === category}
                        onClick={() => setFilter(category)}
                    />
                ))}
            </div>

            {filteredProjects.length === 0 ? (
                <p className="mt-8 text-center text-slate-500">
                    {query.trim()
                        ? `No projects match “${query.trim()}”.`
                        : "No projects in this category yet."}
                </p>
            ) : (
                <div className="mt-6 grid gap-4">
                    {filteredProjects.map((project) => (
                        <Projectcard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Projects
