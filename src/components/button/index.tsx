import { forwardRef } from "react";
import * as T from "./types";

const Button = forwardRef<HTMLButtonElement, T.IButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <button
        {...rest}
        ref={ref}
        className="w-full h-[2.5rem] text-white rounded-[.5rem] hover:btn-animation transition-all"
        style={{
          background:
            "linear-gradient(25deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%), #D9D9D9",
        }}
      >
        {children}
      </button>
    );
  }
);

export default Button;
