import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DropdownSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#FFF8F0] border-8 border-dark-plum p-6 rounded-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center text-2xl font-bungee text-dark-plum"
        aria-expanded={isOpen}
      >
        <span className="break-words">{title}</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={24} />
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="pt-2 text-lg font-quicksand leading-relaxed text-dark-plum">
          {children}
        </div>
      </div>
    </section>
  );
}
