import { useEffect, useRef, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function scrollTopButton() {
  const [show, setShow] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = scrollY;

      if (currentScrollY < 100 || currentScrollY > prevScrollY.current) {
        // User is still at the top of the page or scrolling down
        setShow(false);
      } else {
        // User is scrolling up
        setShow(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed right-6 bottom-10 p-3 bg-primary text-white rounded-full ${
        show ? "visible animate-zoom-in" : "invisible animate-zoom-out"
      }`}
      type="button"
      title="scroll to top"
      onClick={() => {
        scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <BsArrowUp />
    </button>
  );
}