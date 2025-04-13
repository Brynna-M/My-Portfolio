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
            {/* <Link to="" className="text-lg font-quicksand underline hover:text-deep-rose">Coming Soon!</Link> */}
            <p className="font-quicksand text-lg leading-relaxed text-dark-plum">Coming soon!</p>
            <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Description</h3>
            <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            Pantry Pair is a smart grocery management and meal planning app designed specifically for college students and diet-restricted individuals. 
            The app helps users track their grocery inventory by logging item names, quantities, and expiration dates—making it easy to know what’s in stock and when items need to be replaced.
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
            Pantry Pair uses SQL to store and manage user data, such as inventory items, recipes, and calendar meal plans. The database structure ensures reliable access to real-time inventory status and supports complex queries for recipe matching and planning.
            </p>

            <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Frontend</h3>
            <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            Built using React, the frontend includes dynamic components for adding groceries, browsing recipes, and scheduling meals in a clean, mobile-friendly layout. The user experience is tailored to the fast-paced needs of student life, with intuitive features that promote healthy and mindful eating habits.
            </p>

            <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Skills Developed</h3>
            <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            Through this project, I strengthened my skills in full-stack development, SQL database design, dynamic form handling, and calendar-based UI design. It also deepened my ability to create practical, user-centered applications.
            </p>
          </div>
        </div>
    </>
  );
}
