// Scrollbar.jsx
import React, { useState, useEffect } from "react";
import "./style.css";

const Scrollbar = () => {
  const [visible, setVisible] = useState(false);

  // Mostrar el botón solo cuando el usuario baja cierta cantidad
  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <i className="fa fa-arrow-up"></i>
      </div>
    )
  );
};

export default Scrollbar;
