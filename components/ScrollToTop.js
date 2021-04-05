import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  let toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  let scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div
          className="bottom-5 right-7 fixed ml-80 rounded-full px-4 py-2 2xl:px-5 2xl:py-4 bg-gray-800 hover:bg-yellow-200 hover:text-gray-800 2xl:items-center text-white cursor-pointer text-2xl"
          onClick={scrollToTop}
        >
          <p className="d">
            <i className="fas fa-arrow-up"></i>
          </p>
        </div>
      )}
    </div>
  );
}
