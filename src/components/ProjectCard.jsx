import { Link } from 'react-router-dom';

export default function ProjectCard({ title, path, image, description, features = [], color }) {
  return (
    <Link
      to={path}
      className={`${color} border-8 border-dark-plum p-4 w-[360px] min-h-[320px] flex flex-col gap-4 shadow-lg hover:scale-105 transition-transform`}
      >
      <h2 className="text-2xl font-bungee text-center text-dark-plum">{title}</h2>
      <p className="font-quicksand text-center text-dark-plum">{description}</p>
      <div className="flex flex-row items-start gap-2 flex-1 overflow-hidden">
        <img
          src={image}
          alt="Project preview"
          className="w-[150px] h-[150px] bg-white border-4 border-dark-plum flex-shrink-0"
        />

        <div className="text-dark-plum flex flex-col justify-start overflow-hidden">
          <h3 className="text-sm font-bungee mb-1">FEATURES:</h3>
          <ul className="list-disc list-outside pl-4 text-sm font-quicksand leading-snug">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
