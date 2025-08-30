import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { navItems, socialLinks } from "../constants";
import { NavLink } from "react-router-dom";

const HiddenMenu = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (onClose) onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredItems = navItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const categoryOrder = ["Navigation", "Personal", "Resources"];
  const sortedCategories = categoryOrder.filter((cat) => grouped[cat]);

  return (
    <div className="min-h-[70vh] md:w-1/2 w-[80%] left-[10%] top-[50%] md:left-[25%] absolute z-[200]">
      <div className="h-full w-full flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.25)] bg-background/25 backdrop-blur-xl border border-primary-foreground/20 rounded-xl">
        {/* 🔍 Search Bar */}
        <div className="flex items-center justify-between px-8 py-3 w-full relative border-b">
          <div className="flex items-center relative w-full">
            <Search className="absolute left-3 text-primary" size={18} />
            <input
              className="rounded-2xl outline-0 w-full py-2 pl-10 bg-transparent border border-primary-foreground/20"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
          </div>
          <button
            className="ml-4 cursor-pointer text-xs border border-primary/20 rounded-lg px-3 py-1"
            onClick={onClose}
          >
            Esc
          </button>
        </div>

        {/* 🧭 Filtered Nav Items */}
        <div className="flex-1 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {sortedCategories.length > 0 ? (
            sortedCategories.map((category) => (
              <div key={category} className="mt-4">
                <h4 className="text-left px-8 pb-2 text-xs uppercase text-primary/40 tracking-wider">
                  {category}
                </h4>

                {grouped[category].map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `px-8 py-2 w-full flex items-center text-primary gap-3 cursor-pointer rounded-lg 
                      ${isActive ? "bg-primary/5" : "hover:bg-primary/10"}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-lg 
                            ${
                              isActive
                                ? "bg-opposite text-primary-foreground"
                                : "bg-primary/10 text-primary"
                            }`}
                        >
                          <item.icon size={16} />
                        </div>
                        <span className="text-sm">{item.name}</span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            ))
          ) : (
            <p className="px-8 py-3 text-sm text-gray-400">No results found</p>
          )}

          {/* 🌐 Social Links at Last */}
          <div className="mt-6 border-t pt-4">
            <h4 className="text-left px-8 pb-2 text-xs uppercase text-primary/40 tracking-wider">
              Social
            </h4>
            <div className="flex flex-wrap gap-3 px-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-primary/10 text-primary transition"
                  onClick={onClose}
                >
                  <link.icon size={16} />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ⌨️ Shortcuts Footer */}
        <div className="flex justify-end items-center bg-opposite/15 rounded-b-xl gap-6 px-6 py-2 border-t text-xs text-primary/60">
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[10px]">
              ↑
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[10px]">
              ↓
            </kbd>
            navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[10px]">
              ↵
            </kbd>
            select
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[10px]">
              esc
            </kbd>
            close
          </span>
        </div>
      </div>
    </div>
  );
};

export default HiddenMenu;
