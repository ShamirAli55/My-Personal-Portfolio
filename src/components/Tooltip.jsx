import { useState } from "react";

const Tooltip = ({ content, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className="absolute bottom-full mb-2 px-3 py-1 rounded-md bg-gray-800 text-white text-xs shadow-lg z-50 whitespace-nowrap"
          style={{ transform: "translateY(-4px)" }}
        >
          {content}
          <div className="absolute left-1/2 top-full -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
