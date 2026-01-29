import  { type FC } from 'react'

interface ChipProps {
    label: string
}

const Chip: FC<ChipProps> = ({ label }: ChipProps) => {
    return (
        <div className="bg-dark-surface font-mono text-md text-white p-4 border-placeholder">{label}</div>
    )
}

export default Chip