import { useEffect, useRef, useState } from "react";

export const ScrollTopBtn = () => {
  const [show, setShow] = useState(false);
  const prevScrollY = useRef(0);

  function handleClick() {
    scrollTo(0, 0);
  }

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // User is still at the top of page or scrolling down
      if (scrollY < 200 || scrollY > prevScrollY.current) {
        setShow(false);
      } else {
        setShow(true); // User is scrolling up
      }

      // Update the previous scroll position
      prevScrollY.current = scrollY;
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <>
      <button
        className={`btn btn-primary scroll-to-top rounded-circle z-3 position-fixed ${
          show ? "showing" : ""
        }`}
        id="scroll-to-top"
        type="button"
        title="scroll to top"
        aria-label="scroll to top"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
          ></path>
        </svg>
      </button>
    </>
  );
};
