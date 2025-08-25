import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { navItems } from "../constants";
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

  return (
    <div className="min-h-[70vh] md:w-1/2 w-[80%] left-[10%] top-[50%] md:left-[25%] absolute z-[200] ">
      <div className="h-full w-full shadow-[0_8px_32px_rgba(0,0,0,0.25)] bg-background/25 backdrop-blur-xl border border-primary-foreground/20 rounded-xl">

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
            className="ml-4 cursor-pointer text-xs border border-primary rounded-lg px-3 py-1"
            onClick={onClose}
          >
            Esc
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
          {Object.keys(grouped).length > 0 ? (
            Object.keys(grouped).map((category) => (
              <div key={category} className="mt-4">
                <h4 className="text-left px-8 pb-2 text-xs uppercase text-primary/40 tracking-wider">
                  {category}
                </h4>

                {grouped[category].map((item) =>
                  item.href ? (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      smooth
                      duration={200}
                      offset={15}
                      onClick={onClose}
                      className="block"
                    >
                      <div className="flex items-center gap-3 px-8 py-2 w-full cursor-pointer hover:bg-primary/10">
                        <item.icon size={18} className="text-primary" />
                        <span className="text-sm">{item.name}</span>
                      </div>
                    </NavLink>
                  ) : (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="block"
                    >
                      <div className="flex items-center gap-3 px-8 py-2 w-full cursor-pointer hover:bg-primary/10">
                        <item.icon size={18} className="text-primary" />
                        <span className="text-sm">{item.name}</span>
                      </div>
                    </a>
                  )
                )}
              </div>
            ))
          ) : (
            <p className="px-8 py-3 text-sm text-gray-400">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HiddenMenu;
