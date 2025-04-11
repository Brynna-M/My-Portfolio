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
        {title}
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      <div
        className={`mt-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="text-lg font-quicksand leading-relaxed text-dark-plum">{children}</div>
      </div>
    </section>
  );
}
