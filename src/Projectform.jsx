import { useState } from 'react'
import { techOptions } from './data.js'

const emptyForm = { title: "", tech: techOptions[0], description: "" }

function Projectform({ onAdd }) {
    const [form, setForm] = useState(emptyForm)

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((currentForm) => ({ ...currentForm, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!form.title.trim()) return

        onAdd({
            title: form.title.trim(),
            tech: form.tech,
            description: form.description.trim(),
        })
        setForm(emptyForm)
    }

    return (
        <form className="rounded-xl bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold text-slate-800 text-center">Add Project</h2>
            <p className="mt-1 text-sm text-slate-500 text-center">Share a project you have built.</p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="project-title" className="block text-sm font-medium text-slate-700">
                        Title
                    </label>
                    <input
                        id="project-title"
                        name="title"
                        type="text"
                        required
                        value={form.title}
                        onChange={handleChange}
                        placeholder="e.g. Portfolio Website"
                        className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    />
                </div>

                
            </div>

            <div className="mt-4">
                <label htmlFor="project-description" className="block text-sm font-medium text-slate-700">
                    Description
                </label>
                <textarea
                    id="project-description"
                    name="description"
                    rows="3"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="What did you build and what did you learn?"
                    className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                ></textarea>
            </div>

            <button type="submit"className="mt-4 w-full rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 sm:w-auto">
                Add Project
            </button>
        </form>
    )
}

export default Projectform
