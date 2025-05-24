import React from "react";
import { Link, useLocation } from "react-router-dom";

const Button: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const selected: "left" | "right" | null =
    currentPath === "/modiriat" ? "left" :
    currentPath === "/enter" ? "right" : null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
      {/* کادر زمینه سفید با گوشه گرد */}
      <div className="flex justify-between items-center bg-white rounded-[30px] shadow-lg p-1">
        <Link to="/modiriat" className="w-1/2">
          <button
            className={`w-full h-[50px] rounded-[30px] transition-colors duration-300 ${
              selected === "left" ? "bg-[#7E78FD] text-white" : "text-[#7E78FD]"
            }`}
          >
            مدیریت هزینه
          </button>
        </Link>
        <Link to="/enter" className="w-1/2">
          <button
            className={`w-full h-[50px] rounded-[30px] transition-colors duration-300 ${
              selected === "right" ? "bg-[#7E78FD] text-white" : "text-[#7E78FD]"
            }`}
          >
            خرید ها
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Button;
