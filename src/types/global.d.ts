declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
  
  namespace React {
    interface FC<P = {}> {
      (props: P): any;
    }
    interface HTMLAttributes<T> {
      class?: string;
      className?: string;
      children?: any;
      id?: string;
      style?: any;
      onClick?: any;
      onMouseEnter?: any;
      onMouseLeave?: any;
      onScroll?: any;
      key?: any;
    }
    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
      disabled?: boolean;
      type?: string;
      onClick?: any;
    }
    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
      href?: string;
      target?: string;
      onClick?: any;
    }
    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
      src?: string;
      alt?: string;
      width?: number | string;
      height?: number | string;
    }
    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
      type?: string;
      value?: string;
      onChange?: any;
    }
    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
      value?: string;
      onChange?: any;
    }
    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
      onSubmit?: any;
    }
    interface DetailedHTMLProps<T, E> extends T {
      key?: any;
      ref?: any;
    }
  }
}

export {};
