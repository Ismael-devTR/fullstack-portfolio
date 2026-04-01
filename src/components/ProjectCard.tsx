import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import Button from './ButtonSite'

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

const WORD_LIMIT = 15

const ProjectCard: FC<ProjectCardProps> = ({ imageUrl, title, description, demoUrl, repoUrl }: ProjectCardProps) => {
    const { t } = useTranslation()
    const [expanded, setExpanded] = useState(false)

    const words = description.split(' ')
    const isTruncatable = words.length > WORD_LIMIT
    const preview = isTruncatable ? words.slice(0, WORD_LIMIT).join(' ') : description

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
                <span className="font-mono text-white text-base">{title}</span>
                <div
                    className={`card-description-wrapper${expanded ? ' expanded' : ''}`}
                    onClick={() => isTruncatable && setExpanded(prev => !prev)}
                    style={{ cursor: isTruncatable ? 'pointer' : 'default' }}
                >
                    <p className="font-mono text-gray-600 text-sm">
                        {expanded ? description : preview}
                        {isTruncatable && !expanded && <span className="text-orange">...</span>}
                    </p>
                </div>
                <div className="card-links">
                    {demoUrl && (
                        <Button href={demoUrl} target="_blank" rel="noopener noreferrer">
                            {t('projects.demo')}
                        </Button>
                    )}
                    {repoUrl && (
                        <Button href={repoUrl} target="_blank" rel="noopener noreferrer" variant="dark">
                            {t('projects.repo')}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
