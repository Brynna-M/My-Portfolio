import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function PantryPair() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen p-6">
          <div className="w-full lg:w-1/2 bg-[#FFF8F0] border-8 border-dark-plum p-6 rounded-md shadow-lg">
            <h2 className="text-3xl font-bungee text-dark-plum mb-4 text-center">Pantry Pair</h2>

            <h3 className="text-xl font-bungee text-dark-plum mb-2">GitHub</h3>
            <Link to="" className="text-lg font-quicksand underline hover:text-deep-rose">Coming Soon!</Link>

            <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Description</h3>
            <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
              Pantry Pair is a smart grocery management and meal planning app designed specifically for college students and diet-restricted individuals...
            </p>

            <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Core Features</h3>
            <ul className="list-disc list-inside text-lg font-quicksand text-dark-plum mt-2 space-y-1">
              <li>Inventory logging with quantity, category, and expiration tracking</li>
              <li>Smart recipe matching based on available ingredients</li>
              <li>Meal planning and assignment to specific days</li>
              <li>Interactive calendar interface for planning meals over time</li>
              <li>Grocery list suggestions based on planned recipes</li>
            </ul>

            <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Backend</h3>
            <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
              Pantry Pair uses a SQL backend to store and manage user data...
            </p>

            <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Frontend</h3>
            <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
              Built using React, the frontend includes dynamic components for adding groceries, browsing recipes, and scheduling meals...
            </p>

            <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Skills Developed</h3>
            <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
              Through this project, I strengthened my skills in full-stack development, SQL database design...
            </p>
          </div>
        </div>
    </>
  );
}
