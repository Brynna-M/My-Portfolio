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
          Hi! I’m Brynna Morris, a dual-degree student at Lehigh University pursuing bachelor's degrees in Computer Science and Population Health. I'm graduating with a 3.92 GPA and a passion for integrating software development with data-driven insight to create meaningful, people-centered solutions. On campus, I'm known for my positivity, hard-working nature, and leadership roles.
          </p> 
        </section>
        <DropdownSection title="Why Population Health and Computer Science?">
          <p>
          At first glance, Computer Science and Population Health might seem like an unusual pairing of disciplines—but they actually complement each other beautifully. Population Health is a solutions-oriented field focused on data analysis, interdisciplinary collaboration, and impactful results. It emphasizes keeping key stakeholders involved throughout every stage of a project, working with large datasets, and leveraging data visualization techniques to drive insights. The analytical and results-based tenets of Population Health extend far beyond healthcare and can be applied to virtually any business or enterprise. 
          <br/>
          <br/>
          Through Population Health, I built a strong foundation in data science and developed a people-centered mindset, a quality my previous employers have valued. My studies focused specifically on Health Technology, which included studying accessible design, the development of tech for improved health outcomes, and the systems behind the health technologies we use today.          <br/>
          <br/>
          Meanwhile, my Computer Science degree has given me deep technical skills, with a focus on full-stack software development. Together, these two areas of study allow me to build meaningful, user-driven solutions grounded in both technology and human impact.
          </p>
        </DropdownSection>
        <DropdownSection title="Skills & Tech">
          <ul className="font-quicksand columns-2 gap-2 list-disc list-inside p-2">
            <li>Java</li>
            <li>Python</li>
            <li>C#</li>
            <li>.Net</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>TailwindCSS</li>
            <li>SQL</li>
            <li>Software Development</li>
            <li>Data Analysis</li>
            <li>Object Oriented Programming</li>
            <li>Full Stack Development</li>
            <li>WinForms</li>
            <li>Git</li>
            <li>AI Concepts & Development</li>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Project Management</li>
            <li>Jira</li>
            <li>Bitbucket</li>
          </ul>

        </DropdownSection>
        <DropdownSection title="Relevant Coursework">
          <ul className="list-disc list-inside space-y-2">
            <li>Data Structures & Algorithms</li>
            <li>Biostatistics & R Programming</li>
            <li>Accessible Health Tech Design</li>
          </ul>
        </DropdownSection>
        <DropdownSection title="Experience">
          <ul className="text-xl list-disc list-inside space-y-6">
            <li ><strong>COCC Software Engineering Intern:</strong>
              <ul className="text-lg list-none list-inside space-y-2 pl-4">
                  <li>◦ <span className="ml-4">Participated on a team of 8 developers in an Agile/Scrum environment</span></li>
                  <li>◦ <span className="ml-4"> Facilitated and led meetings in an interdepartmental team to create promotional materials</span> </li>
                  <li>◦ <span className="ml-4">Scraped 60,000+ points of data from the file system to create and then analyze an easily readable dashboard from the scraped data to facilitate company-wide package creation and modification</span></li>
                  <li>◦ <span className="ml-4">Developed internal tools to automate a 100-hour process of scraping and creating the dashboard into a click</span></li>
                  <li>◦ <span className="ml-4">Produced packages to help expedite the creation and updating of apps and clear storage from the cloud</span></li>
              </ul>
            </li>
            <li><strong>Peer Tutor:</strong> 
              <ul className="text-lg list-none list-inside space-y-2 pl-4">
                <li>◦ <span className="ml-4">Tutors groups of peers in biostatistics, R, Java, computer science engineering, data structures and algorithms</span></li>
                <li>◦ <span className="ml-4">Collaborates with professors to grade 100+ students/semester and ensure student success</span></li>
              </ul>
            </li>
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
              <strong>Accountability & Adaptability: </strong> I take ownership of my work, embrace constructive criticism, and quickly adjust to new tools, teams, or goals.
            </li>
            <li>
              <strong>Curious & Quick to Learn:</strong> My former supervisor called me a “sponge for knowledge” who asks good questions and quickly absorbs information.
            </li>
            <li>
              <strong>Collaboration:</strong> In team environments, I collaborate through active listening and adaptability.
            </li>
            <li>
              <strong>Team Building:</strong> By understanding how colleagues work individually and with others, I successfully create and support teams in a collaborative environment.
            </li>
            <li>
              <strong>Big Picture Thinking:</strong> I can focus on how my work fits into the broader mission or user experience.
            </li>
            <li>
              <strong>Attention to Detail:</strong> Productivity and pace do not prevent me from catching potential problems.
            </li>
            <li>
              <strong>Technical Communication:</strong> I am confident in explaining complex technical concepts to beginners, stakeholders, and non-technical partners.
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
              <strong>Fellowship Chair, Phi Sigma Pi Honor Fraternity:</strong> Planned and led chapter bonding events to promote connection and inclusivity. Fostered a strong sense of community through award-winning creative programming and thoughtful leadership.
            </li>
            <li>
              <strong>Community Outreach Director, Lehigh Community Growers Club:</strong> Organized volunteer events and educational programs focused on sustainable agriculture and food equity. Built connections between students and local community gardens through hands-on service.
            </li>
            <li>
              <strong>Founder & President, Lehigh Paranormal Club:</strong> Founded and led a student organization exploring folklore, culture, history, and scientific curiosity. Grew membership to nearly 300 students, hosted campus events, led field outings and built a space for interdisciplinary connection and conversation.
            </li>
          </ul>
        </DropdownSection>
        <DropdownSection title="Who Am I?">
          <p>
            I’m the kind of person who’s always thinking a few steps ahead because I genuinely care:
            about people, about outcomes, about making sure things feel solid and supported. 
            I take comfort in clarity and offer it to others whenever I can. 
            I like knowing what the plan is and I love being part of the team that builds it. 
            That being said, I am not afraid of the unknown and like to take on new, unfamiliar projects, and run with them.
            <br/>
            <br/>
            I’m energized by working with people: collaborating, problem-solving, and creating an environment where everyone feels comfortable showing up as themselves. I pay attention to what makes each person tick, and I enjoy finding ways to support their strengths. I naturally tune in to group dynamics and do my part to keep things running smoothly. When challenges come up, I try to bring steadiness and clarity, helping the team stay focused and connected.
            <br/>
            <br/>
            At my core, I’m dependable and people-oriented, but I’m also quietly competitive with myself. I want to do well, to improve, and to keep things moving forward. I believe that with the right energy and the right team, anything can be meaningful and joyful.
            <br/>
            <br/>
            I won’t always be the loudest in the room, but I’ll be the most invested. I lead my life with loyalty, empathy, and a deep sense of responsibility to people, to the process, and to possibility.
          </p>
        </DropdownSection>
      </div>
    </>
  );
}