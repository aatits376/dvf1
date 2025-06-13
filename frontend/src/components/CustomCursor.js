import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursorInner = document.getElementById("cursor-inner");
    const cursorOuter = document.getElementById("cursor-outer");
    const links = document.querySelectorAll("a,label,button");

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorInner) {
        cursorInner.style.left = `${posX}px`;
        cursorInner.style.top = `${posY}px`;
      }

      if (cursorOuter) {
        cursorOuter.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: "forwards" }
        );
      }
    };

    const handleLinkHover = () => {
      if (cursorInner) cursorInner.classList.add("hover");
      if (cursorOuter) cursorOuter.classList.add("hover");
    };

    const handleLinkLeave = () => {
      if (cursorInner) cursorInner.classList.remove("hover");
      if (cursorOuter) cursorOuter.classList.remove("hover");
    };

    document.addEventListener("mousemove", handleMouseMove);

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-inner" id="cursor-inner"></div>
      <div className="cursor-outer" id="cursor-outer"></div>
    </>
  );
};

export default CustomCursor;