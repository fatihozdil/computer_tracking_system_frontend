import { useState, useEffect, useRef } from "react";

function UseComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  //hide dropdown, when clicked to the escape key
  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    //hide dropdown when clicked outside of the content
    if (isComponentVisible) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsComponentVisible(false);
      }
    }
  };
  //open dropdown when clicked open button, if it already open then close dropdown
  const handleClick = (n) => {
    isComponentVisible == n
      ? setIsComponentVisible(false)
      : setIsComponentVisible(n);
  };
  //close dropdown when mouse live related content(optional)
  const handleMouseleave = (event) => {
    if (isComponentVisible == 1) {
      setIsComponentVisible(false);
    }
  };
  //add event listeners
  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, false);
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, false);

      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [isComponentVisible, setIsComponentVisible, handleClick]);

  return {
    ref,
    isComponentVisible,
    setIsComponentVisible,
    handleClick,
    handleMouseleave,
  };
}
export default UseComponentVisible;
