import { type FC } from 'react'

export interface ProjectCardProps {
    img: string
    type: string
    title: string
    description: string
}

const ProjectCard: FC<ProjectCardProps> = ({ img, type, title, description }: ProjectCardProps) => {
    return (
        <div className="card">
            {img}
            <div className="description bg-card gap-4 p-6">
                <span className="font-mono text-orange text-base">type: {type}</span>
                <span className="font-mono text-white text-xl">{title}</span>
                <p className="font-mono text-gray-600 text-xl">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard