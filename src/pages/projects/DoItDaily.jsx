import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function DoItDaily() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen p-6">
        <div className="w-full lg:w-1/2 bg-[#FFF8F0] border-8 border-dark-plum p-6 rounded-md shadow-lg">
          <h2 className="text-3xl font-bungee text-dark-plum mb-4 text-center">Do-It-Daily</h2>
          <a
            href="https://github.com/Brynna-M/Do-It-Daily"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bungee text-dark-plum mb-2 underline hover:text-deep-rose"
          >
            GitHub
          </a>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Description</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            Do-It-Daily is a calendar-based medication tracker that integrates with Google Calendar through the Nylas API. 
            The app helps users with regular or complex prescriptions manage dosage schedules, receive reminders, and store medication information. 
            It supports Google OAuth login and separates additional medication info for secure storage in MongoDB.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Features</h3>
          <ul className="list-disc list-inside text-lg font-quicksand text-dark-plum mt-2 space-y-1">
            <li>Google OAuth login</li>
            <li>Medication reminders via Google Calendar</li>
            <li>Medication database with dosage & tracking</li>
            <li>Premium mode to view full history</li>
            <li>Calendar view and medication list</li>
          </ul>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Backend</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            The backend is built with Node.js, Express, and MongoDB (hosted via MongoDB Atlas).
            User authentication and medication tracking are modeled with Mongoose schemas. 
            Integration with the Nylas API allows for real-time scheduling and alerts synced with Google Calendar.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Frontend</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            Built using React.js and styled with CSS, the frontend features an interactive UI in which users can log in, add medications, and view upcoming schedules. 
            It supports account upgrades and visual reminders synced with Google Calendar.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Skills Developed</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            This project strengthened my understanding of React state management, API integration, OAuth workflows, backend modeling with MongoDB, and real-time scheduling through third-party APIs like Nylas.
          </p>
        </div>
      </div>
    </>
  );
}
