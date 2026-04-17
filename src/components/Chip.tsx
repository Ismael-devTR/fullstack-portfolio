import { useRef, type CSSProperties, type FC } from "react";
import { useMouseGlow } from "../hooks/useMouseGlow";

interface ChipProps {
  label: string;
  iconUrl?: string;
  delay?: number;
}

const Chip: FC<ChipProps> = ({ label, iconUrl, delay = 0 }: ChipProps) => {
  const chipRef = useRef<HTMLDivElement>(null);
  useMouseGlow(chipRef);

  return (
    <div
      ref={chipRef}
      className="chip font-mono text-md text-white"
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {iconUrl && (
        <img
          src={iconUrl}
          alt={`${label} icon`}
        />
      )}
      {label}
    </div>
  );
};

export default Chip;
