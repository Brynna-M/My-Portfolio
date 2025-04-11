import Navbar from "../components/Navbar"
import { useState } from "react";
import DropdownSection from "../components/DropdownSection";
import { Link } from 'react-router-dom';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar/>
      <div className="max-w-4xl mx-auto px-6 py-12 text-dark-plum space-y-8">
        <h1 className="text-7xl font-bungee text-center text-dark-plum">About Me</h1>
        <section className="bg-[#FFF8F0] border-4 border-dark-plum rounded-xl p-6 shadow-[inset_0_0_0_4px_#FFF8F0] outline outline-4 outline-dashed outline-offset-[-8px] outline-dark-plum">
          <p className="font-quicksand text-lg leading-relaxed">
          Hi! I’m Brynna Morris, a dual-degree student at Lehigh University pursuing bachelor's degrees in Computer Science and Population Health. I'm graduating with a GPA of 3.92 and a passion for blending software development and data-driven insight to create meaningful, people-centered solutions. On campus, I'm known for my positivity, hard-working nature, and leadership qualities.
          </p> 
        </section>
        <DropdownSection title="Why Population Health and Computer Science?">
          <p>
            At first glance, Computer Science and Population Health might seem like an unusual pair — but they actually complement each other beautifully. Population Health, much like Public Health, is a solutions-oriented discipline focused on real-world impact through interdisciplinary collaboration. It emphasizes keeping key stakeholders involved throughout every stage of a project, working with large datasets, and leveraging data visualization techniques to drive insights.
            Through this major, I gained a strong foundation in data science and developed a people-centered mindset — something my previous employers have found incredibly valuable. I focused specifically on Health Technology, which included studying accessible design, the development of tech for improved health outcomes, and the systems behind the health technologies we use today. 
            Meanwhile, my Computer Science degree has given me deep technical skills, with a focus on full-stack software development. Together, these two areas of study allow me to build meaningful, user-driven solutions grounded in both technology and human impact.
          </p>
        </DropdownSection>
        <DropdownSection title="Skills & Tech">
          <p>
            Java, Python, R, JavaScript, TypeScript, React, HTML, CSS, Tailwind, SQL, MongoDB, C#.NET, Git, Jira...
          </p>
        </DropdownSection>
        <DropdownSection title="Relevant Coursework">
          <ul className="list-disc list-inside space-y-2">
            <li>Data Structures & Algorithms</li>
            <li>Biostatistics & R Programming</li>
            <li>Accessible Health Tech Design</li>
          </ul>
        </DropdownSection>
        <DropdownSection title="Experience">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>COCC Software Engineering Intern:</strong> Built tools, automated workflows...</li>
            <li><strong>Peer Tutor:</strong> Tutoring Java, R, algorithms, etc.</li>
            <li><strong>Founder, Lehigh Paranormal Club:</strong> Bridged curiosity and culture.</li>
          </ul>
        </DropdownSection>
        <DropdownSection title="References">
          <p>
            Access to my references are available upon request in the {' '}
              <Link to="/contact" className="text-blue-600 underline hover:text-blue-800">
                Contact Page
              </Link>.
          </p>
        </DropdownSection>
        <DropdownSection title="Soft Skills">
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Technical Communication:</strong> I’m confident explaining complex technical concepts to beginners, stakeholders, and non-technical teams.
            </li>
            <li>
              <strong>Attention to Detail:</strong> I catch the small things and think about the edge cases before they become bugs.
            </li>
            <li>
              <strong>Big Picture Thinking:</strong> I’m always focused on how my work fits into the broader mission or user experience.
            </li>
            <li>
              <strong>Team Collaboration:</strong> I thrive in team environments, especially when active listening and adaptability are key.
            </li>
            <li>
              <strong>Accountability & Adaptability:</strong> I take ownership of my work and can quickly adjust to new tools, teams, or goals.
            </li>
            <li>
              <strong>Curious & Quick to Learn:</strong> I’ve been called a “sponge for knowledge” — I ask good questions and absorb fast.
            </li>
            <li>
              <strong>Empathy & Perspective:</strong> I care deeply about how people interact with technology and build with real users in mind.
            </li>
            <li>
              <strong>Top 5 CliftonStrengths:</strong> Arranger, Harmony, Communication, Competition, Individualization — a great mix of structure, strategy, and people-focus perfect for teamwork.
            </li>
          </ul>
        </DropdownSection>
        <DropdownSection title="Campus Involvement">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Community Outreach Director, Lehigh Community Growers Club:</strong> Organized volunteer events and educational programs focused on sustainable agriculture and food equity. Built connections between students and local community gardens through hands-on service.
            </li>
            <li>
              <strong>Fellowship Chair, Phi Sigma Pi Honor Fraternity:</strong> Planned and led chapter bonding events to promote connection and inclusivity. Fostered a strong sense of community through award-winning creative programming and thoughtful leadership.
            </li>
            <li>
              <strong>Founder & President, Lehigh Paranormal Club:</strong> Launched and led a student organization exploring folklore, history, and scientific curiosity. Grew membership, hosted campus events, and built a space for interdisciplinary connection.
            </li>
          </ul>
        </DropdownSection>
        <DropdownSection title="What I'm Like">
          <p>
            I'm known for my positivity and my ability to center myself in reality. 
            I'm the friend people go to when they need a little optimism. 
          </p>
        </DropdownSection>
      </div>
    </>
  );
}