import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';

export default function Portfolio() {
  const projects = [
    { title: 'Do It Daily', 
      path: '/portfolio/do-it-daily', 
      image: '/Do-It-Daily.png',
      features: [
        "React",
        "MongoDB",
        "Google OAuth",
        "Nylas API",
        "Asynchronous JavaScript",
        "User-based",
        "Full-Stack"
      ],
      color: 'bg-nanas-nails' 
    },
    { title: 'Black Jack', 
      path: '/portfolio/black-jack', 
      image: '/BlackJack/BlackJackPlay.png',
      features:[
              "React Game Logic",
              "API Integration",
              "MongoDB Backend",
              "Modal UI", 
              "Asynchronous JavaScript",
              "Full-Stack",
            ], 
      color: 'bg-bright-lilac' 
    },
    { title: 'Portfolio', 
      path: '/portfolio/portfolio', 
      image: '/PortfolioHome.png',
      features:[
              "React",
              "Tailwind CSS",
              "EmailJS API",
              "Form Validation",
              "Asynchronus Javascript",
              "Real-Time Feedback",
              "Responsive Design"
            ], 
      color: 'bg-deep-rose' 
    },
    { title: 'The Buzz', 
      path: '/portfolio/buzz', 
      image: '/TheBuzz/Web1.png',
      features:[
              "React",
              "PostgreSQL",
              "Admin Client",
              "Asynchronus Javascript",
              "User-based",
              "Full-Stack"
            ], 
      color: 'bg-turquoise-aqua' 
    },
    { title: 'Cafe Justo', 
      path: '/portfolio/cafe', 
      image: '/CafeJusto/Final Poster - Chainbytes.png',
      features:[
              "React",
              "ExpoGo",
              "The Graph & GraphQL",
              "Asynchronus Javascript",
              "User-based",
              "Multiple user types",
              "Blockchain",
              "Full-Stack"
            ], 
      color: 'bg-nanas-nails' 
    },
    { title: 'Pantry Pair', 
      path: '/portfolio/pantry', 
      image: '/PantryPair.png',
      features:[
              "React",
              "SQL",
              "API Integration",
              "Asynchronous Javascript",
              "User-based",
              "Full-Stack"
            ], 
      color: 'bg-bright-lilac' 
    },
  ];

  return (
    <>
      <Navbar/>
      <h1 className="text-7xl font-bungee text-dark-plum text-center mb-6 pt-10">My Portfolio</h1>
      <div className=" p-8 w-full px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map(project => (
            <ProjectCard
              key={project.title}
              title={project.title}
              path={project.path}
              image={project.image}
              features={project.features}
              color={project.color}
            />
          ))}
        </div>
      </div>
    </>
  );
}