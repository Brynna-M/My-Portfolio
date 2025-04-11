import { Link } from 'react-router-dom';

export default function Button({ size, text, color, link }) {
    const sizeStyles = {
        page: "text-xl md:text-2xl h-32 w-64 whitespace-nowrap border-8 shadow-lg shadow-dark-plum",
        small: "text-sm h-10 w-28 whitespace-nowrap border-4",
    };
  
    return (
    <Link to={link}>
      <button
        className={`text-dark-plum text-center font-bungee uppercase border-dark-plum hover:scale-105 transition-transform ${color}  ${sizeStyles[size]}`}
      >
        {text}
      </button>
    </Link>
  );
}
