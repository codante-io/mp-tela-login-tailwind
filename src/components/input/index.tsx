"use client";

import { forwardRef, useEffect, useState } from "react";
import * as T from "./types";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = forwardRef<HTMLInputElement, T.IInputProps>(
  ({ label, icon: Icon, error, type, ...rest }, ref) => {
    const [isPassword, setIsPassword] = useState(false);
    const [isErrored, setIsErrored] = useState(false);
    const [isFocus, setIsFocus] = useState(false);

    const toggleIsPassword = () => setIsPassword(!isPassword);

    const inputClass = `${
      isErrored ? "text-red-500" : "text-white"
    } w-[80%] flex-1 items-center border-none outline-none bg-transparent text-[10pt] placeholder:text-[#9CA3AF] no-spin`;

    const passwordEyeClass = "text-[18pt] text-white cursor-pointer";

    useEffect(() => {
      type === "password" ? setIsPassword(true) : setIsPassword(false);
    }, [type]);

    useEffect(() => {
      error ? setIsErrored(true) : setIsErrored(false);
    }, [error]);

    return (
      <div className="w-full text-[11pt] text-left ">
        <div className="w-full mb-1 pl-4 text-[#9CA3AF] font-bold whitespace-nowrap overflow-ellipsis overflow-hidden">
          {label}{" "}
          {!!error && (
            <span
              title={error}
              className="sm:text-[7pt] text-[9pt] text-red-600"
            >
              {" "}
              - {error}
            </span>
          )}
        </div>

        <section
          className={`w-full h-[2.5rem] flex items-center p-[.5rem] transition-all bg-[#111112] rounded-[.5rem] px-3 ${
            isFocus && "custom-shadow"
          }`}
        >
          {Icon && (
            <Icon
              className={`${
                isErrored ? "text-red-500" : "text-white"
              } text-[18pt] mr-2`}
            />
          )}

          {type === "password" ? (
            <>
              <input
                type={isPassword ? "password" : "text"}
                {...rest}
                ref={ref}
                className={inputClass}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
              />
              {isPassword ? (
                <FiEye
                  onClick={toggleIsPassword}
                  className={passwordEyeClass}
                />
              ) : (
                <FiEyeOff
                  onClick={toggleIsPassword}
                  className={passwordEyeClass}
                />
              )}
            </>
          ) : (
            <input
              type={type}
              {...rest}
              ref={ref}
              className={inputClass}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
          )}
        </section>
      </div>
    );
  }
);

export default Input;
