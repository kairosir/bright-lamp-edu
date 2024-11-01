import SimpleHero from "../components/SimpleHero";
import Features from "../components/Features";
import About from "../components/About";
import SimpleGallery from "../components/SimpleGallery";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SimpleHero />
      <Features />
      <About />
      <SimpleGallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;