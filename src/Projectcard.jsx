import { useState } from 'react'

function Projectcard({ project }) {
    const [likes, setLikes] = useState(project.likes ?? 0)
    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLikes((currentLikes) => currentLikes + (liked ? -1 : 1))
        setLiked((isLiked) => !isLiked)
    }

    return (
        <article className="rounded-xl bg-white p-6">
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 uppercase">
                {project.tech}
            </span>

            <h3 className="mt-3 text-xl font-bold text-slate-800">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{project.description}</p>

            <div className="mt-4 flex items-center gap-3">
                <button
                    type="button"
                    onClick={handleLike}
                    aria-pressed={liked}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition focus:ring-red-300 ${
                        liked
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                >
                    {liked ? 'Unlike' : 'Like'}
                </button>
                <span className="text-sm text-slate-500">
                    {likes} {likes === 1 ? 'Like' : 'Likes'}
                </span>
            </div>
        </article>
    )
}

export default Projectcard
