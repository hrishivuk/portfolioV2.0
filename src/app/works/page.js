import FigmaEmbed from "../components/figmaEmbed";
import Navbar from "../components/navbar";
import ProjectCardWithPopup from "../components/projectCard";
import flexsave from "../../../public/images/flexsave.png";
import Brightspace from "../../../public/images/Brightspace.png";

export default function Works() {
  const projects = [
    {
      name: "Doctor Appointment",
      image: "/images/doctor-appointment.png",
      category: "Design",
    },
    {
      name: "E-commerce App",
      image: "/images/ecommerce.png",
      category: "Development",
    },
  ];
  return (
    <main>
      <Navbar />
      <section className="grid grid-cols-3 gap-[15px] max-w-[1200px] w-full mt-[15px] mx-auto">
        <ProjectCardWithPopup
          name="Brightspace Pulse - Growth Section"
          image={Brightspace}
          category="Design"
          description="Enhancing the Brightspace Pulse app with a new Growth section for career development."
        >
          <div>
            <p>
              <span className="font-semibold">Course:</span> MSc in Creative
              Digital Media & UX
            </p>
            <p>
              <span className="font-semibold">Module:</span> Production &
              Prototyping
            </p>
            <p>
              <span className="font-semibold">Project Type:</span> UX/UI
              Enhancement & Feature Addition
            </p>
            <p>
              <span className="font-semibold">Tools Used:</span> Figma, Adobe
              XD, Miro
            </p>
          </div>
          <FigmaEmbed src="https://embed.figma.com/proto/dtWLgBeecDk3lt71OLWxIq/Pulse---Paco%2C-Hrishi%2C-Jacob?page-id=0%3A1&node-id=179-2961&p=f&viewport=5%2C-469%2C0.05&scaling=scale-down&content-scaling=fixed&starting-point-node-id=179%3A2961&embed-host=share" />

          <h2 className="font-semibold text-xl mt-4">Project Overview</h2>
          <p>
            This project involved modifying the existing{" "}
            <strong>Brightspace Pulse</strong> mobile app, a learning management
            system widely used in universities, by adding a new section called{" "}
            <strong>Growth</strong>. The enhancement aimed to provide students
            with essential career development tools integrated within the
            learning platform, ensuring a seamless transition from education to
            employment.
          </p>

          <h2 className="font-semibold text-xl mt-4">
            New Features Introduced in the Growth Section
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Portfolio Builder:</strong> Allows students to showcase
              their academic projects, certifications, and skills in a
              structured format. Includes an intuitive drag-and-drop interface
              to add media, documents, and links. Features customizable
              templates for a polished presentation.
            </li>
            <li>
              <strong>CV Builder:</strong> A smart resume builder that
              auto-formats CVs based on student input. Includes
              industry-specific templates with guidelines for writing impactful
              content. Integrates directly with the Portfolio section, allowing
              seamless linking of projects.
            </li>
            <li>
              <strong>Network & Career Opportunities:</strong> A professional
              networking hub within the app to connect students with peers,
              alumni, and potential employers. Features job postings,
              internships, and career fairs curated based on the student’s field
              of study. Provides a mentorship system where students can seek
              guidance from industry professionals.
            </li>
          </ul>

          <h2 className="font-semibold text-xl mt-4">
            Design & Development Process
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>User Research:</strong> Conducted surveys and interviews
              with students to identify career-related pain points in the
              existing app.
            </li>
            <li>
              <strong>Wireframing & Prototyping:</strong> Created low-fidelity
              wireframes to establish the layout, followed by high-fidelity
              prototypes with interactive elements.
            </li>
            <li>
              <strong>UI/UX Design:</strong> Focused on a minimalistic,
              intuitive interface with seamless navigation between academic and
              career sections.
            </li>
            <li>
              <strong>User Testing & Iteration:</strong> Gathered feedback
              through usability testing and refined features for improved
              accessibility and engagement.
            </li>
          </ul>

          <h2 className="font-semibold text-xl mt-4">Final Outcome</h2>
          <p>
            The redesigned <strong>Brightspace Pulse - Growth Section</strong>{" "}
            bridges the gap between academic learning and professional growth,
            equipping students with essential tools to build their careers while
            still in university. The added features enhance user engagement,
            providing a holistic student experience.
          </p>
        </ProjectCardWithPopup>

        <ProjectCardWithPopup
          name="Flex Save"
          image={flexsave}
          category="Design"
          description=""
        >
          <div>
            <span className="font-semibold">Course: </span>
            MSc in Creative Digital Media & UX
          </div>
          <div>
            <span className="font-semibold">Module: </span>
            Production & Prototyping
          </div>
          <div>
            <span className="font-semibold">Project Type: </span>
            UX/UI Design & Feature Development
          </div>
          <div>
            <span className="font-semibold">Tools Used: </span>
            Figma, Adobe XD, Miro
          </div>

          <FigmaEmbed
            src={
              "https://embed.figma.com/proto/4J7XU2lA196FYV0M3KGWCY/Flex-save?page-id=0%3A1&node-id=1-732&p=f&viewport=882%2C591%2C0.19&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A732&embed-host=share"
            }
          />

          <div>
            <span className="font-semibold text-xl">Project Overview</span>
            <p>
              Flex Save is a modern coupon-swiping app inspired by the swipe
              feature of dating apps like Tinder and Bumble. Designed for Gen Z,
              it provides a fun and intuitive way to discover, save, and manage
              coupons.
            </p>
          </div>

          <div>
            <span className="font-semibold text-xl">Key Features</span>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-semibold">Swipe to Save or Remove:</span>{" "}
                Users can swipe right to save a coupon or left to remove it.
              </li>
              <li>
                <span className="font-semibold">Share with Friends:</span>{" "}
                Coupons can be easily shared with friends through the app.
              </li>
              <li>
                <span className="font-semibold">Saved Coupons:</span> A
                dedicated section where users can view and organize their saved
                deals.
              </li>
              <li>
                <span className="font-semibold">Digital Wallet:</span> A unique
                feature that allows users to store digital coupons and even
                convert physical coupons into digital format.
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-xl">
              Design & Development Process
            </span>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-semibold">User Research:</span> Conducted
                surveys with Gen Z users to understand their coupon usage
                behavior.
              </li>
              <li>
                <span className="font-semibold">
                  Prototyping & Wireframing:
                </span>{" "}
                Developed interactive wireframes to test usability.
              </li>
              <li>
                <span className="font-semibold">UI/UX Design:</span> Designed an
                engaging and visually appealing interface tailored to young
                users.
              </li>
              <li>
                <span className="font-semibold">User Testing & Iteration:</span>{" "}
                Refined features based on user feedback to enhance engagement.
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-xl">Final Outcome</span>
            <p>
              Flex Save revolutionizes the way Gen Z interacts with coupons,
              making the experience engaging and effortless. The intuitive
              swipe-based design, along with the digital wallet functionality,
              enhances user convenience and boosts overall coupon utilization.
            </p>
          </div>
        </ProjectCardWithPopup>
      </section>
    </main>
  );
}
