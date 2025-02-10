import FigmaEmbed from "../components/figmaEmbed";
import Navbar from "../components/navbar";
import ProjectCardWithPopup from "../components/projectCard";
import flexsave from "../../../public/images/flexsave.png";

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
          name="Flex Save"
          image={flexsave}
          category="Design"
          description="FlexSave is a modern coupon-swiping app inspired by the swipe feature of popular dating apps like Tinder. Designed with Gen Z in mind, the app delivers a fun and intuitive way to discover and redeem discounts. The swipe interaction allows users to quickly browse through deals, making the process engaging and seamless. The minimalist layout ensures clarity, while large, bold visuals highlight the deals, with clear call-to-action buttons driving user engagement.

The app’s vibrant color scheme was specifically chosen to resonate with its young, trend-savvy target audience. By combining visually striking elements with a user-centric interface, FlexSave provides a dynamic and memorable shopping experience, turning coupon hunting into an exciting activity that encourages frequent interaction."
        >
          <FigmaEmbed
            src={
              "https://embed.figma.com/proto/4J7XU2lA196FYV0M3KGWCY/Flex-save?page-id=0%3A1&node-id=1-732&p=f&viewport=882%2C591%2C0.19&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A732&embed-host=share"
            }
          />
        </ProjectCardWithPopup>
        <ProjectCardWithPopup
          name="Flex Save"
          image={flexsave}
          category="Design"
          description="This is a description of the awesome project. It can be quite long and detailed, showing all the relevant details."
        >
          <FigmaEmbed
            src={
              "https://embed.figma.com/proto/4J7XU2lA196FYV0M3KGWCY/Flex-save?page-id=0%3A1&node-id=1-732&p=f&viewport=882%2C591%2C0.19&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A732&embed-host=share"
            }
          />
        </ProjectCardWithPopup>
      </section>
    </main>
  );
}
