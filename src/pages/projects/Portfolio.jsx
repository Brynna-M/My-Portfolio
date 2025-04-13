import Navbar from "../../components/Navbar";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen p-6">
        <div className="w-full lg:w-1/2 bg-[#FFF8F0] border-8 border-dark-plum p-6 rounded-md shadow-lg">
        <h2 className="text-3xl font-bungee text-dark-plum text-center">Portfolio</h2>
        <h4 className="text-sm font-quicksand text-dark-plum mb-4 text-center">(This Website)</h4>
        <a
            href="https://github.com/Brynna-M/My-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bungee text-dark-plum mb-2 underline hover:text-deep-rose"
          >
            GitHub
          </a>
          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Description</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            This is a custom-built React portfolio website designed to showcase my projects, skills, and background. It includes individual pages for each project with detailed writeups and visual elements, an interactive contact form, and responsive design throughout. The site was developed with a strong emphasis on personal branding.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Frontend</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            Built using React, Vite, and Tailwind CSS, the site supports smooth page transitions, scrollable image carousels, and custom component styling. I designed all layouts from scratch to match a Figma prototype and ensure visual consistency across devices. The site uses utility-first styling for rapid development and component reuse.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Contact Form</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            The contact page includes a functional form integrated with EmailJS, allowing visitors to send messages directly to my email without needing a backend server. The form uses error handling and status messaging to improve user experience.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Skills Developed</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            This project sharpened my frontend skills in React, Tailwind CSS, and component-based design. I learned how to manage dynamic layouts, build reusable UI components, implement email sending with third-party services, and deploy a polished site.
          </p>
        </div>
      </div>
    </>
  );
}
