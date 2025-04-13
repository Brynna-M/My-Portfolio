import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';

export default function Portfolio() {
  const projects = [
    { title: 'Do It Daily', 
      path: '/portfolio/do-it-daily', 
      image: '/Do-It-Daily.png',
      description: "A medication tracker web-app",
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
    { title: 'Blackjack', 
      path: '/portfolio/black-jack', 
      image: '/BlackJack/BlackJackPlay.png',
      description: "A classic casino-style Blackjack web-app",
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
      description: "(this website)",
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
      description: "A mobile and web-app for communication and ideation",
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
      description: "A mobile app designed to log payments made to workers on the blockchain",
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
      description: "A customizable grocery tracker and meal-planning web-app",
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
      <h1 className="text-6xl sm:text-7xl font-bungee text-dark-plum text-center mb-6 pt-10">My Portfolio</h1>
      <div className=" p-8 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-20 justify-items-center">
        {projects.map(project => (
            <ProjectCard
              key={project.title}
              title={project.title}
              path={project.path}
              image={project.image}
              description={project.description}
              features={project.features}
              color={project.color}
            />
          ))}
        </div>
      </div>
    </>
  );
}