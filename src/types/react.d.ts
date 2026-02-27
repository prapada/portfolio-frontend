declare module 'react' {
  export function useState<T>(initialValue: T): [T, (value: T) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export interface ReactNode {
    toString(): string;
  }
  export interface Component<P = {}> {
    props: P;
    render(): ReactNode;
  }
  export interface FunctionComponent<P = {}> {
    (props: P): ReactNode;
  }
  export type FC<P = {}> = FunctionComponent<P>;
  export const Fragment: any;
  export const StrictMode: any;
}

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: any): any;
  export const Fragment: any;
  export const jsxs: typeof jsx;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
