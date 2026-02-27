declare module 'framer-motion' {
  export interface MotionProps {
    initial?: any;
    animate?: any;
    whileInView?: any;
    whileHover?: any;
    whileTap?: any;
    transition?: any;
    viewport?: any;
    variants?: any;
    key?: any;
    href?: string;
    'aria-label'?: string;
    exit?: any;
  }
  
  export interface AnimatePresenceProps {
    children?: any;
    initial?: boolean;
    onExitComplete?: () => void;
  }
  
  export const motion: {
    div: React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>>;
    button: React.FC<MotionProps & React.HTMLAttributes<HTMLButtonElement>>;
    a: React.FC<MotionProps & React.HTMLAttributes<HTMLAnchorElement>>;
    h1: React.FC<MotionProps & React.HTMLAttributes<HTMLHeadingElement>>;
    h2: React.FC<MotionProps & React.HTMLAttributes<HTMLHeadingElement>>;
    h3: React.FC<MotionProps & React.HTMLAttributes<HTMLHeadingElement>>;
    p: React.FC<MotionProps & React.HTMLAttributes<HTMLParagraphElement>>;
    span: React.FC<MotionProps & React.HTMLAttributes<HTMLSpanElement>>;
    section: React.FC<MotionProps & React.HTMLAttributes<HTMLElement>>;
    header: React.FC<MotionProps & React.HTMLAttributes<HTMLElement>>;
    footer: React.FC<MotionProps & React.HTMLAttributes<HTMLElement>>;
    nav: React.FC<MotionProps & React.HTMLAttributes<HTMLElement>>;
    main: React.FC<MotionProps & React.HTMLAttributes<HTMLElement>>;
  };
  
  export const AnimatePresence: React.FC<AnimatePresenceProps>;
}
