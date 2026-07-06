import Hero from "@/components/sections/Hero";
import HeroStats from "@/components/sections/HeroStats";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Courses from "@/components/sections/Courses";
import IndustryCourses from "@/components/sections/IndustryCourses";
import LearningJourney from "@/components/sections/LearningJourney";
import Scholarship from "@/components/sections/Scholarship";
import DemoClass from "@/components/sections/DemoClass";
import Facilities from "@/components/sections/Facilities";
import Faculty from "@/components/sections/Faculty";
import StudentSuccess from "@/components/sections/StudentSuccess";
import LaptopProgram from "@/components/sections/LaptopProgram";
import Certificate from "@/components/sections/Certificate";
import AdmissionForm from "@/components/sections/AdmissionForm";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import FinalCTA from "@/components/sections/FinalCTA";

/**
 * Home assembles every section in the same order as the original
 * single-page design. Each section is an independent, reusable
 * component under components/sections.
 */
const Home = () => (
  <>
    <Hero />
    <HeroStats />
    <About />
    <WhyChooseUs />
    <Courses />
    <IndustryCourses />
    <LearningJourney />
    <Scholarship />
    <DemoClass />
    <Facilities />
    <Faculty />
    <StudentSuccess />
    <LaptopProgram />
    <Certificate />
    <AdmissionForm />
    <Gallery />
    <Testimonials />
    <FAQSection />
    <ContactSection />
    <FinalCTA />
  </>
);

export default Home;
