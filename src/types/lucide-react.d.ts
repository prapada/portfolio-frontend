declare module 'lucide-react' {
  export interface LucideIconProps {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
    className?: string;
  }
  
  export const Menu: React.FC<LucideIconProps>;
  export const X: React.FC<LucideIconProps>;
  export const Download: React.FC<LucideIconProps>;
  export const ExternalLink: React.FC<LucideIconProps>;
  export const Mail: React.FC<LucideIconProps>;
  export const Phone: React.FC<LucideIconProps>;
  export const Linkedin: React.FC<LucideIconProps>;
  export const Github: React.FC<LucideIconProps>;
  export const ChevronUp: React.FC<LucideIconProps>;
}
