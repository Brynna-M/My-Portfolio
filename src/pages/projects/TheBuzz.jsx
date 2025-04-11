import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function TheBuzz() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row w-full p-6 gap-6">
        <div className="w-full lg:w-1/2 bg-[#FFF8F0] border-8 border-dark-plum p-6 rounded-md shadow-lg">
          <h2 className="text-3xl font-bungee text-dark-plum mb-4 text-center">The Buzz</h2>
          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Description</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            The Buzz is a cross-platform internal social app developed in three phases for a fictional enterprise.
            Its goal is to facilitate communication, ideation, and engagement across departments by allowing
            employees to post, vote on, and comment on ideas—all integrated with modern authentication
            and secure file sharing.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Development Phases</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            <strong>Phase 1:</strong> Built the foundational frontend and backend of the app with support for posting ideas, upvotes, and user sessions.<br/>
            <strong>Phase 2:</strong> Introduced Google OAuth authentication, user profiles with inclusive data fields, and a robust upvote/downvote system with state management.<br/>
            <strong>Phase 3:</strong> Integrated cloud-based file uploads using Google Drive API, enabled multimedia sharing in posts and comments, added caching via Memcachier, and enhanced mobile and admin interfaces.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Backend</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            The backend is built using a RESTful architecture with support for secure OAuth login (Google Identity Services),
            session caching via Memcachier, and persistent content storage through a Google Drive service account.
            The database schema was evolved over time to support new features without data loss.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Frontend</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            The web and mobile frontends were built to align with modern UI/UX principles. Users can view, post,
            and comment on ideas with support for file uploads. The profile page includes editable demographic and
            preference fields to emphasize inclusivity. Admin users can manage users, content, and storage quotas.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Skills Developed</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            Through this project, I deepened my experience with full-stack development, authentication flows (OAuth 2.0),
            REST API design, Google Cloud integration, scalable caching with Memcachier, and Android mobile
            development using modern frameworks and Material Design.
          </p>
        </div>

        <div className="w-full lg:w-1/2 border-8 border-dark-plum rounded-md shadow-lg overflow-y-auto max-h-[800px] p-4 bg-white">
          <p className="text-center font-bungee text-xl text-dark-plum">Image Carousel Coming Soon</p>
        </div>
      </div>
    </>
  );
}
