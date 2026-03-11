import { type FC } from "react";

interface ChipProps {
  label: string;
  iconUrl?: string;
}

const Chip: FC<ChipProps> = ({ label, iconUrl }: ChipProps) => {
  return (
    <div className="bg-dark-surface font-mono text-md text-white p-4 border-placeholder chip flex flex-row items-center">
      {iconUrl && (
        <img
          src={iconUrl}
          alt={`${label} icon`}
          className="mr-2 shrink-0 object-contain"
          width={40}
          height={40}
          loading="lazy"
          decoding="async"
        />
      )}
      {label}
    </div>
  );
};

export default Chip;
