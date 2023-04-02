import React, { SyntheticEvent, useEffect, useRef } from "react";

export default function useOutsideClick(callback) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return ref;
}
