import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./TopPage.css";

const TopPage = () => {
  const [topBtn, setTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setTopBtn(true);
      } else {
        setTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="goToTop">
      {topBtn && (
        <FaAngleUp className="iconPosition iconStyle" onClick={goToTop} />
      )}
    </div>
  );
};

export default TopPage;
