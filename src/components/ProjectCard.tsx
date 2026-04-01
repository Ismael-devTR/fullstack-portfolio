import { type FC } from 'react'

export interface ProjectCardProps {
    id: number
    imageUrl: string
    title: string
    description: string
    demoUrl?: string
    repoUrl?: string
    featured: boolean
    categories: string[]
    skills: { id: number }[]
    createdAt: string
    updatedAt: string
}

const ProjectCard: FC<ProjectCardProps> = ({ imageUrl, title, description, demoUrl, repoUrl }: ProjectCardProps) => {
    return (
        <div className="card">
            <div className="project-image-container">
                <img
                    src={imageUrl}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="project-image"
                />
            </div>
            <div className="description bg-card gap-4 p-6">
                <span className="font-mono text-white text-xl">{title}</span>
                <p className="font-mono text-gray-600 text-xl">{description}</p>
                <div className="flex gap-4">
                    {demoUrl && (
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-orange text-base">
                            demo
                        </a>
                    )}
                    {repoUrl && (
                        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-teal text-base">
                            repo
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard